# Prop fan-out to elements without dynamic content

**Example**: [PR #6575](https://github.com/yamada-ui/yamada-ui/pull/6575) — "propagate suppressHydrationWarning to hidden elements"

**Diff**:

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

**What was missed**: `suppressHydrationWarning` only suppresses mismatches in the element's own attributes and its direct text content, and does **not** propagate to children (React docs are explicit).

- Outer `<styled.div {...getPanelProps(...)}>` — justified. `getPanelProps` injects dynamic attributes (`id`, `aria-labelledby`, `hidden`) that can differ between SSR and hydration.
- Inner `<styled.p>` — not justified. Static styled wrapper with no dynamic attributes. The prop does nothing here, and cannot help the caller's dynamic content deeper inside.

**Rule of thumb**: Before adding (or forwarding) `suppressHydrationWarning` to an element, ask:

1. Does this element have an attribute that can differ between SSR and hydration (typically because `useId` / `getXxxProps` injects one)?
2. Or does it have direct text content (not a child component) that can differ?

If neither, the prop has no effect on this element. "The root might want to suppress everything" is not a reason — the prop is per-element by design, not a cascading flag.

When a PR "propagates" a prop to many internal elements, verify per-element — same site-specific necessity check as [utility over-application](utility-over-application.md).
