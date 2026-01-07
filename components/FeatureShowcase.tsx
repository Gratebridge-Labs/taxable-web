"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
    // ... (features remain the same)
    {
        id: 1,
        title: "Real-Time Tax Calculation",
        description: "As you add income and deductions, we calculate your tax in real-time using 2026 FIRS rates. Always accurate, always current.",
        icon: (isActive: boolean) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill={isActive ? "#D1E5FF" : "#F5F5F5"} />
                <path d="M16 8V16M12 11V16M8 13V16" stroke={isActive ? "#003787" : "#404040"} strokeWidth="2" strokeLinecap="round" />
                <path d="M7 6H17C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6Z" stroke={isActive ? "#003787" : "#404040"} strokeWidth="1.5" />
            </svg>
        ),
        image: "/images/taxable_pit.png"
    },
    {
        id: 2,
        title: "FIRS-Compliant Forms",
        description: "All your FIRS forms are generated automatically and pre-filled with your data. Just review, download, and file.",
        icon: (isActive: boolean) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill={isActive ? "#D1E5FF" : "#F5F5F5"} />
                <path d="M14 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V10L14 6Z" stroke={isActive ? "#003787" : "#404040"} strokeWidth="1.5" />
                <path d="M14 6V10H18" stroke={isActive ? "#003787" : "#404040"} strokeWidth="1.5" />
                <path d="M9 14H11L15 10" stroke={isActive ? "#003787" : "#404040"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        image: ""
    },
    {
        id: 3,
        title: "Flexible Data Entry",
        description: "Choose monthly tracking for accuracy or annual entry for speed. Smart features like 'copy last month' save you time.",
        icon: (isActive: boolean) => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill={isActive ? "#D1E5FF" : "#F5F5F5"} />
                <path d="M8 7V17M16 7V17M8 12H16" stroke={isActive ? "#003787" : "#404040"} strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" stroke={isActive ? "#003787" : "#404040"} strokeWidth="1.5" />
            </svg>
        ),
        image: ""
    }
];

const FeatureShowcase = () => {
    const [activeId, setActiveId] = useState(1);
    const activeFeature = features.find(f => f.id === activeId);

    return (
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Sticky Image Cabinet */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/3] bg-[#F5F5F5] rounded-[48px] overflow-hidden flex items-center justify-center p-8 md:p-12 shadow-sm order-2 lg:order-1"
            >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white transition-all duration-500 transform flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeId}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full"
                        >
                            {activeFeature?.image ? (
                                <Image
                                    src={activeFeature.image}
                                    alt={activeFeature.title}
                                    fill
                                    className="object-cover object-top"
                                />
                            ) : (
                                <div className="flex items-center justify-center w-full h-full text-[#A3A3A3] text-sm font-medium animate-pulse">
                                    Preview coming soon
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Right side: Feature Cards */}
            <div className="flex flex-col gap-6 order-1 lg:order-2">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        onClick={() => setActiveId(feature.id)}
                        className={`p-8 rounded-[32px] cursor-pointer transition-all duration-300 border-2 ${activeId === feature.id
                            ? 'bg-[#F0F7FF] border-transparent shadow-sm'
                            : 'bg-white border-transparent hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                {feature.icon(activeId === feature.id)}
                            </div>
                            <div>
                                <h3 className={`text-xl font-medium mb-3 ${activeId === feature.id ? 'text-taxable-navy' : 'text-[#404040]'}`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-lg leading-relaxed transition-opacity duration-300 ${activeId === feature.id ? 'text-[#404040] opacity-100' : 'text-[#737373] opacity-70'}`}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeatureShowcase;
