import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

const API_BASE_URL = 'https://api.gettaxable.com/api';

async function getBlog(slug: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/blogs`);
        const data = await response.json();
        const blogs = data?.data?.blogs || [];
        return blogs.find((b: any) => b.slug === slug) || null;
    } catch (error) {
        console.error('Error fetching blog:', error);
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) {
        return {
            title: 'Blog Post Not Found',
        };
    }

    return {
        title: blog.title,
        description: blog.excerpt,
        openGraph: {
            title: blog.title,
            description: blog.excerpt,
            images: blog.featuredImage ? [blog.featuredImage] : [],
            type: 'article',
            publishedTime: blog.createdAt,
            authors: blog.author ? [blog.author.fullName] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.excerpt,
            images: blog.featuredImage ? [blog.featuredImage] : [],
        },
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) return <BlogPostClient blog={null} slug={slug} />;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        image: blog.featuredImage,
        datePublished: blog.createdAt,
        dateModified: blog.updatedAt || blog.createdAt,
        author: [{
            '@type': 'Person',
            name: blog.author?.fullName || 'Taxable Team',
        }],
        description: blog.excerpt,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostClient blog={blog} slug={slug} />
        </>
    );
}
