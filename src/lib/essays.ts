export interface Essay {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  published: boolean;
}

export const essays: Essay[] = [
  {
    id: "1",
    title: "On Writing Well",
    slug: "on-writing-well",
    content: `# On Writing Well

Writing is thinking on paper. Anyone who thinks clearly should be able to write clearly—about any subject at all.

## The Art of Clarity and Persuasion and Hardwork

Good writing is not a matter of inspiration but of hard work. It requires thinking through your ideas, organizing them logically, and expressing them in the simplest possible terms. The goal is not to impress readers with your vocabulary but to communicate your thoughts as clearly as possible.

Writing forces you to think. When you sit down to write about something, you quickly discover what you really know about it and what you don't. The gaps in your understanding become painfully obvious. This is why writing is such a powerful tool for learning.

## The Process

The best writing comes from rewriting. First drafts are meant to be terrible—their purpose is simply to get your thoughts down on paper. The real work happens in revision, where you clarify your ideas, improve your structure, and polish your prose.

Don't try to write and edit simultaneously. These are different mental processes that interfere with each other. When writing your first draft, ignore grammar, style, and even logic. Just get your ideas down. You can fix everything else later.

## Conclusion

Writing well is hard work, but it's also one of the most valuable skills you can develop. It forces you to think clearly, helps you learn more effectively, and allows you to share your ideas with others. The effort is worth it.`,
    excerpt: "Writing is thinking on paper. Anyone who thinks clearly should be able to write clearly—about any subject at all.",
    publishedAt: "2024-01-15",
    readingTime: 3,
    tags: ["writing", "creativity", "productivity"],
    published: true,
  },
  {
    id: "2",
    title: "The Power of Focus",
    slug: "the-power-of-focus",
    content: `# The Power of Focus

In our age of distraction, the ability to focus has become a superpower. Those who can concentrate deeply on meaningful work will thrive, while those who cannot will struggle.

## Why Focus Matters

Deep work—the ability to focus without distraction on cognitively demanding tasks—is becoming increasingly rare and valuable. As more people become distracted by social media, instant messaging, and endless notifications, those who can still focus have a significant advantage.

Focus allows you to:
- Produce higher quality work
- Learn new skills faster
- Solve complex problems
- Find deeper satisfaction in your work

## The Obstacles

Modern technology is designed to capture and hold your attention. Every app, website, and device is optimized to be addictive. Fighting these forces requires intentional effort and systematic changes to your environment.

The most dangerous distraction isn't obvious interruptions—it's the constant potential for interruption. Even when your phone is silent, knowing you could check it at any moment creates cognitive residue that impairs your ability to focus.

## Building Focus

Focus is like a muscle—it can be strengthened with practice. Start small and gradually increase the duration of your focused work sessions. Create an environment that supports concentration by eliminating distractions and establishing clear boundaries.

Some strategies that work:
- Turn off all notifications during work time
- Use website blockers to prevent access to distracting sites
- Work in a dedicated space free from clutter
- Practice meditation to strengthen your attention
- Schedule specific times for checking email and messages

Focus is not just about productivity—it's about living intentionally and experiencing life more fully.`,
    excerpt: "In our age of distraction, the ability to focus has become a superpower. Those who can concentrate deeply will thrive.",
    publishedAt: "2024-01-10",
    readingTime: 4,
    tags: ["productivity", "focus", "technology"],
    published: true,
  },
  {
    id: "3",
    title: "Learning How to Learn",
    slug: "learning-how-to-learn",
    content: `# Learning How to Learn

The most important skill in the modern world is not any particular piece of knowledge, but the ability to learn new things quickly and effectively.

## The Learning Process

Learning is not passive absorption but active construction. You don't simply download information into your brain—you build understanding by connecting new ideas to existing knowledge and testing your comprehension.

Effective learning requires:
- **Active engagement**: Don't just read or listen—question, summarize, and apply
- **Spaced repetition**: Review material at increasing intervals
- **Interleaving**: Mix different types of problems or topics
- **Testing**: Regularly quiz yourself to identify gaps

## The Feynman Technique

One of the most powerful learning techniques is teaching what you've learned to someone else—or pretending to. This forces you to identify gaps in your understanding and explain concepts in simple terms.

The process is simple:
1. Choose a concept you want to learn
2. Explain it in simple terms as if teaching a child
3. Identify gaps in your explanation
4. Return to the source material to fill the gaps
5. Repeat until you can explain it clearly

## Learning from Failure

Mistakes are not failures—they are information. Each error tells you something about the boundaries of your knowledge. Embrace difficulty and confusion as signs that real learning is happening.

The goal is not to avoid mistakes but to make them quickly and learn from them efficiently.`,
    excerpt: "The most important skill in the modern world is not any particular piece of knowledge, but the ability to learn new things quickly.",
    publishedAt: "2024-01-05",
    readingTime: 3,
    tags: ["learning", "education", "growth"],
    published: true,
  },
];

export function getEssay(slug: string): Essay | undefined {
  return essays.find((essay) => essay.slug === slug && essay.published);
}

export function getPublishedEssays(): Essay[] {
  return essays
    .filter((essay) => essay.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
