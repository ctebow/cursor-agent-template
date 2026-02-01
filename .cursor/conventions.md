# Coding Conventions

## File Structure
- Components: PascalCase or kebab-case depending on language/framework
- Utilities: snake_case
- Test files: `<module>_test.<ext>`

## Functions
- Verb-based names (`calculateResult`, `fetchData`)
- Keep functions <25 lines unless necessary
- Include docstrings or JSDoc for all public functions

## Variables
- Descriptive names (`userCount` vs `x`)
- Use constants for configuration values

## Comments
- Explain “why” not just “what”
- Include input/output types if not enforced by language

## Testing
- Every function/class should have unit tests.
- Integration tests should cover cross-component interaction.
- Include CI/CD pipeline tests for build and deploy.
