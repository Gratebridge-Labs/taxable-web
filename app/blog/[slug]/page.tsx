"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useApi } from '../../../hooks/useApi';

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
    category?: string;
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

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const api = useApi();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            console.log("Current slug:", slug);
            try {
                const response = await api.get('/blogs');
                console.log("Response data:", response);
                const blogs = response.data?.blogs || [];
                const foundBlog = blogs.find((b: Blog) => b.slug === slug);
                console.log("Found blog:", foundBlog);
                setBlog(foundBlog || null);
            } catch (err) {
                console.error("Failed to fetch blog post:", err);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchBlog();
        else console.log("No slug provided in params");
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-taxable-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-bold text-[#171717] mb-4">Post not found</h1>
                <p className="text-[#737373] mb-2">We couldn't find a post with the slug: <strong>{slug}</strong></p>
                <p className="text-[#737373] mb-8 text-sm">Please check the URL or return to the blog list.</p>
                <Link href="/blog" className="text-taxable-blue font-bold hover:underline">Back to Blog Listing</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-taxable-dark font-sans selection:bg-taxable-blue selection:text-white pb-24">
            {/* Header */}
            <header className="py-6 px-6 md:px-14 flex items-center justify-between w-full max-w-7xl mx-auto border-b border-gray-50 bg-white sticky top-0 z-50">
                <Logo />
                <nav className="flex items-center gap-4 md:gap-10">
                    <div className="hidden md:flex gap-8 text-[15px] font-medium text-[#404040]">
                        <Link href="/" className="hover:text-taxable-blue transition-colors">Home</Link>
                        <Link href="/blog" className="hover:text-taxable-blue transition-colors">Blog</Link>
                    </div>
                    <Link
                        href="https://dashboard.gettaxable.com/"
                        className="border border-[#E5E5E5] text-taxable-blue font-semibold px-5 py-2 rounded-full text-[15px] hover:bg-gray-50 transition-all hover:shadow-sm"
                    >
                        Sign In
                    </Link>
                </nav>
            </header>

            <article className="max-w-4xl mx-auto px-6 pt-16 md:pt-24">
                {/* Category & Date */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 mb-6 text-[14px] font-bold text-taxable-blue uppercase tracking-wider"
                >
                    <span>{blog.category || "Tax Education"}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-[#A3A3A3]">{new Date(blog.createdAt).toLocaleDateString('en-NG', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[36px] md:text-[52px] font-bold text-[#171717] leading-[1.1] mb-8"
                >
                    {blog.title}
                </motion.h1>

                {/* Author */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center text-taxable-blue font-bold text-lg overflow-hidden border border-gray-100">
                        {blog.author?.image ? (
                            <Image src={blog.author.image} alt={blog.author.fullName} width={48} height={48} className="w-full h-full object-cover" />
                        ) : (
                            blog.author?.fullName?.[0] || 'T'
                        )}
                    </div>
                    <div>
                        <p className="text-[#171717] font-bold text-[16px]">{blog.author?.fullName || "Taxable Team"}</p>
                        <p className="text-[#737373] text-[14px]">Tax Policy Research</p>
                    </div>
                </motion.div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative aspect-[21/9] w-full rounded-[32px] overflow-hidden mb-16 shadow-xl"
                >
                    {blog.featuredImage ? (
                        <Image
                            src={blog.featuredImage}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className="w-full h-full bg-[#F5F5F5] flex items-center justify-center text-gray-400">
                            Blog Image
                        </div>
                    )}
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="prose prose-lg max-w-none prose-headings:text-[#171717] prose-headings:font-bold prose-p:text-[#404040] prose-p:leading-[1.8] prose-p:mb-6 prose-strong:text-[#171717]"
                >
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-12 mb-6" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-10 mb-4" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-8 mb-3" {...props} />,
                            p: ({ node, ...props }) => <p className="text-[18px] md:text-[20px] text-[#404040] leading-relaxed mb-6" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-[18px]" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-[18px]" {...props} />,
                            li: ({ node, ...props }) => <li className="text-[#404040]" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold text-[#171717]" {...props} />,
                            blockquote: ({ node, ...props }) => (
                                <blockquote className="border-l-4 border-taxable-blue pl-6 py-2 italic text-[#737373] bg-[#F0F7FF] rounded-r-xl mb-6" {...props} />
                            ),
                        }}
                    >
                        {blog.content}
                    </ReactMarkdown>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 bg-taxable-navy rounded-[40px] text-center text-white relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to take the next step?</h2>
                        <p className="text-white/70 mb-8 max-w-xl mx-auto">
                            {blog.buttonType === 'consultation'
                                ? "Our experts are ready to help you navigate the complexities of the new tax reform."
                                : "Join thousands of Nigerians simplifying their tax compliance today."}
                        </p>
                        {blog.buttonType === 'consultation' ? (
                            <button className="bg-white text-taxable-navy font-bold px-10 py-4 rounded-2xl text-[18px] hover:bg-gray-100 transition-all active:scale-95 shadow-xl">
                                Book a consultation
                            </button>
                        ) : (
                            <Link
                                href="https://dashboard.gettaxable.com/"
                                className="bg-taxable-blue text-white font-bold px-10 py-4 rounded-2xl text-[18px] hover:bg-opacity-90 transition-all active:scale-95 shadow-xl inline-block"
                            >
                                Get started
                            </Link>
                        )}
                    </div>
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-taxable-blue/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-taxable-blue/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                </motion.div>

                {/* Back to Blog */}
                <div className="mt-16 text-center">
                    <Link href="/blog" className="group flex items-center justify-center gap-2 text-[#737373] hover:text-taxable-blue font-bold transition-colors">
                        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to all posts
                    </Link>
                </div>
            </article>
        </div>
    );
}
