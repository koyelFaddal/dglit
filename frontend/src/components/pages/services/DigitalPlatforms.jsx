"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function DigitalPlatforms() {
  return (
    <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="max-w-container-max mx-auto pt-8 md:pt-10 pb-12 md:pb-14">
                          <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 shadow-sm">
                              <img src={assetPath("/asset/technology/digital_platform/1.png")} alt="Digital platform experience dashboard" className="absolute inset-0 h-full w-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/78 to-white/18"></div>
                              <div className="absolute inset-0 bg-[#E0F7FA]/20"></div>
                              <div className="relative min-h-[430px] md:min-h-[520px] flex items-start px-6 pt-8 pb-10 md:px-10 md:pt-12 lg:px-14 lg:pt-14">
                                  <div className="max-w-[760px]">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Technology / Digital Platforms</span>
                                      <h1 className="font-display-lg text-[34px] leading-[42px] md:text-[46px] md:leading-[54px] xl:text-[52px] xl:leading-[60px] text-on-surface mb-5">Build digital platforms people can actually use.</h1>
                                      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-4">DGL helps organizations create scalable digital foundations that improve engagement, streamline operations, and support long-term growth.From customer-facing experiences to internal collaboration and learning platforms, our solutions are designed for usability, performance, and seamless integration across the enterprise</p>
                                     
                                      <div className="flex flex-col sm:flex-row gap-3 mt-12">
                                          <Link className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary/90 transition-colors" href="#">Explore Platform Solutions</Link>
                                          <Link className="inline-flex items-center justify-center gap-2 bg-white/70 border border-primary/35 text-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors" href="#">Discuss Platform Strategy</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      
                      <section className="max-w-container-max mx-auto pt-4 pb-10 md:pb-12 border-b border-outline-variant/30">
                          <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6 shadow-sm">
                              <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-4 items-stretch">
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-5 flex flex-col justify-between">
                                      <div>
                                          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Operating Model</span>
                                          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">One platform, clear ownership.</h3>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant">Product owners, editors, administrators, and technical teams each get defined responsibilities.</p>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2 mt-5 font-label-caps text-label-caps text-secondary uppercase">
                                          <span className="bg-white/90 border border-outline-variant/30 rounded-md px-3 py-2">Users</span>
                                          <span className="bg-white/90 border border-outline-variant/30 rounded-md px-3 py-2">Content</span>
                                          <span className="bg-white/90 border border-outline-variant/30 rounded-md px-3 py-2">Services</span>
                                          <span className="bg-white/90 border border-outline-variant/30 rounded-md px-3 py-2">Data</span>
                                      </div>
                                  </div>
                                  <div className="space-y-3">
                                      <div className="border border-outline-variant/30 rounded-lg p-4 grid grid-cols-[auto_1fr] gap-3 items-start"><span className="material-symbols-outlined text-secondary">login</span><div><h3 className="font-headline-sm text-headline-sm mb-1">Access and identity</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Role-based entry points, permissions, and secure self-service journeys.</p></div></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4 grid grid-cols-[auto_1fr] gap-3 items-start bg-[#E0F7FA]/30"><span className="material-symbols-outlined text-secondary">article</span><div><h3 className="font-headline-sm text-headline-sm mb-1">Content and knowledge</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Reusable models, approval flows, publishing standards, and quality checks.</p></div></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4 grid grid-cols-[auto_1fr] gap-3 items-start"><span className="material-symbols-outlined text-secondary">sync_alt</span><div><h3 className="font-headline-sm text-headline-sm mb-1">Systems and measurement</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Integration with core systems plus analytics for adoption, search, and completion.</p></div></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 items-center">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Web Platforms</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Fast, usable web platforms for enterprise services.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">We build responsive web platforms that support service journeys, product information, self-service, campaign content, and operational workflows with maintainable front-end architecture.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">UX Systems</span></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4 bg-[#E0F7FA]/30"><span className="font-label-caps text-label-caps text-secondary uppercase">Performance</span></div>
                                      <div className="border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Accessibility</span></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/technology/digital_platform/2.png")} alt="Enterprise web platform design" className="w-full h-56 md:h-64 object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.8fr_1.2fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Enterprise Portals</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Role-based digital workspaces for people and partners.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Portals bring services, knowledge, transactions, and dashboards into one secure experience for employees, customers, suppliers, or citizens.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">badge</span><h3 className="font-headline-sm text-headline-sm mb-2">Role-based access</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Personalized services, content, permissions, and navigation.</p></div>
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">dynamic_form</span><h3 className="font-headline-sm text-headline-sm mb-2">Service journeys</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Forms, cases, approvals, status updates, and notifications.</p></div>
                                  <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">monitoring</span><h3 className="font-headline-sm text-headline-sm mb-2">User insight</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Usage analytics, engagement signals, and service improvement data.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-7 items-stretch">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Learning Management Systems</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Learning platforms that support adoption and capability building.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">DGL helps organizations design LMS experiences for onboarding, compliance training, workforce development, partner enablement, and measurable learning outcomes.</p>
                                  <div className="grid grid-cols-2 gap-3">
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block">01</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Learning paths</span></div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block">02</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Progress tracking</span></div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block">03</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Assessments</span></div>
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block">04</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Reporting</span></div>
                                  </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Learner experience</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Simple search, course discovery, mobile access, reminders, and guided paths.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Administration</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Enrollment rules, roles, catalogs, certifications, and learning operations.</p></div>
                                  <div className="sm:col-span-2 bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Enterprise learning integration</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Connect LMS data to HR, identity, collaboration, analytics, and compliance reporting so training records stay aligned with employee profiles, access rules, certification status, and role-based learning paths. Integrated learning operations reduce duplicate administration, improve audit readiness, and give managers clearer visibility into completion, capability gaps, and workforce readiness.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 items-center">
                              <img src={assetPath("/asset/technology/digital_platform/3.png")} alt="Content management platform workflow" className="w-full h-56 md:h-64 object-cover rounded-xl border border-outline-variant/35 shadow-sm" />
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Content Management Systems</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Content operations with governance, speed, and scale.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">CMS programs should help teams publish faster without losing quality. We define content models, approval workflows, reusable components, access rules, and measurement practices.</p>
                                  <div className="flex flex-wrap gap-2 font-label-caps text-label-caps text-secondary uppercase"><span className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-full px-4 py-2">Content models</span><span className="bg-white border border-outline-variant/30 rounded-full px-4 py-2">Editorial workflow</span><span className="bg-white border border-outline-variant/30 rounded-full px-4 py-2">Reusable components</span></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.82fr_1.18fr] gap-7 items-start">
                              <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-7">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Platform Governance</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Keep digital platforms maintainable after launch.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We help define ownership, release cadence, accessibility checks, content standards, analytics reviews, security responsibilities, and backlog prioritization.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Accessibility and inclusion</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Design and content standards that support usable, compliant experiences.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Integration readiness</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Identity, CRM, ERP, analytics, knowledge, and workflow system connections.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Content lifecycle</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Creation, review, publishing, translation, archival, and quality assurance.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Platform analytics</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Engagement, conversion, search, learning, and service completion metrics.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Platform Ecosystem Map</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Align each platform channel to the work it needs to support.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Instead of measuring success with generic launch metrics, we define the role each platform plays in the operating model and the practical improvements it should deliver.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-4 md:p-5 shadow-sm">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Web Platforms</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Public and internal experiences for service discovery, publishing, conversion, and support.</p></div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Portals</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Role-based workspaces for tasks, cases, documents, dashboards, and partner collaboration.</p></div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">LMS</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Structured learning, compliance, onboarding, assessments, and capability reporting.</p></div>
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">CMS</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Reusable content, approval workflows, localization, quality checks, and publishing control.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto pt-8 pb-20">
                          <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-6 md:p-8">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Digital Platform Roadmap</span>
                                      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Plan the next platform release around user value.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">We help teams decide which journeys, content models, integrations, learning experiences, and governance improvements should move first so the platform becomes easier to operate after launch.</p>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="bg-white/90 border border-outline-variant/35 rounded-lg p-4">
                                          <span className="font-label-caps text-label-caps text-secondary uppercase">Audit</span>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Review journeys, content, technology, and ownership gaps.</p>
                                      </div>
                                      <div className="bg-white/90 border border-outline-variant/35 rounded-lg p-4">
                                          <span className="font-label-caps text-label-caps text-secondary uppercase">Prioritize</span>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Rank releases by user need, risk, cost, and business value.</p>
                                      </div>
                                      <Link className="bg-white border border-secondary/35 rounded-lg p-4 flex flex-col justify-between min-h-[132px] hover:shadow-sm transition-shadow" href="#">
                                          <span className="font-label-caps text-label-caps text-secondary uppercase">Start Review</span>
                                          <span className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary uppercase mt-5">Discuss Platform Scope <span className="material-symbols-outlined text-[18px]">arrow_forward</span></span>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto pb-8">
                          <div className="bg-white border border-outline-variant/40 rounded-xl p-5 md:p-6 shadow-sm">
                              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-5 items-center">
                                  <div className="w-12 h-12 rounded-lg bg-[#E0F7FA]/30 border border-outline-variant/35 flex items-center justify-center">
                                      <span className="material-symbols-outlined text-secondary">forum</span>
                                  </div>
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2">Platform Consultation</span>
                                      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-1">Need a practical view of your digital platform priorities?</h2>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant">Discuss the right next step for web, portal, LMS, or CMS modernization with a focused review of users, content, integrations, and governance.</p>
                                  </div>
                                  <Link className="inline-flex items-center justify-center gap-2 bg-[#E0F7FA]/30 border border-secondary/30 text-secondary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors" href="#">Talk To Our Experts <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
