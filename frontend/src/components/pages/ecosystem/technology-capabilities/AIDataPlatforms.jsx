"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function AIDataPlatforms() {
    return (
        <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="relative -mt-24 md:-mt-8 mb-3 md:mb-4 -mx-gutter min-h-[620px] md:min-h-[560px] flex items-center overflow-hidden bg-white">
                <img src={assetPath("/asset/ecosystem/techology/ai_data_platform/1.png")} alt="Enterprise AI data platform architecture and analytics intelligence" className="absolute inset-0 h-full w-full object-cover opacity-20 hero-visual-balance" />
                <div className="absolute inset-0 bg-white/82"></div>
                <div className="absolute inset-0 bg-[#E0F7FA]/30"></div>
                <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pt-28 md:pt-16 lg:pt-20 pb-10 md:pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_0.28fr] gap-8 lg:gap-12 items-end">
                        <div>
                            <nav className="flex flex-nowrap items-center gap-x-1 sm:gap-x-2 font-label-caps text-[9.5px] leading-4 sm:text-label-caps uppercase tracking-[0.08em] sm:tracking-widest text-on-surface-variant mb-5 md:mb-6 whitespace-nowrap">
                                <span>Ecosystem</span><span className="material-symbols-outlined text-[14px]">chevron_right</span><span>Technology</span><span className="material-symbols-outlined text-[14px]">chevron_right</span><span className="text-primary">AI Data Platform</span>
                            </nav>
                            <span className="font-label-caps text-[11px] leading-4 sm:text-label-caps text-primary uppercase tracking-wider sm:tracking-widest whitespace-nowrap block mb-5">Enterprise AI Data Platform</span>
                            <h1 className="font-display-lg text-[26px] leading-[34px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-on-surface mb-6 max-w-5xl"><span className="sm:hidden">AI-ready data platforms for<br />enterprise intelligence.</span><span className="hidden sm:inline">AI-Ready Data Platforms for Enterprise Intelligence</span></h1>
                            <p className="font-body-lg text-[16px] leading-[26px] sm:text-body-lg text-on-surface-variant max-w-3xl mb-8">DGL helps organizations design governed data platforms that connect data lakes, warehouses, pipelines, analytics, business intelligence, and machine learning foundations into a reliable enterprise intelligence layer.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#ai-data-platform-capabilities">Explore Capabilities <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                <Link className="inline-flex justify-center items-center gap-2 border border-secondary/30 bg-white text-secondary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-[#E0F7FA]/30 transition-colors" href="#">Talk to Our Team</Link>
                            </div>
                        </div>
                        <div className="rounded-xl border border-outline-variant/35 bg-white/90 p-5 md:p-6 architectural-shadow">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Platform Spine</span>
                            <div className="space-y-3">
                                <div className="grid grid-cols-[auto_1fr] gap-3 items-start"><span className="mt-1 h-3 w-3 rounded-full bg-primary"></span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Ingest</strong> operational, transactional, streaming, and external data sources.</p></div>
                                <div className="grid grid-cols-[auto_1fr] gap-3 items-start"><span className="mt-1 h-3 w-3 rounded-full bg-secondary"></span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Govern</strong> quality, metadata, catalog, lineage, security, and compliance rules.</p></div>
                                <div className="grid grid-cols-[auto_1fr] gap-3 items-start"><span className="mt-1 h-3 w-3 rounded-full bg-primary-fixed-dim"></span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Activate</strong> BI, reporting, self-service analytics, ML features, and AI-ready datasets.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-8 md:py-12">
                <div className="rounded-none md:rounded-xl border-y md:border border-outline-variant/35 bg-white overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
                        <div className="p-4 sm:p-6 md:p-8 bg-[#E0F7FA]/35 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Platform Architecture Overview</span>
                            <h2 className="font-headline-lg text-[25px] leading-[33px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Unify lakes, warehouses, pipelines, and analytics.</span><span className="hidden md:inline">Unify lakes, warehouses, pipelines, and analytics into one governed data foundation.</span></h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-5">The architecture connects ingestion, storage, transformation, semantic models, governance controls, and intelligence delivery so data teams can support reporting and AI use cases from the same trusted foundation.</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white border border-outline-variant/30 rounded-lg p-3"><span className="font-label-caps text-[11px] leading-4 text-primary uppercase block">Batch + Stream</span><span className="font-body-sm text-body-sm text-on-surface-variant">Ingestion</span></div>
                                <div className="bg-white border border-outline-variant/30 rounded-lg p-3"><span className="font-label-caps text-[11px] leading-4 text-primary uppercase block">BI + ML</span><span className="font-body-sm text-body-sm text-on-surface-variant">Activation</span></div>
                            </div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-8">
                            <div className="grid grid-cols-1 xl:grid-cols-[1fr_0.82fr] gap-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="rounded-lg border border-outline-variant/35 p-4 bg-white"><span className="font-label-caps text-label-caps text-primary uppercase">Lakehouse layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Structured, semi-structured, batch, and streaming data organized for analytics and ML consumption.</p></div>
                                    <div className="rounded-lg border border-outline-variant/35 p-4 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">Warehouse layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Curated data marts, reporting models, governed measures, and BI-ready datasets.</p></div>
                                    <div className="rounded-lg border border-outline-variant/35 p-4 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">Pipeline layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Ingestion, transformation, validation, orchestration, and operational monitoring.</p></div>
                                    <div className="rounded-lg border border-outline-variant/35 p-4 bg-white"><span className="font-label-caps text-label-caps text-primary uppercase">Intelligence layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Self-service analytics, operational intelligence, ML features, and AI-ready products.</p></div>
                                </div>
                                <div className="rounded-xl border border-primary/20 bg-[#E0F7FA]/25 p-5 flex flex-col justify-between">
                                    <div>
                                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Control Fabric</span>
                                        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Metadata, lineage, access policy, data contracts, quality scores, and platform ownership stay visible across every layer.</p>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-[auto_1fr] gap-3 items-start"><span className="mt-2 h-2 w-2 rounded-full bg-primary"></span><p className="font-body-sm text-body-sm text-on-surface-variant">Connect catalog records to data owners, certified reporting datasets, feature tables, and downstream AI use cases.</p></div>
                                            <div className="grid grid-cols-[auto_1fr] gap-3 items-start"><span className="mt-2 h-2 w-2 rounded-full bg-secondary"></span><p className="font-body-sm text-body-sm text-on-surface-variant">Surface exceptions, policy conflicts, and quality trends before they affect dashboards, models, or regulatory reports.</p></div>
                                        </div>
                                    </div>
                                    <div className="mt-5 space-y-2">
                                        <div className="flex items-center justify-between border-t border-outline-variant/35 pt-3"><span className="font-label-caps text-[11px] leading-4 text-primary uppercase">Catalog</span><span className="font-body-sm text-body-sm text-on-surface-variant">Searchable assets</span></div>
                                        <div className="flex items-center justify-between border-t border-outline-variant/35 pt-3"><span className="font-label-caps text-[11px] leading-4 text-primary uppercase">Lineage</span><span className="font-body-sm text-body-sm text-on-surface-variant">Traceable use</span></div>
                                        <div className="flex items-center justify-between border-t border-outline-variant/35 pt-3"><span className="font-label-caps text-[11px] leading-4 text-primary uppercase">Policy</span><span className="font-body-sm text-body-sm text-on-surface-variant">Approved access</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="ai-data-platform-capabilities" className="-mx-gutter md:mx-auto max-w-container-max py-8 md:py-12 px-gutter md:px-8 bg-white rounded-none md:rounded-xl border-y md:border border-outline-variant/35">
                <div className="max-w-6xl">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data Engineering &amp; Pipelines</span>
                    <h2 className="font-headline-lg text-[25px] leading-[33px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Build reliable pipelines for analytics and AI.</span><span className="hidden md:inline">Build reliable pipelines for analytics, reporting, and AI workloads.</span></h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl mb-6">Data engineering work defines how information is collected, validated, transformed, monitored, and delivered into trusted platform zones. The pipeline model should make batch processing, streaming data, quality checks, lineage, and published data products visible to engineering, analytics, governance, and AI teams.</p>
                </div>
                <div className="-mx-gutter md:mx-0 rounded-none md:rounded-xl border-y md:border border-outline-variant/35 overflow-hidden bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
                        <div className="p-4 sm:p-5 md:p-6 bg-[#E0F7FA]/30 border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col">
                            <span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Pipeline operating path</span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="rounded-lg bg-white border border-outline-variant/30 p-4"><span className="font-label-caps text-[11px] leading-4 text-secondary uppercase block mb-2">Validate</span><p className="font-body-sm text-body-sm text-on-surface-variant">Quality rules, schema checks, duplicate handling, and exception routing.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/30 p-4"><span className="font-label-caps text-[11px] leading-4 text-secondary uppercase block mb-2">Transform</span><p className="font-body-sm text-body-sm text-on-surface-variant">Reusable logic, curated models, business definitions, and semantic preparation.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/30 p-4"><span className="font-label-caps text-[11px] leading-4 text-secondary uppercase block mb-2">Publish</span><p className="font-body-sm text-body-sm text-on-surface-variant">Certified marts, BI datasets, feature tables, and governed data products.</p></div>
                            </div>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="rounded-lg bg-white border border-outline-variant/30 p-4"><span className="font-label-caps text-[11px] leading-4 text-primary uppercase block mb-2">Control checks</span><p className="font-body-sm text-body-sm text-on-surface-variant">Lineage capture, owner approval, access review, and catalog updates before production release.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/30 p-4"><span className="font-label-caps text-[11px] leading-4 text-primary uppercase block mb-2">Service rhythm</span><p className="font-body-sm text-body-sm text-on-surface-variant">Daily health signals, exception queues, retry handling, and platform-level reliability reporting.</p></div>
                            </div>
                        </div>
                        <div className="p-4 sm:p-5 md:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-3 h-full">
                                <div className="rounded-lg border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Batch</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Scheduled transformations, quality gates, reusable data models, and certified marts.</p></div>
                                <div className="rounded-lg border border-outline-variant/35 p-4 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">Stream</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Real-time signals, event processing, alerts, and operational intelligence.</p></div>
                                <div className="rounded-lg border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Observe</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Pipeline health, lineage, latency, failure patterns, and service-level measures.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data Governance &amp; Quality</span>
                        <h2 className="font-headline-lg text-[25px] leading-[33px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Make trusted data usable across the enterprise.</span><span className="hidden md:inline">Make trusted data usable across the enterprise.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Governance gives data teams a practical operating model for definitions, stewardship, security, privacy, quality, cataloging, and compliance evidence.</p>
                    </div>
                    <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr]">
                            <div className="p-5"><span className="material-symbols-outlined text-primary mb-3">manage_search</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Catalog</span><p className="font-body-sm text-body-sm text-on-surface-variant">Metadata, ownership, lineage, source mapping, and searchable data product inventory.</p></div>
                            <div className="hidden md:block bg-outline-variant/35"></div>
                            <div className="p-5 bg-[#E0F7FA]/25"><span className="material-symbols-outlined text-secondary mb-3">verified</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Quality</span><p className="font-body-sm text-body-sm text-on-surface-variant">Validation rules, profiling, exception workflows, quality scores, and remediation ownership.</p></div>
                            <div className="hidden md:block bg-outline-variant/35"></div>
                            <div className="p-5"><span className="material-symbols-outlined text-primary mb-3">security</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Control</span><p className="font-body-sm text-body-sm text-on-surface-variant">Access policies, sensitive data handling, retention, audit trails, and regulatory evidence.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-8 md:py-12 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-[1.04fr_0.96fr] gap-8 lg:gap-12 items-center">
                    <img src={assetPath("/asset/ecosystem/techology/ai_data_platform/3.png")} alt="Enterprise analytics platform and AI readiness dashboards" className="w-full h-[300px] md:h-[390px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Analytics Platforms &amp; Intelligence</span>
                        <h2 className="font-headline-lg text-[25px] leading-[33px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Deliver BI, reporting, and operational intelligence.</span><span className="hidden md:inline">Deliver BI, reporting, and operational intelligence from governed data products.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-5">Analytics platforms help business teams move from disconnected reports to trusted dashboards, self-service analysis, semantic models, and decision-ready operational signals.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Enterprise reporting</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Common metrics, certified datasets, executive packs, and regulatory reporting outputs.</p></div>
                            <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Self-service analytics</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Reusable models, access controls, training, and governed exploration for analytics teams.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-8 md:py-12">
                <div className="rounded-none md:rounded-xl border-y md:border border-outline-variant/35 bg-white overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr]">
                        <div className="p-4 sm:p-6 md:p-8 bg-white border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">AI Readiness &amp; ML Enablement</span>
                            <h2 className="font-headline-lg text-[25px] leading-[33px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Prepare governed data for machine learning.</span><span className="hidden md:inline">Prepare governed data foundations for machine learning and AI products.</span></h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">AI readiness depends on governed access, reliable features, training datasets, lineage, quality controls, and model-ready operational signals.</p>
                        </div>
                        <div className="p-4 sm:p-5 md:p-8 bg-[#E0F7FA]/20">
                            <div className="space-y-4">
                                <div className="grid grid-cols-[auto_1fr] gap-4 items-start rounded-lg bg-white border border-outline-variant/35 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-on-primary font-label-caps text-label-caps">01</span><div><span className="font-label-caps text-label-caps text-primary uppercase">Feature foundations</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Reusable feature datasets, transformation logic, documentation, validation checks, and ownership.</p></div></div>
                                <div className="grid grid-cols-[auto_1fr] gap-4 items-start rounded-lg bg-white border border-outline-variant/35 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white font-label-caps text-label-caps">02</span><div><span className="font-label-caps text-label-caps text-primary uppercase">Model data controls</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Training data lineage, privacy controls, bias checks, approval evidence, and retention policy.</p></div></div>
                                <div className="grid grid-cols-[auto_1fr] gap-4 items-start rounded-lg bg-white border border-outline-variant/35 p-4"><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-on-primary font-label-caps text-label-caps">03</span><div><span className="font-label-caps text-label-caps text-primary uppercase">AI product handoff</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Data contracts, monitoring signals, drift indicators, feedback loops, and responsible-use alignment.</p></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="-mx-gutter md:mx-auto max-w-container-max py-8 md:py-12 px-gutter md:px-8 bg-white rounded-none md:rounded-xl border-y md:border border-outline-variant/35">
                <div className="grid grid-cols-1 lg:grid-cols-[0.68fr_1.32fr] gap-8 lg:gap-12 items-start">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Platform Modernization Roadmap</span>
                        <h2 className="font-headline-lg text-[25px] leading-[33px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Modernize data platforms in controlled releases.</span><span className="hidden md:inline">Modernize data platforms through controlled platform releases.</span></h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">Each release should improve a working data capability, not only produce architecture documents.</p>
                    </div>
                    <div className="rounded-xl border border-outline-variant/35 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-[0.22fr_1fr]">
                            <div className="bg-[#E0F7FA]/35 p-5 flex md:flex-col gap-3 md:gap-5 justify-between"><span className="font-label-caps text-label-caps text-primary uppercase">Release 01</span><span className="font-label-caps text-label-caps text-secondary uppercase">Discover</span></div>
                            <div className="p-5 bg-white"><span className="font-label-caps text-label-caps text-primary uppercase">Source and risk baseline</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Assess systems, data quality, reporting pain, AI needs, control gaps, and governance maturity.</p></div>
                            <div className="bg-white p-5 flex md:flex-col gap-3 md:gap-5 justify-between border-t border-outline-variant/30"><span className="font-label-caps text-label-caps text-primary uppercase">Release 02</span><span className="font-label-caps text-label-caps text-secondary uppercase">Design</span></div>
                            <div className="p-5 bg-[#E0F7FA]/20 border-t border-outline-variant/30"><span className="font-label-caps text-label-caps text-primary uppercase">Target platform zones</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Define lakehouse, warehouse, data product, security, catalog, and operating ownership patterns.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto py-8 md:py-12">
                <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/25 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr]">
                        <div className="p-6 md:p-8 lg:p-10">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Business Outcomes &amp; Platform Impact</span>
                            <h2 className="font-headline-lg text-[24px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Measure trusted intelligence<br />and AI readiness.</span><span className="hidden md:inline">Measure data platform value through trusted intelligence and AI readiness.</span></h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Platform value shows up when executives trust metrics, engineers reuse data products, and AI teams can work from governed datasets.</p>
                        </div>
                        <div className="bg-white p-5 md:p-8">
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-[0.28fr_1fr] gap-3 sm:gap-5 items-start border-b border-outline-variant/30 pb-4"><span className="font-label-caps text-label-caps text-primary uppercase">Decision Confidence</span><p className="font-body-sm text-body-sm text-on-surface-variant">Certified metrics, trusted dashboards, consistent reporting, executive visibility, and fewer reconciliation debates.</p></div>
                                <div className="grid grid-cols-1 sm:grid-cols-[0.28fr_1fr] gap-3 sm:gap-5 items-start border-b border-outline-variant/30 pb-4"><span className="font-label-caps text-label-caps text-primary uppercase">Engineering Efficiency</span><p className="font-body-sm text-body-sm text-on-surface-variant">Reusable pipelines, standard transformations, data product contracts, metadata coverage, and faster release cycles.</p></div>
                                <div className="grid grid-cols-1 sm:grid-cols-[0.28fr_1fr] gap-3 sm:gap-5 items-start"><span className="font-label-caps text-label-caps text-primary uppercase">Governed AI Readiness</span><p className="font-body-sm text-body-sm text-on-surface-variant">Model-ready datasets, feature foundations, lineage evidence, access controls, and monitored operational signals.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-container-max mx-auto pt-6 pb-14">
                <div className="rounded-xl border border-outline-variant/35 bg-white overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.56fr_0.44fr]">
                        <div className="p-6 md:p-8 lg:p-10">
                            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">AI Data Platform Readiness</span>
                            <h2 className="font-headline-lg text-[24px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4"><span className="md:hidden">Start with the data gap<br />blocking trusted intelligence.</span><span className="hidden md:inline">Start with the platform gap blocking trusted intelligence.</span></h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-6">DGL can help assess data architecture, pipeline health, governance maturity, BI reliability, AI readiness, metadata coverage, and data product operating models.</p>
                            <Link className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Talk to Our Team <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                        </div>
                        <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/30 border-t lg:border-t-0 lg:border-l border-outline-variant/30">
                            <div className="space-y-3">
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Assess</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Sources, pipelines, quality, reporting, governance, and AI use cases.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Prioritize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Platform gaps, data products, controls, and first-value analytics releases.</p></div>
                                <div className="rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Mobilize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Architecture, engineering backlog, governance ownership, adoption measures, and release cadence.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
