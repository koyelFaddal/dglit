"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import LegacyBehavior from "@/components/layout/LegacyBehavior";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000").replace(/\/$/, "");

function splitList(value) {
    if (Array.isArray(value)) return value.filter(Boolean);
    return String(value || "")
        .split(/\r?\n|,/)
        .map((item) => item.trim())
        .filter(Boolean);
}

function normalizeJob(job) {
    const title = job.title || job.job_title || "Open Role";
    const location = job.work_location || "Location to be discussed";
    const skills = splitList(job.required_skills).slice(0, 3);

    return {
        ...job,
        id: String(job.id),
        title,
        location,
        overview: job.overview || "Role details will be shared by the Denova hiring team.",
        experience: job.experience_required || "Experience to be discussed",
        postedDate: job.job_post_date_readable || "Recently posted",
        skills: skills.length ? skills : ["SOFTWARE", "DELIVERY", "TEAMWORK"],
        meta: `Engineering - ${location}`,
    };
}

function getResponseMessage(payload, fallback) {
    const firstValidationError = payload?.errors ? Object.values(payload.errors).flat()[0] : "";
    return firstValidationError || payload?.message || fallback;
}

function getFormFile(form, selector) {
    return form.querySelector(selector)?.files?.[0] || null;
}

function isPdfResume(file) {
    return file && (file.type === "application/pdf" || /\.pdf$/i.test(file.name));
}

function resetResumeLabels(form) {
    const futureFileName = form.querySelector("#future-opening-file-name");
    const futureFileError = form.querySelector("#future-opening-file-error");
    const applicationResumeLabel = form.querySelector('[data-resume-upload-label="true"]');

    if (futureFileName) futureFileName.textContent = "Upload PDF, DOC, or DOCX";
    if (futureFileError) futureFileError.textContent = "";
    if (applicationResumeLabel) applicationResumeLabel.textContent = "Click or drag and drop to upload Resume (PDF, DOC, or DOCX)";
}

