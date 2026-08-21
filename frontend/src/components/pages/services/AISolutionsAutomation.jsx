import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function AISolutionsAutomation() {
  return (
    <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="max-w-container-max mx-auto pt-8 md:pt-10 pb-12 md:pb-16">
                          <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl overflow-hidden">
                              <div className="grid grid-cols-1 xl:grid-cols-[0.98fr_1.02fr] gap-0 items-stretch">
                                  <div className="p-7 md:p-10 lg:p-12 xl:pr-10 flex flex-col justify-center">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-5">Technology / AI Solutions &amp; Automation</span>
                                      <h1 className="ai-mobile-hero-title font-display-lg text-[38px] leading-[46px] md:text-[50px] md:leading-[58px] xl:text-[54px] xl:leading-[62px] text-on-surface mb-6 max-w-[780px]">Governed AI automation for <span className="whitespace-nowrap">enterprise teams.</span></h1>
                                      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-7">DGL helps teams identify practical AI use cases, automate repeatable workflows, and deploy governed solutions that improve speed, quality, and decision confidence.</p>
                                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
                                          <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Discover</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Use cases tied to operational friction.</p></div>
                                          <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Automate</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Workflows with controls and owners.</p></div>
                                          <div className="bg-white/85 border border-outline-variant/35 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Govern</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Monitor quality, risk, and adoption.</p></div>
                                      </div>
                                  </div>
                                  <div className="bg-white/65 border-t xl:border-t-0 xl:border-l border-outline-variant/35 p-5 md:p-7 flex flex-col justify-start pt-5 md:pt-7 xl:pt-9">
                                      <img src={assetPath("/asset/technology/ai_solution_automation/1-optimized.webp")} alt="AI automation command center" className="w-full h-52 md:h-64 object-cover rounded-lg border border-outline-variant/35 shadow-sm mb-4" fetchPriority="high" loading="eager" decoding="async" />
                                      <div className="grid grid-cols-3 gap-3">
                                          <div className="border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block">AI</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Assist</span></div>
                                          <div className="border border-outline-variant/30 rounded-lg p-4 bg-[#E0F7FA]/30"><strong className="text-primary text-xl block">RPA</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Execute</span></div>
                                          <div className="border border-outline-variant/30 rounded-lg p-4"><strong className="text-primary text-xl block">API</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Connect</span></div>
                                      </div>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                                          <div className="bg-white/80 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Deployment Readiness</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Data, access, controls, and release paths prepared before build.</p></div>
                                          <div className="bg-white/80 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Adoption Support</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Users, reviewers, and process owners aligned for day-one use.</p></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.7fr_1.3fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Automation Operating Model</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Move from isolated bots to managed digital operations.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Automation works best when it is treated as an operating capability: intake, design, data access, controls, release management, and measurable outcomes.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">search</span><h3 className="font-headline-sm text-headline-sm mb-2">Intake</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Prioritize high-volume, rules-based, and decision-heavy work.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">account_tree</span><h3 className="font-headline-sm text-headline-sm mb-2">Design</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Map triggers, exceptions, data needs, and ownership.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">precision_manufacturing</span><h3 className="font-headline-sm text-headline-sm mb-2">Build</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Deploy automation, AI assistance, integrations, and alerts.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="material-symbols-outlined text-secondary mb-3">verified_user</span><h3 className="font-headline-sm text-headline-sm mb-2">Control</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Monitor quality, approvals, security, and human review.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="ai-mobile-solution-section max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 items-center">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Document Intelligence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Extract, classify, summarize, and route documents with review checkpoints.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Service Automation</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Automate requests, triage, notifications, knowledge lookup, and case updates.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Decision Support</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Surface risk signals, recommendations, forecasts, and operational exceptions.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-xl p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Process Orchestration</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Connect tasks across applications, approvals, teams, and reporting flows.</p></div>
                              </div>
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Solution Areas</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Practical AI for operations, not experimental clutter.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We focus on use cases that reduce manual work, improve response quality, and create trusted decision support inside existing enterprise processes.</p>
                              </div>
                          </div>
                      </section>
                      <section className="ai-mobile-workflow-section max-w-container-max mx-auto py-12 md:py-14 bg-[#E0F7FA]/30 rounded-xl px-6 md:px-8">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-7 items-center">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Workflow Automation</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Automate the handoffs that slow teams down.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant mb-5">DGL designs automations for approvals, case routing, data updates, report preparation, reconciliation, and user notifications while keeping people in control of exceptions.</p>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                      <div className="ai-mobile-workflow-card bg-white/85 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Trigger</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Events from forms, systems, email, or data changes.</p></div>
                                      <div className="ai-mobile-workflow-card bg-white/85 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Action</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Tasks, checks, updates, routing, and notifications.</p></div>
                                      <div className="ai-mobile-workflow-card bg-white/85 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Review</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Human approval where judgment or risk matters.</p></div>
                                  </div>
                              </div>
                              <img src={assetPath("/asset/technology/ai_solution_automation/2-optimized.webp")} alt="Workflow automation and AI operations" className="w-full h-56 md:h-64 object-cover rounded-xl border border-outline-variant/35 shadow-sm" loading="lazy" decoding="async" />
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 lg:pl-5">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Machine Learning Applications</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Models that support measurable business decisions.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">We focus machine learning on repeatable operational decisions where data quality, explainability, and business ownership can be clearly managed.</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Forecasting</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Demand, workload, utilization, and service volume planning.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Classification</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Triage, routing, prioritization, and exception detection.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Recommendation</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Next-best actions, knowledge suggestions, and decision prompts.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14 border-y border-outline-variant/30">
                          <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-7 items-center">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-5 md:p-6 shadow-sm">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Signal</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Operational events, cases, transactions, and user activity.</p></div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Sense</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Rules, models, thresholds, and exception logic.</p></div>
                                      <div className="bg-white border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Act</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Tasks, alerts, summaries, routing, and approvals.</p></div>
                                      <div className="bg-[#E0F7FA]/30 border border-outline-variant/30 rounded-lg p-4"><span className="font-label-caps text-label-caps text-secondary uppercase">Learn</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Outcome tracking, feedback, retraining, and improvement cycles.</p></div>
                                  </div>
                              </div>
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Operational Intelligence</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Create a live feedback loop around automated work.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Automation becomes more valuable when teams can see what happened, why it happened, what needs attention, and which process should improve next.</p>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-12 md:py-14">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-7 items-stretch">
                              <div className="bg-white border border-outline-variant/35 rounded-xl p-6 md:p-7 shadow-sm">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Responsible Automation</span>
                                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Governance built into the workflow.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">AI and automation need clear boundaries. We define access, data use, validation, escalation, audit trails, and monitoring so automation remains dependable.</p>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Human-in-loop controls</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Review steps for sensitive outputs, exceptions, approvals, and policy decisions.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Data and access rules</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Role-based data access, privacy boundaries, and secure workflow permissions.</p></div>
                                  <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Quality monitoring</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Track accuracy, completion rates, exception volume, and business impact.</p></div>
                                  <div className="bg-white border border-outline-variant/35 rounded-lg p-5"><h3 className="font-headline-sm text-headline-sm mb-2">Change readiness</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Train users, adjust roles, and communicate how automated work should be handled.</p></div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12 border-y border-outline-variant/30">
                          <div className="ai-mobile-stats grid grid-cols-1 md:grid-cols-4 gap-5 px-4 md:px-8 lg:px-10">
                              <div><strong className="text-primary text-3xl block mb-2">35%</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Manual effort reduction</span></div>
                              <div><strong className="text-primary text-3xl block mb-2">24/7</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Workflow monitoring</span></div>
                              <div><strong className="text-primary text-3xl block mb-2">1x</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Reusable control model</span></div>
                              <div><strong className="text-primary text-3xl block mb-2">90d</strong><span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Automation roadmap</span></div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto pt-4 pb-12 mt-12">
                          <div className="bg-white border border-outline-variant/40 rounded-xl p-7 md:p-9 shadow-sm">
                              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-7 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">AI Automation Studio</span>
                                      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">Start with a focused automation opportunity review.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Identify the highest-value AI and automation candidates, confirm feasibility, and define a governed delivery roadmap your teams can execute.</p>
                                  </div>
                                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-[#E0F7FA]/30 border border-secondary/30 text-secondary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-white transition-colors" href="#">Review Opportunities <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white border border-outline-variant/40 text-primary rounded-lg px-5 py-3 font-label-caps text-label-caps uppercase tracking-widest" href="#">Build Roadmap</Link>
                                  </div>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
