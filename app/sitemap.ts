import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://gettaxable.com';

    // In a real app, you would fetch all blog slugs from your API here
    // const blogs = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`).then(res => res.json());
    // const blogRoutes = blogs.data.blogs.map((blog: any) => ({
    //   url: `${baseUrl}/blog/${blog.slug}`,
    //   lastModified: new Date(blog.updatedAt),
    // }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        // ...blogRoutes
    ];
}
