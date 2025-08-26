export interface Essay {
    id: string;
    title: string;
    content: string;
    published: boolean;
    publishedDate: string;
}

export const essays: Essay[] = [
    {
        id: "on-writing-well-1",
        title: "On Writing Well 1",
        content: "Writing well is a skill that can be learned and improved over time...",
        published: true,
        publishedDate: "2023-01-15"
    },
    {
        id: "the-power-of-focus",
        title: "The Power of Focus",
        content: "Focus is the key to productivity and success. When you focus on a task...",
        published: true,
        publishedDate: "2023-02-20"
    },
    {
        id: "learning-how-to-learn",
        title: "Learning How to Learn",
        content: "Learning how to learn effectively is essential for personal growth...",
        published: false,
        publishedDate: "2023-03-10"
    }
];

export function getEssay(id: string): Essay | undefined {
    return essays.find(essay => essay.id === id);
}

export function getPublishedEssays(): Essay[] {
    return essays.filter(essay => essay.published);
}

export function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}
