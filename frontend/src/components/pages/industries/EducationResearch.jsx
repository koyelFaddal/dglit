import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function EducationResearch() {
  return (
    <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-8 mb-12 -mx-gutter min-h-[620px] md:min-h-[680px] flex items-end md:items-center overflow-hidden bg-white">
                          <img src={assetPath("/asset/industry/education/1-optimized.webp")} alt="Education and research digital transformation" className="absolute inset-0 w-full h-full object-cover blur-[2.5px] scale-[1.02]" fetchPriority="high" loading="eager" decoding="async" />
                          <div className="absolute inset-0 bg-white/82"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/72 to-white/30"></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-white/20"></div>
                          <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-fixed/25 blur-3xl opacity-70"></div>
                          <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter pb-20 md:pb-28 pt-12">
                              <div className="max-w-4xl">
                                  <nav className="flex flex-wrap items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-6">
                                      <span>Industry</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-primary">Education &amp; Research</span>
                                  </nav>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">Learning Ecosystem Transformation</span>
                                  <h1 className="font-display-lg text-display-lg text-on-surface mb-6 max-w-3xl">Digital education built for learning and research.</h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 lg:mb-14">DGL helps universities, academic institutions, research organizations, and learning networks modernize digital services, strengthen operations, and support knowledge programs at scale. We enable connected digital ecosystems that enhance collaboration, streamline administration, and improve the overall learning and research experience..</p>
                                  <div className="flex flex-col sm:flex-row gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Shape Digital Campus <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/60 text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-primary transition-all" href="#">Map Research Needs <span className="material-symbols-outlined text-[18px]">science</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Institutional Agenda</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">A transformation agenda shaped around academic outcomes.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We help education leaders connect strategy, technology investment, service design, and operating governance into one practical modernization program.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Student value</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Clearer journeys, responsive support, and stronger digital learning access.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Research value</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Better funding visibility, collaboration, compliance, and impact evidence.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Institutional value</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Shared platforms, trusted data, and leaner operating models.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 items-stretch">
                              <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-7">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Operating Model</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Align the academic, administrative, and research enterprise.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">DGL structures transformation into accountable service domains so work can be funded, governed, delivered, and measured without losing academic context.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden">
                                  <div className="grid grid-cols-1 md:grid-cols-4">
                                      <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/30"><span className="material-symbols-outlined text-primary mb-3">school</span><h3 className="font-headline-sm text-headline-sm mb-2">Learner services</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Admissions, enrolment, advising, progression, and student support.</p></div>
                                      <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/30 bg-[#E0F7FA]/20"><span className="material-symbols-outlined text-primary mb-3">menu_book</span><h3 className="font-headline-sm text-headline-sm mb-2">Teaching delivery</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Learning platforms, content operations, assessment, and hybrid delivery.</p></div>
                                      <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/30"><span className="material-symbols-outlined text-primary mb-3">biotech</span><h3 className="font-headline-sm text-headline-sm mb-2">Research enablement</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Grants, ethics, project controls, research data, and collaboration.</p></div>
                                      <div className="p-5 bg-[#E0F7FA]/20"><span className="material-symbols-outlined text-primary mb-3">admin_panel_settings</span><h3 className="font-headline-sm text-headline-sm mb-2">Enterprise services</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Finance, HR, facilities, governance, reporting, and cyber assurance.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="relative left-1/2 w-screen -translate-x-1/2 sm:left-auto sm:w-auto sm:translate-x-0 sm:mx-auto max-w-none sm:max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 rounded-none sm:rounded-xl px-4 sm:px-5 md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Digital Campus Services</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Reduce friction across student and faculty touchpoints.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">We redesign campus services around clear journeys, connected data, and support models that help teams resolve requests faster while improving the student experience.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Find</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Knowledge, programs, eligibility, and service options.</p></div>
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Act</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Applications, requests, bookings, cases, and approvals.</p></div>
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Track</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Status, outcomes, interventions, and follow-up support.</p></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/industry/education/2-optimized.webp")} alt="Digital campus services and academic collaboration" className="w-full h-[300px] md:h-[390px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
                              <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Research Enterprise</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Professionalize the path from funding opportunity to demonstrable impact.</h2><p className="font-body-md text-body-md text-on-surface-variant">We help research offices reduce administrative drag, strengthen compliance, and give leaders clearer visibility across grants, ethics, outputs, and partnerships.</p></div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden">
                                  <div className="grid grid-cols-1 md:grid-cols-3">
                                      <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/30"><span className="font-label-caps text-label-caps text-primary uppercase">Funding pipeline</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Opportunity tracking, costing, approvals, sponsor requirements, and submission controls.</p></div>
                                      <div className="p-5 border-b md:border-b-0 md:border-r border-outline-variant/30 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">Research assurance</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Ethics reviews, risk registers, policy evidence, data stewardship, and audit readiness.</p></div>
                                      <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Impact management</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Outputs, knowledge exchange, adoption evidence, public engagement, and reporting.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-8 lg:gap-10 items-stretch">
                              <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-8">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Platform Rationalization</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Move from application sprawl to a managed digital campus stack.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">DGL helps institutions clarify which platforms should lead, which should integrate, and which should retire so teams can reduce duplication and improve service reliability.</p>
                                  <div className="grid grid-cols-2 gap-3">
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-2xl block">SIS</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Core record</span></div>
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-2xl block">LMS</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Learning hub</span></div>
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-2xl block">CRM</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Engagement</span></div>
                                      <div className="bg-white/85 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-2xl block">ERP</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Operations</span></div>
                                  </div>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-8">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Integration Principles</span>
                                  <div className="space-y-5">
                                      <div className="flex gap-4"><span className="material-symbols-outlined text-primary mt-1">schema</span><div><h3 className="font-headline-sm text-headline-sm mb-1">Shared data contracts</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Common identifiers and definitions across learner, staff, finance, and research records.</p></div></div>
                                      <div className="flex gap-4"><span className="material-symbols-outlined text-primary mt-1">lock</span><div><h3 className="font-headline-sm text-headline-sm mb-1">Secure access patterns</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Role-based identity, privacy controls, and audit trails embedded in service workflows.</p></div></div>
                                      <div className="flex gap-4"><span className="material-symbols-outlined text-primary mt-1">monitoring</span><div><h3 className="font-headline-sm text-headline-sm mb-1">Operational visibility</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Dashboards for service health, adoption, performance, and investment decisions.</p></div></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 items-center">
                              <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Student Success Office</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Coordinate support before risk becomes attrition.</h2><p className="font-body-md text-body-md text-on-surface-variant">We design student success operations that connect signals, ownership, interventions, and outcomes across academic, wellbeing, and administrative support teams.</p></div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">sensors</span><h3 className="font-headline-sm text-headline-sm mb-2">Sense</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Attendance, engagement, assessment, service, and advising signals.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">support_agent</span><h3 className="font-headline-sm text-headline-sm mb-2">Coordinate</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Case routing, ownership, interventions, communications, and escalation.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">task_alt</span><h3 className="font-headline-sm text-headline-sm mb-2">Evidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Outcome tracking, service learning, and leadership reporting.</p></div>
                              </div>
                          </div>
                      </section>Definitions, lineage, stewardship, and validation routines.
                      <section className="max-w-container-max mx-auto py-5 md:py-14 lg:bg-[#E0F7FA]/30 rounded-xl px-0 md:px-8 lg:mt-5">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div className="border-l-4 border-primary pl-4 lg:mb-2"><span className="font-label-caps text-label-caps text-primary uppercase">Data quality</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Definitions, lineage, stewardship, and validation routines.</p></div>
                                      <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Privacy and ethics</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Consent, retention, access rules, and responsible analytics.</p></div>
                                      <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Reporting confidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Regulatory returns, management packs, and board-ready evidence.</p></div>
                                      <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Decision support</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Analytics for learning, research, services, workforce, and finance.</p></div>
                                  </div>
                              </div>
                              <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Academic Data Trust</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Make data a governed institutional asset, not a reporting scramble.</h2><p className="font-body-md text-body-md text-on-surface-variant">We define governance, ownership, controls, and insight practices that make institutional data more usable while protecting students, staff, researchers, and partners.</p></div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
                              <img src={assetPath("/asset/industry/education/3-optimized.webp")} alt="Education innovation and research collaboration" className="w-full h-[300px] md:h-[390px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                              <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Innovation Programs</span><h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Create pathways between academia, industry, and community impact.</h2><p className="font-body-md text-body-md text-on-surface-variant mb-5">We help education and research organizations structure innovation programs, knowledge exchange, incubators, digital labs, and partner ecosystems with clear governance and measurable outcomes.</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><div className="border-l-4 border-primary bg-white p-4"><h3 className="font-headline-sm text-headline-sm mb-2">Partner networks</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Shared projects, collaboration models, and external engagement.</p></div><div className="border-l-4 border-secondary bg-white p-4"><h3 className="font-headline-sm text-headline-sm mb-2">Impact evidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Benefits tracking, case studies, reporting, and adoption signals.</p></div></div></div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
                              <div><span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Transformation Scorecard</span><h2 className="font-headline-lg text-headline-lg text-on-surface">Measure progress in terms leaders and academic teams can use.</h2></div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><strong className="text-primary text-3xl block mb-2">360</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Learner insight</span></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-4"><strong className="text-primary text-3xl block mb-2">1x</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Data model</span></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><strong className="text-primary text-3xl block mb-2">4</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Service domains</span></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-4"><strong className="text-primary text-3xl block mb-2">90d</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Roadmap sprint</span></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto pt-10 pb-14">
                          <div className="border-t border-outline-variant/40 pt-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-8 lg:gap-12 items-end">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Education Partnership</span>
                                      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Move from fragmented initiatives to a governed education transformation portfolio.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">DGL works with leadership teams to prioritize high-value improvements, confirm platform readiness, and shape a delivery roadmap that supports students, researchers, faculty, and administrators.</p>
                                  </div>
                                  <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden">
                                      <div className="grid grid-cols-1 sm:grid-cols-3">
                                          <div className="p-5 border-b sm:border-b-0 sm:border-r border-outline-variant/30"><span className="font-label-caps text-label-caps text-primary uppercase">Review</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Journeys, platforms, data, risks, and delivery readiness.</p></div>
                                          <div className="p-5 border-b sm:border-b-0 sm:border-r border-outline-variant/30 bg-[#E0F7FA]/25"><span className="font-label-caps text-label-caps text-primary uppercase">Prioritize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Initiatives with clear academic value and achievable outcomes.</p></div>
                                          <div className="p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Mobilize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Governance, delivery waves, adoption, and measurable benefits.</p></div>
                                      </div>
                                      <div className="border-t border-outline-variant/30 p-4 flex flex-col sm:flex-row gap-3 sm:justify-end">
                                          <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start Assessment <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                          <Link className="inline-flex items-center justify-center gap-2 bg-white border border-secondary/30 text-secondary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary transition-colors" href="#">Discuss Program</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
