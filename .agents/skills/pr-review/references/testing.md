# Testing

Testing conventions for yamada-ui.

## Contents

- [a11y test](#a11y-test)
- [displayName test](#displayname-test)
- [className test (BEM)](#classname-test-bem)
- [HTML tag test](#html-tag-test)
- [data-\* attribute tests](#data--attribute-tests)
- [Test imports from #test alias](#test-imports-from-test-alias)
- [Composite component displayName tests](#composite-component-displayname-tests)

---

## a11y test

Include an accessibility test as the first test case.

Incorrect:

```tsx
// ❌ Missing a11y test
describe("<Button />", () => {
  test("renders correctly", () => {
    render(<Button>test</Button>)
    expect(screen.getByText("test")).toBeInTheDocument()
  })
})
```

Correct:

```tsx
describe("<Button />", () => {
  test("renders component correctly", async () => {
    await a11y(<Button>test</Button>)
  })
})
```

**Key points**:

- `a11y()` runs axe-core based accessibility violation checks
- Requires `async/await`
- Must be placed as the first test case

---

## displayName test

Test that the component's `displayName` is set correctly.

Incorrect:

```tsx
// ❌ Missing displayName test
describe("<Button />", () => {
  test("renders component correctly", async () => {
    await a11y(<Button>test</Button>)
  })
  // displayName test is missing
})
```

Correct:

```tsx
describe("<Button />", () => {
  test("renders component correctly", async () => {
    await a11y(<Button>test</Button>)
  })

  test("sets `displayName` correctly", () => {
    expect(Button.displayName).toBe("Button")
  })
})
```

---

## className test (BEM)

Test that the component's BEM class name is set correctly.

Incorrect:

```tsx
// ❌ Missing className test or not following BEM convention
test("has correct class", () => {
  render(<Button>test</Button>)
  expect(screen.getByText("test")).toHaveClass("button")
})
```

Correct:

```tsx
test("sets `className` correctly", () => {
  render(<Button>test</Button>)
  expect(screen.getByText("test")).toHaveClass("ui-button")
})
```

**BEM class name patterns**:

- `ui-button` (Block)
- `ui-accordion` (Block)
- `ui-accordion__item` (Element)

---

## HTML tag test

Test that the component renders the correct HTML tag.

Incorrect:

```tsx
// ❌ Missing HTML tag test
```

Correct:

```tsx
test("renders HTML tag correctly", () => {
  render(<Button>test</Button>)
  expect(screen.getByText("test").tagName).toBe("BUTTON")
})
```

**Key points**:

- `tagName` is uppercase (`"BUTTON"`, `"DIV"`, `"INPUT"`, etc.)

---

## data-\* attribute tests

Test that the component's `data-*` attributes are set correctly.

Incorrect:

```tsx
// ❌ Missing data-* attribute test
test("works when loading", () => {
  render(<Button loading>Hello</Button>)
  // No test for data-loading
})
```

Correct:

```tsx
test("has the proper `data-*` attributes", () => {
  const { getByTestId, rerender } = render(
    <Button data-testid="btn">Hello</Button>,
  )

  const button = getByTestId("btn")

  expect(button).not.toHaveAttribute("data-loading", "")
  expect(button).not.toHaveAttribute("data-active", "")

  // loading sets data-loading=""
  rerender(<Button loading>Hello</Button>)
  expect(button).toHaveAttribute("data-loading", "")

  // active sets data-active=""
  rerender(<Button active>Hello</Button>)
  expect(button).toHaveAttribute("data-active", "")
})
```

**Commonly tested data-\* attributes**:

- `data-active`
- `data-loading`
- `data-checked`
- `data-indeterminate`
- `data-disabled`
- `data-orientation`

---

## Test imports from #test alias

Import test utilities from the `#test` alias.

Incorrect:

```tsx
// ❌ Importing directly from individual packages
import { render, screen } from "@testing-library/react"
import { axe } from "vitest-axe"
```

Correct:

```tsx
import { a11y, render, screen } from "#test"
```

**Utilities provided by `#test`**:

- `a11y` — Accessibility testing
- `render` — Component rendering (includes `user` property)
- `screen` — DOM queries
- `fireEvent`, `waitFor`, `act`, and other testing-library utilities

**`#test/browser`** — For Vitest browser mode (used by Badge, Carousel, etc.):

```tsx
import { page, render } from "#test/browser"
```

---

## Composite component displayName tests

Test `displayName` for all subcomponents in a composite component.

Incorrect:

```tsx
// ❌ Only testing the root component
test("sets `displayName` correctly", () => {
  expect(AccordionRoot.displayName).toBe("AccordionRoot")
})
```

Correct:

```tsx
test("sets `displayName` correctly", () => {
  expect(AccordionRoot.displayName).toBe("AccordionRoot")
  expect(AccordionItem.displayName).toBe("AccordionItem")
  expect(AccordionButton.displayName).toBe("AccordionButton")
  expect(AccordionPanel.displayName).toBe("AccordionPanel")
  expect(AccordionIcon.displayName).toBe("AccordionIcon")
})
```
