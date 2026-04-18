---
"@yamada-ui/react": patch
---

Fix `accordion` `PropGetter` callbacks to use `mergeProps` so consumer-supplied `ref`, `className`, `style`, and event handlers merge correctly with the hook's own values instead of being overwritten.
