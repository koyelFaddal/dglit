"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function PublicSectorAdvisory() {
    return (
        <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="max-w-container-max mx-auto pb-12 md:pb-16 pt-6 md:pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow p-8 md:p-12 lg:p-14">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">Strategy / Public Sector Advisory</span>
                        <h1 className="font-display-lg text-display-lg text-on-surface mb-6">Advisory for modern, trusted, citizen-centered public services.</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl mb-8">DGL supports public institutions with strategy, governance, service modernization, digital public infrastructure, and transformation roadmaps designed for accountability and measurable outcomes.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="border-l-4 border-primary bg-surface-container-low rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Policy</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Evidence-led advisory</p></div>
                            <div className="border-l-4 border-primary-fixed-dim bg-primary-fixed/40 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Service</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Citizen experience</p></div>
                            <div className="border-l-4 border-accent-teal bg-surface-container-low rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Delivery</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Governed programs</p></div>
                        </div>
                    </div>
                    <aside className="lg:col-span-4 bg-primary-fixed/35 border border-primary-fixed-dim rounded-xl p-7 md:p-9 flex flex-col justify-between">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">Public Value Compass</span>
                            <div className="space-y-4">
                                <div className="bg-surface-container-lowest rounded-lg p-4"><div className="flex items-center justify-between mb-2"><span className="font-label-sm text-label-sm">Trust</span><span className="text-primary font-bold">High</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Transparent governance and accountable decisions.</p></div>
                                <div className="bg-surface-container-lowest rounded-lg p-4"><div className="flex items-center justify-between mb-2"><span className="font-label-sm text-label-sm">Access</span><span className="text-primary font-bold">Inclusive</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Services designed for diverse user needs.</p></div>
                                <div className="bg-surface-container-lowest rounded-lg p-4"><div className="flex items-center justify-between mb-2"><span className="font-label-sm text-label-sm">Impact</span><span className="text-primary font-bold">Measured</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Outcomes tracked through clear metrics.</p></div>
                                <div className="bg-surface-container-lowest rounded-lg p-4"><div className="flex items-center justify-between mb-2"><span className="font-label-sm text-label-sm">Resilience</span><span className="text-primary font-bold">Assured</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Services planned for continuity and demand shifts.</p></div>
                                <div className="bg-surface-container-lowest rounded-lg p-4"><div className="flex items-center justify-between mb-2"><span className="font-label-sm text-label-sm">Equity</span><span className="text-primary font-bold">Visible</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Decision data highlights access and inclusion gaps.</p></div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-12 border-y border-outline-variant/30">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.35fr]">
                        <div className="p-8 md:p-10 bg-primary-fixed/25 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Mandate Canvas</span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Convert public intent into accountable delivery choices.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">This page now uses a civic canvas and evidence-map structure, giving Public Sector Advisory its own visual language.</p>
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="rounded-lg bg-surface-container-low border border-outline-variant/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Mandate</span><h3 className="font-headline-sm text-headline-sm mt-3 mb-2">Policy promise</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Clarify the public commitment, legal duties, and expected social value.</p></div>
                                <div className="rounded-lg bg-primary-fixed/35 border border-primary-fixed-dim p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Service</span><h3 className="font-headline-sm text-headline-sm mt-3 mb-2">User journey</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Map how residents, staff, partners, and case teams experience the service.</p></div>
                                <div className="rounded-lg bg-surface-container-low border border-outline-variant/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Operating</span><h3 className="font-headline-sm text-headline-sm mt-3 mb-2">Decision model</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Define ownership, funding logic, escalation routes, and delivery controls.</p></div>
                                <div className="rounded-lg bg-surface-container-low border border-outline-variant/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Evidence</span><h3 className="font-headline-sm text-headline-sm mt-3 mb-2">Outcome proof</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Track public value, access, quality, risk, and benefits realization.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 xl:grid-cols-[0.7fr_1.3fr]">
                        <div className="p-8 md:p-10 bg-surface-container-low border-b xl:border-b-0 xl:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Public Service Blueprint</span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Design the service from resident need to accountable outcome.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">This blueprint panel replaces the repeated card style with a service-design board built for public programs.</p>
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
                                <div className="rounded-lg bg-primary-fixed/35 border border-primary-fixed-dim p-5 md:row-span-2"><span className="font-label-caps text-label-caps text-primary uppercase">Resident Trigger</span><h3 className="font-headline-sm text-headline-sm mt-3 mb-3">Need, eligibility, and access route</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Capture the first moment a citizen reaches the service, including assisted support and inclusion needs.</p></div>
                                <div className="rounded-lg bg-surface-container-low border border-outline-variant/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Service Desk</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Triage, case creation, status visibility, and handoff rules.</p></div>
                                <div className="rounded-lg bg-surface-container-low border border-outline-variant/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Decision Point</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Approvals, evidence checks, policy exceptions, and escalation paths.</p></div>
                                <div className="rounded-lg bg-surface-container-low border border-outline-variant/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Delivery Team</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Roles, workload, partner dependencies, and service standards.</p></div>
                                <div className="rounded-lg bg-primary-fixed/25 border border-primary-fixed-dim p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Outcome Evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Benefits, access, quality, cost, complaints, and public value measures.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 bg-surface-container-low rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Policy Room</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Decision material for accountable public programs.</h2><p className="font-body-md text-body-md text-on-surface-variant">A policy-room composition gives this page a different rhythm from the other strategy pages.</p></div>
                    <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_160px] gap-4 p-5 border-b border-outline-variant/30"><span className="font-label-caps text-label-caps text-primary uppercase">Briefing Note</span><p className="font-body-sm text-body-sm text-on-surface-variant">Options, tradeoffs, dependencies, legal duties, delivery risk, and recommendation route.</p><strong className="text-primary">Decision</strong></div>
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_160px] gap-4 p-5 border-b border-outline-variant/30 bg-primary-fixed/25"><span className="font-label-caps text-label-caps text-primary uppercase">Evidence Book</span><p className="font-body-sm text-body-sm text-on-surface-variant">Benefits logic, cost signals, equality impact, resident insight, and assurance notes.</p><strong className="text-primary">Scrutiny</strong></div>
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_160px] gap-4 p-5 border-b border-outline-variant/30"><span className="font-label-caps text-label-caps text-primary uppercase">Partner View</span><p className="font-body-sm text-body-sm text-on-surface-variant">Agency roles, consultation needs, procurement readiness, and service ownership.</p><strong className="text-primary">Alignment</strong></div>
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_160px] gap-4 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Value Case</span><p className="font-body-sm text-body-sm text-on-surface-variant">Outcome measures, social value, public reporting cadence, and delivery confidence.</p><strong className="text-primary">Benefits</strong></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="p-8 md:p-10">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Citizen Journey Lab</span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Find friction before it becomes service failure.</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="rounded-lg bg-surface-container-low p-5"><span className="font-display-sm text-display-sm text-primary">01</span><h3 className="font-headline-sm text-headline-sm mt-2">Discover</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Understand demand, access barriers, and channel behavior.</p></div>
                                <div className="rounded-lg bg-surface-container-low p-5"><span className="font-display-sm text-display-sm text-primary">02</span><h3 className="font-headline-sm text-headline-sm mt-2">Simplify</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Remove unnecessary steps, duplicated evidence, and unclear handoffs.</p></div>
                                <div className="rounded-lg bg-primary-fixed/35 border border-primary-fixed-dim p-5"><span className="font-display-sm text-display-sm text-primary">03</span><h3 className="font-headline-sm text-headline-sm mt-2">Support</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Design inclusive routes for vulnerable users and assisted service.</p></div>
                                <div className="rounded-lg bg-surface-container-low p-5"><span className="font-display-sm text-display-sm text-primary">04</span><h3 className="font-headline-sm text-headline-sm mt-2">Measure</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Track completion, status visibility, satisfaction, and equity signals.</p></div>
                            </div>
                        </div>
                        <div className="p-8 md:p-10 bg-primary-fixed/25 border-t lg:border-t-0 lg:border-l border-outline-variant/30 flex flex-col justify-center">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Resident Lens</span>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Public service design is strongest when policy, operations, data, and access standards are tested against real user journeys.</p>
                            <div className="rounded-lg overflow-hidden border border-outline-variant/35 bg-surface-container-lowest shadow-sm mb-5">
                                <img src={assetPath("/asset/public_sector/1.png")} alt="Public sector resident journey visual" className="w-full aspect-[4/3] object-cover object-center block" />
                            </div>
                            <div className="rounded-lg bg-surface-container-lowest border border-outline-variant/40 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Output</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Journey map, friction log, channel model, and improvement backlog.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 border-y border-outline-variant/30">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">Digital Public Infrastructure</span>
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
                    <div className="bg-surface-container-low rounded-xl p-8 md:p-10"><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Reusable platforms for many public services.</h2><p className="font-body-md text-body-md text-on-surface-variant">Modern public sector organizations require secure, scalable, and connected digital infrastructure to deliver efficient citizen services, improve operational transparency, and support long-term transformation goals.</p></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 rounded-lg bg-surface-container-lowest border border-outline-variant/40 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Identity</span><p className="font-body-sm text-body-sm text-on-surface-variant">Authentication, consent, assisted access, eligibility, and authorization.</p></div>
                        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 rounded-lg bg-primary-fixed/35 border border-primary-fixed-dim p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Workflow</span><p className="font-body-sm text-body-sm text-on-surface-variant">Reusable case management, approvals, task routing, and status visibility.</p></div>
                        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 rounded-lg bg-surface-container-lowest border border-outline-variant/40 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Data</span><p className="font-body-sm text-body-sm text-on-surface-variant">Standards, quality, sharing agreements, reporting, and governance.</p></div>
                        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4 rounded-lg bg-surface-container-lowest border border-outline-variant/40 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Front Door</span><p className="font-body-sm text-body-sm text-on-surface-variant">Portals, knowledge content, forms, dashboards, and communication channels.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="md:col-span-1 bg-primary-fixed/35 border border-primary-fixed-dim rounded-xl p-7"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Modernization Barriers</span><h2 className="font-headline-md text-headline-md text-on-surface">What blocks public service change?</h2></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-7"><h3 className="font-headline-sm text-headline-sm mb-3">Fragmented ownership</h3><p className="font-body-md text-body-md text-on-surface-variant">Teams own parts of the journey but no one owns the resident outcome.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-7"><h3 className="font-headline-sm text-headline-sm mb-3">Hidden service demand</h3><p className="font-body-md text-body-md text-on-surface-variant">Workarounds, repeat contact, and manual checks hide true demand patterns.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-7"><h3 className="font-headline-sm text-headline-sm mb-3">Legacy constraints</h3><p className="font-body-md text-body-md text-on-surface-variant">Systems, policies, procurement paths, and data gaps slow delivery.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-7"><h3 className="font-headline-sm text-headline-sm mb-3">Evidence gaps</h3><p className="font-body-md text-body-md text-on-surface-variant">Benefits, equity, and risk measures are often added too late.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-7"><h3 className="font-headline-sm text-headline-sm mb-3">Change fatigue</h3><p className="font-body-md text-body-md text-on-surface-variant">Staff need practical support, visible priorities, and manageable implementation waves.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 bg-surface-container-low rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 xl:grid-cols-[0.75fr_1.25fr] gap-8">
                    <div><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Governance Room</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">A practical board rhythm for public programs.</h2><p className="font-body-md text-body-md text-on-surface-variant">This section uses a governance-room model with decision rows instead of repeated cards.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_150px] border-b border-outline-variant/30 p-5 gap-3"><span className="font-label-caps text-label-caps text-primary uppercase">Portfolio</span><p className="font-body-sm text-body-sm text-on-surface-variant">Priorities, funding, dependencies, and risk exposure.</p><strong className="text-primary">Monthly</strong></div>
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_150px] border-b border-outline-variant/30 p-5 gap-3 bg-primary-fixed/25"><span className="font-label-caps text-label-caps text-primary uppercase">Service</span><p className="font-body-sm text-body-sm text-on-surface-variant">Performance, access, complaints, quality, and case flow.</p><strong className="text-primary">Fortnightly</strong></div>
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_150px] p-5 gap-3"><span className="font-label-caps text-label-caps text-primary uppercase">Assurance</span><p className="font-body-sm text-body-sm text-on-surface-variant">Audit evidence, compliance, accessibility, benefits, and decisions.</p><strong className="text-primary">Quarterly</strong></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-8 md:p-10 architectural-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8"><div><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Public Value Evidence</span><h2 className="font-headline-lg text-headline-lg text-on-surface">Measure what the public can feel.</h2></div><p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Metrics combine service efficiency, trust, inclusion, resilience, and fiscal accountability.</p></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="rounded-lg bg-surface-container-low p-5"><div className="font-display-sm text-display-sm text-primary mb-2">25%</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Less repeat contact</p></div>
                        <div className="rounded-lg bg-primary-fixed/35 border border-primary-fixed-dim p-5"><div className="font-display-sm text-display-sm text-primary mb-2">40%</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Digital uptake</p></div>
                        <div className="rounded-lg bg-surface-container-low p-5"><div className="font-display-sm text-display-sm text-primary mb-2">90d</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Roadmap sprint</p></div>
                        <div className="rounded-lg bg-surface-container-low p-5"><div className="font-display-sm text-display-sm text-primary mb-2">24/7</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Status visibility</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-7 md:p-8"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">FAQ</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Public advisory questions</h2><p className="font-body-md text-body-md text-on-surface-variant mb-6">Common questions from public institutions often focus on governance, policy delivery, service access, measurable outcomes, and multi-agency accountability.</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"><div className="bg-surface-container-lowest border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Advisory focus</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Policy-to-service planning, delivery controls, citizen access, and evidence packs for leadership review.</p></div></div></div>
                    <div className="lg:col-span-7 space-y-4">
                        <details className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer">Can this support policy implementation?</summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">Yes. Dummy content can later explain policy-to-delivery planning, governance, and public value tracking.</p></details>
                        <details className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer">Can DGL support digital public infrastructure?</summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">Yes. This placeholder can be expanded into platform, integration, data, and service design advisory.</p></details>
                        <details className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer">Is this suitable for multi-agency programs?</summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">Yes. Future content can describe stakeholder alignment, governance boards, and shared outcomes.</p></details>
                        <details className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer">Can accessibility and inclusion be included?</summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">Yes. The final content can cover inclusive service standards, assisted digital support, and equity measurement.</p></details>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-primary-fixed/30 border border-primary-fixed-dim rounded-xl p-6 md:p-8 architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-6 items-stretch">
                        <div className="bg-surface-container-lowest border border-outline-variant/35 rounded-lg p-7 md:p-9"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Public Value Planning</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Build a practical route from mandate to measurable public value.</h2><p className="font-body-md text-body-md text-on-surface-variant">This CTA uses a civic planning panel so it feels distinct from the other inner pages while staying within the same brand system.</p></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-surface-container-lowest border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">map</span><h3 className="font-headline-sm text-headline-sm mb-2">Service map</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Clarify journeys, responsibilities, and channel decisions.</p></div>
                            <div className="bg-surface-container-lowest border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">verified</span><h3 className="font-headline-sm text-headline-sm mb-2">Assurance route</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Connect benefits, risk, evidence, and reporting.</p></div>
                            <Link className="sm:col-span-2 inline-flex justify-center items-center bg-surface-container-lowest border border-primary-fixed-dim text-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-fixed/50 transition-colors" href="#">Plan Advisory Session</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
