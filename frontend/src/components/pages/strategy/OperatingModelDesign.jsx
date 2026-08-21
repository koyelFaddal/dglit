"use client";

import Link from "next/link";

export default function OperatingModelDesign() {
    return (
        <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="max-w-container-max mx-auto pb-14 md:pb-20 pt-8 md:pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">Strategy / Business Consulting</span>
                        <h1 className="font-display-lg text-display-lg text-on-surface mb-6">Business Consulting that turns ambition into executable growth.</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-8">DGL helps leadership teams clarify direction, redesign operating models, and move transformation programs from strategy into measurable delivery.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link className="inline-flex justify-center items-center gap-2 bg-primary-fixed/70 text-primary border border-primary-fixed-dim px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-fixed transition-colors" href="#">Start a Strategy Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                            <Link className="inline-flex justify-center items-center gap-2 border border-outline-variant text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest" href="#">Explore Capabilities</Link>
                        </div>
                    </div>
                    <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow overflow-hidden">
                        <div className="p-7 md:p-9 border-b border-outline-variant/30">
                            <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4">Executive Advisory Model</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div><div className="font-display-sm text-display-sm text-primary">30</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Day discovery</p></div>
                                <div><div className="font-display-sm text-display-sm text-primary">90</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Day roadmap</p></div>
                            </div>
                        </div>
                        <div className="p-7 md:p-9 bg-primary-fixed/45">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><p className="font-body-md text-body-md text-on-surface-variant">Leadership alignment and decision clarity</p></div>
                                <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><p className="font-body-md text-body-md text-on-surface-variant">Commercial, operational, and digital priorities</p></div>
                                <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><p className="font-body-md text-body-md text-on-surface-variant">Governance built for measurable execution</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 border-y border-outline-variant/30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div><div className="font-display-sm text-display-sm text-primary mb-2">22+</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Years of excellence</p></div>
                    <div><div className="font-display-sm text-display-sm text-primary mb-2">500+</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Enterprise projects</p></div>
                    <div><div className="font-display-sm text-display-sm text-primary mb-2">6</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Global locations</p></div>
                    <div><div className="font-display-sm text-display-sm text-primary mb-2">24/7</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Delivery support</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">What We Solve</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Strategic decisions with operational consequence.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">We focus on decisions that change how the organization grows, operates, invests, and delivers value across functions.</p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-[18px]">task_alt</span><p className="font-body-sm text-body-sm text-on-surface-variant">Priorities linked to measurable business value</p></div>
                            <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-[18px]">task_alt</span><p className="font-body-sm text-body-sm text-on-surface-variant">Operating choices translated into delivery actions</p></div>
                            <div className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-[18px]">task_alt</span><p className="font-body-sm text-body-sm text-on-surface-variant">Governance that keeps execution accountable</p></div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Growth Strategy</h3><p className="font-body-md text-body-md text-on-surface-variant">Prioritize markets, offers, operating investments, and value pools with a practical execution lens.</p></div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Operating Model</h3><p className="font-body-md text-body-md text-on-surface-variant">Define roles, workflows, governance, service ownership, and decision rights.</p></div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Transformation Portfolio</h3><p className="font-body-md text-body-md text-on-surface-variant">Sequence initiatives by value, risk, dependency, funding, and readiness.</p></div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Performance Improvement</h3><p className="font-body-md text-body-md text-on-surface-variant">Improve cost, quality, cycle time, service experience, and organizational productivity.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 bg-surface-container-low rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">DGL Consulting Architecture</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">A disciplined route from diagnosis to delivery.</h2><p className="font-body-md text-body-md text-on-surface-variant mb-6">Each engagement is structured to move from insight to decision to execution without losing strategic intent.</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"><div className="bg-surface-container-lowest/70 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Output</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Board-ready roadmap and value case</p></div><div className="bg-surface-container-lowest/70 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Cadence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Clear governance, owners, milestones, and risks</p></div></div></div>
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">01 Diagnose</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Baseline performance, constraints, stakeholder needs, and data quality.</p></div>
                        <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">02 Design</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Build a practical target model, roadmap, and value case.</p></div>
                        <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">03 Mobilize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Create workstreams, governance, PMO cadence, and change plans.</p></div>
                        <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">04 Measure</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Track value, adoption, risks, and executive decisions.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Advisory Services</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Business consulting capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="border-t-4 border-primary bg-surface-container-lowest p-6 architectural-shadow"><h3 className="font-headline-sm text-headline-sm mb-3">Enterprise Strategy</h3><p className="font-body-md text-body-md text-on-surface-variant">Strategic priorities, investment cases, growth pathways, and executive decision packs.</p></div>
                    <div className="border-t-4 border-accent-teal bg-surface-container-lowest p-6 architectural-shadow"><h3 className="font-headline-sm text-headline-sm mb-3">Digital Operating Model</h3><p className="font-body-md text-body-md text-on-surface-variant">New ways of working across technology, data, product, operations, and governance.</p></div>
                    <div className="border-t-4 border-accent-amber bg-surface-container-lowest p-6 architectural-shadow"><h3 className="font-headline-sm text-headline-sm mb-3">Transformation PMO</h3><p className="font-body-md text-body-md text-on-surface-variant">Portfolio control, risk management, milestone discipline, and value tracking.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Designed for boards, executives, and delivery leaders.</h2><p className="font-body-lg text-body-lg text-on-surface-variant">The work is structured to create confidence at the leadership table and enough detail for delivery teams to act.</p></div>
                    <div className="space-y-4">
                        <div className="flex gap-4"><span className="material-symbols-outlined text-primary">analytics</span><div><h3 className="font-headline-sm text-headline-sm">Evidence-based decisions</h3><p className="font-body-md text-body-md text-on-surface-variant">Use current performance, stakeholder input, and market context to shape recommendations.</p></div></div>
                        <div className="flex gap-4"><span className="material-symbols-outlined text-primary">groups</span><div><h3 className="font-headline-sm text-headline-sm">Stakeholder alignment</h3><p className="font-body-md text-body-md text-on-surface-variant">Bring leadership, operations, technology, and finance into one shared direction.</p></div></div>
                        <div className="flex gap-4"><span className="material-symbols-outlined text-primary">speed</span><div><h3 className="font-headline-sm text-headline-sm">Execution pace</h3><p className="font-body-md text-body-md text-on-surface-variant">Translate strategy into sprints, milestones, owners, and governance rhythms.</p></div></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-primary-fixed/55 border border-primary-fixed-dim rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Public Sector</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Service modernization, value-for-money programs, and citizen-focused delivery.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Education</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Research enablement, student experience, platforms, and operating efficiency.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Healthcare</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Process redesign, digital pathways, governance, and service quality improvement.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Enterprise</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Commercial growth, productivity, systems strategy, and scalable operating models.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-5 p-8 md:p-12 bg-primary-fixed/45"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Client Journey</span><h2 className="font-headline-lg text-headline-lg text-on-surface">From first workshop to board-ready roadmap.</h2></div>
                    <div className="lg:col-span-7 p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div><h3 className="font-headline-sm text-headline-sm mb-2">Executive interviews</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Capture strategic priorities and friction points.</p></div>
                        <div><h3 className="font-headline-sm text-headline-sm mb-2">Data and process review</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Assess performance signals and operating gaps.</p></div>
                        <div><h3 className="font-headline-sm text-headline-sm mb-2">Future-state design</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Shape options, recommendations, and tradeoffs.</p></div>
                        <div><h3 className="font-headline-sm text-headline-sm mb-2">Delivery plan</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Define milestones, owners, benefits, and governance.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Deliverables</span><h2 className="font-headline-lg text-headline-lg text-on-surface">Clear outputs your teams can use.</h2></div>
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Strategic options paper</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Operating model blueprint</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Transformation roadmap</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Governance and PMO design</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Value and benefits tracker</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Risk and dependency register</div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 border-y border-outline-variant/30">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Technology-aware strategy</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div><span className="material-symbols-outlined text-primary text-4xl mb-4">hub</span><h3 className="font-headline-sm text-headline-sm mb-2">Enterprise platforms</h3><p className="font-body-md text-body-md text-on-surface-variant">ERP, CRM, portals, CMS, workflow, and business applications.</p></div>
                    <div><span className="material-symbols-outlined text-primary text-4xl mb-4">database</span><h3 className="font-headline-sm text-headline-sm mb-2">Data and AI</h3><p className="font-body-md text-body-md text-on-surface-variant">Analytics, automation, decision intelligence, and responsible AI adoption.</p></div>
                    <div><span className="material-symbols-outlined text-primary text-4xl mb-4">cloud</span><h3 className="font-headline-sm text-headline-sm mb-2">Cloud readiness</h3><p className="font-body-md text-body-md text-on-surface-variant">Infrastructure, security, resilience, and scalable delivery models.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-4"><h2 className="font-headline-lg text-headline-lg text-on-surface">Governance that keeps transformation moving.</h2></div>
                    <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-8 md:p-10"><p className="font-body-lg text-body-lg text-on-surface-variant">DGL builds governance around the decisions that matter: investment approval, benefit realization, risk ownership, dependency management, stakeholder communications, and delivery confidence.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Engagement Models</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-7"><h3 className="font-headline-sm text-headline-sm mb-3">Strategy Sprint</h3><p className="font-body-md text-body-md text-on-surface-variant">A focused discovery and recommendation sprint for urgent decisions.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-7"><h3 className="font-headline-sm text-headline-sm mb-3">Roadmap Program</h3><p className="font-body-md text-body-md text-on-surface-variant">A structured roadmap engagement across business, technology, and operations.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-7"><h3 className="font-headline-sm text-headline-sm mb-3">Embedded Advisory</h3><p className="font-body-md text-body-md text-on-surface-variant">Ongoing leadership advisory, PMO support, and value assurance.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-8 md:p-12 architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Ready to build the case?</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Create a business consulting roadmap built for delivery.</h2><p className="font-body-md text-body-md text-on-surface-variant">Use this placeholder CTA later for a contact form, strategy workshop booking, or consultation flow.</p></div>
                        <div className="lg:col-span-4"><Link className="inline-flex w-full justify-center items-center bg-primary-fixed/70 border border-primary-fixed-dim text-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-fixed transition-colors" href="#">Talk to DGL</Link></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
