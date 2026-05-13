---
"@yamada-ui/react": minor
---

Add `mergeAria` option to `mergeProps` for merging space-separated WAI-ARIA list attributes (`aria-controls`, `aria-describedby`, `aria-flowto`, `aria-labelledby`, `aria-owns`). It defaults to `false` to preserve the existing last-wins behavior; pass `mergeAria: true` to opt into space-separated concatenation.
