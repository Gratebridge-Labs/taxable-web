import type { Metadata } from 'next';
import BlogListClient from './BlogListClient';

const API_BASE_URL = 'https://api.gettaxable.com/api';

export const metadata: Metadata = {
    title: "Blog | Taxable",
    description: "Stay up to date with the latest Nigerian tax laws, compliance tips, and product updates from the Taxable team.",
    openGraph: {
        title: "Taxable Blog | Nigerian Tax Education",
        description: "Insights and updates on Nigerian tax reform, compliance, and financial technology.",
    }
};

async function getBlogs() {
    try {
        const response = await fetch(`${API_BASE_URL}/blogs`, { next: { revalidate: 3600 } });
        const data = await response.json();
        return data?.data?.blogs || [];
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}

export default async function BlogPage() {
    const blogs = await getBlogs();
    return <BlogListClient blogs={blogs} />;
}
