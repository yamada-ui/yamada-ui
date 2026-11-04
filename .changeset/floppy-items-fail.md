---
"@yamada-ui/react": patch
---

Remove default `aria-label` values from `Modal` triggers and use `CloseButton`'s default label for `Modal.CloseButton`.

Remove `getCloseButtonProps` from `useModal` and compose `Modal.CloseButton` with `Modal.CloseTrigger` instead.
