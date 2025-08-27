import Link from "next/link";
import { getPublishedEssays, formatDate } from "@/lib/essays";
import DarkModeToggle from '../components/DarkModeToggle';
import HighlightedText from '../components/HighlightedText';

export default function HomePage() {
  const essays = getPublishedEssays();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          <HighlightedText type="box" color="blue">
            Essays & Thoughts
          </HighlightedText>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of thoughts on writing, learning, productivity, and life.
          Written to clarify thinking and share ideas.
        </p>
        <div className="mt-4">
          <DarkModeToggle />
        </div>
      </header>

      <main className="space-y-8">
        {essays.map((essay) => (
          <article
            key={essay.id}
            className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-8 last:pb-0"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <time>{formatDate(essay.publishedDate)}</time>
                <span>•</span>
                <span>{essay.readingTime} min read</span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight">
                <Link
                  href={`/essays/${essay.slug}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {essay.title}
                </Link>
              </h2>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {essay.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {essay.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/essays/${essay.slug}`}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </main>

      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          Subscribe to new essays via{" "}
          <Link href="/rss" className="text-blue-600 dark:text-blue-400 hover:underline">
            RSS
          </Link>{" "}
          or follow me on{" "}
          <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
            other platforms
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}