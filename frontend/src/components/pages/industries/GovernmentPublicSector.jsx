import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function GovernmentPublicSector() {
  return (
    <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-8 mb-12 -mx-gutter min-h-[620px] md:min-h-[680px] flex items-end overflow-hidden bg-white">
                          <img src={assetPath("/asset/industry/government_public_sector/1-optimized.webp")} alt="Government digital transformation and public service modernization" className="absolute inset-0 w-full h-full object-cover blur-[1.5px] scale-[1.01]" fetchPriority="high" loading="eager" decoding="async" />
                          <div className="absolute inset-0 bg-white/78"></div>
                          <div className="absolute inset-0 bg-[#E0F7FA]/30"></div>
                          <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pb-20 md:pb-28 pt-12">
                              <div className="max-w-4xl">
                                  <nav className="flex flex-wrap items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-6">
                                      <span>Industry</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-primary">Government &amp; Public Sector</span>
                                  </nav>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">Smart Governance Enablement</span>
                                  <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-3xl">Modern public services built around trust, access, and measurable impact.</h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">DGL helps government departments, municipalities, regulators, and public institutions modernize services, strengthen delivery governance, and use technology to improve outcomes for citizens and communities.</p>
                                  <div className="flex flex-col sm:flex-row gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Plan Modernization <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/60 text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-primary transition-all" href="#">Assess Readiness <span className="material-symbols-outlined text-[18px]">fact_check</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Public Value Priorities</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Transformation that respects mandate, policy, and public accountability.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Public sector modernization requires more than new platforms. Programs need clear policy alignment, inclusive service design, transparent governance, secure data practices, and delivery models that can withstand public scrutiny.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <div className="border-l-4 border-primary bg-white p-4"><h3 className="font-headline-sm text-headline-sm mb-2">Citizen access</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Simpler journeys across digital, assisted, and in-person channels.</p></div>
                                      <div className="border-l-4 border-secondary bg-[#E0F7FA]/30 p-4"><h3 className="font-headline-sm text-headline-sm mb-2">Institutional control</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Decision rights, audit evidence, and service ownership built into delivery.</p></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/industry/government_public_sector/2-optimized.webp")} alt="Public sector service planning and modernization workshop" className="w-full h-[320px] md:h-[420px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                          </div>
                      </section>
                      <section className="-mx-gutter sm:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 px-4 sm:px-6 md:px-8 rounded-none sm:rounded-xl">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 items-stretch">
                              <div className="bg-white/70 border border-outline-variant/35 rounded-xl p-5 md:p-7 flex flex-col justify-between w-full">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Transformation Capabilities</span>
                                      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A public service operating map from mandate to measurable results.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">DGL organizes modernization around the chain of responsibility public agencies manage every day: policy intent, citizen access, secure operations, and accountable delivery evidence.</p>
                                  </div>
                                  <div className="mt-6 grid grid-cols-1 min-[360px]:grid-cols-2 gap-3">
                                      <div className="border-t-2 border-primary pt-3"><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Front office</span><strong className="block text-primary text-2xl mt-1">Access</strong></div>
                                      <div className="border-t-2 border-secondary pt-3"><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Back office</span><strong className="block text-secondary text-2xl mt-1">Control</strong></div>
                                  </div>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden w-full">
                                  <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] border-b border-outline-variant/30">
                                      <div className="bg-[#E0F7FA]/30 p-4 md:p-5 flex items-center gap-3"><span className="material-symbols-outlined text-primary">account_balance</span><span className="font-label-caps text-label-caps text-primary uppercase">Mandate</span></div>
                                      <div className="p-4 md:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                          <div><h3 className="font-headline-sm text-headline-sm mb-1">Digital government</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Roadmaps for portals, case platforms, licensing services, and secure digital workflows.</p></div>
                                          <div><h3 className="font-headline-sm text-headline-sm mb-1">Regulatory enablement</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Policy implementation, compliance workflows, inspection models, and reporting evidence.</p></div>
                                      </div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] border-b border-outline-variant/30">
                                      <div className="bg-white p-4 md:p-5 flex items-center gap-3"><span className="material-symbols-outlined text-secondary">groups</span><span className="font-label-caps text-label-caps text-secondary uppercase">Service</span></div>
                                      <div className="p-4 md:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#E0F7FA]/20">
                                          <div><h3 className="font-headline-sm text-headline-sm mb-1">Citizen experience</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Journey redesign, accessibility improvements, service standards, and contact center alignment.</p></div>
                                          <div><h3 className="font-headline-sm text-headline-sm mb-1">Infrastructure programs</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Smart city, transport, housing, facilities, and community infrastructure transformation support.</p></div>
                                      </div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[180px_1fr]">
                                      <div className="bg-[#E0F7FA]/30 p-4 md:p-5 flex items-center gap-3"><span className="material-symbols-outlined text-primary">hub</span><span className="font-label-caps text-label-caps text-primary uppercase">Assurance</span></div>
                                      <div className="p-4 md:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                          <div><h3 className="font-headline-sm text-headline-sm mb-1">Program governance</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Portfolio cadence, risk controls, funding gates, vendor coordination, and PMO discipline.</p></div>
                                          <div><h3 className="font-headline-sm text-headline-sm mb-1">Performance insight</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Dashboards, service measures, benefits tracking, and operational decision support.</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
                              <img src={assetPath("/asset/industry/government_public_sector/3-optimized.webp")} alt="Citizen service delivery and government operations" className="w-full h-[300px] md:h-[390px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Citizen Service Journey</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-5">Design services around the moments that matter.</h2>
                                  <div className="space-y-4">
                                      <div className="flex gap-4"><div className="w-10 h-10 rounded-lg bg-[#E0F7FA]/30 border border-secondary/30 flex items-center justify-center text-secondary font-bold shrink-0">1</div><div><h3 className="font-headline-sm text-headline-sm mb-1">Discover and qualify</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Help users understand eligibility, documents, fees, timelines, and support routes before they apply.</p></div></div>
                                      <div className="flex gap-4"><div className="w-10 h-10 rounded-lg bg-[#E0F7FA]/30 border border-secondary/30 flex items-center justify-center text-secondary font-bold shrink-0">2</div><div><h3 className="font-headline-sm text-headline-sm mb-1">Apply and track</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Reduce avoidable contact through clear forms, status visibility, notifications, and assisted digital options.</p></div></div>
                                      <div className="flex gap-4"><div className="w-10 h-10 rounded-lg bg-[#E0F7FA]/30 border border-secondary/30 flex items-center justify-center text-secondary font-bold shrink-0">3</div><div><h3 className="font-headline-sm text-headline-sm mb-1">Resolve and improve</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Connect case outcomes, complaints, service data, and policy feedback into continuous improvement.</p></div></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Governance &amp; Delivery</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Program control without slowing essential delivery.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">DGL establishes the controls agencies need to manage complex modernization portfolios while keeping delivery teams focused on tangible service improvements.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Mandate</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Policy outcomes, statutory duties, funding conditions, and stakeholder commitments.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Controls</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Risk logs, decision records, assurance gates, and procurement alignment.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Delivery</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Integrated teams, sprint evidence, change releases, and vendor coordination.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Impact</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Benefits tracking, service measures, financial visibility, and public reporting.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-stretch">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-8 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Modernization Roadmap</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">From current-state pressure to funded delivery plan.</h2>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                      <div><span className="material-symbols-outlined text-primary mb-3">manage_search</span><h3 className="font-headline-sm text-headline-sm mb-2">Assess</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Map services, policies, systems, risks, data quality, and operating constraints.</p></div>
                                      <div><span className="material-symbols-outlined text-primary mb-3">architecture</span><h3 className="font-headline-sm text-headline-sm mb-2">Design</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Define future journeys, target architecture, governance, and adoption needs.</p></div>
                                      <div><span className="material-symbols-outlined text-primary mb-3">rocket_launch</span><h3 className="font-headline-sm text-headline-sm mb-2">Mobilize</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Sequence funding, procurement, delivery waves, pilots, and benefits realization.</p></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/industry/government_public_sector/4-optimized.webp")} alt="Public infrastructure and smart government program planning" className="w-full h-full min-h-[320px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center md:text-left">
                              <div><strong className="text-primary text-3xl block mb-2">360</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Service view</span></div>
                              <div><strong className="text-primary text-3xl block mb-2">4</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Delivery controls</span></div>
                              <div><strong className="text-primary text-3xl block mb-2">90d</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Roadmap sprint</span></div>
                              <div><strong className="text-primary text-3xl block mb-2">1</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Public value case</span></div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto pt-12 pb-14">
                          <div className="bg-white border border-outline-variant/40 rounded-xl p-7 md:p-9 shadow-sm">
                              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-7 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Public Sector Partnership</span>
                                      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Build a modernization plan your agency can govern with confidence.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Start with a focused review of service priorities, digital readiness, program risks, and the delivery path required to create measurable public value.</p>
                                  </div>
                                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-[#E0F7FA]/30 border border-secondary/30 text-secondary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors" href="#">Discuss Program</Link>
                                  </div>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
