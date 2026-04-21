---
"@yamada-ui/react": patch
---

Fixed a bug in the `tone` function used by `color` where values less than `50` or greater than `950` did not default to `500` as expected.
