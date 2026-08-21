"use client";

import Link from "next/link";

export default function Insights() {
    return (
        <>
            <section className="mobile-section-compact py-16 px-gutter bg-surface">
                <div
                    className="mobile-cta-card max-w-container-max mx-auto bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                        <div className="mobile-cta-copy lg:col-span-8 p-8 md:p-12">
                            <span
                                className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary uppercase tracking-widest mb-5">
                                <span className="w-8 h-px bg-primary"></span> Ready to Scale
                            </span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5 max-w-3xl">Turn strategic vision
                                into measurable digital momentum.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Partner with DGL to align
                                business priorities, technology execution, and long-term value creation in one focused roadmap.
                            </p>
                        </div>
                        <div
                            className="mobile-cta-panel lg:col-span-4 p-8 md:p-10 bg-primary-fixed/45 border-t lg:border-t-0 lg:border-l border-outline-variant/40 flex flex-col justify-center gap-4">
                            <div className="mobile-cta-mini-grid grid grid-cols-2 gap-4 mb-2">
                                <div
                                    className="mobile-cta-mini-card bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4">
                                    <span className="material-symbols-outlined text-primary mb-3">route</span>
                                    <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Roadmap</p>
                                </div>
                                <div
                                    className="mobile-cta-mini-card bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4">
                                    <span className="material-symbols-outlined text-accent-teal mb-3">speed</span>
                                    <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Execution</p>
                                </div>
                            </div>
                            <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps hover:bg-primary-container hover:shadow-lg transition-all"
                                href="#">
                                START A CONVERSATION <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </Link>
                            <Link className="inline-flex items-center justify-center gap-2 border border-outline-variant bg-surface-container-lowest text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps hover:border-primary hover:bg-primary-fixed transition-all"
                                href="#">
                                VIEW SERVICES <span className="material-symbols-outlined text-[18px]">north_east</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
