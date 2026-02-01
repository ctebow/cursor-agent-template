import { execSync } from "child_process";
import fs from "fs";

export function runCommand(cmd) {
  try {
    const output = execSync(cmd, { stdio: "pipe" }).toString();
    return output.trim();
  } catch (err) {
    console.error("Command failed:", cmd, err.message);
    return null;
  }
}

// Git helpers
export function initRepo() {
  runCommand("git init");
}

export function createBranch(branchName) {
  runCommand(`git checkout -b ${branchName}`);
}

export function addFiles(files = ".") {
  runCommand(`git add ${files}`);
}

export function commit(message) {
  runCommand(`git commit -m "${message}"`);
}

export function push(remote = "origin", branch = "main") {
  runCommand(`git push ${remote} ${branch}`);
}

// Record failures to past_attempts.md
export function logFailure({task, problem, fix}) {
  const file = ".cursor/past_attempts.md";
  const entry = `\n- Task: ${task}\n  Problem: ${problem}\n  Fix: ${fix}\n`;
  fs.appendFileSync(file, entry);
}
