import Link from "next/link";

export default function AboutPage() {
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

      {/* About Content */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">About</h1>

        <div className="prose prose-gray dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to my essay collection. This is where I share thoughts on writing,
            learning, productivity, and the things that fascinate me.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
            Why I Write
          </h2>

          <p className="text-base leading-7 mb-4">
            Writing helps me think more clearly. When I try to explain an idea in writing,
            I quickly discover what I actually understand and what I only think I understand.
            The process of writing forces me to organize my thoughts and find the gaps in my reasoning.
          </p>

          <p className="text-base leading-7 mb-4">
            I publish these essays not because I think I have all the answers, but because
            sharing ideas leads to better ideas. If something I write helps you think about
            a problem differently, or if you disagree and can explain why, we both benefit.
          </p>

          <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
            What You'll Find Here
          </h2>

          <p className="text-base leading-7 mb-4">
            Most of my writing falls into a few categories:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-base leading-7">
              <strong>Writing and Communication:</strong> How to think clearly and express ideas effectively
            </li>
            <li className="text-base leading-7">
              <strong>Learning and Growth:</strong> Strategies for acquiring new skills and knowledge
            </li>
            <li className="text-base leading-7">
              <strong>Productivity and Focus:</strong> How to do meaningful work in a distracted world
            </li>
            <li className="text-base leading-7">
              <strong>Technology and Society:</strong> How digital tools shape how we think and live
            </li>
          </ul>

          <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">
            Get in Touch
          </h2>

          <p className="text-base leading-7 mb-4">
            I love hearing from readers. If an essay resonates with you, challenges your
            thinking, or if you have questions or disagreements, please reach out.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              href="mailto:hello@example.com"
              className="text-primary hover:underline"
            >
              Email me
            </Link>
            <Link
              href="/rss"
              className="text-primary hover:underline"
            >
              RSS Feed
            </Link>
            <Link
              href="https://twitter.com"
              className="text-primary hover:underline"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
