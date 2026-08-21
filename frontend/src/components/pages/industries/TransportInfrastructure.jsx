"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function TransportInfrastructure() {
  return (
    <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-24 md:-mt-8 mb-10 md:mb-12 -mx-gutter min-h-[560px] md:min-h-[540px] lg:min-h-[520px] flex items-start overflow-hidden bg-white">
                          <img src={assetPath("/asset/industry/transport/1.png")} alt="Transport and infrastructure network operations" className="absolute inset-0 w-full h-full object-cover blur-[3px] md:blur-[1.25px] scale-[1.01]" />
                          <div className="absolute inset-0 bg-white/78"></div>
                          <div className="absolute inset-0 bg-[#E0F7FA]/30"></div>
                          <div className="absolute left-0 top-0 h-full w-3/5 bg-primary-fixed/20 blur-3xl opacity-70"></div>
                          <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pt-28 md:pt-14 lg:pt-16 pb-12 md:pb-14">
                              <div className="max-w-4xl">
                                  <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-4 md:mb-6">
                                      <span>Industries</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-on-surface sm:text-primary">Transport &amp; Infrastructure</span>
                                  </nav>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Connected Transport Modernization</span>
                                  <h1 className="font-display-lg text-[25px] leading-[32px] sm:text-display-lg sm:leading-[72px] text-on-surface mb-5 max-w-4xl"><span className="hidden sm:inline">Transport &amp; Infrastructure Solutions for Connected, Efficient Operations</span><span className="sm:hidden">Transport &amp; Infrastructure Solutions for Connected, Efficient Operations</span></h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-7">DGL helps transportation agencies, infrastructure organizations, and mobility programs modernize operations, improve visibility, support critical assets, and deliver more efficient services across complex transport environments.</p>
                                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 sm:px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Explore Solutions <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/60 text-primary px-5 sm:px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-primary transition-all" href="#">Talk to Our Team <span className="material-symbols-outlined text-[18px]">support_agent</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Transport &amp; Infrastructure Overview</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4"><span className="hidden sm:inline">Modernize networks, assets, services, and field operations as one connected environment.</span><span className="sm:hidden">Modernize networks and field operations together.</span></h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">Transport and infrastructure teams operate across routes, corridors, depots, stations, terminals, construction sites, control rooms, and public-facing service channels. DGL helps turn that complexity into clearer operating models, practical digital roadmaps, and better day-to-day visibility.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Network operations</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Shared views of service status, capacity, incidents, and field activity.</p></div>
                                      <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Infrastructure programs</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Planning, delivery support, asset data, and governance for critical works.</p></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/industry/transport/2.png")} alt="Transport infrastructure planning and mobility operations" className="w-full h-[300px] md:h-[390px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-7 lg:gap-10 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Modern Mobility &amp; Infrastructure Challenges</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Improve service reliability while managing aging assets and rising demand.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Authorities and operators need decisions that connect customer impact, safety risk, maintenance windows, project constraints, funding, and live operational pressure.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">traffic</span><h3 className="font-headline-sm text-headline-sm mb-2">Congestion &amp; Disruption</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Coordinate incident response, diversions, roadworks, passenger updates, and cross-agency decisions.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">construction</span><h3 className="font-headline-sm text-headline-sm mb-2">Aging Infrastructure</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Prioritize renewal activity using asset condition, service risk, safety requirements, and budget cycles.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">route</span><h3 className="font-headline-sm text-headline-sm mb-2">Multi-Modal Complexity</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Align roads, transit, rail, ports, airports, freight, active travel, and public works programs.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">verified_user</span><h3 className="font-headline-sm text-headline-sm mb-2">Safety &amp; Compliance</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Maintain evidence for inspections, permits, work orders, safety cases, and regulatory reporting.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-12 items-start">
                              <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-8">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Core Service Areas</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Practical support across the transport operating model.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We focus on the capabilities that help teams plan better, operate with clearer information, and keep infrastructure programs moving.</p>
                              </div>
                              <div className="space-y-3">
                                  <div className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-3 rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Mobility programs</span><p className="font-body-sm text-body-sm text-on-surface-variant">Service planning, demand analysis, route changes, passenger information, and accessibility improvements.</p></div>
                                  <div className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-3 rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Asset operations</span><p className="font-body-sm text-body-sm text-on-surface-variant">Asset registers, inspections, work orders, lifecycle planning, and maintenance prioritization.</p></div>
                                  <div className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-3 rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Capital delivery</span><p className="font-body-sm text-body-sm text-on-surface-variant">Project controls, portfolio reporting, stakeholder coordination, risks, dependencies, and benefits tracking.</p></div>
                                  <div className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-3 rounded-lg bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Data visibility</span><p className="font-body-sm text-body-sm text-on-surface-variant">Dashboards, operational metrics, integration planning, data quality, and decision-ready reporting.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none md:rounded-xl px-gutter md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Smart Transportation Operations</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Give operations teams a clearer picture of what is happening across the network.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">DGL helps define control-room workflows, field reporting, incident coordination, traffic and passenger insights, and service performance routines that support quicker decisions.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Detect</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Traffic, service, asset, weather, and incident signals.</p></div>
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Coordinate</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Dispatch, diversions, field crews, partners, and public updates.</p></div>
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Learn</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Pattern analysis, service reliability, and improvement actions.</p></div>
                                  </div>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6 shadow-sm">
                                  <div className="space-y-4">
                                      <div className="flex gap-4"><span className="w-9 h-9 rounded-lg bg-[#E0F7FA]/50 border border-outline-variant/35 flex items-center justify-center text-primary font-bold shrink-0">1</span><p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Connect live service, traffic, asset, and field activity into operational views.</p></div>
                                      <div className="flex gap-4"><span className="w-9 h-9 rounded-lg bg-[#E0F7FA]/50 border border-outline-variant/35 flex items-center justify-center text-primary font-bold shrink-0">2</span><p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Define escalation paths for incidents, closures, safety issues, and public communications.</p></div>
                                      <div className="flex gap-4"><span className="w-9 h-9 rounded-lg bg-[#E0F7FA]/50 border border-outline-variant/35 flex items-center justify-center text-primary font-bold shrink-0">3</span><p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Use performance evidence to adjust plans, maintenance windows, and service priorities.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-12 items-center">
                              <img src={assetPath("/asset/industry/transport/3.png")} alt="Infrastructure asset management and transport project delivery" className="w-full h-[300px] md:h-[400px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Infrastructure Planning &amp; Asset Management</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Plan maintenance and investment with better asset evidence.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">We help infrastructure teams improve asset hierarchies, condition records, inspection workflows, risk scoring, renewal plans, and reporting so work is easier to prioritize and justify.</p>
                                  <div className="space-y-3">
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Asset lifecycle planning</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Link condition, criticality, maintenance history, service impact, and replacement timing.</p></div>
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Field inspection readiness</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Capture defects, photos, permits, safety checks, and work orders with cleaner handoffs.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Road, Rail, Port &amp; Airport Support</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Support each mode without losing the shared network view.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">DGL helps teams coordinate mode-specific requirements while keeping performance, asset, safety, and project information consistent across the wider portfolio.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">add_road</span><h3 className="font-headline-sm text-headline-sm mb-2">Roads &amp; Highways</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Corridor programs, closures, inspections, pavement data, traffic signals, safety actions, and work coordination.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">train</span><h3 className="font-headline-sm text-headline-sm mb-2">Rail Networks</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Station operations, track assets, possession planning, service impacts, compliance records, and passenger information.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">directions_boat</span><h3 className="font-headline-sm text-headline-sm mb-2">Ports &amp; Logistics</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Gate flows, berth activity, freight handoffs, customs data, yard visibility, and partner coordination.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-primary mb-3">flight_takeoff</span><h3 className="font-headline-sm text-headline-sm mb-2">Airports</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Terminal operations, landside access, asset maintenance, safety processes, service recovery, and capital works.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Digital Systems &amp; Data Visibility</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Make operational information easier to trust, share, and act on.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">Transport organizations often depend on disconnected systems for assets, incidents, projects, finance, GIS, customer channels, and workforce planning. We help define integration priorities and reporting models that fit real operating needs.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Operational dashboards</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Network status, incident queues, work backlogs, service performance, and risk indicators.</p></div>
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Data foundations</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Asset IDs, location models, quality checks, ownership, retention, and integration patterns.</p></div>
                                  </div>
                              </div>
                              <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-8">
                                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-5">Visibility Stack</span>
                                  <div className="space-y-3">
                                      <div className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-0.5">map</span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Location:</strong> GIS, routes, corridors, stops, stations, terminals, depots, and assets.</p></div>
                                      <div className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-0.5">schedule</span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Time:</strong> service windows, works programs, inspections, delays, and response targets.</p></div>
                                      <div className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-0.5">groups</span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">People:</strong> dispatchers, engineers, operators, contractors, partners, and public users.</p></div>
                                      <div className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-0.5">analytics</span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Performance:</strong> reliability, safety, utilization, cost, backlog, and customer impact.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none md:rounded-xl px-gutter md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Project Delivery Approach</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Move from current-state pressure to practical delivery waves.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We shape delivery around operational readiness, data quality, stakeholder alignment, adoption, and measurable network value.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold mb-3">1</span><span className="font-label-caps text-label-caps text-primary uppercase">Assess</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Map operations, systems, data, assets, risks, and delivery constraints.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold mb-3">2</span><span className="font-label-caps text-label-caps text-primary uppercase">Prioritize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Select improvements with clear service, safety, resilience, or cost value.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold mb-3">3</span><span className="font-label-caps text-label-caps text-primary uppercase">Mobilize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Define governance, roles, data owners, vendors, and implementation cadence.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold mb-3">4</span><span className="font-label-caps text-label-caps text-primary uppercase">Improve</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Measure adoption, service impact, reliability, and the next release priorities.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.74fr_1.26fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Outcomes &amp; Operational Benefits</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Focus improvement on visible operating value.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">The goal is not another isolated system. It is better coordination, clearer evidence, and services that are easier to plan, operate, and sustain.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Reliability</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Better visibility of disruptions, bottlenecks, work windows, and response actions.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Resilience</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Improved planning for severe weather, asset failures, demand peaks, and service recovery.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Safety</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Clearer evidence for inspections, incidents, permits, risks, and compliance actions.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Coordination</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Shared routines across agencies, operators, contractors, engineering teams, and public works.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Investment clarity</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Portfolio decisions tied to asset condition, service impact, funding, and delivery readiness.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Public service</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">More reliable information for passengers, road users, freight partners, and communities.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-12 items-center">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-8 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Partnership &amp; Collaboration</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Bring agencies, operators, engineering teams, vendors, and communities into the same delivery rhythm.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">Transport improvement depends on coordination across organizational boundaries. DGL helps structure governance, decision forums, delivery roles, and reporting routines that keep work practical and accountable.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Align</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Shared priorities, constraints, risk appetite, and service outcomes.</p></div>
                                      <div className="border border-outline-variant/35 rounded-lg p-4 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-primary uppercase">Coordinate</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Decision paths, working groups, escalation, and stakeholder updates.</p></div>
                                      <div className="border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Sustain</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Adoption support, reporting cadence, benefits evidence, and continuous improvement.</p></div>
                                  </div>
                              </div>
                              <div className="space-y-3">
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">account_tree</span><h3 className="font-headline-sm text-headline-sm mb-2">Cross-Agency Governance</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Clear boards, working groups, decision rights, and dependency tracking.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">engineering</span><h3 className="font-headline-sm text-headline-sm mb-2">Operational Adoption</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Training, role design, field feedback, service desk readiness, and change support.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">campaign</span><h3 className="font-headline-sm text-headline-sm mb-2">Public Communication</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Service notices, community engagement, disruption messaging, and accessibility needs.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto pt-10 pb-14">
                          <div className="bg-white border border-outline-variant/40 rounded-xl p-6 md:p-8 shadow-sm">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Transport Transformation Readiness</span>
                                      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4"><span className="hidden sm:inline">Create a practical roadmap for safer, more visible, and more resilient transport operations.</span><span className="sm:hidden">Create a practical transport roadmap.</span></h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Work with DGL to assess your current operations, asset data, digital systems, and project priorities, then shape a delivery plan your teams can use.</p>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Review</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Operations, assets, projects, data, risks, and stakeholder needs.</p></div>
                                      <div className="border border-outline-variant/35 rounded-lg p-4 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-primary uppercase">Roadmap</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Prioritized improvements with scope, ownership, and delivery waves.</p></div>
                                      <div className="border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Launch</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Governance, implementation support, adoption measures, and reporting.</p></div>
                                  </div>
                              </div>
                              <div className="border-t border-outline-variant/30 mt-6 pt-5 flex flex-col sm:flex-row gap-3 sm:justify-end">
                                  <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start Readiness Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                  <Link className="inline-flex items-center justify-center gap-2 bg-white border border-secondary/30 text-secondary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-[#E0F7FA]/30 transition-colors" href="#">Discuss Transport Program</Link>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
