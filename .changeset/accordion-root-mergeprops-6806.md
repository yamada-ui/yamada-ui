---
"@yamada-ui/react": patch
---

Merge `getRootProps` in `useAccordion` with `mergeProps` so getter props win scalar conflicts while `className`, `style`, `ref`, and event handlers still combine with hook defaults.
