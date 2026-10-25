import { page } from "vitest/browser"
import { a11y, render } from "#test/browser"
import { Kbd } from "./kbd"

describe("<Kbd />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Kbd>Enter</Kbd>)
  })

  test("aligns inline keys with surrounding text", async () => {
    await render(
      <p>
        Press <Kbd>Enter</Kbd> to continue.
      </p>,
    )

    await expect
      .element(page.getByText("Enter", { exact: true }))
      .toHaveStyle({ verticalAlign: "middle" })
  })

  test("allows overriding vertical alignment", async () => {
    await render(<Kbd verticalAlign="top">Enter</Kbd>)

    await expect
      .element(page.getByText("Enter", { exact: true }))
      .toHaveStyle({ verticalAlign: "top" })
  })
})
