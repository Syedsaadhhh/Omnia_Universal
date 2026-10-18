import { SITE_ORIGIN } from "./site-origin";

export const site = {
  name: "Omniasec Labs",
  shortName: "Omniasec Labs",
  description:
    "A founder-led technology research and product-development initiative: investigating real problems, forming capable teams and developing useful technology.",
  url: SITE_ORIGIN,
  founder: "Syed Saad",
  location: "Karachi, Pakistan",
  email: "contact@omniaseclabs.com",
  github: "https://github.com/Syedsaadhhh",
  linkedin: "",
};

export const navItems = [
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Work" },
  { href: "/for-organizations", label: "For Organizations" },
  { href: "/about", label: "About" },
  { href: "/collaborate", label: "Collaborate" },
  { href: "/build-log", label: "Updates" },
];

export type ProjectCategory = "Flagship" | "Hackathons" | "Security Tools";

export type ProjectShowcaseItem = {
  title: string;
  event: string;
  summary: string;
  status: string;
  categories: ProjectCategory[];
  tags: string[];
  primary: { label: string; href: string };
  github?: string;
};

export const projectShowcase: ProjectShowcaseItem[] = [
  {
    title: "ReproForge",
    event: "AMD ACT II · FrontierOps",
    summary: "Turns ambitious AI claims into rerunnable evidence and signed reproducibility passports.",
    status: "Active Build",
    categories: ["Flagship", "Hackathons", "Security Tools"],
    tags: ["Next.js", "FastAPI", "ROCm", "SHA-256"],
    primary: { label: "View demo ↗", href: "https://reproforge-sentinel.onrender.com" },
    github: "https://github.com/Syedsaadhhh/reproforge-sentinel",
  },
  {
    title: "GNS3 Agent",
    event: "Omnia Flagship · 001",
    summary: "Diagnoses Windows-first network labs and produces visible, reviewable execution evidence.",
    status: "Active Build",
    categories: ["Flagship", "Security Tools"],
    tags: ["GNS3", "Python", "REST API", "DFIR"],
    primary: { label: "View architecture →", href: "/gns3-agent" },
  },
  {
    title: "OpenDoor Relay",
    event: "AWS Agents for Humans · Strands",
    summary: "Keeps an event accessible when a captioner or interpreter drops out, with bounded replacement recovery and a safe human handoff.",
    status: "Verified Rehearsal",
    categories: ["Flagship", "Hackathons"],
    tags: ["AWS", "Strands Agents", "Accessibility", "Fail-closed"],
    primary: { label: "View demo ↗", href: "https://opendoor-relay.vercel.app" },
    github: "https://github.com/Syedsaadhhh/FaangRilla",
  },
  {
    title: "DwellGuard",
    event: "Public-interest logistics prototype",
    summary: "Turns a delayed truck into one driver-approved, dock-confirmed plan and escalates when the evidence does not line up.",
    status: "Public Prototype",
    categories: ["Flagship", "Hackathons"],
    tags: ["Human approval", "Evidence chain", "Logistics", "Recovery"],
    primary: { label: "View demo ↗", href: "https://dwellguard-ai.vercel.app" },
    github: "https://github.com/Syedsaadhhh/DwellGuard-AI",
  },
  {
    title: "COMMONS",
    event: "Alibaba Cloud AI Hackathon · Team Build",
    summary: "Turns a community report into human-reviewed civic work with private evidence, measurable progress, and an impact passport.",
    status: "Public Prototype",
    categories: ["Hackathons"],
    tags: ["Qwen", "Supabase", "Civic Tech", "Human Review"],
    primary: { label: "View demo ↗", href: "https://commons-alibaba.vercel.app" },
    github: "https://github.com/Syedsaadhhh/COMMONS-ALIBABA",
  },
  {
    title: "CutHush",
    event: "VoltHacks 2026",
    summary: "Uses an ordinary microphone to detect persistent machine chatter, trigger a bounded response, and prove recovery or enter SAFE_HOLD.",
    status: "Public Prototype",
    categories: ["Hackathons", "Security Tools"],
    tags: ["Web Audio", "WebSockets", "Watchdog", "SHA-256"],
    primary: { label: "View demo ↗", href: "https://cuthush-live.onrender.com" },
    github: "https://github.com/Syedsaadhhh/VoltHacks",
  },
  {
    title: "CIRO",
    event: "Google AI Seekho 2026",
    summary: "A team-built crisis intelligence prototype preserved with clear credit and evidence.",
    status: "Regional Shortlist",
    categories: ["Hackathons"],
    tags: ["Gemini", "FastAPI", "Realtime", "Team Zero Trace"],
    primary: { label: "View case study →", href: "/projects#ciro" },
    github: "https://github.com/Syedsaadhhh/ciro-khi",
  },
  {
    title: "CredScan Lite",
    event: "Omnia Lab Tool · OLT-01",
    summary: "Finds weak, reused, short, and duplicate credentials without sending data off-device.",
    status: "Public Prototype",
    categories: ["Security Tools"],
    tags: ["Python", "Offline", "Credential Hygiene"],
    primary: { label: "View GitHub ↗", href: "https://github.com/Syedsaadhhh/credscan-lite" },
  },
  {
    title: "ActionScribe Local",
    event: "Omnia Lab Tool · OLT-02",
    summary: "Converts local meeting or lecture transcripts into actions, owners, and deadlines.",
    status: "Public Prototype",
    categories: ["Security Tools"],
    tags: ["Local-first AI", "Streamlit", "Operations"],
    primary: { label: "View GitHub ↗", href: "https://github.com/Syedsaadhhh/actionscribe-local" },
  },
  {
    title: "Revise Lite",
    event: "Omnia Lab Tool · OLT-03",
    summary: "Turns rough lecture notes into compact revision sheets with no external dependency.",
    status: "Public Prototype",
    categories: ["Security Tools"],
    tags: ["Education", "Offline", "Python"],
    primary: { label: "View GitHub ↗", href: "https://github.com/Syedsaadhhh/revise-lite" },
  },
  {
    title: "CASEMIND",
    event: "DFIR Research Concept · R-01",
    summary: "Explores evidence-led incident timelines, attacker hypotheses, and response planning.",
    status: "Research",
    categories: ["Security Tools"],
    tags: ["DFIR", "Incident Response", "Reasoning"],
    primary: { label: "Discuss concept →", href: "/contact?interest=Technical%20discussion" },
  },
];

