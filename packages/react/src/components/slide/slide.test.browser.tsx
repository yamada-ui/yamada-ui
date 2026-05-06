import { useState } from "react"
import { vi } from "vitest"
import { page, render } from "#test/browser"
import { Slide } from "./slide"

describe("<Slide />", () => {
  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen(!open)}>button</button>
          <Slide open={open} unmountOnExit>
            Slide
          </Slide>
        </>
      )
    }

    const { container, user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    expect(container.querySelector(".ui-slide")).toBeNull()

    await user.click(button)
    expect(container.querySelector(".ui-slide")).not.toBeNull()
    await expect.element(page.getByText("Slide")).toBeVisible()

    await user.click(button)
    await vi.waitFor(() => {
      expect(container.querySelector(".ui-slide")).toBeNull()
    })
  })
})
