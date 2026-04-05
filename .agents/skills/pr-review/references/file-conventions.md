# File Conventions

File naming, structure, and export conventions for yamada-ui.

## Contents

- [File naming (kebab-case)](#file-naming-kebab-case)
- [Component directory structure](#component-directory-structure)
- [Barrel exports with separated export type](#barrel-exports-with-separated-export-type)
- [namespace.ts rename exports](#namespacets-rename-exports)
- [JSDoc conventions](#jsdoc-conventions)

---

## File naming (kebab-case)

All file names use kebab-case.

Incorrect:

```
Button.tsx
ButtonGroup.tsx
useButton.ts
Button.style.ts
Button.test.tsx
```

Correct:

```
button.tsx
button-group.tsx
use-button.ts
button.style.ts
button.test.tsx
```

---

## Component directory structure

Component directories follow this structure.

```
packages/react/src/components/accordion/
├── accordion.tsx
├── accordion.style.ts
├── accordion.test.tsx
├── index.ts
├── namespace.ts
├── accordion.stories.tsx
└── use-accordion.ts
```

---

## Barrel exports with separated export type

In `index.ts`, separate `export` and `export type`.

Incorrect:

```ts
// ❌ export type not separated
export { Button, type ButtonProps, ButtonPropsContext } from "./button"
```

Correct:

```ts
export * from "./button.style"
export { Button, ButtonPropsContext, useButtonPropsContext } from "./button"
export type { ButtonProps } from "./button"
export { ButtonGroupRoot } from "./button-group"
export type { ButtonGroupRootProps } from "./button-group"
export * as ButtonGroup from "./namespace"
```

**Key points**:

- Styles use `export *` for re-export
- Separate value exports and type exports
- Namespace uses `export * as {Name} from "./namespace"` (only when `namespace.ts` exists)

---

## namespace.ts rename exports

In `namespace.ts`, export with aliases that strip the component name prefix.

### Composite component example (Accordion)

```ts
// accordion/namespace.ts
export {
  AccordionButton as Button,
  AccordionItem as Item,
  AccordionPanel as Panel,
  AccordionPropsContext as PropsContext,
  AccordionRoot as Root,
  useAccordionPropsContext as usePropsContext,
} from "./accordion"
export type {
  AccordionButtonProps as ButtonProps,
  AccordionItemProps as ItemProps,
  AccordionPanelProps as PanelProps,
  AccordionRootProps as RootProps,
} from "./accordion"
```

**Rename rules**:

- `{Component}Root` → `Root`
- `{Component}Item` → `Item`
- `{Component}Button` → `Button`
- `{Component}PropsContext` → `PropsContext`
- `use{Component}PropsContext` → `usePropsContext`
- Types follow the same pattern

---

## JSDoc conventions

Add JSDoc to components and Props.

Incorrect:

```tsx
// ❌ Missing JSDoc
export const Button = withContext<"button", ButtonProps>(...)()

export interface ButtonProps {
  loading?: boolean
  disabled?: boolean
}
```

Correct:

```tsx
/**
 * `Button` is an interactive component that allows users to perform actions
 * such as submitting forms and toggling modals.
 *
 * @see https://yamada-ui.com/docs/components/button
 */
export const Button = withContext<"button", ButtonProps>(...)()

export interface ButtonProps extends HTMLStyledProps<"button">, ThemeProps<ButtonStyle> {
  /**
   * If `true`, the button is disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * The placement of the loading indicator. Accepts `start` or `end`.
   *
   * @default 'start'
   */
  loadingPlacement?: "end" | "start"
}
```

**Key points**:

- Component: English description + `@see` with Yamada UI docs URL
- Props: English description + `@default` for default values
- Boolean props use `@default false`
- JSDoc is also used by `pnpm gen:props` for documentation generation
