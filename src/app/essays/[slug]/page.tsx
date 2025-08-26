import Link from "next/link";
import { notFound } from "next/navigation";
import { getEssay, getPublishedEssays, formatDate } from "@/lib/essays";
import ReactMarkdown from "react-markdown";
import type { PageProps } from "next";

// Helper to estimate reading time (words/200 rounded up)
function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// For static generation: return all slugs
export async function generateStaticParams() {
  const essays = getPublishedEssays();
  return essays.map((essay) => ({ slug: essay.slug }));
}

// Page component
export default async function EssayPage(props: PageProps<"/essays/[slug]">) {
  const { slug } = await props.params;
  const essay = getEssay(slug);

  if (!essay) {
    notFound();
  }

  const readingTime = estimateReadingTime(essay.content);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Navigation */}
      <nav className="mb-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Home
        </Link>
      </nav>
      {/* Essay Header */}
      <header className="mb-12">
        <div className="mb-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <time>{formatDate(essay.publishedDate)}</time>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {essay.title}
          </h1>

          <div className="flex gap-2">
            {essay.tags && essay.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Essay Content */}
      <article className="prose prose-gray dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4 first:mt-0">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold tracking-tight mt-6 mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-base leading-7 mb-4 text-foreground">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 mb-4 space-y-2">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-base leading-7 text-foreground">
                {children}
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-primary/20 pl-4 italic my-6 text-muted-foreground">
                {children}
              </blockquote>
            ),
            code: ({ children }) => (
              <code className="bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            ),
          }}
        >
          {essay.content}
        </ReactMarkdown>
      </article>

      {/* Essay Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <p>Thanks for reading!</p>
          </div>

          <div className="flex gap-4 text-sm">
            <Link
              href="/"
              className="text-primary hover:underline"
            >
              More essays
            </Link>
            <Link
              href="/about"
              className="text-primary hover:underline"
            >
              About me
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
