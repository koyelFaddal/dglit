import Link from "next/link";
import styles from "./solutions.module.css";

export const metadata = {
  title: "Solutions | DGL — Strategy, AI & Enterprise Technology",
  description: "Explore DGL solutions across business transformation, AI, enterprise applications, data, cloud and managed services. From strategy to implementation and ongoing optimisation.",
};

const challenges = [
  ["Transform & Modernise", "Modernise operating models, processes and legacy technology.", "Operating models, process improvement and a phased transformation roadmap.", "01"],
  ["Adopt AI & Automation", "Apply AI intelligently across workflows, operations and customer experiences.", "Practical use cases, human oversight and governed automation.", "02"],
  ["Modernise Enterprise Platforms", "Connect ERP, CRM and the business-critical platforms your teams rely on.", "ERP and CRM integration, shared workflows and reliable business data.", "03"],
  ["Unlock Data & Intelligence", "Turn fragmented data into trusted insights and better decisions.", "Data foundations, reporting and decision-ready analytics.", "04"],
  ["Build Secure, Resilient Infrastructure", "Modernise cloud and infrastructure with security and continuity built in.", "Cloud planning, resilient architecture and service continuity.", "05"],
  ["Optimise & Operate", "Improve performance and continuity through managed services and ongoing optimisation.", "Service monitoring, support and continuous improvement.", "06"],
];
const capabilities = [
  ["Strategy & Transformation", "Set the direction. Build the case for change.", [
    ["Business Consulting", "Business priorities, operating models and investment roadmaps."],
    ["AI & Digital Transformation", "Operating models, process improvement and a phased transformation roadmap."],
    ["Public Sector Advisory", "Service design, governance and accountable public programmes."],
    ["Cyber, Risk & Compliance", "Security priorities, risk controls and compliance readiness."],
    ["PMO & Change Management", "Programme governance, delivery coordination and team adoption."],
  ]],
  ["Technology & Engineering", "Bring the roadmap to life. Keep it delivering.", [
    ["Enterprise Applications", "ERP and CRM integration, shared workflows and reliable business data."],
    ["AI Solutions & Automation", "Practical use cases, human oversight and governed automation."],
    ["Digital Platforms", "Accessible websites, portals and connected digital experiences."],
    ["Data & Analytics", "Data foundations, reporting and decision-ready analytics."],
    ["Cloud & Infrastructure", "Cloud planning, resilient architecture and service continuity."],
    ["Managed Services", "Service monitoring, support and continuous improvement."],
  ]],
];
const industries = [
  ["Government & Public Sector", "Connect public services with accountable, accessible delivery.", "Service access and public accountability"],
  ["Education & Research", "Bring learning, research and institutional operations together.", "Learning systems and research operations"],
  ["Healthcare", "Support connected care with secure data and dependable systems.", "Care coordination and information governance"],
  ["Housing & Communities", "Improve resident services and visibility across housing operations.", "Resident experience and asset visibility"],
  ["Nonprofit & Charity", "Help teams focus resources on their mission and community impact.", "Mission delivery and resource planning"],
  ["Transport & Infrastructure", "Connect asset information, service planning and operations.", "Asset planning and operational resilience"],
  ["Energy & Utilities", "Build resilience across assets, operations and customer services.", "Service reliability and operational insight"],
  ["Enterprise & Commercial", "Unify business platforms and create room for sustainable growth.", "Connected operations and scalable platforms"],
];
const principles = [
  ["Business-first", "Technology decisions grounded in business outcomes."],
  ["Platform-agnostic", "The right technology for your needs, without a predetermined vendor."],
  ["End-to-end delivery", "Strategy through implementation and ongoing operations."],
  ["Outcome-focused", "Success measured through operational and business impact."],
];
const engagements = [
  ["Advisory & Consulting", "Define your strategy, roadmap and business case."],
  ["Transformation Programmes", "Deliver complex change across people, processes and technology."],
  ["Technology Implementation", "Design, build, integrate and deploy business-ready solutions."],
  ["Managed Services", "Operate, optimise and continuously improve."],
];
const cases = [
  { title: "A shared foundation for enterprise operations", category: "Enterprise systems", challenge: "Disconnected finance, procurement and HR processes with manual reconciliations.", solution: "A phased platform strategy with process ownership, integration priorities and data controls.", outcome: "Common approvals, fewer duplicate entries and more reliable executive reporting." },
  { title: "Trusted knowledge, closer to the people who need it", category: "AI innovation", challenge: "Service teams searched across policies, notes and ticket history for routine answers.", solution: "A retrieval-based assistant with citations, feedback and escalation to content owners.", outcome: "Faster access to reliable answers and better visibility of outdated knowledge." },
];
const insights = [
  ["AI & the Future of Work", "AI creates value when teams redesign work around clear use cases, trusted knowledge and human review. Skills development and feedback help turn early trials into dependable day-to-day practice.", "Human oversight and team adoption", "AI transformation"],
  ["Business Transformation", "Modernisation starts with understanding where work slows down. A phased roadmap connects process changes, platform decisions and team responsibilities with measurable business priorities.", "Clear priorities and phased delivery", "Transformation"],
  ["Enterprise Systems", "Connected platforms depend on common data definitions, clear ownership and consistent workflows. Integration and user adoption deserve the same attention as the software itself.", "Shared data and connected workflows", "Enterprise technology"],
];

