# PR Merge Guide

## Branch Protection Rules

The following branch protection rules are enabled on the `main` and `v*` branches. Always verify them before merging.

### Pull Request

- **Require a pull request before merging**: Direct pushes are not allowed. Changes must go through a PR.
- **Required approvals**: At least 1 approval is required.
- **Dismiss stale pull request approvals when new commits are pushed**: Any new commit dismisses existing approvals. A re-review is required.

### Review

- **Require review from specific teams**: At least 1 approval from each of the `Prime`, `Standard`, and `Growth` teams is required. `hirotomoyamada` belongs to all 3 teams, so a single approval satisfies every team requirement. `codex-for-yamada-ui` belongs to `Prime`, `claude-for-yamada-ui` belongs to `Standard`, and `composer-for-yamada-ui` belongs to `Growth`.
- **Require review from Code Owners**: Approval from a Code Owner listed in [CODEOWNERS](../../.github/CODEOWNERS) is required.
- **Require conversation resolution before merging**: All review comments and conversations must be resolved before merging.

### Status Checks

- **Require status checks to pass**: All of the following required status checks must be green.
  - Prettier
  - TypeScript
  - ESLint
  - Changeset
  - Test / Chromium 1/4
  - Test / Chromium 2/4
  - Test / Chromium 3/4
  - Test / Chromium 4/4
  - Test / Firefox
  - Test / Webkit
- **Require branches to be up to date before merging**: The PR branch must be up to date with the base branch. Update it before merging if it is behind.
