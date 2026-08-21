"use client";

import { useState } from "react";
import Link from "next/link";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000").replace(/\/$/, "");

const initialForm = {
    name: "",
    email: "",
    subject: "",
    issue_category: "Website Bug",
    priority: "Medium",
    message: "",
};

export default function Support() {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: "", message: "", ticketKey: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [attachments, setAttachments] = useState([]);

    const updateField = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: undefined }));
    };

    const updateAttachments = (event) => {
        const selectedFiles = Array.from(event.target.files || []);

        if (selectedFiles.length > 2) {
            event.target.value = "";
            setAttachments([]);
            setErrors((current) => ({
                ...current,
                attachments: ["You can upload a maximum of 2 files."],
            }));
            return;
        }

        setAttachments(selectedFiles);
        setErrors((current) => ({ ...current, attachments: undefined }));
    };

    const submitSupportTicket = async (event) => {
        event.preventDefault();
        const formElement = event.currentTarget;
        setIsSubmitting(true);
        setErrors({});
        setStatus({ type: "", message: "", ticketKey: "" });

        try {
            // if (attachments.length > 2) {
            //     setErrors((current) => ({
            //         ...current,
            //         attachments: ["You can upload a maximum of 2 files."],
            //     }));
            //     throw new Error("You can upload a maximum of 2 files.");
            // }

            const formData = new FormData();
            Object.entries(form).forEach(([key, value]) => formData.append(key, value));
            attachments.forEach((file) => formData.append("attachments[]", file));

            const response = await fetch(`${API_BASE_URL}/api/support-tickets`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                },
                body: formData,
            });

            const json = await response.json();

            if (!response.ok || json.status === "error") {
                setErrors(json.errors || {});
                throw new Error(json.message || "Unable to create the support ticket.");
            }

            setForm(initialForm);
            setAttachments([]);
            formElement.reset();
            setStatus({
                type: "success",
                message: json.message || "Support ticket created successfully.",
                ticketKey: json.data?.jira_ticket_key || "",
            });
        } catch (error) {
            setStatus({
                type: "error",
                message: error.message || "Unable to create the support ticket.",
                ticketKey: "",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const fieldError = (name) => errors?.[name]?.[0];

    return (
        <main className="pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <section className="max-w-container-max mx-auto py-8 md:py-10">
                <div className="grid grid-cols-1 xl:grid-cols-[0.78fr_1.22fr] gap-6 items-stretch">
                    <div className="bg-[#E0F7FA]/30 border border-outline-variant/35 rounded-2xl p-7 md:p-8 architectural-shadow">
                        <Link href="/company/about-dgl" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container">
                            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                            Back to About DGL
                        </Link>
                        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mt-8 mb-4">Support Desk</span>
                        <h1 className="font-display-lg text-[32px] leading-[40px] md:text-[44px] md:leading-[52px] text-[#0A1F44] mb-5">Tell us what needs attention.</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">Submit website issues, change requests, and support questions directly into the DGL Jira Service Management queue.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-3">
                            <SupportPoint icon="confirmation_number" title="Ticketed" text="Every request is tracked with a Jira ticket key." />
                            <SupportPoint icon="manage_accounts" title="Triaged" text="Our support team reviews priority, category, and details." />
                            <SupportPoint icon="task_alt" title="Updated" text="You receive a notification when status changes." />
                        </div>
                    </div>

                    <form onSubmit={submitSupportTicket} encType="multipart/form-data" className="bg-white border border-outline-variant/40 rounded-2xl p-6 md:p-8 architectural-shadow">
                        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                            <div>
                                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-3">Create Ticket</span>
                                <h2 className="font-headline-lg text-headline-lg text-[#0A1F44]">Support request form</h2>
                            </div>
                            <p className="text-sm text-on-surface-variant">Required fields are marked with *</p>
                        </div>

                        {status.message ? (
                            <div className={`mb-5 rounded-xl border px-4 py-3 text-sm ${status.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-700"}`}>
                                <p className="font-semibold">{status.message}</p>
                                {status.ticketKey ? <p className="mt-1">Ticket number: {status.ticketKey}</p> : null}
                            </div>
                        ) : null}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Field label="Full Name" name="name" value={form.name} onChange={updateField} error={fieldError("name")} required />
                            <Field label="Email Address" name="email" type="email" value={form.email} onChange={updateField} error={fieldError("email")} required />
                            <div className="md:col-span-2">
                                <Field label="Subject" name="subject" value={form.subject} onChange={updateField} error={fieldError("subject")} required />
                            </div>
                            <SelectField label="Issue Category" name="issue_category" value={form.issue_category} onChange={updateField} error={fieldError("issue_category")} options={["Website Bug", "Website Change", "General Support"]} required />
                            <SelectField label="Priority" name="priority" value={form.priority} onChange={updateField} error={fieldError("priority")} options={["Low", "Medium", "High", "Urgent"]} required />
                            <div className="md:col-span-2">
                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-[#0A1F44]">Message / Issue Details *</span>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={updateField}
                                        rows={7}
                                        className="w-full resize-y rounded-xl border border-outline-variant/50 bg-white px-4 py-3 text-base text-[#0A1F44] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                                        placeholder="Include the page URL, what happened, what you expected, and any steps to reproduce the issue."
                                        required
                                    />
                                </label>
                                {fieldError("message") ? <p className="mt-2 text-sm text-red-600">{fieldError("message")}</p> : null}
                            </div>
                             <div className="md:col-span-2">
                                <label className="block">
                                    <span className="mb-2 block text-sm font-semibold text-[#0A1F44]">Attachments</span>
                                    <input
                                        type="file"
                                        name="attachments"
                                        onChange={updateAttachments}
                                        accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.rtf,.zip"
                                        className="block min-h-12 w-full rounded-xl border border-dashed border-outline-variant/70 bg-[#E0F7FA]/20 px-4 py-3 text-sm text-[#0A1F44] file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-on-primary hover:bg-[#E0F7FA]/35"
                                    />
                                </label>
                                <p className="mt-2 text-sm text-on-surface-variant"> Images, videos, PDFs, documents, spreadsheets, text files, and ZIP files are supported.</p>
                                {attachments.length ? (
                                    <div className="mt-3 grid gap-2">
                                        {attachments.map((file) => (
                                            <div key={`${file.name}-${file.size}`} className="flex items-center justify-between gap-3 rounded-lg border border-outline-variant/35 bg-white px-3 py-2 text-sm text-on-surface-variant">
                                                <span className="truncate">{file.name}</span>
                                                <span className="shrink-0">{(file.size / 1024).toFixed(1)} KB</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                                {fieldError("attachments") ? <p className="mt-2 text-sm text-red-600">{fieldError("attachments")}</p> : null}
                                {errors?.["attachments.0"]?.[0] ? <p className="mt-2 text-sm text-red-600">{errors["attachments.0"][0]}</p> : null}
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm text-on-surface-variant">A Jira ticket and internal support alert will be created after submission.</p>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition hover:bg-primary-container disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Ticket"}
                                <span className="material-symbols-outlined text-[18px]">send</span>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

function Field({ label, name, value, onChange, error, type = "text", required = false }) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#0A1F44]">{label}{required ? " *" : ""}</span>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="min-h-12 w-full rounded-xl border border-outline-variant/50 bg-white px-4 py-3 text-base text-[#0A1F44] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                required={required}
            />
            {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
        </label>
    );
}

function SelectField({ label, name, value, onChange, error, options, required = false }) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-semibold text-[#0A1F44]">{label}{required ? " *" : ""}</span>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="min-h-12 w-full rounded-xl border border-outline-variant/50 bg-white px-4 py-3 text-base text-[#0A1F44] outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                required={required}
            >
                {options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
        </label>
    );
}

function SupportPoint({ icon, title, text }) {
    return (
        <div className="bg-white border border-outline-variant/35 rounded-xl p-4">
            <span className="material-symbols-outlined text-primary text-3xl mb-3">{icon}</span>
            <h3 className="font-headline-sm text-headline-sm text-[#0A1F44] mb-2">{title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{text}</p>
        </div>
    );
}
