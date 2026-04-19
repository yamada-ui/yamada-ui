# `props-shorthand`

Enforce consistent use of shorthand or longhand style props on Yamada UI components.

## Rule Details

Yamada UI components accept both shorthand (`m`, `p`, `bg`, `h`, `w`, `flexDir`, …) and longhand (`margin`, `padding`, `background`, `height`, `width`, `flexDirection`, …) style props. This rule lets a project pick one style and apply it consistently, with auto-fix.

## Options

```ts
type Options = {
  preferred?: "shorthand" | "longhand"
}
```

### `preferred`

- Type: `"shorthand" | "longhand"`
- Default: `"shorthand"`

Selects which form the rule prefers. The other form is reported and auto-fixed to the preferred form.

## Examples

### `preferred: "shorthand"` (default)

Incorrect:

```tsx
<Box margin={4} />
<HStack flexDirection="row" />
<ui.div padding="2" />
```

Correct:

```tsx
<Box m={4} />
<HStack flexDir="row" />
<ui.div p="2" />
```

### `preferred: "longhand"`

Incorrect:

```tsx
<Box m={4} />
```

Correct:

```tsx
<Box margin={4} />
```

### Duplicate props

When both shorthand and longhand are specified on the same element, the rule reports an error but **does not auto-fix** (silently dropping one would change behavior):

```tsx
<Box m={1} margin={2} />
// Error: Both 'm' and 'margin' are specified; keep only the preferred one.
```

## Scope

The rule only runs on components imported from `@yamada-ui/react`:

- Named imports: `<Box />`, `<HStack />`, aliased `import { Box as B } from "@yamada-ui/react"`
- The `ui` factory: `<ui.div />`, including `import * as YUI from "@yamada-ui/react"; <YUI.div />` and `import { ui as u } from "@yamada-ui/react"; <u.div />`

Components imported from other packages, re-exports through other barrels, and styled wrappers (e.g., `styled(Box)`) are not tracked.

## Known Limitations

- **Shorthand priority** — when multiple shorthand props map to the same longhand, the rule provisionally picks the first one encountered in `@yamada-ui/react/core`'s `shorthandStyles` object. This order is stable today but is not a contract. A follow-up change will replace this with an explicit priority list.
- **Runtime dependency on `@yamada-ui/react/core`** — the shorthand map is derived at rule-load time from `@yamada-ui/react/core`. A follow-up change will materialize it into static data so the plugin does not need `@yamada-ui/react` as a peer.
- **Named-import over-matching** — any named identifier imported from `@yamada-ui/react` other than `ui` is treated as a component. Non-component utilities (hooks, helpers) used as JSX elements are not valid React anyway, so the practical impact is nil.
