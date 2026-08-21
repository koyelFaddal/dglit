"use client";

import { useState } from "react";
import { assetPath } from "@/lib/assetPath";
export default function ArchitectureSection() {
    const [mobileOffice, setMobileOffice] = useState(null);

    const offices = {
        uk: { title: "United Kingdom Office", address: "7th Floor, Regal House, London Road, Twickenham, London, UK TW13QS", phone: "0800-014-8883 / +447448214815" },
        qatar: { title: "Qatar Office", address: "301, Azizia Commercial Complex, Doha, Qatar", phone: "+974 7142 8783" },
        usa: { title: "USA Office", address: "20990 Valley Green Drive, #696, Cupertino, California 95014, USA", phone: "+1 (408) 495-1961" },
        india: { title: "India Office", address: "417, Rio Arcade, 27th Main Rd, 1 Sector, HSR Layout, Bengaluru, Karnataka 560102, India", phone: "+91 8035660356" },
        uae: { title: "UAE Office", address: "Denova Glosoft FZ-LLC, BIZ01173 Compass Building, Al Shohada Road, AL Hamra Industrial Zone, Ras Al Khaimah, UAE" },
        maldives: { title: "Maldives Office", address: "Ma Starling Grade, Buruzu Magu, Malé, Maldives" },
    };

    return (
        <>
            <section className="defer-offscreen mobile-section-top-tight py-20 bg-surface">
                <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-12 gap-gutter">
                    <div className="col-span-12 lg:col-span-5">
                        <h2 className="font-headline-md text-headline-md mb-8">Our Certifications</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 lg:min-h-[212px] bg-surface-container-low flex flex-col items-center justify-center text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">verified</span>
                                <p className="font-label-sm text-label-sm">ISO 9001:2015</p>
                            </div>
                            <div className="p-6 lg:min-h-[212px] bg-surface-container-low flex flex-col items-center justify-center text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">security</span>
                                <p className="font-label-sm text-label-sm">ISO 27001</p>
                            </div>
                            <div className="p-6 lg:min-h-[212px] bg-surface-container-low flex flex-col items-center justify-center text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">cloud_done</span>
                                <p className="font-label-sm text-label-sm">AWS/Azure Certified</p>
                            </div>
                            <div className="p-6 lg:min-h-[212px] bg-surface-container-low flex flex-col items-center justify-center text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-4">workspace_premium</span>
                                <p className="font-label-sm text-label-sm">CMMI Level 5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        <h2 className="font-headline-md text-headline-md mb-8">Our Global Presence</h2>
                        <div
                            className="mobile-global-presence-card relative w-full min-h-[760px] sm:min-h-[660px] md:min-h-[620px] lg:min-h-[440px] bg-surface-container-highest rounded-lg overflow-hidden">
                            {/* Map Placeholder with Location Markers */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0">
                                <img className="h-full w-full object-fill"
                                    alt="Map showing DGL offices across the United Kingdom, Qatar, USA, India, UAE, and Maldives"
                                    loading="lazy" decoding="async"
                                    data-alt="A stylized, minimalist outline map of the world presented in a light gray and blue aesthetic. Subtle pin markers highlight company office regions across the United Kingdom, Qatar, United States, India, United Arab Emirates, and Maldives. The style is clean, modern, and data-centric, emphasizing global connectivity and strategic geographic reach."
                                    src={assetPath("/asset/logo/global-presence-map.webp")} />
                                </div>
                            <div className="absolute inset-0">
                                <div
                                    className="relative h-full w-full">
                                    <div tabIndex="0" onClick={() => setMobileOffice("uk")}
                                        className="group absolute left-[46%] top-[28.4%] z-10 h-3 w-3 md:h-6 md:w-6 -translate-y-full text-primary cursor-pointer hover:z-30 focus:z-30 outline-none">
                                        <span className="material-symbols-outlined absolute bottom-0 left-1/2 -translate-x-1/2 text-sm md:text-2xl transition-transform group-hover:scale-125 group-focus:scale-125">location_on</span>
                                        <h5 className="absolute bottom-0 left-full ml-0 md:ml-1 whitespace-nowrap rounded px-0.5 md:px-1 text-[8px] leading-none sm:text-[10px] md:text-base md:leading-normal font-bold transition-colors group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">United Kingdom</h5>
                                        <div className="pointer-events-none absolute left-0 top-full mt-2 hidden w-72 rounded-md bg-white p-4 text-left text-gray-900 opacity-0 shadow-xl transition-opacity md:block group-hover:opacity-100 group-focus:opacity-100">
                                            <p className="font-bold text-primary">United Kingdom Office</p>
                                            <p className="mt-1 text-sm leading-5">7th Floor, Regal House, London Road, Twickenham, London, UK TW13QS</p>
                                            <p className="mt-2 text-sm font-semibold">0800-014-8883 / +447448214815</p>
                                        </div>
                                    </div>
                                    <div tabIndex="0" onClick={() => setMobileOffice("qatar")}
                                        className="group absolute left-[61%] top-[43.1%] z-10 h-3 w-3 md:h-6 md:w-6 -translate-y-full text-primary cursor-pointer hover:z-30 focus:z-30 outline-none">
                                        <span className="material-symbols-outlined absolute bottom-0 left-1/2 -translate-x-1/2 text-sm md:text-2xl transition-transform group-hover:scale-125 group-focus:scale-125">location_on</span>
                                        <h5 className="absolute bottom-full right-0 mb-0.5 md:mb-1 whitespace-nowrap rounded px-0.5 md:px-1 text-[8px] leading-none sm:text-[10px] md:text-base md:leading-normal font-bold transition-colors group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">Qatar</h5>
                                        <div className="pointer-events-none absolute right-0 top-full mt-2 hidden w-72 rounded-md bg-white p-4 text-left text-gray-900 opacity-0 shadow-xl transition-opacity md:block group-hover:opacity-100 group-focus:opacity-100">
                                            <p className="font-bold text-primary">Qatar Office</p>
                                            <p className="mt-1 text-sm leading-5">301, Azizia Commercial Complex, Doha, Qatar</p>
                                            <p className="mt-2 text-sm font-semibold">+974 7142 8783</p>
                                        </div>
                                    </div>
                                    <div tabIndex="0" onClick={() => setMobileOffice("usa")}
                                        className="group absolute left-[16.8%] top-[41.2%] z-10 h-3 w-3 md:h-6 md:w-6 -translate-y-full text-primary cursor-pointer hover:z-30 focus:z-30 outline-none">
                                        <span className="material-symbols-outlined absolute bottom-0 left-1/2 -translate-x-1/2 text-sm md:text-2xl transition-transform group-hover:scale-125 group-focus:scale-125">location_on</span>
                                        <h5 className="absolute bottom-0 left-full ml-0 md:ml-1 whitespace-nowrap rounded px-0.5 md:px-1 text-[8px] leading-none sm:text-[10px] md:text-base md:leading-normal font-bold transition-colors group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">USA</h5>
                                        <div className="pointer-events-none absolute left-0 top-full mt-2 hidden w-72 rounded-md bg-white p-4 text-left text-gray-900 opacity-0 shadow-xl transition-opacity md:block group-hover:opacity-100 group-focus:opacity-100">
                                            <p className="font-bold text-primary">USA Office</p>
                                            <p className="mt-1 text-sm leading-5">20990 Valley Green Drive, #696, Cupertino, California 95014, USA</p>
                                            <p className="mt-2 text-sm font-semibold">+1 (408) 495-1961</p>
                                        </div>
                                    </div>
                                    <div tabIndex="0" onClick={() => setMobileOffice("india")}
                                        className="group absolute left-[67.5%] top-[49.7%] z-10 h-3 w-3 md:h-6 md:w-6 -translate-y-full text-primary cursor-pointer hover:z-30 focus:z-30 outline-none">
                                        <span className="material-symbols-outlined absolute bottom-0 left-1/2 -translate-x-1/2 text-sm md:text-2xl transition-transform group-hover:scale-125 group-focus:scale-125">location_on</span>
                                        <h5 className="absolute left-full top-0 ml-0 md:ml-1 whitespace-nowrap rounded px-0.5 md:px-1 text-[8px] leading-none sm:text-[10px] md:text-base md:leading-normal font-bold transition-colors group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">India</h5>
                                        <div className="pointer-events-none absolute right-0 top-full mt-2 hidden w-72 rounded-md bg-white p-4 text-left text-gray-900 opacity-0 shadow-xl transition-opacity md:block group-hover:opacity-100 group-focus:opacity-100">
                                            <p className="font-bold text-primary">India Office</p>
                                            <p className="mt-1 text-sm leading-5">417, Rio Arcade, 27th Main Rd, 1 Sector, HSR Layout, Bengaluru, Karnataka 560102, India</p>
                                            <p className="mt-2 text-sm font-semibold">+91 8035660356</p>
                                        </div>
                                    </div>
                                    <div tabIndex="0" onClick={() => setMobileOffice("uae")}
                                        className="group absolute left-[62.3%] top-[49.8%] z-10 h-3 w-3 md:h-6 md:w-6 -translate-y-full text-primary cursor-pointer hover:z-30 focus:z-30 outline-none">
                                        <span className="material-symbols-outlined absolute bottom-0 left-1/2 -translate-x-1/2 text-sm md:text-2xl transition-transform group-hover:scale-125 group-focus:scale-125">location_on</span>
                                        <h5 className="absolute bottom-0 right-full mr-0 md:mr-1 whitespace-nowrap rounded px-0.5 md:px-1 text-[8px] leading-none sm:text-[10px] md:text-base md:leading-normal font-bold transition-colors group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">UAE</h5>
                                        <div className="pointer-events-none absolute right-0 top-full mt-8 hidden w-72 rounded-md bg-white p-4 text-left text-gray-900 opacity-0 shadow-xl transition-opacity md:block group-hover:opacity-100 group-focus:opacity-100">
                                            <p className="font-bold text-primary">UAE Office</p>
                                            <p className="mt-1 text-sm leading-5">Denova Glosoft FZ-LLC, BIZ01173 Compass Building, Al Shohada Road, AL Hamra Industrial Zone, Ras Al Khaimah, UAE</p>
                                        </div>
                                    </div>
                                    <div tabIndex="0" onClick={() => setMobileOffice("maldives")}
                                        className="group absolute left-[66.6%] top-[64.1%] z-10 h-3 w-3 md:h-6 md:w-6 -translate-y-full text-primary cursor-pointer hover:z-30 focus:z-30 outline-none">
                                        <span className="material-symbols-outlined absolute bottom-0 left-1/2 -translate-x-1/2 text-sm md:text-2xl transition-transform group-hover:scale-125 group-focus:scale-125">location_on</span>
                                        <h5 className="absolute bottom-0 left-full ml-0 md:ml-1 whitespace-nowrap rounded px-0.5 md:px-1 text-[8px] leading-none sm:text-[10px] md:text-base md:leading-normal font-bold transition-colors group-hover:bg-primary group-hover:text-white group-focus:bg-primary group-focus:text-white">Maldives</h5>
                                        <div className="pointer-events-none absolute bottom-full right-0 mb-2 hidden w-72 rounded-md bg-white p-4 text-left text-gray-900 opacity-0 shadow-xl transition-opacity md:block group-hover:opacity-100 group-focus:opacity-100">
                                            <p className="font-bold text-primary">Maldives Office</p>
                                            <p className="mt-1 text-sm leading-5">Ma Starling Grade, Buruzu Magu, Malé, Maldives</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {mobileOffice && (
                                <div className="absolute inset-x-2 bottom-2 z-40 rounded-md bg-white p-3 text-left text-gray-900 shadow-xl md:hidden">
                                    <button type="button" onClick={() => setMobileOffice(null)} aria-label="Close office details"
                                        className="absolute right-2 top-2 text-lg leading-none text-gray-500">×</button>
                                    <p className="pr-6 text-sm font-bold text-primary">{offices[mobileOffice].title}</p>
                                    <p className="mt-1 text-xs leading-4">{offices[mobileOffice].address}</p>
                                    {offices[mobileOffice].phone && <p className="mt-2 text-xs font-semibold">{offices[mobileOffice].phone}</p>}
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
