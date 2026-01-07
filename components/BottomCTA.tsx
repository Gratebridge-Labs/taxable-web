"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const BottomCTA = () => {
    return (
        <section className="py-24 flex flex-col items-center">
            {/* Header Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-12"
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-taxable-navy mb-8 max-w-2xl mx-auto leading-tight">
                    Join Nigerians who've already simplified tax filing
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-taxable-blue hover:bg-opacity-95 text-taxable-light font-medium px-8 py-3.5 rounded-xl text-lg transition-all active:scale-95 shadow-lg shadow-taxable-blue/20">
                        Join waitlist
                    </button>
                    <button className="bg-white border border-taxable-lightgray text-taxable-dark font-medium px-8 py-3.5 rounded-xl text-lg hover:bg-gray-50 transition-all">
                        Watch Demo
                    </button>
                </div>
            </motion.div>

            {/* Dashboard Mockup */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-[1100px] mt-8 bg-white rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-[#E5E5E5] overflow-hidden group cursor-pointer"
            >
                <div className="relative aspect-[16/10] w-full">
                    <Image
                        src="/images/taxable_pit.png"
                        alt="Taxable Dashboard Home"
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    {/* Play Button Overlay - Video Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/5">
                        <div className="w-20 h-20 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-xl transition-all duration-300 group-hover:scale-110 group-active:scale-95">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-taxable-navy border-b-[10px] border-b-transparent ml-1.5" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default BottomCTA;
