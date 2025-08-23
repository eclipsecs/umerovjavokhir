import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// @ts-expect-error
import { Link } from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Essays & Thoughts",
  description: "A collection of thoughts on writing, learning, productivity, and life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <Link
                href="/"
                className="text-xl font-semibold tracking-tight hover:text-primary transition-colors"
              >
                Essays
              </Link>

              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/rss"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  RSS
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-background">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <p>© 2024 Essays & Thoughts. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
