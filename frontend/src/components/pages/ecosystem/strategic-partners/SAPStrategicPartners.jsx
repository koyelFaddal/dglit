import Link from "next/link";

export default function SAPStrategicPartners() {
    return (
        <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="relative -mt-24 md:-mt-8 mb-3 md:mb-4 -mx-gutter overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[#E0F7FA]/30"></div>
                <div className="absolute inset-x-0 top-0 h-px bg-primary-fixed-dim/70"></div>
                <div className="hidden md:block absolute -right-20 top-12 h-72 w-72 rounded-full border border-primary-fixed-dim/60 bg-white/75"></div>
                <div className="hidden lg:block absolute right-14 bottom-12 h-40 w-40 rounded-full border border-secondary/20 bg-[#E0F7FA]/30"></div>
                <div className="relative z-10 max-w-container-max mx-auto px-gutter pt-28 md:pt-14 lg:pt-16 pb-8 md:pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        <div className="lg:col-span-7">
                            <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5 md:mb-6">
                                <span>Ecosystem</span>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span>Strategic Partners</span>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-primary">SAP</span>
                            </nav>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">SAP Strategic Partnership</span>
                            <h1 className="font-display-lg text-[34px] leading-[42px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-on-surface mb-6 max-w-5xl">SAP Partnership for Intelligent Enterprise Transformation</h1>
                            <p className="font-body-lg text-[16px] leading-[26px] sm:text-body-lg text-on-surface-variant max-w-3xl mb-8">DGL helps organizations use SAP technologies to modernize business processes, improve operational visibility, strengthen enterprise planning, and support scalable transformation across complex business environments.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#sap-capabilities">Explore Capabilities <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                <Link className="inline-flex justify-center items-center gap-2 border border-secondary/30 bg-white text-secondary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-[#E0F7FA]/30 transition-colors" href="#">Talk to Our Team</Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="relative rounded-xl border border-outline-variant/35 bg-white/90 p-5 md:p-6 architectural-shadow overflow-hidden">
                                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-primary-fixed-dim/70 bg-[#E0F7FA]/40"></div>
                                <div className="relative">
                                    <div className="flex items-center justify-between gap-4 border-b border-outline-variant/30 pb-4 mb-5">
                                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">SAP Transformation Core</span>
                                        <span className="material-symbols-outlined text-secondary text-[22px]">schema</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-[0.95fr_1.05fr] gap-4 items-stretch">
                                        <div className="rounded-lg border border-primary-fixed-dim/70 bg-primary-fixed/35 p-5 flex flex-col justify-between min-h-[190px]">
                                            <div>
                                                <span className="font-label-caps text-label-caps text-primary uppercase">S/4HANA Foundation</span>
                                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">ERP core, clean master data, standard processes, and controlled modernization waves.</p>
                                            </div>
                                            <div className="mt-5 grid grid-cols-3 gap-2">
                                                <span className="h-2 rounded-full bg-primary"></span>
                                                <span className="h-2 rounded-full bg-secondary"></span>
                                                <span className="h-2 rounded-full bg-primary-fixed-dim"></span>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="rounded-lg border border-outline-variant/35 bg-white p-4">
                                                <span className="font-label-caps text-label-caps text-secondary uppercase">Finance + Planning</span>
                                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Close, controls, forecasting, and management reporting.</p>
                                            </div>
                                            <div className="rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/35 p-4">
                                                <span className="font-label-caps text-label-caps text-secondary uppercase">Supply + Procurement</span>
                                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Spend, supplier, inventory, and logistics visibility.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 rounded-lg border border-outline-variant/35 bg-white p-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 sm:items-center">
                                            <span className="font-label-caps text-label-caps text-primary uppercase">Govern</span>
                                            <span className="hidden sm:block material-symbols-outlined text-secondary text-[18px]">arrow_forward</span>
                                            <span className="font-label-caps text-label-caps text-primary uppercase">Integrate</span>
                                            <span className="hidden sm:block material-symbols-outlined text-secondary text-[18px]">arrow_forward</span>
                                            <span className="font-label-caps text-label-caps text-primary uppercase">Optimize</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto pt-5 md:pt-7 pb-10 md:pb-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                    <div className="px-6 md:px-8 pt-6 md:pt-8 pb-5 bg-[#E0F7FA]/30 border-b border-outline-variant/30">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">SAP Partnership Overview</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface max-w-4xl">Four connected decisions guide SAP transformation.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="p-5 md:p-6 border-b sm:border-r lg:border-b-0 border-outline-variant/25">
                            <div className="flex items-center gap-3 mb-4"><span className="h-11 w-11 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold shrink-0">01</span><span className="font-label-caps text-label-caps text-primary uppercase">Enterprise core</span></div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">ERP, finance, procurement, supply chain, and planning processes.</p>
                        </div>
                        <div className="p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-outline-variant/25 bg-[#E0F7FA]/25">
                            <div className="flex items-center gap-3 mb-4"><span className="h-11 w-11 rounded-lg bg-white border border-primary-fixed-dim text-primary flex items-center justify-center font-bold shrink-0">02</span><span className="font-label-caps text-label-caps text-primary uppercase">Trusted data</span></div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">Master data, ownership, quality rules, lineage, and reporting definitions.</p>
                        </div>
                        <div className="p-5 md:p-6 border-b sm:border-b-0 sm:border-r border-outline-variant/25">
                            <div className="flex items-center gap-3 mb-4"><span className="h-11 w-11 rounded-lg bg-secondary text-on-secondary flex items-center justify-center font-bold shrink-0">03</span><span className="font-label-caps text-label-caps text-primary uppercase">Integration flow</span></div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">Interfaces, APIs, handoffs, monitoring, testing, and service accountability.</p>
                        </div>
                        <div className="p-5 md:p-6 bg-[#E0F7FA]/25">
                            <div className="flex items-center gap-3 mb-4"><span className="h-11 w-11 rounded-lg bg-white border border-primary-fixed-dim text-primary flex items-center justify-center font-bold shrink-0">04</span><span className="font-label-caps text-label-caps text-primary uppercase">Adopted change</span></div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">Roles, controls, training, support, and measurable business value.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-white rounded-none md:rounded-xl border-y md:border border-outline-variant/35">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary mb-3">rule_settings</span><h3 className="font-headline-sm text-headline-sm mb-2">Process guardrails</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Define where standard SAP process should hold and where local variation is justified.</p></div>
                        <div className="rounded-lg bg-white border border-outline-variant/35 p-5 sm:mt-8"><span className="material-symbols-outlined text-secondary mb-3">account_tree</span><h3 className="font-headline-sm text-headline-sm mb-2">Decision ownership</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Make scope, data, integration, and control decisions visible to the right business owners.</p></div>
                        <div className="rounded-lg bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-secondary mb-3">verified</span><h3 className="font-headline-sm text-headline-sm mb-2">Readiness evidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Use testing, cutover, adoption, and support evidence before each major release step.</p></div>
                        <div className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/35 p-5 sm:mt-8"><span className="material-symbols-outlined text-primary mb-3">trending_up</span><h3 className="font-headline-sm text-headline-sm mb-2">Value traceability</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Connect SAP investments with measurable process, reporting, control, and service outcomes.</p></div>
                    </div>
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Strategic Partnership Value</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">A partnership model for high-stakes enterprise change.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">SAP transformation is usually constrained by legacy data, business continuity, stakeholder alignment, and operational risk. DGL helps create the governance and delivery rhythm needed to move forward without losing control.</p>
                    </div>
                </div>
            </section>
            <section id="sap-capabilities" className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="mb-8 max-w-3xl">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">SAP Technology Ecosystem</span>
                    <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Map SAP capabilities around the enterprise core.</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">The ecosystem view clarifies how ERP, data, integration, analytics, automation, and managed services reinforce one another.</p>
                </div>
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr]">
                        <div className="p-6 md:p-8 bg-[#E0F7FA]/30 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                            <div className="rounded-xl border border-primary-fixed-dim/70 bg-white p-6 text-center">
                                <span className="material-symbols-outlined text-primary text-[34px] mb-3">data_object</span>
                                <h3 className="font-headline-md text-headline-md text-on-surface">SAP S/4HANA Core</h3>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">The enterprise system of record for process, data, financial control, and operational visibility.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <div className="p-5 border-b sm:border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Cloud ERP adoption</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Deployment models, release cadence, service ownership, and operating readiness.</p></div>
                            <div className="p-5 border-b border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Business Technology Platform</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Extension patterns, integration services, automation, analytics, and clean governance.</p></div>
                            <div className="p-5 border-b sm:border-b-0 sm:border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Enterprise applications</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">CRM, supplier, customer, warehouse, HR, and operational platform touchpoints.</p></div>
                            <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Managed services</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Support, monitoring, release coordination, issue learning, and service improvement.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">ERP Modernization &amp; Transformation</span>
                        <h2 className="font-headline-lg text-[23px] leading-[31px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Modernize ERP through<br />sequenced transformation waves.</span><span className="hidden md:inline">Modernize ERP through sequenced transformation waves.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">The roadmap is built around risk, readiness, process priority, and the business functions that must stay stable while change is delivered.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-[52px_1fr] gap-4 items-start rounded-lg bg-white border border-outline-variant/35 p-4"><span className="h-10 w-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold">1</span><div><span className="font-label-caps text-label-caps text-primary uppercase">Current-state diagnosis</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Customizations, process exceptions, data quality, integrations, user pain points, and support cost.</p></div></div>
                        <div className="grid grid-cols-[52px_1fr] gap-4 items-start rounded-lg bg-white border border-outline-variant/35 p-4"><span className="h-10 w-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center font-bold">2</span><div><span className="font-label-caps text-label-caps text-primary uppercase">Target process design</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Fit-to-standard choices, control points, role impacts, data ownership, and integration scope.</p></div></div>
                        <div className="grid grid-cols-[52px_1fr] gap-4 items-start rounded-lg bg-white border border-outline-variant/35 p-4"><span className="h-10 w-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold">3</span><div><span className="font-label-caps text-label-caps text-primary uppercase">Release and cutover readiness</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Testing, migration rehearsal, training, operating support, communications, and go-live controls.</p></div></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Finance, Procurement &amp; Supply Chain Enablement</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Improve the functions that depend most on clean enterprise data.</h2>
                    </div>
                    <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] border-b border-outline-variant/25">
                            <div className="p-4 bg-[#E0F7FA]/30 font-label-caps text-label-caps text-primary uppercase">Finance</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Close discipline, cost visibility, planning cycles, reporting confidence, and compliance evidence.</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] border-b border-outline-variant/25">
                            <div className="p-4 bg-white font-label-caps text-label-caps text-primary uppercase">Procurement</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Supplier records, source-to-pay controls, approval paths, contract insight, and spend analytics.</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr]">
                            <div className="p-4 bg-[#E0F7FA]/30 font-label-caps text-label-caps text-primary uppercase">Supply chain</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Inventory accuracy, demand signals, logistics handoffs, exception reporting, and operational resilience.</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-white rounded-none md:rounded-xl border-y md:border border-outline-variant/35">
                <div className="grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise Integration &amp; Data Governance</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Make integration and data ownership explicit.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">SAP value depends on the quality of data moving through the enterprise. We define ownership, quality checks, interface monitoring, reporting definitions, and escalation paths.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Master data council</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Owners, definitions, stewardship routines, and quality thresholds.</p></div>
                        <div className="rounded-lg border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Interface register</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Source systems, endpoints, dependencies, controls, and service owners.</p></div>
                        <div className="rounded-lg border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Reporting lineage</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Measure definitions, source mapping, approval, and audit-ready traceability.</p></div>
                        <div className="rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Control evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Access, segregation, approvals, retention, testing, and exception handling.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 items-stretch">
                    <div className="rounded-xl border border-outline-variant/35 bg-white p-6 md:p-8">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Analytics, Automation &amp; Business Intelligence</span>
                        <h2 className="font-headline-lg text-[27px] leading-[35px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Turn SAP activity into<br />decision-ready signals.</span><span className="hidden md:inline">Turn SAP activity into decision-ready signals.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Analytics and automation are shaped around trusted data, clear process triggers, and business routines that help managers act faster.</p>
                        <div className="mt-6 grid grid-cols-3 gap-2">
                            <span className="h-2 rounded-full bg-primary"></span>
                            <span className="h-2 rounded-full bg-secondary"></span>
                            <span className="h-2 rounded-full bg-primary-fixed-dim"></span>
                        </div>
                    </div>
                    <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] min-h-[360px]">
                            <div className="p-6 md:p-8 bg-[#E0F7FA]/30 border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col justify-between">
                                <div>
                                    <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">SAP Signal Hub</span>
                                    <div className="mt-6 rounded-xl border border-primary-fixed-dim/70 bg-white p-5">
                                        <span className="material-symbols-outlined text-primary text-[34px] mb-3">query_stats</span>
                                        <p className="font-body-sm text-body-sm text-on-surface-variant">Finance, procurement, inventory, supplier, workflow, and exception data shaped into usable operating signals.</p>
                                    </div>
                                </div>
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <div className="rounded-lg bg-white border border-outline-variant/35 p-3"><span className="font-label-caps text-label-caps text-primary uppercase">Live view</span></div>
                                    <div className="rounded-lg bg-white border border-outline-variant/35 p-3"><span className="font-label-caps text-label-caps text-primary uppercase">Action queue</span></div>
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="space-y-4">
                                    <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                                        <span className="h-10 w-10 rounded-lg bg-primary text-on-primary flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">monitoring</span></span>
                                        <div><span className="font-label-caps text-label-caps text-primary uppercase">Insight stream</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Operational dashboards, finance reporting, exception views, and leadership measures.</p></div>
                                    </div>
                                    <div className="border-l border-outline-variant/40 pl-4 md:pl-5">
                                        <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                                            <span className="h-10 w-10 rounded-lg bg-secondary text-on-secondary flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">automation</span></span>
                                            <div><span className="font-label-caps text-label-caps text-primary uppercase">Automation trigger</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Approvals, alerts, reconciliation support, document routing, and workflow controls.</p></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                                        <span className="h-10 w-10 rounded-lg bg-primary-fixed/80 border border-primary-fixed-dim text-primary flex items-center justify-center"><span className="material-symbols-outlined text-[20px]">task_alt</span></span>
                                        <div><span className="font-label-caps text-label-caps text-primary uppercase">Decision loop</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Review cadence, issue ownership, improvement actions, and adoption feedback loops.</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">SAP Delivery Approach</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Run delivery with evidence at every stage.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="bg-white border border-outline-variant/35 rounded-lg p-5 md:mt-8"><span className="font-label-caps text-label-caps text-primary uppercase">Discover</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Landscape, pain points, risk, value case, and stakeholder needs.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Shape</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Processes, data, integration, controls, roadmap, and release governance.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-lg p-5 md:mt-8"><span className="font-label-caps text-label-caps text-primary uppercase">Prove</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Testing, migration rehearsal, training readiness, cutover checks, and support plans.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Improve</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Service health, data quality, adoption, reporting, automation, and backlog value.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-b border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Business Outcomes &amp; Impact</span>
                        <h2 className="font-headline-lg text-[23px] leading-[31px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Measure SAP impact through<br />enterprise performance improvements.</span><span className="hidden md:inline">Measure SAP impact through enterprise performance improvements.</span></h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="rounded-lg border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Cleaner operations</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Less manual reconciliation, clearer process ownership, and fewer avoidable exceptions.</p></div>
                        <div className="rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Better planning</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Stronger financial, procurement, and supply visibility for leadership decisions.</p></div>
                        <div className="rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Trusted reporting</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Common definitions, governed data, auditable measures, and useful dashboards.</p></div>
                        <div className="rounded-lg border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Sustainable service</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Managed support, release discipline, optimization routines, and adoption confidence.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
                        <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/30 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Long-Term Partnership Model</span>
                            <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Keep SAP evolving with the business.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">The long-term model keeps strategy, managed services, continuous improvement, and user adoption connected after the first major transformation wave.</p>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:items-center">
                                <div className="rounded-xl border border-outline-variant/35 bg-white p-5">
                                    <span className="material-symbols-outlined text-primary mb-4">edit_calendar</span>
                                    <span className="font-label-caps text-label-caps text-primary uppercase block">Quarterly roadmap</span>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Review priorities, releases, risk, service signals, and investment decisions.</p>
                                </div>
                                <span className="hidden md:flex h-px w-10 bg-outline-variant/60"></span>
                                <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5 md:translate-y-8">
                                    <span className="material-symbols-outlined text-secondary mb-4">fact_check</span>
                                    <span className="font-label-caps text-label-caps text-primary uppercase block">Monthly value review</span>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Track reporting, adoption, issue trends, automation candidates, and data health.</p>
                                </div>
                                <span className="hidden md:flex h-px w-10 bg-outline-variant/60"></span>
                                <div className="rounded-xl border border-outline-variant/35 bg-white p-5">
                                    <span className="material-symbols-outlined text-primary mb-4">support_agent</span>
                                    <span className="font-label-caps text-label-caps text-primary uppercase block">Service cadence</span>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Coordinate support, releases, incidents, enhancements, and user guidance.</p>
                                </div>
                            </div>
                            <div className="mt-8 rounded-lg border border-primary-fixed-dim/70 bg-primary-fixed/30 p-4">
                                <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 items-start">
                                    <span className="material-symbols-outlined text-primary">sync</span>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Continuous optimization loop:</strong> service evidence informs roadmap choices, roadmap choices guide releases, and each release feeds adoption and value measures.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto pt-8 pb-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
                        <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/30 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">SAP Readiness Conversation</span>
                            <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Start with the SAP decision that needs clarity now.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">DGL can help assess modernization readiness, shape a transformation roadmap, review data and integration risks, or stabilize managed service priorities.</p>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                                <div className="border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Assess</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Landscape, risks, data, and process maturity.</p></div>
                                <div className="border border-outline-variant/35 rounded-lg p-4 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-primary uppercase">Prioritize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Value path, release scope, and readiness gaps.</p></div>
                                <div className="border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Mobilize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Governance, support, delivery, and measures.</p></div>
                            </div>
                            <Link className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Talk to Our Team <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
