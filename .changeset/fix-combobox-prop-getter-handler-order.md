---
"@yamada-ui/react": patch
---

Fix `useCombobox` `getTriggerProps` and `getItemProps` so that prop getter callbacks fire before hook-level handlers, restoring the order broken by the switch to `mergeProps`.
