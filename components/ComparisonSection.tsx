import React from 'react';
import Link from 'next/link';

const ComparisonSection = () => {
    const comparisonData = [
        {
            category: { left: "Hours of research", right: "Know what to file in 5 minutes" },
            leftItems: ["Figuring out which forms", "Understanding tax brackets", "Calculating manually"],
            rightItems: ["Answer a few questions", "We show only what you need"],
        },
        {
            category: { left: "Spreadsheet chaos", right: "Organized tracking" },
            leftItems: ["Multiple Excel files", "Risk of errors"],
            rightItems: ["One simple dashboard", "Real-time tax calculation", "Auto-validation catches mistakes"],
        },
        {
            category: { left: "Days waiting for accountant", right: "Organized tracking" },
            leftItems: ["Back-and-forth emails", "Unclear timeline"],
            rightItems: ["Free tax calculations", "Optional filing service"],
        },
        {
            category: { left: "Guessing if it's correct", right: "File with confidence" },
            leftItems: ["No idea if you missed something", "Fear of audits", "Penalties for errors"],
            rightItems: ["FIRS-compliant forms", "Expert review available", "Everything double-checked"],
        }
    ];

    return (
        <section className="py-24 grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16 items-start">
            {/* Column 1: Header */}
            <div className="max-w-xs">
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#171717] mb-8 leading-tight">
                    Tax Filing Doesn't Have to Be This Hard
                </h2>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-taxable-blue hover:bg-opacity-95 text-white font-bold px-6 py-3 rounded-xl text-[15px] transition-all active:scale-95 shadow-lg shadow-taxable-blue/20">
                        Join waitlist
                    </button>
                    <button className="bg-white border border-[#E5E5E5] text-[#171717] font-semibold px-6 py-3 rounded-xl text-[15px] hover:bg-gray-50 transition-all">
                        Watch Demo
                    </button>
                </div>
            </div>

            {/* Column 2: Without Taxable */}
            <div>
                <div className="text-[17px] font-semibold text-[#737373] mb-8 pb-4 border-b border-transparent">
                    Without Taxable
                </div>
                <div className="space-y-12">
                    {comparisonData.map((row, idx) => (
                        <div key={idx} className="border-b border-[#F5F5F5] pb-8 last:border-0">
                            <div className="text-[13px] text-[#A3A3A3] mb-4 h-5">{row.category.left}</div>
                            <ul className="space-y-3">
                                {row.leftItems.map((item, i) => (
                                    <li key={i} className="text-[15px] text-[#737373]">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Column 3: With Taxable */}
            <div>
                <div className="text-[17px] font-bold text-[#171717] mb-8 pb-4 border-b border-transparent">
                    With Taxable
                </div>
                <div className="space-y-12">
                    {comparisonData.map((row, idx) => (
                        <div key={idx} className="border-b border-[#F5F5F5] pb-8 last:border-0">
                            <div className="text-[13px] text-[#A3A3A3] mb-4 h-5">{row.category.right}</div>
                            <ul className="space-y-3">
                                {row.rightItems.map((item, i) => (
                                    <li key={i} className="text-[15px] font-bold text-[#171717]">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
