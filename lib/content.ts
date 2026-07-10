export const profile = {
  name: "Navid Kabir",
  handle: "navidk0",
  role: "Software engineer · game dev · composer",
  tagline: "Code, music, and video games are the key to something.",
  blurb:
    "I build things that feel alive: shipping games, composing music, and writing software. Some of it survives, some of it doesn't. Mostly, I just love making things.",
  email: "navid.kabir@ngon.gg",
};

export type Game = {
  title: string;
  blurb: string;
  status: "Live" | "Revived" | "Coming soon" | "Rest in peace";
  tag: string;
  href?: string;
  accent: "teal" | "coral" | "violet" | "gold";
};

export const games: Game[] = [
  {
    title: "Rotoscape",
    blurb:
      "A game about rotating shapes. Twist the ring, thread the gap, don't clip. Still the one I'm proudest of, and the reason the shapes above spin.",
    status: "Live",
    tag: "Steam",
    href: "https://store.steampowered.com/app/663940/Rotoscape/",
    accent: "teal",
  },
  {
    title: "Fresh Prints",
    blurb:
      "AI or not? Figure it out. A fast social game about telling what's real from what a machine made. The closest to done I've been in ages, and the one I'm most excited about.",
    status: "Coming soon",
    tag: "N-GON",
    href: "https://freshprints.gg",
    accent: "coral",
  },
  {
    title: "N-GON Interactive",
    blurb:
      "The studio the games live under. Small, scrappy, and stubbornly independent.",
    status: "Live",
    tag: "Studio",
    href: "https://ngon.gg",
    accent: "violet",
  },
  {
    title: "Exigence · Chronoflux",
    blurb:
      "Ambitious, unfinished, and gone. Every dead project taught me something the shipped ones couldn't.",
    status: "Rest in peace",
    tag: "Archive",
    accent: "gold",
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
  { label: "sound", href: "#sound" },
  { label: "words", href: "#words" },
  { label: "about", href: "#about" },
];
