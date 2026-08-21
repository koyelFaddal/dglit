"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function CybersecurityRisk() {
  return (
    <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-24 md:-mt-8 min-h-[620px] lg:min-h-[660px] flex items-center pt-24 md:pt-20 pb-12 overflow-hidden bg-white -mx-gutter">
                          <div className="absolute inset-0 z-0">
                              <img src={assetPath("/asset/insight/cyber_security/1.png")} alt="Cyber security enterprise risk monitoring and secure platform operations" className="w-full h-full object-cover object-center opacity-85 blur-[2px] md:blur-[1px] scale-[1.01]" />
                              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/78 to-white/24"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/76 via-transparent to-white/16"></div>
                              <div className="absolute left-0 top-0 h-full w-2/3 bg-[#E0F7FA]/40 blur-3xl opacity-90"></div>
                          </div>
                          <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                              <div className="max-w-3xl">
                                  <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5">
                                      <span>Insights</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-on-surface sm:text-primary">Cybersecurity &amp; Risk</span>
                                  </nav>
                                  <span className="inline-block bg-[#E0F7FA]/60 border border-secondary/20 text-secondary font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">Enterprise Security Architecture</span>
                                  <h1 className="font-display-lg text-[31px] leading-[39px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-on-surface mb-6">Cyber Security &amp; Enterprise Risk for Resilient Platforms</h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">DGL helps organizations strengthen cyber risk management, identity protection, secure enterprise platforms, threat monitoring, and compliance systems without slowing digital operations.</p>
                                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 sm:px-7 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Review Risk Posture <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white/85 border border-primary/35 text-primary px-5 sm:px-7 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#E0F7FA]/30 transition-all" href="#">Discuss Security Roadmap <span className="material-symbols-outlined text-[18px]">support_agent</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white overflow-hidden">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
                                  <div className="p-6 md:p-8 lg:p-10 bg-[#E0F7FA]/35 border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise Risk Intelligence Layer</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Convert risk signals into board-ready security decisions.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Risk intelligence connects assets, threats, controls, business impact, and remediation ownership so cyber exposure is visible before it becomes disruption.</p>
                                  </div>
                                  <div className="p-5 md:p-6 lg:p-8">
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                          <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Asset context</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Critical systems, owners, data sensitivity, and service dependencies.</p></div>
                                          <div className="rounded-xl border border-secondary/20 bg-[#E0F7FA]/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Risk scoring</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Likelihood, impact, exploitability, control maturity, and remediation urgency.</p></div>
                                          <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Action ledger</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Named owners, due dates, exceptions, evidence, and residual exposure.</p></div>
                                      </div>
                                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                          <div className="rounded-lg border border-outline-variant/30 bg-[#E0F7FA]/25 p-4"><span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Control proof, scan history, and exception notes stay attached to each risk item.</p></div>
                                          <div className="rounded-lg border border-outline-variant/30 bg-white p-4"><span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Cadence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">High-impact issues move through review, escalation, and funding decisions weekly.</p></div>
                                          <div className="rounded-lg border border-outline-variant/30 bg-[#E0F7FA]/25 p-4"><span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">Outcome</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Leaders see residual exposure, response progress, and blocked remediation clearly.</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.48fr_0.52fr] gap-6 lg:gap-8 items-stretch">
                              <div className="relative min-h-[320px] md:min-h-[420px] rounded-2xl overflow-hidden border border-outline-variant/35">
                                  <img src={assetPath("/asset/insight/cyber_security/2.png")} alt="Identity and access security operating model" className="absolute inset-0 h-full w-full object-cover object-center" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/42 to-white/10"></div>
                                  <div className="absolute left-5 right-5 bottom-5 rounded-xl bg-white/90 border border-white/70 p-5 shadow-sm">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Identity command layer</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Every access path is tied to role, device, privilege level, and risk condition.</p>
                                  </div>
                              </div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-surface-container-lowest p-5 md:p-6">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Identity &amp; Access Protection Framework</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-5">Secure access without creating operational drag.</h2>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary mb-3">passkey</span><span className="font-label-caps text-label-caps text-primary uppercase block">Adaptive authentication</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">MFA, device posture, geo-risk, and session policy.</p></div>
                                      <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-secondary mb-3">admin_panel_settings</span><span className="font-label-caps text-label-caps text-primary uppercase block">Privileged access</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Approval flows, vaulting, monitoring, and break-glass control.</p></div>
                                      <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-secondary mb-3">manage_accounts</span><span className="font-label-caps text-label-caps text-primary uppercase block">Lifecycle governance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Joiner, mover, leaver, recertification, and exception reviews.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary mb-3">lan</span><span className="font-label-caps text-label-caps text-primary uppercase block">Federated trust</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Partners, vendors, service identities, APIs, and cloud tenants.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="max-w-3xl mb-8">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Cyber Threat Monitoring System</span>
                              <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Monitor the signals that matter to enterprise continuity.</h2>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <div className="rounded-2xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Telemetry</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Endpoint, identity, cloud, network, application, and data movement signals.</p></div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-[#E0F7FA]/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Correlation</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Suspicious behavior linked across users, systems, privileges, and services.</p></div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Triage</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Severity, owner, affected assets, business impact, and containment priority.</p></div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-[#E0F7FA]/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Containment</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Playbooks, isolation steps, communication triggers, and evidence capture.</p></div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-primary-fixed/25 p-6 md:p-8 lg:p-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] gap-8 lg:gap-12 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Secure API &amp; Integration Security</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Protect the connections that move enterprise data.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Integration security covers API access, token handling, service accounts, data classification, rate limits, logging, and third-party exchange controls.</p>
                                  </div>
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-5">
                                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                          <div className="rounded-lg bg-[#E0F7FA]/35 p-4"><span className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Authorize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Scopes, keys, tokens, and policy enforcement.</p></div>
                                          <div className="rounded-lg bg-white border border-outline-variant/30 p-4"><span className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Inspect</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Payload validation, anomaly detection, and logging.</p></div>
                                          <div className="rounded-lg bg-[#E0F7FA]/35 p-4"><span className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Assure</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Evidence, owners, SLA, and exception review.</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_0.42fr] gap-6 lg:gap-8 items-stretch">
                              <div className="rounded-2xl border border-outline-variant/35 bg-white p-6 md:p-8 lg:p-10">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Cloud Security Architecture</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-6">Design guardrails into every cloud environment.</h2>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Landing zones</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Network, identity, logging, encryption, and environment patterns.</p></div>
                                      <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Posture checks</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Configuration drift, policy violations, exposed services, and remediation.</p></div>
                                      <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Workload defense</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Runtime protection, secrets, containers, pipelines, and access boundaries.</p></div>
                                      <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Cost-aware security</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Controls that balance risk, resilience, and platform economics.</p></div>
                                  </div>
                              </div>
                              <div className="relative min-h-[300px] rounded-2xl overflow-hidden border border-outline-variant/35">
                                  <img src={assetPath("/asset/insight/cyber_security/3.png")} alt="Cloud security architecture and monitoring controls" className="absolute inset-0 h-full w-full object-cover object-center" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/28 to-transparent"></div>
                                  <div className="absolute left-5 right-5 bottom-5 rounded-xl bg-white/90 border border-white/70 p-4 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Cloud control plane</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Policy, detection, evidence, and ownership aligned across cloud services.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-surface-container-lowest p-5 md:p-6">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_0.65fr] gap-6 lg:gap-8">
                                  <div className="p-2 md:p-4">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data Protection &amp; Compliance Layer</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface">Protect sensitive data across its lifecycle.</h2>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Classify</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Sensitive fields, documents, stores, and retention rules.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Encrypt</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Keys, transit, storage, backups, and secrets handling.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Govern</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Access, sharing, residency, privacy, and retention evidence.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Audit</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Traceability, exceptions, reviews, and regulatory proof.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white p-6 md:p-8">
                              <div className="grid grid-cols-1 xl:grid-cols-[0.40fr_0.60fr] gap-8 lg:gap-12 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Real-Time Threat Detection Dashboard</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Give security teams a current view of operational risk.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Dashboards should prioritize what can harm business services, not simply list every technical alert.</p>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                      <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="text-[32px] font-display-lg text-primary">12</span><p className="font-label-caps text-label-caps text-primary uppercase mt-3">Critical assets watched</p></div>
                                      <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><span className="text-[32px] font-display-lg text-secondary">4h</span><p className="font-label-caps text-label-caps text-primary uppercase mt-3">Containment target</p></div>
                                      <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><span className="text-[32px] font-display-lg text-primary">98%</span><p className="font-label-caps text-label-caps text-primary uppercase mt-3">Control evidence freshness</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Zero Trust Security Model</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Verify every request with context.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Zero trust is an operating model for identity, device, network, workload, data, and application decisions.</p>
                              </div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-gradient-to-br from-white via-[#F7FCFD] to-[#E0F7FA]/55 p-5 md:p-6">
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Never assume</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Access is evaluated continuously using risk context.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Limit blast radius</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Segmentation reduces movement across systems.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Log evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Every decision produces traceable security proof.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white overflow-hidden">
                              <div className="grid grid-cols-1 md:grid-cols-[0.32fr_0.68fr]">
                                  <div className="p-6 md:p-8 bg-[#E0F7FA]/35 border-b md:border-b-0 md:border-r border-outline-variant/30">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Incident Response &amp; Recovery System</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface">Respond with evidence, speed, and control.</h2>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/30">
                                      <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Prepare</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Runbooks, contacts, backups, and decision authority.</p></div>
                                      <div className="p-5 bg-white"><span className="font-label-caps text-label-caps text-primary uppercase">Contain</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Isolate accounts, systems, data paths, and affected services.</p></div>
                                      <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Recover</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Restore clean services, validate integrity, and monitor recurrence.</p></div>
                                      <div className="p-5 bg-white"><span className="font-label-caps text-label-caps text-primary uppercase">Improve</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Update controls, training, architecture, and detection logic.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-[#E0F7FA]/60 via-white to-primary-fixed/30 p-6 md:p-8 lg:p-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.52fr_0.48fr] gap-8 lg:gap-12 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise Security Analytics</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Use analytics to prioritize defensive investment.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Security analytics reveals recurring incidents, control debt, identity risk, data exposure, and resilience gaps that need funding attention.</p>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Trend view</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Patterns across incidents, systems, teams, and vendors.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Investment view</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Controls linked to risk reduction and resilience outcomes.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto pt-4 pb-12 md:pb-16">
                          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-[#E0F7FA]/55 via-white to-primary-fixed/25 p-6 md:p-8 lg:p-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Security Readiness</span>
                                      <h2 className="font-headline-md text-[24px] leading-[31px] sm:text-headline-md sm:leading-[36px] text-on-surface mb-3">Strengthen enterprise security before risk becomes disruption.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Assess identity controls, threat monitoring, compliance evidence, recovery readiness, and the highest-priority actions needed to protect critical platforms.</p>
                                  </div>
                                  <Link className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Start Security Risk Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
