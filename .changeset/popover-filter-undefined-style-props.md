---
"@yamada-ui/react": patch
---

`usePopoverStyleProps` now drops undefined entries so consumer-provided defaults survive when an explicit `undefined` prop is passed in.
