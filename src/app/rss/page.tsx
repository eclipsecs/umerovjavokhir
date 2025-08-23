import Link from "next/link";

export default function RSSPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Navigation */}
      <nav className="mb-8">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to essays
        </Link>
      </nav>

      {/* RSS Content */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">RSS Feed</h1>

        <div className="prose prose-gray dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-6">
            Subscribe to get notified when new essays are published.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
            Subscribe Options
          </h2>

          <div className="bg-secondary p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3">RSS Feed URL</h3>
            <div className="bg-background p-3 rounded border font-mono text-sm">
              https://your-domain.com/rss.xml
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Copy this URL into your favorite RSS reader
            </p>
          </div>

          <h3 className="text-xl font-semibold tracking-tight mt-6 mb-3">
            Recommended RSS Readers
          </h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-base leading-7">
              <strong>Feedly:</strong> Popular web-based RSS reader
            </li>
            <li className="text-base leading-7">
              <strong>Inoreader:</strong> Feature-rich RSS service
            </li>
            <li className="text-base leading-7">
              <strong>NetNewsWire:</strong> Great macOS and iOS app
            </li>
            <li className="text-base leading-7">
              <strong>Pocket Casts:</strong> If you prefer audio content
            </li>
          </ul>

          <p className="text-base leading-7 mb-4">
            RSS feeds are a great way to stay updated without the distractions
            of social media. You control what you read and when you read it.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              href="/"
              className="text-primary hover:underline"
            >
              Browse all essays
            </Link>
            <Link
              href="/about"
              className="text-primary hover:underline"
            >
              Learn more about me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
