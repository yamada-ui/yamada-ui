import { a11y, page, render } from "#test/browser"
import { useState } from "react"
import { vi } from "vitest"
import { Slide, slideVariants } from "./slide"

describe("<Slide />", () => {
  test("renders component correctly", async () => {
    await a11y(<Slide />)
  })

  test("sets `displayName` correctly", () => {
    expect(Slide.displayName).toBe("Slide")
  })

  test("sets `className` correctly", async () => {
    await render(<Slide>Slide</Slide>)
    await expect.element(page.getByText("Slide")).toHaveClass("ui-slide")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Slide>Slide</Slide>)
    expect(page.getByText("Slide").element().tagName).toBe("DIV")
  })

  test("applies default styles correctly", async () => {
    await render(<Slide>Slide</Slide>)

    const slide = page.getByText("Slide").element()
    expect(slide.getAttribute("style")).toContain("translateX(100%)")
  })

  test("applies styles correctly for block-start placement", async () => {
    await render(<Slide placement="block-start">Slide</Slide>)

    const slide = page.getByText("Slide").element()
    expect(slide.getAttribute("style")).toContain("translateY(-100%)")
  })

  test("applies styles correctly for inline-start placement", async () => {
    await render(<Slide placement="inline-start">Slide</Slide>)

    const slide = page.getByText("Slide").element()
    expect(slide.getAttribute("style")).toContain("translateX(-100%)")
  })

  test("applies styles correctly for inline-end placement", async () => {
    await render(<Slide placement="inline-end">Slide</Slide>)

    const slide = page.getByText("Slide").element()
    expect(slide.getAttribute("style")).toContain("translateX(100%)")
  })

  test("applies styles correctly for block-end placement", async () => {
    await render(<Slide placement="block-end">Slide</Slide>)

    const slide = page.getByText("Slide").element()
    expect(slide.getAttribute("style")).toContain("translateY(100%)")
  })

  describe("slideVariants", () => {
    test("returns default animation props when placement is undefined", () => {
      const enterFn = slideVariants.enter as unknown as (custom: {
        [key: string]: unknown
      }) => { [key: string]: unknown }
      const exitFn = slideVariants.exit as unknown as (custom: {
        [key: string]: unknown
      }) => { [key: string]: unknown }

      const enterResult = enterFn({ placement: undefined })
      const exitResult = exitFn({ placement: undefined })

      expect(enterResult).not.toHaveProperty("x")
      expect(enterResult).not.toHaveProperty("y")
      expect(exitResult).not.toHaveProperty("x")
      expect(exitResult).not.toHaveProperty("y")
    })
  })

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
    expect(container.textContent).not.toContain("Slide")

    await user.click(button)
    await expect.element(page.getByText("Slide")).toBeVisible()

    await user.click(button)
    await vi.waitFor(() => {
      expect(container.textContent).not.toContain("Slide")
    })
  })
})
