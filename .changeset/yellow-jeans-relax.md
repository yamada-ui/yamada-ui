---
"@yamada-ui/react": patch
---

Fix List icons disappearing when passed as RSC lazy-wrapped elements.

Align icon prop precedence with other components so explicitly provided child props override `iconProps` and the default role.
