import { a11y, render, screen, waitFor } from "#test"
import { useState } from "react"
import { Slide, slideVariants } from "./slide"

describe("<Slide />", () => {
  test("renders component correctly", async () => {
    await a11y(<Slide />)
  })

  test("sets `displayName` correctly", () => {
    expect(Slide.displayName).toBe("Slide")
  })

  test("sets `className` correctly", () => {
    render(<Slide>Slide</Slide>)
    expect(screen.getByText("Slide")).toHaveClass("ui-slide")
  })

  test("renders HTML tag correctly", () => {
    render(<Slide>Slide</Slide>)
    expect(screen.getByText("Slide").tagName).toBe("DIV")
  })

  test("applies default styles correctly", async () => {
    render(<Slide>Slide</Slide>)

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(100%)",
    })
  })

  test("applies styles correctly for block-start placement", async () => {
    render(<Slide placement="block-start">Slide</Slide>)

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateY(-100%)",
    })
  })

  test("applies styles correctly for inline-start placement", async () => {
    render(<Slide placement="inline-start">Slide</Slide>)

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(-100%)",
    })
  })

  test("applies styles correctly for inline-end placement", async () => {
    render(<Slide placement="inline-end">Slide</Slide>)

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(100%)",
    })
  })

  test("applies styles correctly for block-end placement", async () => {
    render(<Slide placement="block-end">Slide</Slide>)

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({ transform: "translateY(100%)" })
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

    const { user } = render(<TestComponent />)

    const button = await screen.findByRole("button", { name: /button/i })
    expect(screen.queryByText("Slide")).toBeNull()

    await user.click(button)
    await waitFor(() => expect(screen.getByText("Slide")).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(screen.queryByText("Slide")).toBeNull())
  })
})
