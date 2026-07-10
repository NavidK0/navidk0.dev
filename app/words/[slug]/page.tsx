import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllWords, getWord } from "@/lib/words";
import Footer from "@/components/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllWords().map((word) => ({ slug: word.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const word = getWord(slug);
  if (!word) return {};
  return {
    title: `${word.meta.title} · Navid Kabir`,
    description: word.meta.summary,
  };
}

export default async function WordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const word = getWord(slug);
  if (!word) notFound();

  return (
    <>
      <main className="mx-auto min-h-[70vh] max-w-2xl px-6 py-20 sm:py-28">
        <Link
          href="/#words"
          className="font-mono text-xs text-muted transition-colors hover:text-jade"
        >
          ← words
        </Link>
        <header className="mt-10">
          <p className="font-mono text-xs text-jade">{word.meta.date}</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {word.meta.title}
          </h1>
        </header>
        <article className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-a:text-jade prose-a:no-underline hover:prose-a:underline">
          <MDXRemote
            source={word.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
