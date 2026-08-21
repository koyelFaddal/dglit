"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function PMOChangeManagement() {
    return (
        <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="max-w-container-max mx-auto pb-12 md:pb-16 pt-6 md:pt-8">
                <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-6 items-stretch">
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow p-8 md:p-12 lg:p-14">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">Strategy / PMO &amp; Change Management</span>
                        <h1 className="font-display-lg text-[36px] leading-[44px] sm:text-[46px] sm:leading-[54px] md:text-[56px] md:leading-[64px] xl:text-[60px] xl:leading-[68px] text-on-surface mb-6">Deliver change with rhythm, evidence, and adoption.</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-8">DGL helps leadership teams convert transformation ambition into governed programs, clear workstreams, engaged stakeholders, and measurable value realization.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="bg-primary-fixed/40 border border-primary-fixed-dim rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Control</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Portfolio discipline</p></div>
                            <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Change</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Adoption readiness</p></div>
                            <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Value</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Benefits tracking</p></div>
                        </div>
                    </div>
                    <div className="bg-primary-fixed/30 border border-primary-fixed-dim rounded-xl p-6 md:p-8 flex flex-col gap-5">
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Delivery Control Tower</span>
                            <div className="grid grid-cols-3 gap-3 text-center">
                                <div><div className="font-display-sm text-display-sm text-primary">12</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Workstreams</p></div>
                                <div><div className="font-display-sm text-display-sm text-primary">86%</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Readiness</p></div>
                                <div><div className="font-display-sm text-display-sm text-primary">30d</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Cadence</p></div>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden border border-outline-variant/35 bg-surface-container-lowest shadow-sm">
                            <img src={assetPath("/asset/pmo/1.png")} alt="PMO delivery control visual" className="w-full aspect-[16/10] object-cover object-center block" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-12 border-y border-outline-variant/30">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow overflow-hidden">
                    <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.25fr]">
                        <div className="p-8 md:p-10 bg-surface-container-low border-b xl:border-b-0 xl:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">PMO Mission Board</span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Set the delivery agenda before the work starts drifting.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">A PMO page should feel like a command desk: priorities, owners, decisions, and benefits are visible in one working view.</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Sponsor ask</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Clear decision route</p></div>
                                <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">PMO output</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Actionable evidence</p></div>
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                                <div className="lg:col-span-7 bg-primary-fixed/35 border border-primary-fixed-dim rounded-xl p-6">
                                    <div className="flex items-start justify-between gap-4 mb-6"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Board Focus</span><span className="material-symbols-outlined text-primary text-3xl">dashboard_customize</span></div>
                                    <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Decisions with visible consequence.</h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant">Every delivery meeting connects a choice, an accountable owner, a due date, and the value or risk it protects.</p>
                                </div>
                                <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                                    <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5"><div className="font-display-sm text-display-sm text-primary">48h</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Decision SLA</p></div>
                                    <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5"><div className="font-display-sm text-display-sm text-primary">6</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Value gates</p></div>
                                </div>
                                <div className="lg:col-span-12 bg-surface-container-low rounded-xl p-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                        <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Intake</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Scope and funding</p></div>
                                        <div className="border-l-4 border-primary-fixed-dim pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Sequence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Milestones and owners</p></div>
                                        <div className="border-l-4 border-accent-teal pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Assure</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Risks and evidence</p></div>
                                        <div className="border-l-4 border-accent-amber pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Realize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Benefits and handover</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-1 xl:grid-cols-[0.88fr_1.12fr] gap-6 items-stretch">
                    <div className="bg-surface-container-low rounded-xl p-8 md:p-10">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Change Adoption Studio</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Move people through change with clarity, not noise.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">Adoption planning combines stakeholder insight, communications, training, readiness checks, and manager enablement.</p>
                        <div className="rounded-lg overflow-hidden border border-outline-variant/35 bg-surface-container-lowest shadow-sm">
                            <img src={assetPath("/asset/pmo/2.png")} alt="PMO change adoption visual" className="w-full aspect-[4/3] object-cover object-center block" />
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 md:p-8 flex flex-col gap-4">
                        <div className="bg-primary-fixed/30 border border-primary-fixed-dim rounded-xl p-6">
                            <div className="flex items-center justify-between gap-4 mb-5"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Readiness Pulse</span><strong className="font-display-sm text-display-sm text-primary">81%</strong></div>
                            <div className="h-3 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full w-[81%] bg-primary-fixed-dim rounded-full"></div></div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">Audience groups are mapped, messages are staged, and resistance signals are reviewed before rollout windows.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30"><span className="material-symbols-outlined text-primary text-3xl mb-3">groups</span><h3 className="font-headline-sm text-headline-sm mb-2">Manager kit</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Talking points, team impacts, escalation routes, and local adoption actions.</p></div>
                            <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30"><span className="material-symbols-outlined text-primary text-3xl mb-3">campaign</span><h3 className="font-headline-sm text-headline-sm mb-2">Message map</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Sponsor narrative, channel cadence, feedback loops, and change moments.</p></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Training</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Role paths</p></div>
                            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Resistance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Barrier log</p></div>
                            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Hypercare</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Support plan</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 bg-surface-container-low rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">PMO Operating Model</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">The right controls, at the right level, for the right decisions.</h2><p className="font-body-md text-body-md text-on-surface-variant">A structured operating model keeps delivery governance useful rather than administrative.</p></div>
                    <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_140px] gap-4 p-5 border-b border-outline-variant/30"><span className="font-label-caps text-label-caps text-primary uppercase">SteerCo</span><p className="font-body-sm text-body-sm text-on-surface-variant">Strategic decisions, funding, risk acceptance, and value assurance.</p><strong className="text-primary">Monthly</strong></div>
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_140px] gap-4 p-5 border-b border-outline-variant/30 bg-primary-fixed/25"><span className="font-label-caps text-label-caps text-primary uppercase">PMO Hub</span><p className="font-body-sm text-body-sm text-on-surface-variant">Plan integrity, RAID, dependencies, milestones, and executive reporting.</p><strong className="text-primary">Weekly</strong></div>
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_140px] gap-4 p-5 border-b border-outline-variant/30"><span className="font-label-caps text-label-caps text-primary uppercase">Change Cell</span><p className="font-body-sm text-body-sm text-on-surface-variant">Stakeholder readiness, communications, training, and adoption signals.</p><strong className="text-primary">Weekly</strong></div>
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_140px] gap-4 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Value Office</span><p className="font-body-sm text-body-sm text-on-surface-variant">Benefits ownership, baselines, transition evidence, and value realization.</p><strong className="text-primary">Cycle</strong></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-8 md:p-10 architectural-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8"><div><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Delivery Evidence Board</span><h2 className="font-headline-lg text-headline-lg text-on-surface">Make program confidence visible.</h2></div><p className="font-body-md text-body-md text-on-surface-variant max-w-xl">A PMO should show what is true: plan health, decision latency, dependency pressure, adoption risk, and benefits confidence.</p></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="rounded-lg bg-surface-container-low p-5"><div className="font-display-sm text-display-sm text-primary mb-2">92%</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Plan integrity</p></div>
                        <div className="rounded-lg bg-primary-fixed/35 border border-primary-fixed-dim p-5"><div className="font-display-sm text-display-sm text-primary mb-2">18</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Open decisions</p></div>
                        <div className="rounded-lg bg-surface-container-low p-5"><div className="font-display-sm text-display-sm text-primary mb-2">7</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Dependency risks</p></div>
                        <div className="rounded-lg bg-surface-container-low p-5"><div className="font-display-sm text-display-sm text-primary mb-2">84%</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Adoption pulse</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
                    <div className="bg-surface-container-low rounded-xl p-8 md:p-10">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Risk, Action, Issue, Decision</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">A RAID log that drives behavior, not paperwork.</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Risk</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Future threats with owner, mitigation, and trigger.</p></div>
                            <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Action</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Committed work with due date, priority, and evidence.</p></div>
                            <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Issue</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Current blocker needing escalation or resolution.</p></div>
                            <div className="bg-surface-container-lowest rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Decision</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Choice required, impact, options, and accountable forum.</p></div>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-outline-variant/35 bg-surface-container-lowest shadow-sm">
                        <img src={assetPath("/asset/pmo/3.png")} alt="PMO decision and delivery visual" className="w-full h-full min-h-[320px] object-cover object-center block" />
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
                    <div className="bg-primary-fixed/25 border border-primary-fixed-dim rounded-xl p-8 md:p-10">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Momentum Diagnostics</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Find the drag before it becomes delay.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">PMO risk is often quiet: unclear sponsorship, diluted scope, late adoption, and decisions waiting outside the room.</p>
                        <div className="grid grid-cols-3 gap-3 text-center">
                            <div className="bg-surface-container-lowest rounded-lg p-4"><strong className="text-primary text-2xl">3</strong><p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Hotspots</p></div>
                            <div className="bg-surface-container-lowest rounded-lg p-4"><strong className="text-primary text-2xl">11</strong><p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Actions</p></div>
                            <div className="bg-surface-container-lowest rounded-lg p-4"><strong className="text-primary text-2xl">5d</strong><p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Review</p></div>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 md:p-8">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:items-center border border-outline-variant/30 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl">hourglass_top</span><div><h3 className="font-headline-sm text-headline-sm">Decision drag</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Escalations wait for the wrong forum.</p></div><span className="font-label-caps text-label-caps text-primary uppercase">High</span></div>
                            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:items-center bg-surface-container-low border border-outline-variant/30 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl">account_tree</span><div><h3 className="font-headline-sm text-headline-sm">Scope diffusion</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Work expands without benefit ownership.</p></div><span className="font-label-caps text-label-caps text-primary uppercase">Watch</span></div>
                            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:items-center border border-outline-variant/30 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl">person_alert</span><div><h3 className="font-headline-sm text-headline-sm">Adoption gap</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Users see change too late.</p></div><span className="font-label-caps text-label-caps text-primary uppercase">Active</span></div>
                            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:items-center bg-surface-container-low border border-outline-variant/30 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl">link_off</span><div><h3 className="font-headline-sm text-headline-sm">Dependency pressure</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Supplier, policy, data, or platform blockers remain open.</p></div><span className="font-label-caps text-label-caps text-primary uppercase">Escalate</span></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 bg-surface-container-low rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 xl:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Cadence Console</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">A week-by-week rhythm teams can actually use.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Instead of another equal card grid, this console shows PMO routines as working lanes for decisions, delivery, adoption, and value.</p>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] border-b border-outline-variant/30"><div className="bg-primary-fixed/30 p-5 font-label-caps text-label-caps text-primary uppercase">Monday</div><div className="p-5"><h3 className="font-headline-sm text-headline-sm">Leadership queue</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Decisions, escalations, and funding clarifications prepared for sponsors.</p></div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] border-b border-outline-variant/30"><div className="bg-surface-container-low p-5 font-label-caps text-label-caps text-primary uppercase">Tuesday</div><div className="p-5"><h3 className="font-headline-sm text-headline-sm">Workstream stand-up</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Milestones, blockers, owners, dependency movement, and delivery evidence.</p></div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] border-b border-outline-variant/30"><div className="bg-surface-container-low p-5 font-label-caps text-label-caps text-primary uppercase">Thursday</div><div className="p-5"><h3 className="font-headline-sm text-headline-sm">Change pulse</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Audience readiness, training completion, communication response, and resistance.</p></div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[130px_1fr]"><div className="bg-primary-fixed/30 p-5 font-label-caps text-label-caps text-primary uppercase">Friday</div><div className="p-5"><h3 className="font-headline-sm text-headline-sm">Value closeout</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Benefits evidence, next-week priorities, and transition actions.</p></div></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 border-y border-outline-variant/30">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
                        <div><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">PMO Knowledge Desk</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Questions framed around decisions, adoption, and value.</h2><p className="font-body-md text-body-md text-on-surface-variant">This treatment keeps the FAQ different from the other service pages by presenting each answer as an advisory note.</p></div>
                        <div className="grid grid-cols-1 gap-4">
                            <details className="group bg-surface-container-low border border-outline-variant/35 rounded-xl p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer flex items-center justify-between gap-4">PMO setup and governance<span className="material-symbols-outlined text-primary">expand_more</span></summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">A setup model can define forums, decision rights, cadence, reporting, RAID ownership, and workstream responsibilities.</p></details>
                            <details className="group bg-primary-fixed/25 border border-primary-fixed-dim rounded-xl p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer flex items-center justify-between gap-4">Change management integration<span className="material-symbols-outlined text-primary">expand_more</span></summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">Adoption activity can be planned alongside delivery milestones so training, communications, and readiness are never afterthoughts.</p></details>
                            <details className="group bg-surface-container-low border border-outline-variant/35 rounded-xl p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer flex items-center justify-between gap-4">Benefits beyond go-live<span className="material-symbols-outlined text-primary">expand_more</span></summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">Benefit owners, baselines, evidence packs, and transition checks can continue after launch until value is visible.</p></details>
                            <details className="group bg-surface-container-low border border-outline-variant/35 rounded-xl p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer flex items-center justify-between gap-4">Multi-vendor delivery<span className="material-symbols-outlined text-primary">expand_more</span></summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">Supplier dependencies, contract milestones, data readiness, and escalation routes can be managed through one integrated PMO rhythm.</p></details>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 md:p-8 architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
                        <div className="bg-primary-fixed/25 border border-primary-fixed-dim rounded-xl p-7 md:p-9">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">PMO Launch Kit</span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Start with a practical control room, not a paperwork tower.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">This CTA can later become a PMO setup workshop, recovery sprint, change readiness review, or value assurance conversation.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-surface-container-low border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">event_note</span><h3 className="font-headline-sm text-headline-sm mb-2">Cadence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Decision forums and reporting rhythm.</p></div>
                            <div className="bg-surface-container-low border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">fact_check</span><h3 className="font-headline-sm text-headline-sm mb-2">Evidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Plan, RAID, benefits, and readiness packs.</p></div>
                            <div className="bg-surface-container-low border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">rocket_launch</span><h3 className="font-headline-sm text-headline-sm mb-2">Launch</h3><p className="font-body-sm text-body-sm text-on-surface-variant">A first sprint to mobilize teams.</p></div>
                            <Link className="sm:col-span-3 inline-flex justify-center items-center bg-surface-container-lowest border border-primary-fixed-dim text-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-fixed/50 transition-colors" href="#">Plan PMO Session</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
