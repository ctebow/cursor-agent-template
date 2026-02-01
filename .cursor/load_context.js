/**
 * Agent Context Loader (ESM)
 * Compatible with Node 18+ / 20+ / 24+
 */

import fs from "fs";
import path from "path";
import clipboardy from "clipboardy";
import { fileURLToPath } from "url";

// ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = __dirname;
const FILES = [
  "system_overview.md",
  "rules.md",
  "conventions.md",
  "workflows.md",
  "past_attempts.md",
  "prompts.md"
];

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return `# Missing File\n${filePath} not found.\n`;
  }
}

export function buildContext() {
  let context = `# 🔒 AGENT CONTEXT (AUTO-GENERATED)\n\n`;
  context += `You MUST follow all instructions below.\n`;
  context += `Priority order:\n`;
  context += `system_overview → rules → conventions → workflows → past_attempts\n\n`;

  for (const file of FILES) {
    const filePath = path.join(ROOT, file);
    context += `\n\n---\n## 📄 ${file}\n---\n`;
    context += readFileSafe(filePath);
  }

  context += `
\n\n---\n## 🚨 ABSOLUTE RULES
- You must reference past_attempts.md before proposing solutions.
- You must not repeat documented mistakes.
- You must log new failures immediately.
- Ask clarifying questions ONLY if rules are ambiguous.
`;

  return context;
}

// Run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(buildContext());
}

clipboardy.writeSync(buildContext());
console.log("✅ Agent context copied to clipboard.");