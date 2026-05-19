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

To disable the rule entirely for a project, set it to `"off"` in your ESLint config:

```ts
{
  rules: {
    "@yamada-ui/eslint-plugin/props-shorthand": "off",
  },
}
```

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

The rule reports duplicate style props but **does not auto-fix** them (silently dropping one would change behavior). Two patterns are detected, regardless of the `preferred` setting:

- Shorthand and longhand of the same prop:

  ```tsx
  <Box m={1} margin={2} />
  // Error: Both 'm' and 'margin' are specified for the same style property 'margin'; keep only one.
  ```

- Multiple shorthands that map to the same longhand (e.g., `bgGradient` and `bgImage` both write `backgroundImage`; `marginEnd` and `me` both write `marginInlineEnd`):

  ```tsx
  <Box bgGradient="x" bgImage="y" />
  // Error: Both 'bgGradient' and 'bgImage' are specified for the same style property 'backgroundImage'; keep only one.
  ```

## Scope

The rule only runs on components imported from `@yamada-ui/react`:

- Named imports: `<Box />`, `<HStack />`, aliased `import { Box as B } from "@yamada-ui/react"`
- The `ui` factory: `<ui.div />`, including `import * as YUI from "@yamada-ui/react"; <YUI.div />` and `import { ui as u } from "@yamada-ui/react"; <u.div />`

Components imported from other packages, re-exports through other barrels, and styled wrappers (e.g., `styled(Box)`) are not tracked.

## Known Limitations

- **Shorthand priority** — when multiple shorthand props map to the same longhand, the rule picks the first one encountered in `@yamada-ui/react/core`'s `shorthandStyles` object.
- **Runtime dependency on `@yamada-ui/react/core`** — the shorthand map is derived at rule-load time from `@yamada-ui/react/core`, so the plugin requires `@yamada-ui/react` as a peer.
- **Named-import over-matching** — any named identifier imported from `@yamada-ui/react` other than `ui` is treated as a component. Non-component utilities (hooks, helpers) used as JSX elements are not valid React anyway, so the practical impact is nil.
