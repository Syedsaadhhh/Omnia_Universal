export const site = {
  name: "Omnia Sec AI Labs",
  shortName: "OMNIA",
  description:
    "An independent agentic AI and cybersecurity lab building secure autonomous systems for infrastructure and real-world operations.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://omniaseclabsai.vercel.app",
  founder: "Syed Saad",
  location: "Karachi, Pakistan",
  email: "omniaseclabs@hyu.me",
  github: "https://github.com/Syedsaadhhh",
  linkedin: "",
};

export const navItems = [
  { href: "/gns3-agent", label: "GNS3 Agent" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/build-log", label: "Build Log" },
  { href: "/about", label: "Founder" },
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
    title: "Local-first intelligence",
    question:
      "How much useful autonomy can run on modest hardware with minimal dependence on paid APIs?",
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
