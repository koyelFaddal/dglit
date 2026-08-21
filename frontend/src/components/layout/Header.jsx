"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assetPath } from "@/lib/assetPath";

export default function Header() {
    const pathname = usePathname();

    useEffect(() => {
        // const basePath = "/dglit";
        const basePath = "";
        const normalizePath = (value) => {
            if (!value) return "/";
            const urlPath = value.split("#")[0].split("?")[0] || "/";
            const withoutOrigin = urlPath.startsWith("http") ? new URL(urlPath).pathname : urlPath;
            const withoutBase = withoutOrigin === basePath
                ? "/"
                : withoutOrigin.startsWith(`${basePath}/`)
                    ? withoutOrigin.slice(basePath.length)
                    : withoutOrigin;
            return withoutBase.length > 1 && withoutBase.endsWith("/")
                ? withoutBase.slice(0, -1)
                : withoutBase;
        };
        const activeParentClasses = ['text-primary', 'border-b-2', 'border-primary', 'pb-1'];
        const inactiveParentClasses = ['text-on-surface-variant', 'font-medium', 'hover:text-primary'];
        const activeMobileParentClasses = ['text-primary', 'bg-surface-container-low'];
        const activeSubmenuClasses = ['text-primary', 'bg-primary-fixed/35', 'font-semibold'];
        const inactiveSubmenuClasses = ['text-on-surface-variant'];
        const desktopMenuGroups = Array.from(document.querySelectorAll('header nav > div.relative.group'));
        const mobileMenuGroups = Array.from(document.querySelectorAll('details.mobile-nav-item'));
        const links = Array.from(document.querySelectorAll('header nav a[href]'));
        const currentPath = normalizePath(pathname);
        const selectedItem = links.find((link) => normalizePath(link.getAttribute('href')) === currentPath);
        const getMenuLabel = (element) => {
            if (!element) return '';
            const clone = element.cloneNode(true);
            clone.querySelectorAll('.material-symbols-outlined').forEach((icon) => icon.remove());
            return clone.textContent.replace(/\s+/g, ' ').trim();
        };
        const getParentLabelForSubmenu = (item) => {
            const desktopGroup = desktopMenuGroups.find((group) => group.contains(item));
            if (desktopGroup) return getMenuLabel(desktopGroup.querySelector('button'));
            const mobileGroup = item.closest('details.mobile-nav-item');
            if (mobileGroup) return getMenuLabel(mobileGroup.querySelector('summary'));
            return '';
        };

        desktopMenuGroups.forEach((group) => {
            const button = group.querySelector('button');
            if (!button) return;
            button.classList.remove(...activeParentClasses);
            button.classList.add(...inactiveParentClasses);
        });
        mobileMenuGroups.forEach((group) => {
            const summary = group.querySelector('summary');
            if (!summary) return;
            summary.classList.remove(...activeMobileParentClasses);
            summary.classList.add('text-on-surface-variant');
        });
        links.forEach((item) => {
            item.classList.remove(...activeSubmenuClasses);
            item.classList.add(...inactiveSubmenuClasses);
        });
        if (!selectedItem) return;

        const selectedParent = getParentLabelForSubmenu(selectedItem);
        desktopMenuGroups.forEach((group) => {
            const button = group.querySelector('button');
            if (!button || getMenuLabel(button) !== selectedParent) return;
            button.classList.remove(...inactiveParentClasses);
            button.classList.add(...activeParentClasses);
        });
        mobileMenuGroups.forEach((group) => {
            const summary = group.querySelector('summary');
            if (!summary || getMenuLabel(summary) !== selectedParent) return;
            summary.classList.remove('text-on-surface-variant');
            summary.classList.add(...activeMobileParentClasses);
        });
        links.filter((link) => normalizePath(link.getAttribute('href')) === currentPath).forEach((item) => {
            item.classList.remove(...inactiveSubmenuClasses);
            item.classList.add(...activeSubmenuClasses);
        });
    }, [pathname]);

    useEffect(() => {
        const mobileMenu = document.querySelector("header details.mobile-menu-root");
        if (!mobileMenu) return;

        const closeMobileMenu = (event) => {
            if (!event.target.closest("a[href]")) return;
            mobileMenu.removeAttribute("open");
        };

        mobileMenu.removeAttribute("open");
        mobileMenu.addEventListener("click", closeMobileMenu);

        return () => mobileMenu.removeEventListener("click", closeMobileMenu);
    }, [pathname]);

    useEffect(() => {
        const mobileMenuItems = Array.from(document.querySelectorAll("header .mobile-nav-item"));
        const closeSiblingMenus = (event) => {
            const currentItem = event.currentTarget;
            if (!currentItem.open) return;
            mobileMenuItems.forEach((item) => {
                if (item !== currentItem) item.removeAttribute("open");
            });
        };

        mobileMenuItems.forEach((item) => item.addEventListener("toggle", closeSiblingMenus));
        return () => mobileMenuItems.forEach((item) => item.removeEventListener("toggle", closeSiblingMenus));
    }, []);

    return (
        <>
            <header
                className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20 shadow-sm h-20">
                <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-full">
                    <div className="flex items-center gap-8">
                        <Link className="flex items-center gap-2" href="/">
                            <img alt="DGL IT Services Logo" className="h-10 sm:h-11 w-auto max-w-[132px] object-contain"
                                src={assetPath("/asset/logo/dgl_logo.webp")} />
                        </Link>
                        <nav className="hidden xl:flex items-center gap-4 lg:gap-6 h-full">
                            <div className="relative group h-full flex items-center">
                                <button
                                    className="font-label-caps text-label-caps text-primary border-b-2 border-primary pb-1 transition-colors duration-300 flex items-center gap-1">
                                    Strategy <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                </button>
                                <div
                                    className="hidden group-hover:block absolute left-0 top-full w-72 bg-surface-container-lowest border border-outline-variant/60 rounded-xl architectural-shadow p-3">
                                    <Link href="/strategy/business-consulting"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Business
                                        Consulting</Link>
                                    <Link href="/strategy/digital-transformation"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">AI
                                        &amp; Digital Transformation</Link>
                                    <Link href="/strategy/public-sector-advisory"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Public
                                        Sector Advisory</Link>
                                    <Link href="/strategy/cyber-risk-compliance"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Cyber,
                                        Risk &amp; Compliance</Link>
                                    <Link href="/strategy/pmo-change-management"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">PMO
                                        &amp; Change Management</Link>
                                </div>
                            </div>
                            <div className="relative group h-full flex items-center">
                                <button
                                    className="font-label-caps text-label-caps text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 flex items-center gap-1">
                                    Technology <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                </button>
                                <div
                                    className="hidden group-hover:block absolute left-0 top-full w-80 bg-surface-container-lowest border border-outline-variant/60 rounded-xl architectural-shadow p-3">
                                    <Link href="/services/enterprise-applications"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Enterprise
                                        Applications</Link>
                                    <Link href="/services/ai-solutions-automation"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">AI
                                        Solutions &amp; Automation</Link>
                                    <Link href="/services/digital-platforms"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Digital
                                        Platforms</Link>
                                    <Link href="/services/data-analytics"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Data
                                        &amp; Analytics</Link>
                                    <Link href="/services/cloud-infrastructure"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Cloud
                                        &amp; Infrastructure</Link>
                                    <Link href="/services/managed-services"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Managed
                                        Services</Link>
                                </div>
                            </div>
                            <div className="relative group h-full flex items-center">
                                <button
                                    className="font-label-caps text-label-caps text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 flex items-center gap-1">
                                    Industries <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                </button>
                                <div
                                    className="hidden group-hover:block absolute left-0 top-full w-72 bg-surface-container-lowest border border-outline-variant/60 rounded-xl architectural-shadow p-3">
                                    <Link href="/industries/government-public-sector"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Government
                                        &amp; Public Sector</Link>
                                    <Link href="/industries/education-research"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Education
                                        &amp; Research</Link>
                                    <Link href="/industries/healthcare"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Healthcare</Link>
                                    <Link href="/industries/housing-communities"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Housing
                                        &amp; Communities</Link>
                                    <Link href="/industries/nonprofit-charity"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Nonprofit
                                        &amp; Charity</Link>
                                    <Link href="/industries/transport-infrastructure"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Transport
                                        &amp; Infrastructure</Link>
                                    <Link href="/industries/energy-utilities"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Energy
                                        &amp; Utilities</Link>
                                    <Link href="/industries/enterprise-commercial"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Enterprise
                                        &amp; Commercial</Link>
                                </div>
                            </div>
                            <div className="relative group h-full flex items-center">
                                <button
                                    className="font-label-caps text-label-caps text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 flex items-center gap-1">
                                    Ecosystem <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                </button>
                                <div
                                    className="hidden group-hover:block absolute left-0 top-full w-72 bg-surface-container-lowest border border-outline-variant/60 rounded-xl architectural-shadow p-3">
                                    <div className="desktop-nested relative">
                                        <span
                                            className="flex items-center justify-between px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Strategic
                                            Partners <span
                                                className="material-symbols-outlined text-[16px]">chevron_right</span></span>
                                        <div
                                            className="desktop-nested-menu absolute left-full top-0 ml-2 w-52 bg-surface-container-lowest border border-outline-variant/60 rounded-xl architectural-shadow p-3">
                                            <Link href="/ecosystem/strategic-partners/microsoft"
                                                className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Microsoft</Link>
                                            <Link href="/ecosystem/strategic-partners/sap"
                                                className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">SAP</Link>
                                            <Link href="/ecosystem/strategic-partners/oracle"
                                                className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Oracle</Link>
                                        </div>
                                    </div>
                                    <div className="desktop-nested relative">
                                        <span
                                            className="flex items-center justify-between px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Technology
                                            Capabilities <span
                                                className="material-symbols-outlined text-[16px]">chevron_right</span></span>
                                        <div
                                            className="desktop-nested-menu absolute left-full top-0 ml-2 w-60 bg-surface-container-lowest border border-outline-variant/60 rounded-xl architectural-shadow p-3">
                                            <Link href="/ecosystem/technology-capabilities/ai-data-platforms"
                                                className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">AI
                                                &amp; Data Platforms</Link>
                                            <Link href="/ecosystem/technology-capabilities/open-source-cms"
                                                className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Open
                                                Source &amp; CMS</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group h-full flex items-center">
                                <button
                                    className="font-label-caps text-label-caps text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 flex items-center gap-1">
                                    Case Studies <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                </button>
                                <div
                                    className="hidden group-hover:block absolute left-0 top-full w-64 bg-surface-container-lowest border border-outline-variant/60 rounded-xl architectural-shadow p-3">
                                    <Link href="/case-studies/public-sector"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Public
                                        Sector</Link>
                                    <Link href="/case-studies/education-research"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Education
                                        &amp; Research</Link>
                                    <Link href="/case-studies/enterprise-systems"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Enterprise
                                        Systems</Link>
                                    <Link href="/case-studies/ai-innovation"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">AI
                                        &amp; Innovation</Link>
                                    <Link href="/case-studies/digital-platforms"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Digital
                                        Platforms</Link>
                                </div>
                            </div>
                            <div className="relative group h-full flex items-center">
                                <button
                                    className="font-label-caps text-label-caps text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 flex items-center gap-1">
                                    Insights <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                </button>
                                <div
                                    className="hidden group-hover:block absolute right-0 top-full w-72 bg-surface-container-lowest border border-outline-variant/60 rounded-xl architectural-shadow p-3">
                                    <Link href="/insights/ai-future-of-work"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">AI
                                        &amp; Future of Work</Link>
                                    <Link href="/insights/business-transformation"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Business
                                        Transformation</Link>
                                    <Link href="/insights/public-sector-innovation"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Public
                                        Sector Innovation</Link>
                                    <Link href="/insights/enterprise-systems"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Enterprise
                                        Systems</Link>
                                    <Link href="/insights/cybersecurity-risk"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Cybersecurity
                                        &amp; Risk</Link>
                                    <Link href="/insights/accessibility-inclusion"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Accessibility
                                        &amp; Inclusion</Link>
                                </div>
                            </div>
                            <div className="relative group h-full flex items-center">
                                <button
                                    className="font-label-caps text-label-caps text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 flex items-center gap-1">
                                    Company <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                </button>
                                <div
                                    className="hidden group-hover:block absolute right-0 top-full w-72 bg-surface-container-lowest border border-outline-variant/60 rounded-xl architectural-shadow p-3">
                                    <Link href="/company/about-dgl"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">About
                                        DGL</Link>
                                    <Link href="/company/careers"
                                        className="block px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all">Careers</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6">

                        <Link href="/company/support/"
                            className="hidden sm:inline-flex bg-primary text-on-primary font-label-caps text-label-caps px-4 md:px-6 py-3 rounded-lg hover:bg-primary-container hover:scale-95 transition-all duration-300 uppercase tracking-widest whitespace-nowrap">
                            LETS DISCUSS YOUR PROJECT
                        </Link>
                        <details className="mobile-menu-root relative xl:hidden">
                            <summary
                                className="mobile-menu-summary flex items-center justify-center w-11 h-11 rounded-lg border border-outline-variant bg-surface-container-lowest text-primary cursor-pointer hover:border-primary hover:bg-primary-fixed transition-all">
                                <span className="material-symbols-outlined">menu</span>
                            </summary>
                            <nav
                                className="absolute right-0 top-14 w-[min(86vw,340px)] max-h-[calc(100vh-104px)] overflow-y-auto bg-surface-container-lowest border border-outline-variant/60 rounded-xl architectural-shadow p-3">
                                <details className="mobile-nav-item">
                                    <summary
                                        className="mobile-menu-summary flex items-center justify-between px-4 py-3 rounded-lg font-label-caps text-label-caps text-primary bg-primary-fixed/60 cursor-pointer">
                                        Strategy <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                    </summary>
                                    <div className="py-2 pl-4">
                                        <Link href="/strategy/business-consulting" className="block px-4 py-1.5 text-sm text-on-surface-variant">Business
                                            Consulting</Link>
                                        <Link href="/strategy/digital-transformation" className="block px-4 py-1.5 text-sm text-on-surface-variant">AI &amp; Digital
                                            Transformation</Link>
                                        <Link href="/strategy/public-sector-advisory" className="block px-4 py-1.5 text-sm text-on-surface-variant">Public Sector
                                            Advisory</Link>
                                        <Link href="/strategy/cyber-risk-compliance" className="block px-4 py-1.5 text-sm text-on-surface-variant">Cyber, Risk &amp;
                                            Compliance</Link>
                                        <Link href="/strategy/pmo-change-management" className="block px-4 py-1.5 text-sm text-on-surface-variant">PMO &amp; Change
                                            Management</Link>
                                    </div>
                                </details>
                                <details className="mobile-nav-item">
                                    <summary
                                        className="mobile-menu-summary flex items-center justify-between px-4 py-3 rounded-lg font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all cursor-pointer">
                                        Technology <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                    </summary>
                                    <div className="py-2 pl-4">
                                        <Link href="/services/enterprise-applications" className="block px-4 py-1.5 text-sm text-on-surface-variant">Enterprise Applications
                                        </Link>
                                        <Link href="/services/ai-solutions-automation" className="block px-4 py-1.5 text-sm text-on-surface-variant">AI Solutions &amp;
                                            Automation</Link>
                                        <Link href="/services/digital-platforms" className="block px-4 py-1.5 text-sm text-on-surface-variant">Digital Platforms </Link>
                                        <Link href="/services/data-analytics" className="block px-4 py-1.5 text-sm text-on-surface-variant">Data &amp;
                                            Analytics</Link>
                                        <Link href="/services/cloud-infrastructure" className="block px-4 py-1.5 text-sm text-on-surface-variant">Cloud &amp;
                                            Infrastructure</Link>
                                        <Link href="/services/managed-services" className="block px-4 py-1.5 text-sm text-on-surface-variant">Managed Services</Link>
                                    </div>
                                </details>
                                <details className="mobile-nav-item">
                                    <summary
                                        className="mobile-menu-summary flex items-center justify-between px-4 py-3 rounded-lg font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all cursor-pointer">
                                        Industries <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                    </summary>
                                    <div className="py-2 pl-4">
                                        <Link href="/industries/government-public-sector" className="block px-4 py-1.5 text-sm text-on-surface-variant">Government &amp; Public
                                            Sector</Link>
                                        <Link href="/industries/education-research" className="block px-4 py-1.5 text-sm text-on-surface-variant">Education &amp;
                                            Research</Link>
                                        <Link href="/industries/healthcare" className="block px-4 py-1.5 text-sm text-on-surface-variant">Healthcare</Link>
                                        <Link href="/industries/housing-communities" className="block px-4 py-1.5 text-sm text-on-surface-variant">Housing &amp;
                                            Communities</Link>
                                        <Link href="/industries/nonprofit-charity" className="block px-4 py-1.5 text-sm text-on-surface-variant">Nonprofit &amp;
                                            Charity</Link>
                                        <Link href="/industries/transport-infrastructure" className="block px-4 py-1.5 text-sm text-on-surface-variant">Transport &amp;
                                            Infrastructure</Link>
                                        <Link href="/industries/energy-utilities" className="block px-4 py-1.5 text-sm text-on-surface-variant">Energy &amp;
                                            Utilities</Link>
                                        <Link href="/industries/enterprise-commercial" className="block px-4 py-1.5 text-sm text-on-surface-variant">Enterprise &amp;
                                            Commercial</Link>
                                    </div>
                                </details>
                                <details className="mobile-nav-item">
                                    <summary
                                        className="mobile-menu-summary flex items-center justify-between px-4 py-3 rounded-lg font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all cursor-pointer">
                                        Ecosystem <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                    </summary>
                                    <div className="py-2 pl-4">
                                        <details>
                                            <summary
                                                className="mobile-menu-summary flex items-center justify-between px-4 py-2 text-sm font-bold text-on-surface-variant cursor-pointer">
                                                Strategic Partners <span
                                                    className="material-symbols-outlined text-[16px]">expand_more</span></summary>
                                            <div className="pl-4 py-1">
                                                <Link href="/ecosystem/strategic-partners/microsoft" className="block px-4 py-1.5 text-sm text-outline">Microsoft</Link>
                                                <Link href="/ecosystem/strategic-partners/sap" className="block px-4 py-1.5 text-sm text-outline">SAP</Link>
                                                <Link href="/ecosystem/strategic-partners/oracle" className="block px-4 py-1.5 text-sm text-outline">Oracle</Link>
                                            </div>
                                        </details>
                                        <details>
                                            <summary
                                                className="mobile-menu-summary flex items-center justify-between px-4 py-2 text-sm font-bold text-on-surface-variant cursor-pointer">
                                                Technology Capabilities <span
                                                    className="material-symbols-outlined text-[16px]">expand_more</span></summary>
                                            <div className="pl-4 py-1">
                                                <Link href="/ecosystem/technology-capabilities/ai-data-platforms" className="block px-4 py-1.5 text-sm text-outline">AI &amp; Data
                                                    Platforms</Link>
                                                <Link href="/ecosystem/technology-capabilities/open-source-cms" className="block px-4 py-1.5 text-sm text-outline">Open Source &amp;
                                                    CMS</Link>
                                            </div>
                                        </details>
                                    </div>
                                </details>
                                <details className="mobile-nav-item">
                                    <summary
                                        className="mobile-menu-summary flex items-center justify-between px-4 py-3 rounded-lg font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all cursor-pointer">
                                        Case Studies <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                    </summary>
                                    <div className="py-2 pl-4">
                                        <Link href="/case-studies/public-sector" className="block px-4 py-1.5 text-sm text-on-surface-variant">Public Sector</Link>
                                        <Link href="/case-studies/education-research" className="block px-4 py-1.5 text-sm text-on-surface-variant">Education &amp;
                                            Research</Link>
                                        <Link href="/case-studies/enterprise-systems" className="block px-4 py-1.5 text-sm text-on-surface-variant">Enterprise
                                            Systems</Link>
                                        <Link href="/case-studies/ai-innovation" className="block px-4 py-1.5 text-sm text-on-surface-variant">AI &amp;
                                            Innovation</Link>
                                        <Link href="/case-studies/digital-platforms" className="block px-4 py-1.5 text-sm text-on-surface-variant">Digital Platforms</Link>
                                    </div>
                                </details>
                                <details className="mobile-nav-item">
                                    <summary
                                        className="mobile-menu-summary flex items-center justify-between px-4 py-3 rounded-lg font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all cursor-pointer">
                                        Insights <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                    </summary>
                                    <div className="py-2 pl-4">
                                        <Link href="/insights/ai-future-of-work" className="block px-4 py-1.5 text-sm text-on-surface-variant">AI &amp; Future of
                                            Work</Link>
                                        <Link href="/insights/business-transformation" className="block px-4 py-1.5 text-sm text-on-surface-variant">Business
                                            Transformation</Link>
                                        <Link href="/insights/public-sector-innovation" className="block px-4 py-1.5 text-sm text-on-surface-variant">Public Sector
                                            Innovation</Link>
                                        <Link href="/insights/enterprise-systems" className="block px-4 py-1.5 text-sm text-on-surface-variant">Enterprise
                                            Systems</Link>
                                        <Link href="/insights/cybersecurity-risk" className="block px-4 py-1.5 text-sm text-on-surface-variant">Cybersecurity &amp;
                                            Risk</Link>
                                        <Link href="/insights/accessibility-inclusion" className="block px-4 py-1.5 text-sm text-on-surface-variant">Accessibility &amp;
                                            Inclusion</Link>
                                    </div>
                                </details>
                                <details className="mobile-nav-item">
                                    <summary
                                        className="mobile-menu-summary flex items-center justify-between px-4 py-3 rounded-lg font-label-caps text-label-caps text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all cursor-pointer">
                                        Company <span className="material-symbols-outlined text-[18px]">expand_more</span></summary>
                                    <div className="py-2 pl-4">

                                        <Link href="/company/about-dgl" className="block px-4 py-1.5 text-sm text-on-surface-variant">About DGL</Link>
                                        <Link href="/company/careers" className="block px-4 py-1.5 text-sm text-on-surface-variant">Careers</Link>
                                    </div>
                                </details>
                                <Link className="mt-2 flex items-center justify-center gap-2 bg-primary text-on-primary px-4 py-3 rounded-lg font-label-caps text-label-caps hover:bg-primary-container transition-colors"
                                    href="/company/about-dgl">
                                    LETS DISCUSS <span className="material-symbols-outlined text-[18px]">north_east</span>
                                </Link>
                            </nav>
                        </details>
                    </div>
                </div>
            </header>
        </>
    );
}
