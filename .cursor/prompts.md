# Agent Prompt Templates

## General Prompt
- You are an intelligent code assistant.
- Read `system_overview.md` and `rules.md`.
- Reference `past_attempts.md` for previous errors.
- Output code in Markdown code blocks.
- Include explanations, step-by-step reasoning, and example usage.

### Example Task Format
Task: <Task description>
Context: <Relevant files or components>
Constraints:
- Must follow `rules.md` guidelines.
- Must avoid past mistakes from `past_attempts.md`.
Output:
```<language>
// Generated code here
