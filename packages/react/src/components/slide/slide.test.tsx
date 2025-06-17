import { useState } from "react"
import { a11y, render, screen, waitFor } from "../../../test"
import { Slide } from "./slide"

describe("<Slide />", () => {
  test("passes a11y test", async () => {
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
