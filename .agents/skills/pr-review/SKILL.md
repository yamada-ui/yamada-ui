---
name: pr-review
description: >
  Review PRs against yamada-ui coding conventions.
  Checks component patterns, styling, test coverage,
  accessibility, naming conventions, and export conventions.
  Pass a PR URL, file path, or diff to generate review comments.
compatibility: Designed for Claude Code (or similar products). Requires git and gh CLI.
metadata:
  author: yamada-ui
  version: "1.0"
---

# pr-review

Review PRs against yamada-ui coding conventions and generate feedback.

## Workflow

### Step 1: Get diff

Parse `$ARGUMENTS` to get the diff.

- **PR URL** (`https://github.com/yamada-ui/yamada-ui/pull/123`): Get diff with `gh pr diff <number>`
- **File path**: Read the file with the Read tool
- **No arguments**: Get current diff with `git diff`

### Step 2: Classify files

Classify changed files:

| Extension/Pattern          | Category  |
| -------------------------- | --------- |
| `.tsx`                     | Component |
| `.style.ts`                | Style     |
| `.test.tsx`                | Test      |
| `index.ts`, `namespace.ts` | Export    |
| `use-*.ts`                 | Hook      |

### Step 3: Load reference files

Load the relevant references/ files based on file classification. **Only load the ones that apply, not all at once.**

| Category                            | Load references/                                                                                     |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Component (`.tsx`)                  | `${CLAUDE_SKILL_DIR}/references/components.md` and `${CLAUDE_SKILL_DIR}/references/accessibility.md` |
| Style (`.style.ts`)                 | `${CLAUDE_SKILL_DIR}/references/styling.md`                                                          |
| Test (`.test.tsx`)                  | `${CLAUDE_SKILL_DIR}/references/testing.md`                                                          |
| Export (`index.ts`, `namespace.ts`) | `${CLAUDE_SKILL_DIR}/references/file-conventions.md`                                                 |
| Hook (`use-*.ts`)                   | `${CLAUDE_SKILL_DIR}/references/components.md` and `${CLAUDE_SKILL_DIR}/references/accessibility.md` |

### Step 4: Check conventions

Compare against Incorrect/Correct code pairs from the loaded references/ and detect violations.

### Step 5: Output

## Critical Rules

Rule summaries by category. See references/ for detailed Incorrect/Correct code pairs.

### Component Patterns → [components.md](references/components.md)

- **Use `createComponent` + `withContext`** for simple components.
- **Use `createSlotComponent` + `withProvider`(root) / `withContext`(child)** for composite components.
- **Use `component()` helper** when style slot integration is not needed (internal sub-components, group components, etc.).
- **Simple wrappers can omit the render function**: `withContext("hr")()`.
- **Place `"use client"` directive** at the top of the file.
- **Wrap `ComponentContext` with `useMemo`.**
- **Rename `PropsContext` before exporting.**

### Styling → [styling.md](references/styling.md)

- **Use `defineComponentStyle` / `defineComponentSlotStyle`** for style definitions.
- **Use `_` prefix for pseudo selectors** (`_hover`, `_disabled`, `_expanded`).
- **Use `styled.*` for HTML elements.** Never use raw HTML tags.
- **Use `dataAttr()`** for data attribute values.

### Testing → [testing.md](references/testing.md)

- **Include `a11y()` test as the first test case.**
- **Test `displayName`, `className` (BEM: `ui-component`), and HTML tag.**
- **Test `data-*` attributes** (`data-loading`, `data-active`, etc.).
- **Import test utilities from `#test` alias.** Use `#test/browser` for browser mode.
- **Test all sub-component displayNames** in composite components.

### File Conventions → [file-conventions.md](references/file-conventions.md)

- **File names use kebab-case.**
- **Separate `export type` in barrel exports.**
- **Rename exports in `namespace.ts`.**
- **JSDoc**: Component description + `@see` URL, Props description + `@default`.

### Accessibility → [accessibility.md](references/accessibility.md)

- **Set appropriate `role` attributes** on interactive components.
- **Link related elements with ARIA attributes** (`aria-selected`, `aria-controls`, `aria-labelledby`).
- **Implement Roving TabIndex pattern** (`tabIndex: selected ? 0 : -1`).
- **Use `runKeyAction`** for keyboard navigation.
- **Use `handlerAll`** to compose event handlers without overwriting user handlers.
- **Use `ariaAttr()`** for boolean ARIA attributes.

## Output Format

Output each finding in the following format:

```
### [MUST] / [SHOULD] / [NITS]

**File**: `path/to/file.tsx:L42`
**Category**: Component Patterns / Styling / Testing / File Conventions / Accessibility
**Details**: Specific finding
```

- **[MUST]**: Convention violation. Must be fixed before merge.
- **[SHOULD]**: Recommendation. Strongly suggested improvement.
- **[NITS]**: Minor suggestion. Optional.

Quote Incorrect/Correct code pairs from references/ when applicable.
