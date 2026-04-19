import { a11y, page, render } from "#test/browser"
import { useState } from "react"
import { vi } from "vitest"
import { FadeScale } from "./fade-scale"

describe("<FadeScale />", () => {
  test("renders component correctly", async () => {
    await a11y(<FadeScale />)
  })

  test("sets `displayName` correctly", () => {
    expect(FadeScale.displayName).toBe("FadeScale")
  })

  test("sets `className` correctly", async () => {
    await render(<FadeScale>FadeScale</FadeScale>)
    await expect
      .element(page.getByText("FadeScale"))
      .toHaveClass("ui-fade-scale")
  })

  test("renders HTML tag correctly", async () => {
    await render(<FadeScale>FadeScale</FadeScale>)
    expect(page.getByText("FadeScale").element().tagName).toBe("DIV")
  })

  test("toggles visibility on open change", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <FadeScale open={open}>FadeScale</FadeScale>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    const collapse = page.getByText("FadeScale")
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

  test("applies reverse={false} exit correctly", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <FadeScale open={open} reverse={false}>
            FadeScale
          </FadeScale>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    const fadeScale = page.getByText("FadeScale")
    const getOpacity = () => getComputedStyle(fadeScale.element()).opacity
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
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <FadeScale open={open} unmountOnExit>
            FadeScale
          </FadeScale>
        </>
      )
    }

    const { container, user } = await render(<TestComponent />)

    expect(container.textContent).not.toContain("FadeScale")

    const button = page.getByRole("button", { name: /button/i })

    await user.click(button)
    await expect.element(page.getByText("FadeScale")).toBeVisible()

    await user.click(button)
    await vi.waitFor(() => {
      expect(container.textContent).not.toContain("FadeScale")
    })
  })
})
