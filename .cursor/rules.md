# Project Rulebook

## General Behavior
- Always read `system_overview.md` before starting a task.
- Reference `past_attempts.md` before attempting new solutions.
- Never delete or overwrite files unless explicitly instructed.
- Confirm any destructive actions (e.g., deleting branches, clearing caches).

## Coding Standards
- Follow language-specific style guides (e.g., PEP8 for Python, Airbnb for JS).
- Use descriptive and consistent naming conventions.
- Include comments explaining non-obvious logic.
- Avoid hardcoding configuration values; use environment variables or config files.

## CI/CD Guidelines
- Always ensure code passes unit tests before pushing.
- Do not commit broken builds.
- Follow branch naming conventions (e.g., `feature/`, `bugfix/`, `hotfix/`).

## Error Handling
- Anticipate errors and log them to `past_attempts.md`.
- Handle exceptions gracefully; avoid silent failures.
- When encountering an unknown error, document the context in `past_attempts.md`.

## Output Rules
- Always produce code in Markdown code blocks.
- Include explanations and examples of usage.
- Provide minimal reproducible test cases when relevant.
