---
"@yamada-ui/react": minor
---

Change `mergeProps`'s `mergeAria` option to default to `true` so space-separated WAI-ARIA list attributes (`aria-controls`, `aria-describedby`, `aria-flowto`, `aria-labelledby`, `aria-owns`) are concatenated by default; pass `mergeAria: false` to keep the previous last-wins behavior.
