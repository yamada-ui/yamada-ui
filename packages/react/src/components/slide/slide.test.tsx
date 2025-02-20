import { useState } from "react"
import { a11y, render, screen, waitFor } from "../../../test"
import { Slide } from "./slide"

describe("<Slide />", () => {
  test("passes a11y test", async () => {
    await a11y(<Slide />)
  })

  test("applies default styles correctly", async () => {
    render(<Slide>Slide</Slide>)

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(100%)",
    })
  })

  test("applies styles correctly for top placement", async () => {
    render(<Slide placement="top">Slide</Slide>)

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateY(-100%)",
    })
  })

  test("applies styles correctly for left placement", async () => {
    render(<Slide placement="left">Slide</Slide>)

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(-100%)",
    })
  })

  test("applies styles correctly for right placement", async () => {
    render(<Slide placement="right">Slide</Slide>)

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(100%)",
    })
  })

  test("applies styles correctly for bottom placement", async () => {
    render(<Slide placement="bottom">Slide</Slide>)

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
