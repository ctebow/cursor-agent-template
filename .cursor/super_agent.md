# SuperAgent Configuration (Optional)

## Purpose
Orchestrate multiple agents to execute complex tasks with coordination, error handling, and knowledge sharing.

## Behavior
- Reads `system_overview.md`, `rules.md`, `past_attempts.md`.
- Splits tasks into subtasks based on component or workflow stage.
- Assigns subtasks to specialized agents (e.g., frontend, backend, CI/CD).
- Consolidates outputs into a unified result.
- Checks for adherence to rules and conventions.
- Automatically logs errors and lessons learned to `past_attempts.md`.

## Recommended Setup
- Agent Roles:
  - `Planner`: Generates high-level task plan.
  - `Executor`: Generates code snippets for subtasks.
  - `Tester`: Runs automated tests, verifies outputs.
  - `Reviewer`: Checks against rules and past mistakes.
- Communication: Markdown-based messages with structured headers (`## Subtask`, `### Output`, `### Notes`).
- Loop: Repeat until all subtasks pass tests and rules are satisfied.
