import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function AIFutureOfWork() {
  return (
    <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-24 md:-mt-8 min-h-[620px] lg:min-h-[660px] flex items-center pt-24 md:pt-20 pb-12 overflow-hidden bg-white -mx-gutter">
                          <div className="absolute inset-0 z-0">
                              <img src={assetPath("/asset/insight/ai_future_work/1-optimized.webp")} alt="AI enabled workplace transformation" className="w-full h-full object-cover object-center opacity-85 blur-[2px] md:blur-[1px] scale-[1.01]" fetchPriority="high" loading="eager" decoding="async" />
                              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/78 to-white/24"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/76 via-transparent to-white/16"></div>
                              <div className="absolute left-0 top-0 h-full w-2/3 bg-[#E0F7FA]/40 blur-3xl opacity-90"></div>
                          </div>
                          <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                              <div className="max-w-3xl">
                                  <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5">
                                      <span>Insights</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-on-surface sm:text-primary">AI &amp; Future of Work</span>
                                  </nav>
                                  <span className="inline-block bg-[#E0F7FA]/60 border border-secondary/20 text-secondary font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">Human-Centered AI Adoption</span>
                                  <h1 className="font-display-lg text-[31px] leading-[39px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-on-surface mb-6">AI &amp; Future of Work Solutions for Human-Centered Transformation</h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">DGL helps organizations combine AI capabilities, workforce enablement, intelligent automation, knowledge systems, and digital operating models so teams can make better decisions, reduce repetitive work, and keep people at the center of change.</p>
                                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 sm:px-7 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Explore Capabilities <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white/85 border border-primary/35 text-primary px-5 sm:px-7 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#E0F7FA]/30 transition-all" href="#">Talk to Our Team <span className="material-symbols-outlined text-[18px]">support_agent</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="relative overflow-hidden border-y border-outline-variant/30 bg-white">
                              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                                  <div className="px-0 py-7 md:py-9 lg:pr-10">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">AI &amp; Future of Work Overview</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-5">A work system, not another technology rollout.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">DGL helps enterprise teams redesign how decisions, knowledge, automation, governance, and employee support come together so AI becomes useful in daily work instead of sitting beside it.</p>
                                  </div>
                                  <div className="lg:border-l border-outline-variant/30">
                                      <div className="grid grid-cols-1 sm:grid-cols-3 h-full">
                                          <div className="p-5 md:p-6 border-t lg:border-t-0 sm:border-r border-outline-variant/25">
                                              <span className="block font-label-caps text-label-caps text-primary uppercase mb-4">Work</span>
                                              <p className="font-body-sm text-body-sm text-on-surface-variant">Tasks, handoffs, exceptions, and decisions are mapped before tools are selected.</p>
                                          </div>
                                          <div className="p-5 md:p-6 border-t lg:border-t-0 sm:border-r border-outline-variant/25 bg-[#E0F7FA]/30">
                                              <span className="block font-label-caps text-label-caps text-primary uppercase mb-4">People</span>
                                              <p className="font-body-sm text-body-sm text-on-surface-variant">Employees receive role-based guidance, confidence, and clear escalation paths.</p>
                                          </div>
                                          <div className="p-5 md:p-6 border-t lg:border-t-0 border-outline-variant/25">
                                              <span className="block font-label-caps text-label-caps text-primary uppercase mb-4">Control</span>
                                              <p className="font-body-sm text-body-sm text-on-surface-variant">Governance, evidence, and improvement routines stay close to the work itself.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-0">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.68fr_1.32fr] gap-8 lg:gap-12 items-start">
                              <div className="xl:pt-6">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">The Changing Nature of Work</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">The workday is filling with signals people cannot process alone.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Requests, documents, customer needs, operational data, policies, and collaboration threads now arrive faster than many teams can interpret. The opportunity is to turn that noise into guided action.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden">
                                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr]">
                                      <div className="p-6 md:p-7 border-b md:border-b-0 md:border-r border-outline-variant/25">
                                          <span className="font-label-caps text-label-caps text-primary uppercase">What is rising</span>
                                          <div className="mt-5 space-y-4 font-body-sm text-body-sm text-on-surface-variant">
                                              <p>Decision volume</p>
                                              <p>Knowledge search time</p>
                                              <p>Compliance evidence</p>
                                          </div>
                                      </div>
                                      <div className="p-6 md:p-7 bg-[#E0F7FA]/30 border-b md:border-b-0 md:border-r border-outline-variant/25">
                                          <span className="font-label-caps text-label-caps text-secondary uppercase">What must change</span>
                                          <div className="mt-5 space-y-4">
                                              <div className="h-3 bg-white rounded-full overflow-hidden"><span className="block h-full w-[82%] bg-primary"></span></div>
                                              <div className="h-3 bg-white rounded-full overflow-hidden"><span className="block h-full w-[70%] bg-secondary"></span></div>
                                              <div className="h-3 bg-white rounded-full overflow-hidden"><span className="block h-full w-[58%] bg-primary-fixed-dim"></span></div>
                                          </div>
                                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-5">Work needs embedded assistance, better knowledge flow, and visible accountability.</p>
                                      </div>
                                      <div className="p-6 md:p-7">
                                          <span className="font-label-caps text-label-caps text-primary uppercase">What improves</span>
                                          <div className="mt-5 space-y-4 font-body-sm text-body-sm text-on-surface-variant">
                                              <p>Fewer manual searches</p>
                                              <p>Quicker decisions</p>
                                              <p>Cleaner handoffs</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                          <div className="mb-8 md:mb-10 max-w-3xl">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Human + AI Collaboration Model</span>
                              <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Define the shared workspace between judgment and assistance.</h2>
                              <p className="font-body-md text-body-md text-on-surface-variant">The model makes clear what people own, what AI supports, which processes control the work, and which data sources can be trusted.</p>
                          </div>
                          <div className="relative bg-white border border-outline-variant/35 rounded-xl p-5 md:p-8 overflow-hidden">
                              <div className="absolute inset-x-0 top-1/2 hidden h-px bg-outline-variant/40 lg:block"></div>
                              <div className="absolute inset-y-0 left-1/2 hidden w-px bg-outline-variant/40 lg:block"></div>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
                                  <div className="min-h-[180px] lg:min-h-[220px] flex flex-col justify-between">
                                      <span className="material-symbols-outlined text-primary text-[30px]">supervisor_account</span>
                                      <div><h3 className="font-headline-md text-headline-md text-on-surface mb-2">People provide judgment.</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Teams review context, handle exceptions, apply empathy, and remain accountable for important outcomes.</p></div>
                                  </div>
                                  <div className="min-h-[180px] lg:min-h-[220px] flex flex-col justify-between lg:text-right">
                                      <span className="material-symbols-outlined text-secondary text-[30px] lg:self-end">psychology_alt</span>
                                      <div><h3 className="font-headline-md text-headline-md text-on-surface mb-2">AI provides assistance.</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Assistants summarize, retrieve, compare, draft, classify, and suggest next steps for human review.</p></div>
                                  </div>
                                  <div className="min-h-[180px] lg:min-h-[220px] flex flex-col justify-between">
                                      <span className="material-symbols-outlined text-secondary text-[30px]">schema</span>
                                      <div><h3 className="font-headline-md text-headline-md text-on-surface mb-2">Process provides control.</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Triggers, approvals, audit points, and handoffs keep assisted work consistent and explainable.</p></div>
                                  </div>
                                  <div className="min-h-[180px] lg:min-h-[220px] flex flex-col justify-between lg:text-right">
                                      <span className="material-symbols-outlined text-primary text-[30px] lg:self-end">dataset_linked</span>
                                      <div><h3 className="font-headline-md text-headline-md text-on-surface mb-2">Data provides memory.</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Trusted content, permissions, lineage, and ownership turn organizational knowledge into reusable support.</p></div>
                                  </div>
                              </div>
                              <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mt-6 lg:mt-0 mx-auto w-full max-w-[250px] rounded-xl border border-primary/25 bg-[#E0F7FA]/80 px-5 py-4 text-center">
                                  <span className="font-label-caps text-label-caps text-primary uppercase">Human-centered operating loop</span>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.62fr_1.38fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Workforce Challenges &amp; Readiness</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Readiness is visible in the details people face every day.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Instead of treating readiness as a generic score, DGL looks at the concrete conditions that determine whether AI can be adopted safely and usefully.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden">
                                  <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.7fr_1.15fr] border-b border-outline-variant/25 bg-surface-container-lowest">
                                      <div className="p-4 font-label-caps text-label-caps text-primary uppercase">Readiness question</div>
                                      <div className="p-4 font-label-caps text-label-caps text-primary uppercase md:border-x border-outline-variant/25">Signal</div>
                                      <div className="p-4 font-label-caps text-label-caps text-primary uppercase">Practical response</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.7fr_1.15fr] border-b border-outline-variant/25">
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Do teams know when AI may be used?</div>
                                      <div className="p-4 md:border-x border-outline-variant/25"><span className="inline-flex h-2 w-24 rounded-full bg-primary"></span></div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Publish role-specific guardrails and examples.</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.7fr_1.15fr] border-b border-outline-variant/25 bg-[#E0F7FA]/20">
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Is core knowledge current and owned?</div>
                                      <div className="p-4 md:border-x border-outline-variant/25"><span className="inline-flex h-2 w-16 rounded-full bg-secondary"></span></div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Assign source owners, review cycles, and quality checks.</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.7fr_1.15fr] border-b border-outline-variant/25">
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Can employees practice safely?</div>
                                      <div className="p-4 md:border-x border-outline-variant/25"><span className="inline-flex h-2 w-20 rounded-full bg-primary-fixed-dim"></span></div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Create pilots, clinics, feedback routes, and review support.</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.7fr_1.15fr] bg-[#E0F7FA]/20">
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Are risks traceable after launch?</div>
                                      <div className="p-4 md:border-x border-outline-variant/25"><span className="inline-flex h-2 w-28 rounded-full bg-primary"></span></div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Track use, exceptions, incidents, and improvement actions.</div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.74fr_1.26fr] gap-8 lg:gap-12 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Intelligent Automation Opportunities</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Find the work that should move, pause, route, or ask for judgment.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Automation opportunities are strongest where work has repeatable patterns, clear exceptions, reliable inputs, and visible ownership.</p>
                              </div>
                              <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-white p-5 md:p-7">
                                  <div className="space-y-5">
                                      <div className="grid grid-cols-1 md:grid-cols-[130px_1fr_120px] gap-3 md:items-center">
                                          <span className="font-label-caps text-label-caps text-primary uppercase">Intake</span>
                                          <span className="min-h-[3rem] rounded-lg bg-[#E0F7FA]/40 border border-outline-variant/30 flex items-center px-4 py-3 font-body-sm text-body-sm text-on-surface-variant">Requests, forms, messages, cases, and documents enter one review path.</span>
                                          <span className="font-label-caps text-label-caps text-secondary uppercase md:text-right">Classify</span>
                                      </div>
                                      <div className="grid grid-cols-1 md:grid-cols-[130px_1fr_120px] gap-3 md:items-center md:translate-x-6">
                                          <span className="font-label-caps text-label-caps text-primary uppercase">Assist</span>
                                          <span className="min-h-[3rem] rounded-lg bg-white border border-primary/25 flex items-center px-4 py-3 font-body-sm text-body-sm text-on-surface-variant">AI drafts summaries, checks policy, suggests owners, and prepares next actions.</span>
                                          <span className="font-label-caps text-label-caps text-secondary uppercase md:text-right">Review</span>
                                      </div>
                                      <div className="grid grid-cols-1 md:grid-cols-[130px_1fr_120px] gap-3 md:items-center">
                                          <span className="font-label-caps text-label-caps text-primary uppercase">Resolve</span>
                                          <span className="min-h-[3rem] rounded-lg bg-[#E0F7FA]/40 border border-outline-variant/30 flex items-center px-4 py-3 font-body-sm text-body-sm text-on-surface-variant">Approved work creates tasks, notifications, records, and reporting evidence.</span>
                                          <span className="font-label-caps text-label-caps text-secondary uppercase md:text-right">Learn</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-12 items-center">
                              <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-white">
                                  <img src={assetPath("/asset/insight/ai_future_work/2-optimized.webp")} alt="AI adoption planning and workforce readiness session" className="w-full h-[340px] md:h-[460px] object-cover" loading="lazy" decoding="async" />
                                  <div className="absolute left-4 right-4 bottom-4 rounded-xl border border-white/70 bg-white/88 p-4 md:p-5">
                                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                          <span className="font-label-caps text-label-caps text-primary uppercase">Search less</span>
                                          <span className="font-label-caps text-label-caps text-primary uppercase">Decide faster</span>
                                          <span className="font-label-caps text-label-caps text-primary uppercase">Support better</span>
                                      </div>
                                  </div>
                              </div>
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Digital Workplace &amp; Employee Experience</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Design the employee surface around moments of need.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">The digital workplace should help people find trusted answers, complete guided tasks, request support, and understand what changed without navigating a maze of disconnected tools.</p>
                                  <div className="border-l border-outline-variant/40 pl-5 space-y-5">
                                      <div><span className="font-label-caps text-label-caps text-primary uppercase">Before work starts</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Guidance, policies, templates, and prior examples are surfaced in context.</p></div>
                                      <div><span className="font-label-caps text-label-caps text-primary uppercase">While work moves</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Status, ownership, approvals, and next steps remain visible.</p></div>
                                      <div><span className="font-label-caps text-label-caps text-primary uppercase">After work closes</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Feedback, lessons, and outcome measures update the knowledge base.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                          <div className="mb-8 max-w-3xl">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Skills, Learning &amp; Workforce Enablement</span>
                              <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Build confidence through repeated, practical use.</h2>
                              <p className="font-body-md text-body-md text-on-surface-variant">Enablement is designed as a loop, not a one-time training event. Employees need simple entry points, safe practice, peer learning, and visible support.</p>
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px_1fr] gap-4 lg:gap-6 items-center">
                              <div className="space-y-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Learn the rule</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">What AI can do, where it cannot be used, and when review is required.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5 lg:ml-10"><span className="font-label-caps text-label-caps text-primary uppercase">Practice the task</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Role-specific examples help people apply AI to real work safely.</p></div>
                              </div>
                              <div className="rounded-full border border-primary/30 bg-white aspect-square flex items-center justify-center text-center p-6">
                                  <span className="font-label-caps text-label-caps text-primary uppercase">Workforce enablement loop</span>
                              </div>
                              <div className="space-y-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5 lg:mr-10"><span className="font-label-caps text-label-caps text-primary uppercase">Share the pattern</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Useful prompts, checks, and lessons become reusable team assets.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Improve the system</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Feedback updates guidance, knowledge, controls, and support routines.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Responsible AI &amp; Governance</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Translate policy into visible working controls.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Governance becomes useful when employees can understand it, managers can operate it, and leaders can see evidence that it is working.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden">
                                  <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1fr_1fr] border-b border-outline-variant/25">
                                      <div className="p-4 bg-[#E0F7FA]/30 font-label-caps text-label-caps text-primary uppercase">Control layer</div>
                                      <div className="p-4 font-label-caps text-label-caps text-primary uppercase md:border-x border-outline-variant/25">Employee reality</div>
                                      <div className="p-4 font-label-caps text-label-caps text-primary uppercase">Evidence captured</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1fr_1fr] border-b border-outline-variant/25">
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Acceptable use</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant md:border-x border-outline-variant/25">Clear examples at the point of work</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Use cases, owners, and risk tier</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1fr_1fr] border-b border-outline-variant/25 bg-[#E0F7FA]/20">
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Human review</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant md:border-x border-outline-variant/25">Approval paths for sensitive outputs</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Reviewer, rationale, and decision</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[0.75fr_1fr_1fr]">
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Ongoing monitoring</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant md:border-x border-outline-variant/25">Issues are easy to report and improve</div>
                                      <div className="p-4 font-body-sm text-body-sm text-on-surface-variant">Incidents, quality trends, and actions</div>
                                  </div>
                              </div>
                          </div>
                      </section>
                     
                      <section className="-mx-gutter md:mx-auto max-w-container-max py-10 md:py-14 px-gutter md:px-8 bg-[#E0F7FA]/30 rounded-none md:rounded-xl">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Future Operating Model Framework</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Build the operating spine for AI-enabled work.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">The framework connects five operating responsibilities so transformation does not depend on isolated pilots or individual enthusiasm.</p>
                              </div>
                              <div className="bg-white border border-outline-variant/35 rounded-xl overflow-hidden">
                                  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] border-b border-outline-variant/25">
                                      <div className="p-5 bg-white font-label-caps text-label-caps text-primary uppercase">Workforce</div>
                                      <div className="p-5 bg-[#E0F7FA]/30 font-body-sm text-body-sm text-on-surface-variant">Role design, adoption support, capacity planning, and employee experience ownership.</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] border-b border-outline-variant/25">
                                      <div className="p-5 bg-white font-label-caps text-label-caps text-primary uppercase">Technology</div>
                                      <div className="p-5 font-body-sm text-body-sm text-on-surface-variant">Assistants, automation, integrations, knowledge access, security, and platform standards.</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] border-b border-outline-variant/25">
                                      <div className="p-5 bg-white font-label-caps text-label-caps text-primary uppercase">Governance</div>
                                      <div className="p-5 bg-[#E0F7FA]/30 font-body-sm text-body-sm text-on-surface-variant">Risk tiers, policies, review points, evidence, monitoring, and decision rights.</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] border-b border-outline-variant/25">
                                      <div className="p-5 bg-white font-label-caps text-label-caps text-primary uppercase">Processes</div>
                                      <div className="p-5 font-body-sm text-body-sm text-on-surface-variant">Workflows, handoffs, exception handling, service routines, and measurable outcomes.</div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr]">
                                      <div className="p-5 bg-white font-label-caps text-label-caps text-primary uppercase">Skills</div>
                                      <div className="p-5 bg-[#E0F7FA]/30 font-body-sm text-body-sm text-on-surface-variant">Learning paths, practice environments, coaching, champions, and continuous improvement.</div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="mb-8 max-w-3xl">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Transformation Journey Roadmap</span>
                              <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Move through adoption as a set of working rooms.</h2>
                              <p className="font-body-md text-body-md text-on-surface-variant">Each stage has a different conversation, evidence set, and decision point.</p>
                          </div>
                          <div className="mb-4 rounded-xl border border-outline-variant/30 bg-[#E0F7FA]/25 px-5 py-4">
                              <p className="font-body-sm text-body-sm text-on-surface-variant">Each room produces a concrete decision artifact, so progress is visible before the next stage begins.</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-5 border border-outline-variant/35 rounded-xl overflow-hidden bg-white">
                              <div className="p-5 md:min-h-[260px] flex flex-col justify-between gap-5 border-b md:border-b-0 md:border-r border-outline-variant/25">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Discover</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">Map work, risks, data, employee needs, and value signals.</p>
                                  </div>
                                  <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span><span>Confirm priority workflows.</span></li>
                                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0"></span><span>Surface adoption blockers.</span></li>
                                  </ul>
                                  <span className="rounded-lg border border-outline-variant/30 bg-[#E0F7FA]/30 px-3 py-2 font-label-caps text-label-caps text-secondary uppercase">Readiness brief</span>
                              </div>
                              <div className="p-5 md:min-h-[260px] flex flex-col justify-between gap-5 border-b md:border-b-0 md:border-r border-outline-variant/25 bg-[#E0F7FA]/25">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Prepare</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">Set owners, guardrails, learning, support, and measures.</p>
                                  </div>
                                  <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span><span>Name control owners.</span></li>
                                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0"></span><span>Shape enablement paths.</span></li>
                                  </ul>
                                  <span className="rounded-lg border border-outline-variant/30 bg-white px-3 py-2 font-label-caps text-label-caps text-secondary uppercase">Launch plan</span>
                              </div>
                              <div className="p-5 md:min-h-[260px] flex flex-col justify-between gap-5 border-b md:border-b-0 md:border-r border-outline-variant/25">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Pilot</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">Test real workflows with employees and active review.</p>
                                  </div>
                                  <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span><span>Measure quality signals.</span></li>
                                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0"></span><span>Capture user feedback.</span></li>
                                  </ul>
                                  <span className="rounded-lg border border-outline-variant/30 bg-[#E0F7FA]/30 px-3 py-2 font-label-caps text-label-caps text-secondary uppercase">Pilot evidence</span>
                              </div>
                              <div className="p-5 md:min-h-[260px] flex flex-col justify-between gap-5 border-b md:border-b-0 md:border-r border-outline-variant/25 bg-[#E0F7FA]/25">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Scale</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">Extend what works into roles, systems, governance, and service support.</p>
                                  </div>
                                  <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span><span>Expand support routines.</span></li>
                                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0"></span><span>Embed reusable patterns.</span></li>
                                  </ul>
                                  <span className="rounded-lg border border-outline-variant/30 bg-white px-3 py-2 font-label-caps text-label-caps text-secondary uppercase">Scale checklist</span>
                              </div>
                              <div className="p-5 md:min-h-[260px] flex flex-col justify-between gap-5">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-primary uppercase">Optimize</span>
                                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">Improve quality, cost, adoption, confidence, and business outcomes.</p>
                                  </div>
                                  <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></span><span>Review outcome trends.</span></li>
                                      <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0"></span><span>Prioritize next releases.</span></li>
                                  </ul>
                                  <span className="rounded-lg border border-outline-variant/30 bg-[#E0F7FA]/30 px-3 py-2 font-label-caps text-label-caps text-secondary uppercase">Improvement log</span>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1.35fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">What Organizations Gain</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Outcomes that show up in the flow of work.</h2>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-x-8 gap-y-6">
                                  <div className="border-t-4 border-primary pt-4"><h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Faster decisions</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Teams see context, evidence, and suggested actions without building manual reports.</p></div>
                                  <div className="border-t-4 border-secondary pt-4"><h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Less repetitive effort</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Routine steps are routed, drafted, checked, and recorded with human approval where needed.</p></div>
                                  <div className="border-t-4 border-secondary pt-4"><h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Better knowledge access</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Employees find trusted answers, prior examples, and policy guidance at the moment of need.</p></div>
                                  <div className="border-t-4 border-primary pt-4"><h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Responsible adoption</h3><p className="font-body-sm text-body-sm text-on-surface-variant">AI use is governed through practical controls, review paths, and improvement evidence.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-14">
                          <div className="relative overflow-hidden rounded-xl border border-outline-variant/35 bg-white">
                              <img src={assetPath("/asset/insight/ai_future_work/3-optimized.webp")} alt="Future workforce planning and digital employee experience" className="absolute inset-0 hidden lg:block h-full w-1/2 object-cover" loading="lazy" decoding="async" />
                              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
                                  <div className="hidden lg:block"></div>
                                  <div className="p-6 md:p-8 lg:p-10">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Long-Term Workforce Evolution Approach</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Keep the workforce model alive as expectations change.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant mb-6">DGL helps organizations establish an ongoing workforce evolution routine: listen to employees, review adoption evidence, adjust controls, refresh skills, and prioritize the next work improvements.</p>
                                      <div className="space-y-4">
                                          <div className="flex gap-4"><span className="mt-2 h-px w-10 bg-primary shrink-0"></span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Quarterly work reviews</strong> examine friction, service demand, productivity evidence, and support needs.</p></div>
                                          <div className="flex gap-4"><span className="mt-2 h-px w-10 bg-secondary shrink-0"></span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Capability refresh cycles</strong> keep learning, governance, and knowledge current as tools mature.</p></div>
                                          <div className="flex gap-4"><span className="mt-2 h-px w-10 bg-primary shrink-0"></span><p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Sustained ownership</strong> gives leaders a clear path to fund, improve, and scale what works.</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto pt-8 pb-14">
                          <div className="relative overflow-hidden border border-outline-variant/35 rounded-xl bg-[#E0F7FA]/30">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
                                  <div className="p-6 md:p-8 lg:p-10 bg-white border-b lg:border-b-0 lg:border-r border-outline-variant/30">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">AI Workforce Readiness Conversation</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Start with the work your teams most need to improve.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">DGL can help shape a focused path for AI adoption, workforce enablement, governance, and measurable improvement.</p>
                                  </div>
                                  <div className="p-6 md:p-8 lg:p-10">
                                      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
                                          <div className="space-y-3">
                                              <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Clarify</strong> the work, users, knowledge sources, and decisions that matter most.</p>
                                              <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Design</strong> the guardrails, learning model, pilots, and operating measures.</p>
                                              <p className="font-body-sm text-body-sm text-on-surface-variant"><strong className="text-on-surface">Scale</strong> the capabilities that reduce friction and improve employee confidence.</p>
                                          </div>
                                          <div className="flex flex-col gap-3">
                                              <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors" href="#">Plan AI Adoption <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                              <Link className="inline-flex items-center justify-center gap-2 bg-white border border-secondary/30 text-secondary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:border-secondary hover:bg-white/80 transition-colors" href="#">Discuss Workforce Strategy</Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
