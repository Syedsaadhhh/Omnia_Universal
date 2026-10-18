import { projectShowcase } from "./site";

export type WorkKind = "Prototype" | "Experiment" | "Concept";
const editorial: Record<
  string,
  { summary: string; kind: WorkKind; credit?: string }
> = {
  ReproForge: {
    summary:
      "Exploring reproducible AI/ML claims and evidence artifacts that a technical reviewer can inspect.",
    kind: "Prototype",
  },
  "GNS3 Agent": {
    summary:
      "Exploring diagnostics, read-only connectivity and reporting for network-lab workflows.",
    kind: "Prototype",
    credit: "Network-lab automation project",
  },
  "OpenDoor Relay": {
    summary:
      "A public-interest prototype exploring recovery when a captioner or interpreter drops out of an event.",
    kind: "Prototype",
  },
  DwellGuard: {
    summary:
      "Exploring human-reviewed coordination around delayed trucks and dock plans.",
    kind: "Prototype",
  },
  COMMONS: {
    summary:
      "A team/event prototype exploring how community reports could become human-reviewed civic work.",
    kind: "Prototype",
  },
  CutHush: {
    summary:
      "A prototype exploring machine-sound detection, bounded responses and evidence of recovery.",
    kind: "Prototype",
  },
  CIRO: {
    summary:
      "A team-built crisis-intelligence exploration, preserved with its original contribution and event context.",
    kind: "Prototype",
    credit: "Team Zero Trace · Google AI Seekho 2026",
  },
  "CredScan Lite": {
    summary:
      "A local credential-hygiene experiment for identifying weak, reused and duplicate credentials.",
    kind: "Experiment",
  },
  "ActionScribe Local": {
    summary:
      "An offline productivity experiment exploring actions, owners and deadlines in transcripts.",
    kind: "Experiment",
  },
  "Revise Lite": {
    summary:
      "An offline study-tool experiment exploring revision sheets from lecture notes.",
    kind: "Experiment",
  },
  CASEMIND: {
    summary:
      "A research concept for organizing incident timelines, hypotheses and response reasoning.",
    kind: "Concept",
  },
};

export const workEntries = projectShowcase.map((project) => {
  const record = editorial[project.title];
  const slug = project.title.toLowerCase().replaceAll(" ", "-");
  return {
    slug,
    title: project.title,
    summary: record.summary,
    kind: record.kind,
    credit: record.credit ?? project.event,
    tags: project.tags,
    source:
      project.github ??
      (project.primary.href.startsWith("https://github.com/")
        ? project.primary.href
        : null),
    originalLink: project.primary.href,
    detail: slug === "gns3-agent" ? "/gns3-agent" : `/projects/${slug}`,
  };
});

export const detailEntries = workEntries.filter(
  (project) => project.slug !== "gns3-agent",
);
export const operatingSteps = [
  "Research",
  "Problem discovery",
  "Validation",
  "Team formation",
  "Prototype engineering",
  "User testing",
  "Product development",
  "Potential venture",
];
