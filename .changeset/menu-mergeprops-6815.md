---
"@yamada-ui/react": patch
---

Fix `Menu.Group` and `Menu.Item` so user-provided `className`, `style`, `css`, `ref`, and `on*` handlers are merged with hook props instead of being silently overwritten.
