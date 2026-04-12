---
"@yamada-ui/react": patch
---

Use `mergeProps` in `PasswordInput` and `StrengthMeter` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.
