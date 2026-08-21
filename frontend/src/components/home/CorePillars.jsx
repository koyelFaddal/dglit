import Link from "next/link";

export default function CorePillars() {
    return (
        <>
            <section className="py-24 px-gutter bg-surface">
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1120px] mx-auto mb-14 md:mb-16">
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-text-primary mb-6">Precision Engineering for
                                Modern Enterprise</h2>
                            <div className="w-20 h-1 bg-primary"> </div>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant md:self-end md:pb-1">
                            Our core specializations focus on high-impact transformation that scales across borders and
                            industries.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1120px] mx-auto">
                        {/* Pillar 1 */}
                        <div
                            className="bg-surface-lowest p-7 md:p-10 rounded-xl border border-outline-variant hover:shadow-xl transition-all group">
                            <div
                                className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
                                <span className="material-symbols-outlined text-primary text-2xl group-hover:text-on-primary"
                                    data-icon="architecture">architecture</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-text-primary mb-4">Strategy</h3>
                            <p className="font-body-md text-body-md text-text-secondary mb-6">Defining the blueprint for sustainable
                                growth through deep market analysis, risk mitigation, and structural transformation planning.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary"
                                        data-icon="check_circle">check_circle</span>
                                    <span className="font-body-md text-body-md">Market Entry Strategy</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary"
                                        data-icon="check_circle">check_circle</span>
                                    <span className="font-body-md text-body-md">Operational Excellence BLUEPRINT</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary"
                                        data-icon="check_circle">check_circle</span>
                                    <span className="font-body-md text-body-md">Enterprise Risk Management</span>
                                </li>
                            </ul>
                            <Link className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm font-bold tracking-widest hover:gap-4 transition-all"
                                href="#">
                                EXPLORE STRATEGY <span className="material-symbols-outlined"
                                    data-icon="arrow_forward">arrow_forward</span>
                            </Link>
                        </div>
                        {/* Pillar 2 */}
                        <div
                            className="bg-surface-lowest p-7 md:p-10 rounded-xl border border-outline-variant hover:shadow-xl transition-all group">
                            <div
                                className="w-14 h-14 bg-accent-teal/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-teal transition-all">
                                <span className="material-symbols-outlined text-accent-teal text-2xl group-hover:text-on-primary"
                                    data-icon="settings_suggest">settings_suggest</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-text-primary mb-4">Technology</h3>
                            <p className="font-body-md text-body-md text-text-secondary mb-6">Deploying next-generation
                                infrastructure and custom software solutions designed for global reliability.</p>
                            <div className="space-y-3 mb-6">
                                <div className="border-b border-outline-variant/30 pb-3">
                                    <span className="block font-label-sm text-label-sm text-text-secondary mb-1 uppercase">Cloud
                                        Infrastructure</span>
                                    <span className="font-body-md text-body-md text-text-primary font-bold">AWS &amp; Azure
                                        Architecture</span>
                                </div>
                                <div className="border-b border-outline-variant/30 pb-3">
                                    <span className="block font-label-sm text-label-sm text-text-secondary mb-1 uppercase">Custom
                                        Development</span>
                                    <span className="font-body-md text-body-md text-text-primary font-bold">Enterprise SaaS
                                        Solutions</span>
                                </div>
                                <div>
                                    <span
                                        className="block font-label-sm text-label-sm text-text-secondary mb-1 uppercase">Artificial
                                        Intelligence</span>
                                    <span className="font-body-md text-body-md text-text-primary font-bold">LLM &amp; Data
                                        Analytics</span>
                                </div>
                            </div>
                            <Link className="text-accent-teal font-label-caps text-label-caps flex items-center gap-2 hover:translate-x-2 transition-transform"
                                href="#">EXPLORE TECH <span
                                    className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
