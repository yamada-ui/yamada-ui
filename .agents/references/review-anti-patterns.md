# Review Anti-Patterns

A library of past PRs where the dual-bot review approved something the maintainer would have rejected. Read this file before reviewing a PR. For each entry, ask: **"Am I about to make the same mistake on this PR?"**

The common theme is **unnecessary change**. A PR is not good because it compiles and tests pass — it is good because **every line in the diff earns its place**. If a line cannot justify itself, request changes.

---

## Default posture: skeptical

- **Default to "request changes" when in doubt.** An approval is a positive claim that every change is justified. If you cannot make that claim, do not approve.
- **Every diff hunk must justify itself.** For each hunk, ask: "What breaks if we delete this hunk?" If nothing breaks, the hunk should not exist.
- **"The PR does what the title says" is not enough.** A PR titled "use mergeProps" that applies mergeProps to call sites where it is pointless is still a bad PR.
- **Mechanical application of a rule is a smell.** When a PR applies a utility/pattern across many sites, check each site individually — necessity is site-specific, not PR-wide.
- **Don't be polite.** The job of a reviewer is to catch problems, not to be agreeable.

---

## Anti-patterns

### 1. Utility over-application

**Example**: [PR #6580](https://github.com/yamada-ui/yamada-ui/pull/6580) — "use mergeProps for Radio root"

**What happened**: The PR replaced

```tsx
<styled.label {...getRootProps({ ...varProps, ...rootProps })}>
```

with

```tsx
<styled.label {...mergeProps(getRootProps(varProps), rootProps)()}>
```

Both bots approved it because the PR "did what the title said".

**What was missed**: `varProps` is a plain style-variant object. It has no `ref`, no `className`, no `style`, no event handlers. `mergeProps` exists to merge those fields correctly — **there is nothing to merge here**. Spreading `{ ...varProps, ...rootProps }` is equivalent and simpler. The `mergeProps` wrapper is dead weight.

**Rule of thumb**: When a PR says "use utility X everywhere", for **each** call site ask:

1. Does this site actually have the fields that utility X exists to handle?
2. If no, the change is noise. Request changes on that specific site.

**Generalization**: Any refactor that mechanically applies a pattern across the codebase needs site-by-site justification. "It's consistent" is not a justification if consistency produces dead code.

---

### 2. `suppressHydrationWarning` propagated to elements without dynamic content

**Example**: [PR #6575](https://github.com/yamada-ui/yamada-ui/pull/6575) — "propagate suppressHydrationWarning to hidden elements"

**What happened**: The PR forwarded `suppressHydrationWarning` from `Accordion.Root` to internal wrapper elements inside `AccordionButton` and `AccordionPanel`. Among them, the inner `<p>` used to wrap string children received it too:

```tsx
<styled.div {...getPanelProps({ suppressHydrationWarning, ...rest })}>
  {isString(children) ? (
    <styled.p suppressHydrationWarning={suppressHydrationWarning}>
      {children}
    </styled.p>
  ) : (
    children
  )}
</styled.div>
```

Both bots approved.

**What was missed**: `suppressHydrationWarning` only suppresses mismatches in **the element's own attributes and its direct text content**, and **does not propagate to children** (React docs are explicit about this). Whether it earns its place on a given element depends entirely on whether _that_ element has anything dynamic about it.

- The outer `<styled.div {...getPanelProps(...)}>` is justified — `getPanelProps` returns dynamic attributes (`id`, `aria-labelledby`, `hidden`, etc.) that can differ between SSR and hydration.
- The inner `<styled.p>` is **not** justified — it is a static styled wrapper with no dynamic attributes. The children string is whatever the caller passed, and because `suppressHydrationWarning` doesn't propagate, putting it on the `<p>` does nothing for any dynamic content the caller might pass deeper inside. If the caller has dynamic text, they must add the prop themselves at the level where the mismatch actually occurs.

**Rule of thumb**: Before adding (or forwarding) `suppressHydrationWarning` to an element, ask:

1. Does this element have any attribute that can differ between SSR and hydration (typically because a hook like `useId` / `getXxxProps` injects it)?
2. Or does this element have direct text content (not a child component) that can differ?

If neither is true, the prop has no effect on this element and should not be added. "The root might want to suppress everything" is not a reason — `suppressHydrationWarning` is per-element by design, not a cascading flag.

**Generalization**: When a PR "propagates" a prop from a root to many internal elements, do not assume the propagation is uniformly correct. For each target element, verify the prop has a meaningful effect _on that specific element_. Mechanical fan-out of a prop is the same anti-pattern as mechanical application of a utility (see #1) — necessity is site-specific.

---

## How to add new entries

When the maintainer rejects a PR that both bots approved (or points out a review miss), add an entry here with:

1. **Category** (existing or new)
2. **PR link**
3. **What happened** — the diff, minimally
4. **What was missed** — the specific reasoning error
5. **Rule of thumb** — a check future reviews can apply
6. **Generalization** — the broader principle, if any
