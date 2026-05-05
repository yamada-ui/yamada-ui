import type { KeyframeIdent } from "../../core"
import { useState } from "react"
import { page, render } from "#test/browser"
import { BoxIcon } from "../icon"
import { Flip } from "./"

describe("<Flip />", () => {
  test("toggles `data-value` on user click", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<KeyframeIdent>("to")

      return (
        <Flip
          from={<BoxIcon />}
          to={<BoxIcon />}
          value={value}
          onChange={onChange}
        />
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-value", "to")

    await user.click(button)

    await expect.element(button).toHaveAttribute("data-value", "from")
  })

  test("does not toggle when `readOnly`", async () => {
    const { user } = await render(
      <Flip from={<BoxIcon />} readOnly to={<BoxIcon />} />,
    )

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-value", "from")

    await user.click(button)
    await expect.element(button).toHaveAttribute("data-value", "from")
  })
})
