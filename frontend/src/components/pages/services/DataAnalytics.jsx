"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function DataAnalytics() {
  return (
    <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="max-w-container-max mx-auto pt-8 md:pt-10 pb-12 md:pb-14">
                          <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 shadow-sm">
                              <img src={assetPath("/asset/technology/data_analytics/3.png")} alt="Enterprise analytics strategy workspace" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: '72% center' }} />
                              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/94 to-white/38"></div>
                              <div className="absolute inset-0 bg-[#E0F7FA]/25"></div>
                              <div className="relative min-h-[430px] md:min-h-[520px] flex items-start px-6 pt-8 pb-10 md:px-10 md:pt-12 lg:px-14 lg:pt-14">
                                  <div className="max-w-[780px]">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4 font-bold">Technology / Data &amp; Analytics</span>
                                      <h1 className="font-display-lg text-[34px] leading-[42px] md:text-[46px] md:leading-[54px] xl:text-[52px] xl:leading-[60px] text-[#111827] font-extrabold mb-5">Turn enterprise data into trusted decisions.</h1>
                                      <p className="font-body-lg text-body-lg text-[#253044] font-medium leading-relaxed max-w-2xl mb-4">DGL helps organizations modernize data foundations, improve reporting confidence, and create analytics platforms that leaders and operational teams can rely on every day. We bring strategy, engineering, governance, and business intelligence into one delivery path so data is easier to access, explain, and act on. The result is clearer performance visibility, stronger decision routines, and analytics capabilities that keep pace with enterprise change.</p>
                                      <div className="flex flex-col sm:flex-row gap-3 mt-10">
                                          <Link className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-sm" href="#">Explore Analytics Services</Link>
                                          <Link className="inline-flex items-center justify-center gap-2 bg-white/90 border border-primary/35 text-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors shadow-sm" href="#">Discuss Data Strategy</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto pt-4 pb-10 md:pb-12 border-b border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.74fr_1.26fr] gap-6 items-stretch">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data Operating Model</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A practical structure for data ownership, delivery, and use.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We connect business priorities with data products, platform teams, governance roles, and measurement routines so analytics becomes part of how work is managed.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">route</span><h3 className="font-headline-sm text-headline-sm mb-2">Strategy roadmap</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Prioritized data initiatives tied to business outcomes, risks, and delivery capacity.</p><p className="mt-4 pt-3 border-t border-outline-variant/25 font-body-sm text-body-sm text-on-surface-variant">Adds clear backlog, phasing logic, and outcome measures.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">database</span><h3 className="font-headline-sm text-headline-sm mb-2">Data platform</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Cloud platforms align data stores, marts, pipelines, and integration patterns.</p><p className="mt-4 pt-3 border-t border-outline-variant/25 font-body-sm text-body-sm text-on-surface-variant">Supports reusable layers, refresh rules, and access paths.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">verified</span><h3 className="font-headline-sm text-headline-sm mb-2">Task control</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Clear ownership, data checks, metric definitions, lineage, and access controls.</p><p className="mt-4 pt-3 border-t border-outline-variant/25 font-body-sm text-body-sm text-on-surface-variant">Creates stewardship rhythm, issue review, and audit visibility.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Business Intelligence</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Reporting that moves from static views to decision support.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">We design BI environments around the questions teams need to answer: performance, demand, risk, service levels, customer behavior, finance, and operational throughput.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <div className="border border-outline-variant/30 rounded-lg p-4 bg-white"><span className="font-label-caps text-label-caps text-secondary uppercase">Executive scorecards</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Board-level indicators with accountable definitions and refresh cycles.</p></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-secondary uppercase">Operational dashboards</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Role-based views for service, finance, workforce, and delivery teams.</p></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/technology/data_analytics/2.png")} alt="Business intelligence dashboard review" className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.84fr_1.16fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data Modernization</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Modernize the data estate without losing operational continuity.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We help teams move from fragmented reporting and manual extracts to governed pipelines, reusable data products, and analytics environments that can scale.</p>
                              </div>
                              <div className="bg-white/90 border border-outline-variant/35 rounded-xl p-4 md:p-5 shadow-sm">
                                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                      <div className="border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block mb-2">01</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Discover</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Map systems, reports, data owners, pain points, and demand.</p></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4 bg-[#E0F7FA]/30"><strong className="text-primary text-xl block mb-2">02</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Model</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Define common entities, metrics, and reusable data layers.</p></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block mb-2">03</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Engineer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Build pipelines, quality rules, access patterns, and automation.</p></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4 bg-[#E0F7FA]/30"><strong className="text-primary text-xl block mb-2">04</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Adopt</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Embed reporting routines, training, stewardship, and review cadence.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-7 items-stretch">
                              <img src={assetPath("/asset/technology/data_analytics/1.png")} alt="Data engineering and analytics platform operations" className="w-full h-64 md:h-72 lg:h-full min-h-[300px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="sm:col-span-2 bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-sm"><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Analytics Platform Services</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Build the data products teams actually reuse.</h2><p className="font-body-md text-body-md text-on-surface-variant">Our delivery approach covers source integration, transformation logic, semantic layers, warehouse design, visualization, and support models.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Data engineering</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Reliable ingestion, transformation, orchestration, and exception handling.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Warehouse design</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Structured analytics layers for finance, operations, customer, and service data.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Self-service enablement</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Reusable datasets, dashboard standards, training, and controlled exploration.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Performance insight</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Metrics that connect activity, cost, quality, demand, and outcomes.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Governance Framework</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Make trust visible in every report and data product.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Governance works best when it is practical: clear data definitions, known owners, quality thresholds, access rules, and decision forums that fit the pace of delivery.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Definitions</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Shared metric catalogues, business glossaries, and approved calculation logic.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Quality</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Completeness, timeliness, accuracy, duplication, and exception monitoring.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Access</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Role-based permissions, sensitive data handling, and secure sharing models.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Stewardship</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Named owners, review cycles, issue resolution, and change control.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="bg-white border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm">
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                                  <div className="md:col-span-1"><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Decision Intelligence</span><h2 className="font-headline-sm text-headline-sm text-on-surface">From insight to action.</h2></div>
                                  <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-2xl block mb-2">1</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Signal</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Spot demand, variance, risk, and emerging performance patterns.</p></div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-2xl block mb-2">2</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Explain</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Connect measures to drivers, root causes, and operational context.</p></div>
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-2xl block mb-2">3</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Act</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Trigger reviews, interventions, planning choices, and service improvements.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto pt-8 pb-20">
                          <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl px-6 py-7 md:px-8 md:py-8">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-7 items-start">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Data Modernization Roadmap</span>
                                      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Create a focused path from reporting pressure to measurable insight.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Assess the current estate, identify the decisions that matter most, and sequence the work into releases that improve trust, speed, and adoption.</p>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3">
                                      <div className="bg-white/90 border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Assess</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Review reporting demand, platform readiness, data quality, and governance gaps.</p></div>
                                      <div className="bg-white/90 border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Sequence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Group quick wins, foundation work, and strategic analytics use cases.</p></div>
                                      <div className="bg-white border border-secondary/35 rounded-lg p-4 md:w-[240px] flex flex-col justify-between min-h-[142px]"><span className="font-label-caps text-label-caps text-secondary uppercase">Next Step</span><div className="mt-5 space-y-3"><Link className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white rounded-lg px-4 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/90 transition-colors" href="#">View Approach</Link><Link className="inline-flex items-center justify-center gap-2 w-full bg-[#E0F7FA]/30 border border-secondary/30 text-secondary rounded-lg px-4 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors" href="#">Discuss Strategy</Link></div></div>
                                  </div>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
