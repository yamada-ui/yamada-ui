---
"@yamada-ui/utils": patch
---

Modified the `cx` function to return `undefined` when the return value would otherwise be an empty string. This is necessary to remove unnecessary attributes from elements.
