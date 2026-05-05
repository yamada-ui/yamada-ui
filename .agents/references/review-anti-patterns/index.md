# Review Anti-Patterns

Case library of past PRs where both bots approved something the maintainer rejected. When a trigger below matches the current diff, read the linked entry. Otherwise skip.

- [Utility over-application](utility-over-application.md): a utility (e.g. `mergeProps`, `useMergeRefs`) applied mechanically to many sites in one PR.
- [Prop fan-out to elements without dynamic content](suppress-hydration-warning.md): `suppressHydrationWarning` forwarded or added to multiple elements.
- [Tests that do not increase coverage](tests-without-coverage.md): demanding that removed assertions be re-added on the grounds of "preserving prior coverage" or "preserving the public contract" without a concrete coverage delta.
- [a11y in browser mode](a11y-in-browser-mode.md): demanding that an `a11y(...)` case stay in `*.test.browser.{ts,tsx}` even though axe-core runs correctly under jsdom.

## Adding a new entry

When a merged PR surfaces a review miss, add a bullet above and a detail file containing: minimal diff, what was missed, rule of thumb, and a PR link when a relevant public PR exists.
