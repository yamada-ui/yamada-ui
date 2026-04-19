# Review Anti-Patterns

Case library of past PRs where both bots approved something the maintainer rejected. When a trigger below matches the current diff, read the linked entry. Otherwise skip.

- [Utility over-application](utility-over-application.md): a utility (e.g. `mergeProps`, `useMergeRefs`) applied mechanically to many sites in one PR.
- [Prop fan-out to elements without dynamic content](suppress-hydration-warning.md): `suppressHydrationWarning` forwarded or added to multiple elements.
- [Anti-pattern misapplication](anti-pattern-misapplication.md): a known anti-pattern invoked on a whole PR when only some sites actually match, rejecting legitimate fixes.

## Adding a new entry

When a merged PR surfaces a review miss, add a bullet above and a detail file containing: PR link, minimal diff, what was missed, rule of thumb.
