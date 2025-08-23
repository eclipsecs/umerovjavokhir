import Link from "next/link";
import { getPublishedEssays, formatDate } from "@/lib/essays";
import HighlightedText from "../components/HighlightedText";
import { RoughNotation } from "react-rough-notation";
import React from "react";


export default function HomePage() {
  const essays = getPublishedEssays();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          <HighlightedText type="box" color="#f59e0b">
            Essays & Thoughts
          </HighlightedText>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of thoughts on writing, learning, productivity, and life.
          Written to clarify thinking and share ideas.
        </p>
      </header>

      {/* Essay List */}
      <main className="space-y-8">
        {essays.map((essay) => (
          <article
            key={essay.id}
            className="border-b border-border last:border-b-0 pb-8 last:pb-0"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time>{formatDate(essay.publishedAt)}</time>
                <span>•</span>
                <span>{essay.readingTime} min read</span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight">
                <Link
                  href={`/essays/${essay.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {essay.title}
                </Link>
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {essay.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {essay.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/essays/${essay.slug}`}
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>
          Subscribe to new essays via{" "}
          <Link href="/rss" className="text-primary hover:underline">
            RSS
          </Link>{" "}
          or follow me on{" "}
          <Link href="/about" className="text-primary hover:underline">
            other platforms
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
