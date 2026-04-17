# PR Rules

Read the [template](../../.github/pull_request_template.md) and use its structure for the PR body. Replace the HTML comments with actual content.

- Use the same format as the commit message for the title.
- Always include `Closes #<issue-number>`.
- Clearly state whether this is a breaking change.
- The template includes an "AI used" section. If AI generated the PR, uncheck "I did not use AI" and check "I checked the generated content before submitting."

After creating a PR, the [Quality](../../.github/workflows/quality.yml) GitHub Action runs automatically to validate format, lint, typecheck, and tests. Monitor it to ensure there are no issues. If problems are found, fix them and resubmit.
