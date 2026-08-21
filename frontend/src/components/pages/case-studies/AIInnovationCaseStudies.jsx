"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function AIInnovationCaseStudies() {
    return (
        <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="relative -mt-24 min-h-[680px] lg:min-h-[760px] flex items-center pt-20 overflow-hidden bg-surface -mx-gutter">
                <div className="absolute inset-0 z-0">
                    <img alt="AI innovation case study workspace" className="hero-visual-balance w-full h-full object-cover object-center lg:object-right opacity-80" src={assetPath("/asset/case_studies/ai_innovation/1.png")} />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20"></div>
                    <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-fixed/25 blur-3xl opacity-70"></div>
                </div>
                <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                    <div className="max-w-2xl">
                        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5">
                            <span>Case Studies</span>
                            <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                            <span className="text-primary">AI Innovation</span>
                        </nav>
                        <span className="inline-block bg-accent-teal/10 text-accent-teal font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">APPLIED AI EVIDENCE</span>
                        <h1 className="font-display-lg text-[34px] leading-[42px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-text-primary mb-6"><span className="hidden sm:inline">AI innovation case studies grounded in useful business outcomes</span><span className="sm:hidden">AI innovation case studies with useful outcomes</span></h1>
                        <p className="font-body-lg text-body-lg text-text-secondary mb-8 max-w-xl">DGL helps organizations move from promising AI ideas to governed assistants, automation, search, analytics, and decision support that teams can trust in daily work.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 sm:px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:shadow-lg transition-all" href="#">Explore AI Outcomes <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                            <Link className="inline-flex items-center justify-center gap-2 border-[1.5px] border-primary bg-white/75 text-primary px-6 sm:px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/5 transition-all" href="#">Plan AI Readiness</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-12 items-start">
                    <div className="border-y border-outline-variant/35">
                        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-4 py-5 border-b border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Assist</span><p className="font-body-md text-body-md text-on-surface-variant">Copilots helped staff retrieve source-backed answers, draft responses, summarize cases, and prepare decisions without removing human review.</p></div>
                        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-4 py-5 border-b border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Automate</span><p className="font-body-md text-body-md text-on-surface-variant">High-volume routing, classification, document review, and status preparation were redesigned around exception handling and accountable ownership.</p></div>
                        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-4 py-5"><span className="font-label-caps text-label-caps text-primary uppercase">Decide</span><p className="font-body-md text-body-md text-on-surface-variant">Predictive signals, recommendations, and analytics supported leaders with clearer evidence on demand, risk, service quality, and productivity.</p></div>
                    </div>
                    <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-8">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">AI Innovation Overview</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">The strongest AI cases began with a real work constraint.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">The page follows case records where AI was attached to a task, decision, service moment, or operating measure rather than treated as a standalone experiment.</p>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-8 lg:gap-12 items-stretch">
                    <div className="relative min-h-[430px] md:min-h-[520px] overflow-hidden rounded-xl border border-outline-variant/35">
                        <img src={assetPath("/asset/case_studies/ai_innovation/2.png")} alt="AI assistant performance review and innovation case study" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/62 to-white/10"></div>
                        <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-3">
                            <span className="bg-white/85 border border-outline-variant/40 rounded-lg px-4 py-2 font-label-caps text-label-caps text-primary uppercase">Knowledge assistant</span>
                            <span className="bg-white/85 border border-outline-variant/40 rounded-lg px-4 py-2 font-label-caps text-label-caps text-primary uppercase">Service operations</span>
                        </div>
                        <div className="absolute left-0 bottom-0 right-0 p-6 md:p-8">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Featured AI Transformation Story</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface max-w-2xl">A trusted knowledge assistant reduced search effort while keeping experts in control.</h2>
                        </div>
                    </div>
                    <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden shadow-sm">
                        <div className="p-6 md:p-7 border-b border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Problem record</span><p className="font-body-md text-body-md text-on-surface-variant mt-3">Service teams searched across policies, product notes, ticket history, and process pages before answering routine questions.</p></div>
                        <div className="p-6 md:p-7 border-b border-outline-variant/25 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">AI intervention</span><p className="font-body-md text-body-md text-on-surface-variant mt-3">A retrieval-based assistant was built with citations, confidence cues, feedback capture, and escalation to named content owners.</p></div>
                        <div className="p-6 md:p-7"><span className="font-label-caps text-label-caps text-primary uppercase">Business outcome</span><p className="font-body-md text-body-md text-on-surface-variant mt-3">Teams found reliable answers faster, improved first-contact support, and exposed stale knowledge that previously stayed hidden.</p></div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-white rounded-none md:rounded-xl border-y md:border border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Business Challenge &amp; Opportunity</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The business case emerged from four repeated moments of friction.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Each opportunity was tested against volume, risk, data readiness, user trust, and the cost of keeping the process manual.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 border-y border-outline-variant/30">
                        <div className="py-5 border-b border-outline-variant/25"><span className="material-symbols-outlined text-primary mb-3">manage_search</span><h3 className="font-headline-sm text-headline-sm mb-2">Search before service</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Employees lost time finding guidance before they could help customers or colleagues.</p></div>
                        <div className="py-5 border-b border-outline-variant/25"><span className="material-symbols-outlined text-primary mb-3">dynamic_feed</span><h3 className="font-headline-sm text-headline-sm mb-2">Context assembly</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Case notes, documents, histories, and decisions had to be stitched together manually.</p></div>
                        <div className="py-5"><span className="material-symbols-outlined text-primary mb-3">rule</span><h3 className="font-headline-sm text-headline-sm mb-2">Rule interpretation</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Policy, eligibility, product, and compliance rules were applied inconsistently across teams.</p></div>
                        <div className="py-5"><span className="material-symbols-outlined text-primary mb-3">query_stats</span><h3 className="font-headline-sm text-headline-sm mb-2">Late intervention</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Demand, quality, churn, and backlog signals reached leaders after pressure had already built.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr] gap-8 lg:gap-12 items-start">
                    <div className="bg-[#E0F7FA]/30 rounded-xl border border-outline-variant/35 p-6 md:p-8">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">AI Solution Design</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The design centered on trust points, not model novelty.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">A case-study lens made every design choice answer five questions: what is the task, what data is used, who reviews output, what risk is controlled, and how value is measured?</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                        <div className="sm:col-span-2 bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Grounded answers</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Responses used approved repositories, citations, freshness checks, and access-aware retrieval.</p></div>
                        <div className="sm:col-span-3 bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Human control</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Specialists approved sensitive outputs, handled low-confidence cases, and corrected weak recommendations.</p></div>
                        <div className="sm:col-span-3 bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Workflow integration</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">AI support appeared inside service, product, knowledge, and reporting tools that teams already used.</p></div>
                        <div className="sm:col-span-2 bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Quality telemetry</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Usage, feedback, deflection, escalation, and answer-quality signals fed the improvement backlog.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.28fr_0.72fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Intelligent Automation Journey</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Automation was sequenced through decision gates.</h2>
                    </div>
                    <div className="relative">
                        <div className="hidden lg:block absolute left-[31px] top-8 bottom-8 w-px bg-outline-variant/50"></div>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 lg:grid-cols-[64px_1fr_210px] gap-4 lg:items-center bg-white border border-outline-variant/35 rounded-xl p-4"><span className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold">01</span><p className="font-body-sm text-body-sm text-on-surface-variant">Observe real tasks, exceptions, risk points, user judgement, and repeatable effort before selecting the automation pattern.</p><strong className="font-label-caps text-label-caps text-primary uppercase">Evidence baseline</strong></div>
                            <div className="grid grid-cols-1 lg:grid-cols-[64px_1fr_210px] gap-4 lg:items-center bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-4"><span className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold">02</span><p className="font-body-sm text-body-sm text-on-surface-variant">Prototype summaries, routing, recommendations, search, and draft outputs using real examples and edge cases.</p><strong className="font-label-caps text-label-caps text-primary uppercase">Proof sprint</strong></div>
                            <div className="grid grid-cols-1 lg:grid-cols-[64px_1fr_210px] gap-4 lg:items-center bg-white border border-outline-variant/35 rounded-xl p-4"><span className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold">03</span><p className="font-body-sm text-body-sm text-on-surface-variant">Integrate successful patterns with system actions, approval rules, support channels, monitoring, and release readiness.</p><strong className="font-label-caps text-label-caps text-primary uppercase">Controlled release</strong></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-12 items-center">
                    <img src={assetPath("/asset/case_studies/ai_innovation/3.png")} alt="AI data readiness and governance review" className="w-full h-[320px] md:h-[470px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data &amp; AI Enablement</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Data readiness was treated as an operating responsibility.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">The case team mapped which data sources could support AI safely, where content ownership was unclear, and which quality issues would damage user trust.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Source health</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Freshness, duplication, access, ownership, and conflicting guidance were checked.</p></div>
                            <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Feedback data</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">User corrections, low-confidence answers, and missing topics informed improvement.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">User Adoption &amp; Change Management</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Adoption improved when each audience had a different job to do.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">The change plan separated users, reviewers, managers, and owners so training stayed practical and adoption signals had accountable follow-up.</p>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-outline-variant/35 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Frontline users</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Ask better questions, inspect citations, and flag weak answers.</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Confidence increased when AI was framed as preparation support.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-white">Expert reviewers</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Approve sensitive content, correct outputs, and maintain source material.</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Review effort became part of knowledge stewardship.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr_1fr]"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Managers</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Track adoption, service quality, exceptions, and support needs.</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Usage evidence shaped coaching and release decisions.</div></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_0.7fr]">
                        <div className="p-6 md:p-8 lg:p-10 bg-white">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">AI Governance &amp; Responsible AI</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Controls were arranged around the life of the use case.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Governance covered intake, data approval, model behavior, release evidence, live monitoring, and retirement decisions.</p>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/30">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Use-case intake</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Value, risk, data sensitivity, user impact, and human oversight were reviewed before build.</p></div>
                                <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Release evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Test results, prompt patterns, source rules, risk notes, and support readiness were recorded.</p></div>
                                <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Live assurance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Quality, drift, usage, complaints, low-confidence answers, and escalation were reviewed.</p></div>
                                <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Ownership model</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Business, data, security, AI, and product owners had clear decision rights.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_0.7fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Measurable Business Impact</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The scorecard measured work outcomes, not AI activity alone.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-display-sm text-[40px] leading-[46px] text-primary block mb-2">27%</span><p className="font-body-sm text-body-sm text-on-surface-variant">Lower average knowledge search time for pilot teams.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-display-sm text-[40px] leading-[46px] text-primary block mb-2">14k</span><p className="font-body-sm text-body-sm text-on-surface-variant">Monthly assisted queries with citations and feedback capture.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-display-sm text-[40px] leading-[46px] text-primary block mb-2">3</span><p className="font-body-sm text-body-sm text-on-surface-variant">Workflow areas moved from pilot to governed release.</p></div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-white rounded-none md:rounded-xl border-y md:border border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.52fr_0.48fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Operational &amp; Productivity Gains</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The practical value came from better preparation before human decisions.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">AI summarized histories, prepared drafts, surfaced relevant guidance, and recommended next steps. People retained judgement for sensitive decisions, exceptions, relationships, and accountability.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Before</span><p className="font-body-sm text-body-sm text-on-surface-variant">Agents assembled case context from tickets, files, emails, and policy pages before acting.</p></div>
                        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">With AI</span><p className="font-body-sm text-body-sm text-on-surface-variant">Summaries, suggested next actions, citations, and draft responses prepared the work for review.</p></div>
                        <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">After</span><p className="font-body-sm text-body-sm text-on-surface-variant">Managers saw quality signals, unanswered topics, and improvement needs from usage evidence.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Lessons Learned &amp; Innovation Insights</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The best AI ideas became smaller, clearer, and easier to govern.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Successful pilots avoided broad promises. They narrowed the workflow, named ownership, tested edge cases, and measured whether users returned by choice.</p>
                    </div>
                    <div className="columns-1 sm:columns-2 gap-4 [column-fill:_balance]">
                        <div className="break-inside-avoid mb-4 bg-white border border-outline-variant/35 rounded-xl p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Start with task evidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Observe real work before choosing model features or automation depth.</p></div>
                        <div className="break-inside-avoid mb-4 bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Make sources visible</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Users trusted AI more when they could inspect where answers came from.</p></div>
                        <div className="break-inside-avoid mb-4 bg-white border border-outline-variant/35 rounded-xl p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Design the fallback</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Unclear, risky, or low-confidence outputs needed simple escalation paths.</p></div>
                        <div className="break-inside-avoid mb-4 bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Keep content healthy</h3><p className="font-body-sm text-body-sm text-on-surface-variant">AI exposed missing owners, stale knowledge, and inconsistent business rules.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Long-Term AI Evolution Strategy</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The roadmap moved from isolated pilots to a reusable AI operating model.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">After the first release, the focus shifted to platform reuse, model monitoring, knowledge ownership, intake governance, and a portfolio of use cases with clear value tests.</p>
                    </div>
                    <div className="rounded-xl bg-white border border-outline-variant/35 overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-white">Foundation</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Data access, security, retrieval, templates, quality tests, and shared implementation patterns.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Portfolio</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Use-case intake, prioritization, risk scoring, delivery waves, and benefits tracking.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr]"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-white">Stewardship</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Monitoring, tuning, content ownership, adoption review, and retirement decisions.</div></div>
                    </div>
                </div>
            </section>
            <section id="ai-innovation-map-section" className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_0.7fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">What We Map Together</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A focused map turns AI ambition into an accountable delivery brief.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">This section now stands on its own so the mapping work is easier to scan before the conversation prompt.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Use case</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Task, decision, user group, business value, risk level, and adoption moment.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Data</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Sources, quality, access, privacy, ownership, integration needs, and feedback loops.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Controls</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Responsible AI review, human oversight, monitoring, escalation, and release evidence.</p></div>
                        <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Measures</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Productivity, quality, service impact, adoption, risk reduction, and benefits evidence.</p></div>
                    </div>
                </div>
            </section>
            <section id="ai-innovation-case-study-cta" className="max-w-container-max mx-auto pt-8 pb-14 md:pt-10 md:pb-16">
                <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.56fr_0.44fr] gap-8 lg:gap-12 items-center">
                        <div>
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Start the AI Innovation Conversation</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Turn a promising AI idea into a governed case study with measurable value.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Begin with a workflow, knowledge problem, customer experience gap, predictive signal, or automation opportunity that needs a practical path to adoption.</p>
                        </div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6 shadow-sm">
                            <span className="font-label-caps text-label-caps text-primary uppercase block mb-3">First output</span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-5">A scoped AI case brief with use case, data readiness, risk controls, adoption path, success measures, and delivery gates.</p>
                            <Link className="inline-flex w-full items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start AI Readiness Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
