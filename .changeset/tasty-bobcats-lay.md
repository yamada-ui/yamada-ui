---
"@yamada-ui/cli": minor
---

Added `--dry-run` / `-n` option to all CLI commands (`init`, `add`, `update`, `diff`, `theme`, `tokens`) to preview changes without writing files or installing dependencies. `--dry-run` skips confirmation prompts (same as `--yes` for interactive steps). In `update`, dry-run lists target paths and dependency changes only; merge and conflict detection (`diff3`) are not run.
