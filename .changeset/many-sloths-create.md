---
"@yamada-ui/react": patch
---

Remove the default `aria-label` from `Sidebar.Trigger` so its visible text provides the accessible name, while preserving the label on `Sidebar.Handle`.

Add `getHandleProps` to `useSidebar` to manage handle-specific attributes separately from `getTriggerProps`.
