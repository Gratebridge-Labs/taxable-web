import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
    // ... (faqData remains the same)
    {
        question: "Do I need to file taxes if I'm self-employed?",
        answer: "Yes. If you earn income from freelancing, online business, or any self-employment, you are required by Nigerian law to file your Personal Income Tax returns."
    },
    {
        question: "What's my Tax Identification Number (TIN) and how do I get one?",
        answer: "Your TIN is a unique number issued by FIRS. It's required for all tax-related transactions in Nigeria. You can register for one through our platform or via the FIRS portal."
    },
    {
        question: "When is the tax filing deadline for 2026?",
        answer: "Individual tax returns must be filed by March 31, 2026. Here's what you need to know about the current filing window."
    },
    {
        question: "Is my financial data secure with Taxable?",
        answer: "Absolutely. We use bank-level encryption (AES-256) to ensure your data is protected. We only share necessary details with FIRS when you explicitly choose to file."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 max-w-4xl mx-auto px-6">
            <div className="space-y-4">
                {faqData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-[#F5F5F5] rounded-[24px] overflow-hidden transition-all duration-300 border border-transparent hover:border-gray-200"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full p-8 text-left flex items-start justify-between gap-4 group"
                        >
                            <div className="flex-1">
                                <h3 className="text-[17px] font-bold text-[#171717] mb-2">
                                    {item.question}
                                </h3>
                                {openIndex === idx && (
                                    <p className="text-[15px] text-[#737373] leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                        {item.answer}
                                    </p>
                                )}
                                {openIndex !== idx && (
                                    <p className="text-[14px] text-[#737373] line-clamp-1 opacity-70">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                            <div className={`mt-1 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
