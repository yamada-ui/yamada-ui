# PR Rules

Read the [template](../../.github/pull_request_template.md) and use its structure for the PR body. Replace the HTML comments with actual content.

- Use the same format as the commit message for the title.
- Include `Closes #<issue-number>` when the PR resolves a tracked issue.
- In principle, PRs should have a linked issue. However, an issue link is not required for small maintenance changes, follow-up fixes, dependency/workflow adjustments, or when the maintainer explicitly instructs to create a PR without an issue.
- If no issue is linked, briefly explain why in the PR body.
- Clearly state whether this is a breaking change.
- The template includes an "AI used" section. If AI generated the PR, uncheck "I did not use AI" and check "I checked the generated content before submitting."

After creating a PR, the [Quality](../../.github/workflows/quality.yml) GitHub Action runs automatically to validate format, lint, typecheck, and tests. Monitor it to ensure there are no issues. If problems are found, fix them and resubmit.
