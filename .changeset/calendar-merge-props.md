---
"@yamada-ui/react": patch
---

Use `mergeProps` in `Calendar` sub-components (`Navigation`, `Control`, `PrevButton`, `NextButton`, `Month`) so that prop bags passed through `Calendar.Root` (`navigationProps`, `controlProps`, `buttonProps`, `prevButtonProps`, `nextButtonProps`, `monthProps`) are merged with props on the child component instead of colliding on `className`, `style`, and event handlers.
