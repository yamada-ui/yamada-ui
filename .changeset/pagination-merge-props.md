---
"@yamada-ui/react": patch
---

Use `mergeProps` in `Pagination` so that user-provided `className`, `style`, `css`, `ref`, and `on*` event handlers passed to `usePagination` and `getRootProps` are merged instead of being overwritten.
