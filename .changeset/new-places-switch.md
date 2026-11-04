---
"@yamada-ui/react": patch
---

Remove default `aria-label` values from `Drawer` triggers and use `CloseButton`'s default label for `Drawer.CloseButton`.

Remove `getCloseButtonProps` from `useDrawer` and compose `Drawer.CloseButton` with `Drawer.CloseTrigger` instead.
