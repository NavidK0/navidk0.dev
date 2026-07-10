"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

// Drop a track at public/audio/hero.mp3 (same-origin, so the Web Audio API can
// analyse it) and the controls below light up and drive the waveform.
const TRACK_SRC = "/audio/hero.mp3";
const JADE = "#12d9c6";
const DEFAULT_VOLUME = 0.5;
// Waveform peak height as a fraction of the hero height. Tweak to taste.
const AMPLITUDE = 0.24;
// How hard the live audio drives the wave, and the ceiling on that response.
// LIVE_MAX > 1 lets loud passages swing past the idle range.
const LIVE_GAIN = 5;
const LIVE_MAX = 1.4;
// Envelope follower on the wave height: rise fast, fall slow, so hard hits
// swell and decay smoothly instead of strobing for a single frame.
const ATTACK = 0.3;
const RELEASE = 0.06;

function SpeakerIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor" />
      {muted ? (
        <path
          d="M15.5 9.5 21 15M21 9.5 15.5 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M15.5 9.5a4 4 0 0 1 0 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M18 7.5a7 7 0 0 1 0 9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export default function AudioVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const dataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const playingRef = useRef(false);
  const volumeRef = useRef(DEFAULT_VOLUME);
  const mutedRef = useRef(false);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [muted, setMuted] = useState(false);

  // Prepare the audio element and detect whether a real track is available.
  useEffect(() => {
    const audio = new Audio();
    audio.src = TRACK_SRC;
    audio.loop = true;
    audio.preload = "metadata";
    // No crossOrigin here: the track is same-origin (/public). Setting it to
    // "anonymous" makes some browsers treat the media source as tainted and
    // feed the analyser silence (a dead-flat waveform), even though it plays.
    // If the audio ever moves to a different origin, re-add it AND serve the
    // file with an Access-Control-Allow-Origin header.
    const ok = () => setReady(true);
    const fail = () => setReady(false);
    audio.addEventListener("loadedmetadata", ok);
    audio.addEventListener("canplay", ok);
    audio.addEventListener("error", fail);
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", ok);
      audio.removeEventListener("canplay", ok);
      audio.removeEventListener("error", fail);
    };
  }, []);

  // Render loop: a synthetic waveform when idle, the real signal when playing.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const g = canvas.getContext("2d");
    if (!g) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    const t0 = performance.now();
    const pointer = { x: -9999, active: false };

    const size = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();

    // Control points sampled across the width, temporally smoothed, then drawn
    // as an interpolated curve. Keeps the live signal fluid instead of jagged.
    const N = 72;
    const smooth = new Float32Array(N);
    const px = new Float32Array(N);
    const disp = new Float32Array(N);
    let energyEnv = 0;

    // Layered sine waves for the idle state: reads as sound without any audio.
    const idle = (nx: number, time: number) =>
      Math.sin(nx * Math.PI * 3 + time * 1.1) * 0.5 +
      Math.sin(nx * Math.PI * 6.2 - time * 1.7) * 0.3 +
      Math.sin(nx * Math.PI * 1.4 + time * 0.6) * 0.2;

    const layers = [
      { alpha: 0.9, scale: 1, width: 2 },
      { alpha: 0.32, scale: 0.66, width: 1.5 },
      { alpha: 0.16, scale: 1.3, width: 1 },
    ];

    const frame = (now: number) => {
      const time = (now - t0) / 1000;
      g.clearRect(0, 0, w, h);
      const cy = h * 0.5;

      const analyser = analyserRef.current;
      const data = dataRef.current;
      const live = playingRef.current && !!analyser && !!data;
      if (live && analyser && data) analyser.getByteTimeDomainData(data);

      let rawEnergy: number;
      if (live && data) {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          const v = (data[i] - 128) / 128;
          sum += v * v;
        }
        rawEnergy = Math.min(LIVE_MAX, Math.sqrt(sum / data.length) * LIVE_GAIN);
      } else {
        rawEnergy = reduce ? 0.12 : 0.3 + Math.sin(time * 0.8) * 0.1;
      }
      // Rise quickly, fall slowly, so transients swell and decay rather than flash.
      energyEnv += (rawEnergy - energyEnv) * (rawEnergy > energyEnv ? ATTACK : RELEASE);
      const amp = h * AMPLITUDE * energyEnv + 6;

      // Sample into smoothed control points (averaged window + eased over time).
      const k = live ? 0.22 : 0.3;
      const win = data ? Math.max(1, Math.floor(data.length / (N * 2))) : 1;
      for (let i = 0; i < N; i++) {
        const nx = i / (N - 1);
        let target: number;
        if (live && data) {
          const center = Math.floor(nx * (data.length - 1));
          let sum = 0;
          let count = 0;
          for (let j = center - win; j <= center + win; j++) {
            if (j >= 0 && j < data.length) {
              sum += (data[j] - 128) / 128;
              count++;
            }
          }
          target = count ? sum / count : 0;
        } else {
          target = idle(nx, time);
        }
        smooth[i] += (target - smooth[i]) * k;
        px[i] = nx * w;
        let d = smooth[i];
        if (pointer.active) {
          const near = Math.max(0, 1 - Math.abs(px[i] - pointer.x) / (w * 0.12));
          d *= 1 + near * 0.85;
        }
        disp[i] = d;
      }

      // Draw each layer as a smooth curve through the control points.
      for (let li = 0; li < layers.length; li++) {
        const L = layers[li];
        g.beginPath();
        g.moveTo(px[0], cy + disp[0] * amp * L.scale);
        for (let i = 1; i < N - 1; i++) {
          const y = cy + disp[i] * amp * L.scale;
          const yn = cy + disp[i + 1] * amp * L.scale;
          g.quadraticCurveTo(px[i], y, (px[i] + px[i + 1]) / 2, (y + yn) / 2);
        }
        const yl = cy + disp[N - 1] * amp * L.scale;
        g.quadraticCurveTo(px[N - 1], yl, px[N - 1], yl);
        g.globalAlpha = L.alpha;
        g.strokeStyle = JADE;
        g.lineWidth = L.width;
        g.lineJoin = "round";
        g.lineCap = "round";
        g.stroke();
      }
      g.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer.x = x;
      pointer.active = x >= 0 && x <= w && y >= 0 && y <= h;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    const onResize = () => size();

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Build the audio graph lazily on the first gesture:
  // source -> analyser -> gain -> speakers. Analyser sits before the gain so
  // the waveform reacts to the music even at low volume or when muted.
  const ensureGraph = () => {
    if (ctxRef.current || !audioRef.current) return;
    try {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new AC();
      const node = ctx.createMediaElementSource(audioRef.current);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 1024;
      const gain = ctx.createGain();
      gain.gain.value = 0; // start silent; play() fades in
      node.connect(analyser);
      analyser.connect(gain);
      gain.connect(ctx.destination);
      audioRef.current.volume = 1; // volume is controlled by the gain node
      ctxRef.current = ctx;
      analyserRef.current = analyser;
      gainRef.current = gain;
      dataRef.current = new Uint8Array(analyser.fftSize);
    } catch {
      // Web Audio unavailable: fall back to element volume.
    }
  };

  const applyGain = () => {
    const target = mutedRef.current ? 0 : volumeRef.current;
    const ctx = ctxRef.current;
    const gain = gainRef.current;
    if (ctx && gain) gain.gain.setTargetAtTime(target, ctx.currentTime, 0.03);
    else if (audioRef.current) audioRef.current.volume = target;
  };

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    ensureGraph();
    try {
      if (playingRef.current) {
        audio.pause();
        playingRef.current = false;
        setPlaying(false);
        return;
      }
      await ctxRef.current?.resume();
      await audio.play();
      playingRef.current = true;
      setPlaying(true);
      // Gentle fade-in so it never starts at full blast.
      const ctx = ctxRef.current;
      const gain = gainRef.current;
      if (ctx && gain) {
        const t = ctx.currentTime;
        const target = mutedRef.current ? 0.0001 : Math.max(0.0001, volumeRef.current);
        gain.gain.cancelScheduledValues(t);
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.linearRampToValueAtTime(target, t + 0.6);
      } else {
        audio.volume = mutedRef.current ? 0 : volumeRef.current;
      }
    } catch {
      playingRef.current = false;
      setPlaying(false);
    }
  };

  const onVolume = (e: ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    volumeRef.current = v;
    setVolume(v);
    if (v > 0 && mutedRef.current) {
      mutedRef.current = false;
      setMuted(false);
    }
    applyGain();
  };

  const toggleMute = () => {
    mutedRef.current = !mutedRef.current;
    setMuted(mutedRef.current);
    applyGain();
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 block h-full w-full"
        aria-hidden="true"
      />
      {ready && (
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-line bg-night/50 px-4 py-2 backdrop-blur-sm">
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause music" : "Play music"}
            className="flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
          >
            <span className="text-jade">{playing ? "❚❚" : "▶"}</span>
            {playing ? "now playing" : "play"}
          </button>
          <span className="h-4 w-px bg-line" aria-hidden="true" />
          <div className="group/vol relative flex items-center">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className={`flex items-center transition-colors hover:text-ink ${
                muted || volume === 0 ? "text-muted/60" : "text-muted"
              }`}
            >
              <SpeakerIcon muted={muted || volume === 0} />
            </button>
            <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 translate-y-1 pb-3 opacity-0 transition-all duration-200 group-hover/vol:pointer-events-auto group-hover/vol:translate-y-0 group-hover/vol:opacity-100 group-focus-within/vol:pointer-events-auto group-focus-within/vol:translate-y-0 group-focus-within/vol:opacity-100">
              <div className="rounded-full border border-line bg-night/85 px-3 py-2 shadow-lg shadow-black/40 backdrop-blur-md">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={onVolume}
                  aria-label="Volume"
                  className="block h-1 w-24 cursor-pointer accent-jade"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
