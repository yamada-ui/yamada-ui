# `mergeProps` over-application

**Example**: [PR #6580](https://github.com/yamada-ui/yamada-ui/pull/6580) — "use mergeProps for Radio root"

**Diff**:

```tsx
// Before
<styled.label {...getRootProps({ ...varProps, ...rootProps })}>
// After
<styled.label {...mergeProps(getRootProps(varProps), rootProps)()}>
```

**What was missed**: `varProps` is a plain style-variant object — no `ref`, `className`, `style`, or event handlers. `mergeProps` exists to merge exactly those fields; here there is nothing to merge. `{ ...varProps, ...rootProps }` is equivalent and simpler. The wrapper is dead weight.

**Rule of thumb**: For each call site a utility is applied to, ask:

1. Does this site actually have the fields the utility exists to handle?
2. If no, the change is noise. Request changes on that specific site.

"For consistency" is not a justification if the consistency produces dead code. Necessity is site-specific, not PR-wide — check each site individually.

**Counter-example — do not reject wholesale**: [PR #6581](https://github.com/yamada-ui/yamada-ui/pull/6581) — "fix(calendar): merge user props with context props via mergeProps" was rejected by both bots as this anti-pattern across every site. In reality, only the `Calendar` `Select` sub-components (`contentProps`, `rootProps`, `resetFieldProps`) were over-application; the other sites were legitimate:

```tsx
// Legitimate — two user-supplied prop bags that can collide
...getNavigationProps(mergeProps(navigationProps, rest)()),
```

Here `navigationProps` is the prop bag the user passes through `Calendar.Root`, and `rest` is the user's props on `Calendar.Navigation`. Both sides are user-supplied, so `className` / `style` / `onClick` can collide and must be merged. The getter's internal `handlerAll` / `mergeRefs` merges user↔internal, not user↔user, so it does not cover this case.

When applying this anti-pattern, distinguish:

- **user↔internal merge** (user prop + getter/internal output): the getter already handles `ref`/events → `mergeProps` is redundant → this anti-pattern applies.
- **user↔user merge** (two user-supplied prop bags from different API surfaces): `mergeProps` is required → this anti-pattern does **not** apply.

A single PR can contain both shapes. Reject the specific over-application sites; do not reject the whole PR.
