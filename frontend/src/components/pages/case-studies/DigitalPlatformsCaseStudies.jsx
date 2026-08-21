import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function DigitalPlatformsCaseStudies() {
    return (
        <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="relative -mt-24 min-h-[680px] lg:min-h-[760px] flex items-center pt-20 overflow-hidden bg-surface -mx-gutter">
                <div className="absolute inset-0 z-0">
                    <img alt="Digital platform transformation case study" className="hero-visual-balance w-full h-full object-cover object-center lg:object-right opacity-80" src={assetPath("/asset/case_studies/digital_platform/1-optimized.webp")} fetchPriority="high" loading="eager" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20"></div>
                    <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-fixed/25 blur-3xl opacity-70"></div>
                </div>
                <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                    <div className="max-w-2xl">
                        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5">
                            <span>Case Studies</span>
                            <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                            <span className="text-primary">Digital Platforms</span>
                        </nav>
                        <span className="inline-block bg-accent-teal/10 text-accent-teal font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">PLATFORM DELIVERY EVIDENCE</span>
                        <h1 className="font-display-lg text-[34px] leading-[42px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-text-primary mb-6"><span className="hidden sm:inline">Digital platform case studies shaped around service, adoption, and scale</span><span className="sm:hidden">Digital platform case studies built for adoption</span></h1>
                        <p className="font-body-lg text-body-lg text-text-secondary mb-8 max-w-xl">DGL helps organizations turn portals, service platforms, mobile journeys, and experience layers into reliable digital products that users can understand, teams can operate, and leaders can measure.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 sm:px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:shadow-lg transition-all" href="#">Review Platform Outcomes <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                            <Link className="inline-flex items-center justify-center gap-2 border-[1.5px] border-primary bg-white/75 text-primary px-6 sm:px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/5 transition-all" href="#">Plan Platform Roadmap</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="relative overflow-hidden border border-outline-variant/35 bg-white rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
                        <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Platform Case Ledger</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">This page follows one platform through service evidence, not reusable page blocks.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">The story is organized like an operating record: signals, decisions, release proof, adoption behavior, and long-term ownership.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-outline-variant/25"><span className="text-primary font-display-sm text-[38px] leading-[44px] block mb-3">01</span><span className="font-label-caps text-label-caps text-primary uppercase">Service entry</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Where users began, hesitated, switched channel, or abandoned.</p><ul className="mt-4 space-y-2 font-body-sm text-body-sm text-on-surface-variant"><li className="border-l-2 border-primary pl-3">Mapped search terms, first clicks, and repeated entry paths.</li><li className="border-l-2 border-primary pl-3">Separated genuine demand from confusion created by content gaps.</li></ul></div>
                            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-outline-variant/25 bg-[#E0F7FA]/15"><span className="text-primary font-display-sm text-[38px] leading-[44px] block mb-3">02</span><span className="font-label-caps text-label-caps text-primary uppercase">Platform action</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">What the platform changed across journey, workflow, and data.</p><ul className="mt-4 space-y-2 font-body-sm text-body-sm text-on-surface-variant"><li className="border-l-2 border-secondary pl-3">Linked account, form, status, notification, and support moments.</li><li className="border-l-2 border-secondary pl-3">Defined which team owned content, workflow, and service records.</li></ul></div>
                            <div className="p-6 md:p-8"><span className="text-primary font-display-sm text-[38px] leading-[44px] block mb-3">03</span><span className="font-label-caps text-label-caps text-primary uppercase">Operating proof</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">How teams measured completion, support pressure, and release value.</p><ul className="mt-4 space-y-2 font-body-sm text-body-sm text-on-surface-variant"><li className="border-l-2 border-primary pl-3">Compared digital completion with avoidable phone and email contact.</li><li className="border-l-2 border-primary pl-3">Used rework, queue age, and satisfaction to prioritize releases.</li></ul></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-[0.62fr_0.38fr] gap-8 lg:gap-12 items-center">
                    <div className="relative min-h-[430px] overflow-hidden rounded-lg">
                        <img src={assetPath("/asset/case_studies/digital_platform/2-optimized.webp")} alt="Digital platform product team reviewing service journeys" className="absolute inset-0 w-full h-full object-cover opacity-80" loading="lazy" decoding="async" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/10"></div>
                        <div className="absolute left-0 bottom-0 right-0 p-6 md:p-8">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Featured Platform Transformation Story</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface max-w-2xl">A fragmented service estate became a product platform with one accountable journey model.</h2>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Observed</span><p className="font-body-md text-body-md text-on-surface-variant mt-2">Users moved between static content, PDF forms, phone queues, and email trails to complete one request.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Changed</span><p className="font-body-md text-body-md text-on-surface-variant mt-2">The team created shared rules for identity, guided forms, status, evidence, notifications, and assisted support.</p></div>
                        <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Proved</span><p className="font-body-md text-body-md text-on-surface-variant mt-2">Product owners could finally see where users dropped, where staff reworked, and which release removed the most friction.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.28fr_0.72fr] gap-8 lg:gap-12">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">User Evidence Wall</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The problem was recorded as user friction, not a list of features.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="relative border-t-4 border-primary pt-5"><span className="absolute right-0 top-4 text-[56px] leading-none text-primary/10 font-bold">A</span><h3 className="font-headline-sm text-headline-sm mb-2">Users entered through the wrong door.</h3><p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Search results led to policy explanations when people needed a task path, eligibility prompt, or account action.</p></div>
                        <div className="relative border-t-4 border-secondary pt-5"><span className="absolute right-0 top-4 text-[56px] leading-none text-secondary/10 font-bold">B</span><h3 className="font-headline-sm text-headline-sm mb-2">Forms repeated what the business already knew.</h3><p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Account, CRM, document, and previous service data were not reused at the moment of submission.</p></div>
                        <div className="relative border-t-4 border-secondary pt-5"><span className="absolute right-0 top-4 text-[56px] leading-none text-secondary/10 font-bold">C</span><h3 className="font-headline-sm text-headline-sm mb-2">Progress disappeared after submission.</h3><p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Users had no shared status model, so routine progress questions became support demand.</p></div>
                        <div className="relative border-t-4 border-primary pt-5"><span className="absolute right-0 top-4 text-[56px] leading-none text-primary/10 font-bold">D</span><h3 className="font-headline-sm text-headline-sm mb-2">Staff saw symptoms, not the journey.</h3><p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">Operational queues showed work volume without showing which digital step created the pressure.</p></div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-lg">
                <div className="mb-8 max-w-3xl">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Experience Blueprint Canvas</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Strategy was redrawn as a canvas of promises, responsibilities, and proof.</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr_0.85fr] gap-5 items-stretch">
                    <div className="bg-white border border-outline-variant/35 rounded-lg p-6">
                        <span className="font-label-caps text-label-caps text-primary uppercase">Promise to user</span>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-4">Start the service once, understand eligibility, know what evidence is needed, and receive a visible next step.</p>
                    </div>
                    <div className="bg-white border border-outline-variant/35 rounded-lg p-6">
                        <span className="font-label-caps text-label-caps text-primary uppercase">Platform responsibility</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                            <p className="font-body-sm text-body-sm text-on-surface-variant border-l-2 border-secondary pl-3">Account prefill and saved progress</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant border-l-2 border-secondary pl-3">Validation and document rules</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant border-l-2 border-secondary pl-3">Status and notifications</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant border-l-2 border-secondary pl-3">Assisted-service handoff</p>
                        </div>
                    </div>
                    <div className="bg-white border border-outline-variant/35 rounded-lg p-6">
                        <span className="font-label-caps text-label-caps text-primary uppercase">Evidence signal</span>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-4">Completion, rework, status contact, satisfaction, accessibility support, and staff queue age.</p>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Integration Cutaway</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Instead of a stack diagram, leaders saw the platform as a service cutaway.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Each layer described what the user saw, what staff handled, and which foundation service had to be reliable.</p>
                    </div>
                    <div className="relative min-h-[360px]">
                        <div className="absolute inset-x-0 top-0 bg-white border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Experience layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Web, mobile, account, notifications, assisted digital, accessibility.</p></div>
                        <div className="absolute inset-x-6 top-[116px] bg-[#E0F7FA] border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Service layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Forms, evidence, workflow, staff queues, status, support handoff.</p></div>
                        <div className="absolute inset-x-12 top-[232px] bg-white border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Foundation layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">CMS, CRM, identity, search, analytics, payments, integration.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 xl:grid-cols-[0.25fr_0.75fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Release Runway</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">Delivery moved in service slices, not repeating page sections.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="min-h-[230px] bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-6 flex flex-col justify-between"><span className="font-label-caps text-label-caps text-primary uppercase">Slice 01</span><div><h3 className="font-headline-sm text-headline-sm mb-2">Find and start</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Search, landing, eligibility, sign-in, and entry-point analytics.</p></div></div>
                        <div className="min-h-[230px] bg-white border border-outline-variant/35 rounded-lg p-6 flex flex-col justify-between"><span className="font-label-caps text-label-caps text-primary uppercase">Slice 02</span><div><h3 className="font-headline-sm text-headline-sm mb-2">Submit and validate</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Forms, evidence, rules, save states, payment, and error reduction.</p></div></div>
                        <div className="min-h-[230px] bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-6 flex flex-col justify-between"><span className="font-label-caps text-label-caps text-primary uppercase">Slice 03</span><div><h3 className="font-headline-sm text-headline-sm mb-2">Track and support</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Status, notifications, staff queues, assisted routes, and closure evidence.</p></div></div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-white rounded-none md:rounded-lg border-y md:border border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-8 lg:gap-12 items-center">
                    <img src={assetPath("/asset/case_studies/digital_platform/3-optimized.webp")} alt="Digital platform engagement and service evidence dashboard" className="w-full h-[320px] md:h-[470px] object-cover rounded-lg" loading="lazy" decoding="async" />
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Adoption Observatory</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Adoption was read as behavior across the whole service loop.</h2>
                        <div className="grid grid-cols-3 gap-0 border-y border-outline-variant/35 mt-6">
                            <div className="py-5 pr-4 border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Return</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Account visits and status checks.</p></div>
                            <div className="py-5 px-4 border-r border-outline-variant/25"><span className="font-label-caps text-label-caps text-primary uppercase">Complete</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Submissions without rework.</p></div>
                            <div className="py-5 pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Resolve</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Closure with fewer loops.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="rounded-lg overflow-hidden bg-[#E0F7FA]/30 border border-outline-variant/35">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
                        <div className="p-6 md:p-8 lg:p-10">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Service Control Room</span>
                            <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Operational teams gained one view of digital service health.</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">The control room connected experience signals with staff work, platform errors, content quality, and service pressure.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="p-6 md:p-8 border-t lg:border-t-0 md:border-r border-outline-variant/25 bg-white"><span className="font-label-caps text-label-caps text-primary uppercase">Demand</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Search terms, task starts, account visits, campaign traffic, and peaks.</p></div>
                            <div className="p-6 md:p-8 border-t lg:border-t-0 md:border-r border-outline-variant/25 bg-white/70"><span className="font-label-caps text-label-caps text-primary uppercase">Friction</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Errors, exits, repeated fields, unsupported documents, and channel switches.</p></div>
                            <div className="p-6 md:p-8 border-t lg:border-t-0 border-outline-variant/25 bg-white"><span className="font-label-caps text-label-caps text-primary uppercase">Capacity</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Backlog, review time, staff queues, support volume, and exception demand.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Resilience Docket</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Scalability decisions were logged against the services people depended on most.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">The docket prioritized high-demand tasks, payment flows, document upload, mobile completion, search performance, and integration reliability.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4 border-b border-outline-variant/25 pb-4"><span className="font-label-caps text-label-caps text-primary uppercase w-24 shrink-0">Speed</span><p className="font-body-sm text-body-sm text-on-surface-variant">Page load, form response, search return, and integration latency.</p></div>
                        <div className="flex gap-4 border-b border-outline-variant/25 pb-4"><span className="font-label-caps text-label-caps text-primary uppercase w-24 shrink-0">Recovery</span><p className="font-body-sm text-body-sm text-on-surface-variant">Save progress, retry rules, clear errors, and support handoff.</p></div>
                        <div className="flex gap-4"><span className="font-label-caps text-label-caps text-primary uppercase w-24 shrink-0">Scale</span><p className="font-body-sm text-body-sm text-on-surface-variant">Traffic peaks, content growth, workflow load, and release readiness.</p></div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_0.7fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Value Proof Strip</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface">Impact was reported as a service outcome.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-white p-6 rounded-lg"><span className="font-display-sm text-[46px] leading-[52px] text-primary block mb-2">41%</span><p className="font-body-sm text-body-sm text-on-surface-variant">More priority-service completions stayed in the digital channel.</p></div>
                        <div className="bg-white p-6 rounded-lg border border-primary/25"><span className="font-display-sm text-[46px] leading-[52px] text-primary block mb-2">22%</span><p className="font-body-sm text-body-sm text-on-surface-variant">Lower avoidable status-contact volume after release.</p></div>
                        <div className="bg-white p-6 rounded-lg"><span className="font-display-sm text-[46px] leading-[52px] text-primary block mb-2">9</span><p className="font-body-sm text-body-sm text-on-surface-variant">Reusable journey patterns adopted by product teams.</p></div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Field Notes</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The lessons were written as operating notes for future platform teams.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                        <p className="font-body-md text-body-md text-on-surface-variant border-t-4 border-primary pt-4">Show status before users ask. Status models reduce avoidable contact and help staff work from the same record.</p>
                        <p className="font-body-md text-body-md text-on-surface-variant border-t-4 border-secondary pt-4">Treat content as a live service. Owners, review dates, search terms, and plain-language evidence keep journeys usable.</p>
                        <p className="font-body-md text-body-md text-on-surface-variant border-t-4 border-secondary pt-4">Design assisted paths into the core. Alternative support should be visible, traceable, and connected to the same service outcome.</p>
                        <p className="font-body-md text-body-md text-on-surface-variant border-t-4 border-primary pt-4">Let analytics choose the next release. Backlog choices improve when they reflect completion, effort, rework, and satisfaction.</p>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                <div className="grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr] gap-8 lg:gap-12 items-center">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Evolution Charter</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The roadmap became a stewardship charter instead of a backlog list.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">After launch, product owners balanced stability, expansion, compliance, content quality, accessibility, and service improvement.</p>
                    </div>
                    <div className="relative min-h-[260px]">
                        <div className="absolute left-0 top-0 w-full md:w-[58%] bg-white border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Stabilize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Errors, support demand, accessibility issues, and integration health.</p></div>
                        <div className="absolute right-0 top-[86px] w-full md:w-[58%] bg-[#E0F7FA] border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Extend</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Journey patterns for new services, products, and audience groups.</p></div>
                        <div className="absolute left-0 bottom-0 w-full md:w-[58%] bg-white border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Optimize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Adoption, cost-to-serve, satisfaction, and rework evidence.</p></div>
                    </div>
                </div>
            </section>
            <section id="digital-platform-case-study-cta" className="max-w-container-max mx-auto pt-8 pb-14 md:pt-10 md:pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[0.66fr_0.34fr] gap-6 lg:gap-10">
                    <div className="bg-white border border-outline-variant/35 rounded-lg p-6 md:p-8 lg:p-10">
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Start the Digital Platform Conversation</span>
                        <h2 className="font-headline-lg text-[26px] leading-[34px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Turn a platform challenge into a service story users can complete and leaders can measure.</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Begin with a portal, service journey, content platform, mobile experience, or self-service workflow that needs clearer ownership, better adoption, and measurable operating value.</p>
                    </div>
                    <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <span className="font-label-caps text-label-caps text-primary uppercase block mb-3">First output</span>
                            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">A scoped platform case brief with user needs, service journeys, integration points, content ownership, performance measures, and release priorities.</p>
                        </div>
                        <Link className="inline-flex w-full items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start Platform Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
