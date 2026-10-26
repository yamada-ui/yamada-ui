import { page } from "vitest/browser"
import { render } from "#test/browser"
import { Code } from "./code"

describe("<Code />", () => {
  test("aligns inline code with surrounding text", async () => {
    await render(
      <p>
        Check <Code>player</Code> to continue.
      </p>,
    )

    await expect
      .element(page.getByText("player", { exact: true }))
      .toHaveStyle({ verticalAlign: "middle" })
  })

  test("allows overriding vertical alignment", async () => {
    await render(<Code verticalAlign="top">player</Code>)

    await expect
      .element(page.getByText("player", { exact: true }))
      .toHaveStyle({ verticalAlign: "top" })
  })
})