function Heading({ label, title, children }) {
  return <div className={styles.heading}><span className={styles.eyebrow}>{label}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}

export default function SolutionsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="solutions-title">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div>
            <span className={styles.eyebrow}>DGL / Solutions</span>
            <h1 id="solutions-title">Solutions for<br /><em>What’s Next.</em></h1>
            <p className={styles.intro}>Transform complex challenges into measurable outcomes with strategy, AI, enterprise technology, cloud, data and managed services built around your organisation.</p>
            <p className={styles.summary}>Strategy, technology and ongoing delivery — connected around your business.</p>
          </div>
          <div className={styles.heroVisual} aria-label="DGL connects strategy, technology and operations around your business">
            <span className={styles.visualLabel}>Connected thinking. Practical progress.</span>
            <div className={styles.orbit}><div className={styles.core}><span>DGL</span><small>Your ambition.<br />Our shared direction.</small></div><span className={styles.orbitOne}>Strategy</span><span className={styles.orbitTwo}>Technology</span><span className={styles.orbitThree}>Operations</span></div>
            <p>From the first question<br />to the next opportunity.</p>
          </div>
        </div>
      </section>

      <section id="challenges" className={`${styles.section} ${styles.container} ${styles.challenges}`}>
        <Heading label="Start with your challenge" title="What problem are you trying to solve?">DGL brings business understanding and technical delivery together to address the challenges that shape your organisation’s next stage.</Heading>
        <div className={styles.gridThree}>{challenges.map(([title, description, detail, number]) => <article key={title} className={styles.card}><span className={styles.number}>{number}</span><h3>{title}</h3><p>{description}</p><span className={styles.cardNote}>{detail}</span></article>)}</div>
      </section>

      <section id="capabilities" className={`${styles.section} ${styles.tinted}`}><div className={styles.container}>
        <Heading label="Our capabilities" title="From Strategy to Execution">Advisory expertise and engineering capability, connected around one business ambition.</Heading>
        <div className={styles.gridTwo}>{capabilities.map(([title, description, items]) => <article className={styles.capability} key={title}><h3>{title}</h3><p>{description}</p><ul>{items.map(([label, detail]) => <li key={label}><div className={styles.capabilityItem}><span>{label}</span><p>{detail}</p></div></li>)}</ul></article>)}</div>
      </div></section>

      <section className={`${styles.section} ${styles.container}`}>
        <div className={styles.approachHeader}>
          <div><span className={styles.eyebrow}>The DGL approach</span><h2>Ambition.<br /><em>Made actionable.</em></h2></div>
          <div className={styles.approachIntro}><span className={styles.approachLabel}>One partner. Every stage.</span><p>We connect business priorities with practical delivery, working alongside your teams from the first discovery to continuous improvement.</p></div>
        </div>
        <ol className={styles.journey}>{["Discover", "Strategise", "Design", "Implement", "Optimise"].map((step, i) => <li key={step}><span>0{i + 1}</span><h3>{step}</h3></li>)}</ol>
        <div className={styles.gridFour}>{principles.map(([title, description]) => <div className={styles.principle} key={title}><h3>{title}</h3><p>{description}</p></div>)}</div>
      </section>

      <section className={styles.container}><div className={styles.ai}>
        <div><Heading label="AI spotlight" title="AI That Moves Beyond Experimentation">Move from AI ambition to practical, governed solutions that deliver measurable business value.</Heading><p className={styles.summary}>DGL connects use-case selection, data readiness and governance with implementation and ongoing evaluation.</p></div>
        <ul className={styles.aiList}>{["Generative AI", "Intelligent Automation", "AI Agents", "Data & Machine Learning", "AI Strategy & Governance"].map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}</ul>
      </div></section>

      <section className={`${styles.section} ${styles.container}`}>
        <Heading label="Industry expertise" title="Built Around Your Industry">Technology works better when it reflects the people, priorities and responsibilities of your sector.</Heading>
        <div className={`${styles.gridFour} ${styles.industryGrid}`}>{industries.map(([title, description, focus]) => <article className={styles.industry} key={title}><h3>{title}</h3><p>{description}</p><span className={styles.cardNote}>{focus}</span></article>)}</div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`}><div className={styles.container}>
        <div className={styles.ecosystemHeading}><span className={styles.eyebrow}>Technology ecosystem</span><h2>The right platforms.<br /><em>Connected to your ambition.</em></h2><p>DGL brings enterprise applications, cloud and intelligent data together around the way your organisation works.</p></div>
        <div className={styles.ecosystem}>{[["Microsoft", "Productivity, cloud and business applications"], ["Oracle", "Enterprise applications and data platforms"], ["SAP", "Core business processes and ERP"], ["AI & Data Platforms", "Analytics, machine learning and governed AI"]].map(([label, description]) => <div key={label}><h3>{label}</h3><p>{description}</p></div>)}</div>
      </div></section>

      <section className={`${styles.section} ${styles.container} ${styles.proof}`}>
        <Heading label="Proof in practice" title="Outcomes That Speak for Themselves">DGL’s transformation work connects the starting challenge, the delivery approach and the resulting operational improvement.</Heading>
        <div className={styles.gridTwo}>{cases.map((item) => <article className={styles.case} key={item.title}><span className={styles.eyebrow}>{item.category}</span><h3>{item.title}</h3><dl>{["challenge", "solution", "outcome"].map((label) => <div key={label}><dt>{label}</dt><dd>{item[label]}</dd></div>)}</dl></article>)}</div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`}><div className={styles.container}>
        <Heading label="How we engage" title="How We Work With You">DGL supports focused assignments and complete transformation programmes, with responsibilities and delivery scope shaped around each organisation.</Heading>
        <div className={styles.gridFour}>{engagements.map(([title, description], i) => <article className={styles.engagement} key={title}><span className={styles.number}>0{i + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </div></section>

      <section className={`${styles.section} ${styles.container} ${styles.insights}`}>
        <Heading label="Insights" title="Thinking for the Next Transformation">Perspectives to help shape your next business and technology decision.</Heading>
        <div className={styles.gridThree}>{insights.map(([title, description, takeaway, category]) => <article className={styles.card} key={title}><span className={styles.eyebrow}>{category}</span><h3>{title}</h3><p>{description}</p><span className={styles.cardNote}>{takeaway}</span></article>)}</div>
      </section>

      <section className={`${styles.container} ${styles.finalWrap}`}><div className={styles.final}>
        <div className={styles.finalCopy}>
          <span className={styles.eyebrow}>Your transformation partner</span>
          <h2>Turn your next business challenge into a clear plan for progress.</h2>
          <p>Align your priorities, technology and delivery roadmap with DGL’s expertise in strategy, AI and enterprise transformation.</p>
        </div>
        <div className={styles.finalActions}>
          <Link className={styles.primaryAction} href="/company/support">Talk to DGL</Link>
        </div>
      </div></section>
    </main>
  );
}
