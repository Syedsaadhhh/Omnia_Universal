import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const paths = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" }).split("\0").filter(Boolean);
const patterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/,
  /\bgh[pousr]_[A-Za-z0-9]{30,}\b/,
  /\bgithub_pat_[A-Za-z0-9_]{50,}\b/,
  /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/,
  /\bre_[A-Za-z0-9]{24,}\b/,
];
const failures = [];
for (const path of paths) {
  if (/(^|\/)\.env(?:\.|$)/.test(path) && !path.endsWith(".env.example")) failures.push(path);
  const data = readFileSync(path);
  if (data.includes(0)) continue;
  if (patterns.some((pattern) => pattern.test(data.toString("utf8")))) failures.push(path);
}
if (failures.length) {
  console.error("Potential secret-bearing files (values suppressed):", [...new Set(failures)].join(", "));
  process.exitCode = 1;
} else {
  console.log(`Checked ${paths.length} tracked paths; no configured credential-pattern matches. This is a bounded scan.`);
}
