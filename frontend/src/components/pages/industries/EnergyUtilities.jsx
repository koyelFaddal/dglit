import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function EnergyUtilities() {
  return (
    <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-24 md:-mt-8 min-h-[640px] lg:min-h-[680px] flex items-center pt-24 md:pt-20 pb-12 overflow-hidden bg-surface -mx-gutter">
                          <div className="absolute inset-0 z-0">
                              <img alt="Energy and utilities infrastructure modernization" className="hero-visual-balance w-full h-full object-cover object-center lg:object-right opacity-80 blur-[2px] md:blur-[1px] scale-[1.01]" src={assetPath("/asset/industry/energy/1-optimized.webp")} fetchPriority="high" loading="eager" decoding="async" />
                              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/78 to-background/15"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-background/72 via-transparent to-background/20"></div>
                              <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-fixed/25 blur-3xl opacity-70"></div>
                          </div>
                          <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                              <div className="max-w-2xl">
                                  <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5">
                                      <span>Industries</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-on-surface sm:text-primary">Energy &amp; Utilities</span>
                                  </nav>
                                  <span className="inline-block bg-accent-teal/10 text-accent-teal font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">Utility Modernization</span>
                                  <h1 className="font-display-lg text-[34px] leading-[42px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-text-primary mb-6">Energy &amp; Utilities Solutions for Reliable, Modern Operations</h1>
                                  <p className="font-body-lg text-body-lg text-text-secondary mb-8 max-w-xl">DGL helps energy providers, utility organizations, and infrastructure teams improve operational visibility, strengthen asset performance, support modernization initiatives, and deliver reliable services across complex utility environments.</p>
                                  <div className="flex flex-col sm:flex-row gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 sm:px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:shadow-lg transition-all" href="#">Explore Solutions <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 border-[1.5px] border-primary bg-white/75 text-primary px-6 sm:px-8 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/5 transition-all" href="#">Talk to Our Team <span className="material-symbols-outlined text-[18px]">support_agent</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
                              <div className="xl:sticky xl:top-28">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Energy &amp; Utilities Overview</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A practical operating model for essential utility services.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">DGL helps energy and utility teams connect asset health, field activity, network performance, compliance evidence, and modernization work into decisions that are easier to explain and act on.</p>
                              </div>
                              <div className="border-y border-outline-variant/35">
                                  <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 py-5 border-b border-outline-variant/25">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Operate</span>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Coordinate control-room routines, outage response, field service, inspections, customer impacts, and restoration activity.</p>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 py-5 border-b border-outline-variant/25">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Maintain</span>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Use asset condition, risk, criticality, work history, and access constraints to prioritize maintenance and renewal.</p>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 py-5">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Modernize</span>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Sequence grid, renewable, water, gas, digital, resilience, and sustainability initiatives around operational readiness.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none md:rounded-xl px-gutter md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Operational Demands</span>
                                  <h2 className="font-headline-lg text-[24px] leading-[31px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Utility leaders are balancing service reliability, regulation, investment, and climate pressure at the same time.</h2>
                              </div>
                              <div className="bg-white/70 border border-outline-variant/35 rounded-xl overflow-hidden">
                                  <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] border-b border-outline-variant/30">
                                      <div className="p-4 bg-white font-label-caps text-label-caps text-primary uppercase">Reliability</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Fault response, restoration targets, asset risk, spare capacity, severe weather, and customer impact.</div>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] border-b border-outline-variant/30">
                                      <div className="p-4 bg-white font-label-caps text-label-caps text-primary uppercase">Regulation</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Safety cases, environmental reports, outage evidence, inspection records, audit trails, and public commitments.</div>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr]">
                                      <div className="p-4 bg-white font-label-caps text-label-caps text-primary uppercase">Transition</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Renewables, distributed assets, electrification, water resilience, demand programs, and infrastructure renewal.</div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-12 items-stretch">
                              <div className="relative min-h-[320px] md:min-h-[440px] overflow-hidden rounded-xl border border-outline-variant/35">
                                  <img src={assetPath("/asset/industry/energy/2-optimized.webp")} alt="Utility infrastructure planning and operational visibility" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                                  <div className="absolute inset-0 bg-white/60"></div>
                                  <div className="absolute left-0 bottom-0 right-0 p-6 md:p-8">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Core Service Areas</span>
                                      <h2 className="font-headline-lg text-headline-lg text-on-surface max-w-xl">Support the service chain from network event to completed work.</h2>
                                  </div>
                              </div>
                              <div className="grid grid-cols-1 content-stretch border-y border-outline-variant/35">
                                  <div className="py-5 border-b border-outline-variant/25">
                                      <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Network &amp; facility operations</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Control-room workflows, outage status, dispatch, field updates, and customer-facing service information.</p>
                                  </div>
                                  <div className="py-5 border-b border-outline-variant/25">
                                      <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Asset lifecycle planning</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Condition models, inspection routines, criticality, work backlog, renewal options, and budget evidence.</p>
                                  </div>
                                  <div className="py-5 border-b border-outline-variant/25">
                                      <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Capital and resilience programs</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Portfolio governance, project controls, dependencies, environmental commitments, and delivery readiness.</p>
                                  </div>
                                  <div className="py-5">
                                      <span className="font-label-caps text-label-caps text-primary uppercase block mb-2">Regulatory evidence</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Traceable reporting for safety, reliability, sustainability, performance, and stakeholder assurance.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                          <div className="mb-7 md:mb-9 max-w-3xl">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Utility Operations Rhythm</span>
                              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Give operations teams a shared path from signal to resolution.</h2>
                              <p className="font-body-md text-body-md text-on-surface-variant">The operating rhythm below keeps decisions connected without turning every event into a large project.</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-outline-variant/35 rounded-xl overflow-hidden bg-white">
                              <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25">
                                  <span className="text-primary font-bold text-2xl block mb-3">01</span>
                                  <span className="font-label-caps text-label-caps text-primary uppercase">Sense</span>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Event, meter, alarm, weather, customer, or inspection signal.</p>
                              </div>
                              <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25 bg-[#E0F7FA]/25">
                                  <span className="text-primary font-bold text-2xl block mb-3">02</span>
                                  <span className="font-label-caps text-label-caps text-primary uppercase">Triage</span>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Safety, service impact, priority, permit, and access assessment.</p>
                              </div>
                              <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25">
                                  <span className="text-primary font-bold text-2xl block mb-3">03</span>
                                  <span className="font-label-caps text-label-caps text-primary uppercase">Dispatch</span>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Crew, contractor, switching, materials, and customer notification.</p>
                              </div>
                              <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/25 bg-[#E0F7FA]/25">
                                  <span className="text-primary font-bold text-2xl block mb-3">04</span>
                                  <span className="font-label-caps text-label-caps text-primary uppercase">Restore</span>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Completion evidence, updates, exceptions, and follow-up tasks.</p>
                              </div>
                              <div className="p-5">
                                  <span className="text-primary font-bold text-2xl block mb-3">05</span>
                                  <span className="font-label-caps text-label-caps text-primary uppercase">Learn</span>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Root cause, asset history, reliability trend, and improvement action.</p>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Asset Reliability</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Make asset decisions easier to defend before work reaches the field.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">We help utility teams connect condition, criticality, defect history, service exposure, access constraints, and investment timing into a practical reliability view.</p>
                                  <div className="grid grid-cols-2 gap-3">
                                      <div className="border-t-4 border-primary pt-3"><span className="font-label-caps text-label-caps text-primary uppercase">Condition</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Inspection and test evidence.</p></div>
                                      <div className="border-t-4 border-secondary pt-3"><span className="font-label-caps text-label-caps text-secondary uppercase">Criticality</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Customer and safety impact.</p></div>
                                      <div className="border-t-4 border-secondary pt-3"><span className="font-label-caps text-label-caps text-secondary uppercase">Backlog</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Deferred and planned work.</p></div>
                                      <div className="border-t-4 border-primary pt-3"><span className="font-label-caps text-label-caps text-primary uppercase">Renewal</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Capital timing and options.</p></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/industry/energy/3-optimized.webp")} alt="Energy asset management and renewable infrastructure planning" className="w-full h-[300px] md:h-[420px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none md:rounded-xl px-gutter md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.76fr_1.24fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Renewable Energy &amp; Sustainability</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Turn sustainability commitments into governed utility programs.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Renewable and resource programs work best when planning, operations, customer participation, reporting, and funding evidence stay connected.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                                  <div className="pb-5 border-b border-outline-variant/30"><span className="material-symbols-outlined text-secondary mb-3">solar_power</span><h3 className="font-headline-sm text-headline-sm mb-2">Distributed Energy</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Connection requests, capacity checks, forecasting, and operational readiness.</p></div>
                                  <div className="pb-5 border-b border-outline-variant/30"><span className="material-symbols-outlined text-secondary mb-3">battery_charging_full</span><h3 className="font-headline-sm text-headline-sm mb-2">Flexibility &amp; Storage</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Storage, demand response, managed load, tariff rules, and participation tracking.</p></div>
                                  <div><span className="material-symbols-outlined text-secondary mb-3">water_drop</span><h3 className="font-headline-sm text-headline-sm mb-2">Resource Stewardship</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Water conservation, leakage, environmental obligations, and resilience programs.</p></div>
                                  <div><span className="material-symbols-outlined text-secondary mb-3">eco</span><h3 className="font-headline-sm text-headline-sm mb-2">Impact Evidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Emissions, reliability, customer outcomes, funding conditions, and benefits reporting.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="max-w-3xl mb-7 md:mb-9">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Digital Systems &amp; Visibility</span>
                              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Define what each system should contribute to operational decisions.</h2>
                          </div>
                          <div className="overflow-hidden rounded-xl border border-outline-variant/35 bg-white">
                              <div className="hidden md:grid grid-cols-[0.8fr_1fr_1.2fr] bg-[#E0F7FA]/30 border-b border-outline-variant/30">
                                  <div className="p-4 font-label-caps text-label-caps text-primary uppercase">Signal</div>
                                  <div className="p-4 font-label-caps text-label-caps text-primary uppercase">Typical source</div>
                                  <div className="p-4 font-label-caps text-label-caps text-primary uppercase">Operational use</div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1.2fr] border-b border-outline-variant/25">
                                  <div className="p-4 font-label-caps text-label-caps text-primary uppercase">Network status</div>
                                  <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">SCADA, OMS, meters, sensors</div>
                                  <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Outage awareness, demand trends, restoration, and service risk.</div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1.2fr] border-b border-outline-variant/25">
                                  <div className="p-4 font-label-caps text-label-caps text-primary uppercase">Asset health</div>
                                  <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">EAM, GIS, inspections, work history</div>
                                  <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Maintenance priority, renewal planning, criticality, and backlog control.</div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1.2fr]">
                                  <div className="p-4 font-label-caps text-label-caps text-primary uppercase">Commitments</div>
                                  <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Regulatory, finance, project, ESG data</div>
                                  <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Board reporting, compliance evidence, funding assurance, and benefits tracking.</div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Delivery Approach</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Use release lanes instead of a single oversized transformation plan.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Each lane can move at a different pace while still sharing governance, data standards, and benefits tracking.</p>
                              </div>
                              <div className="space-y-4">
                                  <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-4 items-start border-l-4 border-primary pl-5 py-2"><span className="font-label-caps text-label-caps text-primary uppercase">Stabilize</span><p className="font-body-sm text-body-sm text-on-surface-variant">Fix immediate operational pain: work queues, outage visibility, asset data gaps, field handoffs, and reporting basics.</p></div>
                                  <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-4 items-start border-l-4 border-secondary pl-5 py-2"><span className="font-label-caps text-label-caps text-secondary uppercase">Connect</span><p className="font-body-sm text-body-sm text-on-surface-variant">Align systems, roles, integration needs, data ownership, compliance evidence, and control routines.</p></div>
                                  <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-4 items-start border-l-4 border-primary pl-5 py-2"><span className="font-label-caps text-label-caps text-primary uppercase">Scale</span><p className="font-body-sm text-body-sm text-on-surface-variant">Extend proven patterns across regions, asset classes, crews, programs, and stakeholder reporting.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none md:rounded-xl px-gutter md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-8 lg:gap-12">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Performance Improvements</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Keep outcomes tied to utility service value.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">The right measures help teams see whether modernization is improving reliability, safety, field productivity, compliance, and sustainability.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                  <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Reliability:</strong> fewer avoidable interruptions, better restoration tracking, and clearer asset risk.</p>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Safety:</strong> stronger permit, inspection, incident, and field control evidence.</p>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Compliance:</strong> easier traceability from work activity to regulatory reporting.</p>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant border-b border-outline-variant/30 pb-4"><strong className="text-on-surface">Resilience:</strong> clearer plans for weather, demand, supply, and infrastructure constraints.</p>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Sustainability:</strong> measurable progress for emissions, conservation, renewable capacity, and resource use.</p>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Transparency:</strong> consistent evidence for executives, regulators, boards, partners, and communities.</p>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="border-y border-outline-variant/35 py-8 md:py-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-start">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Partnership Model</span>
                                      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A long-term utility partner should fit the operating environment, not add another layer of noise.</h2>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                      <div>
                                          <span className="material-symbols-outlined text-secondary mb-3">groups</span>
                                          <h3 className="font-headline-sm text-headline-sm mb-2">Shared Forums</h3>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Decision routines for operations, engineering, finance, compliance, customer teams, and suppliers.</p>
                                      </div>
                                      <div>
                                          <span className="material-symbols-outlined text-secondary mb-3">handyman</span>
                                          <h3 className="font-headline-sm text-headline-sm mb-2">Field Adoption</h3>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Practical support for crews, supervisors, inspectors, planners, schedulers, and service teams.</p>
                                      </div>
                                      <div>
                                          <span className="material-symbols-outlined text-secondary mb-3">fact_check</span>
                                          <h3 className="font-headline-sm text-headline-sm mb-2">Assurance Rhythm</h3>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Regular checks on risk, compliance, data quality, adoption, and delivered value.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto pt-8 pb-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-center bg-white border border-outline-variant/40 rounded-xl px-6 md:px-8 py-7 md:py-8 shadow-sm">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Energy Modernization Readiness</span>
                                  <h2 className="font-headline-lg text-[24px] leading-[31px] md:text-headline-lg md:leading-[40px] text-on-surface mb-3">Shape a utility roadmap your operating teams can use.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Start with a practical review of operations, asset data, field workflows, compliance needs, and priority programs.</p>
                              </div>
                              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                                  <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start Readiness Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                  <Link className="inline-flex items-center justify-center gap-2 bg-white border border-secondary/30 text-secondary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-[#E0F7FA]/30 transition-colors" href="#">Discuss Utility Program</Link>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
