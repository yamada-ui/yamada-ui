---
"@yamada-ui/react": patch
---

Fix `getRootProps` in `useCartesianChart` and `usePolarChart` to merge user props with `mergeProps` so consumer `className`, `style`, `ref`, and other fields are not overwritten by hook defaults.
