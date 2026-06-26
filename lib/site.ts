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
    number: "002",
    title: "CIRO",
    status: "Regional finalist",
    kind: "Operational prototype",
    description:
      "A multi-agent crisis intelligence and response orchestrator that turns fragmented civic reports into validated, operator-reviewable action.",
    href: "/projects#ciro",
    tags: ["Gemini", "FastAPI", "Realtime", "Geospatial"],
  },
  {
    number: "003",
    title: "CASEMIND",
    status: "Research concept",
    kind: "DFIR exploration",
    description:
      "An investigation assistant concept for reconstructing cyber incidents, organizing timelines, evaluating attacker hypotheses, and planning response.",
    href: "/projects#casemind",
    tags: ["DFIR", "Reasoning", "Incident response"],
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
