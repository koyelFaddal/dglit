import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function AboutDGL() {
    return (
        <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="max-w-container-max mx-auto py-8 md:py-10">
                <div className="bg-white border border-outline-variant/40 rounded-2xl architectural-shadow overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-0 items-center">
                        <div className="p-7 md:p-10 lg:p-12">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Company / About DGL</span>
                            <h1 className="font-display-lg text-[32px] leading-[40px] md:text-[44px] md:leading-[52px] xl:text-[50px] xl:leading-[58px] text-[#0A1F44] mb-5">Digital consulting built on trust, delivery, and measurable value.</h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-6">Denova GloSoft Limited helps organizations connect strategy, technology, governance, and adoption into transformation programs that are practical, secure, and built for long-term value.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                                <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Advisory</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Clear direction, operating choices, and governance for change.</p></div>
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Engineering</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Modern platforms, data, automation, cloud, and secure delivery.</p></div>
                                <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Assurance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Evidence, controls, service quality, risk, and accountable outcomes.</p></div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link href="#" className="inline-flex items-center justify-center gap-2 bg-white border border-primary-fixed-dim text-primary rounded-lg px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#E0F7FA]/30 transition-colors">Talk To DGL <span className="material-symbols-outlined text-[18px]">north_east</span></Link>
                                <Link href="#" className="inline-flex items-center justify-center gap-2 bg-[#E0F7FA]/30 border border-outline-variant/35 text-[#0A1F44] rounded-lg px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors">Explore Our Model</Link>
                            </div>
                        </div>
                        <div className="bg-[#E0F7FA]/30 p-5 md:p-7">
                            <img src={assetPath("/asset/company/about-digital/2-optimized.webp")} alt="DGL digital consulting leadership session" className="w-full aspect-[16/9] object-cover object-center rounded-xl border border-outline-variant/35 shadow-sm" fetchPriority="high" loading="eager" decoding="async" />
                            <div className="grid grid-cols-3 gap-3 mt-3">
                                <div className="bg-white border border-outline-variant/35 rounded-lg p-3"><strong className="block text-2xl text-primary">22+</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Years</span></div>
                                <div className="bg-white border border-outline-variant/35 rounded-lg p-3"><strong className="block text-2xl text-primary">500+</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Projects</span></div>
                                <div className="bg-white border border-outline-variant/35 rounded-lg p-3"><strong className="block text-2xl text-primary">24/7</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Support</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-6 items-stretch">
                    <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-6">
                        <img src={assetPath("/asset/company/about-digital/1-optimized.webp")} alt="DGL digital identity emblem" className="w-20 h-20 object-contain mb-5" loading="lazy" decoding="async" />
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">About</span>
                        <h2 className="font-headline-md text-headline-md text-[#0A1F44] mb-3">A consulting firm designed for joined-up transformation.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">DGL brings business consulting, technology delivery, cyber assurance, managed services, and change enablement into one practical delivery model.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2 bg-white border border-outline-variant/35 rounded-2xl p-6"><span className="material-symbols-outlined text-primary text-3xl mb-4">flag</span><h3 className="font-headline-sm text-headline-sm mb-2">Mission</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Help clients convert digital ambition into secure, useful, governed, and measurable delivery outcomes.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-2xl p-6"><span className="material-symbols-outlined text-primary text-3xl mb-4">visibility</span><h3 className="font-headline-sm text-headline-sm mb-2">Vision</h3><p className="font-body-sm text-body-sm text-on-surface-variant">A trusted global partner for accountable digital progress.</p></div>
                        <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-6"><span className="material-symbols-outlined text-primary text-3xl mb-4">hub</span><h3 className="font-headline-sm text-headline-sm mb-2">Capabilities</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Strategy, platforms, data, cloud, risk, service delivery, and adoption.</p></div>
                        <div className="md:col-span-4 bg-white border border-outline-variant/35 rounded-2xl p-5">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div><span className="font-label-caps text-label-caps text-primary uppercase">Digital-first approach</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Every engagement connects operating model, user experience, technology architecture, and value evidence.</p></div>
                                <div><span className="font-label-caps text-label-caps text-primary uppercase">Executive discipline</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Governance, reporting, risk ownership, and decision clarity are built into delivery from the start.</p></div>
                                <div><span className="font-label-caps text-label-caps text-primary uppercase">Delivery culture</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Teams focus on practical progress, usable services, measurable benefits, and sustainable improvement.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10">
                <div className="bg-[#E0F7FA]/30 border border-outline-variant/40 rounded-2xl p-7 md:p-8 architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-center">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Client Support</span>
                            <h2 className="font-headline-lg text-headline-lg text-[#0A1F44] mb-4">Need help with the DGL website or a live digital service?</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Create a support ticket with the details our team needs to triage, track, and resolve the request through Jira Service Management.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:items-center">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Capture</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Share the issue category, priority, and context.</p></div>
                                <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Track</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Every submission is saved and linked to Jira.</p></div>
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Notify</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Teams and customers receive status updates.</p></div>
                            </div>
                            <Link href="/company/support" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition hover:bg-primary-container whitespace-nowrap">Get Support <span className="material-symbols-outlined text-[18px]">support_agent</span></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10">
                <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-6 items-start">
                    <div className="bg-white border border-outline-variant/40 rounded-2xl p-7 md:p-8">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Global Presence</span>
                        <h2 className="font-headline-lg text-headline-lg text-[#0A1F44] mb-5">International reach with practical regional delivery.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">DGL supports clients across the United Kingdom, Qatar, United States, India, United Arab Emirates, and Maldives. Our operating model balances international standards with local service expectations, compliance needs, and delivery realities.</p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-4"><strong className="text-primary text-2xl">6</strong><p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Office regions</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><strong className="text-primary text-2xl">3</strong><p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Delivery modes</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><strong className="text-primary text-2xl">24/7</strong><p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Client support</p></div>
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-4"><strong className="text-primary text-2xl">360</strong><p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Governance view</p></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[0.88fr_1.12fr] gap-5">
                        <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-5">
                            <img src={assetPath("/asset/company/about-digital/3-optimized.webp")} alt="DGL international delivery footprint" className="w-full aspect-[4/3] object-cover object-center rounded-xl border border-outline-variant/35 mb-4" loading="lazy" decoding="async" />
                            <div className="grid grid-cols-1 gap-3">
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Regional continuity</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Consistent delivery standards with local context for regulation, culture, and service expectations.</p></div>
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Cross-border teams</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Specialists coordinate across advisory, engineering, support, and assurance workstreams.</p></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Global delivery capability</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Advisory, design, implementation, support, and improvement teams aligned through consistent delivery controls.</p></div>
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Regional expertise</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Local insight into procurement, regulation, accessibility, service quality, and operating culture.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Worldwide operations</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Structured escalation, executive reporting, and collaborative delivery across time zones.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10 border-y border-outline-variant/30">
                <div className="bg-white border border-outline-variant/40 rounded-2xl p-7 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-6 items-start">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Global Network &amp; Reach</span>
                            <h2 className="font-headline-lg text-headline-lg text-[#0A1F44] mb-4">A practical network for multi-region programs.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-5">Global reach matters most when clients need delivery continuity, regional understanding, shared governance, and reliable service support across markets.</p>
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5">
                                <span className="font-label-caps text-label-caps text-primary uppercase">Operating principle</span>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Central standards, local execution, visible accountability, and continuous improvement.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">location_on</span><h3 className="font-headline-sm text-headline-sm mb-2">United Kingdom</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Executive coordination, consulting engagement, and client governance.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">public</span><h3 className="font-headline-sm text-headline-sm mb-2">Qatar &amp; UAE</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Regional advisory, public sector support, and delivery collaboration.</p></div>
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">domain</span><h3 className="font-headline-sm text-headline-sm mb-2">USA</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Technology partnerships, enterprise engagement, and innovation alignment.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">groups</span><h3 className="font-headline-sm text-headline-sm mb-2">India</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Engineering, delivery support, platform services, and managed operations.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">language</span><h3 className="font-headline-sm text-headline-sm mb-2">Maldives</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Local engagement, service support, and digital program coordination.</p></div>
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">support_agent</span><h3 className="font-headline-sm text-headline-sm mb-2">Shared support</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Common reporting, issue management, escalation, and service continuity.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10">
                <div className="bg-white border border-outline-variant/40 rounded-2xl p-7 md:p-8 architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-6 items-start">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Partnerships</span>
                            <h2 className="font-headline-lg text-headline-lg text-[#0A1F44] mb-5">An ecosystem model for stronger transformation outcomes.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-5">We combine strategic partnerships, technology alliances, industry collaboration, and innovation networks to help clients access the right capability without losing delivery accountability.</p>
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5">
                                <h3 className="font-headline-sm text-headline-sm mb-2">Partnership governance</h3>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">Partners are integrated through shared outcomes, defined ownership, architecture reviews, and delivery evidence.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-2 bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-5">
                                <img src={assetPath("/asset/company/about-digital/4-optimized.webp")} alt="DGL partnership ecosystem" className="w-full aspect-[16/8] object-cover object-center rounded-xl border border-outline-variant/35 mb-4" loading="lazy" decoding="async" />
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Joint innovation</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Alliance activity focuses on practical pilots, scalable architectures, reusable accelerators, and measurable service value.</p></div>
                            </div>
                            <div className="bg-white border border-outline-variant/35 rounded-2xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">cloud</span><h3 className="font-headline-sm text-headline-sm mb-2">Technology alliances</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Cloud, ERP, CRM, analytics, collaboration, and platform ecosystems.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-2xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">diversity_3</span><h3 className="font-headline-sm text-headline-sm mb-2">Industry collaboration</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Sector specialists, research partners, delivery networks, and compliance advisors.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10">
                <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-7 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Partner Ecosystem Highlights</span>
                            <h2 className="font-headline-lg text-headline-lg text-[#0A1F44]">Collaboration that turns capability into outcomes.</h2>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">DGL structures partnerships around accountable delivery, reusable capability, and measurable business value instead of vendor coordination alone.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">architecture</span><h3 className="font-headline-sm text-headline-sm mb-2">Architecture alignment</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Shared design standards reduce complexity across platforms, data, integrations, and service ownership.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">speed</span><h3 className="font-headline-sm text-headline-sm mb-2">Delivery acceleration</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Reusable patterns, delivery playbooks, and specialist support help teams move faster with control.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">tips_and_updates</span><h3 className="font-headline-sm text-headline-sm mb-2">Innovation pipeline</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Emerging capabilities are tested against practical use cases, adoption readiness, and measurable benefit.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">support_agent</span><h3 className="font-headline-sm text-headline-sm mb-2">Service continuity</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Support models consider operations, security, reporting, and improvement after launch.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10 border-y border-outline-variant/30">
                <div className="bg-white border border-outline-variant/40 rounded-2xl p-7 md:p-8 architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-6 items-center">
                        <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-6">
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Strategic Conversation</span>
                            <h2 className="font-headline-md text-headline-md text-[#0A1F44] mb-4">Build a partner-led transformation plan with clear accountability.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">DGL can help shape the right mix of advisory, technology, delivery, assurance, and operating support for your next program.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 md:items-center">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Map</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Clarify partner roles, value cases, and governance.</p></div>
                                <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Mobilize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Align workstreams, standards, and delivery rhythm.</p></div>
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Measure</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Track outcomes, adoption, assurance, and support.</p></div>
                            </div>
                            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-white border border-primary-fixed-dim text-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#E0F7FA]/30 transition-colors whitespace-nowrap">Discuss Partnerships <span className="material-symbols-outlined text-[18px]">north_east</span></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-6 items-start">
                    <div className="bg-white border border-outline-variant/40 rounded-2xl p-7 md:p-8">
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Certifications &amp; Compliance</span>
                        <h2 className="font-headline-lg text-headline-lg text-[#0A1F44] mb-5">Quality, regulatory discipline, risk control, and assurance built into delivery.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">DGL's governance framework helps clients move with confidence by connecting delivery documentation, service quality, information handling, review gates, risk ownership, and audit-ready evidence.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">verified</span><h3 className="font-headline-sm text-headline-sm mb-2">Quality standards</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Structured methods, peer reviews, service checks, and continuous improvement cycles.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">policy</span><h3 className="font-headline-sm text-headline-sm mb-2">Regulatory compliance</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Controls aligned to client obligations, sector standards, privacy, and data handling needs.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">gpp_maybe</span><h3 className="font-headline-sm text-headline-sm mb-2">Risk practices</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Risk identification, mitigation ownership, escalation, and executive decision evidence.</p></div>
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">fact_check</span><h3 className="font-headline-sm text-headline-sm mb-2">Assurance rhythm</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Regular checkpoints that keep delivery confidence visible to teams and sponsors.</p></div>
                        </div>
                    </div>
                    <div className="bg-[#E0F7FA]/30 border border-outline-variant/40 rounded-2xl p-5">
                        <img src={assetPath("/asset/company/about-digital/6-optimized.webp")} alt="DGL compliance and governance assurance" className="w-full aspect-[4/3] object-cover object-center rounded-xl border border-outline-variant/35 mb-4" loading="lazy" decoding="async" />
                        <div className="grid grid-cols-1 gap-3">
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Assurance outcome</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Clear evidence for quality, compliance, risk decisions, and delivery accountability.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Review cadence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Practical checkpoints keep governance current without slowing progress.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10">
                <div className="bg-white border border-outline-variant/40 rounded-2xl p-7 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Trust, Security &amp; Assurance</span>
                            <h2 className="font-headline-lg text-headline-lg text-[#0A1F44] mb-4">Confidence is designed into the way programs are run.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">DGL treats assurance as an operating habit: controls are owned, evidence is visible, risks are acted on, and service quality is reviewed throughout the lifecycle.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">admin_panel_settings</span><h3 className="font-headline-sm text-headline-sm mb-2">Security by design</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Identity, data protection, secure configuration, and supplier assurance are considered from the start.</p></div>
                            <div className="bg-white border border-outline-variant/35 rounded-2xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">rule</span><h3 className="font-headline-sm text-headline-sm mb-2">Control ownership</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Responsibilities are clear across sponsors, delivery teams, platform owners, and support functions.</p></div>
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">monitoring</span><h3 className="font-headline-sm text-headline-sm mb-2">Executive visibility</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Progress, risk, value, and assurance are translated into concise decision-ready reporting.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10 border-y border-outline-variant/30">
                <div className="bg-white border border-outline-variant/40 rounded-2xl p-7 md:p-8 architectural-shadow">
                    <div className="grid grid-cols-1 xl:grid-cols-[0.82fr_1.18fr] gap-6 items-start">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">ESG &amp; Social Value</span>
                            <h2 className="font-headline-lg text-headline-lg text-[#0A1F44] mb-5">Responsible digital transformation with measurable social contribution.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Our responsibility approach connects sustainable digital practices, inclusive service design, community engagement, workforce development, and ethical business conduct.</p>
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-5">
                                <h3 className="font-headline-sm text-headline-sm text-[#0A1F44] mb-2">Responsible innovation principle</h3>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">Digital programs should improve access, reduce friction, protect users, and create value beyond the technology itself.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-5">
                            <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-5">
                                <img src={assetPath("/asset/company/about-digital/5-optimized.webp")} alt="DGL ESG and community impact" className="w-full aspect-[4/3] object-cover object-center rounded-xl border border-outline-variant/35 mb-4" loading="lazy" decoding="async" />
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Green delivery</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Efficient platforms, reduced rework, remote collaboration, and digital-first workflows.</p></div>
                                    <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Skills value</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Knowledge transfer and workforce enablement are built into transformation plans.</p></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">eco</span><h3 className="font-headline-sm text-headline-sm mb-2">Sustainability</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Efficient platforms, digital-first workflows, reduced waste, and greener delivery practices.</p></div>
                                <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">accessibility_new</span><h3 className="font-headline-sm text-headline-sm mb-2">Inclusion</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Accessible services, assisted digital support, community participation, and workforce skills transfer.</p></div>
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-3">shield_person</span><h3 className="font-headline-sm text-headline-sm mb-2">Responsible business</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Ethical conduct, transparent governance, supplier integrity, and accountable innovation.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10">
                <div className="bg-white border border-outline-variant/40 rounded-2xl p-7 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Social Value &amp; Community Impact</span>
                            <h2 className="font-headline-lg text-headline-lg text-[#0A1F44]">Digital work should leave stronger capability behind.</h2>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Social value is planned into delivery through inclusive services, skills transfer, community awareness, and practical measures that continue after launch.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">volunteer_activism</span><h3 className="font-headline-sm text-headline-sm mb-2">Community engagement</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Programs consider local needs, service accessibility, participation, and practical adoption barriers.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">school</span><h3 className="font-headline-sm text-headline-sm mb-2">Workforce development</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Training, mentoring, knowledge transfer, and role-based enablement help teams own the future state.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">accessibility_new</span><h3 className="font-headline-sm text-headline-sm mb-2">Inclusive services</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Design choices consider accessibility, assisted digital support, language, confidence, and usability.</p></div>
                        <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="material-symbols-outlined text-primary text-3xl mb-4">query_stats</span><h3 className="font-headline-sm text-headline-sm mb-2">Measured contribution</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Outcomes are framed around benefits, service quality, resilience, user experience, and social value.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-10">
                <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-7 md:p-8 architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 items-center">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Responsibility Conversation</span>
                            <h2 className="font-headline-lg text-headline-lg text-[#0A1F44] mb-4">Shape a transformation agenda that balances performance and responsibility.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Speak with DGL about strategy, governance, platforms, ESG, and long-term value creation that can be evidenced in service quality, workforce capability, and responsible business practice.</p>
                        </div>
                        <div className="bg-white border border-outline-variant/35 rounded-2xl p-5">
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-4"><strong className="text-primary text-2xl">ESG</strong><p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Planning</p></div>
                                <div className="bg-white border border-outline-variant/35 rounded-xl p-4"><strong className="text-primary text-2xl">Value</strong><p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Evidence</p></div>
                            </div>
                            <Link href="#" className="w-full inline-flex items-center justify-center gap-2 bg-white border border-primary-fixed-dim text-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#E0F7FA]/30 transition-colors">Start Responsible Digital Conversation <span className="material-symbols-outlined text-[18px]">north_east</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
