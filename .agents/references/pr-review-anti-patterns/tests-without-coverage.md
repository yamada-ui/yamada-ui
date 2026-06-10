# Tests that do not increase coverage

**Example**: [PR #7287](https://github.com/yamada-ui/yamada-ui/pull/7287) - "test(button): recategorize and clean up browser tests"

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

## Call-site tests for an already-tested utility

**Example**: Switching `{ ...contextProps, ...props }` to `mergeProps(contextProps, props)()` at multiple call sites, then being asked to add per-call-site tests for className merging, event chaining, and ref composition.

**What was missed**: `mergeProps` is itself fully tested in its own suite. The contract (cx for className, handlerAll for events, mergeRefs for ref, user-wins for plain fields) is verified there. A call site that simply adopts the utility introduces no new branch or behavior — coverage delta is zero. Demanding per-call-site repetition of the utility's own contract adds noise without guarding anything new.

**Rule of thumb**: Before asking for a test at a call site, ask:

4. Is the behavior being tested already verified by the utility's own test suite? If yes, the call site inherits that coverage — no additional test is needed unless the caller wraps the call in new logic that the utility does not cover.
5. Would the proposed test fail even if the call site were left unchanged (i.e., still using the old spread pattern)? If yes, it tests the utility, not the caller — it belongs in the utility's suite, not the caller's.

A call site that mechanically delegates to a well-tested utility is not a new regression path.
