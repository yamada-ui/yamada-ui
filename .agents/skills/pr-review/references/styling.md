# Styling

Styling conventions for yamada-ui.

## Contents

- [defineComponentStyle / defineComponentSlotStyle](#definecomponentstyle--definecomponentslotstyle)
- [Pseudo selectors with \_ prefix](#pseudo-selectors-with-_-prefix)
- [styled.\* for HTML elements](#styled-for-html-elements)
- [dataAttr() for data attributes](#dataattr-for-data-attributes)

---

## defineComponentStyle / defineComponentSlotStyle

Use `defineComponentStyle` for simple components, `defineComponentSlotStyle` for composite components.

Incorrect:

```ts
// ❌ Defining styles with a plain object
export const buttonStyle = {
  base: { display: "inline-flex" },
  variants: { solid: { bg: "blue" } },
}
```

Correct:

```ts
// Simple component
import { defineComponentStyle } from "../../core"

export const buttonStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    appearance: "none",
    cursor: "pointer",
    display: "inline-flex",
    _readOnly: { layerStyle: "readOnly" },
    _disabled: { layerStyle: "disabled" },
  },
  props: {
    fullRounded: {
      true: { rounded: "full" },
    },
  },
  variants: {
    solid: {
      layerStyle: "solid",
      _hover: { layerStyle: "solid.hover" },
    },
  },
  sizes: {
    md: { fontSize: "md", h: "10", px: "3" },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
})

export type ButtonStyle = typeof buttonStyle
```

```ts
// Composite component
import { defineComponentSlotStyle } from "../../core"

export const accordionStyle = defineComponentSlotStyle({
  base: {
    root: {
      /* root styles */
    },
    button: {
      /* button styles */
    },
    icon: {
      _expanded: { transform: "rotate(180deg)" },
    },
    panel: { pb: "3" },
  },
  variants: {
    /* ... */
  },
  defaultProps: { variant: "plain" },
})

export type AccordionStyle = typeof accordionStyle
```

**Key points**:

- Export the type using `typeof` (`export type ButtonStyle = typeof buttonStyle`)
- Specify default `size` and `variant` in `defaultProps`
- Use the `props` field to define styles for custom boolean props

---

## Pseudo selectors with \_ prefix

Use the `_` prefix for pseudo selectors.

Incorrect:

```ts
// ❌ Using raw CSS pseudo selectors
export const buttonStyle = defineComponentStyle({
  base: {
    "&:hover": { bg: "blue.600" },
    "&:disabled": { opacity: 0.5 },
    "&[data-read-only]": { cursor: "default" },
  },
})
```

Correct:

```ts
export const buttonStyle = defineComponentStyle({
  base: {
    _hover: { layerStyle: "solid.hover" },
    _disabled: { layerStyle: "disabled" },
    _readOnly: { layerStyle: "readOnly" },
  },
})
```

**Common pseudo selectors**:

- `_hover`, `_active`, `_focus`, `_focusVisible`
- `_disabled`, `_readOnly`
- `_expanded`, `_selected`
- `_checked`, `_indeterminate`

---

## styled.\* for HTML elements

Use `styled.*` for HTML elements. Do not use raw HTML tags directly.

Incorrect:

```tsx
// ❌ Using raw HTML elements
return (
  <div className={className} {...rest}>
    <button onClick={onClick}>{children}</button>
    <span>{label}</span>
  </div>
)
```

Correct:

```tsx
import { styled } from "../../core"

return (
  <styled.div {...rest}>
    <styled.button onClick={onClick}>{children}</styled.button>
    <styled.span>{label}</styled.span>
  </styled.div>
)
```

**Key points**:

- `styled.button`, `styled.div`, `styled.span`, `styled.h3`, etc.
- `styled.*` integrates with yamada-ui's style system

---

## dataAttr() for data attributes

Use the `dataAttr()` utility for data attribute values.

Incorrect:

```tsx
// ❌ Manual ternary operators
<styled.button
  data-active={active ? "" : undefined}
  data-loading={loading ? "" : undefined}
>
```

Correct:

```tsx
import { dataAttr } from "../../utils"

<styled.button
  data-active={dataAttr(active)}
  data-loading={dataAttr(loading)}
>
```

**Key points**:

- `dataAttr(true)` → `""` (empty string = attribute present)
- `dataAttr(false)` → `undefined` (attribute absent)
