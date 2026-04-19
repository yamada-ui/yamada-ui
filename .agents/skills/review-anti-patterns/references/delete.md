# Delete

## 1: Fetch the list

1. Extract all entries from the [anti-patterns](.agents/references/review-anti-patterns/index.md) index into a list.
2. Present the list to the user with a number next to each item, and have them select the items (multiple allowed) to delete.

## 2: Delete the entries

1. Create a new worktree branched from `origin/main`. Use a single worktree even when deleting multiple entries.
2. Delete the selected entry files from `.agents/references/review-anti-patterns`, and remove them from the list in `.agents/references/review-anti-patterns/index.md` as well.
3. Commit, push, and create the PR.
4. After creating the PR, delete the worktree directory you created, remove the worktree (`git worktree remove <path> && git worktree prune`), and delete the local branch you created (`git branch -D <branch-name>`) to clean up.
