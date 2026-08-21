"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function HousingCommunities() {
  return (
    <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-8 mb-10 -mx-gutter min-h-[590px] md:min-h-[660px] flex items-end overflow-hidden bg-white">
                          <img src={assetPath("/asset/industry/housing/1.png")} alt="Housing and communities transformation for connected residential services" className="absolute inset-0 w-full h-full object-cover blur-[1.5px] scale-[1.01]" />
                          <div className="absolute inset-0 bg-white/76"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/78 to-white/35"></div>
                          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
                          <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pb-16 md:pb-24 pt-12">
                              <div className="max-w-4xl">
                                  <nav className="flex flex-wrap items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-6">
                                      <span>Industry</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-primary">Housing &amp; Communities</span>
                                  </nav>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">Community-Centered Housing Transformation</span>
                                  <h1 className="housing-hero-heading font-display-lg text-display-lg text-on-surface mb-6 max-w-3xl"><span className="block sm:inline">Modern housing</span> <span className="block sm:inline">services for</span> <span className="block sm:inline">stronger, better</span> <span className="block sm:inline whitespace-nowrap">connected communities.</span></h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">DGL helps housing authorities, residential agencies, community organizations, and property operators modernize programs, resident services, assets, and data foundations while preserving public accountability and community trust.</p>
                                  <div className="flex flex-col sm:flex-row gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Plan Housing Modernization <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/60 text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-primary transition-all" href="#">Review Resident Services <span className="material-symbols-outlined text-[18px]">fact_check</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 px-4 lg:px-0">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 items-start">
                              <div className="xl:sticky xl:top-28">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Housing Transformation Framework</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A practical operating frame for programs, residents, assets, and neighborhoods.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Housing modernization succeeds when eligibility, property operations, community support, digital access, and reporting all move together. DGL structures the work into clear lanes so agencies can prioritize without losing sight of resident outcomes.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6">
                                      <span className="material-symbols-outlined text-primary mb-4">maps_home_work</span>
                                      <h3 className="font-headline-sm text-headline-sm mb-2">Program Modernization</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Eligibility, waitlists, allocations, case workflows, grants, and compliance evidence organized around transparent service rules.</p>
                                  </div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5 md:p-6">
                                      <span className="material-symbols-outlined text-primary mb-4">groups_3</span>
                                      <h3 className="font-headline-sm text-headline-sm mb-2">Resident Experience</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Digital and assisted channels for applications, repairs, rent support, service requests, notices, and community feedback.</p>
                                  </div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5 md:p-6">
                                      <span className="material-symbols-outlined text-secondary mb-4">domain</span>
                                      <h3 className="font-headline-sm text-headline-sm mb-2">Property &amp; Asset Management</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Portfolio visibility across occupancy, maintenance, inspections, lifecycle planning, facilities risk, and capital works.</p>
                                  </div>
                                  <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6">
                                      <span className="material-symbols-outlined text-secondary mb-4">diversity_2</span>
                                      <h3 className="font-headline-sm text-headline-sm mb-2">Community Development</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Neighborhood initiatives, partner coordination, service referrals, local engagement, and sustainable community planning.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="relative left-1/2 w-screen -translate-x-1/2 lg:left-auto lg:w-auto lg:translate-x-0 lg:mx-auto max-w-none lg:max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 px-4 md:px-8 lg:rounded-xl">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-12 items-center">
                              <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-white shadow-sm">
                                  <img src={assetPath("/asset/industry/housing/2.png")} alt="Community housing teams coordinating resident support and property operations" className="w-full h-[300px] md:h-[420px] object-cover" />
                                  <div className="absolute left-4 right-4 bottom-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                                      <div className="bg-white/92 border border-white rounded-lg p-3"><span className="font-label-caps text-label-caps text-primary uppercase">Apply</span></div>
                                      <div className="bg-white/92 border border-white rounded-lg p-3"><span className="font-label-caps text-label-caps text-primary uppercase">Live</span></div>
                                      <div className="bg-white/92 border border-white rounded-lg p-3"><span className="font-label-caps text-label-caps text-primary uppercase">Thrive</span></div>
                                  </div>
                              </div>
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Resident Experience Journey</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Make housing services easier to understand, access, and resolve.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Residents need clear guidance and timely responses across life events, applications, tenancy changes, repairs, support needs, and neighborhood concerns. We help organizations redesign the journey around clarity, dignity, and service accountability.</p>
                                  <div className="space-y-4">
                                      <div className="grid grid-cols-[72px_1fr] gap-4 items-start">
                                          <div className="bg-white border border-outline-variant/35 rounded-lg p-3 text-center"><strong className="text-primary text-2xl block">01</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Access</span></div>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">Eligibility guidance, multilingual content, assisted digital routes, document capture, and status transparency.</p>
                                      </div>
                                      <div className="grid grid-cols-[72px_1fr] gap-4 items-start">
                                          <div className="bg-white border border-outline-variant/35 rounded-lg p-3 text-center"><strong className="text-primary text-2xl block">02</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Serve</span></div>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">Repair triage, rent support, tenancy cases, inspections, complaints, and community service referrals.</p>
                                      </div>
                                      <div className="grid grid-cols-[72px_1fr] gap-4 items-start">
                                          <div className="bg-white border border-outline-variant/35 rounded-lg p-3 text-center"><strong className="text-primary text-2xl block">03</strong><span className="font-label-caps text-label-caps text-secondary uppercase">Learn</span></div>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant pt-2">Feedback loops, service standards, resident insight, outcome tracking, and continuous improvement planning.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 px-4 lg:px-0">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Program Delivery Backbone</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Strengthen the controls behind affordable housing programs.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We help teams translate policy and funding requirements into workflows, data controls, decision records, and reporting routines that are usable day to day.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden">
                                  <div className="grid grid-cols-1 md:grid-cols-3">
                                      <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/30"><span className="font-label-caps text-label-caps text-primary uppercase">Eligibility &amp; intake</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Application rules, priority bands, documentation, appeals, and assisted service models.</p></div>
                                      <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/30 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">Allocation &amp; tenancy</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Waitlist management, matching, lease workflows, rent changes, notices, and tenancy support.</p></div>
                                      <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Governance &amp; compliance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Funding evidence, audit trails, privacy controls, vendor oversight, and board reporting.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 px-4 md:px-6 lg:px-8 bg-white border-y lg:border border-outline-variant/35 lg:rounded-xl shadow-sm">
                          <div className="grid grid-cols-1 xl:grid-cols-[1.06fr_0.94fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Property &amp; Asset Intelligence</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Connect asset decisions to resident wellbeing and capital priorities.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">Housing portfolios need reliable views of condition, risk, cost, service demand, occupancy, and planned works. DGL helps organizations create the data and governance needed to balance day-to-day repairs with long-term investment.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Responsive repairs</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Work orders, contractor coordination, resident updates, and completion evidence.</p></div>
                                      <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Capital planning</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Condition surveys, lifecycle priorities, accessibility needs, and investment cases.</p></div>
                                      <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Facilities risk</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Safety checks, inspections, compliance tasks, and escalation records.</p></div>
                                      <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Portfolio insight</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Vacancy, arrears, demand, utilization, and neighborhood-level performance.</p></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/industry/housing/3.png")} alt="Residential infrastructure and community development planning" className="w-full h-[320px] md:h-[430px] object-cover rounded-xl border border-outline-variant/35" />
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 px-4 lg:px-0">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-stretch">
                              <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-8">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Community Development Model</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Coordinate services around neighborhoods, not isolated requests.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We support community development programs that connect housing, local services, infrastructure priorities, partner networks, and resident voice into a shared delivery cadence.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">volunteer_activism</span><h3 className="font-headline-sm text-headline-sm mb-2">Service Partnerships</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Referral pathways with health, employment, youth, homelessness, wellbeing, and financial support partners.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">forum</span><h3 className="font-headline-sm text-headline-sm mb-2">Engagement Platforms</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Consultations, resident panels, surveys, local issue tracking, and communications planning.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">park</span><h3 className="font-headline-sm text-headline-sm mb-2">Sustainable Planning</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Energy efficiency, green spaces, accessibility, climate resilience, and inclusive facilities priorities.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">monitoring</span><h3 className="font-headline-sm text-headline-sm mb-2">Impact Evidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Outcome measures, benefits tracking, partner reporting, and community investment evidence.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none lg:rounded-xl px-4 md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Housing Data &amp; Analytics</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Give leaders dependable evidence for funding, service quality, and community outcomes.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">DGL designs housing data practices that improve reporting confidence while helping operational teams make better decisions across programs, properties, and resident support.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5">
                                      <span className="material-symbols-outlined text-secondary mb-3">fact_check</span>
                                      <h3 className="font-headline-sm text-headline-sm mb-2">Program Evidence</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Eligibility, funding, allocation, and compliance reporting.</p>
                                  </div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5">
                                      <span className="material-symbols-outlined text-secondary mb-3">home_work</span>
                                      <h3 className="font-headline-sm text-headline-sm mb-2">Asset Signals</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Condition, repairs, safety checks, and capital priorities.</p>
                                  </div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5">
                                      <span className="material-symbols-outlined text-secondary mb-3">record_voice_over</span>
                                      <h3 className="font-headline-sm text-headline-sm mb-2">Resident Insight</h3>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Service demand, feedback, tenancy support, and outcomes.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max py-10 md:py-14 px-4 lg:px-0">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Insight Board</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Track the operating signals that shape housing decisions.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">A focused housing intelligence board helps leaders monitor service pressure, asset condition, tenancy support, and investment priorities without forcing teams into complex reporting routines.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6 shadow-sm">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-5">
                                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                              <span className="font-label-caps text-label-caps text-secondary uppercase">Occupancy health</span>
                                              <span className="inline-flex items-center rounded-lg bg-white border border-outline-variant/30 px-3 py-1 font-label-caps text-label-caps text-primary uppercase">Live view</span>
                                          </div>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Vacancy, waitlist pressure, turnover, and allocation readiness.</p>
                                      </div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-5">
                                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                              <span className="font-label-caps text-label-caps text-secondary uppercase">Repair demand</span>
                                              <span className="inline-flex items-center rounded-lg bg-[#E0F7FA]/30 border border-secondary/20 px-3 py-1 font-label-caps text-label-caps text-primary uppercase">Triage</span>
                                          </div>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Open work orders, response times, contractor status, and repeat issues.</p>
                                      </div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-5">
                                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                              <span className="font-label-caps text-label-caps text-secondary uppercase">Support needs</span>
                                              <span className="inline-flex items-center rounded-lg bg-[#E0F7FA]/30 border border-secondary/20 px-3 py-1 font-label-caps text-label-caps text-primary uppercase">Case trends</span>
                                          </div>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Arrears, tenancy risk, service referrals, and resident contact patterns.</p>
                                      </div>
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-5">
                                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                              <span className="font-label-caps text-label-caps text-secondary uppercase">Investment view</span>
                                              <span className="inline-flex items-center rounded-lg bg-white border border-outline-variant/30 px-3 py-1 font-label-caps text-label-caps text-primary uppercase">Plan</span>
                                          </div>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Lifecycle costs, facilities risk, sustainability work, and funding cases.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter lg:mx-auto max-w-container-max pt-10 pb-14 px-4 lg:px-0">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-12 items-start border-t border-outline-variant/40 pt-10">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Strategic Partnership Approach</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Move from pressure points to a governed housing transformation roadmap.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">We work with housing leaders, resident-facing teams, asset managers, community partners, and technology owners to define practical delivery waves with clear ownership and measurable outcomes.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden shadow-sm">
                                  <div className="grid grid-cols-1 sm:grid-cols-3">
                                      <div className="p-5 border-b sm:border-b-0 sm:border-r border-outline-variant/30"><span className="font-label-caps text-label-caps text-primary uppercase">Discover</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Map resident journeys, program controls, property data, systems, and service constraints.</p></div>
                                      <div className="p-5 border-b sm:border-b-0 sm:border-r border-outline-variant/30 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">Prioritize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Select initiatives with the strongest service value, compliance need, and delivery feasibility.</p></div>
                                      <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Mobilize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Set governance, adoption plans, data ownership, release waves, and benefits measures.</p></div>
                                  </div>
                                  <div className="border-t border-outline-variant/30 p-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start Assessment <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white border border-secondary/30 text-secondary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-[#E0F7FA]/30 transition-colors" href="#">Discuss Program</Link>
                                  </div>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
