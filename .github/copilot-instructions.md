# Copilot Workflow Rules

## Git Commit Policy

Keep this policy consistent with AGENTS.md.

- Never use `git commit --no-verify`.
- Never bypass local hooks (`pre-commit`, `commit-msg`) during commits.
- If hooks fail, fix the underlying issues and commit again without bypass options.
- If a bypass seems absolutely necessary, stop and ask the user for explicit approval before proceeding.
