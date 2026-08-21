"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function EnterpriseSystems() {
  return (
    <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-24 md:-mt-8 min-h-[620px] lg:min-h-[660px] flex items-center pt-24 md:pt-20 pb-12 overflow-hidden bg-white -mx-gutter">
                          <div className="absolute inset-0 z-0">
                              <img src={assetPath("/asset/insight/enterprise_system/1.png")} alt="Enterprise systems architecture and digital operations platform" className="w-full h-full object-cover object-center opacity-85 blur-[2px] md:blur-[1px] scale-[1.01]" />
                              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/78 to-white/24"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/76 via-transparent to-white/16"></div>
                              <div className="absolute left-0 top-0 h-full w-2/3 bg-[#E0F7FA]/40 blur-3xl opacity-90"></div>
                          </div>
                          <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                              <div className="max-w-3xl">
                                  <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5">
                                      <span>Insights</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-on-surface sm:text-primary">Enterprise Systems</span>
                                  </nav>
                                  <span className="inline-block bg-[#E0F7FA]/60 border border-secondary/20 text-secondary font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">Enterprise Architecture Modernization</span>
                                  <h1 className="font-display-lg text-[31px] leading-[39px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-on-surface mb-6">Enterprise Systems for Scalable Digital Operations</h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">DGL helps organizations modernize enterprise architecture, scalable system infrastructure, secure cloud platforms, integrated digital operations, and high-performance business ecosystems.</p>
                                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 sm:px-7 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Explore Enterprise Systems <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white/85 border border-primary/35 text-primary px-5 sm:px-7 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#E0F7FA]/30 transition-all" href="#">Discuss System Strategy <span className="material-symbols-outlined text-[18px]">support_agent</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white overflow-hidden">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.30fr_0.70fr]">
                                  <div className="p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise Systems Thesis</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface">Systems strategy is operating strategy.</h2>
                                  </div>
                                  <div className="p-4 md:p-5 lg:p-6">
                                      <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 rounded-xl overflow-hidden border border-outline-variant/30">
                                          <div className="p-5 bg-[#E0F7FA]/35"><span className="material-symbols-outlined text-primary mb-3">account_tree</span><span className="font-label-caps text-label-caps text-primary uppercase block">Architecture</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Business capability map and technical decision rights.</p></div>
                                          <div className="p-5 bg-white"><span className="material-symbols-outlined text-secondary mb-3">cloud_queue</span><span className="font-label-caps text-label-caps text-primary uppercase block">Infrastructure</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Cloud, resilience, integration, and release foundations.</p></div>
                                          <div className="p-5 bg-[#E0F7FA]/20"><span className="material-symbols-outlined text-primary mb-3">schema</span><span className="font-label-caps text-label-caps text-primary uppercase block">Applications</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">ERP, CRM, and internal platforms aligned to work.</p></div>
                                          <div className="p-5 bg-white"><span className="material-symbols-outlined text-secondary mb-3">automation</span><span className="font-label-caps text-label-caps text-primary uppercase block">Automation</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">AI-supported workflows, approvals, and exceptions.</p></div>
                                          <div className="p-5 bg-[#E0F7FA]/35"><span className="material-symbols-outlined text-primary mb-3">query_stats</span><span className="font-label-caps text-label-caps text-primary uppercase block">Decisions</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Trusted data products and performance intelligence.</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-12 items-start">
                              <div className="xl:sticky xl:top-28">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Introduction to Enterprise Architecture</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Create a blueprint that leaders can use, not just architects.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">A practical architecture links business capabilities, process ownership, data standards, applications, controls, and cloud choices so modernization has a shared language.</p>
                              </div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-surface-container-lowest p-4 md:p-5">
                                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Business layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Capabilities, value streams, roles, policies, and service measures.</p></div>
                                      <div className="hidden md:grid place-items-center px-2"><span className="material-symbols-outlined text-primary">sync_alt</span></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Technology layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Platforms, integrations, data domains, security, and environments.</p></div>
                                  </div>
                                  <div className="mt-4 rounded-xl bg-[#E0F7FA]/40 border border-secondary/20 p-5">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase">Architecture output</span>
                                      <p className="font-body-md text-body-md text-on-surface-variant mt-3">A sequenced enterprise roadmap showing what to standardize, what to retire, what to integrate, and what must remain locally flexible.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white p-6 md:p-8 lg:p-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-10 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Digital Core Systems Transformation</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Stabilize the core before scaling the edge.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Modern enterprise systems begin with reliable masters, process ownership, service controls, and clear integration boundaries.</p>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.25fr_1fr] gap-4 items-center">
                                      <div className="space-y-4">
                                          <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Finance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Close, controls, procurement, and planning.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 bg-white p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Customer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Sales, service, account, and experience data.</p></div>
                                      </div>
                                      <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-white via-[#F7FCFD] to-[#E0F7FA]/70 text-on-surface p-6 md:p-7 text-center shadow-sm">
                                          <span className="material-symbols-outlined text-primary text-[38px] mb-3">database</span>
                                          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block">Digital Core</span>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Shared data, workflows, and controls that every platform can trust.</p>
                                      </div>
                                      <div className="space-y-4">
                                          <div className="rounded-xl border border-outline-variant/35 bg-white p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Workforce</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">HR, talent, learning, access, and productivity.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Operations</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Supply, assets, field, delivery, and service quality.</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8 items-stretch">
                              <div className="relative min-h-[320px] md:min-h-[430px] rounded-2xl overflow-hidden border border-outline-variant/35">
                                  <img src={assetPath("/asset/insight/enterprise_system/2.png")} alt="Cloud native enterprise infrastructure and platform modernization" className="absolute inset-0 h-full w-full object-cover object-center" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/28 to-transparent"></div>
                                  <div className="absolute left-5 right-5 bottom-5 rounded-xl border border-white/70 bg-white/90 p-5 shadow-sm">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Cloud-native infrastructure</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Resilient platforms, governed environments, integration patterns, and release pathways that can scale globally.</p>
                                  </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="rounded-2xl border border-outline-variant/35 bg-white p-5 md:p-6"><span className="material-symbols-outlined text-secondary mb-4">deployed_code</span><h3 className="font-headline-sm text-headline-sm mb-2">Platform landing zones</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Secure cloud foundations with identity, network, observability, and cost controls.</p></div>
                                  <div className="rounded-2xl border border-outline-variant/35 bg-[#E0F7FA]/35 p-5 md:p-6"><span className="material-symbols-outlined text-primary mb-4">settings_ethernet</span><h3 className="font-headline-sm text-headline-sm mb-2">Integration fabric</h3><p className="font-body-sm text-body-sm text-on-surface-variant">APIs, events, queues, and data exchange that reduce hidden dependencies.</p></div>
                                  <div className="rounded-2xl border border-outline-variant/35 bg-[#E0F7FA]/35 p-5 md:p-6"><span className="material-symbols-outlined text-primary mb-4">speed</span><h3 className="font-headline-sm text-headline-sm mb-2">Release velocity</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Environment strategy, testing automation, and change windows that support reliable iteration.</p></div>
                                  <div className="rounded-2xl border border-outline-variant/35 bg-white p-5 md:p-6"><span className="material-symbols-outlined text-secondary mb-4">verified_user</span><h3 className="font-headline-sm text-headline-sm mb-2">Operational resilience</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Backup, recovery, monitoring, incident controls, and continuity ownership.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.35fr_0.65fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">AI-Driven Enterprise Automation</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Turn automation into governed operating capacity.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">AI belongs inside defined work patterns: triage, recommendations, summaries, approvals, controls, and exception routing.</p>
                              </div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-surface-container-lowest p-4 md:p-5">
                                  <div className="space-y-3">
                                      <div className="grid grid-cols-1 md:grid-cols-[150px_1fr_auto] gap-3 rounded-xl bg-white border border-outline-variant/35 p-4 md:items-center"><span className="font-label-caps text-label-caps text-primary uppercase">Sense</span><p className="font-body-sm text-body-sm text-on-surface-variant">Capture triggers from cases, orders, tickets, documents, emails, and telemetry.</p><span className="rounded-full bg-[#E0F7FA] px-3 py-1 font-label-caps text-[10px] text-secondary uppercase w-fit">Input</span></div>
                                      <div className="grid grid-cols-1 md:grid-cols-[150px_1fr_auto] gap-3 rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-4 md:items-center"><span className="font-label-caps text-label-caps text-primary uppercase">Reason</span><p className="font-body-sm text-body-sm text-on-surface-variant">Use AI and business rules to suggest priority, owner, next action, and risk level.</p><span className="rounded-full bg-white px-3 py-1 font-label-caps text-[10px] text-secondary uppercase w-fit">Decision</span></div>
                                      <div className="grid grid-cols-1 md:grid-cols-[150px_1fr_auto] gap-3 rounded-xl bg-white border border-outline-variant/35 p-4 md:items-center"><span className="font-label-caps text-label-caps text-primary uppercase">Act</span><p className="font-body-sm text-body-sm text-on-surface-variant">Route work, create tasks, draft responses, request approvals, and update records.</p><span className="rounded-full bg-[#E0F7FA] px-3 py-1 font-label-caps text-[10px] text-secondary uppercase w-fit">Flow</span></div>
                                      <div className="grid grid-cols-1 md:grid-cols-[150px_1fr_auto] gap-3 rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-4 md:items-center"><span className="font-label-caps text-label-caps text-primary uppercase">Assure</span><p className="font-body-sm text-body-sm text-on-surface-variant">Log evidence, maintain human review, measure outcomes, and tune the automation model.</p><span className="rounded-full bg-white px-3 py-1 font-label-caps text-[10px] text-secondary uppercase w-fit">Control</span></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white overflow-hidden">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
                                  <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/35">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">ERP / CRM / Internal Systems Modernization</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Modernize around work, not software labels.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Platform change succeeds when process evidence, role design, data ownership, controls, and adoption are designed together.</p>
                                  </div>
                                  <div className="overflow-x-auto">
                                      <table className="w-full min-w-[680px] border-collapse">
                                          <thead><tr className="bg-white"><th className="p-4 text-left font-label-caps text-label-caps text-primary uppercase border-b border-outline-variant/30">System area</th><th className="p-4 text-left font-label-caps text-label-caps text-primary uppercase border-b border-outline-variant/30">Modernization focus</th><th className="p-4 text-left font-label-caps text-label-caps text-primary uppercase border-b border-outline-variant/30">Enterprise outcome</th></tr></thead>
                                          <tbody>
                                              <tr><td className="p-4 font-body-sm text-body-sm text-on-surface border-b border-outline-variant/20">ERP</td><td className="p-4 font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/20">Finance, procurement, assets, project controls, and reporting standards.</td><td className="p-4 font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/20">Cleaner controls, faster close, better cost visibility.</td></tr>
                                              <tr className="bg-[#E0F7FA]/20"><td className="p-4 font-body-sm text-body-sm text-on-surface border-b border-outline-variant/20">CRM</td><td className="p-4 font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/20">Customer journeys, service cases, account intelligence, and channel orchestration.</td><td className="p-4 font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/20">Higher service consistency and revenue visibility.</td></tr>
                                              <tr><td className="p-4 font-body-sm text-body-sm text-on-surface border-b border-outline-variant/20">Internal systems</td><td className="p-4 font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/20">HR, knowledge, collaboration, workflow, and employee service operations.</td><td className="p-4 font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/20">Less manual effort and better employee experience.</td></tr>
                                              <tr className="bg-[#E0F7FA]/20"><td className="p-4 font-body-sm text-body-sm text-on-surface">Shared services</td><td className="p-4 font-body-sm text-body-sm text-on-surface-variant">Intake, approvals, SLA tracking, controls, and continuous improvement.</td><td className="p-4 font-body-sm text-body-sm text-on-surface-variant">Scalable support model with measurable service quality.</td></tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="max-w-3xl mb-8">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data Integration & System Interoperability</span>
                              <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Make data move with meaning.</h2>
                              <p className="font-body-md text-body-md text-on-surface-variant">Integration is not just connectivity. It requires shared definitions, ownership, quality rules, and controlled movement across the enterprise.</p>
                          </div>
                          <div className="rounded-2xl border border-outline-variant/35 bg-surface-container-lowest p-5 md:p-6">
                              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Source systems</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">ERP, CRM, service, finance, product, operations, and workforce platforms.</p></div>
                                  <div className="hidden md:grid place-items-center"><span className="material-symbols-outlined text-secondary">arrow_forward</span></div>
                                  <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Integration layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">APIs, event streams, transformation rules, master data, and lineage.</p></div>
                                  <div className="hidden md:grid place-items-center"><span className="material-symbols-outlined text-secondary">arrow_forward</span></div>
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Decision products</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Dashboards, analytics, automation signals, forecasts, and operational alerts.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.40fr_0.60fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Cybersecurity & Enterprise Risk Systems</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Build security into the operating system of change.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Enterprise platforms must protect identities, workflows, data movement, vendors, and automation decisions without slowing every team to a halt.</p>
                                                          <div className="mt-6 grid grid-cols-1 gap-3">
                                      <div className="rounded-xl border border-outline-variant/35 bg-white p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Access enforcement</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Identity-based controls keep critical platforms aligned to role, risk, and approval rules.</p></div>
                                      <div className="rounded-xl border border-secondary/20 bg-[#E0F7FA]/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Risk visibility</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Continuous monitoring highlights exposure across APIs, integrations, vendors, and data flows.</p></div>
                                  </div>
                              </div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-white p-5 md:p-6">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary mb-4">badge</span><span className="font-label-caps text-label-caps text-primary uppercase block">Identity control</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Role design, privileged access, joiner-mover-leaver processes, and review cadence.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-secondary mb-4">encrypted</span><span className="font-label-caps text-label-caps text-primary uppercase block">Data protection</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Classification, encryption, retention, data sharing, and audit evidence.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-secondary mb-4">handshake</span><span className="font-label-caps text-label-caps text-primary uppercase block">Third-party assurance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Vendor dependencies, compliance evidence, contract controls, and service resilience.</p></div>
                                      <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary mb-4">warning</span><span className="font-label-caps text-label-caps text-primary uppercase block">Risk signals</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Exceptions, incidents, vulnerabilities, control gaps, and remediation ownership.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white overflow-hidden">
                              <div className="grid grid-cols-1 xl:grid-cols-[0.55fr_0.45fr]">
                                  <div className="p-6 md:p-8 lg:p-10">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Workflow Orchestration & Process Intelligence</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Move work through the enterprise with context.</h2>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                          <div className="rounded-xl border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Orchestrate</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Connect tasks, owners, approvals, handoffs, SLAs, and escalations.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 p-5 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-primary uppercase">Observe</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Monitor bottlenecks, rework, cycle time, exceptions, and quality signals.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 p-5 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-primary uppercase">Improve</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Use process evidence to redesign rules, roles, automation, and systems.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Assure</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Keep controls, audit trails, and accountability visible at every stage.</p></div>
                                      </div>
                                  </div>
                                  <div className="relative min-h-[320px] bg-[#E0F7FA]/35">
                                      <img src={assetPath("/asset/insight/enterprise_system/3.png")} alt="Enterprise workflow orchestration and process intelligence" className="absolute inset-0 h-full w-full object-cover object-center opacity-88" />
                                      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/34 to-white/5"></div>
                                      <div className="absolute left-5 right-5 bottom-5 rounded-xl bg-white/90 border border-white/70 p-4 shadow-sm">
                                          <span className="font-label-caps text-label-caps text-primary uppercase">Process intelligence</span>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">A live view of where enterprise work is moving, waiting, failing, or ready to automate.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="max-w-3xl mb-8">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise Transformation Impact</span>
                              <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Measure modernization by operating change, not go-live noise.</h2>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="rounded-2xl border border-outline-variant/35 bg-white p-6"><span className="text-[40px] leading-none font-display-lg text-primary">28%</span><h3 className="font-headline-sm text-headline-sm mt-4 mb-2">Cycle-time reduction</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Shared workflow controls reduced approval loops and made exception ownership visible.</p></div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-[#E0F7FA]/35 p-6"><span className="text-[40px] leading-none font-display-lg text-secondary">3x</span><h3 className="font-headline-sm text-headline-sm mt-4 mb-2">Reporting confidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Data definitions, lineage, and quality checks improved leadership trust in performance views.</p></div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-white p-6"><span className="text-[40px] leading-none font-display-lg text-primary">40%</span><h3 className="font-headline-sm text-headline-sm mt-4 mb-2">Manual effort removed</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Automation moved repetitive validation, routing, and record updates into governed system flows.</p></div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-gradient-to-br from-[#E0F7FA]/55 via-white to-primary-fixed/35 p-6 md:p-8 lg:p-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr] gap-8 lg:gap-12 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Future of Enterprise Systems</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">The next enterprise stack will be composable, intelligent, and continuously governed.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Organizations will gain advantage by making platforms easier to change, data easier to trust, and workflows easier to automate responsibly.</p>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Composable core</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Capabilities assembled through clear interfaces and reusable services.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">AI co-workflows</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Human review paired with AI suggestions, summaries, and decision evidence.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Live governance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Controls and outcomes monitored inside the operating rhythm.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-8 md:py-10">
                          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-[#E0F7FA]/65 via-white to-primary-fixed/35 p-6 md:p-8 lg:p-10 shadow-sm">
                              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps uppercase tracking-widest block mb-3 text-secondary">Enterprise Systems Strategy Session</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-3">Turn a complex application estate into a clear enterprise modernization path.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Start with the systems that constrain growth, reporting, service quality, risk, or workforce productivity, then define the architecture decisions needed to move with confidence.</p>
                                  </div>
                                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Plan Systems Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white border border-secondary/30 text-secondary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-[#E0F7FA]/30 transition-colors" href="#">Talk to Our Team</Link>
                                  </div>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
