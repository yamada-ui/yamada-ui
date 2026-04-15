# Accessibility

Accessibility conventions for yamada-ui.

## Contents

- [Role attributes](#role-attributes)
- [ARIA relationship attributes](#aria-relationship-attributes)
- [Roving TabIndex pattern](#roving-tabindex-pattern)
- [Keyboard navigation with runKeyAction](#keyboard-navigation-with-runkeyaction)
- [Event handler composition with handlerAll](#event-handler-composition-with-handlerall)
- [ariaAttr utility](#ariaattr-utility)

---

## Role attributes

Set appropriate `role` attributes on interactive components.

Incorrect:

```tsx
// ❌ Missing role
const getListProps: PropGetter = useCallback(
  (props = {}) => ({
    ...props,
    onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
  }),
  [onKeyDown],
)
```

```tsx
// ❌ Incorrect role value (using "list" where "tablist" is needed)
const getListProps: PropGetter = useCallback(
  (props = {}) => ({
    role: "list",
    ...props,
  }),
  [],
)
```

Correct:

```tsx
const getListProps: PropGetter = useCallback(
  (props = {}) => ({
    "aria-orientation": orientation,
    role: "tablist",
    ...props,
    onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
  }),
  [orientation, onKeyDown],
)
```

**Common roles**:

- `tablist`, `tab`, `tabpanel` (Tabs)
- `listbox`, `option` (Select)
- `menu`, `menuitem` (Menu)
- `dialog` (Modal/Dialog)
- `tree`, `treeitem` (Tree)

**Key points**:

- Choose the correct role matching the WAI-ARIA design pattern
- Container and item roles are used as a set (e.g. `tablist` + `tab` + `tabpanel`)

---

## ARIA relationship attributes

Link related elements with ARIA attributes.

Incorrect:

```tsx
// ❌ Missing aria-controls and aria-selected
const getRootProps: PropGetter<"button"> = useCallback(
  ({ ref, ...props } = {}) => ({
    id,
    type: "button",
    disabled,
    ...props,
  }),
  [disabled, id],
)
```

Correct:

```tsx
// Tab component example
const getRootProps: PropGetter<"button"> = useCallback(
  ({ ref, ...props } = {}) => ({
    id,
    type: "button",
    "aria-controls": tabPanelId,
    "aria-selected": selected,
    disabled,
    role: "tab",
    tabIndex: selected ? 0 : -1,
    ...rest,
    ...props,
    ref: mergeRefs(ref, register),
    onClick: handlerAll(props.onClick, rest.onClick, onClick),
    onFocus: handlerAll(props.onFocus, rest.onFocus, onFocus),
  }),
  [
    disabled,
    id,
    onClick,
    onFocus,
    orientation,
    register,
    rest,
    selected,
    tabPanelId,
  ],
)
```

**Common ARIA attributes**:

- `aria-selected` — Selection state
- `aria-controls` — ID of the controlled element
- `aria-labelledby` — ID of the label element
- `aria-expanded` — Expanded state
- `aria-disabled` — Disabled state
- `aria-checked` — Checked state (includes `"mixed"`)

---

## Roving TabIndex pattern

Implement the Roving TabIndex pattern for selectable element groups (Tabs, Menu, etc.). Only the selected element has `tabIndex: 0`, all others have `tabIndex: -1`.

Incorrect:

```tsx
// ❌ All elements have tabIndex: 0 — Tab key cycles through every element
const getRootProps: PropGetter<"button"> = useCallback(
  (props = {}) => ({
    role: "tab",
    tabIndex: 0,
    ...props,
  }),
  [],
)
```

Correct:

```tsx
const getRootProps: PropGetter<"button"> = useCallback(
  ({ ref, ...props } = {}) => ({
    id,
    type: "button",
    "aria-controls": tabPanelId,
    "aria-selected": selected,
    disabled,
    role: "tab",
    tabIndex: selected ? 0 : -1,
    ...rest,
    ...props,
    ref: mergeRefs(ref, register),
  }),
  [disabled, id, register, rest, selected, tabPanelId],
)
```

**Key points**:

- `tabIndex: selected ? 0 : -1` is the core Roving TabIndex pattern
- Used together with keyboard navigation (Arrow keys move within the group)
- Tab key skips the entire group; Arrow keys navigate within it

---

## Keyboard navigation with runKeyAction

Use the `runKeyAction` utility for keyboard navigation.

Incorrect:

```tsx
// ❌ Handling keys directly with switch statement
const onKeyDown = useCallback(
  (ev: KeyboardEvent<HTMLDivElement>) => {
    switch (ev.key) {
      case "ArrowRight":
        ev.preventDefault()
        onFocusNextTab()
        break
      case "ArrowLeft":
        ev.preventDefault()
        onFocusPrevTab()
        break
      case "Home":
        ev.preventDefault()
        onFocusFirstTab()
        break
      case "End":
        ev.preventDefault()
        onFocusLastTab()
        break
    }
  },
  [onFocusNextTab, onFocusPrevTab, onFocusLastTab, onFocusFirstTab],
)
```

Correct:

```tsx
import { runKeyAction } from "../../utils"

const onKeyDown = useCallback(
  (ev: KeyboardEvent<HTMLDivElement>) => {
    runKeyAction(ev, {
      ArrowDown: !horizontal ? onFocusNextTab : undefined,
      ArrowLeft: horizontal ? onFocusPrevTab : undefined,
      ArrowRight: horizontal ? onFocusNextTab : undefined,
      ArrowUp: !horizontal ? onFocusPrevTab : undefined,
      End: onFocusLastTab,
      Home: onFocusFirstTab,
    })
  },
  [horizontal, onFocusNextTab, onFocusPrevTab, onFocusLastTab, onFocusFirstTab],
)
```

**Key points**:

- `runKeyAction` calls `ev.preventDefault()` by default (disable with `{ preventDefault: false }`)
- Pass `undefined` to ignore a key
- Common pattern: switch Arrow key mapping based on orientation (horizontal vs vertical)

---

## Event handler composition with handlerAll

Use `handlerAll` to compose event handlers so user-provided handlers are not overwritten.

Incorrect:

```tsx
// ❌ Overwriting user's onKeyDown
const getListProps: PropGetter = useCallback(
  (props = {}) => ({
    role: "tablist",
    ...props,
    onKeyDown,
  }),
  [onKeyDown],
)
```

```tsx
// ❌ Internal handlers overwritten by spread
const getRootProps: PropGetter<"button"> = useCallback(
  (props = {}) => ({
    role: "tab",
    onClick,
    onFocus,
    ...props,
  }),
  [onClick, onFocus],
)
```

Correct:

```tsx
const getListProps: PropGetter = useCallback(
  (props = {}) => ({
    role: "tablist",
    ...props,
    onKeyDown: handlerAll(props.onKeyDown, onKeyDown),
  }),
  [onKeyDown],
)
```

```tsx
const getRootProps: PropGetter<"button"> = useCallback(
  ({ ref, ...props } = {}) => ({
    role: "tab",
    ...rest,
    ...props,
    ref: mergeRefs(ref, register),
    onClick: handlerAll(props.onClick, rest.onClick, onClick),
    onFocus: handlerAll(props.onFocus, rest.onFocus, onFocus),
  }),
  [onClick, onFocus, register, rest],
)
```

**Key points**:

- Order: `handlerAll(props.handler, internalHandler)`
- If a preceding handler calls `ev.preventDefault()`, subsequent handlers are skipped
- Use for all events: `onClick`, `onFocus`, `onBlur`, `onKeyDown`, `onChange`, etc.
- 3-argument pattern when including external props: `handlerAll(props.handler, rest.handler, internalHandler)`

---

## ariaAttr utility

Use the `ariaAttr()` utility for boolean ARIA attributes.

> For `dataAttr()`, see [styling.md — dataAttr()](./styling.md#dataattr-for-data-attributes).

Incorrect:

```tsx
// ❌ Manual conditional
<styled.label
  aria-disabled={!interactive ? "true" : undefined}
>
```

Correct:

```tsx
import { ariaAttr } from "../../utils"

<styled.label
  aria-disabled={ariaAttr(!interactive)}
>
```

**Key points**:

- `ariaAttr(true)` → `true` (boolean), `ariaAttr(false)` → `undefined`. React serializes the `true` boolean to the string `"true"` in the DOM.
- Use for `aria-disabled`, `aria-required`, `aria-readonly`, etc.
