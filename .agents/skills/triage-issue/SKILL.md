---
name: triage-issue
description: Apply labels to GitHub issue. Analyze the issue, select appropriate labels, and apply the selected labels.
argument-hint: "<issue-number-or-url>"
---

You're an issue triage assistant for GitHub issues for Yamada UI. Your task is to analyze the issue and assign the appropriate label from the given list.

## Important:

- Follow all conventions in AGENTS.md. This skill defines the **workflow steps only** — do not duplicate rules already documented there.
- Use English for all comments posted on issues.

## Input:

The issue reference is: $ARGUMENTS

Parse the input:

- Full URL (e.g., `https://github.com/yamada-ui/yamada-ui/issues/123`) → extract the numeric issue number
- `#123` or bare `123` → strip `#` and use as-is

Validate that the resolved value is a positive integer. If `$ARGUMENTS` is empty or not a valid issue reference, ask the user to provide the issue number or URL before proceeding.

The repository is always `yamada-ui/yamada-ui`.

---

## STEP 1: Fetch the list of labels

Run `gh label list --repo yamada-ui/yamada-ui` to fetch the list of labels available in this repository.

## STEP 2: Get context about the issue

- Run `gh issue view <issue-number> --repo yamada-ui/yamada-ui` to retrieve the current issue's details
- Extract 2–4 keywords from the issue title and description (e.g., component name, error message, feature keyword), then run: `gh search issues "<keywords>" --repo yamada-ui/yamada-ui --limit 10` to search for similar Issues that can serve as references for proper label classification

## STEP 3: Analyze the issue content

Analyze the issue. Considering:

- The issue title and description
- The type of issue (bug report, feature request, question, etc.)
- Technical areas mentioned
- Severity or priority indicators
- User impact
- Components affected

If the issue's type is **Bug** → Proceed to STEP 4
If the issue's type is NOT **Bug** → Proceed to STEP 5

## STEP 4: Validate Bug(if needed)

Performe the following validations to judge whether the issue is bug or not.

### Validation criteria — treat as a real bug only if ALL of the following are met:

1. **Reproducible malfunction** — The expected and actual behaviors are clearly described, and the discrepancy can reasonably be attributed to a defect in the Yamada UI
2. **Not an intentional specification** — The same behavior is not described as "by design" in the documentation, existing issues, or PRs
3. **Not user-caused** — The root cause is not incorrect usage, misconfiguration, or environment-specific factors (e.g., browser or OS quirks)

To verify criterion 2, fetch the Yamada UI documentation via [llms.txt](https://yamada-ui.com/llms.txt) and check whether the reported behavior matches the documented specification of the relevant component or API.

### If determined NOT to be a bug:

- Before closing, add a comment via `gh issue comment <issue-number> --repo yamada-ui/yamada-ui --body "<comment>"`. The comment should include:
  - Why it was determined not to be a bug (with specific reasoning)
  - Correct usage or workarounds, if applicable
  - Links to relevant documentation, if applicable
- Close the issue with `gh issue close <issue-number> --repo yamada-ui/yamada-ui --reason "not planned"`
- **DO NOT proceed to STEP 5 or beyond**

### If determined to be a bug, or if the determination is unclear:

Proceed to STEP 5.

## STEP 5: Select appropriate labels

Select appropriate labels from the available labels list provided STEP 1. Considering:

- Choose labels that accurately reflect the issue's nature
- Be specific but comprehensive
- Special labels
  - **duplicate**: If a nearly identical issue (same component, same symptom, same root cause) already exists among the similar issues found in STEP 2
  - **good first issue**: suitable for beginners. Considering:
    - The fix or change is localized to a small area of the codebase
    - The expected solution is clearly defined and does not require deep architectural knowledge
    - A similar fix or PR already exists in the repository as a reference

## STEP 6: Apply the selected labels

Apply the labels selected in STEP 5.

- Run `gh issue edit <issue-number> --repo yamada-ui/yamada-ui --add-label <label-name>` to apply the labels
  - In case of multiple labels: `gh issue edit <issue-number> --repo yamada-ui/yamada-ui --add-label "label1,label2,..."`
- DO NOT post any explanatory or judgmental comments on the issue when applying labels
- If no clear label could be determined in STEP 5, post a comment asking for the specific information needed to classify the issue — do not assign any label: `gh issue comment <issue-number> --repo yamada-ui/yamada-ui --body "<comment>"`
- After applying the labels, run `gh issue edit <issue-number> --repo yamada-ui/yamada-ui --remove-label triage` to remove the `triage` label if it is currently applied to the issue

---

## IMPORTANT GUIDELINES:

- Be thorough in your analysis
- Only select labels from the list provided in STEP 1
