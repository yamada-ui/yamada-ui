---
"@yamada-ui/react": patch
---

Merge consumer-supplied `ref`, `style`, and event handlers in `getButtonProps` and `getInputProps` instead of dropping hook-level values.
Keep field and input blur/focus handler order while preserving merged PropGetter behavior in `useNumberInput`.
