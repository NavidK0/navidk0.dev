import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

// Generate the image at build time (required under `output: export`).
export const dynamic = "force-static";
export const alt = "Navid Kabir: code, music & games";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#060e0e",
          color: "#e9f1f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 10,
            color: "#12d9c6",
            textTransform: "uppercase",
          }}
        >
          navidk0
        </div>
        <div style={{ display: "flex", fontSize: 132, fontWeight: 800, marginTop: 20 }}>
          <span>Navid</span>
          <span style={{ color: "#12d9c6" }}>.</span>
          <span>Kabir</span>
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#8fa3a1", marginTop: 24 }}>
          {profile.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 52,
            height: 5,
            width: 240,
            background: "#12d9c6",
            borderRadius: 4,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#8fa3a1",
            marginTop: 36,
            fontFamily: "monospace",
          }}
        >
          {profile.role}
        </div>
      </div>
    ),
    { ...size },
  );
}
