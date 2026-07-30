export const profile = {
  name: "Navid Kabir",
  handle: "navidk0",
  role: "Software engineer · game dev · composer",
  tagline: "Code, music, and video games are the key to something.",
  blurb:
    "I build things that feel alive: shipping games, composing music, and writing software. Some of it survives, some of it doesn't. Mostly, I just love making things.",
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
      "Spot the AI images, then guess the exact prompt that made them. A fresh set every day. Closest to done I've been in ages, and the one I'm most excited to put in people's hands.",
    status: "Coming soon",
    tag: "iOS & Android",
    when: "Very soon",
    href: "https://freshprints.gg",
    accent: "gold",
  },
  {
    title: "Rotoscape",
    blurb:
      "A game about rotating shapes around yourself without letting them touch you. Reverse horseshoe. The oldest idea I have and still the one I'm proudest of, which makes it embarrassing that it isn't out yet.",
    status: "In development",
    tag: "Steam",
    when: "TBA",
    href: "https://store.steampowered.com/app/663940/Rotoscape/",
    accent: "teal",
  },
  {
    title: "Space Pulse",
    blurb:
      "Rhythmic Pong in space. BIT.TRIP Flux got into my head and never left, so I started building my own. It sat still for a long time. It's moving again.",
    status: "In development",
    tag: "Steam",
    when: "TBA",
    accent: "coral",
  },
  {
    title: "Nords and Fjords",
    blurb:
      "A short roguelite runner down a very long fjord, toward whatever is waiting at the end. It came out in 2018 and it looks like it came out in 2018. You can still play it.",
    status: "Released",
    tag: "itch.io",
    when: "Aug 6, 2018",
    href: "https://ngoninteractive.itch.io/nords-and-fjords",
    accent: "bone",
  },
  {
    title: "Tableside",
    blurb:
      "A text RPG narrated by a model instead of a person. One turn took two models at two vendors, because the one that could write a scene couldn't say what the choices in it were. We ran it fourteen months.",
    status: "Archived",
    tag: "Experiment",
    when: "May 2025 to July 2026",
    href: "https://tableside.gg",
    accent: "violet",
  },
  {
    title: "N-GON Interactive",
    blurb:
      "The studio I co-founded, and where the projects live. It exists so the creative decisions stay ours and the work gets however long it needs to be good.",
    status: "Live",
    tag: "Studio",
    href: "https://ngon.gg",
    accent: "teal",
  },
  {
    title: "Exigence · Chronoflux",
    blurb:
      "Ambitious, unfinished, and gone. Every dead project taught me something the shipped ones couldn't.",
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
      "Lead dev. Five of us kept Minecraft SMP together through the Bukkit DMCA, backporting 1.8 onto protocol hacked 1.7.10 servers.",
    lang: "Java",
    href: "https://github.com/NavidK0/Carbon",
    archived: true,
  },
  {
    name: "SimpleGraphQL for Unity",
    blurb:
      "GraphQL client for Unity. Queries, mutations, and subscriptions, in code or from .graphql files. Ended up in production at companies I never worked for.",
    lang: "C#",
    href: "https://github.com/NavidK0/SimpleGraphQL-For-Unity",
    archived: true,
  },
  {
    name: "Unity VFX Graph (built-in)",
    blurb:
      "Unity's VFX Graph, pinned and backported so it kept working on the built-in pipeline after Unity dropped it.",
    lang: "C#",
    href: "https://github.com/NavidK0/unity-visualeffectgraph-builtin",
    archived: true,
  },
  {
    name: "VectorForce",
    blurb:
      "A Minecraft racing minigame that stitched procedurally generated tracks from WorldEdit schematics. Held together with hacks.",
    lang: "Java",
    href: "https://github.com/NavidK0/VectorForce-MC",
    archived: true,
  },
  {
    name: "Fish's Grand Adventure",
    blurb:
      "Lethal Company mod for my friend group. Every moon rolls a random event. Some good, some awful.",
    lang: "C#",
    href: "https://github.com/NavidK0/FishsGrandAdventure",
  },
  {
    name: "Clippy",
    blurb:
      "Fork of a fork of clippy.js. Puts Clippy, Merlin, and Bonzi on any webpage, sounds included.",
    lang: "TypeScript",
    href: "https://github.com/NavidK0/clippy",
  },
  {
    name: "Comrade Pet Blocker",
    blurb:
      "Discord bot that matches uploads and custom emoji against a banned folder, then deletes them. Mostly pets.",
    lang: "TypeScript",
    href: "https://github.com/NavidK0/comrade-pet-blocker",
  },
  {
    name: "ProdScript",
    blurb:
      "Connects your LLM straight to your production server over SFTP. No build step, no staging, no rollback.",
    lang: "TypeScript",
    href: "https://github.com/NavidK0/prodscript",
  },
  {
    name: "binpacking",
    blurb:
      "Fork of binpackingjs, rewritten in TypeScript. Fits boxes into containers, 2D and 3D.",
    lang: "TypeScript",
    href: "https://github.com/NavidK0/binpacking",
  },
  {
    name: "nx-aws",
    blurb:
      "Fork of bojanbass/nx-aws. Nx remote build cache backed by an S3 bucket.",
    lang: "TypeScript",
    href: "https://github.com/NavidK0/nx-aws",
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
  { label: "sound", href: "#sound" },
  { label: "words", href: "#words" },
  { label: "about", href: "#about" },
];
