"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function EnterpriseApplications() {
  return (
    <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="max-w-container-max mx-auto pb-14 md:pb-20 pt-8 md:pt-10">
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                              <div className="lg:col-span-7 flex flex-col justify-center">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">Technology / Enterprise Applications</span>
                                  <h1 className="font-display-lg text-display-lg text-on-surface mb-6">Modern enterprise applications for connected operations.</h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-8">DGL helps organizations modernize ERP, CRM, Microsoft Dynamics, SAP, and Oracle environments with stronger process control, cleaner data, and automation-led efficiency.</p>
                                  <div className="flex flex-col sm:flex-row gap-4">
                                      <Link className="inline-flex justify-center items-center gap-2 bg-[#E0F7FA]/30 text-secondary border border-secondary/25 px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors" href="#">Plan Application Roadmap <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex justify-center items-center gap-2 border border-outline-variant text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest" href="#">Assess Platform Fit</Link>
                                  </div>
                              </div>
                              <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant/40 rounded-xl architectural-shadow overflow-hidden">
                                  <img src={assetPath("/asset/technology/enterprise/1.png")} alt="Enterprise application planning workspace" className="w-full h-48 md:h-56 object-cover object-center block" />
                                  <div className="p-6 md:p-7">
                                      <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4">Application Modernization Model</p>
                                      <div className="grid grid-cols-3 gap-4 mb-5">
                                          <div><div className="text-2xl font-bold text-primary">5</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Platforms</p></div>
                                          <div><div className="text-2xl font-bold text-primary">360</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Visibility</p></div>
                                          <div><div className="text-2xl font-bold text-primary">ROI</div><p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Roadmap</p></div>
                                      </div>
                                      <div className="space-y-3">
                                          <div className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary text-[18px]">task_alt</span><p className="font-body-sm text-body-sm text-on-surface-variant">Process decisions made before configuration</p></div>
                                          <div className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary text-[18px]">task_alt</span><p className="font-body-sm text-body-sm text-on-surface-variant">Integration and data quality treated as delivery workstreams</p></div>
                                          <div className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary text-[18px]">task_alt</span><p className="font-body-sm text-body-sm text-on-surface-variant">Adoption, reporting, and controls tracked from the start</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.78fr_1.22fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise Applications Overview</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A connected application estate, not isolated software projects.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We organize enterprise application programs around the way work actually moves: transaction capture, workflow, controls, reporting, and continuous improvement.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6 shadow-sm">
                                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">01 Map</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Process and data ownership.</p></div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">02 Fit</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Platform capability and gaps.</p></div>
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">03 Build</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Configuration and workflows.</p></div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">04 Link</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Integration and reporting.</p></div>
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">05 Run</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Adoption and optimization.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 px-2 md:px-4">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-7 items-center">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-sm">
                                  <div className="flex items-center justify-between gap-4 mb-4"><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">ERP</span><span className="material-symbols-outlined text-secondary">inventory_2</span></div>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Stabilize the operational backbone.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">ERP programs align finance, procurement, inventory, supply chain, and project operations around reliable master data and controlled transaction flows.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Finance</span></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-secondary uppercase">Procurement</span></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Supply Chain</span></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/technology/enterprise/2.png")} alt="ERP operations and enterprise workflow dashboard" className="w-full h-52 md:h-60 object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 border-y border-outline-variant/25">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 items-stretch">
                              <div className="order-2 lg:order-1">
                                  <img src={assetPath("/asset/technology/enterprise/3.png")} alt="CRM customer operations and analytics" className="w-full h-64 md:h-72 lg:h-[350px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                              </div>
                              <div className="order-1 lg:order-2 flex flex-col justify-center">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">CRM</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Turn customer activity into visible, governed workflows.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">DGL configures CRM platforms to improve sales productivity, customer engagement, pipeline visibility, and service management across the organization.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Pipeline Visibility</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Lead, opportunity, forecast, and account movement.</p></div>
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Service Operations</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Case handling, response quality, and customer history.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Microsoft Dynamics</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Extend D365 with workflows users can actually adopt.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Our Dynamics work combines module fit, Power Platform automation, reporting, security roles, and release governance across Microsoft environments.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">dashboard_customize</span><h3 className="font-headline-sm text-headline-sm mb-2">D365 fit</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Capability mapping and solution design.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">automation</span><h3 className="font-headline-sm text-headline-sm mb-2">Power Platform</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Low-code apps, approvals, and extensions.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">monitoring</span><h3 className="font-headline-sm text-headline-sm mb-2">Reporting</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Dashboards tied to operational activity.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-7 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">SAP</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Move SAP programs with process discipline and data confidence.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">SAP transformation requires more than configuration. We support fit-to-standard decisions, master data preparation, integration testing, cutover planning, and user readiness.</p>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block">S/4</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Readiness</span></div>
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block">MDM</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Data</span></div>
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block">UAT</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Testing</span></div>
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block">RUN</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Support</span></div>
                                  </div>
                              </div>
                              <div className="bg-white/80 border border-outline-variant/35 rounded-xl p-5">
                                  <h3 className="font-headline-sm text-headline-sm mb-3">SAP delivery focus</h3>
                                  <div className="space-y-3">
                                      <div className="flex gap-3"><span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span><p className="font-body-sm text-body-sm text-on-surface-variant">Governed process decisions</p></div>
                                      <div className="flex gap-3"><span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span><p className="font-body-sm text-body-sm text-on-surface-variant">Clean interfaces and reconciliation</p></div>
                                      <div className="flex gap-3"><span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span><p className="font-body-sm text-body-sm text-on-surface-variant">Controlled rollout evidence</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-7 items-center">
                              <img src={assetPath("/asset/technology/enterprise/4.png")} alt="Oracle enterprise application analytics" className="w-full h-52 md:h-60 object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Oracle</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Governed performance across cloud enterprise applications.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">Oracle Cloud and enterprise application services support finance, procurement, human capital, analytics, and integration-led modernization with stronger reporting discipline.</p>
                                  <div className="flex flex-wrap gap-2 font-label-caps text-label-caps text-secondary uppercase"><span className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-full px-4 py-2">Cloud apps</span><span className="bg-white border border-outline-variant/30 rounded-full px-4 py-2">HCM and finance</span><span className="bg-white border border-outline-variant/30 rounded-full px-4 py-2">Governed reporting</span></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-7 items-stretch">
                              <div className="bg-white/70 border border-outline-variant/35 rounded-xl p-5 md:p-6 flex flex-col justify-center">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Enterprise Integration Benefits</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Connect applications without creating operational drag.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">Integration should simplify the operating model, not add another layer of manual reconciliation. DGL designs the connections, controls, and reporting rhythm around real business transactions.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="flex flex-col gap-2 rounded-lg border border-outline-variant/30 bg-white/80 p-4"><span className="material-symbols-outlined text-secondary">sync_alt</span><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Application to application</span></div>
                                      <div className="flex flex-col gap-2 rounded-lg border border-outline-variant/30 bg-white/80 p-4"><span className="material-symbols-outlined text-secondary">rule_settings</span><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Workflow to control</span></div>
                                      <div className="flex flex-col gap-2 rounded-lg border border-outline-variant/30 bg-white/80 p-4"><span className="material-symbols-outlined text-secondary">analytics</span><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Data to decisions</span></div>
                                  </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5 min-h-[155px] flex flex-col justify-center"><h3 className="font-headline-sm text-headline-sm mb-2">Cleaner data flow</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Shared customer, finance, product, and supplier data across core systems.</p></div>
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5 min-h-[155px] flex flex-col justify-center"><h3 className="font-headline-sm text-headline-sm mb-2">Less manual work</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Automation for approvals, notifications, reconciliation, and exception handling.</p></div>
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5 min-h-[155px] flex flex-col justify-center"><h3 className="font-headline-sm text-headline-sm mb-2">Reliable controls</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Role-based access, audit trails, segregation checks, and policy workflows.</p></div>
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5 min-h-[155px] flex flex-col justify-center"><h3 className="font-headline-sm text-headline-sm mb-2">Actionable reporting</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Operational dashboards that reflect trusted source-system activity.</p></div>
                              </div>
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
