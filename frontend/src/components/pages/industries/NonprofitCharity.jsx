import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function NonprofitCharity() {
  return (
    <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="nonprofit-hero-section relative -mt-24 md:-mt-8 mb-12 -mx-gutter min-h-[620px] md:min-h-[520px] flex items-start overflow-hidden bg-white">
                          <img src={assetPath("/asset/industry/non_profit_charity/1-optimized.webp")} alt="Non-profit and charity digital transformation for mission-driven impact" className="nonprofit-hero-image absolute inset-0 w-full h-full object-cover blur-[1.5px] scale-[1.01]" fetchPriority="high" loading="eager" decoding="async" />
                          <div className="absolute inset-0 bg-white/78"></div>
                          <div className="absolute inset-0 bg-[#E0F7FA]/30"></div>
                          <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-fixed/25 blur-3xl opacity-70"></div>
                          <div className="nonprofit-hero-content relative z-10 w-full max-w-container-max mx-auto px-gutter pb-14 md:pb-20 pt-8 md:pt-14 lg:pt-16">
                              <div className="max-w-4xl">
                                  <nav className="nonprofit-hero-breadcrumb flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-6">
                                      <span>Industry</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-primary">Nonprofit <span className="hidden min-[360px]:inline">&amp; Charity</span><span className="min-[360px]:hidden">&amp;<br />Charity</span></span>
                                  </nav>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">Mission-Driven Transformation</span>
                                  <h1 className="nonprofit-hero-title font-display-lg text-display-lg text-on-surface mb-6 max-w-3xl">Digital tools for stronger community impact.</h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">DGL helps non-profit organizations, charitable foundations, NGOs, and social impact teams modernize fundraising, program delivery, volunteer operations, governance, and impact reporting with practical, mission-aligned change.</p>
                                  <div className="nonprofit-hero-actions flex flex-col sm:flex-row gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Shape Impact Roadmap <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/60 text-primary px-6 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:border-primary transition-all" href="#">Assess Readiness <span className="material-symbols-outlined text-[18px]">fact_check</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Sector Priorities</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Start with the work that helps teams serve people better.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Non-profit transformation should make daily work clearer: easier giving, simpler program coordination, safer data handling, and better reporting for funders and boards.</p>
                              </div>
                              <div className="space-y-3">
                                  <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 sm:gap-5 bg-white border border-outline-variant/35 rounded-lg p-4">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Supporters</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Make it easier for donors, volunteers, and partners to engage, give, help, and stay informed.</p>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 sm:gap-5 bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-4">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Programs</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Give teams a clearer view of requests, cases, activities, risks, and follow-up actions.</p>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 sm:gap-5 bg-white border border-outline-variant/35 rounded-lg p-4">
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Reporting</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Create reliable evidence for grants, community outcomes, finance reviews, and leadership decisions.</p>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-10 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Mission Operating Focus</span>
                                  <h2 className="nonprofit-mobile-heading font-headline-lg text-headline-lg text-on-surface mb-4"><span className="hidden sm:inline">Keep donations, programs, volunteers, and reporting working together.</span><span className="sm:hidden">Keep donations, programs, and reporting connected.</span></h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">DGL helps non-profit teams remove friction from the work that matters most, so staff can spend less time chasing information and more time supporting communities.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Raise funds</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Track donations, campaigns, pledges, grants, and supporter follow-up in one place.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Run programs</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Manage services, referrals, field work, partner handoffs, and case updates.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Support people</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Coordinate volunteers, staff tasks, training, checks, and local outreach activity.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Show impact</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Report what was delivered, who was reached, what changed, and what needs attention.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="relative left-1/2 w-screen -translate-x-1/2 lg:left-auto lg:w-auto lg:translate-x-0 lg:mx-auto max-w-none lg:max-w-container-max py-10 md:py-14 bg-[#E0F7FA]/30 px-4 md:px-8 lg:rounded-xl">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.03fr_0.97fr] gap-8 lg:gap-12 items-center">
                              <img src={assetPath("/asset/industry/non_profit_charity/2-optimized.webp")} alt="Non-profit team planning donor engagement and community outreach" className="w-full h-[300px] md:h-[410px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Fundraising &amp; Donor Engagement</span>
                                  <h2 className="nonprofit-mobile-heading font-headline-lg text-headline-lg text-on-surface mb-4"><span className="hidden sm:inline">Build supporter relationships that are easier to understand, manage, and grow.</span><span className="sm:hidden">Build stronger supporter relationships.</span></h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">We help fundraising teams improve donor data, campaign workflows, segmentation, stewardship, and income reporting so every interaction is connected to a clearer supporter journey.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Supporter journeys</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Acquisition, giving history, preferences, pledges, and acknowledgements.</p></div>
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Campaign control</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Appeals, events, major gifts, grants, recurring giving, and reporting.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Grant Management Modernization</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Improve visibility from funding opportunity to award evidence.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Grant-funded work needs disciplined tracking without slowing mission delivery. DGL helps teams align applications, budgets, conditions, milestones, risks, and reporting obligations.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="border-t-4 border-primary bg-white p-5 rounded-lg"><h3 className="font-headline-sm text-headline-sm mb-2">Pipeline</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Opportunity tracking, eligibility checks, partner inputs, and approval routes.</p></div>
                                  <div className="border-t-4 border-secondary bg-white p-5 rounded-lg"><h3 className="font-headline-sm text-headline-sm mb-2">Delivery</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Milestones, spend, risks, outputs, variation requests, and funder updates.</p></div>
                                  <div className="border-t-4 border-primary bg-white p-5 rounded-lg"><h3 className="font-headline-sm text-headline-sm mb-2">Evidence</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Outcomes, beneficiary reach, audit records, lessons learned, and renewal cases.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-center">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-8 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Volunteer Program Enablement</span>
                                  <h2 className="nonprofit-mobile-heading font-headline-lg text-headline-lg text-on-surface mb-5"><span className="hidden sm:inline">Support volunteers with clearer onboarding, coordination, and recognition.</span><span className="sm:hidden">Support volunteers with clearer onboarding.</span></h2>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                      <div><span className="material-symbols-outlined text-primary mb-3">how_to_reg</span><h3 className="font-headline-sm text-headline-sm mb-2">Recruit</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Roles, checks, preferences, availability, and onboarding progress.</p></div>
                                      <div><span className="material-symbols-outlined text-primary mb-3">event_available</span><h3 className="font-headline-sm text-headline-sm mb-2">Coordinate</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Scheduling, assignments, field updates, training, and safeguarding prompts.</p></div>
                                      <div><span className="material-symbols-outlined text-primary mb-3">celebration</span><h3 className="font-headline-sm text-headline-sm mb-2">Retain</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Feedback, recognition, hours, skills, and ongoing engagement signals.</p></div>
                                  </div>
                              </div>
                              <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-8">
                                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-4">Volunteer Journey</span>
                                  <div className="space-y-4">
                                      <div className="flex gap-4"><span className="w-9 h-9 rounded-lg bg-white border border-outline-variant/35 flex items-center justify-center text-primary font-bold shrink-0">1</span><p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Match people to roles that fit skills, location, availability, and safeguarding needs.</p></div>
                                      <div className="flex gap-4"><span className="w-9 h-9 rounded-lg bg-white border border-outline-variant/35 flex items-center justify-center text-primary font-bold shrink-0">2</span><p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Give coordinators a shared view of shifts, attendance, issues, and service demand.</p></div>
                                      <div className="flex gap-4"><span className="w-9 h-9 rounded-lg bg-white border border-outline-variant/35 flex items-center justify-center text-primary font-bold shrink-0">3</span><p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Use feedback and participation trends to improve training, retention, and support.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.86fr_1.14fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Program Delivery Optimization</span>
                                  <h2 className="nonprofit-mobile-heading font-headline-lg text-headline-lg text-on-surface mb-4"><span className="hidden sm:inline">Turn complex community programs into manageable service operations.</span><span className="sm:hidden">Turn community programs into manageable services.</span></h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">DGL helps organizations define service pathways, case ownership, partner handoffs, field data capture, escalation rules, and reporting routines that fit real program environments.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Referral pathways</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Clear intake, eligibility, signposting, and handoff records.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Case ownership</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Named roles, actions, notes, safeguarding flags, and closure evidence.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Field coordination</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Mobile updates, visits, community events, stock, and service requests.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Service learning</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Feedback, outcomes, incidents, demand trends, and improvement actions.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="nonprofit-impact-section max-w-container-max mx-auto py-10 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-4 md:px-8">
                          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
                              <div className="nonprofit-impact-card bg-white border border-outline-variant/35 rounded-xl p-6 md:p-8">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Data &amp; Impact Analytics</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Make impact evidence easier to collect, trust, and explain.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">We define practical data models and reporting routines that connect people served, activities delivered, outcomes achieved, funding conditions, and operational capacity.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <div className="border-l-4 border-primary pl-4"><span className="font-label-caps text-label-caps text-primary uppercase">Outcome measures</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Shared definitions, evidence standards, and reporting cadence.</p></div>
                                      <div className="border-l-4 border-secondary pl-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Data stewardship</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Ownership, privacy, retention, consent, and validation routines.</p></div>
                                  </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                  <div className="bg-white/90 border border-outline-variant/35 rounded-lg p-5"><strong className="text-primary text-3xl block mb-2">Reach</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">People served</span></div>
                                  <div className="bg-white/90 border border-outline-variant/35 rounded-lg p-5"><strong className="text-primary text-3xl block mb-2">Need</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Demand signals</span></div>
                                  <div className="bg-white/90 border border-outline-variant/35 rounded-lg p-5"><strong className="text-primary text-3xl block mb-2">Use</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Resource flow</span></div>
                                  <div className="bg-white/90 border border-outline-variant/35 rounded-lg p-5"><strong className="text-primary text-3xl block mb-2">Change</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Outcome evidence</span></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Governance &amp; Compliance</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Strengthen oversight without losing agility.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Non-profits need visible controls for donor trust, charity reporting, safeguarding, procurement, cyber risk, privacy, financial stewardship, and partner delivery.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden">
                                  <div className="grid grid-cols-1 md:grid-cols-2">
                                      <div className="p-5 border-b md:border-r border-outline-variant/30"><span className="material-symbols-outlined text-secondary mb-3">policy</span><h3 className="font-headline-sm text-headline-sm mb-2">Control Library</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Policies, approvals, delegations, risk registers, and audit evidence.</p></div>
                                      <div className="p-5 border-b border-outline-variant/30 bg-[#E0F7FA]/20"><span className="material-symbols-outlined text-secondary mb-3">security</span><h3 className="font-headline-sm text-headline-sm mb-2">Safeguarding &amp; Privacy</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Access rules, consent, incident handling, retention, and secure information sharing.</p></div>
                                      <div className="p-5 md:border-r border-outline-variant/30 bg-[#E0F7FA]/20"><span className="material-symbols-outlined text-secondary mb-3">handshake</span><h3 className="font-headline-sm text-headline-sm mb-2">Partner Assurance</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Due diligence, service agreements, monitoring, and issue escalation.</p></div>
                                      <div className="p-5"><span className="material-symbols-outlined text-secondary mb-3">summarize</span><h3 className="font-headline-sm text-headline-sm mb-2">Board Reporting</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Decision packs, performance evidence, compliance updates, and funding risk.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-12 items-center">
                              <img src={assetPath("/asset/industry/non_profit_charity/3-optimized.webp")} alt="Community outreach and social impact program coordination" className="w-full h-[300px] md:h-[390px] object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Community Outreach Programs</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Coordinate outreach where community needs, partners, and resources meet.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">We help teams plan outreach activity, manage referrals, coordinate partners, capture local insight, and demonstrate impact across neighborhoods and service populations.</p>
                                  <div className="space-y-3">
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Community listening</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Surveys, forums, feedback, lived experience, and local priority mapping.</p></div>
                                      <div className="bg-white border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Partner coordination</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Shared calendars, referral rules, service capacity, and outcome tracking.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-8 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Sustainable Growth Strategies</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Build capacity for long-term impact, not one-off digital projects.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">DGL helps leadership teams sequence improvements around funding resilience, operating capacity, adoption readiness, and measurable mission value.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Prioritize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Focus investment on the services, data, and capabilities that relieve the most pressure.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Enable</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Prepare teams with clear ownership, training, support channels, and adoption measures.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Sustain</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Use impact evidence, funding insight, and service feedback to guide the next improvement wave.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto pt-10 pb-14">
                          <div className="bg-white border border-outline-variant/40 rounded-xl p-6 md:p-8 shadow-sm">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Strategic Partnership Approach</span>
                                      <h2 className="nonprofit-mobile-heading font-headline-lg text-headline-lg text-on-surface mb-4"><span className="hidden sm:inline">Create a transformation plan that funders, teams, and communities can trust.</span><span className="sm:hidden">Create a plan funders and teams can trust.</span></h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">We work with executives, program teams, fundraisers, volunteers, data owners, and partners to define practical delivery waves with clear governance and measurable outcomes.</p>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Listen</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Understand mission pressures, stakeholder needs, systems, data, and risks.</p></div>
                                      <div className="border border-outline-variant/35 rounded-lg p-4 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-primary uppercase">Shape</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Prioritize a roadmap around impact, funding, adoption, and delivery feasibility.</p></div>
                                      <div className="border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Mobilize</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Set governance, change support, reporting, and the first achievable release.</p></div>
                                  </div>
                              </div>
                              <div className="border-t border-outline-variant/30 mt-6 pt-5 flex flex-col sm:flex-row gap-3 sm:justify-end">
                                  <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Start Readiness Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                  <Link className="inline-flex items-center justify-center gap-2 bg-white border border-secondary/30 text-secondary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-[#E0F7FA]/30 transition-colors" href="#">Discuss Program</Link>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
