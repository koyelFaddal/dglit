import Link from "next/link";

export default function SecondaryCTA() {
    return (
        <>
            <section className="defer-offscreen mobile-section-compact py-16 px-gutter bg-surface">
                <div
                    className="mobile-cta-card max-w-container-max mx-auto bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                        <div className="mobile-cta-copy lg:col-span-7 p-8 md:p-12">
                            <span
                                className="inline-flex items-center gap-2 font-label-caps text-label-caps text-accent-teal uppercase tracking-widest mb-5">
                                <span className="w-8 h-px bg-accent-teal"></span> Global Delivery
                            </span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Build the next chapter with a
                                team designed for precision.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-2xl">From discovery to
                                deployment, our consultants and engineers help modern enterprises move faster with governance,
                                security, and scalable delivery built in.</p>
                            <div className="mobile-cta-actions flex flex-col sm:flex-row gap-4">
                                <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps hover:bg-primary-container hover:shadow-lg transition-all"
                                    href="#">
                                    PLAN YOUR TRANSFORMATION <span
                                        className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                </Link>
                                <Link className="inline-flex items-center justify-center gap-2 border border-outline-variant text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps hover:border-primary hover:bg-primary-fixed transition-all"
                                    href="#">
                                    TALK TO AN EXPERT <span className="material-symbols-outlined text-[18px]">support_agent</span>
                                </Link>
                            </div>
                        </div>
                        <div
                            className="mobile-stat-panel lg:col-span-5 bg-primary-fixed/50 p-8 md:p-12 grid grid-cols-2 gap-5 md:gap-6 border-t lg:border-t-0 lg:border-l border-outline-variant/40 content-center">
                            <div
                                className="mobile-stat-card bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-5">
                                <div className="font-display-sm text-display-sm text-primary mb-2">24/7</div>
                                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Delivery Support
                                </p>
                            </div>
                            <div
                                className="mobile-stat-card bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-5">
                                <div className="font-display-sm text-display-sm text-primary mb-2">5</div>
                                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Global Hubs</p>
                            </div>
                            <div
                                className="mobile-stat-card col-span-2 bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-5">
                                <p className="font-body-md text-body-md text-on-surface-variant">Enterprise-grade consulting,
                                    implementation, and managed innovation for teams ready to move with confidence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
