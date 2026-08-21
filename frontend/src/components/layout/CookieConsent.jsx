"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "dgl-cookie-consent";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);
    const [customizing, setCustomizing] = useState(false);
    const [preferences, setPreferences] = useState({ analytics: false, marketing: false });

    useEffect(() => {
        setVisible(!localStorage.getItem(STORAGE_KEY));
    }, []);

    const saveConsent = (value) => {
        const consent = { necessary: true, ...value, savedAt: new Date().toISOString() };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
        window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: consent }));
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <aside
            aria-label="Cookie consent"
            className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-md border border-outline-variant/30 bg-white p-5 text-gray-800 shadow-2xl md:inset-x-auto md:bottom-6 md:right-6 md:mx-0 md:p-6"
        >
            <h2 className="text-xl font-bold text-gray-900">We value your privacy</h2>
            <p className="mt-3 text-sm leading-6 md:text-base">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                By clicking &quot;Accept All&quot;, you consent to our use of cookies.
            </p>

            {customizing && (
                <div className="mt-4 space-y-3 rounded-md bg-gray-50 p-4 text-sm">
                    <label className="flex items-center justify-between gap-4">
                        <span><strong>Necessary</strong><span className="block text-xs text-gray-500">Required for the website to work.</span></span>
                        <input type="checkbox" checked disabled className="h-4 w-4 accent-primary" />
                    </label>
                    <label className="flex items-center justify-between gap-4">
                        <span><strong>Analytics</strong><span className="block text-xs text-gray-500">Helps us understand website usage.</span></span>
                        <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={(event) => setPreferences({ ...preferences, analytics: event.target.checked })}
                            className="h-4 w-4 accent-primary"
                        />
                    </label>
                    <label className="flex items-center justify-between gap-4">
                        <span><strong>Marketing</strong><span className="block text-xs text-gray-500">Supports personalized content.</span></span>
                        <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(event) => setPreferences({ ...preferences, marketing: event.target.checked })}
                            className="h-4 w-4 accent-primary"
                        />
                    </label>
                </div>
            )}

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                <button
                    type="button"
                    onClick={() => customizing ? saveConsent(preferences) : setCustomizing(true)}
                    className="min-h-12 border-2 border-primary px-4 font-medium text-primary transition-colors hover:bg-primary/5"
                >
                    {customizing ? "Save Preferences" : "Customize"}
                </button>
                <button
                    type="button"
                    onClick={() => saveConsent({ analytics: false, marketing: false })}
                    className="min-h-12 border-2 border-primary px-4 font-medium text-primary transition-colors hover:bg-primary/5"
                >
                    Reject All
                </button>
                <button
                    type="button"
                    onClick={() => saveConsent({ analytics: true, marketing: true })}
                    className="min-h-12 bg-primary px-4 font-medium text-white transition-opacity hover:opacity-90"
                >
                    Accept All
                </button>
            </div>
        </aside>
    );
}
