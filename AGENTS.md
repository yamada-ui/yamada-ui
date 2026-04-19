# Yamada UI Development Guide

Yamada UI is a React UI component library built with CSS-in-JS (Emotion).

## Critical Rules

- **Tests are required**: Always write tests when fixing bugs or adding new features.
- **Accessibility is required**: All components must support ARIA attributes, keyboard navigation, and screen readers. Report any concerns.
- **Do not bundle multiple fixes**: If you encounter a separate issue while working on a fix, do not fix it in the same PR. Create a separate issue and submit a separate PR.
- **Do not run format, lint, or typecheck unless explicitly asked**: Format and lint are handled by lefthook on commit, and all three are validated by the Quality GitHub Action on PR. Only run tests locally to verify the changes work correctly.

## Rules

When performing one of the actions below, read the linked rule first.

- Creating commits:
  - [Commit Rules](.agents/rules/commit.md)
  - [Pre-commit Hooks](.agents/references/pre-commit-hooks.md)
- Creating issues:
  - [Issue Rules](.agents/rules/issue.md)
- Creating PRs:
  - [PR Rules](.agents/rules/pr.md)
- Reviewing PRs:
  - [PR Merge Guide](.agents/references/pr-merge-guide.md)
  - [Review Anti-Patterns](.agents/references/review-anti-patterns/index.md)

When editing or reviewing files that match a pattern below, read the linked rule first.

- [Skills](.agents/rules/skills.md):
  - `.agents/skills/**/*.md`
  - `.claude/skills/**/*.md`
- [Changesets](.agents/rules/changesets.md):
  - `packages/{cli,react,utils}/src/**/*.{ts,tsx}`
  - `.changeset/*.md`

## Codebase structure

### Monorepo Overview

This is a monorepo managed by pnpm, which includes Yamada UI and related packages and documentation sites.

```
packages/
├─ cli/　        # Published CLI package (@yamada-ui/cli)
├─ react/　      # Published react components package (@yamada-ui/react)
├─ utils/　      # Published utility functions package (@yamada-ui/utils)
├─ forge/　      # Internal forge package for (Creating github issues, ...etc.)
└─ workspace/　  # Internal utilities packages (ESLint, Oxfmt, Vitest, TypeScript, ...etc.)
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
