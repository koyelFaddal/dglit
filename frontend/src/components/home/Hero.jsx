import { assetPath } from "@/lib/assetPath";
export default function Hero() {
    return (
        <>
            <section className="relative min-h-[680px] lg:min-h-[760px] flex items-center pt-20 overflow-hidden bg-surface">
                <div className="absolute inset-0 z-0">
                    <img alt="Strategic Innovation Background"
                        className="hero-visual-balance w-full h-full object-cover object-center lg:object-right opacity-80"
                        src={assetPath("/asset/hero/hero.webp")} />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/20"></div>
                    <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-fixed/25 blur-3xl opacity-70"></div>
                </div>
                <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                    <div className="max-w-2xl">
                        <span
                            className="inline-block bg-accent-teal/10 text-accent-teal font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">GLOBAL
                            ADVISORY</span>
                        <h1 className="font-display-lg text-display-lg text-text-primary mb-8 leading-tight">Empowering Global
                            Enterprises Through Strategic Innovation</h1>
                        <p className="font-body-lg text-body-lg text-text-secondary mb-10 max-w-xl">We blend cutting-edge technology
                            with deep industry expertise to transform complex challenges into competitive advantages for the
                            world's leading organizations.</p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-caps text-label-caps hover:shadow-lg transition-all">EXPLORE
                                SOLUTIONS</button>
                            <button
                                className="border-[1.5px] border-primary text-primary px-8 py-4 rounded-lg font-label-caps text-label-caps hover:bg-primary/5 transition-all">VIEW
                                CASE STUDIES</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
