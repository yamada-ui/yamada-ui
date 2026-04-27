import { useState } from "react"
import { a11y, page, render } from "#test/browser"
import { Fade } from "./fade"

describe("<Fade />", () => {
  test("renders component correctly", async () => {
    await a11y(<Fade />)
  })

  test("sets `displayName` correctly", () => {
    expect(Fade.displayName).toBe("Fade")
  })

  test("sets `className` correctly", async () => {
    await render(<Fade>Fade</Fade>)

    await expect.element(page.getByText("Fade")).toHaveClass("ui-fade")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Fade>Fade</Fade>)

    expect(page.getByText("Fade").element().tagName).toBe("DIV")
  })

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
