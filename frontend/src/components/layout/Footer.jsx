"use client";

import Link from "next/link";

import { useState } from "react";

const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000"
).replace(/\/$/, "");

export default function Footer() {
    const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [messageType, setMessageType] = useState("");
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      async function handleSubscribe(event) {
        event.preventDefault();
        setMessage("");
        setMessageType("");
    
        const normalizedEmail = email.trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
          setMessage("Please enter a valid email address.");
          setMessageType("error");
          return;
        }
    
        setIsSubmitting(true);
    
        try {
          const response = await fetch(`${API_BASE_URL}/api/newsletter-subscriptions`, {
            method: "POST",
            cache: "no-store",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: normalizedEmail }),
          });
          const payload = await response.json().catch(() => ({}));
    
          if (!response.ok) {
            const emailError = Array.isArray(payload?.errors?.email)
              ? payload.errors.email[0]
              : payload?.errors?.email;
            throw new Error(
              emailError ||
                payload?.message ||
                "Unable to subscribe. Please try again."
            );
          }
    
          setEmail("");
          setMessage(
            payload?.message ||
              "Thank you! You have successfully subscribed to our newsletter."
          );
          setMessageType("success");
        } catch (error) {
          setMessage(
            error instanceof Error
              ? error.message
              : "Unable to subscribe. Please try again."
          );
          setMessageType("error");
        } finally {
          setIsSubmitting(false);
        }
      }
    
    return (
        <>
            <footer className="w-full bg-surface-container-lowest border-t border-outline-variant mt-auto">
                <div
                    className="w-full py-section-padding px-gutter max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1">
                        <Link className="font-headline-sm text-headline-sm font-bold text-primary mb-4 block" href="#">Denova GloSoft
                            Limited</Link>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Delivering precision, trust, and
                            global innovation through world-class IT consulting and strategic solutions.</p>
                        <div className="flex gap-4">
                            <Link className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all"
                                href="#" aria-label="DGL on LinkedIn">
                                <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z">
                                    </path>
                                </svg>
                            </Link>
                            <Link className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all"
                                href="#" aria-label="DGL on Facebook">
                                <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z">
                                    </path>
                                </svg>
                            </Link>
                            <Link className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all"
                                href="#" aria-label="DGL on YouTube">
                                <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z">
                                    </path>
                                </svg>
                            </Link>
                            <Link className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all"
                                href="#" aria-label="Contact DGL on WhatsApp">
                                <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path
                                        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.23-8.24 8.23-1.44 0-2.85-.38-4.1-1.11l-.29-.17-3.06.8.82-2.98-.19-.3a8.176 8.176 0 0 1-1.25-4.47c0-4.53 3.7-8.22 8.23-8.22m-3.62 3.5c-.2 0-.45.07-.65.29-.2.22-.76.75-.76 1.82 0 1.07.78 2.1 0.88 2.24 0.11.14 1.53 2.34 3.7 3.27 0.52.22.92.35 1.24.45 0.52.16.99.14 1.36.08 0.41-.06 1.27-.52 1.45-1.01 0.18-.5.18-.92.12-1.01-.06-.09-.23-.14-.5-.28-.26-.14-1.53-.75-1.77-.83-.24-.09-.41-.14-.58.13-.17.27-.68.85-.83 1.02-.15.17-.31.2-.57.06-.27-.14-1.13-.41-2.16-1.32-.8-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.31.41-.47.14-.15.18-.26.28-.44 0.09-.18.05-.34-.02-.47-.07-.14-.58-1.4-.8-1.92-.22-.51-.43-.44-.59-.44z">
                                    </path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-label-caps text-label-caps text-text-primary mb-6">Solutions</h4>
                        <ul className="space-y-3">
                            <li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors duration-300"
                                href="/strategy/business-consulting">Strategy</Link></li>
                            <li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors duration-300"
                                href="/services/enterprise-applications">Technology</Link></li>
                            <li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors duration-300"
                                href="/industries/government-public-sector">Industries</Link></li>
                            <li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors duration-300"
                                href="/ecosystem/strategic-partners/microsoft">Ecosystem</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-caps text-label-caps text-text-primary mb-6">Company</h4>
                        <ul className="space-y-3">
                            <li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors duration-300"
                                href="/company/about-dgl">About Us</Link></li>
                            <li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors duration-300"
                                href="/company/careers">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label-caps text-label-caps text-text-primary mb-6">Connect</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Subscribe to our newsletter for global
                            insights.</p>
                        <form className="flex border-b border-outline-variant pb-2" onSubmit={handleSubscribe} noValidate>
                            <input className="bg-transparent border-none outline-none text-body-sm w-full"
                                id="newsletter-email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Enter your email"
                                autoComplete="email"
                                aria-describedby="newsletter-message"
                                disabled={isSubmitting}
                                required />
                            <button className="text-primary disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={isSubmitting} aria-label={isSubmitting ? "Subscribing" : "Subscribe to newsletter"}>
                                <span className="material-symbols-outlined">{isSubmitting ? "progress_activity" : "send"}</span>
                            </button>
                        </form>
                        {message && (
                            <p id="newsletter-message" className={`font-body-sm text-body-sm mt-3 ${messageType === "success" ? "text-green-700" : "text-error"}`} role={messageType === "error" ? "alert" : "status"} aria-live="polite">
                                {message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="border-t border-outline-variant/30 py-8 px-gutter">
                    <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="font-body-sm text-body-sm text-on-surface-variant">2026 Denova GloSoft Limited. Delivering
                            precision, trust, and global innovation.</p>
                        <div className="flex gap-6 flex-wrap justify-center">
                            <span
                                className="flex items-center gap-2 font-label-caps text-[10px] text-outline whitespace-nowrap"><span
                                    className="material-symbols-outlined text-[14px]">location_on</span> UK</span>
                            <span
                                className="flex items-center gap-2 font-label-caps text-[10px] text-outline whitespace-nowrap"><span
                                    className="material-symbols-outlined text-[14px]">location_on</span> USA</span>
                            <span
                                className="flex items-center gap-2 font-label-caps text-[10px] text-outline whitespace-nowrap"><span
                                    className="material-symbols-outlined text-[14px]">location_on</span> Qatar</span>
                            <span
                                className="flex items-center gap-2 font-label-caps text-[10px] text-outline whitespace-nowrap"><span
                                    className="material-symbols-outlined text-[14px]">location_on</span> UAE</span>
                            <span
                                className="flex items-center gap-2 font-label-caps text-[10px] text-outline whitespace-nowrap"><span
                                    className="material-symbols-outlined text-[14px]">location_on</span> India</span>
                            <span
                                className="flex items-center gap-2 font-label-caps text-[10px] text-outline whitespace-nowrap"><span
                                    className="material-symbols-outlined text-[14px]">location_on</span> Maldives</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
