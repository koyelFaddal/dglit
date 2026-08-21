import { assetPath } from "@/lib/assetPath";
export default function CaseStudies() {
    return (
        <>
            <section className="mobile-section-tight py-24 px-gutter max-w-container-max mx-auto ">
                <div className="architects-layout grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                    <div className="lg:col-span-5">
                        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Architects of the Digital Future</h2>
                        <div
                            className="architects-image-wrap max-w-[520px] overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
                            <img src={assetPath("/asset/architect/1.webp")} alt="Architectural digital transformation visual"
                                className="w-full aspect-[4/3] object-cover object-center" />
                        </div>
                    </div>
                    <div className="lg:col-span-7 lg:pt-12">
                        <div className="space-y-6">
                            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                                Denova GloSoft Limited (DGL) is a leading global enterprise delivering strategic innovation and
                                digital
                                transformation. We empower organizations to navigate the complexities of the modern digital
                                landscape
                                through a fusion of advanced technology and strategic consulting.
                            </p>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                With a foundation built on precision and trust, we have evolved from a specialized technical
                                firm into a
                                multi-disciplinary global powerhouse. Our approach is rooted in understanding the unique DNA of
                                our
                                clients' businesses, ensuring that every digital initiative we undertake delivers measurable,
                                long-term
                                value.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
                                <div>
                                    <div className="font-display-sm text-display-sm text-primary mb-2">22+</div>
                                    <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">Years of
                                        Excellence</div>
                                </div>
                                <div>
                                    <div className="font-display-sm text-display-sm text-primary mb-2">500+</div>
                                    <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">Enterprise
                                        Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