export const projects = [
  {
    number: "001",
    title: "GNS3 Agent",
    status: "Active development",
    kind: "Flagship product",
    description:
      "A Windows-first diagnostic and automation agent for GNS3 labs, infrastructure inspection, evidence capture, troubleshooting, and report generation.",
    href: "/gns3-agent",
    tags: ["GNS3", "Infrastructure", "Agentic AI", "Python"],
  },
  {
    number: "VF-01",
    title: "ReproForge",
    status: "FrontierOps active build",
    kind: "Startup + hackathon venture",
    description:
      "A claim-to-evidence verification layer that reruns AI/ML claims inside controlled sandboxes and generates signed reproducibility passports for demos, benchmarks, research artifacts, and technical due diligence.",
    href: "/projects#reproforge",
    tags: ["FrontierOps", "lablab.ai", "AI verification", "Reproducibility"],
  },
  {
    number: "CS-01",
    title: "CIRO",
    status: "Google AI Seekho 2026",
    kind: "Team-built event case study",
    description:
      "A crisis intelligence and response prototype built with Team Zero Trace for Google AI Seekho 2026, preserved as a case study rather than an Omnia-owned service.",
    href: "/projects#ciro",
    tags: ["Team Zero Trace", "Gemini", "FastAPI", "Realtime"],
  },
  {
    number: "R-01",
    title: "CASEMIND",
    status: "Research concept",
    kind: "DFIR exploration",
    description:
      "An investigation assistant concept for reconstructing cyber incidents, organizing timelines, evaluating attacker hypotheses, and planning response.",
    href: "/projects#casemind",
    tags: ["DFIR", "Reasoning", "Incident response"],
  },
];

export const labTools = [
  {
    number: "OLT-01",
    title: "CredScan Lite",
    repo: "https://github.com/Syedsaadhhh/credscan-lite",
    status: "Public prototype",
    kind: "Security education tool",
    deployStatus: "Offline CLI today · web demo candidate",
    description:
      "A local credential-dump analyzer for cybersecurity students, SOC trainees, digital-forensics learners, privacy researchers, and small security teams.",
    proof:
      "Detects weak, reused, numeric-only, short, and duplicate credentials with zero runtime dependencies.",
    tags: ["Cybersecurity", "Credential hygiene", "Offline", "Python"],
  },
  {
    number: "OLT-02",
    title: "ActionScribe Local",
    repo: "https://github.com/Syedsaadhhh/actionscribe-local",
    status: "Public prototype",
    kind: "Local-first productivity agent",
    deployStatus: "CLI + Streamlit today · hosted demo candidate",
    description:
      "An offline meeting, lecture, and voice-note action extractor for students, teams, and emerging-market workflows.",
    proof:
      "Turns transcripts into action items, deadlines, responsibilities, summaries, Markdown, and JSON exports.",
    tags: ["Local-first AI", "Students", "Operations", "Streamlit"],
  },
  {
    number: "OLT-03",
    title: "Revise Lite",
    repo: "https://github.com/Syedsaadhhh/revise-lite",
    status: "Public prototype",
    kind: "Study automation tool",
    deployStatus: "Offline CLI today · student web tool candidate",
    description:
      "An offline study-note summarizer that converts raw lecture notes into revision-ready sheets for exam preparation.",
    proof:
      "Extracts key sentences, keyword frequency, and instant revision sheets without external dependencies.",
    tags: ["Education", "Offline", "Revision", "Python"],
  },
];

export const researchQuestions = [
  {
    id: "R/01",
    title: "Trustworthy agent execution",
    question:
      "How can agents act across complex software while remaining observable, recoverable, and constrained?",
  },
  {
    id: "R/02",
    title: "Reproducible AI claims",
    question:
      "What evidence is enough for a model, benchmark, or demo claim to be trusted by a technical reviewer?",
  },
  {
    id: "R/03",
    title: "Agentic cyber defense",
    question:
      "How can specialized agents reduce investigation and response time without hiding critical decisions?",
  },
  {
    id: "R/04",
    title: "Human-agent coordination",
    question:
      "Where should people approve, redirect, or override autonomous workflows to preserve trust and accountability?",
  },
];
