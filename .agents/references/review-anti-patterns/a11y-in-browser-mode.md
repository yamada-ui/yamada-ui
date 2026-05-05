# a11y in browser mode

**Diff**:

```diff
- import { a11y, page, render } from "#test/browser"
+ import { page, render } from "#test/browser"
  import { ButtonGroup } from "./"

  describe("<ButtonGroup />", () => {
-   test("renders component correctly", async () => {
-     await a11y(<ButtonGroup.Root>...</ButtonGroup.Root>)
-   })
-
    test("`attached` column style is applied correctly", async () => {
      // ...
    })
  })
```

(The `a11y` test is moved to the jsdom file `button-group.test.tsx`.)

**What was missed**: A reviewer claimed the browser-mode test file should keep at least one `a11y(...)` case because it still renders the component, framing it as "browser-runtime accessibility verification". This conflicts with `.agents/rules/test-categorization.md`: a test belongs in `*.test.browser.{ts,tsx}` only when it depends on real DOM measurement, real events, observers, focus operations, or browser-only APIs. axe-core's accessibility audit is a static DOM/attribute check that runs correctly under jsdom, so it does not satisfy any of the browser-mode criteria. Forcing `a11y` into the browser suite triples its runtime cost (chromium / firefox / webkit) for no additional signal.

**Rule of thumb**: Before asking that a test be placed in `*.test.browser.{ts,tsx}`, confirm at least one of the criteria in `test-categorization.md` actually applies:

1. Does the assertion read live layout (`getBoundingClientRect`, `getComputedStyle`, `scrollTop`, `offsetHeight`, ...)? Without that, jsdom is sufficient.
2. Does it dispatch real events, observers, focus transitions, or browser APIs (clipboard, drag, canvas, FileReader, ...)? `a11y(...)` does none of these.
3. Does the engine actually matter (`isWebKit` / `isFirefox` / `isChrome` branches, or assertions that differ per engine)? If not, multiplying the test across three engines is pure cost.

`a11y(...)` belongs in jsdom by default; only move it to browser mode when the audited tree depends on engine-specific layout that jsdom cannot evaluate.
