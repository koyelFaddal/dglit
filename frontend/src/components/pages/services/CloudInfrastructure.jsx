import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function CloudInfrastructure() {
  return (
    <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="max-w-container-max mx-auto pt-8 md:pt-10 pb-12 md:pb-14">
                          <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 shadow-sm">
                              <img src={assetPath("/asset/technology/cloude/1-optimized.webp")} alt="Enterprise cloud infrastructure operations" className="absolute inset-0 h-full w-full object-cover scale-[1.02]" style={{ objectPosition: '68% center', filter: 'blur(4px) saturate(0.95) contrast(0.98)' }} fetchPriority="high" loading="eager" decoding="async" />
                              <div className="absolute inset-0 bg-gradient-to-r from-white/97 via-white/84 to-[#E0F7FA]/38"></div>
                              <div className="absolute inset-0 bg-[#E0F7FA]/20"></div>
                              <div className="relative min-h-[430px] md:min-h-[520px] flex items-start px-6 pt-8 pb-10 md:px-10 md:pt-12 lg:px-14 lg:pt-14">
                                  <div className="max-w-[760px]">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Technology / Cloud &amp; Infrastructure</span>
                                      <h1 className="font-display-lg text-[34px] leading-[42px] md:text-[46px] md:leading-[54px] xl:text-[52px] xl:leading-[60px] font-extrabold text-on-surface mb-5 drop-shadow-[0_2px_10px_rgba(255,255,255,0.88)]">Modern <span className="text-primary">cloud</span> foundations for resilient enterprise growth.</h1>
                                      <p className="font-body-lg text-body-lg font-medium text-on-surface-variant max-w-2xl mb-4">DGL helps organizations plan, migrate, secure, and operate cloud infrastructure with architecture choices that match business priorities, compliance needs, and delivery capacity.</p>
                                      <div className="flex flex-wrap gap-2 font-label-caps text-label-caps text-secondary uppercase mt-7">
                                          <span className="bg-white/80 border border-outline-variant/35 rounded-full px-4 py-2 shadow-sm">Hybrid cloud</span>
                                          <span className="bg-white/80 border border-outline-variant/35 rounded-full px-4 py-2 shadow-sm">Migration</span>
                                          <span className="bg-white/80 border border-outline-variant/35 rounded-full px-4 py-2 shadow-sm">DevOps</span>
                                      </div>
                                      <div className="flex flex-col sm:flex-row gap-3 mt-12">
                                          <Link className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/90 transition-colors" href="#">Explore Cloud Services</Link>
                                          <Link className="inline-flex items-center justify-center gap-2 bg-white/75 border border-primary/35 text-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors" href="#">Plan Cloud Roadmap</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.68fr_1.32fr] gap-7 items-start">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-[0_16px_42px_rgba(15,23,42,0.06)]">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Cloud Data Services</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A focused service layer for cloud, data, and analytics operations.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">This section is structured as a SaaS-style capability matrix so each service is easy to scan, compare, and connect to delivery outcomes.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="group bg-white border border-outline-variant/35 rounded-lg p-5 shadow-[0_14px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)] transition-shadow">
                                      <div className="w-11 h-11 rounded-lg bg-[#E0F7FA]/60 border border-secondary/20 flex items-center justify-center mb-4"><span className="material-symbols-outlined text-secondary">data_object</span></div>
                                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Data Processing</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Build reliable ingestion, validation, transformation, and orchestration pipelines for cloud-hosted operational data.</p>
                                  </div>
                                  <div className="group bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5 shadow-[0_14px_32px_rgba(15,23,42,0.05)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.09)] transition-shadow">
                                      <div className="w-11 h-11 rounded-lg bg-white border border-primary/20 flex items-center justify-center mb-4"><span className="material-symbols-outlined text-primary">monitoring</span></div>
                                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Data Visualization</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Create governed dashboards, service scorecards, and executive views that make infrastructure performance visible.</p>
                                  </div>
                                  <div className="group bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5 shadow-[0_14px_32px_rgba(15,23,42,0.05)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.09)] transition-shadow">
                                      <div className="w-11 h-11 rounded-lg bg-white border border-secondary/20 flex items-center justify-center mb-4"><span className="material-symbols-outlined text-secondary">query_stats</span></div>
                                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Predictive Analytics</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Use cloud telemetry, demand signals, and service data to forecast capacity, risk, cost, and reliability trends.</p>
                                  </div>
                                  <div className="group bg-white border border-outline-variant/35 rounded-lg p-5 shadow-[0_14px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_42px_rgba(15,23,42,0.10)] transition-shadow">
                                      <div className="w-11 h-11 rounded-lg bg-[#E0F7FA]/60 border border-secondary/20 flex items-center justify-center mb-4"><span className="material-symbols-outlined text-secondary">cloud_sync</span></div>
                                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Cloud Data Management</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Manage storage, access, lifecycle, lineage, and cost controls across cloud data environments.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Migration &amp; Modernization</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Modernize infrastructure without losing control of cost, security, or service quality.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">We align migration, hybrid architecture, automation, observability, and cloud governance so teams can operate new platforms with confidence after launch.</p>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                      <div className="border border-outline-variant/30 rounded-lg p-4 bg-white/85"><strong className="text-primary text-xl block">01</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Discover</span></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4 bg-white/85"><strong className="text-primary text-xl block">02</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Design</span></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4 bg-white/85"><strong className="text-primary text-xl block">03</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Migrate</span></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4 bg-white/85"><strong className="text-primary text-xl block">04</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Optimize</span></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/technology/cloude/2-optimized.webp")} alt="Cloud migration and infrastructure modernization planning" className="w-full h-60 md:h-72 object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.82fr_1.18fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Hybrid &amp; Multi-Cloud</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Architecture that keeps platforms connected, portable, and governed.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We design cloud patterns for organizations that need public cloud scale, private environment control, and practical integration with existing infrastructure.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  <div className="border border-outline-variant/35 rounded-lg p-4 bg-white shadow-sm"><span className="font-label-caps text-label-caps text-secondary uppercase">Landing zones</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Accounts, subscriptions, policies, network boundaries, and shared services.</p></div>
                                  <div className="border border-outline-variant/35 rounded-lg p-4 bg-[#E0F7FA]/30 shadow-sm"><span className="font-label-caps text-label-caps text-secondary uppercase">Connectivity</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Secure routing, segmentation, service access, and traffic management.</p></div>
                                  <div className="border border-outline-variant/35 rounded-lg p-4 bg-[#E0F7FA]/30 shadow-sm"><span className="font-label-caps text-label-caps text-secondary uppercase">Portability</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Containers, deployment templates, reusable services, and environment parity.</p></div>
                                  <div className="border border-outline-variant/35 rounded-lg p-4 bg-white shadow-sm"><span className="font-label-caps text-label-caps text-secondary uppercase">Observability</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Metrics, logs, traces, service health, and event-driven operating signals.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-7 items-stretch">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">DevOps &amp; Automation</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Infrastructure delivery that is repeatable, reviewed, and measurable.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">DGL helps platform and application teams adopt infrastructure as code, CI/CD pipelines, release controls, and environment automation without losing governance discipline.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Infrastructure as Code</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Reusable modules, policy checks, version control, and environment consistency.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">CI/CD pipelines</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Automated build, test, deployment, approval, and release evidence flows.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Containers and Kubernetes</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Cluster design, workload placement, scaling policies, and operational guardrails.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Serverless patterns</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Event-led services for workloads that benefit from low operations overhead.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Cloud Governance Framework</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Control cloud risk without slowing useful delivery.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Governance works best when teams can see the rules, automate the checks, and resolve issues before they become operational risk.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="material-symbols-outlined text-secondary mb-3">admin_panel_settings</span><h3 className="font-headline-sm text-headline-sm mb-2">Security posture</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Identity, encryption, configuration, vulnerability, and privileged access controls.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="material-symbols-outlined text-secondary mb-3">policy</span><h3 className="font-headline-sm text-headline-sm mb-2">Compliance evidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Policy mapping, control ownership, audit trails, and exception management.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5 shadow-sm"><span className="material-symbols-outlined text-secondary mb-3">support_agent</span><h3 className="font-headline-sm text-headline-sm mb-2">Cloud operations</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Monitoring, incident response, backup, disaster recovery, and service reviews.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-12 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.74fr_1.26fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Cloud Management &amp; Monetization Roadmap</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Turn cloud operations into measurable service value.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">A step-by-step flow for moving from platform planning to optimized services and monetized data-enabled offerings.</p>
                              </div>
                              <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-white shadow-[0_18px_42px_rgba(15,23,42,0.06)] p-5 md:p-6">
                                  <div className="hidden md:block absolute left-10 right-10 top-[4.15rem] h-px bg-secondary/25"></div>
                                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                      <div className="relative"><span className="relative z-10 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-label-caps text-label-caps shadow-sm mb-4">01</span><h3 className="font-headline-sm text-headline-sm mb-2">Strategy Planning</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Define use cases, operating model, governance rules, and monetization goals.</p></div>
                                      <div className="relative"><span className="relative z-10 w-11 h-11 rounded-full bg-white border border-secondary/35 text-secondary flex items-center justify-center font-label-caps text-label-caps shadow-sm mb-4">02</span><h3 className="font-headline-sm text-headline-sm mb-2">Infrastructure Setup</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Prepare secure cloud environments, landing zones, network access, and monitoring.</p></div>
                                      <div className="relative"><span className="relative z-10 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-label-caps text-label-caps shadow-sm mb-4">03</span><h3 className="font-headline-sm text-headline-sm mb-2">Data Integration</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Connect sources, pipelines, APIs, reporting layers, and service data products.</p></div>
                                      <div className="relative"><span className="relative z-10 w-11 h-11 rounded-full bg-white border border-secondary/35 text-secondary flex items-center justify-center font-label-caps text-label-caps shadow-sm mb-4">04</span><h3 className="font-headline-sm text-headline-sm mb-2">Optimization</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Improve cost, performance, reliability, usage patterns, and operational automation.</p></div>
                                      <div className="relative"><span className="relative z-10 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-label-caps text-label-caps shadow-sm mb-4">05</span><h3 className="font-headline-sm text-headline-sm mb-2">Monetization</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Package analytics, platform services, and managed offerings into measurable value streams.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto pt-8 pb-20">
                          <div className="bg-white border border-outline-variant/35 rounded-xl px-6 py-8 md:px-10 md:py-10 text-center shadow-sm">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Cloud Infrastructure Next Step</span>
                              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Ready to Transform Your Data Infrastructure?</h2>
                              <p className="font-body-md text-body-md font-medium text-on-surface-variant max-w-2xl mx-auto mb-6">Build a cloud and analytics foundation that supports scalable infrastructure, managed services growth, and stronger operational decisions.</p>
                              <div className="flex flex-col sm:flex-row justify-center gap-3">
                                  <Link className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-lg px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/90 transition-colors shadow-sm" href="#">Get Started</Link>
                                  <Link className="inline-flex items-center justify-center gap-2 bg-[#E0F7FA]/30 border border-secondary/30 text-secondary rounded-lg px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white hover:border-primary/40 hover:text-primary transition-colors" href="#">Contact Us</Link>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
