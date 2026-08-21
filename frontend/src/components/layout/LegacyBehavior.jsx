"use client";

import { useEffect } from "react";
import { assetPath } from "@/lib/assetPath";

const jobData = {
  "senior-software-engineer": {
    title: "Senior Software Engineer",
    tag: "Engineering",
    image: assetPath("/asset/company/career/1.png"),
    meta: "Hybrid - Full-Time - Kolkata - Posted May 23, 2026",
    overview:
      "As a Senior Software Engineer at Denova, you will lead delivery of reliable software products, business platforms, and client-facing systems. You will balance hands-on coding with architecture, code review, mentoring, and pragmatic delivery decisions.",
    responsibilities: [
      "Design and implement maintainable backend services, APIs, and modern web interfaces.",
      "Review code, guide technical decisions, and help the team ship reliable releases.",
      "Collaborate with product, QA, and client-facing teams to turn requirements into usable software.",
      "Improve performance, accessibility, security, and maintainability across active projects.",
    ],
    qualifications: [
      "5+ years of professional software engineering experience.",
      "Strong experience with PHP, Laravel or comparable backend frameworks, JavaScript, and relational databases.",
      "Practical understanding of API design, testing, debugging, deployment, and production support.",
      "Ability to communicate clearly with technical and non-technical teammates.",
    ],
    preferred: [
      "Experience with React, Next.js, or modern component-driven frontend work.",
      "Familiarity with cloud hosting, CI/CD, and secure development practices.",
      "Mentoring or technical leadership experience.",
    ],
    process: [
      { step: "01", title: "Intro Call", desc: "Role fit, experience, and career goals." },
      { step: "02", title: "Technical Discussion", desc: "Architecture, code quality, and delivery approach." },
      { step: "03", title: "Team Conversation", desc: "Collaboration style and project expectations." },
    ],
  },
  "full-stack-developer": {
    title: "Full Stack Developer",
    tag: "Product Engineering",
    image: assetPath("/asset/company/career/1.png"),
    meta: "On-Site - Full-Time - Kolkata - Posted May 23, 2026",
    overview:
      "The Full Stack Developer role builds practical software for Denova products and client projects. You will work across interfaces, APIs, integrations, and dashboards with a focus on clean implementation and dependable user experiences.",
    responsibilities: [
      "Build responsive web interfaces and reusable UI components.",
      "Develop backend features, integrations, and database-backed workflows.",
      "Work with QA to resolve defects and improve release quality.",
      "Document implementation details and maintain project handover clarity.",
    ],
    qualifications: [
      "3-5 years of experience building web applications.",
      "Working knowledge of HTML, CSS, JavaScript, PHP, and SQL.",
      "Comfort debugging browser, API, and data-flow issues.",
      "Ability to manage tasks responsibly and communicate progress clearly.",
    ],
    preferred: [
      "Experience with Laravel, React, Tailwind, or similar tools.",
      "Exposure to Git workflows and staging/production release processes.",
      "Portfolio or examples of shipped web applications.",
    ],
    process: [
      { step: "01", title: "Application Review", desc: "Resume and project background." },
      { step: "02", title: "Practical Interview", desc: "Discussion around implementation and debugging." },
      { step: "03", title: "Final Sync", desc: "Team fit, expectations, and start plan." },
    ],
  },
};

let currentCareerJobId = "";
let futureOpeningLastFocusedElement = null;

function splitList(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  return String(value || "")
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getCareerJob(id) {
  const apiJob = window.__careerJobsById?.[String(id)];
  if (!apiJob) return jobData[id];

  return {
    title: apiJob.title || apiJob.job_title || "Open Role",
    tag: "Engineering",
    image: apiJob.preview_image_url || assetPath("/asset/company/career/1.png"),
    meta: `${apiJob.work_location || apiJob.location || "Location to be discussed"} - Posted ${apiJob.job_post_date_readable || apiJob.postedDate || "Recently posted"}`,
    overview: apiJob.overview || "Role details will be shared by the Denova hiring team.",
    responsibilities: splitList(apiJob.responsibilities),
    qualifications: splitList(apiJob.required_skills),
    preferred: splitList(apiJob.preferred_skills),
    process: [
      { step: "01", title: "Application Review", desc: "Resume and role fit review." },
      { step: "02", title: "Team Discussion", desc: "Experience, delivery approach, and expectations." },
      { step: "03", title: "Final Sync", desc: "Offer conversation and start planning." },
    ],
  };
}

function setList(elementId, items) {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    }),
  );
}

