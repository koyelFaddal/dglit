import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function EnterpriseSystemsCaseStudies() {
    return (
        <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="relative -mt-24 md:-mt-8 mb-10 md:mb-12 -mx-gutter min-h-[560px] md:min-h-[540px] lg:min-h-[560px] flex items-start overflow-hidden bg-white">
                <img src={assetPath("/asset/case_studies/enterprise/1-optimized.webp")} alt="Enterprise systems transformation command center" className="absolute inset-0 w-full h-full object-cover blur-[3px] md:blur-[1.25px] scale-[1.01]" fetchPriority="high" loading="eager" decoding="async" />
                <div className="absolute inset-0 bg-white/78"></div>
                <div className="absolute inset-0 bg-[#E0F7FA]/30"></div>
                <div className="absolute left-0 top-0 h-full w-3/5 bg-primary-fixed/20 blur-3xl opacity-70"></div>
                <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pt-28 md:pt-14 lg:pt-16 pb-12 md:pb-14">
                    <div className="max-w-4xl">
                        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-4 md:mb-6">
                            <span>Case Studies</span>
                            <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                            <span className="text-on-surface sm:text-primary">Enterprise Systems</span>
                        </nav>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise transformation record</span>
                        <h1 className="font-display-lg text-[29px] leading-[36px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-on-surface mb-5 max-w-4xl"><span className="hidden sm:inline">Enterprise systems case studies built around measurable operating change</span><span className="sm:hidden">Enterprise systems case studies with measurable change</span></h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-7">DGL helps leadership teams modernize ERP, finance, HR, procurement, reporting, and operational platforms with practical governance, clearer workflows, and evidence that business teams can trust.</p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 sm:px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Review Case Outcomes <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                            <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/60 text-primary px-5 sm:px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-primary transition-all" href="#">Discuss Program Fit <span className="material-symbols-outlined text-[18px]">support_agent</span></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 xl:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-start">
                    <div className="xl:sticky xl:top-28">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise Systems Overview</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">A case-study view of transformation across the systems that run the business.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Enterprise programs succeed when process, data, controls, roles, adoption, and platform design are treated as one operating problem. These case patterns show how modernization becomes visible in everyday work.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5 shadow-sm"><span className="material-symbols-outlined text-secondary mb-3">account_tree</span><h3 className="font-headline-sm text-headline-sm mb-2">Platform consolidation</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Reduced duplicate applications, clearer ownership, and fewer handoffs between finance, HR, procurement, and operations.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5 shadow-sm"><span className="material-symbols-outlined text-secondary mb-3">sync_alt</span><h3 className="font-headline-sm text-headline-sm mb-2">Integrated workflows</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Process flows connected approvals, service requests, reporting, and audit evidence across departments.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5 shadow-sm"><span className="material-symbols-outlined text-secondary mb-3">monitoring</span><h3 className="font-headline-sm text-headline-sm mb-2">Better visibility</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Leadership dashboards combined operational, financial, risk, and delivery measures into decision-ready views.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5 shadow-sm"><span className="material-symbols-outlined text-secondary mb-3">verified</span><h3 className="font-headline-sm text-headline-sm mb-2">Governed change</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Decision forums, controls, adoption checks, and benefits evidence kept large programs accountable after launch.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-8 lg:gap-12 items-stretch">
                    <div className="relative min-h-[360px] md:min-h-[460px] overflow-hidden rounded-xl border border-outline-variant/35">
                        <img src={assetPath("/asset/case_studies/enterprise/2-optimized.webp")} alt="Enterprise program team reviewing operating data" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/62 to-white/12"></div>
                        <div className="absolute left-0 bottom-0 right-0 p-6 md:p-8">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Featured Transformation Story</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface max-w-xl">A fragmented ERP estate became a shared operating backbone.</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 content-stretch border-y border-outline-variant/35">
                        <div className="py-5 border-b border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Starting point</span><p className="font-body-sm text-body-sm text-on-surface-variant">Regional finance, procurement, HR, and service teams used different processes, local reporting definitions, and manual reconciliations.</p></div>
                        <div className="py-5 border-b border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Program move</span><p className="font-body-sm text-body-sm text-on-surface-variant">DGL helped shape a phased platform strategy with process owners, integration priorities, data controls, and a delivery cadence that sponsors could govern.</p></div>
                        <div className="py-5 border-b border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Operating result</span><p className="font-body-sm text-body-sm text-on-surface-variant">Teams gained common approvals, fewer duplicate entries, clearer month-end evidence, and more reliable executive reporting.</p></div>
                        <div className="py-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Sustainment</span><p className="font-body-sm text-body-sm text-on-surface-variant">The program closed with service ownership, support playbooks, adoption measures, and a prioritized enhancement backlog.</p></div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Business Challenge &amp; Context</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The business was carrying process cost that technology alone could not remove.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">The core challenge was not one old system. It was the combination of local workarounds, unclear data ownership, duplicate approvals, and reporting that arrived too late for decisions.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-xl overflow-hidden border border-outline-variant/35 bg-white">
                        <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Finance close</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Manual journals, late adjustments, and inconsistent cost-center evidence slowed month-end confidence.</p></div>
                        <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">Procurement flow</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Approvals, supplier records, contract checks, and goods receipt activity crossed too many disconnected queues.</p></div>
                        <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase">People services</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">HR case handling, onboarding, access requests, and workforce reporting needed cleaner ownership and service standards.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
                    <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Target model</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Common process architecture for request, approve, fulfill, reconcile, report, and improve.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-white">Platform scope</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">ERP, enterprise applications, workflow tools, integration layer, reporting model, and service channels.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Data control</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Master data ownership, quality checks, metric definitions, lineage, and retention responsibilities.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr]"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-white">Change path</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Adoption waves aligned to business calendars, training needs, support readiness, and release risk.</div></div>
                    </div>
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Solution Design &amp; Platform Strategy</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Design decisions were treated as operating decisions.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-5">The platform strategy separated what needed to be standardized, what could remain local, and what had to be integrated for visibility, compliance, and service delivery.</p>
                        <div className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Executive test</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Every design choice had to explain the process impact, data owner, control evidence, user experience, and measurable business value.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="mb-7 md:mb-9 max-w-3xl">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise Integration Journey</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Integration work followed the lifecycle of a real business event.</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">Instead of treating interfaces as technical tickets, each integration was mapped to the decisions, evidence, and service outcomes it supported.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-outline-variant/35 rounded-xl overflow-hidden bg-white">
                    <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25"><span className="text-primary font-bold text-2xl block mb-3">01</span><span className="font-label-caps text-label-caps text-primary uppercase">Trigger</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Employee, supplier, customer, asset, project, or finance event enters the enterprise flow.</p></div>
                    <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25 bg-[#E0F7FA]/25"><span className="text-primary font-bold text-2xl block mb-3">02</span><span className="font-label-caps text-label-caps text-primary uppercase">Validate</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Rules, master data, approvals, compliance checks, and exception paths are confirmed.</p></div>
                    <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25"><span className="text-primary font-bold text-2xl block mb-3">03</span><span className="font-label-caps text-label-caps text-primary uppercase">Transact</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">ERP and application records update with fewer handoffs and better status visibility.</p></div>
                    <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25 bg-[#E0F7FA]/25"><span className="text-primary font-bold text-2xl block mb-3">04</span><span className="font-label-caps text-label-caps text-primary uppercase">Report</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Operational, financial, and risk evidence reaches leaders through shared measures.</p></div>
                    <div className="p-5"><span className="text-primary font-bold text-2xl block mb-3">05</span><span className="font-label-caps text-label-caps text-primary uppercase">Improve</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Backlog decisions use adoption, defects, service levels, and benefits evidence.</p></div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Process Optimization Outcomes</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Optimization focused on the handoffs that created delay.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">The work removed unnecessary approvals, clarified service ownership, and made exceptions easier to see before they became management escalations.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Procure-to-pay</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Requisition, budget, supplier, receipt, invoice, and payment steps were aligned with clearer control evidence.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Hire-to-retire</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Onboarding, role changes, access, payroll data, and service requests moved through named owners.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Record-to-report</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Close tasks, adjustments, reconciliations, and leadership reporting used one shared evidence rhythm.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Request-to-resolve</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Customer and employee operations gained clearer queues, status updates, escalation, and service measures.</p></div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Operational Efficiency Improvements</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Efficiency was measured in saved effort, fewer rework loops, and better management time.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-5">The case record connected workflow changes to practical operating signals so leaders could see whether the program was reducing pressure where teams felt it most.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Cycle time</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Approvals and service tasks moved through fewer queues.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Rework</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Cleaner data and rules reduced correction loops.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Visibility</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Managers saw stuck work before escalation.</p></div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white border border-outline-variant/35 p-6 md:p-8 shadow-sm">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">Operational signals</span>
                        <div className="space-y-4">
                            <div className="flex gap-4"><span className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold shrink-0">1</span><p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Backlogs were split by owner, age, exception type, and business impact.</p></div>
                            <div className="flex gap-4"><span className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold shrink-0">2</span><p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Dashboards separated true process delays from data, policy, or training issues.</p></div>
                            <div className="flex gap-4"><span className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold shrink-0">3</span><p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Improvement actions were tied to release planning and service-owner reviews.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
                    <img src={assetPath("/asset/case_studies/enterprise/3-optimized.webp")} alt="Enterprise governance and compliance reporting workspace" className="w-full h-[300px] md:h-[430px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Governance &amp; Compliance Enhancements</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Controls became part of the workflow instead of a separate evidence chase.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-5">Finance, HR, procurement, and customer operations teams needed audit-ready activity without slowing down service delivery. Governance was embedded into roles, approval points, data checks, and reporting routines.</p>
                        <div className="space-y-3">
                            <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Decision rights</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Named owners approved process rules, access standards, metric definitions, and exception handling.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Compliance evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Audit trails, approvals, policy checks, segregation duties, and reporting packs were built into normal work.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.74fr_1.26fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Technology Delivery Approach</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Delivery moved through controlled releases with business proof at each gate.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">The program avoided a single high-risk launch by sequencing business capabilities, integration readiness, data migration, training, and support preparation.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-4">Gate 01</span><h3 className="font-headline-sm text-headline-sm mb-2">Baseline</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Process, systems, data, controls, and user impact documented.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-4">Gate 02</span><h3 className="font-headline-sm text-headline-sm mb-2">Configure</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Workflows, roles, integrations, reports, and controls prepared.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-4">Gate 03</span><h3 className="font-headline-sm text-headline-sm mb-2">Prove</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Pilot scenarios tested adoption, exceptions, reporting, and support.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase block mb-4">Gate 04</span><h3 className="font-headline-sm text-headline-sm mb-2">Scale</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Rollout decisions used readiness evidence and benefit signals.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
                        <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Measurable Business Results</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Results were reported as operating evidence, not launch activity.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">The case record tracked results across efficiency, data quality, governance, adoption, and leadership visibility.</p>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="border-t-4 border-primary pt-4"><span className="font-display-sm text-[38px] leading-[44px] text-primary block mb-2">32%</span><p className="font-body-sm text-body-sm text-on-surface-variant">Faster approval cycle for targeted procurement workflows.</p></div>
                            <div className="border-t-4 border-secondary pt-4"><span className="font-display-sm text-[38px] leading-[44px] text-primary block mb-2">18</span><p className="font-body-sm text-body-sm text-on-surface-variant">Duplicate reporting packs consolidated into a shared executive view.</p></div>
                            <div className="border-t-4 border-primary pt-4"><span className="font-display-sm text-[38px] leading-[44px] text-primary block mb-2">4</span><p className="font-body-sm text-body-sm text-on-surface-variant">Business release waves completed with adoption and support checks.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Lessons Learned &amp; Key Insights</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The strongest lessons came from exception handling, not standard scenarios.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Real enterprise work includes disputed invoices, urgent hires, policy exceptions, incomplete records, supplier changes, and executive reporting pressure. The case study treated those moments as design inputs.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary mb-3">rule_settings</span><h3 className="font-headline-sm text-headline-sm mb-2">Design for exceptions</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Exception paths need owners, evidence, escalation, and measures before go-live.</p></div>
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary mb-3">database</span><h3 className="font-headline-sm text-headline-sm mb-2">Name data owners</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Master data issues become process issues unless accountability is explicit.</p></div>
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-secondary mb-3">groups</span><h3 className="font-headline-sm text-headline-sm mb-2">Train by role</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Role-based adoption worked better than generic platform training.</p></div>
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-secondary mb-3">query_stats</span><h3 className="font-headline-sm text-headline-sm mb-2">Measure after launch</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Benefits needed service-owner reviews, not only project closure reports.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Long-Term Partnership Success</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The partnership moved from implementation support to enterprise service stewardship.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">After go-live, the focus shifted to release governance, performance review, adoption coaching, control evidence, and the next set of business capabilities.</p>
                    </div>
                    <div className="rounded-xl bg-white border border-outline-variant/35 overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-white">Operate</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Support teams reviewed service queues, issue trends, knowledge gaps, and business calendar risk.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr] border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Assure</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Controls, access, reporting definitions, and audit evidence remained visible to accountable owners.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[170px_1fr]"><div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-white">Extend</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Enhancement choices were prioritized through value, readiness, adoption effort, and integration impact.</div></div>
                    </div>
                </div>
            </section>
            <section id="enterprise-systems-case-study-cta" className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.48fr_0.52fr]">
                        <div className="p-6 md:p-8 lg:p-10 bg-white">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Start the Enterprise Systems Conversation</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Turn a complex platform program into a practical enterprise case record.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Begin with a system pressure, process bottleneck, reporting gap, compliance concern, or modernization roadmap that needs clearer business evidence.</p>
                            <div className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/35 p-5 mb-6">
                                <span className="font-label-caps text-label-caps text-primary uppercase block mb-3">First output</span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">A scoped enterprise case brief with systems, processes, data owners, controls, measures, delivery waves, and decision points.</p>
                            </div>
                            <Link className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start the Conversation <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/30 border-t lg:border-t-0 lg:border-l border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">What We Map Together</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Systems</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">ERP, enterprise applications, workflow tools, reporting, integrations, and service channels.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Processes</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Approvals, handoffs, exceptions, controls, and operational ownership.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Cycle time, data quality, compliance, adoption, cost, backlog, and service outcomes.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Roadmap</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Delivery waves, release gates, support readiness, benefits tracking, and governance cadence.</p></div>
                            </div>
                            <div className="mt-4 rounded-lg bg-white/80 border border-outline-variant/35 p-4 font-body-sm text-body-sm text-on-surface-variant">Designed for CIOs, enterprise architects, transformation leaders, and business operations teams that need platform change to show up in measurable work.</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
