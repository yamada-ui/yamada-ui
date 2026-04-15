# Component Patterns

Component creation patterns for yamada-ui.

## Contents

- [Simple Component: createComponent + withContext](#simple-component-createcomponent--withcontext)
- [Composite Component: createSlotComponent + withProvider](#composite-component-createslotcomponent--withprovider)
- [component() helper](#component-helper)
- [withContext without render function](#withcontext-without-render-function)
- ["use client" directive](#use-client-directive)
- [ComponentContext with useMemo](#componentcontext-with-usememo)
- [PropsContext export](#propscontext-export)

---

## Simple Component: createComponent + withContext

Use `createComponent` and `withContext` for single-element components.

Incorrect:

```tsx
import { forwardRef } from "react"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <button ref={ref} {...props} />
  },
)
```

Correct:

```tsx
import { createComponent, styled } from "../../core"
import { buttonStyle } from "./button.style"

const {
  component,
  ComponentContext,
  PropsContext: ButtonPropsContext,
  useComponentContext,
  usePropsContext: useButtonPropsContext,
  withContext,
} = createComponent<ButtonProps, ButtonStyle, ComponentContext>(
  "button",
  buttonStyle,
)

export const Button = withContext<"button", ButtonProps>(
  ({ ref, as, active, children, disabled, loading, ...rest }) => {
    return (
      <styled.button ref={ref} data-active={dataAttr(active)} {...rest}>
        {children}
      </styled.button>
    )
  },
)()
```

**Key points**:

- First argument of `createComponent` is the component name (kebab-case)
- Second argument is the style object
- Generics: `<Props, Style, ComponentContext?>` (max 3). The 3rd `ComponentContext` is only needed when sharing data between internal subcomponents (e.g. Button passes `endIcon`, `loadingIcon` to children). Omit if no shared data is needed (e.g. `Separator`)
- Components returned by `withContext` must be invoked with `()` at the end
- The destructured values above are the **commonly used** return values — not exhaustive. `createComponent` also returns `useComponentProps`, and `createSlotComponent` additionally returns `StyleContext`, `useClassNames`, `useStyleContext`, `useRootComponentProps`, and `useSlotComponentProps`. Destructure only what the component needs.

---

## Composite Component: createSlotComponent + withProvider

Use `createSlotComponent` for components with multiple subcomponents and per-slot styling. Root uses `withProvider`, children use `withContext`.

Incorrect:

```tsx
import { createComponent } from "../../core"

// ❌ Using createComponent for a composite component
const { withContext } = createComponent("accordion", accordionStyle)
```

Correct:

```tsx
import { createSlotComponent, styled } from "../../core"
import { accordionStyle } from "./accordion.style"

const {
  ComponentContext,
  PropsContext: AccordionPropsContext,
  useComponentContext,
  usePropsContext: useAccordionPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<AccordionRootProps, AccordionStyle, ComponentContext>(
  "accordion",
  accordionStyle,
)

// Root component: withProvider + slot name "root"
export const AccordionRoot = withProvider<"div", AccordionRootProps>(
  ({ children, ...props }) => {
    return <styled.div {...getRootProps()}>{children}</styled.div>
  },
  "root",
)()

// Child components: withContext + slot name
export const AccordionItem = withContext<"div", AccordionItemProps>(
  ({ children, ...rest }) => {
    return <styled.div {...getItemProps()}>{children}</styled.div>
  },
  "item",
)()

export const AccordionButton = withContext<"button", AccordionButtonProps>(
  ({ children, ...rest }) => {
    return <styled.button {...getButtonProps(rest)}>{children}</styled.button>
  },
  "button",
)()
```

**Key points**:

- Use `createSlotComponent` (not `createComponent`)
- Only the root component uses `withProvider`
- Child components use `withContext` with the slot name as the second argument
- Styles are defined with `defineComponentSlotStyle` (not `defineComponentStyle`)

---

## component() helper

`component()` is for components that **do not need style slot integration**.

### Case 1: Internal subcomponents

Internal subcomponents without style slots. Specify `name` and `className`.

```tsx
const ButtonContent = component<"fragment", PropsWithChildren>(
  ({ children }) => {
    const { endIcon, startIcon, iconProps } = useComponentContext()
    return (
      <>
        {startIcon ? (
          <ButtonStartIcon {...iconProps}>{startIcon}</ButtonStartIcon>
        ) : null}
        {children}
        {endIcon ? (
          <ButtonEndIcon {...iconProps}>{endIcon}</ButtonEndIcon>
        ) : null}
      </>
    )
  },
  { name: "ButtonContent", className: getClassName(bem("button", "content")) },
)()

const ButtonStartIcon = component<"svg", ButtonIconProps>(ButtonIcon, {
  name: "ButtonStartIcon",
  className: getClassName(bem("button", "icon", "start")),
})()
```

### Case 2: Exported group components

Reuse another component's `component()` to build group logic.

```tsx
import { component, TogglePropsContext, useRootComponentProps } from "./toggle"

export const ToggleGroupRoot = component<"div", ToggleGroupRootProps>(
  (props: ToggleGroupRootProps) => {
    const [, { colorScheme, size, variant, attached, ...rest }] =
      useRootComponentProps(props, "group", {
        transferProps: ["size", "variant", "colorScheme"],
      })
    // ...
  },
)()
```

**When to use which**:

| Pattern                        | Use case                                                                                           |
| ------------------------------ | -------------------------------------------------------------------------------------------------- |
| `withContext` / `withProvider` | Integrates with style slots (`defineComponentStyle`/`defineComponentSlotStyle` styles are applied) |
| `component()`                  | No style slot integration needed (has its own style logic or reuses parent styles)                 |

---

## withContext without render function

Simple wrapper components can call `withContext` without a render function — just pass the HTML tag name.

Incorrect:

```tsx
// ❌ Unnecessary render function
export const Separator = withContext<"hr", SeparatorProps>(
  ({ ref, ...rest }) => {
    return <styled.hr ref={ref} {...rest} />
  },
)()
```

Correct:

```tsx
// No render function — tag name only
export const Separator = withContext("hr")()
```

**Key points**:

- Omit the render function when there's no internal logic, only style and prop passthrough
- Example: `Separator` (`separator.tsx`)

---

## "use client" directive

Place `"use client"` directive at the top of component files (`.tsx`) and hook files (`use-*.ts`).

Incorrect:

```tsx
// ❌ Missing "use client"
import type { HTMLStyledProps } from "../../core"
import { createComponent, styled } from "../../core"
```

Correct:

```tsx
"use client"

import type { HTMLStyledProps } from "../../core"
import { createComponent, styled } from "../../core"
```

**Key points**:

- Not needed in `.style.ts`, `index.ts`, `namespace.ts`
- Required in components (`.tsx`) and hooks (`use-*.ts`)

---

## ComponentContext with useMemo

Memoize values passed to `ComponentContext` with `useMemo`.

Incorrect:

```tsx
// ❌ Creating a new object every render without useMemo
return (
  <ComponentContext value={{ endIcon, startIcon, iconProps }}>
    {children}
  </ComponentContext>
)
```

Correct:

```tsx
const context = useMemo(
  () => ({ endIcon, loadingIcon, loadingMessage, startIcon, iconProps }),
  [loadingIcon, loadingMessage, startIcon, endIcon, iconProps],
)

return <ComponentContext value={context}>{children}</ComponentContext>
```

---

## PropsContext export

Rename `PropsContext` and `usePropsContext` before exporting.

Incorrect:

```tsx
// ❌ Exporting without renaming
export { PropsContext, usePropsContext }
```

Correct:

```tsx
const {
  PropsContext: ButtonPropsContext,
  usePropsContext: useButtonPropsContext,
} = createComponent<ButtonProps, ButtonStyle, ComponentContext>(
  "button",
  buttonStyle,
)

export { ButtonPropsContext, useButtonPropsContext }
```

**Key points**:

- `PropsContext` → `{ComponentName}PropsContext`
- `usePropsContext` → `use{ComponentName}PropsContext`
- `strict: false` for `PropsContext` is set automatically inside `createComponent`/`createSlotComponent`
