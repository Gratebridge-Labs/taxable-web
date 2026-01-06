"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useApi } from '../../hooks/useApi';

interface Blog {
    _id: string;
    title: string;
    excerpt: string;
    content: string;
    featuredImage?: string;
    createdAt: string;
    slug: string;
    buttonType: 'consultation' | 'create_account';
    author?: {
        fullName: string;
        image?: string;
    };
}

const Logo = () => (
    <Link href="/" className="flex items-center">
        <Image
            src="/logo_blue.svg"
            alt="Taxable"
            width={120}
            height={40}
            className="w-auto h-9"
            priority
        />
    </Link>
);

export default function BlogPage() {
    const api = useApi();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await api.get('/blogs');
                // Updating mapping to match the structure in the provided JSON
                const blogData = response.data?.blogs || [];
                setBlogs(blogData);
            } catch (err) {
                console.error("Failed to fetch blogs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-white text-taxable-dark font-sans selection:bg-taxable-blue selection:text-white">
            {/* Header */}
            <header className="py-6 px-6 md:px-14 flex items-center justify-between w-full max-w-7xl mx-auto border-b border-gray-50">
                <Logo />
                <nav className="flex items-center gap-4 md:gap-10">
                    <div className="hidden md:flex gap-8 text-[15px] font-medium text-[#404040]">
                        <Link href="/" className="hover:text-taxable-blue transition-colors">Home</Link>
                        <Link href="/blog" className="text-taxable-blue transition-colors">Blog</Link>
                    </div>
                    <Link
                        href="https://dashboard.gettaxable.com/"
                        className="border border-[#E5E5E5] text-taxable-blue font-semibold px-5 py-2 rounded-full text-[15px] hover:bg-gray-50 transition-all hover:shadow-sm"
                    >
                        Sign In
                    </Link>
                </nav>
            </header>

            <main className="w-full max-w-7xl mx-auto px-6 md:px-14 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight text-[#171717] mb-4 leading-tight">
                        The Taxable Blog
                    </h1>
                    <p className="text-lg text-[#737373] max-w-2xl mb-16">
                        Stay up to date with the latest Nigerian tax laws, compliance tips, and product updates from the Taxable team.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="bg-gray-100 aspect-[16/10] rounded-2xl mb-4"></div>
                                <div className="h-6 bg-gray-100 rounded-full w-3/4 mb-3"></div>
                                <div className="h-4 bg-gray-100 rounded-full w-full mb-2"></div>
                                <div className="h-4 bg-gray-100 rounded-full w-2/3"></div>
                            </div>
                        ))}
                    </div>
                ) : blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogs.map((blog, idx) => (
                            <motion.article
                                key={blog._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Link href={`/blog/${blog.slug}`} className="group block">
                                    <div className="relative aspect-[16/10] bg-[#F5F5F5] rounded-2xl overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                                        {blog.featuredImage ? (
                                            <Image
                                                src={blog.featuredImage}
                                                alt={blog.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50 uppercase tracking-widest text-xs font-bold">
                                                Taxable Editorial
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 mb-3 text-[13px] font-semibold text-[#A3A3A3]">
                                        <span>{new Date(blog.createdAt).toLocaleDateString('en-NG', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        {blog.author && (
                                            <>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                <span>{blog.author.fullName}</span>
                                            </>
                                        )}
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-[#171717] mb-3 group-hover:text-taxable-blue transition-colors">
                                        {blog.title}
                                    </h2>
                                    <p className="text-[#737373] text-[15px] leading-relaxed line-clamp-2">
                                        {blog.excerpt}
                                    </p>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                ) : (
                    <div className="bg-[#F5F5F5] rounded-[32px] p-12 text-center max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-[#171717] mb-2">No posts yet</h3>
                        <p className="text-[#737373]">We're currently preparing some insightful content for you. Check back soon!</p>
                    </div>
                )}
            </main>
        </div>
    );
}
