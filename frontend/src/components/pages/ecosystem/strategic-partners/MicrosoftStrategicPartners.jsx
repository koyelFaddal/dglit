import Link from "next/link";

export default function MicrosoftStrategicPartners() {
    return (
        <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="relative -mt-24 md:-mt-8 mb-10 md:mb-12 -mx-gutter overflow-hidden bg-white">
                <div className="absolute inset-0 bg-[#E0F7FA]/30"></div>
                <div className="hidden md:block absolute -right-24 top-10 h-72 w-72 rounded-full border border-primary-fixed-dim/60 bg-white/70"></div>
                <div className="absolute right-8 bottom-8 hidden h-40 w-40 rotate-12 grid-cols-2 gap-2 md:grid">
                    <span className="bg-primary/85 rounded-lg"></span>
                    <span className="bg-secondary/80 rounded-lg"></span>
                    <span className="bg-accent-amber/80 rounded-lg"></span>
                    <span className="bg-primary-fixed-dim rounded-lg"></span>
                </div>
                <div className="relative z-10 max-w-container-max mx-auto px-gutter pt-28 md:pt-14 lg:pt-16 pb-14 md:pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        <div className="lg:col-span-7">
                            <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5 md:mb-6">
                                <span>Ecosystem</span>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span>Strategic Partners</span>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-primary">Microsoft</span>
                            </nav>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">Microsoft Strategic Partnership</span>
                            <h1 className="font-display-lg text-[38px] leading-[44px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-on-surface mb-6 max-w-5xl">Microsoft Partnership for Modern Digital Transformation</h1>
                            <p className="font-body-lg text-[16px] leading-[26px] sm:text-body-lg text-on-surface-variant max-w-3xl mb-8">DGL works with Microsoft technologies to help organizations modernize operations, improve collaboration, strengthen security, accelerate cloud adoption, and support scalable digital transformation initiatives.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#microsoft-capabilities">Explore Capabilities <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                <Link className="inline-flex justify-center items-center gap-2 border border-secondary/30 bg-white text-secondary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-[#E0F7FA]/30 transition-colors" href="#">Talk to Our Team</Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-outline-variant/30 bg-white">
                                <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-5">Connected Microsoft Stack</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/30 p-4"><span className="material-symbols-outlined text-primary mb-3">cloud</span><p className="font-label-caps text-label-caps text-on-surface uppercase">Azure</p></div>
                                    <div className="rounded-lg border border-outline-variant/35 bg-white p-4"><span className="material-symbols-outlined text-secondary mb-3">groups</span><p className="font-label-caps text-label-caps text-on-surface uppercase">Microsoft 365</p></div>
                                    <div className="rounded-lg border border-outline-variant/35 bg-white p-4"><span className="material-symbols-outlined text-primary mb-3">apps</span><p className="font-label-caps text-label-caps text-on-surface uppercase">Business Apps</p></div>
                                    <div className="rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/30 p-4"><span className="material-symbols-outlined text-secondary mb-3">security</span><p className="font-label-caps text-label-caps text-on-surface uppercase">Security</p></div>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 bg-primary-fixed/35">
                                <p className="font-body-sm text-body-sm text-on-surface-variant">A practical partnership model for cloud platforms, collaboration, governance, automation, data, and managed Microsoft service continuity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr]">
                        <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-outline-variant/30 bg-[#E0F7FA]/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Microsoft Partnership Overview</span>
                            <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">A governed Microsoft environment, not a collection of licenses.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">The partnership work centers on making Microsoft cloud, workplace, application, security, and data services easier to adopt, manage, and extend.</p>
                        </div>
                        <div className="p-0">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <div className="p-6 md:p-7 border-b md:border-b-0 md:border-r border-outline-variant/25">
                                    <div className="mb-5 flex items-center gap-3"><span className="h-2.5 w-10 rounded-full bg-primary"></span><span className="font-label-caps text-label-caps text-primary uppercase">Platform decisions</span></div>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">Architecture, environments, identity, integration, and data choices become visible and reusable.</p>
                                </div>
                                <div className="p-6 md:p-7 border-b md:border-b-0 md:border-r border-outline-variant/25 bg-white">
                                    <div className="mb-5 flex items-center gap-3"><span className="h-2.5 w-10 rounded-full bg-secondary"></span><span className="font-label-caps text-label-caps text-primary uppercase">Adoption routines</span></div>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">Teams receive practical structures for collaboration, workflow, reporting, security, and support.</p>
                                </div>
                                <div className="p-6 md:p-7 bg-white">
                                    <div className="mb-5 flex items-center gap-3"><span className="h-2.5 w-10 rounded-full bg-accent-amber"></span><span className="font-label-caps text-label-caps text-primary uppercase">Managed evolution</span></div>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant">Roadmaps stay aligned as Microsoft services, business priorities, and operating risks change.</p>
                                </div>
                            </div>
                            <div className="border-t border-outline-variant/25 p-5 md:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">DGL helps organizations use Microsoft as a connected enterprise capability across cloud, collaboration, automation, insight, and security.</p>
                                    <span className="shrink-0 rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/30 px-4 py-2 font-label-caps text-label-caps text-secondary uppercase">Partner-led modernization</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Strategic Partnership Value</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Create a shared operating layer for Microsoft transformation.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Value increases when the Microsoft estate has a clear relationship between business demand, platform standards, user adoption, and service ownership.</p>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-outline-variant/50"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-outline-variant/35 bg-white p-5 md:translate-y-4">
                                <span className="font-label-caps text-label-caps text-primary uppercase">Business demand</span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Prioritized workflows, adoption needs, reporting gaps, and modernization cases.</p>
                            </div>
                            <div className="rounded-xl border border-outline-variant/35 bg-white p-5">
                                <span className="font-label-caps text-label-caps text-primary uppercase">Platform standards</span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Reusable guardrails for cloud, apps, identity, environments, data, and releases.</p>
                            </div>
                            <div className="rounded-xl border border-outline-variant/35 bg-white p-5 md:translate-y-4">
                                <span className="font-label-caps text-label-caps text-secondary uppercase">Service ownership</span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Clear responsibilities for support, governance, monitoring, cost, and improvement.</p>
                            </div>
                            <div className="rounded-xl border border-outline-variant/35 bg-white p-5">
                                <span className="font-label-caps text-label-caps text-secondary uppercase">Measured adoption</span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Usage, productivity, security, satisfaction, reliability, and value indicators.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] gap-8 lg:gap-12 items-stretch">
                    <div className="border border-outline-variant/35 rounded-xl bg-white p-6 md:p-8">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Cloud &amp; Infrastructure Modernization</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Modernize Azure foundations with operating discipline built in.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">DGL helps teams classify workloads, plan migration, strengthen identity, manage environments, and improve resilience without turning cloud change into a disconnected infrastructure exercise.</p>
                        <div className="grid grid-cols-2 gap-3">
                            <span className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/30 p-3 font-label-caps text-label-caps text-primary uppercase">Landing zones</span>
                            <span className="rounded-lg bg-white border border-outline-variant/30 p-3 font-label-caps text-label-caps text-primary uppercase">Migration waves</span>
                            <span className="rounded-lg bg-white border border-outline-variant/30 p-3 font-label-caps text-label-caps text-primary uppercase">Monitoring</span>
                            <span className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/30 p-3 font-label-caps text-label-caps text-primary uppercase">Cost control</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                        <div className="p-5 border-b sm:border-r border-outline-variant/25"><span className="material-symbols-outlined text-primary mb-4">cloud_queue</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Workload readiness</span><p className="font-body-sm text-body-sm text-on-surface-variant">Dependencies, sensitivity, performance, integration, and migration sequencing.</p></div>
                        <div className="p-5 border-b border-outline-variant/25 bg-[#E0F7FA]/25"><span className="material-symbols-outlined text-secondary mb-4">lan</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Infrastructure pattern</span><p className="font-body-sm text-body-sm text-on-surface-variant">Network, backup, resilience, identity, monitoring, and service controls.</p></div>
                        <div className="p-5 sm:border-r border-outline-variant/25 bg-[#E0F7FA]/25"><span className="material-symbols-outlined text-primary mb-4">sync_alt</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Integration path</span><p className="font-body-sm text-body-sm text-on-surface-variant">Application links, data flows, automation triggers, and operating handoffs.</p></div>
                        <div className="p-5"><span className="material-symbols-outlined text-secondary mb-4">query_stats</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Optimization loop</span><p className="font-body-sm text-body-sm text-on-surface-variant">Usage, cost, reliability, security posture, and continuous service tuning.</p></div>
                    </div>
                </div>
            </section>
            <section id="microsoft-capabilities" className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.74fr_1.26fr] gap-8 lg:gap-12 items-stretch">
                    <div className="flex flex-col">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Microsoft Technology Ecosystem</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Plan the ecosystem as connected services, not isolated products.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">A balanced ecosystem view makes dependencies visible between cloud foundations, workplace tools, business platforms, security controls, data services, and AI enablement.</p>
                        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="rounded-lg border border-outline-variant/35 bg-white p-4">
                                <div className="flex items-center justify-between mb-3"><span className="font-label-caps text-label-caps text-primary uppercase">Service links</span><span className="text-primary font-headline-sm text-headline-sm">4</span></div>
                                <div className="h-2 rounded-full bg-surface-container overflow-hidden"><span className="block h-full w-4/5 bg-primary"></span></div>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Cloud, work, apps, and insight mapped together.</p>
                            </div>
                            <div className="rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/30 p-4">
                                <div className="flex items-center justify-between mb-3"><span className="font-label-caps text-label-caps text-primary uppercase">Governed paths</span><span className="text-secondary font-headline-sm text-headline-sm">3</span></div>
                                <div className="h-2 rounded-full bg-white overflow-hidden"><span className="block h-full w-3/4 bg-secondary"></span></div>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Identity, data, and release controls applied consistently.</p>
                            </div>
                            <div className="rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/30 p-4 sm:col-span-2">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="rounded-lg bg-white border border-outline-variant/30 px-3 py-2 font-label-caps text-label-caps text-primary uppercase">Azure</span>
                                    <span className="material-symbols-outlined text-secondary text-[18px]">east</span>
                                    <span className="rounded-lg bg-white border border-outline-variant/30 px-3 py-2 font-label-caps text-label-caps text-primary uppercase">M365</span>
                                    <span className="material-symbols-outlined text-secondary text-[18px]">east</span>
                                    <span className="rounded-lg bg-white border border-outline-variant/30 px-3 py-2 font-label-caps text-label-caps text-primary uppercase">Data + AI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-outline-variant/35 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1.2fr] border-b border-outline-variant/25">
                            <div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Cloud foundation</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Azure, identity, infrastructure</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Landing zones, migration paths, backup, monitoring, cost control, and platform operations.</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1.2fr] border-b border-outline-variant/25">
                            <div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Digital work</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Microsoft 365, Teams, SharePoint</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Collaboration, document control, knowledge access, workflow intake, and employee productivity.</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1.2fr] border-b border-outline-variant/25">
                            <div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Business platforms</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Dynamics, Power Platform</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Case handling, CRM, forms, approvals, automation, reporting, and low-code governance.</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1.2fr]">
                            <div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Insight and AI</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Fabric, Power BI, Copilot-ready data, semantic models, curated workspaces, and governed reporting layers. Supports trusted datasets, report certification, and AI-ready knowledge access.</div>
                            <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Data models, dashboards, automation intelligence, governance, and AI-enabled work patterns. Includes adoption signals, ownership rules, reusable insight components, refresh checks, and decision-ready reporting for delivery teams.</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Digital Workplace &amp; Collaboration</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Make Microsoft 365 easier to use, govern, and scale.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Collaboration value improves when teams have clear workspaces, document structures, ownership models, and adoption routines.</p>
                    </div>
                    <div className="rounded-xl border border-outline-variant/35 bg-white p-5 md:p-6">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:items-center">
                            <div><span className="font-label-caps text-label-caps text-primary uppercase">Teams</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Channel structures, meeting routines, service groups, and collaboration etiquette.</p></div>
                            <span className="hidden md:block material-symbols-outlined text-secondary">arrow_forward</span>
                            <div><span className="font-label-caps text-label-caps text-primary uppercase">SharePoint</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Intranets, document libraries, metadata, permissions, and knowledge access.</p></div>
                            <span className="hidden md:block material-symbols-outlined text-secondary">arrow_forward</span>
                            <div><span className="font-label-caps text-label-caps text-primary uppercase">Workflow</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Approvals, requests, handoffs, reminders, and status visibility.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-white rounded-none md:rounded-xl border-y md:border border-outline-variant/35">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Identity</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Role design, privileged access, conditional access, and guest controls.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-5 md:mt-8"><span className="font-label-caps text-label-caps text-primary uppercase">Information</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Retention, classification, document handling, and audit readiness.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Platform</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Environment strategy, connector policies, release controls, and monitoring.</p></div>
                    </div>
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Security, Compliance &amp; Governance</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Strengthen controls without slowing delivery.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Microsoft environments need security models that teams can understand and operate across identity, access, information protection, compliance, and platform governance.</p>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.76fr_1.24fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data, Analytics &amp; AI Enablement</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Prepare Microsoft data foundations for better decisions and automation.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">DGL helps connect data sources, reporting needs, governance, and AI-ready use cases so insight becomes part of daily operations.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr] gap-4 md:gap-5">
                        <div><span className="material-symbols-outlined text-primary mb-3">dataset</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Trusted data</span><p className="font-body-sm text-body-sm text-on-surface-variant">Common definitions, source mapping, quality checks, ownership, and access rules.</p></div>
                        <div className="hidden md:block bg-outline-variant/35"></div>
                        <div><span className="material-symbols-outlined text-secondary mb-3">monitoring</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Useful analytics</span><p className="font-body-sm text-body-sm text-on-surface-variant">Power BI dashboards, operational measures, leadership reporting, and action triggers.</p></div>
                        <div className="hidden md:block bg-outline-variant/35"></div>
                        <div><span className="material-symbols-outlined text-primary mb-3">auto_awesome</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Responsible AI</span><p className="font-body-sm text-body-sm text-on-surface-variant">Copilot readiness, automation candidates, prompt routines, risk controls, and adoption support.</p></div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Microsoft Delivery Approach</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Move from architecture intent to adopted capability.</h2>
                    </div>
                    <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Discover</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Review platforms, users, controls, and priorities.</p></div>
                            <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">Design</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Define architecture, governance, waves, and outcomes.</p></div>
                            <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Implement</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Configure, migrate, integrate, automate, and validate.</p></div>
                            <div className="p-5 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">Improve</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Support adoption, monitor usage, and optimize costs.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-b border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Business Outcomes &amp; Impact</span>
                        <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Measure the partnership through platform value and business adoption.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Modernization:</strong> fewer legacy constraints, cleaner integrations, and scalable cloud environments.</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Productivity:</strong> stronger collaboration, faster approvals, better knowledge access, and less duplicated work.</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Security:</strong> clearer access controls, governance routines, compliance visibility, and risk reduction.</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Insight:</strong> useful reporting, trusted data, AI readiness, and better decision support.</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Resilience:</strong> improved service continuity, monitoring, backup posture, and operational support.</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Value control:</strong> stronger license usage, cloud cost visibility, reusable standards, and roadmap discipline.</p>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
                        <div className="p-6 md:p-8 bg-[#E0F7FA]/30 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Long-Term Partnership Model</span>
                            <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Keep Microsoft services aligned as business needs evolve.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">The partnership model keeps roadmap decisions, support expectations, and optimization work connected over time.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Roadmap governance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Priorities, standards, investment sequencing, and risk review.</p><ul className="font-body-sm text-body-sm text-on-surface-variant mt-3 list-disc pl-5"><li>Maintain decision logs and ownership checkpoints.</li><li>Review roadmap dependencies before each delivery wave.</li></ul></div>
                            <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Managed support</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Release planning, service improvement, incident learning, and user guidance.</p><ul className="font-body-sm text-body-sm text-on-surface-variant mt-3 list-disc pl-5"><li>Track recurring issues and support readiness actions.</li><li>Coordinate updates with adoption and training needs.</li></ul></div>
                            <div className="p-5 md:p-6"><span className="font-label-caps text-label-caps text-primary uppercase">Continuous optimization</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Usage insight, cost control, adoption measures, and maturity planning.</p><ul className="font-body-sm text-body-sm text-on-surface-variant mt-3 list-disc pl-5"><li>Identify underused services and license improvements.</li><li>Prioritize automation and reporting refinements.</li></ul></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto pt-8 pb-14">
                <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-white">
                    <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-[#E0F7FA]/30 lg:block"></div>
                    <div className="relative grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-0">
                        <div className="p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Microsoft Readiness Conversation</span>
                            <h2 className="font-headline-lg text-[28px] leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Choose the Microsoft capability your organization needs to mature next.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Start with a focused review across cloud, workplace, data, security, applications, and automation, then shape a practical roadmap for delivery.</p>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
                                <div className="space-y-3">
                                    <div className="grid grid-cols-[auto_1fr] gap-3 items-start"><span className="mt-1 h-3 w-3 rounded-full bg-primary"></span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Assess</strong> the current Microsoft estate and priority business workflows.</p></div>
                                    <div className="grid grid-cols-[auto_1fr] gap-3 items-start"><span className="mt-1 h-3 w-3 rounded-full bg-secondary"></span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Prioritize</strong> the first capability with the clearest adoption and value path.</p></div>
                                    <div className="grid grid-cols-[auto_1fr] gap-3 items-start"><span className="mt-1 h-3 w-3 rounded-full bg-accent-amber"></span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Mobilize</strong> delivery ownership, governance, support, and measurement.</p></div>
                                </div>
                                <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors whitespace-nowrap" href="#">Talk to Our Team <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
