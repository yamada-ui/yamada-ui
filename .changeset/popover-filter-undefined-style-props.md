---
"@yamada-ui/react": patch
---

`usePopoverStyleProps` now drops `null` and `undefined` entries so consumer-provided defaults survive when an explicit `undefined` prop is passed in.
