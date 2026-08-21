"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function Healthcare() {
  return (
    <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-8 mb-8 md:mb-10 -mx-gutter min-h-[540px] md:min-h-[560px] lg:min-h-[545px] flex items-end lg:items-start overflow-hidden bg-white">
                          <img src={assetPath("/asset/industry/health/1.png")} alt="Healthcare digital transformation for connected patient services" className="absolute inset-0 w-full h-full object-cover blur-[1.5px] scale-[1.01]" />
                          <div className="absolute inset-0 bg-white/78"></div>
                          <div className="absolute inset-0 bg-[#E0F7FA]/30"></div>
                          <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pb-10 md:pb-12 pt-10 md:pt-12">
                              <div className="max-w-4xl">
                                  <nav className="flex flex-wrap items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-6">
                                      <span>Industry</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-primary">Healthcare</span>
                                  </nav>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">Healthcare Transformation</span>
                                  <h1 className="font-headline-lg text-headline-lg md:font-display-lg md:text-display-lg text-on-surface mb-5 md:mb-6 max-w-2xl md:max-w-3xl">Connected care for better health outcomes.</h1>
                                  <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant max-w-2xl mb-8">DGL helps hospitals, clinics, medical networks, and public health organizations modernize care journeys, strengthen clinical operations, and build secure digital foundations for responsive healthcare delivery with digital health specialists supporting practical adoption.</p>
                                  <div className="flex flex-col sm:flex-row gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Plan Care Modernization <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/60 text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-primary transition-all" href="#">Assess Readiness <span className="material-symbols-outlined text-[18px]">fact_check</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 px-4 lg:px-0">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Healthcare Priorities</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Modernization shaped around care access, clinical quality, and operational control.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Healthcare organizations need transformation programs that improve patient experience while respecting clinical workflows, privacy obligations, regulatory controls, and the realities of busy care teams.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <div className="border-l-4 border-primary bg-white p-4"><h3 className="font-headline-sm text-headline-sm mb-2">Patient access</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Simpler appointment, referral, intake, and follow-up journeys across channels.</p></div>
                                      <div className="border-l-4 border-secondary bg-[#E0F7FA]/30 p-4"><h3 className="font-headline-sm text-headline-sm mb-2">Clinical reliability</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Processes, data, and governance that support safe, consistent care delivery.</p></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/industry/health/2.png")} alt="Healthcare professionals coordinating digital patient services" className="w-full h-[320px] md:h-[420px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 px-4 lg:px-6 md:px-8 rounded-none lg:rounded-xl">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-10 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Care System Framework</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 max-w-xl">A connected operating model for access, care flow, and health intelligence.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">DGL frames healthcare modernization as a set of coordinated service lanes, helping leaders improve the front door, clinical handoffs, digital records, and measurable care outcomes without overloading teams.</p>
                                  <div className="mt-7 bg-white/80 border border-outline-variant/35 rounded-xl p-5 max-w-2xl">
                                      <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Readiness Focus</span>
                                      <div className="space-y-5">
                                          <div><div className="flex items-center justify-between gap-4 mb-2"><span className="font-body-sm text-body-sm font-semibold text-on-surface">Care access alignment</span><span className="font-label-caps text-label-caps text-secondary uppercase">High</span></div><div className="h-2 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full w-[82%] bg-primary rounded-full"></div></div></div>
                                          <div><div className="flex items-center justify-between gap-4 mb-2"><span className="font-body-sm text-body-sm font-semibold text-on-surface">Workflow ownership</span><span className="font-label-caps text-label-caps text-secondary uppercase">Active</span></div><div className="h-2 bg-surface-container-high rounded-full overflow-hidden"><div className="h-full w-[68%] bg-secondary rounded-full"></div></div></div>
                                      </div>
                                  </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                                  <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6 min-h-[230px] flex flex-col justify-center"><span className="material-symbols-outlined text-secondary mb-3">clinical_notes</span><h3 className="font-headline-sm text-headline-sm mb-2">Clinical Workflow</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Handoffs, diagnostics, discharge readiness, escalation rules, and team ownership designed around real care settings.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6 min-h-[230px] flex flex-col justify-center"><span className="material-symbols-outlined text-secondary mb-3">folder_shared</span><h3 className="font-headline-sm text-headline-sm mb-2">Electronic Health Systems</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Records, documents, interoperability, privacy controls, and adoption support for consistent information use.</p></div>
                                  <div className="md:col-span-2 bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6"><div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-5 lg:gap-6 items-start lg:items-center"><div><span className="font-label-caps text-label-caps text-primary uppercase">Insight Loop</span><h3 className="font-headline-sm text-headline-sm mt-2">Use care data to improve the next service decision.</h3></div><div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><p className="font-body-sm text-body-sm text-on-surface-variant border-l-4 border-primary pl-4">Population health cohorts and outreach priorities.</p><p className="font-body-sm text-body-sm text-on-surface-variant border-l-4 border-secondary pl-4">Quality evidence, audit trails, and outcomes reporting.</p><p className="font-body-sm text-body-sm text-on-surface-variant border-l-4 border-primary pl-4">Capacity, waiting list, and operational performance signals.</p></div></div></div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14">
                          <div className="bg-[#E0F7FA]/30 rounded-none lg:rounded-xl px-4 md:px-6 lg:px-8 py-8 md:py-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Patient Journey</span>
                                      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Build a calmer route from first contact to follow-up care.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant mb-6">We shape healthcare journeys as connected service moments, so patients know what happens next and teams can act with the right information.</p>
                                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                          <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="material-symbols-outlined text-primary mb-3">event_available</span><h3 className="font-headline-sm text-headline-sm mb-2">Before visit</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Clear intake, reminders, referral status, and preparation guidance.</p></div>
                                          <div className="bg-white border border-outline-variant/35 rounded-lg p-4 sm:mt-6"><span className="material-symbols-outlined text-primary mb-3">stethoscope</span><h3 className="font-headline-sm text-headline-sm mb-2">During care</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Shared notes, task ownership, diagnostics, and communication prompts.</p></div>
                                          <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="material-symbols-outlined text-primary mb-3">home_health</span><h3 className="font-headline-sm text-headline-sm mb-2">After care</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Discharge actions, remote check-ins, care gaps, and recovery support.</p></div>
                                      </div>
                                  </div>
                                  <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-white shadow-sm">
                                      <img src={assetPath("/asset/industry/health/3.png")} alt="Healthcare innovation and connected care operations" className="w-full h-[260px] sm:h-[300px] md:h-[390px] object-cover" />
                                      <div className="absolute left-4 right-4 bottom-4 grid grid-cols-3 gap-2">
                                          <div className="bg-white/90 border border-white rounded-lg p-3"><span className="font-label-caps text-label-caps text-primary uppercase">Access</span></div>
                                          <div className="bg-white/90 border border-white rounded-lg p-3"><span className="font-label-caps text-label-caps text-primary uppercase">Care</span></div>
                                          <div className="bg-white/90 border border-white rounded-lg p-3"><span className="font-label-caps text-label-caps text-primary uppercase">Follow-up</span></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 px-4 lg:px-0 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
                              <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Clinical Operations</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Improve flow without adding burden to care teams.</h2><p className="font-body-md text-body-md text-on-surface-variant">We help healthcare leaders identify operational friction, redesign handoffs, and embed digital support where it makes clinical work clearer and safer.</p></div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Demand</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Referrals, triage, scheduling, capacity signals, and waiting list management.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Flow</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Admissions, diagnostics, theatre, bed management, and discharge coordination.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Safety</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Checklists, escalation, medication workflows, clinical risk, and audit readiness.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Experience</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Communication standards, wait transparency, feedback loops, and service recovery.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 px-4 lg:px-0">
                          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-stretch">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-8 shadow-sm"><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Digital Health Platform</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Connect records, workflows, and service channels into one care ecosystem.</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div><span className="material-symbols-outlined text-primary mb-3">folder_shared</span><h3 className="font-headline-sm text-headline-sm mb-2">Health records</h3><p className="font-body-sm text-body-sm text-on-surface-variant">EHR workflows, document management, data quality, and role-based access.</p></div><div><span className="material-symbols-outlined text-primary mb-3">video_call</span><h3 className="font-headline-sm text-headline-sm mb-2">Virtual care</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Telehealth models, remote monitoring, digital front door, and hybrid pathways.</p></div><div><span className="material-symbols-outlined text-primary mb-3">integration_instructions</span><h3 className="font-headline-sm text-headline-sm mb-2">Interoperability</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Integration patterns, shared identifiers, referral exchange, and reporting feeds.</p></div></div></div>
                              <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-8"><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Governance Essentials</span><div className="space-y-5"><div className="flex gap-4"><span className="material-symbols-outlined text-primary mt-1">verified_user</span><div><h3 className="font-headline-sm text-headline-sm mb-1">Privacy by design</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Consent, retention, access rules, audit logs, and secure information sharing.</p></div></div><div className="flex gap-4"><span className="material-symbols-outlined text-primary mt-1">rule_settings</span><div><h3 className="font-headline-sm text-headline-sm mb-1">Regulatory readiness</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Controls for standards, clinical policies, quality reporting, and vendor assurance.</p></div></div><div className="flex gap-4"><span className="material-symbols-outlined text-primary mt-1">groups_3</span><div><h3 className="font-headline-sm text-headline-sm mb-1">Adoption ownership</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Clinical champions, training rhythms, support models, and change communications.</p></div></div></div></div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none lg:rounded-xl px-4 lg:px-6 md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 items-center">
                              <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Healthcare Data &amp; Analytics</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Turn fragmented operational and clinical data into dependable insight.</h2><p className="font-body-md text-body-md text-on-surface-variant">DGL defines the governance, measurement, and analytics foundations healthcare teams need to manage capacity, quality, outcomes, and population health priorities.</p></div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Capacity insight</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Waiting lists, demand forecasts, resource use, and operational bottlenecks.</p></div>
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Quality measures</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Clinical indicators, incident trends, outcomes, and safety improvement evidence.</p></div>
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Population health</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Cohorts, risk factors, outreach effectiveness, and prevention program performance.</p></div>
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Executive reporting</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Board packs, service dashboards, compliance evidence, and benefits tracking.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 px-4 lg:px-0">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 items-center">
                              <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Workforce Enablement</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Support clinicians and operational teams through practical change.</h2><p className="font-body-md text-body-md text-on-surface-variant">Successful health transformation gives staff clear ownership, usable tools, and adoption support that fits real care settings rather than adding another layer of administration.</p></div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3"><div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">person_check</span><h3 className="font-headline-sm text-headline-sm mb-2">Role clarity</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Defined responsibilities for triage, care coordination, records, and service recovery.</p></div><div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">school</span><h3 className="font-headline-sm text-headline-sm mb-2">Learning support</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Training, coaching, workflow guides, and release readiness support.</p></div><div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">forum</span><h3 className="font-headline-sm text-headline-sm mb-2">Feedback loops</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Frontline input, adoption signals, change refinement, and leadership updates.</p></div></div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-12 px-4 lg:px-0 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
                              <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Outcome Scorecard</span><h2 className="font-headline-lg text-headline-lg text-on-surface">Measure progress across patient access, care reliability, and operational performance.</h2></div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><strong className="text-primary text-3xl block mb-2">360</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Patient view</span></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-4"><strong className="text-primary text-3xl block mb-2">1x</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Care record</span></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><strong className="text-primary text-3xl block mb-2">4</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Care domains</span></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-4"><strong className="text-primary text-3xl block mb-2">90d</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Roadmap sprint</span></div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max pt-10 pb-14 px-4 lg:px-0">
                          <div className="border-t border-outline-variant/40 pt-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
                                  <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Healthcare Partnership</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Create a transformation rhythm healthcare teams can actually sustain.</h2><p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">DGL works with leaders and frontline teams to turn priority care improvements into a practical operating cadence with clear ownership, adoption support, and measurable service evidence.</p></div>
                                  <div className="space-y-4">
                                      <div className="grid grid-cols-[88px_1fr] gap-4 items-start"><div className="bg-[#E0F7FA]/30 border border-secondary/25 rounded-lg p-3 text-center"><strong className="text-primary text-2xl block">01</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Listen</span></div><div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Map the care reality</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Work with clinical, operational, digital, and patient-facing teams to expose friction, safety constraints, and adoption blockers.</p></div></div>
                                      <div className="grid grid-cols-[88px_1fr] gap-4 items-start"><div className="bg-white border border-outline-variant/35 rounded-lg p-3 text-center"><strong className="text-primary text-2xl block">02</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Shape</span></div><div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Build the delivery cadence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Define waves, governance rituals, change ownership, benefits measures, and decision checkpoints for each improvement area.</p></div></div>
                                      <div className="grid grid-cols-[88px_1fr] gap-4 items-start"><div className="bg-[#E0F7FA]/30 border border-secondary/25 rounded-lg p-3 text-center"><strong className="text-primary text-2xl block">03</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Scale</span></div><div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Prove and extend impact</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Use adoption signals, quality evidence, workforce feedback, and patient experience measures to guide the next release.</p></div></div>
                                  </div>
                              </div>
                              <div className="mt-8 bg-white border border-outline-variant/35 rounded-xl overflow-hidden shadow-sm">
                                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0 lg:items-stretch">
                                      <div className="p-5 md:p-7 bg-[#E0F7FA]/30">
                                          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Next Step</span>
                                          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Start with a focused healthcare readiness review.</h3>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl">Confirm priority care journeys, digital constraints, workforce readiness, and the delivery path before committing investment.</p>
                                      </div>
                                      <div className="p-5 md:p-7 border-t lg:border-t-0 lg:border-l border-outline-variant/30 flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[320px] lg:justify-center bg-white">
                                          <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start Assessment <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                          <Link className="inline-flex items-center justify-center gap-2 bg-white border border-secondary/30 text-secondary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-[#E0F7FA]/30 transition-colors" href="#">Discuss Program</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
