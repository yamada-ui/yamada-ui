---
"@yamada-ui/react": patch
---

Fix Emotion SSR unsafe-selector warning emitted by menu separators by replacing `:first-child` with an equivalent `:not()` sibling selector.
