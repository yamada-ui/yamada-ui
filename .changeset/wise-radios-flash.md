---
"@yamada-ui/react": minor
---

Add `mergeAria` option to `mergeProps` for merging space-separated WAI-ARIA list attributes (`aria-controls`, `aria-describedby`, `aria-flowto`, `aria-labelledby`, `aria-owns`). It defaults to `true`, which changes the merge behavior for these attributes from last-wins to space-separated concatenation. Pass `mergeAria: false` to opt out and restore the previous behavior.
