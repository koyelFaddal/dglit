import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function AccessibilityInclusion() {
  return (
    <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
      <section className="relative -mt-24 md:-mt-8 min-h-[620px] lg:min-h-[660px] flex items-center pt-24 md:pt-20 pb-12 overflow-hidden bg-white -mx-gutter">
                          <div className="absolute inset-0 z-0">
                              <img src={assetPath("/asset/insight/accessibility/1-optimized.webp")} alt="Accessibility and inclusive digital experience planning" className="w-full h-full object-cover object-center opacity-85 blur-[2px] md:blur-[1px] scale-[1.01]" fetchPriority="high" loading="eager" decoding="async" />
                              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/78 to-white/24"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-white/76 via-transparent to-white/16"></div>
                              <div className="absolute left-0 top-0 h-full w-2/3 bg-[#E0F7FA]/40 blur-3xl opacity-90"></div>
                          </div>
                          <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                              <div className="max-w-3xl">
                                  <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5">
                                      <span>Insights</span>
                                      <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                                      <span className="text-on-surface sm:text-primary">Accessibility &amp; Inclusion</span>
                                  </nav>
                                  <span className="inline-block bg-[#E0F7FA]/60 border border-secondary/20 text-secondary font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">Inclusive Digital Systems</span>
                                  <h1 className="font-display-lg text-[31px] leading-[39px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-on-surface mb-6">Accessibility &amp; Inclusion for Universal Digital Experience</h1>
                                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">DGL helps organizations design accessible platforms, inclusive service frameworks, assistive technology pathways, and equal access controls across digital products.</p>
                                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                      <Link className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-5 sm:px-7 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Assess Accessibility <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                                      <Link className="inline-flex items-center justify-center gap-2 bg-white/85 border border-primary/35 text-primary px-5 sm:px-7 py-4 rounded-lg font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#E0F7FA]/30 transition-all" href="#">Plan Inclusive Design <span className="material-symbols-outlined text-[18px]">support_agent</span></Link>
                                  </div>
                              </div>
                          </div>
                      </section>
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-gradient-to-br from-[#E0F7FA]/55 via-white to-primary-fixed/20 p-6 md:p-8 lg:p-10">
                              <div className="max-w-4xl">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Universal Design Framework</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Make accessibility a product foundation, not a repair queue.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Inclusive digital systems are built from clear content, semantic structure, keyboard access, assistive technology support, and equal task completion paths.</p>
                              </div>
                              <div className="mt-7 grid grid-cols-1 md:grid-cols-5 gap-3">
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Vision</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Contrast, scale, focus, and non-color cues.</p></div>
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Hearing</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Captions, transcripts, and text alternatives.</p></div>
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Mobility</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Keyboard, switch, voice, and target sizing.</p></div>
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Cognition</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Plain language, steps, help, and recovery.</p></div>
                                  <div className="rounded-xl bg-white border border-outline-variant/35 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Context</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Low bandwidth, glare, noise, stress, and device limits.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.50fr_0.50fr] gap-6 lg:gap-8 items-stretch">
                              <div className="relative min-h-[320px] rounded-2xl overflow-hidden border border-outline-variant/35">
                                  <img src={assetPath("/asset/insight/accessibility/2-optimized.webp")} alt="Inclusive digital experience and accessible journey workshop" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" decoding="async" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/35 to-transparent"></div>
                                  <div className="absolute left-5 right-5 bottom-5 rounded-xl bg-white/90 border border-white/70 p-4 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Inclusive experience layer</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Journeys are checked against real access needs before patterns are reused.</p></div>
                              </div>
                              <div className="grid grid-cols-1 gap-4">
                                  <div className="rounded-2xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Entry points</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Navigation, search, assisted routes, language, and clear service starting points.</p></div>
                                  <div className="rounded-2xl border border-outline-variant/35 bg-[#E0F7FA]/35 p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Task flow</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Step order, focus states, form labels, error recovery, and saved progress.</p></div>
                                  <div className="rounded-2xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-secondary uppercase">Support continuity</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Users can switch channel or request help without losing context or dignity.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white overflow-hidden">
                              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] border-b border-outline-variant/25"><div className="p-5 bg-[#E0F7FA]/30 font-label-caps text-label-caps text-primary uppercase">WCAG criteria</div><div className="p-5 font-body-sm text-body-sm text-on-surface-variant">Success criteria are translated into product acceptance rules, test cases, and content standards.</div></div>
                              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] border-b border-outline-variant/25"><div className="p-5 bg-white font-label-caps text-label-caps text-primary uppercase">Design checks</div><div className="p-5 font-body-sm text-body-sm text-on-surface-variant">Color, spacing, focus, motion, readability, target size, and component behavior are reviewed before build.</div></div>
                              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] border-b border-outline-variant/25"><div className="p-5 bg-[#E0F7FA]/30 font-label-caps text-label-caps text-primary uppercase">Engineering tests</div><div className="p-5 font-body-sm text-body-sm text-on-surface-variant">Semantic HTML, keyboard paths, ARIA usage, validation states, and assistive technology behavior are verified.</div></div>
                              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]"><div className="p-5 bg-white font-label-caps text-label-caps text-primary uppercase">Release evidence</div><div className="p-5 font-body-sm text-body-sm text-on-surface-variant">Findings, fixes, exceptions, retests, ownership, and sign-off remain visible after launch.</div></div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 xl:grid-cols-[0.34fr_0.66fr] gap-8 lg:gap-12 items-start">
                              <div>
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Assistive Technology Integration</span>
                                  <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Design with assistive tools in the room.</h2>
                                  <p className="font-body-md text-body-md text-on-surface-variant">Accessibility becomes reliable when product teams test with the technologies people actually use to complete work.</p>
                              </div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-surface-container-lowest p-5 md:p-6">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary mb-3">screen_search_desktop</span><span className="font-label-caps text-label-caps text-primary uppercase block">Screen readers</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Names, roles, states, headings, and reading order.</p></div>
                                      <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-secondary mb-3">keyboard</span><span className="font-label-caps text-label-caps text-primary uppercase block">Keyboard input</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Tab flow, focus, shortcuts, and skip links.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-primary mb-3">closed_caption</span><span className="font-label-caps text-label-caps text-primary uppercase block">Media support</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Captions, transcripts, audio description, and pause controls.</p></div>
                                      <div className="rounded-xl bg-[#E0F7FA]/35 border border-outline-variant/35 p-5"><span className="material-symbols-outlined text-secondary mb-3">touch_app</span><span className="font-label-caps text-label-caps text-primary uppercase block">Alternate input</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Switch, voice, zoom, touch, and pointer alternatives.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-white via-[#F7FCFD] to-[#E0F7FA]/55 p-6 md:p-8 lg:p-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.58fr_0.42fr] gap-8 lg:gap-12 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">User Experience Equality Model</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Measure whether people can finish the same task with equal confidence.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Equality is measured through completion, rework, support dependence, time pressure, error recovery, and trust in the next step.</p>
                                  </div>
                                  <div className="grid grid-cols-2 gap-3">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="text-[30px] font-display-lg text-primary">4</span><p className="font-label-caps text-label-caps text-primary uppercase mt-2">Journey checkpoints</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="text-[30px] font-display-lg text-secondary">0</span><p className="font-label-caps text-label-caps text-primary uppercase mt-2">Keyboard traps allowed</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="text-[30px] font-display-lg text-primary">AA</span><p className="font-label-caps text-label-caps text-primary uppercase mt-2">Compliance baseline</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="text-[30px] font-display-lg text-secondary">24h</span><p className="font-label-caps text-label-caps text-primary uppercase mt-2">Issue triage target</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="grid grid-cols-1 lg:grid-cols-[0.44fr_0.56fr] gap-6 lg:gap-8 items-stretch">
                              <div className="relative min-h-[300px] rounded-2xl overflow-hidden border border-outline-variant/35">
                                  <img src={assetPath("/asset/insight/accessibility/3-optimized.webp")} alt="Barrier free accessible technology systems" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" decoding="async" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/36 to-transparent"></div>
                                  <div className="absolute left-5 right-5 bottom-5 rounded-xl bg-white/90 border border-white/70 p-4 shadow-sm"><span className="font-label-caps text-label-caps text-primary uppercase">Barrier-free stack</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">The platform stack carries accessibility rules into every release.</p></div>
                              </div>
                              <div className="rounded-2xl border border-outline-variant/35 bg-white p-6 md:p-8">
                                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Barrier-Free Interaction Systems</span>
                                  <div className="space-y-3">
                                      <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Forms</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Labels, grouping, validation, error summaries, and save progress.</p></div>
                                      <div className="rounded-xl border border-outline-variant/35 bg-white p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Controls</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Target size, state visibility, keyboard operation, and touch support.</p></div>
                                      <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-4"><span className="font-label-caps text-label-caps text-primary uppercase">Feedback</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Status messages, confirmations, alerts, and next-step guidance.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-surface-container-lowest p-5 md:p-6">
                              <div className="grid grid-cols-1 md:grid-cols-[0.26fr_0.74fr] gap-6">
                                  <div className="p-2 md:p-4">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Cognitive Accessibility Enhancements</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface">Reduce memory load and confusion.</h2>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Chunk</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Break complex journeys into visible, manageable steps with clear progress cues. Each step should ask for only the information needed at that moment.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Explain</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Use examples, summaries, help text, and confirmation language before users commit. Guidance should reduce uncertainty without interrupting the task.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Recover</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Let users pause, correct, return, and continue without penalty. Saved state and clear error messages make recovery feel controlled.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white p-6 md:p-8">
                              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-6">Visual &amp; Audio Accessibility Systems</span>
                              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 items-stretch">
                                  <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/30 p-5"><h3 className="font-headline-sm text-headline-sm mb-3">Visual access</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Contrast, zoom, visible focus, readable type, icons with labels, and non-color status cues.</p></div>
                                  <div className="hidden md:grid place-items-center"><span className="material-symbols-outlined text-primary">sync_alt</span></div>
                                  <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><h3 className="font-headline-sm text-headline-sm mb-3">Audio access</h3><p className="font-body-sm text-body-sm text-on-surface-variant">Captions, transcripts, pause controls, audio alternatives, and clear notification language.</p></div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-gradient-to-br from-[#E0F7FA]/50 via-white to-primary-fixed/25 p-6 md:p-8 lg:p-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.40fr_0.60fr] gap-8 lg:gap-12">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Inclusive Design Governance Framework</span>
                                      <h2 className="font-headline-lg text-[25px] leading-[32px] sm:text-headline-lg sm:leading-[44px] text-on-surface mb-4">Keep accessibility alive after launch.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Governance keeps standards, ownership, training, feedback, and release evidence connected across the product lifecycle.</p>
                                  </div>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Owners</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Product, design, content, engineering, QA, and support roles share clear responsibility. Each release has named people accountable for accessible outcomes.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Practice</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Reusable checks, training, examples, and component guidance keep teams aligned. Standards become part of daily delivery instead of a late review.</p></div>
                                      <div className="rounded-xl bg-white border border-outline-variant/35 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Evidence</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Audits, defects, feedback, exceptions, and improvement decisions stay visible. Teams can prove what changed and what still needs attention.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto py-10 md:py-12">
                          <div className="rounded-2xl border border-outline-variant/35 bg-white overflow-hidden">
                              <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr]">
                                  <div className="bg-[#E0F7FA]/35 p-6 md:p-8">
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">Accessible Content Operations</span>
                                      <h2 className="font-headline-md text-[24px] leading-[31px] sm:text-headline-md sm:leading-[36px] text-on-surface mb-4">Make every release readable, navigable, and understandable.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant">Content operations keep accessibility visible in daily publishing, product updates, support journeys, and knowledge systems.</p>
                                  </div>
                                  <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Alt Text</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Images, charts, and icons include meaningful alternatives that explain purpose.</p></div>
                                      <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/25 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Headings</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Pages use logical heading order so screen-reader navigation stays predictable.</p></div>
                                      <div className="rounded-xl border border-outline-variant/35 bg-[#E0F7FA]/25 p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Links</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Calls to action describe the destination or task instead of relying on context alone.</p></div>
                                      <div className="rounded-xl border border-outline-variant/35 bg-white p-5"><span className="font-label-caps text-label-caps text-primary uppercase">Plain Language</span><p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Instructions, errors, and service messages are concise, specific, and easy to act on.</p></div>
                                  </div>
                              </div>
                          </div>
                      </section>
      
                      <section className="max-w-container-max mx-auto pt-4 pb-12 md:pb-16">
                          <div className="rounded-2xl border border-secondary/20 bg-gradient-to-br from-[#E0F7FA]/55 via-white to-primary-fixed/25 p-6 md:p-8 lg:p-10">
                              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-center">
                                  <div>
                                      <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Accessibility Readiness</span>
                                      <h2 className="font-headline-md text-[24px] leading-[31px] sm:text-headline-md sm:leading-[36px] text-on-surface mb-3">Improve accessibility compliance with inclusive systems built into delivery.</h2>
                                      <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">Review your digital platforms for WCAG alignment, assistive technology support, content clarity, and equal task completion across user groups.</p>
                                  </div>
                                  <Link className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary rounded-lg px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container hover:shadow-lg transition-all" href="#">Start Inclusive Design Review <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                              </div>
                          </div>
                      </section>
    </main>
  );
}
