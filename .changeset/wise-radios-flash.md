---
"@yamada-ui/react": minor
---

Add `mergeAria` option to `mergeProps` for merging space-separated WAI-ARIA list attributes (`aria-controls`, `aria-describedby`, `aria-flowto`, `aria-labelledby`, `aria-owns`). It defaults to `true`, so multiple values for these attributes are concatenated by default; pass `mergeAria: false` to keep the previous last-wins behavior.
