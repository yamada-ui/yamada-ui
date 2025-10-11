---
"@yamada-ui/cli": patch
---

fix: add shebang to CLI binary via tsdown banner configuration

Add `#!/usr/bin/env node` shebang to the CLI binary by configuring tsdown's banner option.
This fixes execution issues on Linux where the CLI failed with "import: not found" errors
because the shell tried to execute the JavaScript file as a shell script.

Fixes #5286
