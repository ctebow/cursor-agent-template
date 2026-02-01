# Task Execution Workflows

## General Task Workflow
1. Read `system_overview.md`.
2. Check `rules.md` for applicable guidelines.
3. Reference `past_attempts.md` for known mistakes.
4. Plan solution using pseudo-code or high-level steps.
5. Execute solution in small, testable increments.
6. Run automated tests before committing.
7. Log any failures or lessons in `past_attempts.md`.
8. Submit PR / commit only if tests pass and guidelines are met.

## CI/CD Workflow
1. Commit changes to feature branch.
2. Run automated build and tests.
3. If build fails, document failure in `past_attempts.md`.
4. Merge only after all tests pass and code review is complete.
5. Deployment steps: staging → manual review → production.
