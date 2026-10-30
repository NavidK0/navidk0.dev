export const profile = {
  name: "Navid Kabir",
  handle: "navidk0",
  role: "Co-founder & CEO at N-GON · engineer · composer",
  tagline: "Code, music, video games, and creativity.",
  blurb:
    "I build things that feel alive: shipping games, composing music, and writing software. Mostly, I just love making things.",
  email: "navid.kabir@ngon.gg",
};

/**
 * Statuses track what N-GON publishes at ngon.gg, so a title can never read as
 * shipped here while the studio still has it in development.
 *
 * "Archived" and "Rest in peace" are both endings, and the difference is the
 * point: Archived means it ran, ended deliberately, and there is something left
 * to read. Rest in peace means it died unfinished.
 */
export type Game = {
  title: string;
  blurb: string;
  status:
    | "Live"
      | "Released"
    | "Coming soon"
    | "In development"
    | "Archived"
    | "Rest in peace";
  tag: string;
  /** Release date or label, exactly as the studio publishes it. */
  when?: string;
  href?: string;
  accent: "teal" | "coral" | "violet" | "gold" | "bone";
};

export const games: Game[] = [
  {
    title: "Fresh Prints",
    blurb:
      "A daily guessing game about art and algorithms. Everyone gets the same images and video. For each one, guess whether AI or a human made it, then guess its prompt or title.",
    status: "In development",
    tag: "iOS & Android",
    href: "https://freshprints.gg",
    accent: "gold",
  },
  {
    title: "Rotoscape",
    blurb:
      "A minimalist action puzzler where you rotate shapes around yourself to avoid touching them. Think of it as reverse horseshoe.",
    status: "In development",
    tag: "Steam",
    when: "TBA",
    href: "https://store.steampowered.com/app/663940/Rotoscape/",
    accent: "teal",
  },
  {
    title: "Space Pulse",
    blurb:
      "A rhythm game set in space with retro paddle-and-beat mechanics, inspired by BIT.TRIP FLUX. It's like Rhythmic Pong in space!",
    status: "In development",
    tag: "Steam",
    when: "TBA",
    accent: "coral",
  },
  {
    title: "Nords and Fjords",
    blurb:
      'A short "runner" roguelite where you travel down a very long fjord toward the mystery waiting at the end.',
    status: "Released",
    tag: "itch.io",
    when: "Aug 6, 2018",
    href: "https://ngoninteractive.itch.io/nords-and-fjords",
    accent: "bone",
  },
  {
    title: "Tableside",
    blurb:
      "A text-based RPG with an AI narrator in place of a human Dungeon Master. We built it over one long weekend and kept it running for fourteen months. It wasn't viable, since the technology wasn't quite good enough yet for what we wanted.",
    status: "Archived",
    tag: "Experiment",
    when: "May 2025 to July 2026",
    href: "https://tableside.gg",
    accent: "violet",
  },
  {
    title: "N-GON Interactive",
    blurb:
      "The independent game studio I co-founded. We keep creative control of our games and take the time to make them good.",
    status: "Live",
    tag: "Studio",
    href: "https://ngon.gg",
    accent: "teal",
  },
  {
    title: "Exigence · Chronoflux",
    blurb:
      "Two older projects that never got finished.",
    status: "Rest in peace",
    tag: "Archive",
    accent: "bone",
  },
];

/**
 * Open source work, rendered as a dense list rather than cards so it reads as
 * supporting evidence and does not compete with the games above.
 *
 * Deliberately no stars, forks, or any popularity figure: several of these are
 * used inside other companies and that usage is not ours to advertise.
 */
export type Repo = {
  name: string;
  blurb: string;
  lang: "C#" | "Java" | "TypeScript";
  href: string;
  archived?: boolean;
};

export const repos: Repo[] = [
  {
    name: "Carbon",
    blurb:
      "I was lead dev. After the Bukkit DMCA, five of us backported 1.8 onto protocol-hacked 1.7.10 servers to keep Minecraft SMP servers running.",
    lang: "Java",
    href: "https://github.com/NavidK0/Carbon",
    archived: true,
  },
  {
    name: "SimpleGraphQL for Unity",
    blurb:
      "A GraphQL client for Unity. Supports queries, mutations, and subscriptions, written in code or loaded from .graphql files. Other companies ended up using it in production.",
    lang: "C#",
    href: "https://github.com/NavidK0/SimpleGraphQL-For-Unity",
    archived: true,
  },
  {
    name: "Unity VFX Graph (built-in)",
    blurb:
      "Unity's VFX Graph, backported to keep it working on the built-in render pipeline after Unity dropped support.",
    lang: "C#",
    href: "https://github.com/NavidK0/unity-visualeffectgraph-builtin",
    archived: true,
  },
  {
    name: "VectorForce",
    blurb:
      "An old Minecraft racing minigame I made around 2014. Tracks were procedurally generated from WorldEdit schematics.",
    lang: "Java",
    href: "https://github.com/NavidK0/VectorForce-MC",
    archived: true,
  },
  {
    name: "Fish's Grand Adventure",
    blurb:
      "A private Lethal Company mod for my friend group. Every moon rolls a random event.",
    lang: "C#",
    href: "https://github.com/NavidK0/FishsGrandAdventure",
  },
  {
    name: "Clippy",
    blurb:
      "A fork of clippy.js that puts Clippy, Merlin, and Bonzi on any webpage, with sounds.",
    lang: "TypeScript",
    href: "https://github.com/NavidK0/clippy",
  },
  {
    name: "Comrade Pet Blocker",
    blurb:
      "Discord bot that blocks dastardly unwanted images (and pets) by matching uploads and custom emoji against a banned folder.",
    lang: "TypeScript",
    href: "https://github.com/NavidK0/comrade-pet-blocker",
  },
  {
    name: "ProdScript",
    blurb:
      "Connects your LLM directly to your production server over SFTP. The best way to build.",
    lang: "TypeScript",
    href: "https://github.com/NavidK0/prodscript",
  },
  {
    name: "binpacking",
    blurb:
      "A TypeScript rewrite of binpackingjs. Packs boxes into containers in 2D and 3D.",
    lang: "TypeScript",
    href: "https://github.com/NavidK0/binpacking",
  },
];

export type Social = {
  label: string;
  href: string;
  icon: string;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/NavidK0", icon: "/images/github.svg" },
  { label: "SoundCloud", href: "https://soundcloud.com/navidk0", icon: "/images/soundcloud.svg" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCcdPMZe5RvjzTVzZs_zmmVQ", icon: "/images/youtube.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/navidk0/", icon: "/images/linkedin.svg" },
  { label: "Twitter", href: "https://twitter.com/NavidK0", icon: "/images/twitter.svg" },
  { label: "Instagram", href: "https://www.instagram.com/navidk0/", icon: "/images/instagram.svg" },
];

export const nav = [
  { label: "work", href: "#work" },
  { label: "code", href: "#code" },
  { label: "music", href: "#music" },
  { label: "about", href: "#about" },
];
