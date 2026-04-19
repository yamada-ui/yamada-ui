# Add

One skill run = one anti-pattern. If the PR list given by the user spans two different patterns, stop at Phase 2 and ask the user to split the invocation.

## 0: Fetch the list

Extract all entries from the [anti-patterns](.agents/references/review-anti-patterns/index.md) index into a list.

## 1: Fetch the PRs

Fetch every PR specified in `$ARGUMENTS` and understand the content and pattern of each PR.

## 2: Examine the pattern

1. If the PRs have different patterns, confirm with the user. If they are not the same pattern, ask whether they can be treated as the same pattern, or whether the work should be split.
2. Read each entry from the list obtained in Phase 0. If there is a similar pattern, ask the user whether to merge this case into that entry or add a new entry.

## 3: Check existing PRs

1. Search for open PRs whose title includes "Anti-pattern".
2. Review the content and diff of the PRs found. If a PR with a similar pattern already exists, ask the user whether to update that PR with the current content or create a new PR. If the current content is to be included in that PR, skip to Phase 7 (skipping through Phase 6). In Phase 8, check out the existing PR's branch inside the worktree and work there.

## 4: Interview

Ask the user the following questions and use the answers to draft the next entry.

1. **What was missed?**: Ask specifically what the reviewer missed or misunderstood.
2. **What is the rule of thumb?**: Ask specifically what future reviewers should do.

## 5: Create the draft

Create a draft following the [template](../assets/entry-template.md).

- `{{title}}`: A short noun phrase (e.g., "Overuse of utilities").
- `{{pr_links}}`: Each PR in `[PR #N](...)` form, comma-separated. If there is only one PR, also include the PR title in quotes.
- `{{before_snippet}}`, `{{after_snippet}}`: The minimal diff hunk extracted from `gh pr diff`. Trim anything not relevant to the point.
- `{{what_was_missed}}`: The answer obtained in the interview.
- `{{rule_of_thumb_list}}`: A numbered list (around 2–3 items).
- `{{generalization}}`: An optional closing paragraph showing the relationship with other entries (leave as an empty string if not applicable).

## 6: Confirm the draft

Present the draft to the user and obtain approval. Once approved, proceed to the next step.

## 7: Apply fixes

Ask the user whether to include fixes for the PRs they pointed out in this PR as well. If yes, include the fixes in the PR created in Phase 8.

## 8: Add the entry

1. Create a new worktree branched from `origin/main`. Use a single worktree even when adding multiple entries.
2. Write out the draft as a file under `.agents/references/review-anti-patterns`, and add it to the list in `.agents/references/review-anti-patterns/index.md` in the same way as other entries.
3. If Phase 7 requested including fixes in the PR, fix the missed or misunderstood content identified during the interview in Phase 4.
4. Commit, push, and create the PR. Include "Anti-pattern" in the PR title since it is required by the search query in Phase 3.
5. After creating the PR, delete the worktree directory you created, remove the worktree (`git worktree remove <path> && git worktree prune`), and delete the local branch you created (`git branch -D <branch-name>`) to clean up.
