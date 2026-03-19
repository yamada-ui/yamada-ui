---
name: fix-issue
description: Fix a GitHub issue end-to-end following yamada-ui conventions. Analyzes the issue, implements the fix, writes tests, runs quality checks, and creates a PR.
argument-hint: "<issue-number-or-url>"
---

You are a Yamada UI contributor. Your task is to fix a GitHub issue end-to-end: analyze it, implement the fix, write tests, and submit a PR.

Follow all conventions in AGENTS.md. This skill defines the **workflow steps only** — do not duplicate rules already documented there.

## Input

The issue reference is: $ARGUMENTS

Parse the input:

- Full URL (e.g., `https://github.com/yamada-ui/yamada-ui/issues/123`) → extract the numeric issue number
- `#123` or bare `123` → strip `#` and use as-is

Validate that the resolved value is a positive integer. If `$ARGUMENTS` is empty or not a valid issue reference, ask the user to provide the issue number or URL before proceeding.

The repository is always `yamada-ui/yamada-ui`.

---

## Step 1: Fetch & Analyze the Issue

Run `gh issue view <number> --repo yamada-ui/yamada-ui` to get the issue details.

Classify the issue type: `fix`, `feat`, `docs`, `test`, `refactor`, or `chore`.

Identify the affected package and component/area:

- `@yamada-ui/react` → `packages/react/src/components/<name>/` or `packages/react/src/hooks/<name>/`
- `@yamada-ui/utils` → `packages/utils/src/`
- `@yamada-ui/cli` → `packages/cli/src/`
- `www` (docs site) → `www/contents/`

**Summarize your analysis to the user before proceeding.** If the issue is unclear or lacks enough information to act on, stop and explain what's missing.

---

## Step 2: Create a Branch

Check for uncommitted changes first:

```bash
git status --short
```

If there are uncommitted changes, alert the user and do not proceed until they confirm how to handle them.

```bash
git switch main && git pull --ff-only origin main
```

Check for branch name conflicts before creating:

```bash
git branch --list "<type>/<scope>"
git switch -c <type>/<scope>
```

---

## Step 3: Explore & Identify Files

Map the issue to file locations. Read the relevant source files, tests, and stories before making any changes. Understand the existing code thoroughly.

Key patterns:

- Single-part components use `createComponent` / `withContext`
- Multi-part compound components use `createSlotComponent` / `withContext` (e.g., accordion, tabs, drawer, card)
- Component files almost always have `"use client"` directive — omit only for pure render utilities with no hooks or browser APIs (e.g., `<Show>`, `<For>`)
- Class names are automatically generated as `ui-<name>` or `ui-<name>__<slot>` — do not set class names manually

---

## Step 4: Implement the Fix

Make the minimal changes needed to address the issue. Follow existing code patterns.

Do not bundle multiple fixes. Only fix what the issue describes.

---

## Step 5: Write or Update Tests

Tests are **required** for bug fixes and new features. Skip for docs-only changes.

Run targeted tests:

```bash
# For components:
pnpm react test:jsdom --run src/components/<name>/
# For hooks:
pnpm react test:jsdom --run src/hooks/<name>/
```

---

## Step 6: Run Quality Checks

Run quality checks for **all** affected packages. If changes touch multiple packages, run checks for each.

**Fix all failures before proceeding.**

---

## Step 7: Create a Changeset (if needed)

Follow the changeset rules in AGENTS.md. Name the file with a randomly-generated phrase (e.g., `purple-foxes-smile.md`), matching the project's existing convention. Check for name collisions.

If changes span multiple packages, list all affected packages in the changeset frontmatter.

---

## Step 8: Commit

Run `git status --short` to review all changes. Verify no unexpected files appear.

Stage only the specific files you changed. Commit with a conventional commit message per AGENTS.md.

---

## Step 9: Push & Create PR

**Before pushing, ask the user for confirmation.** Show them:

- The branch name
- A summary of all changes (`git diff main..HEAD --stat`)
- The commit message

Only proceed if the user confirms.

```bash
git push -u origin <branch-name>
```

Create the PR following `.github/pull_request_template.md`. Always include:

- `Closes #<issue-number>`
- `--base main` flag
- AI used checkboxes (uncheck "I did not use AI", check "I checked the generated content")
- Evaluate whether this is a breaking change — do not hardcode "No"

After creating the PR, check CI status and inform the user if it fails.

---

## Edge Cases

- **Issue is unclear**: Stop after Step 1 and explain what information is missing. Do not guess.
- **Multiple unrelated areas affected**: Fix only what the issue describes. Mention other issues but do not fix them.
- **Generated files need updating**: Run the appropriate generation command rather than editing generated files manually.
- **Quality checks fail**: Fix all failures before committing.
- **Branch already exists**: Ask the user before reusing or deleting an existing branch.
- **Uncommitted changes**: Never silently switch branches with dirty working tree. Alert the user first.
