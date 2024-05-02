---
"@yamada-ui/calendar": patch
---

Fixed to set `display: none` on button if a custom component is not displayed element (e.g. null, undefined, boolean) in order to address a11y violations.
