---
"@yamada-ui/popover": patch
---

Fixed a bug where the `Popover` would close when the pointer moved outside, even when `trigger` was `"hover"` and `closeOnBlur` was `false`.
