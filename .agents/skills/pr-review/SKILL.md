---
name: pr-review
description: >
  Review PRs against yamada-ui coding conventions.
  Checks component patterns, styling, test coverage,
  accessibility, naming conventions, and export conventions.
  Pass a PR URL, file path, or diff to generate review comments.
argument-hint: "<PR URL | file path>"
compatibility: Requires git. gh CLI recommended (falls back to fetching <PR URL>.diff if unavailable).
metadata:
  internal: "true"
---

# pr-review

Review PRs against yamada-ui coding conventions and generate feedback.

## Workflow

### Step 1: Get diff

Parse `$ARGUMENTS` to get the diff.

- **PR URL** (`https://github.com/yamada-ui/yamada-ui/pull/123`): Get diff with `gh pr diff <number>`. If `gh` is unavailable, fetch `<PR URL>.diff` with the agent's HTTP fetch tool (e.g., WebFetch or equivalent).
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

All reference paths are relative to this `SKILL.md` file. Always load `references/file-conventions.md` in addition to the category-specific files below, since naming, barrel exports, and JSDoc rules apply to every file type.

| Category                            | Load references/                                             |
| ----------------------------------- | ------------------------------------------------------------ |
| Component (`.tsx`)                  | `references/components.md` and `references/accessibility.md` |
| Style (`.style.ts`)                 | `references/styling.md`                                      |
| Test (`.test.tsx`)                  | `references/testing.md`                                      |
| Export (`index.ts`, `namespace.ts`) | (file-conventions.md only)                                   |
| Hook (`use-*.ts`)                   | `references/components.md` and `references/accessibility.md` |

### Step 4: Check conventions

For each changed hunk in the diff:

1. Match against the Incorrect/Correct code pairs in the loaded references/ files.
2. Detect convention violations and flag them with `[MUST]`, `[SHOULD]`, or `[NITS]` using the classification below.
3. Prioritize reporting `[MUST]` findings before `[SHOULD]` and `[NITS]`.
4. When a finding applies, quote the relevant Incorrect/Correct pair from the reference file so the reviewer can see the expected form.
5. Skip patterns that are not covered by the loaded references rather than guessing.

### Step 5: Output

Emit findings using the [Output Format](#output-format) section below.

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
