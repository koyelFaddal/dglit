"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function PublicSectorCaseStudies() {
    return (
        <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="relative -mt-24 md:-mt-8 mb-4 -mx-gutter min-h-[600px] md:min-h-[580px] flex items-center overflow-hidden bg-white">
                <img src={assetPath("/asset/case_studies/public_sector/1.png")} alt="Public sector case studies and service modernization outcomes" className="absolute inset-0 h-full w-full object-cover object-center opacity-34 blur-[0.75px] scale-[1.01] hero-visual-balance" />
                <div className="absolute inset-0 bg-white/76"></div>
                <div className="absolute inset-0 bg-[#E0F7FA]/20"></div>
                <div className="absolute left-0 top-0 h-full w-[64%] bg-white/48"></div>
                <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pt-28 md:pt-16 lg:pt-20 pb-10 md:pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.64fr_0.36fr] gap-8 lg:gap-10 items-center">
                        <div>
                            <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-6">
                                <span>Case Studies</span><span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span><span className="text-primary">Public Sector</span>
                            </nav>
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">Public Sector Case Evidence</span>
                            <h1 className="font-display-lg text-[32px] leading-[40px] md:text-[40px] md:leading-[50px] lg:text-[46px] lg:leading-[56px] text-on-surface mb-6 max-w-3xl"><span className="sm:hidden">Public sector case studies with measurable service evidence.</span><span className="hidden sm:inline">Public sector case studies with measurable service evidence.</span></h1>
                            <p className="font-body-lg text-[16px] leading-[26px] sm:text-body-lg text-on-surface-variant max-w-2xl mb-8">See how public organizations improved resident access, operational visibility, program delivery, and accountability by turning complex service problems into practical delivery records.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#public-sector-featured-story">Review Case File <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/60 text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-primary transition-all" href="#public-sector-case-study-cta">Discuss Your Initiative <span className="material-symbols-outlined text-[18px]">forum</span></Link>
                            </div>
                        </div>
                        <div className="relative bg-white/95 border border-outline-variant/40 rounded-xl architectural-shadow overflow-hidden">
                            <div className="p-5 border-b border-outline-variant/30 bg-white">
                                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2">Case File Snapshot</span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">A compact delivery record for service leaders, program owners, and public accountability teams.</p>
                            </div>
                            <div className="p-5 space-y-4">
                                <div className="grid grid-cols-[92px_1fr] gap-4 items-start">
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Mandate</span>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">Improve access, response consistency, and traceable service decisions.</p>
                                </div>
                                <div className="h-px bg-outline-variant/35"></div>
                                <div className="grid grid-cols-[92px_1fr] gap-4 items-start">
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Evidence</span>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">Case queues, resident updates, exception logs, and performance reviews.</p>
                                </div>
                                <div className="h-px bg-outline-variant/35"></div>
                                <div className="grid grid-cols-[92px_1fr] gap-4 items-start">
                                    <span className="font-label-caps text-label-caps text-primary uppercase">Impact</span>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">Cleaner handoffs, fewer status gaps, and more reliable reporting.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 border-t border-outline-variant/30 bg-[#E0F7FA]/25">
                                <div className="p-3 text-center"><strong className="text-primary text-[20px] leading-6 block">3</strong><span className="font-label-caps text-[10px] leading-4 uppercase text-on-surface-variant">Lenses</span></div>
                                <div className="p-3 text-center border-x border-outline-variant/25"><strong className="text-primary text-[20px] leading-6 block">4</strong><span className="font-label-caps text-[10px] leading-4 uppercase text-on-surface-variant">Gates</span></div>
                                <div className="p-3 text-center"><strong className="text-primary text-[20px] leading-6 block">1</strong><span className="font-label-caps text-[10px] leading-4 uppercase text-on-surface-variant">Record</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-6 md:py-8">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.32fr_0.68fr]">
                        <div className="p-5 md:p-6 bg-[#E0F7FA]/30 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Public Sector Dossier</span>
                            <h2 className="font-headline-lg text-[24px] leading-[32px] md:text-[28px] md:leading-[36px] text-on-surface mb-3">A compact evidence file for every story.</h2>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">Each improvement is framed around mandate, intervention, and evidence so the section reads as one connected record.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
                            <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Mandate</span><p className="font-body-sm text-body-sm text-on-surface-variant">Public commitment, legal duty, service standard, or community need requiring action.</p></div>
                            <div className="p-5 bg-[#E0F7FA]/18"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Intervention</span><p className="font-body-sm text-body-sm text-on-surface-variant">Workflow, platform, data, governance, or staff practice changed in the service.</p></div>
                            <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant">Resident signals, service measures, operational records, and review evidence.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="public-sector-featured-story" className="-mx-gutter md:mx-auto max-w-container-max py-8 md:py-10 px-gutter md:px-8 bg-[#E0F7FA]/25 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.40fr_0.60fr] gap-5 lg:gap-7 items-center">
                    <div className="relative min-h-[250px] md:min-h-[300px] lg:min-h-[330px] rounded-xl overflow-hidden border border-outline-variant/35 architectural-shadow">
                        <img src={assetPath("/asset/case_studies/public_sector/2.png")} alt="Public sector transformation workshop and service delivery planning" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/32 to-black/4"></div>
                    </div>
                    <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden architectural-shadow">
                        <div className="grid grid-cols-1 md:grid-cols-[132px_1fr] border-b border-outline-variant/25">
                            <div className="p-4 bg-[#E0F7FA]/35 font-label-caps text-label-caps text-primary uppercase">Pressure</div>
                            <div className="p-4 md:p-5 font-body-md text-[16px] leading-[25px] text-on-surface-variant">Requests arrived through disconnected channels, leaving supervisors without reliable status, ownership, demand evidence, or a clear resident update trail.</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[132px_1fr] border-b border-outline-variant/25">
                            <div className="p-4 bg-white font-label-caps text-label-caps text-primary uppercase">Learning</div>
                            <div className="p-4 md:p-5 font-body-md text-[16px] leading-[25px] text-on-surface-variant">Staff adoption improved when the design reflected real call types, evidence gaps, urgent cases, assisted access needs, and manager escalation paths.</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[132px_1fr]">
                            <div className="p-4 bg-[#E0F7FA]/35 font-label-caps text-label-caps text-primary uppercase">Result</div>
                            <div className="p-4 md:p-5 font-body-md text-[16px] leading-[25px] text-on-surface-variant">Service reviews moved from anecdotal updates to a shared operating record for response times, backlog, quality, rework, and resident communications.</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Citizen Journey Record</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">The service path became visible from first contact to resolution.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">This section follows the case journey as a civic record rather than a repeated card grid.</p>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute left-6 right-6 top-8 h-px bg-outline-variant"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="relative bg-white border border-outline-variant/35 rounded-xl p-5 shadow-sm"><span className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-label-caps text-label-caps mb-5">01</span><h3 className="font-headline-sm text-headline-sm mb-2">Request</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Plain-language intake captured need, location, evidence, consent, and support requirements.</p></div>
                            <div className="relative bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5 shadow-sm"><span className="relative z-10 h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center font-label-caps text-label-caps mb-5">02</span><h3 className="font-headline-sm text-headline-sm mb-2">Triage</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Routing rules identified urgency, department ownership, dependency, and target response window.</p></div>
                            <div className="relative bg-white border border-outline-variant/35 rounded-xl p-5 shadow-sm"><span className="relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-label-caps text-label-caps mb-5">03</span><h3 className="font-headline-sm text-headline-sm mb-2">Action</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Teams worked from a shared queue with status, notes, documents, and escalation evidence.</p></div>
                            <div className="relative bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5 shadow-sm"><span className="relative z-10 h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center font-label-caps text-label-caps mb-5">04</span><h3 className="font-headline-sm text-headline-sm mb-2">Close</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Completion records fed resident updates, quality checks, and service improvement reviews.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
                        <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Operations Ledger</span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Back-office work was measured as a flow of commitments.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">The redesigned operating model turned invisible work into a ledger of decisions, handoffs, evidence, and service commitments.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 border-b md:border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Commitment</span><p className="font-body-sm text-body-sm text-on-surface-variant">Every case carried owner, next action, due date, and dependency details.</p></div>
                            <div className="p-6 border-b border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Exception</span><p className="font-body-sm text-body-sm text-on-surface-variant">Blocked work was recorded with reason, escalation route, and decision history.</p></div>
                            <div className="p-6 md:border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Capacity</span><p className="font-body-sm text-body-sm text-on-surface-variant">Supervisors compared workload, aging cases, and specialist queues in weekly reviews.</p></div>
                            <div className="p-6"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant">Completion quality, resident updates, and audit records were captured as part of normal work.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-white rounded-none md:rounded-xl border-y md:border border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.52fr_0.48fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Asset Evidence Map</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Infrastructure decisions were linked to place, risk, cost, and community need.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">The case study reframed asset management as a public evidence map, connecting field observations with planning decisions and resident impact.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="border-t-4 border-primary pt-4"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Place</span><p className="font-body-sm text-body-sm text-on-surface-variant">Area, asset group, service dependency, and community exposure.</p></div>
                            <div className="border-t-4 border-secondary pt-4"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Risk</span><p className="font-body-sm text-body-sm text-on-surface-variant">Condition, safety, failure likelihood, and operational consequence.</p></div>
                            <div className="border-t-4 border-primary pt-4"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Plan</span><p className="font-body-sm text-body-sm text-on-surface-variant">Maintenance sequence, funding decision, and service communication.</p></div>
                        </div>
                    </div>
                    <div className="relative rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-6 md:p-8 min-h-[360px] overflow-hidden">
                        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(to right, #c3c5d9 1px, transparent 1px), linear-gradient(to bottom, #c3c5d9 1px, transparent 1px)', backgroundSize: '72px 72px' }}></div>
                        <div className="relative h-full min-h-[300px]">
                            <div className="absolute left-[8%] top-[12%] bg-white border border-outline-variant/35 rounded-lg p-4 w-[58%] shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Inspection Cluster</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Field evidence grouped by repeat faults and service impact.</p></div>
                            <div className="absolute right-[4%] top-[42%] bg-white border border-outline-variant/35 rounded-lg p-4 w-[58%] shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Planning Signal</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Backlog, risk, and cost compared before work orders were approved.</p></div>
                            <div className="absolute left-[16%] bottom-[2%] bg-white border border-outline-variant/35 rounded-lg p-4 w-[56%] shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Public Update</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Resident-facing status reflected real maintenance progress.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
                    <div className="rounded-xl overflow-hidden border border-outline-variant/35 bg-white shadow-sm">
                        <img src={assetPath("/asset/case_studies/public_sector/3.png")} alt="Digital platform modernization for public service teams" className="w-full h-[300px] md:h-[430px] object-cover" />
                    </div>
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Platform Rationalization</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Legacy tools were treated as service records, not just applications.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-5">The modernization story traced which tools captured resident demand, which tools held decisions, which tools created reporting gaps, and which tools were safe to retire.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-3">
                            <div className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/35 p-4 font-label-caps text-label-caps text-primary uppercase">Keep</div><p className="rounded-lg bg-white border border-outline-variant/35 p-4 font-body-sm text-body-sm text-on-surface-variant">Systems with trusted source data, strong ownership, and reliable support paths.</p>
                            <div className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/35 p-4 font-label-caps text-label-caps text-primary uppercase">Connect</div><p className="rounded-lg bg-white border border-outline-variant/35 p-4 font-body-sm text-body-sm text-on-surface-variant">Services that required shared identifiers, status updates, and reporting feeds.</p>
                            <div className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/35 p-4 font-label-caps text-label-caps text-primary uppercase">Retire</div><p className="rounded-lg bg-white border border-outline-variant/35 p-4 font-body-sm text-body-sm text-on-surface-variant">Duplicate trackers and low-control tools after migration and service validation.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Community Impact Ledger</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Program evidence moved beyond activity counts.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Community programs needed a way to explain who was reached, what support was delivered, which needs were recurring, and where outcomes were changing.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Reach Record</span><p className="font-body-sm text-body-sm text-on-surface-variant">Tracked channel, location, referral source, eligibility signal, and assisted access need.</p></div>
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Support Record</span><p className="font-body-sm text-body-sm text-on-surface-variant">Captured intervention type, partner action, follow-up date, and service dependency.</p></div>
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Need Signal</span><p className="font-body-sm text-body-sm text-on-surface-variant">Grouped repeat demand, seasonal pressure, geography, and unresolved barriers.</p></div>
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Change Evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant">Connected service completion, resident feedback, and measurable program progress.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-12 items-start">
                    <div className="lg:sticky lg:top-28">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Decision Briefs</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Challenges were handled as decision briefs.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-5">Each brief captures the constraint, the operating decision, the evidence used, and the management result.</p>
                        <div className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/35 p-4 font-body-sm text-body-sm text-on-surface-variant mb-3">This format keeps public accountability visible without leaving the evidence column underdeveloped.</div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="rounded-xl overflow-hidden border border-outline-variant/35 bg-white shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-[0.32fr_0.34fr_0.34fr]">
                                <div className="p-5 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-primary uppercase">Constraint</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Fragmented data ownership across service teams and reporting packs.</p></div>
                                <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Decision</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Minimum service dataset, named source owners, and weekly reconciliation rules.</p></div>
                                <div className="p-5 bg-[#E0F7FA]/20"><span className="font-label-caps text-label-caps text-primary uppercase">Result</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Reports became explainable in service reviews, with fewer disputes over definitions.</p></div>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden border border-outline-variant/35 bg-white shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-[0.32fr_0.34fr_0.34fr]">
                                <div className="p-5 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-primary uppercase">Constraint</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Manual approval delay created backlogs and unclear accountability.</p></div>
                                <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Decision</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Delegated authority, exception routing, and visible approval thresholds.</p></div>
                                <div className="p-5 bg-[#E0F7FA]/20"><span className="font-label-caps text-label-caps text-primary uppercase">Result</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Waiting time, audit gaps, and follow-up escalations were reduced.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-white border-y md:border border-outline-variant/30 rounded-none md:rounded-xl">
                <div className="max-w-4xl mb-8">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Implementation Journey</span>
                    <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Delivery moved through controlled gates, not one large launch.</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">Each gate produced a practical decision record for sponsors and service owners.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-4">Gate 01</span><h3 className="font-headline-sm text-headline-sm mb-2">Service Baseline</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Journey, demand, data, policy, and staff pain points were documented.</p></div>
                    <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-4">Gate 02</span><h3 className="font-headline-sm text-headline-sm mb-2">Operating Design</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Workflow, roles, measures, and exception rules were agreed.</p></div>
                    <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-4">Gate 03</span><h3 className="font-headline-sm text-headline-sm mb-2">Live Pilot</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Real cases tested training, reporting, support, and escalation paths.</p></div>
                    <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-4">Gate 04</span><h3 className="font-headline-sm text-headline-sm mb-2">Scale Decision</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Sponsors reviewed adoption evidence and approved the rollout path.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
                        <div className="p-6 md:p-8 lg:p-10 bg-white">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Implementation Insights</span>
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The pilot worked because it used real public service scenarios.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Insights were separated from the journey so the lessons had room to breathe.</p>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">how_to_reg</span><h3 className="font-headline-sm text-headline-sm mb-2">Role Reality</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Training matched what officers, supervisors, and service owners actually did.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">error</span><h3 className="font-headline-sm text-headline-sm mb-2">Exception First</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Urgent, incomplete, and disputed cases were tested before routine work.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">summarize</span><h3 className="font-headline-sm text-headline-sm mb-2">Decision Pack</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Sponsors received evidence on adoption, quality, risk, and readiness.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Outcome Rules</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Lessons learned became reusable delivery rules.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">The case studies ended with reusable rules that could guide future services without making every program look the same.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5 shadow-sm"><h3 className="font-headline-sm text-headline-sm mb-2">Measure Service Reality</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Track demand, effort, completion, rework, and resident confidence together.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5 shadow-sm"><h3 className="font-headline-sm text-headline-sm mb-2">Protect Assisted Access</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Digital services must still support residents who need staff help.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5 shadow-sm"><h3 className="font-headline-sm text-headline-sm mb-2">Name Ownership</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Every queue, rule, data field, and exception path needs a service owner.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5 shadow-sm"><h3 className="font-headline-sm text-headline-sm mb-2">Report Decisions</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Dashboards should support staffing, funding, risk, and public value decisions.</p></div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.48fr_0.52fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Sustainability Model</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">The partnership shifted from build support to service stewardship.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">After launch, the work centered on service ownership, benefits review, policy changes, staff capability, and a manageable improvement backlog.</p>
                    </div>
                    <div className="rounded-xl bg-white border border-outline-variant/35 overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-white">Review</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Monthly service evidence, benefits, risks, and resident feedback.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Capability</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Role-based coaching, playbooks, reporting handover, and admin routines.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr]"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-white">Improve</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Enhancement choices based on demand, quality, accessibility, and policy change.</div></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_0.7fr] gap-8 lg:gap-12 items-start">
                    <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Related Case Records</span><h2 className="font-headline-lg text-headline-lg text-on-surface">Adjacent stories in the public delivery archive.</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Regulatory Desk</span><p className="font-body-sm text-body-sm text-on-surface-variant">Inspection scheduling, licensing evidence, and transparent decision logs.</p></div>
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Municipal Desk</span><p className="font-body-sm text-body-sm text-on-surface-variant">Resident requests, local assets, service standards, and field updates.</p></div>
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Workforce Desk</span><p className="font-body-sm text-body-sm text-on-surface-variant">Staff workflows, knowledge access, approvals, and adoption evidence.</p></div>
                    </div>
                </div>
            </section>
            <section id="public-sector-case-study-cta" className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr]">
                        <div className="p-6 md:p-8 lg:p-10 bg-white">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Start the Conversation</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Turn a public service challenge into a measurable delivery story.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Start with a service pressure, program outcome, reporting gap, or stakeholder commitment that needs clearer evidence and a practical modernization path.</p>
                            <div className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/35 p-5 mb-6">
                                <span className="font-label-caps text-label-caps text-primary uppercase block mb-3">First output</span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">A scoped case-file brief with mandate, evidence, risk, owners, decision points, and next-step actions.</p>
                            </div>
                            <Link className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start the Conversation <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/30 border-t lg:border-t-0 lg:border-l border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">What We Map Together</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Service</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Resident journey, case type, operational queue, or public commitment.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Demand, data, controls, risks, signals, and stakeholder expectations.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Story</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Improvement path, decision record, benefits evidence, and sequence.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Governance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Owners, approval points, reporting cadence, and sustainability duties.</p></div>
                            </div>
                            <div className="mt-4 rounded-lg bg-white/80 border border-outline-variant/35 p-4 font-body-sm text-body-sm text-on-surface-variant">Designed for public sector teams that need a credible story, not a generic transformation slide.</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
