# Yamada UI Development Guide

Yamada UI is a React UI component library built with CSS-in-JS (Emotion).

## Critical Rules

- **Tests are required**: Always write tests when fixing bugs or adding new features.
- **Accessibility is required**: All components must support ARIA attributes, keyboard navigation, and screen readers. Report any concerns.
- **Do not bundle multiple fixes**: If you encounter a separate issue while working on a fix, do not fix it in the same PR. Create a separate issue and submit a separate PR.

## Codebase structure

### Monorepo Overview

This is a monorepo managed by pnpm, which includes Yamada UI and related packages and documentation sites.

```
packages/
├─ cli/　        # Published CLI package (@yamada-ui/cli)
├─ react/　      # Published React components package (@yamada-ui/react)
├─ utils/　      # Published utility functions package (@yamada-ui/utils)
└─ workspace/　  # Internal utilities packages (ESLint, Prettier, Vitest, TypeScript, ...etc.)
www/　            # Documentation site (Next.js, Velite)
scripts/　        # Code generation and CI scripts
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
pnpm quality           # Format, lint, and typecheck packages/
pnpm quality:scripts   # Format, lint, and typecheck scripts/
pnpm cli quality       # Format, lint, and typecheck cli/
pnpm react quality     # Format, lint, and typecheck react/
pnpm utils quality     # Format, lint, and typecheck utils/
pnpm www quality       # Format, lint, and typecheck www/

pnpm format            # Format packages/
pnpm format:scripts    # Format scripts/
pnpm cli format        # Format cli/
pnpm react format      # Format react/
pnpm utils format      # Format utils/
pnpm www format        # Format www/

pnpm lint              # Lint packages/
pnpm lint:scripts      # Lint scripts/
pnpm cli lint          # Lint cli/
pnpm react lint        # Lint react/
pnpm utils lint        # Lint utils/
pnpm www lint          # Lint www/

pnpm typecheck         # Typecheck packages/
pnpm typecheck:scripts # Typecheck scripts/
pnpm cli typecheck     # Typecheck cli/
pnpm react typecheck   # Typecheck react/
pnpm utils typecheck   # Typecheck utils/
pnpm www typecheck     # Typecheck www/
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
pnpm gen:tokens # Generate theme token types
pnpm gen:styles # Generate Style Props
pnpm gen:icons  # Generate icon components from Lucide React
pnpm gen:props  # Generate prop documentation
```

## Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org) for the commit message. Write commit messages in English.

**Format:** `<type>(<scope>): <description>`

- `scope` is the package name, component name, or area of change (e.g., `button`, `utils`, `docs`, `deps`, `changesets`).
- `description` starts with a lowercase verb.

**Examples:**

```
fix(accordion): remove redundant dependencies from memo
feat(number-input): improve number input test coverage
refactor(apps/icons): update loading indicator and constants
docs(native-popover): add accessibility section
test(table): enhance test coverage for Table component
ci(changesets): update dev registries
chore(deps): update codecov-action to v5
build: add stackblitz integration and dependencies
```

## Pre-commit Hooks (lefthook)

The following hooks run automatically on commit.

| Hook       | Description                                                                       |
| ---------- | --------------------------------------------------------------------------------- |
| ESLint     | Runs with `--fix --max-warnings=0` and `stage_fixed: true` to auto-restage fixes. |
| Prettier   | Runs with `--write` and `stage_fixed: true` to auto-restage fixes.                |
| commitlint | Validates Conventional Commits format.                                            |

`pnpm install` runs automatically on post-merge/post-checkout when `package.json` or `pnpm-lock.yaml` changes.

## Changesets

Required when modifying `packages/{cli,react,utils}/src/**/*.{ts,tsx}` (excluding test and story files). Create a file in `.changeset/`.

```md
---
"@yamada-ui/react": patch
---

One-sentence summary of the fix in English.
```

**Bump type**

- `patch`: bug fix, internal change
- `minor`: new feature with backward compatibility
- `major`: breaking change (alters existing API)

For changes across multiple packages:

```md
---
"@yamada-ui/react": patch
"@yamada-ui/utils": patch
---
```

## Creating Issues

Templates are provided for each type. Always follow the appropriate template.

- [Bug Report](./.github/ISSUE_TEMPLATE/bug_report.yml): Create a bug report.
- [Feature Request](./.github/ISSUE_TEMPLATE/feature_request.yml): Request for features or enhancements.
- [Documentation Report](./.github/ISSUE_TEMPLATE/documentation_report.yml): Create a report for errors or inappropriate expressions in the documentation site.
- [Documentation Request](./.github/ISSUE_TEMPLATE/documentation_request.yml): Propose new documentation requests or improvements.

## Creating PRs

Read the [template](./.github/pull_request_template.md) and use its structure for the PR body. Replace the HTML comments with actual content.

- Use the same format as the commit message for the title.
- Always include `Closes #<issue-number>`.
- Clearly state whether this is a breaking change.
- The template includes an "AI used" section. If AI generated the PR, uncheck "I did not use AI" and check "I checked the generated content before submitting."

After creating a PR, the [Quality](./.github/workflows/quality.yml) GitHub Action runs automatically to validate format, lint, typecheck, and tests. Monitor it to ensure there are no issues. If problems are found, fix them and resubmit.
