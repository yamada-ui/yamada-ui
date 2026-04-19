---
name: review-anti-patterns
description: "Add or remove entries in .agents/references/review-anti-patterns/. Use when the user wants to document a review miss from one or more merged PRs, or remove a stale anti-pattern entry."
metadata:
  internal: true
---

# Overview

Add or remove entries in the review [anti-patterns](/.agents/references/review-anti-patterns/index.md), which collect cases from past PRs where each AI approved changes that the maintainer disagreed with, or where each AI approved based on incorrect knowledge or interpretation.

# Gotchas

- When adding, modifying, or deleting files, always do so in a new worktree branched from `origin/main`.
- Keep the PR title as a single sentence that is clear to others. Do not reuse the commit message as the PR title.
- Write the title and summary of each [anti-pattern](/.agents/references/review-anti-patterns/index.md) entry using search-friendly keywords so that the relevant entry is easy to find.

# Steps

## 0: Branching

Branch on each step based on whether `$ARGUMENTS` is provided.

- If arguments are provided: proceed to step 1.a.
- If no arguments are provided: proceed to step 1.b.

## 1.a: Add

Follow the [procedure](references/add.md) to execute.

## 1.b: Delete

Follow the [procedure](references/delete.md) to execute.
