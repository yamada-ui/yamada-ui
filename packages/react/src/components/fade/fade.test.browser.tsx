import { page, render } from "#test/browser"
import { useState } from "react"
import { Fade } from "./fade"

describe("<Fade />", () => {
  test("toggles visibility on open change", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen(!open)}>button</button>
          <Fade open={open}>Fade</Fade>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    const fade = page.getByText("Fade")
    const getOpacity = () => getComputedStyle(fade.element()).opacity
    expect(getOpacity()).toBe("0")

    await user.click(button)
    await vi.waitFor(() => {
      expect(getOpacity()).toBe("1")
    })

    await user.click(button)
    await vi.waitFor(() => {
      expect(getOpacity()).toBe("0")
    })
  })

  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen(!open)}>button</button>
          <Fade open={open} unmountOnExit>
            Fade
          </Fade>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    expect(page.getByText("Fade").query()).toBeNull()

    await user.click(button)
    await expect.element(page.getByText("Fade")).toBeVisible()

    await user.click(button)
    await vi.waitFor(() => {
      expect(page.getByText("Fade").query()).toBeNull()
    })
  })
})
