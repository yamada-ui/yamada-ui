# Design Principles

Yamada UI is a React component library for building beautiful, consistent, accessible interfaces with advanced styling. This document is for maintainers and contributors who are adding or changing components, hooks, style APIs, or theme behavior.

Use this guide with the [contribution guide](./CONTRIBUTING.md), the [styling docs](./www/contents/styling/index.mdx), the [theming docs](./www/contents/theming/index.mdx), and the [component creation docs](./www/contents/components/create-component.mdx). Public users should learn the styling and theming APIs from the docs site; this file explains the design decisions maintainers should preserve when changing the library.

## Product Direction

Yamada UI should feel predictable, composable, and complete without forcing users into one application structure. Components should expose enough control for product teams to build real interfaces while keeping the default path simple.

Prioritize these qualities in order:

1. Accessible behavior that works with keyboard and assistive technology.
2. Consistent APIs across related components.
3. Theme-driven styling that composes with design tokens.
4. Escape hatches that do not weaken the common case.
5. Small, focused implementation units.

Avoid adding features only because another library has them. Add API surface when it solves a repeated user need and fits existing Yamada UI patterns.

## Component APIs

Component APIs should be boring in the best way: names, defaults, controlled state, uncontrolled state, slots, and style props should match nearby components unless there is a specific reason to differ.

Prefer explicit props for component behavior and style-system props for visual styling. Do not add one-off visual props when the same result can be expressed through tokens, variants, sizes, color schemes, semantic tokens, CSS variables, or existing style props.

For compound components, keep each slot independently understandable. Slot names should describe their role in the rendered component, not the implementation detail that happens to render them. Root components should own shared context, state, and accessibility wiring; child slots should consume that context without duplicating it.

When changing an existing API, preserve the current contract unless the change is intentionally breaking and documented as such. Compatibility code is acceptable only for shipped public contracts, not for unreleased drafts within the same change.

## Accessibility

Accessibility is part of the component contract, not a follow-up task. Components must support the relevant ARIA roles and attributes, keyboard interaction, focus management, disabled states, labeling, and screen reader behavior for their pattern.

Use [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) when the component maps to a known pattern. If the component wraps another primitive or browser element, preserve the primitive's accessibility guarantees instead of replacing them with custom behavior.

Do not make users pass required ARIA props for the common case when the component can derive them safely. When an accessible name, description, or relationship cannot be inferred, make the requirement clear in the component API and documentation.

## Styling And Theming

Styling should flow through the Yamada UI system: theme tokens, semantic tokens, variants, sizes, color schemes, style props, CSS variables, and CSS-in-JS composition. Prefer token references over raw values when the value expresses a design decision.

Default styles should be useful, consistent, and themeable. They should not assume one brand, one app shell, or one documentation-site aesthetic. Component internals may use CSS variables when they make variants, slots, or state styles easier to compose.

Keep styling APIs orthogonal. Variants describe visual intent, sizes describe scale, color schemes describe palette, and style props provide local overrides. Do not add a variant that only changes size, a size that only changes color, or a color scheme that encodes layout.

Prefer semantic or layout components when they express the user's intent. Use `Box` for generic containers or styling glue when no more specific component communicates the intent.

When adding tokens or style props, confirm they fit the existing naming model and can be documented clearly. Prefer extending a general style capability over adding component-specific styling escape hatches.

## Documentation And Examples

Docs should teach the public API, not the implementation. Every new or changed component behavior should be reflected in the docs when users need to know about it.

Keep English and Japanese docs semantically aligned when both files exist. The wording does not need to be literal, but requirements, warnings, examples, and API guidance should not become stronger, weaker, or different between languages.

Examples should start with the common path, then show controlled state, composition, accessibility requirements, and styling variations when relevant. Avoid examples that only demonstrate internal mechanics or artificial combinations users are unlikely to copy.

Stories should cover meaningful visual and interaction states: default, variants, sizes, color schemes, disabled or read-only states, error states, controlled usage, and important compound or portal behavior when the component supports them.

## Tests And Verification

Add or update tests when a change introduces a new branch, public contract, observable behavior, accessibility behavior, regression path, or integration point that is not already covered. Do not add tests only because a file changed.

Tests should verify user-observable behavior. Prefer queries and assertions that match how users and assistive technologies interact with components. Avoid tests that lock in private implementation details unless the implementation detail is itself the public contract.

For browser-sensitive behavior such as focus, portals, positioning, animation timing, or pointer interaction, use the test type that exercises the real behavior instead of relying only on a lightweight unit test.

## Change Discipline

Keep changes focused. Do not bundle unrelated fixes, broad refactors, or documentation rewrites into a component change. If you discover a separate issue, report it or handle it in a separate change.

Before adding new API surface, compare nearby components and choose the smallest API that preserves consistency. Before changing behavior, identify the current public contract, the intended new contract, and the docs or tests that prove the difference.

Good design changes leave the library easier to use and easier to maintain. If ordinary control flow needs explanatory comments, split the responsibilities or simplify the structure instead. Use JSDoc or suppression comments only where the repository rules explicitly allow them.
