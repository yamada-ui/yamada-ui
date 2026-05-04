# Browser Testing Rules

Follow these rules when writing Vitest browser tests in `packages/react`. Browser tests live in files whose name matches one of:

- `*.test.browser.{ts,tsx}`: runs against every browser (chromium, firefox, webkit). Use this when the behavior must hold across every supported engine.
- `*.test.chromium.{ts,tsx}`: runs only against Chromium. Use this when the file or component branches on `isChrome` / Chrome-specific behavior.
- `*.test.firefox.{ts,tsx}`: runs only against Firefox. Use this when the file or component branches on `isFirefox` / Firefox-specific behavior.
- `*.test.webkit.{ts,tsx}`: runs only against WebKit. Use this when the file or component branches on `isWebKit` / `isSafari` / Safari-specific behavior.

These files import from `#test/browser`. Plain `*.test.{ts,tsx}` files run under jsdom and import from `#test`; skip this rule for those.

## Core Principles

- Tests must resemble how real users interact with the component.
- Prefer locator APIs such as `expect.element` over hand-written `waitFor` / `expect.poll` around raw DOM.
- Accessibility is required for every interactive component.

## Interactions

### Use `user` from `render()` — not `fireEvent`

#### DO NOT

```ts
fireEvent.click(screen.getByRole("button", { name: "Save" }))
```

`fireEvent` dispatches a single synthetic event. Real browsers fire `pointerdown` → `mousedown` → `focus` → `pointerup` → `mouseup` → `click`. Skipping that sequence hides bugs in focus handling, `:focus-visible`, pointer capture, and IME.

#### DO

```ts
const { user } = await render(<Foo />)
await user.click(page.getByRole("button", { name: "Save" }))
```

`user.click` goes through CDP/WebDriver and replays the full event sequence, so assertions against focus, hover, and pointer state hold.

### Drive keyboard and pointer flows through `user`

#### DO NOT

```ts
element.focus()
element.click()
element.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }))
```

Direct DOM calls skip the same interaction sequence that `fireEvent` skips, and they do not update the browser-side pointer state that later assertions rely on.

#### DO

```ts
await user.keyboard("{Enter}")
await user.tab()
await user.type(page.getByLabelText("Name"), "Yamada")
await user.hover(page.getByRole("button"))
```

These methods run through the real input pipeline and keep CDP pointer state consistent across the test.

### Do not wrap in `act()`

#### DO NOT

```ts
act(() => {
  render(<Foo />)
})
await act(async () => {
  await user.click(button)
})
```

`render`, `user.*`, and `fireEvent` are already wrapped inside `act`. Extra wrapping is a no-op that hides real timing issues behind a noisy stack trace.

#### DO

```ts
const { user } = await render(<Foo />)
await user.click(page.getByRole("button"))
```

Let the testing library handle `act` internally. If you see an `act` warning, the root cause is an un-awaited state update, not a missing wrapper.

## Queries

### Use `page` from `vitest/browser` — not `screen`

#### DO NOT

```ts
screen.getByRole("button", { name: "Save" })
const { getByRole } = await render(<Foo />)
getByRole("button")
```

`screen` and destructured queries return DOM nodes resolved immediately. Mixing them with `page` locators produces inconsistent waiting semantics inside the same file.

#### DO

```ts
page.getByRole("button", { name: "Save" })
```

`page` returns a locator with auto-retry, so timing-sensitive assertions converge without extra plumbing.

### Follow the Testing Library query priority

#### DO NOT

```ts
page.getByTestId("submit-button")
```

Test IDs couple the test to implementation detail and do not detect accessibility regressions. Reach for them only when no role, label, or visible text uniquely identifies the element.

#### DO

```ts
page.getByRole("button", { name: "Save" })         // 1. role
page.getByLabelText("Email")                       // 2. label
page.getByPlaceholder("you@example.com")           // 3. placeholder
page.getByText("Welcome back")                     // 4. visible text
page.getByAltText("Avatar") / page.getByTitle(...) // 5. alt / title
page.getByTestId("chart-tooltip")                  // 6. last resort
```

Roles, labels, and text are what real users (including screen-reader users) perceive. Following this priority keeps tests aligned with the user experience and surfaces a11y breakage automatically.

### Do not touch the DOM directly

#### DO NOT

```ts
container.querySelector('[role="group"]')
container.firstChild
document.querySelector('[data-testid="content"]')
```

`querySelector` resolves once, synchronously, against the current DOM. It skips retry, produces opaque failure messages, and couples the test to DOM structure that can shift when styles change.

#### DO

```ts
page.getByRole("group")
page
  .getByRole("region", { name: "Content" })
  .getByRole("button", { name: "Undo" })
```

Locators poll, auto-retry, and report which query failed. Chain locators (`parent.getByRole(...)`) to scope a query without reaching into `container`. Prefer role, label, and visible text for the parent locator too; use a test ID for scoping only when no user-facing query can identify the scope. Use `.filter({ hasText })` when you need to narrow a set of sibling matches (e.g. `page.getByRole("listitem").filter({ hasText: "Undo" })`).

