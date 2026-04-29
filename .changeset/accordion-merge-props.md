---
"@yamada-ui/react": patch
---

Fix `useAccordion` `getRootProps` and `useAccordionItem` `getItemProps` to use `mergeProps` so consumer-supplied `ref`, `className`, `style`, and event handlers merge correctly with the hook's own values instead of being overwritten.
