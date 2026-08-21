"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function TechnologyStrategy() {
    return (
        <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="max-w-container-max mx-auto pb-12 md:pb-16 pt-6 md:pt-8">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-7 p-8 md:p-12 lg:p-14">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">Strategy / AI &amp; Digital Transformation</span>
                            <h1 className="font-display-lg text-[30px] leading-[38px] sm:text-[38px] sm:leading-[46px] md:text-[48px] md:leading-[56px] xl:text-[56px] xl:leading-[64px] text-on-surface mb-6"><span className="block md:whitespace-nowrap">Build an intelligent</span><span className="block md:whitespace-nowrap">digital enterprise</span><span className="block md:whitespace-nowrap">without losing control.</span></h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-8">DGL helps leadership teams turn AI ambition into secure platforms, smarter workflows, governed data, and adoption plans that scale beyond pilots.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="bg-primary-fixed/45 border border-primary-fixed-dim rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">AI Use Cases</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Prioritized by value</p></div>
                                <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Data Readiness</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Quality and access</p></div>
                                <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Digital Delivery</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Platforms and change</p></div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 bg-primary-fixed/35 p-8 md:p-12 lg:p-10 flex flex-col justify-start">
                            <div className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6">
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <div><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">AI Control Room</span><h2 className="font-headline-md text-headline-md text-on-surface mt-2">Readiness snapshot</h2></div>
                                    <span className="material-symbols-outlined text-primary text-4xl">memory</span>
                                </div>
                                <div className="space-y-4">
                                    <div><div className="flex justify-between font-label-sm text-label-sm mb-2"><span>Data foundation</span><span>72%</span></div><div className="h-2 rounded-full bg-surface-container"><div className="h-full w-[72%] rounded-full bg-primary-fixed-dim"></div></div></div>
                                    <div><div className="flex justify-between font-label-sm text-label-sm mb-2"><span>Workflow automation</span><span>58%</span></div><div className="h-2 rounded-full bg-surface-container"><div className="h-full w-[58%] rounded-full bg-primary-fixed-dim"></div></div></div>
                                    <div><div className="flex justify-between font-label-sm text-label-sm mb-2"><span>Governance maturity</span><span>64%</span></div><div className="h-2 rounded-full bg-surface-container"><div className="h-full w-[64%] rounded-full bg-primary-fixed-dim"></div></div></div>
                                </div>
                            </div>
                            <div className="mt-6 w-full rounded-xl overflow-hidden border border-outline-variant/35 bg-surface-container-lowest shadow-sm">
                                <img src={assetPath("/asset/ai_digital_transform/1.png")} alt="AI digital transformation visual" className="w-full aspect-[16/10] object-cover object-center block" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-4">search_insights</span><h3 className="font-headline-sm text-headline-sm mb-2">Discover</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Find high-value AI and digital friction points.</p></div>
                    <div className="bg-primary-fixed/45 border border-primary-fixed-dim rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-4">fact_check</span><h3 className="font-headline-sm text-headline-sm mb-2">Validate</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Confirm data, risk, feasibility, and value.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-4">integration_instructions</span><h3 className="font-headline-sm text-headline-sm mb-2">Integrate</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Connect workflows, apps, data, and platforms.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-4">monitoring</span><h3 className="font-headline-sm text-headline-sm mb-2">Scale</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Measure adoption, value, control, and pace.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Transformation Questions</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Where AI should work, where it should wait, and how it should be governed.</h2><p className="font-body-md text-body-md text-on-surface-variant">The page is structured around adoption choices, not technology hype.</p></div>
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6">Which processes deserve automation first?</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6">Which datasets are ready for trusted decisions?</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6">Which platforms need modernization before scale?</div>
                        <div className="bg-primary-fixed/45 border border-primary-fixed-dim rounded-xl p-6">Which controls protect users, customers, and policy?</div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">AI Value Portfolio</span>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:row-span-2 bg-surface-container-low rounded-xl p-8"><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Prioritize use cases by value, risk, and readiness.</h2><p className="font-body-md text-body-md text-on-surface-variant">DGL groups AI opportunities into a practical portfolio so leaders can choose what to pilot, industrialize, or defer.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Customer and citizen service</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Assistants, routing, case triage, search, and service knowledge.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Operations productivity</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Workflow automation, quality checks, summarization, and reporting.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Decision intelligence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Forecasting, risk signals, dashboards, and executive insights.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Knowledge enablement</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Document intelligence, policy retrieval, onboarding, and learning support.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 bg-surface-container-low rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Digital Spine</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">A transformation architecture built around flow.</h2><p className="font-body-md text-body-md text-on-surface-variant">Unlike the consulting page, this section maps the technology layers that make AI adoption real.</p></div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Experience Layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Portals, apps, service journeys, dashboards, and knowledge interfaces.</p></div>
                        <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Process Layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Workflow redesign, automation, approvals, orchestration, and controls.</p></div>
                        <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Data Layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Data quality, access, metadata, integration, analytics, and lineage.</p></div>
                        <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">AI Layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Models, agents, prompts, monitoring, guardrails, and human review.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-6 bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-8 architectural-shadow"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Responsible AI Controls</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Innovation with visible guardrails.</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><p className="font-body-sm text-body-sm text-on-surface-variant">Privacy and data protection</p><p className="font-body-sm text-body-sm text-on-surface-variant">Human-in-loop review</p><p className="font-body-sm text-body-sm text-on-surface-variant">Bias and explainability checks</p><p className="font-body-sm text-body-sm text-on-surface-variant">Audit and access governance</p></div></div>
                    <div className="lg:col-span-6 bg-primary-fixed/35 border border-primary-fixed-dim rounded-xl p-8"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Adoption Model</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">People, not just platforms.</h2><p className="font-body-md text-body-md text-on-surface-variant mb-6">AI value depends on operating adoption: new roles, guidance, training, measurement, and clear escalation paths.</p><div className="flex flex-wrap gap-3"><span className="px-4 py-2 bg-surface-container-lowest rounded-lg text-primary font-label-sm text-label-sm">Training</span><span className="px-4 py-2 bg-surface-container-lowest rounded-lg text-primary font-label-sm text-label-sm">Policy</span><span className="px-4 py-2 bg-surface-container-lowest rounded-lg text-primary font-label-sm text-label-sm">Ownership</span></div></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 border-y border-outline-variant/30">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Sector Plays</span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Public sector</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Case management, secure knowledge, and service triage.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Education</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Learning support, research workflows, and student service insights.</p></div>
                    <div className="bg-primary-fixed/45 border border-primary-fixed-dim rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Healthcare</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Pathway intelligence, document workflows, and operational analytics.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Enterprise</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Sales productivity, knowledge automation, and service platforms.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow p-8 md:p-12">
                    <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Delivery Board</span>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">A different delivery rhythm for AI programs.</h2><p className="font-body-md text-body-md text-on-surface-variant">AI transformation needs experimentation, governance, and release discipline operating together.</p></div>
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-surface-container-low rounded-lg p-5"><span className="font-display-sm text-display-sm text-primary">2w</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Prototype sprint</p></div>
                            <div className="bg-surface-container-low rounded-lg p-5"><span className="font-display-sm text-display-sm text-primary">6w</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Pilot validation</p></div>
                            <div className="bg-surface-container-low rounded-lg p-5"><span className="font-display-sm text-display-sm text-primary">90d</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Scale roadmap</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Deliverables</span><h2 className="font-headline-lg text-headline-lg text-on-surface">Artifacts for AI transformation decisions.</h2></div>
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">AI maturity and opportunity map</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Data and platform readiness report</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Responsible AI governance blueprint</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Pilot backlog and value case</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Target digital architecture</div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5">Adoption and change plan</div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 bg-surface-container-low rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div><span className="material-symbols-outlined text-primary text-4xl mb-4">smart_toy</span><h3 className="font-headline-sm text-headline-sm mb-2">AI assistants</h3><p className="font-body-md text-body-md text-on-surface-variant">Knowledge, service, and productivity assistants with controlled access.</p></div>
                    <div><span className="material-symbols-outlined text-primary text-4xl mb-4">automation</span><h3 className="font-headline-sm text-headline-sm mb-2">Workflow automation</h3><p className="font-body-md text-body-md text-on-surface-variant">Integrated automation for repeatable work and decision support.</p></div>
                    <div><span className="material-symbols-outlined text-primary text-4xl mb-4">analytics</span><h3 className="font-headline-sm text-headline-sm mb-2">Predictive insight</h3><p className="font-body-md text-body-md text-on-surface-variant">Operational signals, forecasting, and executive performance intelligence.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-8 md:p-12 architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Next step</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Shape an AI roadmap that can move into production.</h2><p className="font-body-md text-body-md text-on-surface-variant">This placeholder CTA can later become an AI readiness assessment, workshop request, or transformation consultation flow.</p></div>
                        <div className="lg:col-span-4"><Link className="inline-flex w-full justify-center items-center bg-primary-fixed/70 border border-primary-fixed-dim text-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-fixed transition-colors" href="#">Start AI Readiness</Link></div>
                    </div>
                </div>
            </section>
        </main>
    );
}
