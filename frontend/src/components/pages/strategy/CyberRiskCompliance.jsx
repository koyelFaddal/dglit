"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function CyberRiskCompliance() {
    return (
        <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="max-w-container-max mx-auto pb-12 md:pb-16 pt-6 md:pt-8">
                <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.25fr] gap-6">
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow p-8 md:p-12">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">Strategy / Cyber, Risk &amp; Compliance</span>
                        <h1 className="font-headline-lg text-[29px] leading-[37px] sm:text-[40px] sm:leading-[48px] md:text-[46px] md:leading-[54px] xl:text-[48px] xl:leading-[56px] text-on-surface mb-6"><span className="block whitespace-nowrap">Cyber assurance</span><span className="block whitespace-nowrap">for digital operations.</span></h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">A governance-led service page for cyber risk, control maturity, compliance evidence, supplier exposure, and operational resilience.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-primary-fixed/40 border border-primary-fixed-dim rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Board Lens</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Risk translated into decisions.</p></div>
                            <div className="bg-surface-container-low border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Control Lens</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Evidence, owners, and cadence.</p></div>
                        </div>
                    </div>
                    <div className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-6 md:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                            <div><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Risk Register Snapshot</span><h2 className="font-headline-md text-headline-md text-on-surface mt-2">Priority exposures</h2></div>
                            <span className="material-symbols-outlined text-primary text-4xl">security</span>
                        </div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.7fr_0.7fr] gap-3 bg-surface-container-lowest rounded-lg p-4"><p className="font-label-sm text-label-sm">Identity and privileged access</p><span className="font-body-sm text-body-sm text-on-surface-variant">Impact: High</span><span className="font-body-sm text-body-sm text-primary">Owner mapped</span></div>
                            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.7fr_0.7fr] gap-3 bg-surface-container-lowest rounded-lg p-4"><p className="font-label-sm text-label-sm">Cloud configuration drift</p><span className="font-body-sm text-body-sm text-on-surface-variant">Impact: Medium</span><span className="font-body-sm text-body-sm text-primary">Controls active</span></div>
                            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.7fr_0.7fr] gap-3 bg-surface-container-lowest rounded-lg p-4"><p className="font-label-sm text-label-sm">Supplier assurance gaps</p><span className="font-body-sm text-body-sm text-on-surface-variant">Impact: High</span><span className="font-body-sm text-body-sm text-primary">Review needed</span></div>
                            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.7fr_0.7fr] gap-3 bg-surface-container-lowest rounded-lg p-4"><p className="font-label-sm text-label-sm">Incident response readiness</p><span className="font-body-sm text-body-sm text-on-surface-variant">Impact: High</span><span className="font-body-sm text-body-sm text-primary">Exercise planned</span></div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            <div className="bg-primary-fixed/40 border border-primary-fixed-dim rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Control Health</span><div className="font-display-sm text-display-sm text-primary mt-3 mb-1">82%</div><p className="font-body-sm text-body-sm text-on-surface-variant">Mapped controls with owners, evidence cadence, and remediation status.</p></div>
                            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Next Action</span><h3 className="font-headline-sm text-headline-sm mt-3 mb-2">Supplier review sprint</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Prioritize third-party exposure, exception closure, and executive reporting.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-12 border-y border-outline-variant/30">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]">
                        <div className="p-7 md:p-9 bg-primary-fixed/25 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Risk Command Sequence</span>
                            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Four decisions, one governed cyber path.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">This section uses a command-sequence layout for Cyber, replacing the repeated equal-card pattern used elsewhere.</p>
                            <div className="mt-7 md:mt-9 rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container-lowest shadow-sm max-w-[420px]">
                                <img src={assetPath("/asset/cyber/1.png")} alt="Cyber risk command visual" className="w-full aspect-[4/3] object-cover object-center block" />
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-3 md:items-center rounded-lg bg-surface-container-low border border-outline-variant/30 p-4">
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Govern</span>
                                    <div><h3 className="font-headline-sm text-headline-sm">Risk appetite and ownership</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Define tolerance, executive reporting, escalation, and decision rights.</p></div>
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Board ready</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-3 md:items-center rounded-lg bg-primary-fixed/35 border border-primary-fixed-dim p-4">
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Assure</span>
                                    <div><h3 className="font-headline-sm text-headline-sm">Controls with evidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Map obligations to proof, owners, test cycles, and remediation notes.</p></div>
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Traceable</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-3 md:items-center rounded-lg bg-surface-container-low border border-outline-variant/30 p-4">
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Respond</span>
                                    <div><h3 className="font-headline-sm text-headline-sm">Incident decision rhythm</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Prepare playbooks, communication routes, recovery paths, and rehearsals.</p></div>
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Rehearsed</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-3 md:items-center rounded-lg bg-surface-container-low border border-outline-variant/30 p-4">
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Improve</span>
                                    <div><h3 className="font-headline-sm text-headline-sm">Exposure burn-down</h3><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Prioritize remediation by attack surface, business impact, cost, and closure evidence.</p></div>
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Measured</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.4fr]">
                        <div className="p-8 md:p-12 border-b xl:border-b-0 xl:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Cyber Operating Map</span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Separate strategy, controls, evidence, and recovery into one command path.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">This section uses a command-map treatment for Cyber only, so it does not repeat the card grids used on the other strategy pages.</p>
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="rounded-lg border border-outline-variant/40 bg-primary-fixed/35 p-5"><div className="flex items-center gap-3 mb-3"><span className="material-symbols-outlined text-primary">policy</span><span className="font-label-caps text-label-caps text-primary uppercase">01 Govern</span></div><h3 className="font-headline-sm text-headline-sm mb-2">Risk appetite</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Set tolerance, ownership, reporting cadence, and escalation thresholds.</p></div>
                                <div className="rounded-lg border border-outline-variant/40 bg-surface-container-low p-5"><div className="flex items-center gap-3 mb-3"><span className="material-symbols-outlined text-primary">fact_check</span><span className="font-label-caps text-label-caps text-primary uppercase">02 Prove</span></div><h3 className="font-headline-sm text-headline-sm mb-2">Evidence packs</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Attach proof, review dates, control owners, and audit notes.</p></div>
                                <div className="rounded-lg border border-outline-variant/40 bg-surface-container-low p-5"><div className="flex items-center gap-3 mb-3"><span className="material-symbols-outlined text-primary">crisis_alert</span><span className="font-label-caps text-label-caps text-primary uppercase">03 Respond</span></div><h3 className="font-headline-sm text-headline-sm mb-2">Incident decisions</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Clarify who acts, who approves, and when communications begin.</p></div>
                                <div className="rounded-lg border border-primary-fixed-dim bg-primary-fixed/45 p-5"><div className="flex items-center gap-3 mb-3"><span className="material-symbols-outlined text-primary">trending_down</span><span className="font-label-caps text-label-caps text-primary uppercase">04 Reduce</span></div><h3 className="font-headline-sm text-headline-sm mb-2">Exposure burn-down</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Rank remediation by business impact, attack surface, and delivery effort.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-6 items-stretch">
                    <div className="bg-surface-container-low rounded-xl p-8 md:p-10">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Assurance Circuit</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">A live circuit from obligation to executive action.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Instead of another standard card row, this circuit shows how controls move across teams, systems, and governance forums.</p>
                    </div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 md:p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                            <div className="rounded-lg bg-primary-fixed/35 border border-primary-fixed-dim p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Obligation</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Regulatory, contractual, and internal commitments translated into control intent.</p></div>
                            <div className="rounded-lg bg-surface-container-low border border-outline-variant/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Control</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Mapped safeguards across identity, data, cloud, suppliers, and operations.</p></div>
                            <div className="rounded-lg bg-surface-container-low border border-outline-variant/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Proof captured with ownership, review windows, findings, and closure notes.</p></div>
                            <div className="rounded-lg bg-primary-fixed/35 border border-primary-fixed-dim p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Decision</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Board-level view of residual risk, exceptions, and funding priorities.</p></div>
                        </div>
                        <div className="mt-6 rounded-lg border border-outline-variant/30 bg-surface-container-low p-5">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <p className="font-body-md text-body-md text-on-surface-variant">Cyber assurance becomes easier to govern when each item has a route, owner, evidence standard, and next decision.</p>
                                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">Command-ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="lg:col-span-5 p-8 md:p-12 bg-primary-fixed/35"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Incident Tabletop</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Practice the decisions before the incident.</h2><p className="font-body-md text-body-md text-on-surface-variant">Cyber resilience improves when leaders rehearse roles, choices, communications, and recovery timing.</p></div>
                        <div className="lg:col-span-7 p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div><span className="font-label-caps text-label-caps text-primary uppercase">Trigger</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Detection and triage thresholds.</p></div>
                            <div><span className="font-label-caps text-label-caps text-primary uppercase">Decision</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Executive authority and escalation.</p></div>
                            <div><span className="font-label-caps text-label-caps text-primary uppercase">Communicate</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Internal, customer, regulator, and supplier messaging.</p></div>
                            <div><span className="font-label-caps text-label-caps text-primary uppercase">Recover</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Service restoration and post-incident learning.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Evidence Vault</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Audit readiness without last-minute chaos.</h2><p className="font-body-md text-body-md text-on-surface-variant">A dedicated evidence model gives this page its own compliance-focused rhythm.</p></div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><span className="font-display-sm text-display-sm text-primary">01</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Obligation library</p></div>
                        <div className="bg-primary-fixed/40 border border-primary-fixed-dim rounded-lg p-5"><span className="font-display-sm text-display-sm text-primary">02</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Control proof</p></div>
                        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><span className="font-display-sm text-display-sm text-primary">03</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Review schedule</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Remediation Board</span>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-5">
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Now</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Close exposed access, critical misconfigurations, and audit blockers.</p></div>
                    <div className="bg-primary-fixed/40 border border-primary-fixed-dim rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Next</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Standardize evidence cycles, supplier assurance, and executive reporting.</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6"><h3 className="font-headline-sm text-headline-sm mb-3">Later</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Mature resilience exercises, automation, metrics, and continuous control monitoring.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 bg-surface-container-low rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-5"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Third-Party Exposure</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Risk often enters through the ecosystem.</h2></div>
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-surface-container-lowest rounded-lg p-5">Supplier criticality scoring</div>
                        <div className="bg-surface-container-lowest rounded-lg p-5">Contract control clauses</div>
                        <div className="bg-surface-container-lowest rounded-lg p-5">Assurance questionnaire design</div>
                        <div className="bg-surface-container-lowest rounded-lg p-5">Exception and waiver governance</div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><div className="font-display-sm text-display-sm text-primary mb-2">30d</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Risk baseline</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><div className="font-display-sm text-display-sm text-primary mb-2">90d</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Control roadmap</p></div>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><div className="font-display-sm text-display-sm text-primary mb-2">12</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Evidence packs</p></div>
                    <div className="bg-primary-fixed/45 border border-primary-fixed-dim rounded-lg p-5"><div className="font-display-sm text-display-sm text-primary mb-2">24/7</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Resilience view</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14 border-y border-outline-variant/30">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
                    <div><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Cyber Questions</span><h2 className="font-headline-lg text-headline-lg text-on-surface">Questions leaders usually ask before a risk review.</h2></div>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Dummy answers can later be replaced with specific delivery, compliance, and operating-model details.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <details className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer">Can this support audit preparation?</summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">Yes. Dummy content can later describe evidence packs, control mapping, and remediation tracking.</p></details>
                    <details className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer">Can DGL align cyber risk to business priorities?</summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">Yes. Future content can explain risk appetite, executive reporting, and investment sequencing.</p></details>
                    <details className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer">Can the model include suppliers and third parties?</summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">Yes. Placeholder content can cover supplier criticality, assurance reviews, contract clauses, and exception governance.</p></details>
                    <details className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg p-5"><summary className="font-headline-sm text-headline-sm cursor-pointer">How does this help incident readiness?</summary><p className="font-body-md text-body-md text-on-surface-variant mt-4">It can later define tabletop scenarios, escalation paths, communication roles, and recovery decision points.</p></details>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-14">
                <div className="bg-primary-fixed/30 border border-primary-fixed-dim rounded-xl p-6 md:p-8 architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-6 items-stretch">
                        <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/35 p-7 md:p-9">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Risk Assurance Planning</span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Turn cyber uncertainty into a governed action plan.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">This Cyber-specific CTA keeps the light palette but uses a split planning panel, unlike the repeated CTA blocks on the other pages.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">shield_lock</span><h3 className="font-headline-sm text-headline-sm mb-2">Readiness scan</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Baseline risk, controls, and evidence gaps.</p></div>
                            <div className="bg-surface-container-lowest rounded-lg border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">route</span><h3 className="font-headline-sm text-headline-sm mb-2">Action route</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Prioritized remediation and leadership decisions.</p></div>
                            <Link className="sm:col-span-2 inline-flex justify-center items-center bg-surface-container-lowest border border-primary-fixed-dim text-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-fixed/50 transition-colors" href="#">Start Risk Review</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
