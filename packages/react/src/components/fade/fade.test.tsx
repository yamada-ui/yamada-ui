import { a11y, page, render } from "#test/browser"
import { useState } from "react"
import { vi } from "vitest"
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
    const collapse = page.getByText("Fade")
    const getOpacity = () => getComputedStyle(collapse.element()).opacity
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

    const { container, user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    expect(container.textContent).not.toContain("Fade")

    await user.click(button)
    await expect.element(page.getByText("Fade")).toBeVisible()

    await user.click(button)
    await vi.waitFor(() => {
      expect(container.textContent).not.toContain("Fade")
    })
  })
})
