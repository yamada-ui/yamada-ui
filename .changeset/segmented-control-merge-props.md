---
"@yamada-ui/react": patch
---

Use `mergeProps` in segmented control `getRootProps` and item `getLabelProps`, applying `rest` before caller `props`.
For `useSegmentedControlItem`, this means `getLabelProps(argumentProps)` now takes precedence over hook-level `rest` on overlapping keys while still composing `className`, `style`, event handlers, and `ref`.
