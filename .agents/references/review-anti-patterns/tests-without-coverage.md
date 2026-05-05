# Tests that do not increase coverage

**Diff**:

```diff
- test("sets `displayName` correctly", () => {
-   expect(ButtonGroup.Root.name).toBe("ButtonGroupRoot")
- })
-
- test("sets `className` correctly", async () => {
-   await render(<ButtonGroup.Root>...</ButtonGroup.Root>)
-   await expect.element(page.getByRole("group")).toHaveClass("ui-group")
- })
-
- test("renders HTML tag correctly", async () => {
-   await render(<ButtonGroup.Root>...</ButtonGroup.Root>)
-   expect(page.getByRole("group").element().tagName).toBe("DIV")
- })
```

**What was missed**: A reviewer asked to re-add removed assertions on the grounds of "preserving prior coverage" or "preserving the public contract", even though the PR description confirmed total coverage was unchanged. Re-adding the assertions would have reintroduced exactly the redundancy the PR aimed to eliminate.

**Rule of thumb**: A test that does not increase coverage is not worth writing. Before asking that a test be added or re-added, ask:

1. What line, branch, or behavior does this test exercise that nothing else in the suite covers? If you cannot point to a concrete coverage delta, do not ask for it.
2. Did the PR description explicitly justify a removal with coverage numbers? If yes, the burden shifts to the reviewer to identify a concrete coverage gap, not restate that the assertion existed.
3. Is the assertion reading a constant or a value already exercised by another rendering test (e.g., `displayName`, hardcoded `className`, fixed tag, identity props)? Constants and tautologies do not need their own tests.

"Preserving prior coverage" / "preserving the public contract" is not a justification when prior coverage was already tautological.