function setProcess(items) {
  const element = document.getElementById("modal-job-process");
  if (!element) return;

  element.replaceChildren(
    ...items.map((item) => {
      const row = document.createElement("div");
      row.className = "flex items-center gap-4";

      const step = document.createElement("div");
      step.className = "text-xs font-bold text-primary";
      step.textContent = item.step;

      const copy = document.createElement("div");
      const title = document.createElement("p");
      title.className = "text-xs font-bold text-slate-900";
      title.textContent = item.title;
      const desc = document.createElement("p");
      desc.className = "text-[10px] text-slate-500";
      desc.textContent = item.desc;

      copy.append(title, desc);
      row.append(step, copy);
      return row;
    }),
  );
}

export default function LegacyBehavior() {
  useEffect(() => {
    const getHeaderHeight = () => document.querySelector("header")?.getBoundingClientRect().height || 80;
    const selectCareerJob = (id) => {
      currentCareerJobId = id || currentCareerJobId;
      const select = document.querySelector('#job-application-form select[name="job_id"]');
      if (select && currentCareerJobId) {
        const optionExists = Array.from(select.options).some((option) => option.value === String(currentCareerJobId));
        if (!optionExists) {
          const job = window.__careerJobsById?.[String(currentCareerJobId)];
          const option = document.createElement("option");
          option.value = String(currentCareerJobId);
          option.textContent = job?.title || job?.job_title || "Selected Position";
          select.append(option);
        }
        select.value = currentCareerJobId;
      }
    };

    window.scrollCareerSectionIntoView = function scrollCareerSectionIntoView(event, targetId, mode = "section") {
      if (event) event.preventDefault();
      const target = document.getElementById(targetId);
      if (!target) return;

      const scrollTarget = mode === "roles" ? target.querySelector("h2") || target : target;
      const viewportContext = window.innerWidth >= 1024 ? 220 : window.innerWidth >= 768 ? 150 : 88;
      const sectionGap = window.innerWidth >= 768 ? 32 : 18;
      const offset = mode === "application" ? getHeaderHeight() + viewportContext : getHeaderHeight() + sectionGap;
      const targetTop = scrollTarget.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
      window.history?.replaceState?.(null, "", `#${targetId}`);
    };

    window.openJobModal = function openJobModal(id) {
      const data = getCareerJob(id);
      const modal = document.getElementById("job-details-modal");
      if (!data || !modal) return;

      currentCareerJobId = id;
      document.getElementById("modal-job-title").textContent = data.title;
      document.getElementById("modal-job-tag").textContent = data.tag;
      document.getElementById("modal-job-meta").textContent = data.meta;
      document.getElementById("modal-job-overview").textContent = data.overview;

      const image = document.querySelector("#modal-job-image img");
      if (image) image.src = data.image || assetPath("/asset/company/career/1.png");

      setList("modal-job-responsibilities", data.responsibilities);
      setList("modal-job-qualifications", data.qualifications);
      setList("modal-job-preferred", data.preferred || []);
      setProcess(data.process);

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.style.overflow = "hidden";
    };

    window.closeJobModal = function closeJobModal() {
      const modal = document.getElementById("job-details-modal");
      if (!modal) return;
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    };

    window.selectJobAndScroll = function selectJobAndScroll(id) {
      selectCareerJob(id);
      if (document.getElementById("application-form")) {
        window.scrollCareerSectionIntoView(null, "application-form", "section");
      }
    };

    window.scrollToApplication = function scrollToApplication() {
      window.closeJobModal();
      setTimeout(() => window.selectJobAndScroll(currentCareerJobId), 250);
    };

    const getResumeExtension = (input) => {
      const file = input?.files?.[0];
      if (!file) return "";
      const parts = file.name.toLowerCase().split(".");
      return parts.length > 1 ? parts.pop() : "";
    };

    const validateFutureResume = (resumeInput, fileError) => {
      const allowedExtensions = ["pdf", "doc", "docx"];
      const file = resumeInput?.files?.[0];

      if (!file) {
        resumeInput?.setCustomValidity("Please upload your resume.");
        if (fileError) fileError.textContent = "Please upload your resume.";
        return false;
      }

      if (!allowedExtensions.includes(getResumeExtension(resumeInput))) {
        resumeInput.setCustomValidity("Please upload a PDF, DOC, or DOCX file.");
        if (fileError) fileError.textContent = "Please upload a PDF, DOC, or DOCX file.";
        return false;
      }

      resumeInput.setCustomValidity("");
      if (fileError) fileError.textContent = "";
      return true;
    };

    window.openFutureOpeningModal = function openFutureOpeningModal() {
      const modal = document.getElementById("future-opening-modal");
      const firstInput = document.getElementById("future-opening-name");
      const panel = modal?.querySelector(".future-opening-modal__panel");
      if (!modal) return;

      futureOpeningLastFocusedElement = document.activeElement;
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("future-opening-modal-open");

      window.requestAnimationFrame(() => {
        if (firstInput) firstInput.focus();
        else if (panel) panel.focus();
      });
    };

    window.closeFutureOpeningModal = function closeFutureOpeningModal() {
      const modal = document.getElementById("future-opening-modal");
      if (!modal) return;

      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("future-opening-modal-open");

      if (futureOpeningLastFocusedElement && typeof futureOpeningLastFocusedElement.focus === "function") {
        futureOpeningLastFocusedElement.focus();
      }
    };

    const handleClick = (event) => {
      if (event.target.closest("[data-job-close]")) {
        window.closeJobModal();
        return;
      }

      if (event.target.closest("[data-future-opening-close]")) {
        window.closeFutureOpeningModal();
      }
    };

    const handleChange = (event) => {
      const futureResume = event.target.closest("#future-opening-resume");
      if (futureResume) {
        const fileName = document.getElementById("future-opening-file-name");
        const fileError = document.getElementById("future-opening-file-error");
        const file = futureResume.files?.[0];
        if (fileName) fileName.textContent = file ? file.name : "Upload PDF, DOC, or DOCX";
        validateFutureResume(futureResume, fileError);
        return;
      }

      const applicationResume = event.target.closest('#job-application-form input[type="file"]');
      if (applicationResume) {
        const label = document.querySelector('[data-resume-upload-label="true"]');
        const file = applicationResume.files?.[0];
        if (label) label.textContent = file ? file.name : "Click or drag and drop to upload Resume (PDF, DOC, or DOCX)";
      }
    };

    const handleSubmit = (event) => {
      if (event.target?.id === "future-opening-form") {
        event.preventDefault();
        const form = event.target;
        const resumeInput = document.getElementById("future-opening-resume");
        const fileName = document.getElementById("future-opening-file-name");
        const fileError = document.getElementById("future-opening-file-error");
        const isResumeValid = validateFutureResume(resumeInput, fileError);

        if (!form.checkValidity() || !isResumeValid) {
          form.reportValidity();
          return;
        }

        form.reset();
        if (fileName) fileName.textContent = "Upload PDF, DOC, or DOCX";
        if (fileError) fileError.textContent = "";
        window.closeFutureOpeningModal();
        return;
      }

      if (event.target?.id === "job-application-form") {
        event.preventDefault();
        event.target.reset();
        const label = document.querySelector('[data-resume-upload-label="true"]');
        if (label) label.textContent = "Click or drag and drop to upload Resume (PDF, DOC, or DOCX)";
      }
    };

    const handleKeydown = (event) => {
      const futureModal = document.getElementById("future-opening-modal");
      const jobModal = document.getElementById("job-details-modal");

      if (event.key === "Escape") {
        if (futureModal?.classList.contains("active")) window.closeFutureOpeningModal();
        if (jobModal && !jobModal.classList.contains("hidden")) window.closeJobModal();
        return;
      }

      if (!futureModal?.classList.contains("active") || event.key !== "Tab") return;

      const focusableElements = Array.from(
        futureModal.querySelectorAll('button, input, select, textarea, [href], [tabindex]:not([tabindex="-1"])'),
      ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);
      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("change", handleChange);
    document.addEventListener("submit", handleSubmit);
    document.addEventListener("keydown", handleKeydown);

    document.querySelectorAll(".mobile-nav-item").forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        document.querySelectorAll(".mobile-nav-item[open]").forEach((openItem) => {
          if (openItem !== item) openItem.removeAttribute("open");
        });
      });
    });

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("change", handleChange);
      document.removeEventListener("submit", handleSubmit);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return null;
}
