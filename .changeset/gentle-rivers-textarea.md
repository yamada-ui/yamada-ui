---
"@yamada-ui/react": patch
---

Use `mergeProps` in `Textarea` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context props instead of being silently overwritten.
