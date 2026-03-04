---
"@yamada-ui/react": patch
---

Fixed `onBlur` incorrectly setting `focused` to `false` when clicking on the dropdown content in `Autocomplete` with `multiple` mode, which caused the separator to disappear during mousedown.
