"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        question: "Is Taxable really free?",
        answer: "Yes. If you earn income from freelancing, online business, or any self-employment, you can use Taxable's core features to calculate your taxes at no cost."
    },
    {
        question: "How accurate are the tax calculations?",
        answer: "Our engine is built by tax experts and updated in real-time with the 2026 FIRS rates. We ensure 100% mathematical accuracy based on the data you provide."
    },
    {
        question: "What if I need help from an accountant?",
        answer: "We have a network of partner tax professionals available for consultation. You can book an expert review of your filing directly from your dashboard."
    },
    {
        question: "What happens after I file?",
        answer: "Once you submit your filing, we generate your FIRS-compliant forms. You'll receive a confirmation and can track the status of your filing within the app."
    },
    {
        question: "Do I have to finish everything in one sitting?",
        answer: "Not at all. Your progress is automatically saved. You can start your tax calculation today and come back any time to complete it."
    },
    {
        question: "When is the filing deadline?",
        answer: "In Nigeria, the standard deadline for individual tax filing (PIT) is March 31st of every year for the preceding tax year."
    },
    {
        question: "What if I made a mistake?",
        answer: "If you realize you've made a mistake after filing, we can help you through the amendment process. Contact our support team immediately for guidance."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Left Side: Header and Buttons */}
                <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[24px] md:text-[32px] font-semibold text-taxable-navy leading-tight mb-8"
                    >
                        Things You Might Be Wondering About
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-row gap-3"
                    >
                        <button className="px-4 md:px-6 py-3 rounded-2xl bg-white border border-[#E5E5E5] text-[#171717] font-medium text-base md:text-lg hover:bg-gray-50 transition-all hover:shadow-sm whitespace-nowrap">
                            Watch Demo
                        </button>
                        <button className="px-4 md:px-6 py-3 rounded-2xl bg-white border border-[#E5E5E5] text-[#171717] font-medium text-base md:text-lg hover:bg-gray-50 transition-all hover:shadow-sm whitespace-nowrap">
                            Contact us
                        </button>
                    </motion.div>
                </div>

                {/* Right Side: FAQ Accordion */}
                <div className="lg:col-span-8 space-y-3">
                    {faqData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-taxable-lightgray2 rounded-[16px] overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full py-6 px-8 text-left flex items-center justify-between gap-4 group"
                            >
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium text-taxable-dark">
                                        {item.question}
                                    </h3>
                                    <AnimatePresence>
                                        {(openIndex === idx || true) && (
                                            <motion.div
                                                initial={openIndex === idx ? { height: 0, opacity: 0 } : false}
                                                animate={openIndex === idx ? { height: "auto", opacity: 1 } : { height: "auto", opacity: 0.6 }}
                                                className="overflow-hidden"
                                            >
                                                <p className={`text-base text-taxable-gray leading-relaxed mt-1 ${openIndex === idx ? '' : 'line-clamp-1'}`}>
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
