import type { KeyframeIdent } from "../../core"
import { useState } from "react"
import { page, render } from "#test/browser"
import { Airy } from "."

describe("<Airy />", () => {
  test("should render Airy with value and onChange", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<KeyframeIdent>("to")

      return <Airy from="ON" to="OFF" value={value} onChange={onChange} />
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-value", "to")

    await user.click(button)

    await expect.element(button).toHaveAttribute("data-value", "from")
  })

  test("should be read only", async () => {
    const { user } = await render(<Airy from="ON" readOnly to="OFF" />)

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-readonly")
    await expect.element(button).toHaveAttribute("data-value", "from")
    await expect.element(button).toHaveTextContent("ON")

    await user.click(button)

    await expect.element(button).toHaveAttribute("data-value", "from")
    await expect.element(button).toHaveTextContent("ON")
  })
})
