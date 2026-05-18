# Yamada UI Development Guide

Yamada UI is a React UI component library built with CSS-in-JS (Emotion).

## Critical Rules

- **Do not add unnecessary tests**: Do not add or update tests just because files were changed. Tests are required only when the change introduces a new branch, contract, observable behavior, or regression path that is not already verified by existing tests in the same package or dependent units. If existing tests already cover the affected behavior, do not add unnecessary tests.
- **Accessibility is required**: All components must support ARIA attributes, keyboard navigation, and screen readers. Report any concerns.
- **Do not bundle multiple fixes**: If you encounter a separate issue while working on a fix, do not fix it in the same PR. Create a separate issue and submit a separate PR.
- **Do not run format, lint, or typecheck unless explicitly asked**: Format, lint and typecheck are handled by lefthook on commit. However, run tests for the changed files locally to verify that the implementation works correctly.
- **Do not write comments**: JSDoc and comments that suppress linter or formatter errors are allowed, but all other comments are not. Programs that require comments to be understood should have their structure questioned. Programs must be simple and immediately understandable by reading the code itself.

## Rules

When performing one of the actions below, read the linked rule first.

- Creating branches:
  - [Branch Rules](.agents/rules/branch.md)
- Creating commits:
  - [Commit Rules](.agents/rules/commit.md)
  - [Pre-commit Hooks](.agents/references/pre-commit-hooks.md)
- Creating issues:
  - [Issue Rules](.agents/rules/issue.md)
- Creating PRs:
  - [PR Rules](.agents/rules/pr.md)
- Reviewing PRs:
  - [PR Merge Guidelines](.agents/references/pr-merge-guidelines.md)
  - [PR Review Guidelines](.agents/references/pr-review-guidelines.md)
  - [PR Review Anti-Patterns](.agents/references/pr-review-anti-patterns/index.md)

When editing or reviewing files that match a pattern below, read the linked rule first.

- [Skills](.agents/rules/skills.md):
  - `.agents/skills/**/*.md`
  - `.claude/skills/**/*.md`
- [Changesets](.agents/rules/changesets.md):
  - `packages/{cli,react,utils}/src/**/*.{ts,tsx}`
  - `!packages/{cli,react,utils}/src/**/*.test.{ts,tsx}`
  - `!packages/{cli,react,utils}/src/**/*.test.{browser,chromium,firefox,webkit}.{ts,tsx}`
  - `.changeset/*.md`
- [Test Categorization](.agents/rules/test-categorization.md):
  - `packages/react/src/**/*.test.{ts,tsx}`
  - `packages/react/src/**/*.test.{browser,chromium,firefox,webkit}.{ts,tsx}`
- [Browser Testing](.agents/rules/browser-testing.md):
  - `packages/react/src/**/*.test.{browser,chromium,firefox,webkit}.{ts,tsx}`
- [Unit Testing](.agents/rules/unit-testing.md):
  - `packages/{cli,react,utils}/**/*.test.{ts,tsx}`

## Codebase structure

### Monorepo Overview

This is a monorepo managed by pnpm, which includes Yamada UI and related packages and documentation sites.

```
packages/
├─ cli/　        # Published CLI package (@yamada-ui/cli)
├─ react/　      # Published react components package (@yamada-ui/react)
├─ utils/　      # Published utility functions package (@yamada-ui/utils)
├─ forge/　      # Internal forge package for (Creating github issues, ...etc.)
└─ workspace/　  # Internal utilities packages (OxLint, Oxfmt, Vitest, TypeScript, ...etc.)
www/　            # Documentation site (Next.js, Velite)
playgrounds/
├─ next/
│ ├─ app/       # Next.js App Router playground
│ └─ pages/     # Next.js Pages Router playground
├─ react-router/
│ └─ framework/ # React Router Framework playground
├─ vite/　       # Vite playground
└─ tanstack/
　 ├─ router/    # TanStack Router playground
　 └─ start/     # TanStack Start playground
```

### Package Shortcuts

Shortcuts are defined in the root `package.json`.

```bash
pnpm react ...                  # Forwards to packages/react
pnpm utils ...                  # Forwards to packages/utils
pnpm cli ...                    # Forwards to packages/cli
pnpm forge ...                  # Forwards to packages/forge
pnpm linter ...                 # Forwards to packages/lint
pnpm workspace ...              # Forwards to packages/workspace
pnpm www ...                    # Forwards to www
pnpm next:app ...               # Forwards to playgrounds/next/app
pnpm next:pages ...             # Forwards to playgrounds/next/pages
pnpm react-router:framework ... # Forwards to playgrounds/react-router/framework
pnpm vite ...                   # Forwards to playgrounds/vite
pnpm tanstack:router ...        # Forwards to playgrounds/tanstack/router
pnpm tanstack:start ...         # Forwards to playgrounds/tanstack/start
```

## Common Commands

### Build

```bash
pnpm build       # Build packages/
pnpm cli build   # Build cli/
pnpm react build # Build react/
pnpm utils build # Build utils/
pnpm www build   # Build www/
```

### Format / Lint / Typecheck

```bash
pnpm quality             # Format, lint, and typecheck packages/
pnpm cli quality         # Format, lint, and typecheck cli/
pnpm react quality       # Format, lint, and typecheck react/
pnpm utils quality       # Format, lint, and typecheck utils/
pnpm forge quality       # Format, lint, and typecheck forge/
pnpm workspace quality   # Format, lint, and typecheck workspace/
pnpm www quality         # Format, lint, and typecheck www/

pnpm format              # Format packages/
pnpm cli format          # Format cli/
pnpm react format        # Format react/
pnpm utils format        # Format utils/
pnpm forge format        # Format forge/
pnpm workspace format    # Format workspace/
pnpm www format          # Format www/

pnpm lint                # Lint packages/
pnpm cli lint            # Lint cli/
pnpm react lint          # Lint react/
pnpm utils lint          # Lint utils/
pnpm forge lint          # Lint forge/
pnpm workspace lint      # Lint workspace/
pnpm www lint            # Lint www/

pnpm typecheck           # Typecheck packages/
pnpm cli typecheck       # Typecheck cli/
pnpm react typecheck     # Typecheck react/
pnpm utils typecheck     # Typecheck utils/
pnpm forge typecheck     # Typecheck forge/
pnpm workspace typecheck # Typecheck workspace/
pnpm www typecheck       # Typecheck www/
```

### Test

```bash
pnpm test # Run all tests
pnpm test:coverage # Run all tests with coverage
pnpm react test:jsdom --run src/components/<name>/ # Run tests for a specific component/hook
pnpm react test:jsdom --run src/components/button/button.test.tsx # Run a single test file
pnpm react test:jsdom --run --coverage src/components/<name>/ # Run tests for a specific component/hook with coverage
```

### Storybook

```bash
pnpm react storybook       # Start Storybook dev server (port 6006)
pnpm react storybook:build # Build Storybook
```

### Code Generation

```bash
pnpm react gen:tokens     # Generate theme token types
pnpm react gen:styles     # Generate style props
pnpm react gen:icons      # Generate icon components from Lucide React
pnpm react gen:props      # Generate prop documentation
pnpm react gen:registries # Generate registries.
```
