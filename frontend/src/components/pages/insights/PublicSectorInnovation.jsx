"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function PublicSectorInnovation() {
  return (
    <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-24 md:-mt-8 min-h-[620px] lg:min-h-[660px] flex items-center pt-24 md:pt-20 pb-12 overflow-hidden bg-white -mx-gutter">
                          <div className="absolute inset-0 z-0">
                              <img src={assetPath("/asset/insight/public_sector_inovation/1.png")} alt="AI enabled workplace transformation" className="w-full h-full object-cover object-center opacity-85 blur-[2px] md:blur-[1px] scale-[1.01]" />
                              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/78 to-white/24"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/76 via-transparent to-white/16"></div>
                              <div className="absolute left-0 top-0 h-full w-2/3 bg-[#E0F7FA]/40 blur-3xl opacity-90"></div>
                          </div>
                          <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                              <div className="max-w-3xl">
                                  <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5">
                                      <span>Insights</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-on-surface sm:text-primary">Public Sector Innovation</span>
                                  </nav>
                                  <span className="inline-block bg-[#E0F7FA]/60 border border-secondary/20 text-secondary font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">Digital Governance Innovation</span>
                                  <h1 className="font-display-lg text-[31px] leading-[39px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-on-surface mb-6">Public Sector Innovation for Smarter Government Systems</h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">DGL helps public organizations modernize digital governance, citizen services, smart public systems, infrastructure, transparency, and accountability so agencies can deliver faster, clearer, and more trusted public outcomes.</p>
                                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 sm:px-7 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Explore Public Systems <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white/85 border border-primary/35 text-primary px-5 sm:px-7 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#E0F7FA]/30 transition-all" href="#">Discuss Civic Innovation <span className="material-symbols-outlined text-[18px]">support_agent</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-surface-container-lowest overflow-hidden">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr]">
                                  <div className="bg-[#E0F7FA]/35 p-6 md:p-8 lg:p-10">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Public Innovation Brief</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface">Modern government needs practical invention, not theatre.</h2>
                                  </div>
                                  <div className="p-6 md:p-8 lg:p-10">
                                      <p className="font-body-md text-body-md text-on-surface-variant mb-6">The strongest public sector programs connect mandate, resident need, operational capacity, and measurable accountability before technology choices are locked in.</p>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="flex gap-3 rounded-xl bg-white border border-outline-variant/35 p-4"><span className="material-symbols-outlined text-primary">assignment_turned_in</span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Mandate clarity:</strong> define what must change, who benefits, and how success will be evidenced.</p></div>
                                          <div className="flex gap-3 rounded-xl bg-white border border-outline-variant/35 p-4"><span className="material-symbols-outlined text-secondary">groups</span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Service reality:</strong> design around front-line workload, assisted access, and resident confidence.</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.45fr_0.55fr] gap-8 lg:gap-12 items-start">
                              <div className="xl:sticky xl:top-28">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Digital Governance Transformation</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Build decision systems citizens can trust.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Governance becomes usable when policy, funding, risk, service ownership, and evidence are visible in the same operating rhythm.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="rounded-xl border border-outline-variant/35 bg-white p-5 md:p-6"><span className="material-symbols-outlined text-primary text-[30px] mb-4">policy</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Policy controls</span><p className="font-body-sm text-body-sm text-on-surface-variant">Translate legislation, standards, and ministerial priorities into practical delivery guardrails.</p></div>
                                  <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/35 p-5 md:p-6"><span className="material-symbols-outlined text-secondary text-[30px] mb-4">fact_check</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Evidence gates</span><p className="font-body-sm text-body-sm text-on-surface-variant">Use readiness evidence before expanding pilots, funding releases, or citizen-facing changes.</p></div>
                                  <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/35 p-5 md:p-6"><span className="material-symbols-outlined text-secondary text-[30px] mb-4">account_tree</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Decision rights</span><p className="font-body-sm text-body-sm text-on-surface-variant">Clarify who approves service rules, data sharing, operating changes, and exception handling.</p></div>
                                  <div className="rounded-xl border border-outline-variant/35 bg-white p-5 md:p-6"><span className="material-symbols-outlined text-primary text-[30px] mb-4">monitoring</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-3">Outcome review</span><p className="font-body-sm text-body-sm text-on-surface-variant">Track access, timeliness, quality, fairness, and cost without burying leaders in reports.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8 items-stretch">
                              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/35 min-h-[300px] md:min-h-[420px]">
                                  <img src={assetPath("/asset/insight/public_sector_inovation/2.png")} alt="Smart government systems and connected public service operations" className="absolute inset-0 h-full w-full object-cover object-center" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/45 to-transparent"></div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-5 md:p-6"><span className="font-label-caps text-label-caps text-primary uppercase">Case orchestration</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Applications, reviews, inspections, benefits, and appeals move through controlled workflows.</p></div>
                                  <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5 md:p-6"><span className="font-label-caps text-label-caps text-primary uppercase">Shared components</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Identity, notifications, forms, booking, payment, and status updates work across services.</p></div>
                                  <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5 md:p-6"><span className="font-label-caps text-label-caps text-primary uppercase">Assisted channels</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Digital services include contact center, counter, field, and community partner support.</p></div>
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-5 md:p-6"><span className="font-label-caps text-label-caps text-primary uppercase">Operational telemetry</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Demand, bottlenecks, compliance risk, and staff capacity are visible early enough to act.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white p-6 md:p-8 lg:p-10">
                              <div className="max-w-3xl mb-8">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Citizen-Centric Services</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Design services around life events, not agency silos.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Residents should not need to understand internal structures to get help, prove eligibility, or track a request.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                  <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5"><span className="h-10 w-10 rounded-lg bg-primary text-on-primary grid place-items-center mb-5"><span className="material-symbols-outlined text-[20px]">search</span></span><h3 className="font-headline-sm text-headline-sm mb-2">Find</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Plain-language entry points and clear eligibility cues.</p></div>
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="h-10 w-10 rounded-lg bg-secondary text-white grid place-items-center mb-5"><span className="material-symbols-outlined text-[20px]">edit_note</span></span><h3 className="font-headline-sm text-headline-sm mb-2">Apply</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Shorter forms, saved progress, and assisted submission.</p></div>
                                  <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5"><span className="h-10 w-10 rounded-lg bg-primary text-on-primary grid place-items-center mb-5"><span className="material-symbols-outlined text-[20px]">track_changes</span></span><h3 className="font-headline-sm text-headline-sm mb-2">Track</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Visible status, next steps, and expected response windows.</p></div>
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="h-10 w-10 rounded-lg bg-secondary text-white grid place-items-center mb-5"><span className="material-symbols-outlined text-[20px]">support_agent</span></span><h3 className="font-headline-sm text-headline-sm mb-2">Resolve</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Escalation routes and feedback loops for service recovery.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data-Driven Policy Making</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Give policy teams usable evidence before decisions harden.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Policy design improves when operational data, community feedback, cost signals, and compliance constraints are considered together.</p>
                              </div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-surface-container-lowest p-5 md:p-6">
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Need</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Demand, equity, channel friction.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Cost</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Funding pressure and operating load.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Risk</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Legal, privacy, delivery, adoption.</p></div>
                                  </div>
                                  <div className="rounded-xl bg-[#E0F7FA]/40 border border-secondary/20 p-5">
                                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                          <span className="h-12 w-12 rounded-xl bg-secondary text-white grid place-items-center shrink-0"><span className="material-symbols-outlined">query_stats</span></span>
                                          <p className="font-body-md text-body-md text-on-surface-variant">The result is a policy evidence pack with service implications, measurable outcomes, and decision tradeoffs leaders can understand.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-8 md:py-10">
                          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-white via-[#F7FCFD] to-[#E0F7FA]/55 overflow-hidden shadow-sm">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.46fr_0.54fr] gap-0">
                                  <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">AI in Public Services</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Use AI where it improves service judgment, not where it hides accountability.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Public AI must be explainable, reviewed, secure, and grounded in clear operational ownership.</p>
                                  </div>
                                  <div className="p-5 md:p-6 lg:p-8">
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                          <div className="rounded-xl border border-outline-variant/35 bg-white p-5 shadow-sm"><span className="material-symbols-outlined text-primary mb-4">psychology</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Triage support</span><p className="font-body-sm text-body-sm text-on-surface-variant">Summaries and routing suggestions for human review.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/35 p-5 shadow-sm"><span className="material-symbols-outlined text-secondary mb-4">description</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Document intelligence</span><p className="font-body-sm text-body-sm text-on-surface-variant">Extract required evidence from forms and case files.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/35 p-5 shadow-sm"><span className="material-symbols-outlined text-secondary mb-4">security</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Safeguards</span><p className="font-body-sm text-body-sm text-on-surface-variant">Bias review, access controls, audit logs, and escalation.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 bg-white p-5 shadow-sm"><span className="material-symbols-outlined text-primary mb-4">record_voice_over</span><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Citizen clarity</span><p className="font-body-sm text-body-sm text-on-surface-variant">Plain-language guidance with clear human help options.</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.62fr_0.38fr] gap-6 lg:gap-8 items-stretch">
                              <div className="rounded-2xl border border-outline-variant/35 bg-white p-6 md:p-8 lg:p-10">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Infrastructure Modernization</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-6">Modernize the public platform without forcing every service into the same mold.</h2>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Cloud foundations</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Secure landing zones, resilience patterns, and environment standards.</p></div>
                                      <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Integration fabric</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">APIs, event flows, data exchange, and legacy interoperability.</p></div>
                                      <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Service modules</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Reusable capabilities for forms, workflow, notifications, and analytics.</p></div>
                                      <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Continuity controls</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Disaster recovery, cyber readiness, accessibility, and vendor assurance.</p></div>
                                  </div>
                              </div>
                              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/35 min-h-[300px]">
                                  <img src={assetPath("/asset/insight/public_sector_inovation/3.png")} alt="Public infrastructure modernization and digital platform architecture" className="absolute inset-0 h-full w-full object-cover object-center" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/35 to-transparent"></div>
                                  <div className="absolute left-5 right-5 bottom-5 rounded-xl bg-white/90 border border-white/70 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Platform principle</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Standardize the foundation, personalize the service.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Transparency & Compliance Systems</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Make accountability part of the service, not a separate reporting exercise.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Public organizations need controls that are visible, testable, and practical for busy teams.</p>
                              </div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-surface-container-lowest p-5 md:p-6">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Audit trail</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Track decisions, evidence, approvals, and exceptions from request to outcome.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Privacy by design</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Embed consent, retention, data minimization, and access controls into service workflows.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Accessibility checks</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Review content, forms, channel choice, and assisted routes before release.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Public reporting</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Publish meaningful measures that explain progress, quality, and service constraints.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="max-w-3xl mb-8">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Real-World Impact</span>
                              <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Case evidence should read like a public value record.</h2>
                              <p className="font-body-md text-body-md text-on-surface-variant">Each initiative is assessed by the resident problem solved, the operating change made, and the evidence that service quality improved.</p>
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                              <div className="rounded-2xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-6"><span className="material-symbols-outlined text-primary mb-5">approval_delegation</span><h3 className="font-headline-sm text-headline-sm mb-3">Permit acceleration</h3><p className="font-body-sm text-body-sm text-on-surface-variant">A redesigned intake model reduced incomplete submissions and gave reviewers clearer decision evidence.</p></div>
                              <div className="rounded-2xl bg-white border border-outline-variant/35 p-6 lg:translate-y-6"><span className="material-symbols-outlined text-secondary mb-5">volunteer_activism</span><h3 className="font-headline-sm text-headline-sm mb-3">Benefits access</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Assisted digital channels helped residents complete applications without repeating information across departments.</p></div>
                              <div className="rounded-2xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-6"><span className="material-symbols-outlined text-primary mb-5">engineering</span><h3 className="font-headline-sm text-headline-sm mb-3">Asset coordination</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Shared work queues aligned maintenance, finance, and field teams around risk and service priority.</p></div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white overflow-hidden">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr]">
                                  <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/35">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Future Outlook</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">The next public service model is adaptive, evidence-led, and easier to govern.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Agencies can move faster when the operating model is designed for continuous improvement rather than periodic reinvention.</p>
                                  </div>
                                  <div className="p-6 md:p-8 lg:p-10">
                                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                          <div className="rounded-xl border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Adaptive policy</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Programs update as demand, evidence, and legal duties change.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Shared platforms</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Common foundations reduce duplication while preserving service context.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Visible value</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Leaders can see public outcomes, cost, risk, and quality together.</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-8 md:py-10">
                          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-[#E0F7FA]/65 via-white to-primary-fixed/35 p-6 md:p-8 lg:p-10 shadow-sm">
                              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps uppercase tracking-widest block mb-3 text-secondary">Public Sector Innovation Session</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-3">Map the next service citizens should experience differently.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Start with one high-value public service, clarify the mandate, diagnose the operating friction, and define the evidence needed for confident modernization.</p>
                                  </div>
                                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Plan Innovation Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white border border-secondary/30 text-secondary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-[#E0F7FA]/30 transition-colors" href="#">Talk to Our Team</Link>
                                  </div>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
