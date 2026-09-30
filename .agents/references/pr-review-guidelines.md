# Review Guidelines

## Principles

A review is about **making sure the overall health of the codebase improves over time**. Every part of the review process exists for this purpose.

To achieve this, we need to balance a number of trade-offs.
If pull requests are not merged into the codebase, the codebase will never improve. If reviewers keep rejecting changes, developers will lose the motivation to make future improvements. At the same time, reviewers have a responsibility not to let the overall health of the codebase decline.
Reviewers also take ownership of and responsibility for the code they review. They must make sure that all of the following eight perspectives are satisfied.
This leads to the following rule as the expected standard for reviews.

**In general, reviewers should prefer approving a change if it clearly improves the health of the codebase, even if the change is not perfect**.

This is the most important principle in all review guidelines.

Of course, this has limits. For example, if a change adds something the codebase does not need, the reviewer can reject approval even if the code is well designed.
The important point here is that there is no such thing as "perfect" code. There is only "better" code. Reviewers should not require every detail of a change to be polished before giving approval. Instead, they should balance the importance of the requested changes against the need to move forward. Reviewers should aim for continuous improvement, not perfection.

## Eight Perspectives

When reviewing, each of the following eight perspectives is **very important** for making sure the overall health of the codebase does not decline.

### 1. Necessity

Is the change truly necessary? Is it redundant, unnecessary, or noisy? Does it follow the YAGNI principle?

### 2. Correctness

Is the logic correct? Are there any overlooked edge cases or regressions?

### 3. Consistency

Does it follow existing naming, style, and patterns? Does it follow the DRY principle?

### 4. Readability and maintainability

Has the code become overly complex? Is it easy to read? Is it understandable to someone other than the author? Does it follow the KISS principle?

### 5. Tests

Does the change introduce a new branch, contract, observable behavior, or regression path that is not already verified by existing tests, including tests in the same file and unit tests of dependent units? Do not require tests just because files changed. If existing tests already cover the affected behavior, do not ask for unnecessary tests.

### 6. Accessibility

Are W3C-defined ARIA attributes, keyboard interactions, focus management, and screen reader support implemented appropriately?

### 7. Breaking changes

Does the change include any breaking changes? Is backward compatibility preserved?

### 8. Scope

Is the scope appropriately narrowed? Are multiple changes being bundled into one?

## Anti-Patterns

From the list of [PR Review Anti-Patterns](/.agents/references/pr-review-anti-patterns/index.md), carefully read any entries that apply to the current diff so that you **do not repeat the same mistakes**.
