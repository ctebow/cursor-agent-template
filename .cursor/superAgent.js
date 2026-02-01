/**
 * SuperAgent Orchestrator
 * Coordinates planning, execution, testing, and memory logging.
 */

const fs = require("fs");
const path = require("path");
const { buildContext } = require("./load_context");

const ROOT = path.resolve(__dirname);
const PAST_ATTEMPTS = path.join(ROOT, "past_attempts.md");

function logFailure({ task, problem, fix, notes }) {
  const entry = `
### [${new Date().toISOString()}] Task: ${task}
- Problem: ${problem}
- Fix: ${fix}
- Notes: ${notes || "N/A"}
`;

  fs.appendFileSync(PAST_ATTEMPTS, entry);
}

function planTask(taskDescription) {
  return `
## 🧠 PLANNER AGENT
Task: ${taskDescription}

1. Identify affected components
2. Identify risks (CI, deployment, regressions)
3. Search past_attempts.md for related failures
4. Propose step-by-step plan
5. Define success criteria
`;
}

function executeTask(taskDescription) {
  return `
## ⚙️ EXECUTOR AGENT
Task: ${taskDescription}

Rules:
- Follow system_overview.md
- Follow rules.md
- Avoid past_attempts.md failures

Deliverables:
- Code changes
- Inline comments
- Tests
`;
}

function testTask(taskDescription) {
  return `
## 🧪 TESTER AGENT
Task: ${taskDescription}

Responsibilities:
- Run unit tests
- Run integration tests
- Validate CI/CD compatibility
- Identify edge cases
`;
}

function reviewTask(taskDescription) {
  return `
## 🔍 REVIEWER AGENT
Task: ${taskDescription}

Checklist:
- Rules followed
- Conventions followed
- No repeated mistakes
- Tests included
- Deployment-safe
`;
}

function runSuperAgent(taskDescription) {
  const context = buildContext();

  return `
${context}

---

# 🚀 SUPERAGENT EXECUTION

${planTask(taskDescription)}

${executeTask(taskDescription)}

${testTask(taskDescription)}

${reviewTask(taskDescription)}

## 📌 FINAL INSTRUCTIONS
- If any phase fails, STOP
- Log failure to past_attempts.md
- Do not guess or patch silently
- Provide a final summary
`;
}

// Run directly
if (require.main === module) {
  const task = process.argv.slice(2).join(" ");
  if (!task) {
    console.error("❌ Please provide a task description.");
    process.exit(1);
  }
  console.log(runSuperAgent(task));
}

module.exports = {
  runSuperAgent,
  logFailure
};
