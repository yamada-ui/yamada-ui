# Anti-pattern misapplication

**Example**: [PR #6581](https://github.com/yamada-ui/yamada-ui/pull/6581) — "fix(calendar): merge user props with context props via mergeProps"

**Diff** (reviewers rejected this site as "Utility over-application", but `mergeProps` is actually required here):

```tsx
// Before
...getNavigationProps({ ...navigationProps, ...rest }),
// After
...getNavigationProps(mergeProps(navigationProps, rest)()),
```

**What was missed**: Reviewers flagged the entire PR as matching [Utility over-application](utility-over-application.md) and rejected every site wholesale. In reality, `navigationProps` / `controlProps` / `buttonProps` / `prevButtonProps` / `monthProps` are prop bags the user passes through `Calendar.Root`, and `rest` is the user's props on the child component. Both sides are user-supplied, so `className` / `style` / `onClick` can collide — `mergeProps` is required. The getter's internal `handlerAll` / `mergeRefs` merges user↔internal, not user↔user, so it does not cover this case. Only the `Select` sub-component sites were genuine over-application; mixing them in a blanket rejection missed the legitimate fixes.

**Rule of thumb**: Before invoking an existing anti-pattern on a PR, ask:

1. Did I verify **each site individually** against the pattern's criteria, instead of labeling the whole PR from one matching site?
2. For `mergeProps` specifically, are the inputs two user-supplied prop bags (merge required) or a user prop + getter/internal output (merge likely redundant)?

Known anti-patterns and genuine usage often coexist in the same PR. Blanket rejection based on one matching site is itself a misapplication of the anti-pattern.
