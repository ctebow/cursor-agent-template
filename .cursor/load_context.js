import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import clipboardy from "clipboardy";

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
  context += `Follow these files and rules strictly:\n`;
  context += `system_overview → rules → conventions → workflows → past_attempts\n\n`;

  for (const file of FILES) {
    const filePath = path.join(ROOT, file);
    context += `\n\n---\n## 📄 ${file}\n---\n`;
    context += readFileSafe(filePath);
  }

  context += `
\n\n---\n## 🚨 ABSOLUTE RULES
- Reference past_attempts.md before proposing solutions.
- Do not repeat documented mistakes.
- Log new failures immediately.
- Ask clarifying questions only if rules are ambiguous.
`;

  return context;
}

// Auto-copy to clipboard when run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const context = buildContext();
  clipboardy.writeSync(context);
  console.log("✅ Agent context copied to clipboard.");
}