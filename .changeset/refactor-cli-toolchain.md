---
"@yamada-ui/cli": patch
---

Introduce a toolchain abstraction layer for formatter and linter so that future tools (Biome, oxfmt, oxlint) can be added by dropping in a new adapter without touching call sites.
