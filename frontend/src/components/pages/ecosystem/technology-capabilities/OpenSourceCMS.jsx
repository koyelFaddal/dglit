import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function OpenSourceCMS() {
    return (
        <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="relative -mt-24 md:-mt-8 mb-3 md:mb-4 -mx-gutter min-h-[640px] md:min-h-[580px] flex items-center overflow-hidden bg-white">
                <img src={assetPath("/asset/ecosystem/technology/open_source/1-optimized.webp")} alt="Open source and CMS platform architecture" className="absolute inset-0 h-full w-full object-cover object-center opacity-30 blur-[1px] scale-[1.01] hero-visual-balance" fetchPriority="high" loading="eager" decoding="async" />
                <div className="absolute inset-0 bg-white/74"></div>
                <div className="absolute inset-0 bg-[#E0F7FA]/24"></div>
                <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-fixed/25 blur-3xl opacity-70"></div>
                <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pt-28 md:pt-16 lg:pt-20 pb-10 md:pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-12 items-center">
                        <div>
                            <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-6">
                                <span>Ecosystem</span><span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span><span>Technology</span><span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span><span className="text-primary">Open Source &amp; CMS</span>
                            </nav>
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">Composable Digital Platforms</span>
                            <h1 className="font-display-lg text-[38px] leading-[46px] md:text-display-sm md:leading-[56px] lg:text-display-lg lg:leading-[72px] text-on-surface mb-6 max-w-4xl">Open source foundations for content, service, and product teams.</h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">DGL helps organizations select, modernize, govern, and support CMS and open source platforms that can scale without locking digital teams into fragile delivery models.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Plan CMS Roadmap <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/60 text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-primary transition-all" href="#">Review Platform Risk <span className="material-symbols-outlined text-[18px]">fact_check</span></Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-outline-variant/35 bg-white/90 p-5 md:p-6 architectural-shadow"><span className="material-symbols-outlined text-primary mb-3">account_tree</span><h3 className="font-headline-sm text-headline-sm mb-2">Architecture</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Composable CMS, integration, hosting, workflow, and deployment patterns.</p></div>
                            <div className="rounded-xl border border-outline-variant/35 bg-white/90 p-5 md:p-6 architectural-shadow"><span className="material-symbols-outlined text-secondary mb-3">admin_panel_settings</span><h3 className="font-headline-sm text-headline-sm mb-2">Governance</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Roles, approvals, plugin standards, upgrade paths, and content controls.</p></div>
                            <div className="sm:col-span-2 rounded-xl border border-outline-variant/35 bg-white/90 p-5 md:p-6 architectural-shadow"><span className="material-symbols-outlined text-primary mb-3">hub</span><h3 className="font-headline-sm text-headline-sm mb-2">Sustainable Delivery</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Reusable components, API boundaries, accessibility, analytics, and support routines that keep open platforms maintainable.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-12 items-center">
                    <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-white shadow-sm">
                        <img src={assetPath("/asset/ecosystem/technology/open_source/2-optimized.webp")} alt="CMS editorial workflow and open platform operations" className="w-full h-[300px] md:h-[420px] object-cover" loading="lazy" decoding="async" />
                    </div>
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">CMS Modernization</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] sm:text-[28px] sm:leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="sm:hidden">Give editors and<br />service teams a cleaner<br />operating model.</span><span className="hidden sm:inline">Give editors and service teams a cleaner operating model.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">We align information architecture, content workflows, templates, publishing governance, analytics, and integration needs so CMS improvements translate into faster, safer digital delivery.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="rounded-lg border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Editorial flow</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Approvals, revisions, roles, localization, and content lifecycle controls.</p></div>
                            <div className="rounded-lg border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Platform quality</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Performance, accessibility, SEO hygiene, security, and release reliability.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Open Source Assurance</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] sm:text-headline-lg sm:leading-[40px] text-on-surface mb-4"><span className="sm:hidden">Use open platforms<br />with clear ownership<br />and fewer surprises.</span><span className="hidden sm:inline">Use open platforms with clear ownership and fewer surprises.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">DGL reviews dependencies, extension choices, hosting, backup routines, licensing, release cadence, and support responsibilities so open source remains an advantage rather than an unmanaged risk.</p>
                        <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1.1fr] bg-white">
                                <div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Plugins</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Selection, updates, conflicts</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Reduce dependency risk and maintenance overhead.</div>
                                <div className="p-4 font-label-caps text-label-caps text-primary uppercase border-t border-outline-variant/25">Hosting</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/25">Performance, scaling, resilience</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/25">Keep experiences stable during campaigns and service peaks.</div>
                            </div>
                        </div>
                    </div>
                    <img src={assetPath("/asset/ecosystem/technology/open_source/3-optimized.webp")} alt="Open source platform governance and delivery assurance" className="w-full h-[300px] md:h-[410px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
                    <div className="lg:sticky lg:top-28">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Open Source Delivery Patterns</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] sm:text-[28px] sm:leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="sm:hidden">Choose the CMS shape<br />that matches how<br />teams work.</span><span className="hidden sm:inline">Choose the CMS shape that matches the way teams actually work.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Different organizations need different levels of editorial control, integration depth, governance, and product flexibility. DGL helps make those choices explicit before build work begins.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-6 shadow-sm"><span className="material-symbols-outlined text-primary mb-4">web</span><h3 className="font-headline-sm text-headline-sm mb-2"><span className="sm:hidden">Traditional<br />CMS</span><span className="hidden sm:inline">Traditional CMS</span></h3><p className="font-body-sm text-body-sm text-on-surface-variant">Best for content-rich sites, campaigns, structured publishing, and teams that need familiar editorial workflows.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-6 shadow-sm"><span className="material-symbols-outlined text-secondary mb-4">api</span><h3 className="font-headline-sm text-headline-sm mb-2"><span className="sm:hidden">Headless<br />CMS</span><span className="hidden sm:inline">Headless CMS</span></h3><p className="font-body-sm text-body-sm text-on-surface-variant">Useful when content must serve web, mobile, portals, service journeys, and partner channels from one governed source.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-6 shadow-sm"><span className="material-symbols-outlined text-secondary mb-4">extension</span><h3 className="font-headline-sm text-headline-sm mb-2"><span className="sm:hidden">Composable<br />Stack</span><span className="hidden sm:inline">Composable Stack</span></h3><p className="font-body-sm text-body-sm text-on-surface-variant">A fit for product teams combining CMS, search, forms, identity, analytics, CRM, and commerce services.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-6 shadow-sm"><span className="material-symbols-outlined text-primary mb-4">domain_verification</span><h3 className="font-headline-sm text-headline-sm mb-2"><span className="sm:hidden">Managed<br />Open Source</span><span className="hidden sm:inline">Managed Open Source</span></h3><p className="font-body-sm text-body-sm text-on-surface-variant">Keeps the flexibility of open platforms while adding patching, monitoring, backup, support, and release discipline.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
                    <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] border-b border-outline-variant/25"><div className="p-5 bg-[#E0F7FA]/30 font-label-caps text-label-caps text-primary uppercase">Content</div><div className="p-5 font-body-sm text-body-sm text-on-surface-variant">Information architecture, templates, publishing permissions, translation, search, and lifecycle rules.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] border-b border-outline-variant/25"><div className="p-5 bg-white font-label-caps text-label-caps text-primary uppercase">Experience</div><div className="p-5 font-body-sm text-body-sm text-on-surface-variant">Reusable page patterns, accessibility, performance budgets, forms, personalization, and analytics events.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] border-b border-outline-variant/25"><div className="p-5 bg-[#E0F7FA]/30 font-label-caps text-label-caps text-primary uppercase">Platform</div><div className="p-5 font-body-sm text-body-sm text-on-surface-variant">Hosting, environments, deployment, integrations, identity, logging, backup, and recovery routines.</div></div>
                        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr]"><div className="p-5 bg-white font-label-caps text-label-caps text-primary uppercase">Operation</div><div className="p-5 font-body-sm text-body-sm text-on-surface-variant">Ownership model, support queue, release calendar, plugin review, incident response, and improvement backlog.</div></div>
                    </div>
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Capability Map</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] sm:text-headline-lg sm:leading-[40px] text-on-surface mb-4"><span className="sm:hidden">Make platform work<br />visible.</span><span className="hidden sm:inline">Make the invisible platform work visible.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">A CMS project succeeds when business teams can see how content, technology, governance, and service operations connect. We map that system so priorities are easier to fund and sequence.</p>
                        <div className="rounded-lg bg-[#E0F7FA]/35 border border-outline-variant/35 text-on-surface p-5"><span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-2">Outcome</span><p className="font-body-sm text-body-sm text-on-surface-variant">Clearer decisions, cleaner ownership, and less platform drift after launch.</p></div>
                    </div>
                </div>
            </section>
            <section className="relative -mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 overflow-hidden bg-[#E0F7FA]/30 text-on-surface border-y md:border border-outline-variant/30 rounded-none md:rounded-xl">
                <div className="absolute inset-y-0 right-0 w-1/2 bg-white/45"></div>
                <div className="relative grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Migration Without Mess</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] sm:text-[28px] sm:leading-[36px] md:text-headline-lg md:leading-[40px] mb-4"><span className="sm:hidden">Move content and<br />functionality without<br />losing trust.</span><span className="hidden sm:inline">Move content and functionality without losing trust.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">We plan migrations around content quality, redirects, search equity, accessibility, integrations, and release confidence, not just page counts.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="bg-white/80 border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">01 Audit</span><p className="font-body-sm text-body-sm text-on-surface-variant">Inventory pages, media, metadata, redirects, risks, and business owners.</p></div>
                        <div className="bg-white/80 border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">02 Model</span><p className="font-body-sm text-body-sm text-on-surface-variant">Define content types, fields, relationships, validation, and workflow states.</p></div>
                        <div className="bg-white/80 border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">03 Move</span><p className="font-body-sm text-body-sm text-on-surface-variant">Migrate, cleanse, redirect, test, and reconcile with stakeholder review.</p></div>
                        <div className="bg-white/80 border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">04 Stabilize</span><p className="font-body-sm text-body-sm text-on-surface-variant">Monitor traffic, errors, performance, editorial feedback, and support demand.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-stretch">
                    <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-8 shadow-sm">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Design System Fit</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] sm:text-headline-lg sm:leading-[40px] text-on-surface mb-4"><span className="sm:hidden">Connect CMS templates<br />to a reusable<br />design language.</span><span className="hidden sm:inline">Connect CMS templates to a reusable design language.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">The best CMS implementations reduce page-by-page reinvention. We define component rules, authoring options, content constraints, and quality checks so pages feel consistent without becoming rigid.</p>
                        <div className="grid grid-cols-2 gap-3 font-label-caps text-label-caps text-primary uppercase"><span className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/30 p-3">Components</span><span className="rounded-lg bg-white border border-outline-variant/30 p-3">Tokens</span><span className="rounded-lg bg-white border border-outline-variant/30 p-3">Patterns</span><span className="rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/30 p-3">Checks</span></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-6"><span className="material-symbols-outlined text-secondary mb-4">view_quilt</span><h3 className="font-headline-sm text-headline-sm mb-2"><span className="sm:hidden">Page<br />Blocks</span><span className="hidden sm:inline">Page Blocks</span></h3><p className="font-body-sm text-body-sm text-on-surface-variant">Flexible sections with guardrails for spacing, content length, image use, and responsive behavior.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-6"><span className="material-symbols-outlined text-primary mb-4">edit_note</span><h3 className="font-headline-sm text-headline-sm mb-2"><span className="sm:hidden">Author<br />Guidance</span><span className="hidden sm:inline">Author Guidance</span></h3><p className="font-body-sm text-body-sm text-on-surface-variant">Fields, hints, preview routines, and approval paths that help editors publish confidently.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white p-6"><span className="material-symbols-outlined text-primary mb-4">speed</span><h3 className="font-headline-sm text-headline-sm mb-2"><span className="sm:hidden">Performance<br />Rules</span><span className="hidden sm:inline">Performance Rules</span></h3><p className="font-body-sm text-body-sm text-on-surface-variant">Budgets for media, scripts, caching, page weight, and Core Web Vitals.</p></div>
                        <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-6"><span className="material-symbols-outlined text-secondary mb-4">accessibility_new</span><h3 className="font-headline-sm text-headline-sm mb-2">Accessibility</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Reusable checks for structure, contrast, keyboard paths, alt text, and form behavior.</p></div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-surface-container-lowest border-y md:border border-outline-variant/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Security &amp; Maintenance Rhythm</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] sm:text-headline-lg sm:leading-[40px] text-on-surface mb-4"><span className="sm:hidden">Keep open source<br />dependable after<br />go-live.</span><span className="hidden sm:inline">Keep open source dependable after go-live.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">The page should not slowly become a risk register. We establish practical routines for patching, monitoring, access, backups, and incident response.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-6 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Monthly</span><p className="font-body-sm text-body-sm text-on-surface-variant">Patch review, dependency scan, backup evidence, access changes, and support trend review.</p></div>
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-6 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Quarterly</span><p className="font-body-sm text-body-sm text-on-surface-variant">Plugin rationalization, performance review, content debt cleanup, and roadmap prioritization.</p></div>
                        <div className="rounded-xl bg-white border border-outline-variant/35 p-6 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Annually</span><p className="font-body-sm text-body-sm text-on-surface-variant">Architecture health check, hosting strategy, license review, resilience test, and investment case refresh.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Decision Support</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] sm:text-[28px] sm:leading-[36px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="sm:hidden">Know when to extend,<br />replace, or stabilize.</span><span className="hidden sm:inline">Know when to extend, replace, or stabilize.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">Not every CMS problem needs a rebuild. We help teams compare options with evidence, including cost, capability, risk, supportability, and business timing.</p>
                        <div className="flex flex-wrap gap-3 font-label-caps text-label-caps uppercase"><span className="rounded-full bg-primary-fixed text-on-primary-fixed px-4 py-2">Extend</span><span className="rounded-full bg-secondary-fixed text-on-secondary-fixed px-4 py-2">Replace</span><span className="rounded-full bg-surface-container-high text-on-surface px-4 py-2">Stabilize</span></div>
                    </div>
                    <div className="rounded-xl border border-outline-variant/35 overflow-hidden bg-white shadow-sm">
                        <div className="grid grid-cols-[0.9fr_1fr] bg-[#E0F7FA]/35 border-b border-outline-variant/25"><div className="p-4 font-label-caps text-label-caps text-primary uppercase">Signal</div><div className="p-4 font-label-caps text-label-caps text-primary uppercase">What it means</div></div>
                        <div className="grid grid-cols-[0.9fr_1fr] border-b border-outline-variant/25"><div className="p-4 font-body-sm text-body-sm text-on-surface">High plugin conflict</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Rationalize extensions and clarify ownership.</div></div>
                        <div className="grid grid-cols-[0.9fr_1fr] border-b border-outline-variant/25"><div className="p-4 font-body-sm text-body-sm text-on-surface">Slow publishing</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Improve workflow, templates, previews, and approvals.</div></div>
                        <div className="grid grid-cols-[0.9fr_1fr]"><div className="p-4 font-body-sm text-body-sm text-on-surface">Rigid experience layer</div><div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Consider headless or composable patterns.</div></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden architectural-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
                        <div className="p-6 md:p-8 lg:p-10">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Engagement Path</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] sm:text-[24px] sm:leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="sm:hidden">Start with the CMS<br />decision that needs<br />confidence.</span><span className="hidden sm:inline">Start with the CMS decision that needs confidence.</span></h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">We can help compare platform choices, audit an existing implementation, prepare a modernization backlog, or establish governance for long-term support.</p>
                            <Link className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Talk to Our Team <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/30 border-t lg:border-t-0 lg:border-l border-outline-variant/30">
                            <div className="space-y-3">
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Assess</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Content model, plugins, security posture, integrations, hosting, and ownership.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Design</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Target architecture, templates, workflow rules, release model, and governance guardrails.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Mobilize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Backlog, sprint plan, migration approach, support model, and adoption measures.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
