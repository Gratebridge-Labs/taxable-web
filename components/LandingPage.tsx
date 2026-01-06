"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HowItWorks from './HowItWorks';
import ComparisonSection from './ComparisonSection';
import FeatureShowcase from './FeatureShowcase';
import BottomCTA from './BottomCTA';
import FAQSection from './FAQSection';

// Icons based on the image
// ... (icons remain the same)
const FileLockIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2V8H20" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 14H13" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 17H13" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 14H10" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 17H10" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ComplianceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#404040" strokeWidth="2" />
        <path d="M9 12L11 14L15 10" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="7" stroke="#404040" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
);

const AuditIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2V8H20" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 13H16" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17H14" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ExpertIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#404040" strokeWidth="2" />
        <path d="M2.5 12H21.5" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 2.5C14.5 5 15.5 8.5 15.5 12C15.5 15.5 14.5 19 12 21.5C9.5 19 8.5 15.5 8.5 12C8.5 8.5 9.5 5 12 2.5Z" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

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

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-taxable-dark font-sans selection:bg-taxable-blue selection:text-white overflow-x-hidden">
            {/* Header */}
            <header className="py-6 px-6 md:px-14 flex items-center justify-between w-full max-w-7xl mx-auto">
                <Logo />
                <nav className="flex items-center gap-4 md:gap-10">
                    <div className="hidden md:flex gap-8 text-[15px] font-medium text-[#404040]">
                        <Link href="#" className="hover:text-taxable-blue transition-colors">How It Works</Link>
                        <Link href="#" className="hover:text-taxable-blue transition-colors">About</Link>
                        <Link
                            href="/blog"
                            className="hover:text-taxable-blue transition-colors text-[15px] font-medium text-[#404040]"
                        >
                            Blog
                        </Link>
                    </div>
                    <Link
                        href="https://dashboard.gettaxable.com/"
                        className="border border-[#E5E5E5] text-taxable-blue font-semibold px-5 py-2 rounded-full text-[15px] hover:bg-gray-50 transition-all hover:shadow-sm"
                    >
                        Sign In
                    </Link>
                </nav>
            </header>

            <main className="w-full max-w-7xl mx-auto px-6 md:px-14">
                {/* Hero Section */}
                <section className="pt-20 md:pt-32 pb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-[44px] md:text-[68px] font-bold tracking-tight text-[#171717] mb-6 leading-[1.05] max-w-2xl"
                    >
                        The modern standard for Nigerian tax compliance.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-lg md:text-[20px] font-medium text-[#737373] mb-10 leading-[1.5] max-w-2xl"
                    >
                        The easiest way to file your Nigerian taxes. Enter your income once, and Taxable generates all forms, calculates your tax, and gets you ready to file.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="bg-taxable-blue hover:bg-opacity-95 text-white font-bold px-7 py-3.5 rounded-xl text-[16px] transition-all active:scale-95 shadow-lg shadow-taxable-blue/20"
                    >
                        Join waitlist
                    </motion.button>
                </section>

                {/* Features Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mb-24"
                >
                    {[
                        { icon: <FileLockIcon />, title: "Bank-Level Security", desc: "Your data is encrypted and secure." },
                        { icon: <ComplianceIcon />, title: "NIRS-Compliant", desc: "Built on current Nigerian tax regulations." },
                        { icon: <AuditIcon />, title: "Audit-Ready", desc: "Professional reports with full audit trails." },
                        { icon: <ExpertIcon />, title: "Expert Support", desc: "Accountant review available anytime." },
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex flex-row items-center gap-4"
                        >
                            <div className="flex-shrink-0">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-[16px] text-[#171717]">{feature.title}</h3>
                                <p className="text-[14px] text-[#737373] mt-0.5">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.section>

                {/* Dashboard Screenshot Section */}
                <section className="w-full bg-[#F5F5F5] rounded-[40px] md:rounded-[60px] p-6 md:p-14 mb-32 relative overflow-hidden flex items-center justify-center">
                    <div className="relative w-full max-w-5xl group cursor-pointer shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden bg-white">
                        <Image
                            src="/images/taxable_pit.png"
                            alt="Taxable Dashboard"
                            width={1400}
                            height={900}
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
                        />
                        {/* Play Button Overlay - Ready for Video Integration Later */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/5">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-xl transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#262626] border-b-[10px] border-b-transparent ml-1.5" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <HowItWorks />

                {/* Comparison Section */}
                <ComparisonSection />

                {/* Feature Showcase Section */}
                <FeatureShowcase />

                {/* Bottom CTA Section */}
                <BottomCTA />

                {/* FAQ Section */}
                <FAQSection />
            </main>
        </div>
    );
}
