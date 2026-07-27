# Edit Guidelines

Follow these rules whenever you edit files in this repository.

## Do not add unnecessary tests

Do not add or update tests just because files were changed. Tests are required only when the change introduces a new branch, contract, observable behavior, or regression path that is not already verified by existing tests in the same package or dependent units. If existing tests already cover the affected behavior, do not add unnecessary tests.

## Accessibility is required

All components must support ARIA attributes, keyboard navigation, and screen readers. Report any concerns.

## Do not bundle multiple fixes

If you encounter a separate issue while working on a fix, do not fix it in the same PR. Create a separate issue and submit a separate PR.

## Do not write comments

JSDoc and comments that suppress linter or formatter errors are allowed, but all other comments are not. Programs that require comments to be understood should have their structure questioned. Programs must be simple and immediately understandable by reading the code itself.
