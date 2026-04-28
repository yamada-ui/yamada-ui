---
"@yamada-ui/react": patch
---

Fix `dropzone` `getRootProps` merging so consumer-supplied `ref`, `className`, `style`, and event handlers compose with the hook's own values instead of being overwritten.
