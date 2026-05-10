# Test Categorization Rules

When writing a test in `packages/react`, choose the runtime environment by file name. [`packages/react/vitest.config.ts`](/packages/react/vitest.config.ts) routes each test according to its file name.

For how to write tests in each environment, see [Browser Testing](./browser-testing.md) and [Unit Testing](./unit-testing.md).

## File Names and Environments

| File name                  | Environment                 | Import          |
| -------------------------- | --------------------------- | --------------- |
| `*.test.{ts,tsx}`          | jsdom                       | `#test`         |
| `*.test.browser.{ts,tsx}`  | chromium / firefox / webkit | `#test/browser` |
| `*.test.chromium.{ts,tsx}` | chromium                    | `#test/browser` |
| `*.test.firefox.{ts,tsx}`  | firefox                     | `#test/browser` |
| `*.test.webkit.{ts,tsx}`   | webkit                      | `#test/browser` |

## How to Choose

- Choose browser mode (`*.test.browser.{ts,tsx}`) when any of the following applies:
  - Logic that reads the DOM. For example, `getBoundingClientRect`, `getComputedStyle`, `scrollTop`, `scrollHeight`, `offsetHeight`, etc.
  - Logic that handles events. For example, `onClick`, `onPointerDown`, etc.
  - Logic that depends on observers. For example, `IntersectionObserver`, `ResizeObserver`, etc.
  - Logic that depends on focus operations. For example, `focus`, `blur`, `activeElement`, etc.
  - Logic that uses browser APIs. For example, `drag`, `clipboard`, `canvas`, `FileReader`, etc.
- When the component or hook logic branches on `isWebKit`, `isSafari`, `isFirefox`, or `isChrome`, or the assertion differs by engine, choose `*.test.{webkit,firefox,chromium}.{ts,tsx}`.
- Otherwise, when the assertion just checks element attributes (`displayName`, `className`, `role`, `aria-*`) and similar, choose jsdom (`*.test.{ts,tsx}`).
