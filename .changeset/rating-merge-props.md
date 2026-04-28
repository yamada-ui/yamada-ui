---
"@yamada-ui/react": patch
---

Merge root and label props in `useRating` and `useRatingItem` so consumer `className`, `style`, refs, and event handlers are composed with internal props instead of being overwritten.
