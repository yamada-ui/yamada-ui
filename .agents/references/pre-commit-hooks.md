# Pre-commit Hooks (lefthook)

The following hooks run automatically on commit.

| Hook       | Description                                                                       |
| ---------- | --------------------------------------------------------------------------------- |
| ESLint     | Runs with `--fix --max-warnings=0` and `stage_fixed: true` to auto-restage fixes. |
| Prettier   | Runs with `--write` and `stage_fixed: true` to auto-restage fixes.                |
| commitlint | Validates Conventional Commits format.                                            |
