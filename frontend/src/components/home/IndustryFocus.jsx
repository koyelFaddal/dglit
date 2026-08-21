"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function IndustryFocus() {
    return (
        <>
            <section className="mobile-section-bottom-tight py-24 bg-surface">
                <div className="px-margin-desktop max-w-container-max mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-4">Case
                                Studies</span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Success Stories</h2>
                        </div>
                        <Link className="hidden md:flex items-center gap-2 text-primary font-label-sm text-label-sm tracking-widest border-b border-primary pb-1"
                            href="#">
                            VIEW ALL INSIGHTS
                        </Link>
                    </div>
                    <div className="grid grid-cols-12 gap-gutter">
                        {/* Large Feature Case Study */}
                        <div
                            className="col-span-12 lg:col-span-8 relative group cursor-pointer overflow-hidden rounded-lg architectural-shadow">
                            <img className="w-full h-[420px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                                data-alt="A close-up shot of a high-resolution dashboard showing intricate financial data and real-time analytics on multiple glowing monitors in a dark, focused control room environment. The aesthetic is clean and high-tech, with sharp typography and a professional blue and teal color palette. The image conveys precision, intelligence, and successful data management."
                                src={assetPath("/asset/our_success/1.webp")} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white">
                                <span className="bg-primary px-3 py-1 text-label-sm font-label-sm mb-4 inline-block">FINANCE</span>
                                <h3 className="font-headline-lg text-headline-lg mb-4">Modernizing Legacy Core Banking for Global
                                    Leader</h3>
                                <div className="flex flex-wrap gap-6 md:gap-12 mt-6">
                                    <div>
                                        <p className="text-3xl font-bold text-tertiary-fixed">45%</p>
                                        <p className="text-sm opacity-70 uppercase tracking-widest">OpEx Reduction</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-tertiary-fixed">2.5x</p>
                                        <p className="text-sm opacity-70 uppercase tracking-widest">Faster Processing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Smaller Side Case Study */}
                        <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
                            <div className="glass-layer p-8 architectural-shadow border-l-4 border-primary">
                                <span className="text-primary font-label-sm text-label-sm block mb-2">ENERGY</span>
                                <h4 className="font-headline-md text-headline-md text-lg mb-4">Smart Grid Optimization using AI
                                    &amp; IoT</h4>
                                <p className="text-on-secondary-container mb-4">Achieved 20% carbon footprint reduction for a major
                                    EU energy provider.</p>
                                <Link className="text-primary font-label-sm text-label-sm tracking-widest" href="#">READ CASE STUDY</Link>
                            </div>
                            <div className="glass-layer p-8 architectural-shadow border-l-4 border-primary">
                                <span className="text-primary font-label-sm text-label-sm block mb-2">RETAIL</span>
                                <h4 className="font-headline-md text-headline-md text-lg mb-4">Omnichannel Experience
                                    Re-architecture</h4>
                                <p className="text-on-secondary-container mb-4">Driving 300% increase in mobile conversion through
                                    headless commerce.</p>
                                <Link className="text-primary font-label-sm text-label-sm tracking-widest" href="#">READ CASE STUDY</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
