---
"@yamada-ui/cli": patch
---

Fixed the `getSectionPath` helper so a leading `/` no longer produces a double-slash (`.//...`) path. Paths now normalize consistently whether or not the user supplies a leading `/`.