## Assertions

### Wrap locator assertions with `expect.element`

#### DO NOT

```ts
expect(page.getByRole("button").element()).toBeVisible()
expect(await page.getByRole("button").isVisible()).toBe(true)
```

Both patterns unwrap the locator and snapshot the current DOM state, losing the auto-retry that makes transitions, suspense, and portals reliable.

#### DO

```ts
await expect.element(page.getByRole("button")).toBeVisible()
```

`expect.element(locator)` is sugar for `expect.poll(() => element)`. It re-queries the locator until the assertion passes or the timeout hits, so flaky timing resolves itself.

### Assert non-existence with `query()` + `not.toBeInTheDocument`

#### DO NOT

```ts
expect(page.getByRole("alert")).toBeNull()
expect(document.querySelector('[data-testid="content"]')).toBeNull()
```

`page.getBy*` returns a non-null locator, so `toBeNull()` can never prove absence. Calling `.element()` on a missing locator throws before an absence assertion can pass. `querySelector` bypasses retry — the element may appear 10 ms later and the test still reports "absent".

#### DO

```ts
await expect.element(page.getByRole("alert").query()).not.toBeInTheDocument()
```

`query()` returns a null-tolerant locator. Combined with `not.toBeInTheDocument`, the assertion auto-retries and prints a readable diff when the element unexpectedly exists.

### Use jest-dom matchers, not property reads

#### DO NOT

```ts
expect(button.disabled).toBe(true)
expect(node.className).toContain("ui-icon")
expect(container.firstChild?.nodeName).toBe("svg")
```

Property reads collapse to `true`/`false` and hide which element failed. Failure output is just `Expected: true Received: false`.

#### DO

```ts
await expect.element(page.getByRole("button")).toBeDisabled()
await expect.element(page.getByRole("img")).toHaveClass("ui-icon")
await expect
  .element(page.getByLabelText("Search icon"))
  .toHaveAttribute("viewBox", "0 0 24 24")
```

jest-dom matchers (`toBeDisabled`, `toBeChecked`, `toHaveAttribute`, `toHaveTextContent`, `toHaveFocus`, `toHaveClass`, `toHaveRole`) print diffs like `"Received element is not disabled: <button />"` that point at the actual node. When a structural SVG check is unavoidable, locate the element through an accessible label or surrounding role first, then assert the observable attribute that matters.

## Waiting

### Let the locator wait for you

#### DO NOT

```ts
await waitFor(() => expect.element(locator).toBeVisible())
await expect
  .poll(() => document.querySelector("div[data-loading]"))
  .toBeTruthy()
```

The first pattern stacks two retry loops. The second bypasses locator retry entirely by polling `document.querySelector`.

#### DO

```ts
await expect.element(page.getByText("Loaded")).toBeVisible()
await expect.element(page.getByRole("status")).toHaveAttribute("data-loading")
```

Locators already auto-retry up to the test timeout. One assertion is enough.

### No `setTimeout` / `sleep`

#### DO NOT

```ts
await new Promise((r) => setTimeout(r, 100))
```

Arbitrary delays are flaky on slow CI and waste time on fast machines. They also paper over real synchronisation bugs.

#### DO

```ts
await expect.element(page.getByRole("dialog")).toBeVisible()
```

Assert the observable outcome. If no outcome is observable from the DOM, add an observable signal (attribute, role change) to the component rather than sleeping.

### One assertion, no side effects inside `waitFor`

#### DO NOT

```ts
await waitFor(() => {
  fireEvent.keyDown(input, { key: "ArrowDown" })
  expect(onChange).toHaveBeenCalledWith("b")
  expect(onChange).toHaveBeenCalledTimes(1)
})
```

`waitFor` re-runs its callback until it passes. Side effects fire multiple times, and extra assertions widen the retry window, hiding which condition actually failed.

#### DO

```ts
await user.keyboard("{ArrowDown}")
await waitFor(() => expect(onChange).toHaveBeenCalledWith("b"))
expect(onChange).toHaveBeenCalledTimes(1)
```

Keep side effects outside, and put exactly one assertion inside `waitFor`. Use `waitFor` only when polling something that is not a locator (e.g. a spy).

## Accessibility

### New or modified browser component test files call `a11y()`

#### DO NOT

```ts
// no a11y(...) call anywhere in the file
```

Omitting `a11y` lets ARIA contract breakage through — missing labels, invalid roles, contrast regressions — that role-based queries cannot catch on their own. Add `a11y(...)` for new browser component test files and for modified browser component test files when the edited coverage renders a component. Existing browser component tests without `a11y(...)` do not need unrelated migration in the same change, and `renderHook`-only tests are outside this requirement unless they render component DOM.

#### DO

```ts
test("passes a11y checks", async () => {
  await a11y(<Foo />)
})

test("passes a11y checks when open", async () => {
  await a11y(<Foo defaultOpen />)
})
```

At minimum, cover the default state. For components whose accessible tree changes with state (dialogs, menus, disclosures), add a case for each meaningful state. Accessibility is a project-level requirement (`CLAUDE.md` → Critical Rules).
