"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function EducationResearchCaseStudies() {
    return (
        <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="relative -mt-8 mb-12 -mx-gutter min-h-[620px] md:min-h-[680px] flex items-end md:items-center overflow-hidden bg-white">
                <img src={assetPath("/asset/case_studies/education_research/1.png")} alt="Education and research case study outcomes" className="absolute inset-0 w-full h-full object-cover blur-[2.5px] scale-[1.02]" />
                <div className="absolute inset-0 bg-white/82"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/72 to-white/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-white/20"></div>
                <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-fixed/25 blur-3xl opacity-70"></div>
                <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pb-20 md:pb-28 pt-12">
                    <div className="max-w-4xl">
                        <nav className="flex flex-wrap items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-6">
                            <span>Case Studies</span>
                            <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                            <span className="text-primary">Education &amp; Research</span>
                        </nav>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">Academic Impact Stories</span>
                        <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-3xl">Education and research case studies with measurable academic impact.</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 lg:mb-14">See how institutions improved learner journeys, research operations, service visibility, and governance by turning complex education challenges into practical delivery evidence.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Review Success Stories <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                            <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/60 text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-primary transition-all" href="#">Discuss Education Outcomes <span className="material-symbols-outlined text-[18px]">school</span></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-6 lg:gap-10 items-start">
                    <div className="lg:sticky lg:top-28">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Case Study Record</span>
                        <h2 className="font-headline-lg text-[27px] leading-[35px] md:text-[34px] md:leading-[42px] text-on-surface mb-4">Education transformation told through outcomes, not service categories.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">These stories follow the work from institutional pressure to implementation choices, adoption evidence, and measurable academic value.</p>
                    </div>
                    <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden architectural-shadow">
                        <div className="grid grid-cols-1 md:grid-cols-[0.34fr_0.66fr] border-b border-outline-variant/25">
                            <div className="p-5 bg-[#E0F7FA]/35 font-label-caps text-label-caps uppercase text-primary">Student Experience</div>
                            <div className="p-5 font-body-md text-body-md text-on-surface-variant">Disconnected advising, service requests, and programme updates were consolidated into clearer journeys that students and support teams could follow.</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[0.34fr_0.66fr] border-b border-outline-variant/25">
                            <div className="p-5 bg-white font-label-caps text-label-caps uppercase text-primary">Research Operations</div>
                            <div className="p-5 font-body-md text-body-md text-on-surface-variant">Funding, ethics, project collaboration, and reporting moved from fragmented local practice to a more visible operating record.</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[0.34fr_0.66fr]">
                            <div className="p-5 bg-[#E0F7FA]/35 font-label-caps text-label-caps uppercase text-primary">Institutional Evidence</div>
                            <div className="p-5 font-body-md text-body-md text-on-surface-variant">Leaders gained cleaner measures for adoption, service demand, learner impact, risk, and investment prioritization.</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr] gap-7 lg:gap-10 items-center">
                    <div className="relative min-h-[300px] md:min-h-[390px] rounded-xl overflow-hidden border border-outline-variant/35 architectural-shadow">
                        <img src={assetPath("/asset/case_studies/education_research/2.png")} alt="Education transformation team reviewing learning and research outcomes" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/82 via-black/42 to-transparent p-5 md:p-7">
                            <span className="font-label-caps text-[11px] leading-4 uppercase tracking-widest text-white/82 block mb-3">Featured Success Story</span>
                            <h2 className="font-headline-sm text-[25px] leading-[33px] md:text-[32px] md:leading-[40px] text-white max-w-xl">A digital campus programme became a shared delivery record.</h2>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5 md:p-6 shadow-sm">
                            <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Starting Point</span>
                            <p className="font-body-md text-body-md text-on-surface-variant">Students, faculty, researchers, and administrators were using separate channels, duplicated records, and inconsistent support practices.</p>
                        </div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5 md:p-6 shadow-sm">
                            <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Implementation Shift</span>
                            <p className="font-body-md text-body-md text-on-surface-variant">The programme introduced common journey ownership, intake evidence, service measures, research workflow controls, and adoption routines.</p>
                        </div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5 md:p-6 shadow-sm">
                            <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Outcome</span>
                            <p className="font-body-md text-body-md text-on-surface-variant">Campus teams could compare demand, progress, quality, and impact without waiting for manual status consolidation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="-mx-gutter md:mx-auto max-w-container-max px-gutter md:px-8 py-10 md:py-12 bg-[#E0F7FA]/25 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.32fr_0.68fr] gap-7 lg:gap-10 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Implementation Notes</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">The strongest gains came from practical delivery decisions.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Each case was reviewed through the same evidence lens, but the presentation stays focused on the education result.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Journey Ownership</span><p className="font-body-sm text-body-sm text-on-surface-variant">Named owners reduced ambiguity across admissions, advising, research services, and faculty support.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Evidence Capture</span><p className="font-body-sm text-body-sm text-on-surface-variant">Service events, funding milestones, approvals, and handoffs were made easier to audit.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Adoption Rhythm</span><p className="font-body-sm text-body-sm text-on-surface-variant">Pilot feedback shaped templates, support materials, governance routines, and rollout sequencing.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Decision Confidence</span><p className="font-body-sm text-body-sm text-on-surface-variant">Leadership reviews used consistent signals for service demand, quality, cost, risk, and learner value.</p></div>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr]">
                        <div className="p-6 md:p-8 lg:p-10">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Outcome Ledger</span>
                            <h2 className="font-headline-lg text-[27px] leading-[35px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Impact was tracked as an institutional story.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Instead of a generic metric strip, each measure is tied to a visible change in academic operations.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 border-t lg:border-t-0 lg:border-l border-outline-variant/30">
                            <div className="p-6 border-b sm:border-r border-outline-variant/25"><strong className="block text-primary text-[34px] leading-10 mb-2">360</strong><span className="font-label-caps text-label-caps uppercase text-on-surface">Learner Visibility</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Advising, progress, support, and engagement evidence connected in one review view.</p></div>
                            <div className="p-6 border-b border-outline-variant/25 bg-[#E0F7FA]/25"><strong className="block text-primary text-[34px] leading-10 mb-2">1x</strong><span className="font-label-caps text-label-caps uppercase text-on-surface">Research Record</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Funding, ethics, collaboration, and output evidence reduced duplicated reporting.</p></div>
                            <div className="p-6 sm:border-r border-outline-variant/25 bg-[#E0F7FA]/25"><strong className="block text-primary text-[34px] leading-10 mb-2">4</strong><span className="font-label-caps text-label-caps uppercase text-on-surface">Service Domains</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Learner services, teaching delivery, research enablement, and enterprise support.</p></div>
                            <div className="p-6"><strong className="block text-primary text-[34px] leading-10 mb-2">90d</strong><span className="font-label-caps text-label-caps uppercase text-on-surface">Roadmap Sprint</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Priorities were sequenced into decisions that sponsors could fund and govern.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.56fr_0.44fr] gap-7 lg:gap-10 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Lessons Learned</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-5">Education programmes succeed when the operating model respects academic reality.</h2>
                        <div className="divide-y divide-outline-variant/30 rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                            <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Protect context</span><p className="font-body-sm text-body-sm text-on-surface-variant">Research, teaching, administration, and student support cannot be forced into one generic workflow.</p></div>
                            <div className="p-5 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Design for handoffs</span><p className="font-body-sm text-body-sm text-on-surface-variant">The most useful improvements made ownership, evidence, status, and escalation visible at transition points.</p></div>
                            <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Measure trust</span><p className="font-body-sm text-body-sm text-on-surface-variant">Teams adopted the new model when reports reflected real work and helped them resolve issues faster.</p></div>
                        </div>
                    </div>
                    <div className="relative min-h-[300px] md:min-h-[380px] rounded-xl overflow-hidden border border-outline-variant/35 architectural-shadow">
                        <img src={assetPath("/asset/case_studies/education_research/3.png")} alt="Education and research team reviewing implementation lessons" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                        <div className="absolute left-5 right-5 bottom-5 text-white">
                            <span className="font-label-caps text-[11px] leading-4 uppercase tracking-widest text-white/80 block mb-2">Field Reflection</span>
                            <p className="font-headline-sm text-[23px] leading-[31px]">Stakeholders trusted the programme when every change could be traced to a better learning or research outcome.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/25 overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.48fr_0.52fr]">
                        <div className="p-6 md:p-8 lg:p-10 bg-white">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Education Partnership</span>
                            <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Build the next education success story around evidence.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Start with a learner journey, research workflow, institutional reporting gap, or campus service pressure that needs a measurable path forward.</p>
                            <Link className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start Assessment <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-3 gap-4 content-center">
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Review</span><p className="font-body-sm text-body-sm text-on-surface-variant">Journeys, platforms, data, risks, and delivery readiness.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Prioritize</span><p className="font-body-sm text-body-sm text-on-surface-variant">Initiatives with clear academic value and achievable outcomes.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Mobilize</span><p className="font-body-sm text-body-sm text-on-surface-variant">Governance, delivery waves, adoption, and measurable benefits.</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
