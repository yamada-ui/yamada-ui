# Storybook Visual Test (Local Only)

This repo supports an explicit visual-test mode for local deterministic Storybook and Chromatic runs.

## Why

- Keep normal Storybook docs/demo behavior dynamic for humans.
- Enable deterministic visual-test rendering only when explicitly requested.

## Visual-Test Mode Trigger

Set `STORYBOOK_VISUAL_TEST=true`.

When enabled, Storybook preview freezes `Date` and `Date.now()` to:

- `2025-04-15T13:24:36.000Z`

Normal `pnpm react storybook` keeps current time behavior.

## Local Commands

Run from repo root:

```bash
pnpm install
pnpm react storybook
pnpm react visual-test:storybook
pnpm react visual-test:build
```

Chromatic local run:

```bash
export CHROMATIC_PROJECT_TOKEN=<your-project-token>
pnpm react visual-test:chromatic
```

`CHROMATIC_PROJECT_TOKEN` is available in Chromatic project settings.

## Deferred To #6758 (CI)

- GitHub Actions workflow wiring for Chromatic.
- CI secrets management for `CHROMATIC_PROJECT_TOKEN`.
- Branch protection and required-status-check integration.
- PR comment/report workflow and baseline review policy in CI.
