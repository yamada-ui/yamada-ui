---
"@yamada-ui/theme": patch
---

Fixed a bug where `Menu` did not have the same `z-index` as `Popover`. `Menu` is also affected because it is also used in the `Select` and `Autocomplete` styles.
