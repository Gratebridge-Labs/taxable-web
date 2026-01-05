"use client";

import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            title: "Choose Your Tax Type",
            description: "Let us know if you're filing as an individual, business owner, or joint with a spouse. We'll customize everything for you."
        },
        {
            title: "Enter Your Records",
            description: "Enter your income and deductions at your own pace—monthly or all at once. Everything stays private and under your control."
        },
        {
            title: "Get Your Forms, Review & File",
            description: "Review your return, download your filled NIRS-compliant forms, or have us submit them electronically. It's all up to you"
        }
    ];

    return (
        <section className="py-20">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[32px] md:text-[40px] font-bold text-[#171717] mb-12 leading-tight max-w-sm"
            >
                Simple tax filing in three steps
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="bg-[#F5F5F5] rounded-[40px] p-8 md:p-10 min-h-[480px] flex flex-col justify-end transition-transform hover:scale-[1.02] duration-300"
                    >
                        <div className="max-w-[280px]">
                            <h3 className="text-xl font-bold text-[#171717] mb-3">
                                {step.title}
                            </h3>
                            <p className="text-[#737373] text-[15px] leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
