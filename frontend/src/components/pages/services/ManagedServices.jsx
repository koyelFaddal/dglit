import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function ManagedServices() {
  return (
    <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="max-w-container-max mx-auto pt-8 md:pt-10 pb-12 md:pb-14">
                          <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-white shadow-sm">
                              <img src={assetPath("/asset/technology/service/1-optimized.webp")} alt="Managed services operations center" className="absolute inset-0 h-full w-full object-cover scale-[1.02] opacity-35 md:opacity-100" style={{ objectPosition: '72% center', filter: 'blur(5px) saturate(0.92) contrast(0.95)' }} fetchPriority="high" loading="eager" decoding="async" />
                              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white via-white/95 to-[#E0F7FA]/85 md:from-white/97 md:via-white/86 md:to-[#E0F7FA]/40"></div>
                              <div className="absolute inset-0 bg-white/70 md:bg-[#E0F7FA]/18"></div>
                              <div className="relative min-h-[380px] sm:min-h-[430px] md:min-h-[520px] flex items-center px-4 py-7 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-14">
                                  <div className="w-full max-w-[760px] bg-white/92 md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0 shadow-sm md:shadow-none backdrop-blur-sm md:backdrop-blur-0">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3 md:mb-4">Technology / Managed Services</span>
                                      <h1 className="font-display-lg text-[28px] leading-[36px] sm:text-[34px] sm:leading-[42px] md:text-[46px] md:leading-[54px] xl:text-[52px] xl:leading-[60px] font-extrabold text-on-surface mb-4 md:mb-5 drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]">Managed IT services that keep enterprise operations steady, secure, and improving.</h1>
                                      <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg font-semibold text-on-surface max-w-2xl mb-4">DGL supports infrastructure, cloud platforms, applications, service desk, monitoring, and SLA-driven operations so technology teams can focus on business change.</p>
                                      <div className="flex flex-col sm:flex-row gap-3 mt-7 md:mt-10">
                                          <Link className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-sm w-full sm:w-auto" href="#">Explore Managed Services</Link>
                                          <Link className="inline-flex items-center justify-center gap-2 bg-white/80 border border-primary/35 text-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors w-full sm:w-auto" href="#">Discuss Service Scope</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                              <div className="bg-white border border-outline-variant/35 rounded-lg p-5 md:p-6 shadow-[0_14px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)] transition-shadow min-h-[230px] flex flex-col">
                                  <div className="w-11 h-11 rounded-lg bg-[#E0F7FA]/60 border border-secondary/20 flex items-center justify-center mb-5"><span className="material-symbols-outlined text-secondary">dns</span></div>
                                  <h3 className="font-headline-sm text-headline-sm mb-3">IT Infrastructure</h3>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant">Operate core infrastructure with monitoring, patching, backup checks, capacity reviews, and service ownership.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-lg p-5 md:p-6 shadow-[0_14px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)] transition-shadow min-h-[230px] flex flex-col">
                                  <div className="w-11 h-11 rounded-lg bg-white border border-primary/20 flex items-center justify-center mb-5"><span className="material-symbols-outlined text-primary">cloud_done</span></div>
                                  <h3 className="font-headline-sm text-headline-sm mb-3">Cloud Management</h3>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant">Manage workloads, subscriptions, service health, consumption trends, governance exceptions, and reliability actions.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-lg p-5 md:p-6 shadow-[0_14px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)] transition-shadow min-h-[230px] flex flex-col">
                                  <div className="w-11 h-11 rounded-lg bg-[#E0F7FA]/60 border border-secondary/20 flex items-center justify-center mb-5"><span className="material-symbols-outlined text-secondary">support_agent</span></div>
                                  <h3 className="font-headline-sm text-headline-sm mb-3">Service Desk</h3>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant">Handle user issues, service requests, status updates, escalation routing, and knowledge-backed resolution.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-lg p-5 md:p-6 shadow-[0_14px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)] transition-shadow min-h-[230px] flex flex-col">
                                  <div className="w-11 h-11 rounded-lg bg-white border border-primary/20 flex items-center justify-center mb-5"><span className="material-symbols-outlined text-primary">integration_instructions</span></div>
                                  <h3 className="font-headline-sm text-headline-sm mb-3">Application Support</h3>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant">Support enterprise applications, release windows, defect triage, integrations, and user adoption needs.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-lg p-5 md:p-6 shadow-[0_14px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)] transition-shadow min-h-[230px] flex flex-col">
                                  <div className="w-11 h-11 rounded-lg bg-[#E0F7FA]/60 border border-secondary/20 flex items-center justify-center mb-5"><span className="material-symbols-outlined text-secondary">security</span></div>
                                  <h3 className="font-headline-sm text-headline-sm mb-3">Security Monitoring</h3>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant">Track control signals, alerts, access issues, compliance evidence, and operational risk exceptions.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-lg p-5 md:p-6 shadow-[0_14px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)] transition-shadow min-h-[230px] flex flex-col">
                                  <div className="w-11 h-11 rounded-lg bg-white border border-primary/20 flex items-center justify-center mb-5"><span className="material-symbols-outlined text-primary">speed</span></div>
                                  <h3 className="font-headline-sm text-headline-sm mb-3">Performance Tuning</h3>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant">Review performance trends, bottlenecks, capacity pressure, optimization actions, and service improvement priorities.</p>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-7 items-center">
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                  <div className="md:col-span-2 bg-white border border-outline-variant/35 rounded-xl p-5 shadow-sm"><span className="font-label-caps text-label-caps text-secondary uppercase">Observe</span><h3 className="font-headline-sm text-headline-sm mt-3 mb-2">Signals, alerts, logs, and service health.</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Monitoring data is grouped by business service, priority, and operational risk.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5 shadow-sm"><span className="font-label-caps text-label-caps text-secondary uppercase">Triage</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Classify severity, impact, ownership, and resolution path.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-xl p-5 shadow-sm"><span className="font-label-caps text-label-caps text-secondary uppercase">Resolve</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Act, communicate, validate, and close with evidence.</p></div>
                              </div>
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Operations Workflow</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A lightweight operating rhythm for reliable services.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We connect monitoring, service desk, engineering, security, and governance teams through a workflow that keeps incidents moving and recurring problems visible.</p>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">SLA &amp; Performance Metrics</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Service reporting that separates activity from performance.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Operational dashboards focus on service health, resolution quality, workload trends, and the actions needed to improve reliability.</p>
                              </div>
                              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5 shadow-sm"><strong className="text-primary text-3xl block mb-2">99.9%</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Availability target</span></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5 shadow-sm"><strong className="text-primary text-3xl block mb-2">24/7</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Monitoring cover</span></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5 shadow-sm"><strong className="text-primary text-3xl block mb-2">P1</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Escalation path</span></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5 shadow-sm"><strong className="text-primary text-3xl block mb-2">CSI</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Improvement cycle</span></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-7 items-center">
                              <img src={assetPath("/asset/technology/service/2-optimized.webp")} alt="Managed services monitoring dashboard" className="w-full h-60 md:h-72 object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Monitoring Dashboard Showcase</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">One operational view for infrastructure, cloud, and applications.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">Dashboards combine availability, alert status, response queues, cost signals, and risk indicators so teams can act before service quality drops.</p>
                                  <div className="flex flex-wrap gap-2 font-label-caps text-label-caps text-secondary uppercase"><span className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-full px-4 py-2">Alerts</span><span className="bg-white border border-outline-variant/30 rounded-full px-4 py-2">Capacity</span><span className="bg-white border border-outline-variant/30 rounded-full px-4 py-2">SLA</span><span className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-full px-4 py-2">Cost</span></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Incident Management Process</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Fast response without losing control of communication or evidence.</h2>
                              </div>
                              <div className="space-y-3">
                                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 items-center bg-white border border-outline-variant/35 rounded-lg p-4 shadow-sm"><span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-label-caps text-label-caps">1</span><div><h3 className="font-headline-sm text-headline-sm">Detect and classify</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Confirm impact, priority, service ownership, and affected users.</p></div><span className="font-label-caps text-label-caps text-secondary uppercase">Intake</span></div>
                                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 items-center bg-white border border-outline-variant/35 rounded-lg p-4 shadow-sm"><span className="w-10 h-10 rounded-full bg-white border border-secondary/35 text-secondary flex items-center justify-center font-label-caps text-label-caps">2</span><div><h3 className="font-headline-sm text-headline-sm">Restore service</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Apply runbooks, escalate where needed, and communicate status.</p></div><span className="font-label-caps text-label-caps text-secondary uppercase">Action</span></div>
                                  <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 items-center bg-white border border-outline-variant/35 rounded-lg p-4 shadow-sm"><span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-label-caps text-label-caps">3</span><div><h3 className="font-headline-sm text-headline-sm">Review and improve</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Capture root cause, prevention actions, and knowledge updates.</p></div><span className="font-label-caps text-label-caps text-secondary uppercase">Learning</span></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-5">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Cloud &amp; Infrastructure Support</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Support coverage for hybrid estates.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">DGL supports cloud resources, on-premise infrastructure, network services, endpoint operations, and integration points across enterprise environments.</p>
                                  <div className="grid grid-cols-2 gap-3 font-label-caps text-label-caps text-secondary uppercase"><span className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-3">Cloud workloads</span><span className="bg-white border border-outline-variant/30 rounded-lg p-3">Network services</span><span className="bg-white border border-outline-variant/30 rounded-lg p-3">Backup checks</span><span className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-3">Patch rhythm</span></div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Platform health</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Review resource pressure, availability, dependency risk, and recovery readiness.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Operational hygiene</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Maintain patch windows, access reviews, backup evidence, and configuration standards.</p></div>
                                  <div className="sm:col-span-2 bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Service continuity</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Coordinate planned maintenance, incident response, vendor escalation, and service validation so critical business operations remain stable.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Service Model Comparison</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Choose the right operating model for the level of support needed.</h2>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden shadow-sm">
                                  <div className="grid grid-cols-1 md:grid-cols-3">
                                      <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/30"><span className="font-label-caps text-label-caps text-secondary uppercase">Essential</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Monitoring, incident response, service desk routing, and monthly health reporting.</p></div>
                                      <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/30 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-secondary uppercase">Managed</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Proactive operations, patch coordination, application support, SLA tracking, and problem management.</p></div>
                                      <div className="p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Optimized</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Automation, cost optimization, resilience planning, compliance monitoring, and continuous improvement.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-7 items-center">
                              <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-7">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Automation &amp; Efficiency</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Reduce manual effort while improving service consistency.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Automation is applied to repeatable work: alert enrichment, ticket routing, health checks, release steps, access tasks, and reporting packs.</p>
                              </div>
                              <div className="space-y-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4 shadow-sm"><span className="font-label-caps text-label-caps text-secondary uppercase">Runbooks</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Documented steps for recurring incidents and service requests.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4 shadow-sm ml-0 md:ml-8"><span className="font-label-caps text-label-caps text-secondary uppercase">Workflow automation</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Automated assignment, approvals, checks, and closure evidence.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4 shadow-sm ml-0 md:ml-16"><span className="font-label-caps text-label-caps text-secondary uppercase">Optimization backlog</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Prioritized improvements based on volume, risk, and recurring effort.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-7 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Case Study / Impact</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">From reactive support to accountable service operations.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">A distributed operations team consolidated monitoring, incident handling, service reporting, and improvement reviews into a single managed-service rhythm.</p>
                                  <div className="grid grid-cols-3 gap-3"><div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-2xl block">32%</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Fewer repeats</span></div><div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-2xl block">18%</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Faster triage</span></div><div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-2xl block">4x</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Reporting clarity</span></div></div>
                              </div>
                              <img src={assetPath("/asset/technology/service/3-optimized.webp")} alt="Managed services impact review" className="w-full h-60 md:h-72 object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Client Benefits</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Managed services that improve confidence, not just ticket volume.</h2>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="border-l-4 border-secondary bg-white p-5 shadow-sm"><h3 className="font-headline-sm text-headline-sm mb-2">Predictable service quality</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Clear SLAs, reporting, ownership, and escalation paths.</p></div>
                                  <div className="border-l-4 border-primary bg-white p-5 shadow-sm"><h3 className="font-headline-sm text-headline-sm mb-2">Lower operational drag</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Repeatable support, automation, and reduced manual coordination.</p></div>
                                  <div className="border-l-4 border-primary bg-white p-5 shadow-sm"><h3 className="font-headline-sm text-headline-sm mb-2">Better risk visibility</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Security, compliance, configuration, and resilience signals stay visible.</p></div>
                                  <div className="border-l-4 border-secondary bg-white p-5 shadow-sm"><h3 className="font-headline-sm text-headline-sm mb-2">Continuous improvement</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Service reviews convert trends into practical improvement actions.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto pt-8 pb-20">
                          <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl px-6 py-8 md:px-10 md:py-10 text-center shadow-sm">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Managed Services Consultation</span>
                              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Ready to strengthen day-to-day IT operations?</h2>
                              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-6">Discuss the right managed-service model for infrastructure, cloud, applications, service desk, monitoring, and continuous improvement.</p>
                              <div className="flex flex-col sm:flex-row justify-center gap-3">
                                  <Link className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-lg px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-sm" href="#">Get Started</Link>
                                  <Link className="inline-flex items-center justify-center gap-2 bg-white border border-secondary/30 text-secondary rounded-lg px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-colors" href="#">Contact Us</Link>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