export default function Careers() {
    const [jobs, setJobs] = useState([]);
    const [jobsLoading, setJobsLoading] = useState(true);
    const [futureOpeningSubmitting, setFutureOpeningSubmitting] = useState(false);
    const [futureOpeningMessage, setFutureOpeningMessage] = useState(null);
    const [jobApplicationSubmitting, setJobApplicationSubmitting] = useState(false);
    const [jobApplicationMessage, setJobApplicationMessage] = useState(null);

    useEffect(() => {
        let ignore = false;

        async function loadJobs() {
            try {
                const response = await fetch(`${API_BASE_URL}/api/jobs`, {
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (!response.ok) throw new Error("Unable to load jobs");

                const payload = await response.json();
                const apiJobs = Array.isArray(payload?.data) ? payload.data : [];
                const normalizedJobs = apiJobs.map(normalizeJob);

                if (!ignore) {
                    setJobs(normalizedJobs);
                    window.__careerJobsById = Object.fromEntries(normalizedJobs.map((job) => [job.id, job]));
                }
            } catch (error) {
                if (!ignore) {
                    setJobs([]);
                    window.__careerJobsById = {};
                }
            } finally {
                if (!ignore) setJobsLoading(false);
            }
        }

        loadJobs();

        return () => {
            ignore = true;
        };
    }, []);

    async function submitCareerForm(form, endpoint, successMessage) {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: new FormData(form),
        });

        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(getResponseMessage(payload, "Unable to submit application."));
        }

        return payload?.message || successMessage;
    }

    async function handleFutureOpeningSubmit(event) {
        event.preventDefault();
        event.nativeEvent?.stopImmediatePropagation?.();

        if (futureOpeningSubmitting) return;

        const form = event.currentTarget;
        const resume = getFormFile(form, "#future-opening-resume");
        setFutureOpeningMessage(null);

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (!isPdfResume(resume)) {
            setFutureOpeningMessage({ tone: "error", text: "Please upload your resume as a PDF file." });
            return;
        }

        setFutureOpeningSubmitting(true);

        try {
            const message = await submitCareerForm(form, "/api/future-opening-applications", "Resume submitted successfully.");
            form.reset();
            resetResumeLabels(form);
            setFutureOpeningMessage({ tone: "success", text: message });
            window.setTimeout(() => window.closeFutureOpeningModal?.(), 900);
        } catch (error) {
            setFutureOpeningMessage({
                tone: "error",
                text: error instanceof Error ? error.message : "Unable to submit resume.",
            });
        } finally {
            setFutureOpeningSubmitting(false);
        }
    }

    async function handleJobApplicationSubmit(event) {
        event.preventDefault();
        event.nativeEvent?.stopImmediatePropagation?.();

        if (jobApplicationSubmitting) return;

        const form = event.currentTarget;
        const resume = getFormFile(form, 'input[name="resume"]');
        setJobApplicationMessage(null);

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (!isPdfResume(resume)) {
            setJobApplicationMessage({ tone: "error", text: "Please upload your resume as a PDF file." });
            return;
        }

        setJobApplicationSubmitting(true);

        try {
            const message = await submitCareerForm(form, "/api/job-applications", "Application submitted successfully.");
            form.reset();
            resetResumeLabels(form);
            setJobApplicationMessage({ tone: "success", text: message });
        } catch (error) {
            setJobApplicationMessage({
                tone: "error",
                text: error instanceof Error ? error.message : "Unable to submit application.",
            });
        } finally {
            setJobApplicationSubmitting(false);
        }
    }

    return (
        <main className="optimized-page pt-24 pb-12 px-gutter bg-background min-h-[70vh]">
            <LegacyBehavior />
            <section className="relative -mt-24 md:-mt-8 min-h-[640px] lg:min-h-[700px] flex items-center pt-24 md:pt-20 pb-12 overflow-hidden bg-surface -mx-gutter">
                <div className="absolute inset-0 z-0">
                    <img alt="Denova careers workspace"
                        className="hero-visual-balance w-full h-full object-cover object-center lg:object-right opacity-80 blur-[1px] scale-[1.01]"
                        src={assetPath("/asset/company/career/1-optimized.webp")} fetchPriority="high" loading="eager" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/78 to-background/12"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/72 via-transparent to-background/20"></div>
                    <div className="absolute left-0 top-0 h-full w-2/3 bg-primary-fixed/25 blur-3xl opacity-70"></div>
                </div>
                <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full">
                    <div className="max-w-2xl">
                        <nav
                            className="flex flex-wrap items-center gap-x-2 gap-y-1 font-label-caps text-[11px] leading-4 sm:text-label-caps uppercase tracking-widest text-on-surface-variant mb-5">
                            <span>Company</span>
                            <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span>
                            <span className="text-primary">Careers</span>
                        </nav>
                        <span
                            className="inline-block bg-accent-teal/10 text-accent-teal font-label-caps text-label-caps px-4 py-1 rounded-full mb-6">DENOVA CAREERS</span>
                        <h1
                            className="font-display-lg text-[34px] leading-[42px] sm:text-display-sm sm:leading-[56px] lg:text-display-lg lg:leading-[72px] text-text-primary mb-6">
                            Build software that helps teams work with clarity.
                        </h1>
                        <p className="font-body-lg text-body-lg text-text-secondary mb-8 max-w-xl">Join Denova to design, engineer, and support dependable digital products for real business operations. We value practical thinking, clean execution, and people who care about the craft behind useful software.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container"
                                href="#open-roles" onClick={(event) => window.scrollCareerSectionIntoView(event, 'open-roles', 'roles')}>View Open Roles <span className="material-symbols-outlined text-[18px]">arrow_downward</span></Link>
                            <Link className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-lg border border-primary/25 bg-white/80 px-6 py-3 font-label-caps text-label-caps uppercase tracking-widest text-primary transition-colors hover:bg-primary/5"
                                href="#subscribe-to-future-opening" onClick={(event) => window.scrollCareerSectionIntoView(event, 'subscribe-to-future-opening', 'section')}>Join Talent Pool</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto py-10 md:py-14" id="open-roles">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end mb-6">
                    <div>
                        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Open Positions</span>
                        <h2 className="font-headline-lg text-[30px] leading-[38px] md:text-headline-lg md:leading-[40px] text-on-surface mb-3">Current opportunities at Denova</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Explore roles across software engineering, product delivery, QA, and client-facing technology teams.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {jobsLoading ? (
                        <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] transition-all group lg:col-span-2">
                            <p className="text-sm text-slate-500 leading-relaxed">Loading current opportunities...</p>
                        </div>
                    ) : jobs.length ? (
                        jobs.map((job) => (
                            <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] hover:border-primary/20 hover:shadow-2xl transition-all group" key={job.id}>
                                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start mb-6">
                                    <div>
                                        <h4 className="text-2xl font-bold text-slate-900 font-['Space_Grotesk']">{job.title}</h4>
                                        <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">{job.meta}</p>
                                    </div>
                                    <span className="w-fit px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">ACTIVE</span>
                                </div>
                                <p className="text-sm text-slate-500 mb-8 leading-relaxed">{job.overview}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-[10px] font-bold text-slate-400 uppercase">
                                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">history</span> Posted {job.postedDate}</div>
                                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">workspace_premium</span> Exp: {job.experience}</div>
                                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> {job.location}</div>
                                </div>
                                <div className="pt-6 border-t border-slate-50 flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center">
                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill) => (
                                            <span className="px-2 py-1 bg-slate-50 rounded text-[9px] font-bold text-slate-400" key={skill}>{skill.toUpperCase()}</span>
                                        ))}
                                    </div>
                                    <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                                        <button className="min-h-[2.75rem] rounded-xl bg-slate-50 px-4 text-slate-500 hover:text-primary hover:bg-primary/5 font-bold text-sm transition-colors"
                                            type="button" onClick={() => window.openJobModal(job.id)}>View Details</button>
                                        <button className="min-h-[2.75rem] rounded-xl bg-primary px-4 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all hover:bg-primary/90 group-hover:translate-x-1"
                                            type="button" onClick={() => window.selectJobAndScroll(job.id)}>Apply Now <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] transition-all group lg:col-span-2">
                            <p className="text-sm text-slate-500 leading-relaxed">No open positions are available right now. Please join the talent pool for future opportunities.</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="max-w-container-max mx-auto py-10 md:py-14">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-3">Why Join</span>
                    <h2 className="font-headline-lg text-[30px] leading-[38px] md:text-headline-lg md:leading-[40px] text-on-surface mb-4">Why build your career at Denova?</h2>
                    <p className="text-slate-500 leading-relaxed">Denova is a software company where practical engineering, thoughtful delivery, and long-term client trust matter as much as the code itself.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    <div className="p-8 lg:p-10 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-16 h-16 bg-[#F3E8FF] rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                        </div>
                        <h5 className="text-xl font-bold mb-4 text-slate-900">Room to Grow</h5>
                        <p className="text-sm text-slate-500 leading-relaxed">Take ownership of real product work, learn from senior teammates, and build a portfolio of shipped software that strengthens your career.</p>
                    </div>
                    <div className="p-8 lg:p-10 bg-[#E0F7FA]/30 border border-[#B2EBF2]/40 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#006064] mb-8 group-hover:scale-110 transition-transform shadow-sm">
                            <span className="material-symbols-outlined text-4xl">psychology</span>
                        </div>
                        <h5 className="text-xl font-bold mb-4 text-slate-900">Clear Engineering Standards</h5>
                        <p className="text-sm text-slate-500 leading-relaxed">We care about readable code, reliable releases, accessible interfaces, and decisions that make products easier to maintain.</p>
                    </div>
                    <div className="p-8 lg:p-10 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
                        <div className="w-16 h-16 bg-[#F5F3FF] rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-4xl">public</span>
                        </div>
                        <h5 className="text-xl font-bold mb-4 text-slate-900">Meaningful Client Impact</h5>
                        <p className="text-sm text-slate-500 leading-relaxed">Your work supports organizations that depend on stable software, smoother operations, and better digital experiences.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto mb-10 text-center py-10 md:py-12 px-5 sm:px-8 bg-slate-50 border-y border-slate-100 rounded-[2rem] md:rounded-[4rem]">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-6 block">Our Hiring Principle</span>
                <h3 className="font-h2 text-2xl lg:text-4xl text-slate-900 italic max-w-4xl mx-auto leading-relaxed mb-4">
                    "We hire people who solve carefully, communicate clearly, and take pride in building software that keeps working after launch."
                </h3>
                <div className="w-12 h-1 bg-primary mx-auto"></div>
            </section>

            <section className="max-w-container-max mx-auto mb-12">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                        <img alt="Denova software workplace" className="w-full h-full object-cover" src={assetPath("/asset/company/career/2-optimized.webp")} loading="lazy" decoding="async" />
                    </div>
                    <div className="space-y-8">
                        <h2 className="font-h2 text-3xl lg:text-5xl text-slate-900 font-bold leading-tight">A work environment built for focused delivery.</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">Denova teams balance collaboration with deep work. You will have the space to plan, build, review, and improve software without losing sight of users, deadlines, and maintainability.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-[#E0F7FA]/30 rounded-2xl border border-[#B2EBF2]/40">
                                <h6 className="font-bold text-slate-900 mb-1">Focused Sprints</h6>
                                <p className="text-xs text-slate-500">Structured work cycles with clear priorities and practical delivery goals.</p>
                            </div>
                            <div className="p-6 bg-[#E0F7FA]/30 rounded-2xl border border-[#B2EBF2]/40">
                                <h6 className="font-bold text-slate-900 mb-1">Product Workshops</h6>
                                <p className="text-xs text-slate-500">Cross-functional sessions for design, architecture, QA, and release planning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto mb-10 py-10 md:py-12 px-5 sm:px-8 bg-white border border-slate-100 rounded-[2rem] md:rounded-[3rem] shadow-sm">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="font-h2 text-3xl lg:text-4xl text-slate-900 font-bold">Collaborative software culture</h3>
                        <p className="text-slate-600 leading-relaxed">Engineering at Denova is collaborative and accountable. We review work carefully, document decisions, share context early, and treat production quality as a team responsibility. If you like practical problem-solving and respectful technical debate, you will fit the rhythm here.</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">groups</span>
                            </div>
                            <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Review-led product delivery</span>
                        </div>
                    </div>
                    <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl">
                        <img alt="Denova team collaboration" className="w-full h-full object-cover" src={assetPath("/asset/company/career/3-optimized.webp")} loading="lazy" decoding="async" />
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto mb-10 py-10 md:py-12">
                <h3 className="font-h2 text-3xl lg:text-4xl text-center mb-8 font-bold">Growth &amp; Mentorship</h3>
                <div className="max-w-4xl mx-auto space-y-10 md:space-y-12 relative">
                    <div className="absolute left-[19px] md:left-1/2 top-4 bottom-4 w-[2px] bg-slate-100 hidden md:block"></div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10 items-start md:items-center">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-primary/20 md:absolute md:left-1/2 md:-translate-x-1/2">1</div>
                        <div className="md:w-1/2 md:pr-16 text-left md:text-right">
                            <h5 className="text-xl font-bold text-slate-900 mb-2">Guided Onboarding</h5>
                            <p className="text-sm text-slate-500">New team members are paired with experienced teammates who help them understand Denova standards, codebases, tools, and delivery practices.</p>
                        </div>
                        <div className="hidden md:block md:w-1/2"></div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-12 relative z-10 items-start md:items-center">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold shrink-0 shadow-sm md:absolute md:left-1/2 md:-translate-x-1/2">2</div>
                        <div className="md:w-1/2 md:pl-16 text-left">
                            <h5 className="text-xl font-bold text-slate-900 mb-2">Skill Development</h5>
                            <p className="text-sm text-slate-500">We support learning in architecture, frontend craft, backend systems, QA, cloud, security, and client communication.</p>
                        </div>
                        <div className="hidden md:block md:w-1/2"></div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10 items-start md:items-center">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold shrink-0 shadow-sm md:absolute md:left-1/2 md:-translate-x-1/2">3</div>
                        <div className="md:w-1/2 md:pr-16 text-left md:text-right">
                            <h5 className="text-xl font-bold text-slate-900 mb-2">Leadership Pathways</h5>
                            <p className="text-sm text-slate-500">Strong contributors can grow toward lead engineer, delivery lead, architect, QA lead, or product-focused roles as their strengths develop.</p>
                        </div>
                        <div className="hidden md:block md:w-1/2"></div>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto mb-12">
                <h3 className="font-h3 text-2xl text-center mb-8 font-bold text-slate-900 uppercase tracking-widest">Benefits &amp; Support</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-8 bg-white border border-slate-100 rounded-[2rem] text-center hover:bg-slate-50 transition-all shadow-sm">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4">health_and_safety</span>
                        <h6 className="font-bold text-slate-900 mb-2">Health Support</h6>
                        <p className="text-xs text-slate-500">Benefits and leave policies designed to support sustainable work.</p>
                    </div>
                    <div className="p-8 bg-white border border-slate-100 rounded-[2rem] text-center hover:bg-slate-50 transition-all shadow-sm">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4">home_work</span>
                        <h6 className="font-bold text-slate-900 mb-2">Hybrid Flexibility</h6>
                        <p className="text-xs text-slate-500">Role-friendly flexibility with clear team coordination and delivery expectations.</p>
                    </div>
                    <div className="p-8 bg-white border border-slate-100 rounded-[2rem] text-center hover:bg-slate-50 transition-all shadow-sm">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4">school</span>
                        <h6 className="font-bold text-slate-900 mb-2">Learning Budget</h6>
                        <p className="text-xs text-slate-500">Support for courses, certifications, and tools that strengthen your craft.</p>
                    </div>
                    <div className="p-8 bg-white border border-slate-100 rounded-[2rem] text-center hover:bg-slate-50 transition-all shadow-sm">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4">task_alt</span>
                        <h6 className="font-bold text-slate-900 mb-2">Clear Reviews</h6>
                        <p className="text-xs text-slate-500">Transparent feedback cycles tied to skills, ownership, and delivery outcomes.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto mb-10">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <h4 className="font-h3 text-xl text-slate-400 uppercase tracking-widest font-bold">The Delivery Core</h4>
                        <h2 className="font-h2 text-3xl lg:text-5xl text-slate-900 font-bold leading-tight"><span className="sm:hidden block text-[24px] leading-[30px]"><span className="block whitespace-nowrap">Where product thinking</span><span className="block whitespace-nowrap">meets dependable engineering.</span></span><span className="hidden sm:inline">Where product thinking meets dependable engineering.</span></h2>
                        <p className="text-slate-600 leading-relaxed">Denova teams turn requirements into usable software through discovery, design, implementation, testing, and continuous improvement. The goal is simple: build technology that clients can trust.</p>
                    </div>
                    <div className="lg:col-span-7 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                        <img alt="Denova software delivery team" className="w-full h-full object-cover" src={assetPath("/asset/company/career/4-optimized.webp")} loading="lazy" decoding="async" />
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto mb-8 py-10">
                <h3 className="font-h3 text-2xl text-slate-900 mb-8 font-bold text-center uppercase tracking-widest">Recruitment Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    <div className="hidden md:block absolute top-10 left-0 right-0 h-[1px] bg-slate-100 z-0"></div>
                    <div className="relative z-10 text-center space-y-6">
                        <div className="w-20 h-20 bg-white border-2 border-primary rounded-full mx-auto flex items-center justify-center font-bold text-primary shadow-sm">01</div>
                        <h6 className="font-bold text-sm">Application</h6>
                        <p className="text-[11px] text-slate-400 px-4">Submit your resume and role interest through the careers form.</p>
                    </div>
                    <div className="relative z-10 text-center space-y-6">
                        <div className="w-20 h-20 bg-white border-2 border-primary rounded-full mx-auto flex items-center justify-center font-bold text-primary shadow-sm">02</div>
                        <h6 className="font-bold text-sm">Intro Call</h6>
                        <p className="text-[11px] text-slate-400 px-4">A short conversation about your experience, goals, and role fit.</p>
                    </div>
                    <div className="relative z-10 text-center space-y-6">
                        <div className="w-20 h-20 bg-white border-2 border-primary rounded-full mx-auto flex items-center justify-center font-bold text-primary shadow-sm">03</div>
                        <h6 className="font-bold text-sm">Technical Discussion</h6>
                        <p className="text-[11px] text-slate-400 px-4">A practical review of your engineering, delivery, or QA approach.</p>
                    </div>
                    <div className="relative z-10 text-center space-y-6">
                        <div className="w-20 h-20 bg-primary text-white rounded-full mx-auto flex items-center justify-center font-bold shadow-lg">04</div>
                        <h6 className="font-bold text-sm">Offer</h6>
                        <p className="text-[11px] text-slate-400 px-4">Successful candidates receive a clear offer and onboarding plan.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto mb-12" id="subscribe-to-future-opening">
                <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-slate-200/70 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-80"></div>
                    <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                        <div className="max-w-3xl">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-primary">
                                <span className="material-symbols-outlined text-sm">work_history</span>
                                Talent Pool
                            </span>
                            <h3 className="font-h1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"><span className="sm:hidden block text-[24px] leading-[30px]"><span className="block whitespace-nowrap">Stay Connected for</span><span className="block whitespace-nowrap">Future Opportunities</span></span><span className="hidden sm:inline">Stay Connected for Future Opportunities</span></h3>
                            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">Upload your resume and share your experience details. Denova will contact you when a suitable software, product, QA, or delivery role becomes available.</p>
                        </div>
                        <button
                            className="inline-flex min-h-[3.5rem] w-full items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 text-sm font-bold text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/25 active:translate-y-0 sm:w-auto"
                            id="future-opening-open-btn" type="button" onClick={() => window.openFutureOpeningModal()}>
                            Submit Your Resume
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>

                <div aria-hidden="true" aria-describedby="future-opening-modal-description"
                    aria-labelledby="future-opening-modal-title" aria-modal="true" className="future-opening-modal"
                    id="future-opening-modal" role="dialog">
                    <div className="future-opening-modal__overlay" data-future-opening-close=""></div>
                    <div className="future-opening-modal__panel inner-page-scroll" role="document" tabIndex="-1">
                        <button aria-label="Close future openings form"
                            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/30"
                            data-future-opening-close="" type="button">
                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>
                        <div className="p-6 sm:p-8 lg:p-9">
                            <div className="mb-6 pr-12">
                                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">upload_file</span>
                                </span>
                                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-primary">Future Opportunities</p>
                                <h3 className="font-h2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl" id="future-opening-modal-title">Submit Your Resume</h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-500" id="future-opening-modal-description">Tell us where you shine so Denova can match you with upcoming roles.</p>
                            </div>
                            <form className="space-y-4" id="future-opening-form" noValidate="" encType="multipart/form-data" onSubmit={handleFutureOpeningSubmit}>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-name">Full Name</label>
                                        <input autoComplete="name" className="future-opening-modal__input w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-name" name="name" placeholder="Your full name" required="" type="text" />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-email">Email Address</label>
                                        <input autoComplete="email" className="future-opening-modal__input w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-email" name="email" placeholder="you@company.com" required="" type="email" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-phone">Phone Number</label>
                                        <input autoComplete="tel" className="future-opening-modal__input w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-phone" name="phone" placeholder="+1 555 000 0000" required="" type="tel" />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-city">City</label>
                                        <input autoComplete="address-level2" className="future-opening-modal__input w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-city" name="city" placeholder="Your city" required="" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-major-experience">Major Experience</label>
                                    <input className="future-opening-modal__input w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-major-experience" name="major_experience" placeholder="Frontend, backend, QA, DevOps, product delivery..." required="" type="text" />
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-experience">Years of Experience</label>
                                        <select className="future-opening-modal__input w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 outline-none transition-all focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-experience" name="experience" required="">
                                            <option disabled="" selected="" value="">Select experience</option>
                                            <option>0-1 years</option>
                                            <option>2-4 years</option>
                                            <option>5-7 years</option>
                                            <option>8-10 years</option>
                                            <option>10+ years</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-role">Current Role / Position</label>
                                        <input autoComplete="organization-title" className="future-opening-modal__input w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-role" name="role" placeholder="Software Engineer, QA Analyst, Project Coordinator..." required="" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-skills">Skills / Expertise</label>
                                    <textarea className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-skills" name="skills" placeholder="Share your tools, domains, certifications, or shipped projects" required="" rows="3"></textarea>
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-salary">Present Salary</label>
                                        <input className="future-opening-modal__input w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-salary" name="present_salary" placeholder="Current salary" required="" type="text" />
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-notice">Notice Period</label>
                                        <input className="future-opening-modal__input w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-notice" name="notice_period" placeholder="15 Days / 30 Days / Immediate" required="" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-resume">Resume Upload</label>
                                    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-5 text-center transition-all hover:border-primary/50 hover:bg-white focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10" htmlFor="future-opening-resume">
                                        <span className="material-symbols-outlined mb-2 text-3xl text-primary">cloud_upload</span>
                                        <span className="future-opening-modal__file-name text-sm font-bold text-slate-700" id="future-opening-file-name">Upload PDF, DOC, or DOCX</span>
                                        <span className="mt-1 text-xs text-slate-400">PDF, DOC, or DOCX resumes only</span>
                                        <input accept="application/pdf,.pdf,.doc,.docx" className="sr-only" id="future-opening-resume" name="resume" required="" type="file" />
                                    </label>
                                    <p className="future-opening-modal__error mt-2 text-xs font-medium text-error" id="future-opening-file-error" role="alert"></p>
                                </div>
                                <div>
                                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-500" htmlFor="future-opening-linkedin">LinkedIn Profile <span className="font-medium text-slate-400 normal-case tracking-normal">(Optional)</span></label>
                                    <input autoComplete="url" className="future-opening-modal__input w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/10" id="future-opening-linkedin" name="linkedin" placeholder="https://linkedin.com/in/your-profile" type="url" />
                                </div>
                                {futureOpeningMessage ? (
                                    <p className={`text-sm font-medium ${futureOpeningMessage.tone === "success" ? "text-secondary" : "text-error"}`} role="status">
                                        {futureOpeningMessage.text}
                                    </p>
                                ) : null}
                                <button className="flex min-h-[3.5rem] w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/25 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={futureOpeningSubmitting}>
                                    {futureOpeningSubmitting ? "Submitting..." : "Submit Resume"}
                                    <span className="material-symbols-outlined text-lg">send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-container-max mx-auto mb-12" id="application-form">
                <div className="bg-white rounded-[2rem] md:rounded-[3.5rem] border border-slate-200 p-6 sm:p-8 lg:p-12 shadow-sm">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        <div className="space-y-8">
                            <h3 className="font-h1 text-3xl lg:text-5xl text-slate-900 font-bold tracking-tight">Ready to Apply?</h3>
                            <p className="text-slate-500 leading-relaxed">We review every application carefully. Fill out the form and Denova's hiring team will look at what you have built, how you think, and where you want your career to grow.</p>
                            <div className="p-6 md:p-8 bg-[#E0F7FA]/30 rounded-3xl border border-[#B2EBF2]/40">
                                <h6 className="font-bold text-slate-900 mb-4">Submission Guidelines</h6>
                                <ul className="space-y-2 text-xs text-slate-500">
                                    <li className="flex gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span>PDF, DOC, or DOCX resumes are accepted.</li>
                                    <li className="flex gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span>Include links to shipped work, GitHub, portfolio, or case studies if available.</li>
                                    <li className="flex gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span>Response time is typically 3-5 business days.</li>
                                </ul>
                            </div>
                        </div>
                        <form className="space-y-4" id="job-application-form" encType="multipart/form-data" onSubmit={handleJobApplicationSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Full Name" type="text" name="full_name" required="" />
                                <input className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Email Address" type="email" name="email" required="" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Phone Number" type="tel" name="phone_number" required="" />
                                <input className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="City" type="text" name="city" required="" />
                            </div>
                            <input className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Portfolio / LinkedIn" type="url" name="portfolio_url" />
                            <select className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm text-slate-500 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" name="job_id" required="">
                                <option value="" disabled="" selected="">Select Position</option>
                                {jobs.map((job) => (
                                    <option value={job.id} key={job.id}>{job.title}</option>
                                ))}
                            </select>
                            <textarea className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Briefly tell us about your relevant software experience" rows="4" name="ai_challenge" required=""></textarea>
                            <input className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" name="major_experience" placeholder="Primary expertise domain" required="" type="text" />
                            <input className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Years of Experience" type="text" name="years_of_experience" required="" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Present Salary" type="text" name="present_salary" />
                                <input className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Notice Period" type="text" name="notice_period" />
                            </div>
                            <label className="block p-6 border-2 border-dashed border-slate-200 rounded-2xl text-center cursor-pointer hover:bg-slate-50 transition-all">
                                <span className="material-symbols-outlined text-slate-400 text-3xl mb-2">upload_file</span>
                                <span className="block text-xs text-slate-500" data-resume-upload-label="true">Click or drag and drop to upload Resume (PDF, DOC, or DOCX)</span>
                                <input type="file" name="resume" accept="application/pdf,.pdf,.doc,.docx" required="" className="sr-only" />
                            </label>
                            {jobApplicationMessage ? (
                                <p className={`text-sm font-medium ${jobApplicationMessage.tone === "success" ? "text-secondary" : "text-error"}`} role="status">
                                    {jobApplicationMessage.text}
                                </p>
                            ) : null}
                            <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:shadow-xl transition-all active:scale-95 text-xs uppercase tracking-widest mt-4 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={jobApplicationSubmitting}>
                                {jobApplicationSubmitting ? "Submitting..." : "Submit Application"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <div className="fixed inset-0 z-[100] hidden items-center justify-center p-4 lg:p-12" id="job-details-modal" role="dialog" aria-modal="true">
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" data-job-close="true"></div>
                <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl animate-in zoom-in duration-300 inner-page-scroll">
                    <button className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all" data-job-close="true" type="button" aria-label="Close job details">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                    <div className="p-6 md:p-8 lg:p-16">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-10 md:mb-12 border-b border-slate-100 pb-8 md:pb-12 pr-12 md:pr-0">
                            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl overflow-hidden shadow-xl border-4 border-white shrink-0" id="modal-job-image">
                                <img alt="Job" className="w-full h-full object-cover" src={assetPath("/asset/company/career/1-optimized.webp")} loading="lazy" decoding="async" />
                            </div>
                            <div className="space-y-2">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full tracking-widest" id="modal-job-tag"></span>
                                <h2 className="font-h1 text-3xl lg:text-5xl text-slate-900 tracking-tight" id="modal-job-title"></h2>
                                <p className="text-slate-400 text-sm font-medium font-['Space_Grotesk']" id="modal-job-meta"></p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
                            <div className="lg:col-span-2 space-y-10">
                                <div>
                                    <h4 className="font-h3 text-xl text-slate-900 mb-4 font-bold border-l-4 border-primary pl-4">Overview</h4>
                                    <p className="text-slate-600 leading-relaxed font-['Inter']" id="modal-job-overview"></p>
                                </div>
                                <div>
                                    <h4 className="font-h3 text-xl text-slate-900 mb-4 font-bold border-l-4 border-primary pl-4">Responsibilities</h4>
                                    <ul className="space-y-3 text-slate-600 text-sm list-disc list-inside marker:text-primary" id="modal-job-responsibilities"></ul>
                                </div>
                                <div>
                                    <h4 className="font-h3 text-xl text-slate-900 mb-4 font-bold border-l-4 border-primary pl-4">Required Qualifications</h4>
                                    <ul className="space-y-3 text-slate-600 text-sm list-disc list-inside marker:text-primary" id="modal-job-qualifications"></ul>
                                </div>
                                <div>
                                    <h4 className="font-h3 text-xl text-slate-900 mb-4 font-bold border-l-4 border-primary pl-4">Preferred Skills</h4>
                                    <ul className="space-y-3 text-slate-600 text-sm list-disc list-inside marker:text-primary" id="modal-job-preferred"></ul>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end">
                                <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-primary/20 transition-all active:scale-95 text-xs uppercase tracking-widest" type="button" onClick={() => window.scrollToApplication()}>Apply For This Role</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
