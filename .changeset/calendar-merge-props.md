---
"@yamada-ui/react": patch
---

Use `mergeProps` in `Calendar` sub-components so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers are merged with context/getter props instead of being silently overwritten.
