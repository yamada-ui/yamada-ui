import { a11y, page, render } from "#test/browser"
import { useState } from "react"
import { vi } from "vitest"
import { SlideFade } from "./slide-fade"

describe("<SlideFade />", () => {
  test("renders component correctly", async () => {
    await a11y(<SlideFade />)
  })

  test("sets `displayName` correctly", () => {
    expect(SlideFade.displayName).toBe("SlideFade")
  })

  test("sets `className` correctly", async () => {
    await render(<SlideFade>SlideFade</SlideFade>)
    await expect
      .element(page.getByText("SlideFade"))
      .toHaveClass("ui-slide-fade")
  })

  test("renders HTML tag correctly", async () => {
    await render(<SlideFade>SlideFade</SlideFade>)
    expect(page.getByText("SlideFade").element().tagName).toBe("DIV")
  })

  test("fade-in and fade-out work correctly", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <SlideFade open={open}>SlideFade</SlideFade>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    const slideFade = page.getByText("SlideFade")
    const getOpacity = () => getComputedStyle(slideFade.element()).opacity
    expect(getOpacity()).toBe("0")

    await user.click(button)
    await vi.waitFor(() => expect(getOpacity()).toBe("1"))

    await user.click(button)
    await vi.waitFor(() => expect(getOpacity()).toBe("0"))
  })

  test("fade-in and fade-out work correctly when `initial` is passed to an `initial` property", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <SlideFade initial="initial" open={open}>
            SlideFade
          </SlideFade>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    const slideFade = page.getByText("SlideFade")
    const getOpacity = () => getComputedStyle(slideFade.element()).opacity
    expect(getOpacity()).toBe("0")

    await user.click(button)
    await vi.waitFor(() => expect(getOpacity()).toBe("1"))

    await user.click(button)
    await vi.waitFor(() => expect(getOpacity()).toBe("0"))
  })

  test("default offset is set correctly", async () => {
    await render(<SlideFade>SlideFade</SlideFade>)

    const slideFade = page.getByText("SlideFade").element()

    expect(slideFade.getAttribute("style")).toContain("translateY(8px)")
  })

  test("applies offsetX correctly", async () => {
    await render(<SlideFade offsetX={10}>SlideFade</SlideFade>)

    const slideFade = page.getByText("SlideFade").element()

    expect(slideFade.getAttribute("style")).toContain("translateX(10px)")
    expect(slideFade.getAttribute("style")).toContain("translateY(8px)")
  })

  test("applies offsetY correctly", async () => {
    await render(<SlideFade offsetY={10}>SlideFade</SlideFade>)

    const slideFade = page.getByText("SlideFade").element()

    expect(slideFade.getAttribute("style")).toContain("translateY(10px)")
  })

  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <SlideFade open={open} unmountOnExit>
            SlideFade
          </SlideFade>
        </>
      )
    }

    const { container, user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    expect(container.textContent).not.toContain("SlideFade")

    await user.click(button)
    await expect.element(page.getByText("SlideFade")).toBeVisible()

    await user.click(button)
    await vi.waitFor(() => {
      expect(container.textContent).not.toContain("SlideFade")
    })
  })
})
