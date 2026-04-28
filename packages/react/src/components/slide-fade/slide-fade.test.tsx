import { useState } from "react"
import { a11y, page, render } from "#test/browser"
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
    await expect.element(slideFade).toHaveStyle({ opacity: "0" })

    await user.click(button)
    await expect.element(slideFade).toHaveStyle({ opacity: "1" })

    await user.click(button)
    await expect.element(slideFade).toHaveStyle({ opacity: "0" })
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
    await expect.element(slideFade).toHaveStyle({ opacity: "0" })

    await user.click(button)
    await expect.element(slideFade).toHaveStyle({ opacity: "1" })

    await user.click(button)
    await expect.element(slideFade).toHaveStyle({ opacity: "0" })
  })

  test("default offset is set correctly", async () => {
    await render(<SlideFade>SlideFade</SlideFade>)

    await expect
      .element(page.getByText("SlideFade"))
      .toHaveStyle("transform: matrix(1, 0, 0, 1, 0, 8)")
  })

  test("applies offsetX correctly", async () => {
    await render(<SlideFade offsetX={10}>SlideFade</SlideFade>)

    await expect
      .element(page.getByText("SlideFade"))
      .toHaveStyle("transform: matrix(1, 0, 0, 1, 10, 8)")
  })

  test("applies offsetY correctly", async () => {
    await render(<SlideFade offsetY={10}>SlideFade</SlideFade>)

    await expect
      .element(page.getByText("SlideFade"))
      .toHaveStyle("transform: matrix(1, 0, 0, 1, 0, 10)")
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

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    await expect
      .element(page.getByText("SlideFade").query())
      .not.toBeInTheDocument()

    await user.click(button)
    await expect.element(page.getByText("SlideFade")).toBeVisible()

    await user.click(button)
    await expect
      .element(page.getByText("SlideFade").query())
      .not.toBeInTheDocument()
  })
})
