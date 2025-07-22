import { a11y, render, screen, waitFor } from "#test"
import { useState } from "react"
import { FadeScale } from "./fade-scale"

describe("<FadeScale />", () => {
  test("renders component correctly", async () => {
    await a11y(<FadeScale />)
  })

  test("sets `displayName` correctly", () => {
    expect(FadeScale.displayName).toBe("FadeScale")
  })

  test("sets `className` correctly", () => {
    render(<FadeScale>FadeScale</FadeScale>)
    expect(screen.getByText("FadeScale")).toHaveClass("ui-fade-scale")
  })

  test("renders HTML tag correctly", () => {
    render(<FadeScale>FadeScale</FadeScale>)
    expect(screen.getByText("FadeScale").tagName).toBe("DIV")
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

    const { user } = render(<TestComponent />)

    const button = await screen.findByRole("button", { name: /button/i })
    const collapse = await screen.findByText("FadeScale")
    expect(collapse).not.toBeVisible()

    await user.click(button)
    await waitFor(() => expect(collapse).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(collapse).not.toBeVisible())
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

    const { user } = render(<TestComponent />)

    expect(screen.queryByText("FadeScale")).toBeNull()

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() => expect(screen.getByText("FadeScale")).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(screen.queryByText("FadeScale")).toBeNull())
  })
})
