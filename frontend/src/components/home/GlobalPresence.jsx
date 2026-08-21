import { assetPath } from "@/lib/assetPath";
export default function GlobalPresence() {
    return (
        <>
            <section className="defer-offscreen mobile-section-tight py-20 px-gutter max-w-container-max mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <img className="rounded-2xl shadow-2xl w-full h-[360px] md:h-[500px] object-cover"
                            alt="Vertical urban garden representing DGL environmental responsibility"
                            loading="lazy" decoding="async"
                            data-alt="A lush, vertical urban garden on the side of a modern glass skyscraper. The image captures the harmony between advanced technology and environmental sustainability. Soft morning sunlight filters through the greenery, reflecting off the building's glass facade. The mood is hopeful, clean, and futuristic, emphasizing a commitment to ESG principles in a corporate context."
                            src={assetPath("/asset/esg/1.webp")} />
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="font-label-caps text-label-caps text-accent-teal tracking-[0.2em] mb-4 block uppercase">Our
                            Responsibility</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">ESG &amp; Social Value</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">At DGL, innovation is only valuable if
                            it
                            contributes to a sustainable and equitable world. Our ESG framework is integrated into every
                            business
                            decision we make.</p>
                        <div className="space-y-6">
                            <div className="flex gap-6">
                                <div
                                    className="flex-shrink-0 w-12 h-12 bg-accent-teal/10 rounded-lg flex items-center justify-center text-accent-teal">
                                    <span className="material-symbols-outlined">eco</span>
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Environmental Stewardship
                                    </h4>
                                    <p className="font-body-md text-body-md text-on-surface-variant">We are committed to achieving
                                        Net Zero by
                                        2030 through sustainable supply chain management and green computing practices.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div
                                    className="flex-shrink-0 w-12 h-12 bg-accent-teal/10 rounded-lg flex items-center justify-center text-accent-teal">
                                    <span className="material-symbols-outlined">groups</span>
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Social Inclusion</h4>
                                    <p className="font-body-md text-body-md text-on-surface-variant">Our 'Global Talent Bridge'
                                        initiative
                                        focuses on bridging the digital divide in developing regions where we operate.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div
                                    className="flex-shrink-0 w-12 h-12 bg-accent-teal/10 rounded-lg flex items-center justify-center text-accent-teal">
                                    <span className="material-symbols-outlined">balance</span>
                                </div>
                                <div>
                                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Ethical Governance</h4>
                                    <p className="font-body-md text-body-md text-on-surface-variant">We maintain uncompromising
                                        standards of
                                        transparency, ensuring 100% compliance with international ethical labor laws.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
