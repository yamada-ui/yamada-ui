# Utility over-application

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
