import type { KeyframeIdent } from "../../core"
import { page, render } from "#test/browser"
import { useState } from "react"
import { BoxIcon } from "../icon"
import { Rotate } from "./"

describe("<Rotate />", () => {
  test("should render Rotate with value and onChange", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<KeyframeIdent>("to")

      return (
        <Rotate
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
})
