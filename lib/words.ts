import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const WORDS_DIR = path.join(process.cwd(), "content", "words");

export type WordMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

function str(value: unknown, fallback: string): string {
  return typeof value === "string" ? value : fallback;
}

function metaFromFile(file: string): WordMeta {
  const slug = file.replace(/\.mdx$/, "");
  const { data } = matter(fs.readFileSync(path.join(WORDS_DIR, file), "utf8"));
  return {
    slug,
    title: str(data.title, slug),
    date: str(data.date, ""),
    summary: str(data.summary, ""),
  };
}

export function getAllWords(): WordMeta[] {
  if (!fs.existsSync(WORDS_DIR)) return [];
  return fs
    .readdirSync(WORDS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(metaFromFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getWord(slug: string): { meta: WordMeta; content: string } | null {
  const file = path.join(WORDS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    meta: {
      slug,
      title: str(data.title, slug),
      date: str(data.date, ""),
      summary: str(data.summary, ""),
    },
    content,
  };
}
