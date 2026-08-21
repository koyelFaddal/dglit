"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function EnterpriseCommercial() {
  return (
    <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-24 md:-mt-8 min-h-[640px] lg:min-h-[680px] flex items-center pt-24 md:pt-20 pb-12 overflow-hidden bg-surface -mx-gutter">
                          <div className="absolute inset-0 z-0">
                              <img alt="Enterprise and commercial operations modernization" className="hero-visual-balance w-full h-full object-cover object-center lg:object-right opacity-80 blur-[2px] md:blur-[1px] scale-[1.01]" src={assetPath("/asset/industry/enterprise/1.png")} />
                              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/78 to-background/15"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-background/72 via-transparent to-background/20"></div>
                              <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-fixed/25 blur-3xl opacity-70"></div>
                          </div>
                          <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                              <div className="max-w-2xl">
                                  <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5">
                                      <span>Industries</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-on-surface sm:text-primary">Enterprise &amp; Commercial</span>
                                  </nav>
                                  <span className="inline-block bg-accent-teal/10 text-accent-teal font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">Commercial Operations</span>
                                  <h1 className="font-display-lg text-[32px] leading-[40px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-text-primary mb-6">Enterprise &amp; Commercial Solutions for Modern Business Operations</h1>
                                  <p className="font-body-lg text-body-lg text-text-secondary mb-8 max-w-xl">DGL helps enterprises and commercial organizations improve operational efficiency, strengthen visibility, modernize business processes, and support scalable growth through practical digital solutions and streamlined operations.</p>
                                  <div className="flex flex-col sm:flex-row gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 sm:px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:shadow-lg transition-all" href="#">Explore Solutions <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 border-[1.5px] border-primary bg-white/75 text-primary px-6 sm:px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/5 transition-all" href="#">Talk to Our Team <span className="material-symbols-outlined text-[18px]">support_agent</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">
                              <div className="max-w-2xl">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise &amp; Commercial Overview</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Keep commercial operations clear, connected, and ready to scale.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Enterprise teams need practical operating structures that connect customer journeys, workforce activity, location performance, digital systems, and management decisions without adding unnecessary complexity.</p>
                              </div>
                              <div className="relative bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6 shadow-sm overflow-hidden">
                                  <div className="absolute inset-y-0 left-0 w-1.5 bg-primary"></div>
                                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-5 items-center">
                                      <div>
                                          <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Run work</span>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Requests, approvals, fulfillment, issues, and team coordination.</p>
                                      </div>
                                      <span className="hidden md:flex material-symbols-outlined text-secondary">east</span>
                                      <div className="bg-[#E0F7FA]/30 rounded-lg p-4 border border-outline-variant/30">
                                          <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">See performance</span>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Location results, productivity, service quality, and process delay signals.</p>
                                      </div>
                                      <span className="hidden md:flex material-symbols-outlined text-secondary">east</span>
                                      <div>
                                          <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Scale with control</span>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Repeatable routines, platform adoption, governance, and growth readiness.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none md:rounded-xl px-gutter md:px-8">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Business Challenges &amp; Opportunities</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Remove friction from the work customers and teams feel every day.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">The opportunity is not another layer of tools. It is a cleaner operating model that reduces handoffs, makes ownership visible, and gives leaders earlier signals when service or growth is under pressure.</p>
                              </div>
                              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-5 lg:gap-7 items-stretch">
                                  <img src={assetPath("/asset/industry/enterprise/2.png")} alt="Enterprise team reviewing commercial operations" className="w-full h-[260px] lg:h-full min-h-[320px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                                  <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden">
                                      <div className="p-5 border-b border-outline-variant/25">
                                          <div className="flex items-start gap-4">
                                              <span className="font-display-sm text-[34px] leading-[38px] text-primary">01</span>
                                              <div><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Fragmented work</span><p className="font-body-sm text-body-sm text-on-surface-variant">Manual handoffs, duplicate entry, unclear ownership, and disconnected systems slow everyday decisions.</p></div>
                                          </div>
                                      </div>
                                      <div className="p-5 border-b border-outline-variant/25 bg-[#E0F7FA]/20">
                                          <div className="flex items-start gap-4">
                                              <span className="font-display-sm text-[34px] leading-[38px] text-primary">02</span>
                                              <div><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Multi-site variance</span><p className="font-body-sm text-body-sm text-on-surface-variant">Locations, teams, vendors, and channels often follow different routines for the same business work.</p></div>
                                          </div>
                                      </div>
                                      <div className="p-5">
                                          <div className="flex items-start gap-4">
                                              <span className="font-display-sm text-[34px] leading-[38px] text-primary">03</span>
                                              <div><span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Growth pressure</span><p className="font-body-sm text-body-sm text-on-surface-variant">Expansion needs clearer capacity, reliable reporting, scalable tools, stronger controls, and better customer visibility.</p></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
                              <div className="lg:sticky lg:top-28">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Core Capabilities</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Build the commercial backbone around the work that repeats.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We focus on reusable business capabilities that improve service quality, operating discipline, and management visibility.</p>
                              </div>
                              <div className="border-y border-outline-variant/35">
                                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-4 py-5 border-b border-outline-variant/25">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Process control</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Workflow standards, approvals, exceptions, roles, handoffs, and evidence for key commercial activities.</p>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-4 py-5 border-b border-outline-variant/25">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Customer operations</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Service journeys, order handling, case updates, account visibility, and customer communication routines.</p>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-4 py-5 border-b border-outline-variant/25">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Workforce enablement</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Team workflows, knowledge access, task routing, performance signals, and collaboration practices.</p>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-4 py-5">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Decision visibility</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Dashboards, data quality, executive reporting, operational metrics, and improvement priorities.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Operational Excellence</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Create a repeatable rhythm for commercial work.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Operational excellence improves when teams can see the same flow from demand to delivery, not just isolated tasks.</p>
                              </div>
                              <div className="relative">
                                  <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-outline-variant/50"></div>
                                  <div className="space-y-4">
                                      <div className="relative bg-white border border-outline-variant/35 rounded-xl p-5 md:ml-16 shadow-sm">
                                          <span className="hidden md:flex absolute -left-16 top-5 w-8 h-8 rounded-lg bg-primary text-white items-center justify-center font-bold">1</span>
                                          <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Capture demand clearly</span>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Customer, sales, service, branch, partner, or internal requests enter one accountable intake path.</p>
                                      </div>
                                      <div className="relative bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5 md:ml-16">
                                          <span className="hidden md:flex absolute -left-16 top-5 w-8 h-8 rounded-lg bg-primary text-white items-center justify-center font-bold">2</span>
                                          <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Route by rules and ownership</span>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Work moves to the right team with visible priority, status, dependencies, and escalation paths.</p>
                                      </div>
                                      <div className="relative bg-white border border-outline-variant/35 rounded-xl p-5 md:ml-16 shadow-sm">
                                          <span className="hidden md:flex absolute -left-16 top-5 w-8 h-8 rounded-lg bg-primary text-white items-center justify-center font-bold">3</span>
                                          <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Resolve and learn</span>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Teams close work with evidence, then leaders review delays, quality, capacity, customer impact, and automation options.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none md:rounded-xl px-gutter md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise Process Modernization</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Modernize processes without turning the business into a technology project.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">DGL helps teams simplify the way work moves across functions, channels, systems, and locations.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                                  <div className="pb-5 border-b border-outline-variant/30"><span className="material-symbols-outlined text-secondary mb-3">rule_settings</span><h3 className="font-headline-sm text-headline-sm mb-2">Standardize</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Define the rules, roles, forms, approvals, and exception paths that matter.</p></div>
                                  <div className="pb-5 border-b border-outline-variant/30"><span className="material-symbols-outlined text-secondary mb-3">sync_alt</span><h3 className="font-headline-sm text-headline-sm mb-2">Integrate</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Connect CRM, ERP, commerce, service, workforce, finance, and reporting data.</p></div>
                                  <div><span className="material-symbols-outlined text-secondary mb-3">smart_toy</span><h3 className="font-headline-sm text-headline-sm mb-2">Automate</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Reduce repetitive work while keeping control, auditability, and human review where needed.</p></div>
                                  <div><span className="material-symbols-outlined text-secondary mb-3">monitoring</span><h3 className="font-headline-sm text-headline-sm mb-2">Measure</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Track cycle time, backlog, rework, conversion, service quality, and team capacity.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
                              <div className="relative min-h-[300px] md:min-h-[420px] rounded-xl overflow-hidden border border-outline-variant/35">
                                  <img src={assetPath("/asset/industry/enterprise/3.png")} alt="Enterprise collaboration and productivity planning" className="absolute inset-0 w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-black/42"></div>
                                  <div className="absolute left-4 right-4 bottom-4 md:left-0 md:right-0 md:bottom-0 rounded-lg md:rounded-none bg-black/35 border border-white/25 p-4 md:p-8">
                                      <span className="font-label-caps text-label-caps text-white uppercase tracking-widest block mb-3">Workforce &amp; Collaboration Enablement</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-white max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">Give teams the tools and routines to work with fewer handoff gaps.</h2>
                                  </div>
                              </div>
                              <div className="space-y-5">
                                  <div className="border-l-4 border-primary pl-5"><span className="font-label-caps text-label-caps text-primary uppercase">Role clarity</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Make responsibilities, approvals, escalation paths, and service ownership visible.</p></div>
                                  <div className="border-l-4 border-secondary pl-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Knowledge access</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Organize guidance, policies, scripts, product details, and operating procedures for daily use.</p></div>
                                  <div className="border-l-4 border-primary pl-5"><span className="font-label-caps text-label-caps text-primary uppercase">Capacity signals</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Expose workload, skills, location demand, bottlenecks, and support needs before service quality drops.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data Visibility &amp; Business Insights</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Turn commercial activity into management visibility.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Useful reporting connects operations, customer experience, workforce productivity, revenue movement, and service quality into a shared performance view.</p>
                              </div>
                              <div className="overflow-hidden rounded-xl border border-outline-variant/35 bg-white">
                                  <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1fr_1.15fr] border-b border-outline-variant/25">
                                      <div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Sales &amp; service</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Pipeline, orders, cases, renewals</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Customer follow-up, conversion, service risk, and account visibility.</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1fr_1.15fr] border-b border-outline-variant/25">
                                      <div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Operations</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Tasks, stock, fulfillment, approvals</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Backlog, cycle time, location variance, resource needs, and process exceptions.</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1fr_1.15fr]">
                                      <div className="p-4 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/25">Performance</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Finance, people, quality, risk</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Margin signals, team productivity, controls, growth readiness, and continuity measures.</div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none md:rounded-xl px-gutter md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.84fr_1.16fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Delivery &amp; Transformation Approach</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Move one business workflow at a time.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Instead of launching a broad transformation program, DGL helps teams choose one high-friction workflow, improve it with users, and carry the proven pattern into the next area.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6 shadow-sm">
                                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-5 md:gap-6">
                                      <div>
                                          <span className="font-label-caps text-label-caps text-primary uppercase block mb-4">First workflow</span>
                                          <div className="space-y-3">
                                              <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Pick:</strong> customer onboarding, branch service, order handling, approvals, or issue resolution.</p>
                                              <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Fix:</strong> ownership, forms, rules, handoffs, status, and reporting.</p>
                                              <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Prove:</strong> cycle time, rework, service quality, and user adoption.</p>
                                          </div>
                                      </div>
                                      <div className="hidden md:block bg-outline-variant/40"></div>
                                      <div>
                                          <span className="font-label-caps text-label-caps text-secondary uppercase block mb-4">Next wave</span>
                                          <div className="grid grid-cols-2 gap-3">
                                              <span className="border border-outline-variant/35 rounded-lg p-3 font-label-caps text-label-caps text-primary uppercase">Site rollout</span>
                                              <span className="border border-outline-variant/35 rounded-lg p-3 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/30">Team training</span>
                                              <span className="border border-outline-variant/35 rounded-lg p-3 font-label-caps text-label-caps text-primary uppercase bg-[#E0F7FA]/30">Data cleanup</span>
                                              <span className="border border-outline-variant/35 rounded-lg p-3 font-label-caps text-label-caps text-primary uppercase">Automation</span>
                                          </div>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">Each wave stays small enough to manage, but consistent enough to scale.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Business Outcomes &amp; Value</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Measure enterprise change through better operating results.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">The work should reduce friction, make decisions clearer, and help teams scale without losing service quality.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                  <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Efficiency:</strong> fewer manual steps, cleaner handoffs, and faster cycle times.</p>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Visibility:</strong> clearer performance views across locations, teams, channels, and customer work.</p>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Productivity:</strong> better task focus, knowledge access, capacity planning, and collaboration routines.</p>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Continuity:</strong> stronger process ownership, controls, role coverage, and operational resilience.</p>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Customer experience:</strong> more consistent service, status updates, issue resolution, and account support.</p>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Scalability:</strong> repeatable practices that support new sites, markets, teams, and product lines.</p>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Long-Term Partnership Model</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Stay close to the business while change moves across the enterprise.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Commercial modernization keeps working when leadership cadence, platform ownership, and improvement priorities stay connected after each release.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  <div>
                                      <span className="material-symbols-outlined text-secondary mb-3">groups</span>
                                      <h3 className="font-headline-sm text-headline-sm mb-2">Leadership Cadence</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Review value, risk, adoption, and next-wave priorities with the right business owners.</p>
                                  </div>
                                  <div>
                                      <span className="material-symbols-outlined text-secondary mb-3">settings_suggest</span>
                                      <h3 className="font-headline-sm text-headline-sm mb-2">Platform Stewardship</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Keep workflows, data, permissions, reporting, and automation patterns maintainable.</p>
                                  </div>
                                  <div>
                                      <span className="material-symbols-outlined text-secondary mb-3">trending_up</span>
                                      <h3 className="font-headline-sm text-headline-sm mb-2">Improvement Backlog</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Use service feedback and performance measures to shape the next practical release.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto pt-8 pb-14">
                          <div className="border-y border-outline-variant/35 py-8 md:py-9">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-10 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Commercial Readiness Review</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] md:text-headline-lg md:leading-[40px] text-on-surface mb-3">Choose the workflow your teams want fixed first.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Start with a focused review of one commercial journey, then leave with a clear action map for ownership, data, tools, and adoption.</p>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-stretch">
                                      <div className="grid grid-cols-3 border border-outline-variant/35 rounded-lg overflow-hidden bg-white">
                                          <span className="p-3 font-label-caps text-label-caps text-primary uppercase border-r border-outline-variant/25">Map</span>
                                          <span className="p-3 font-label-caps text-label-caps text-primary uppercase border-r border-outline-variant/25 bg-[#E0F7FA]/30">Prioritize</span>
                                          <span className="p-3 font-label-caps text-label-caps text-primary uppercase">Launch</span>
                                      </div>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors whitespace-nowrap" href="#">Start Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
