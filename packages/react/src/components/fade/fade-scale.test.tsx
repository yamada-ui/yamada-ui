import { useState } from "react"
import { a11y, render, screen, waitFor } from "../../../test"
import { FadeScale } from "./fade-scale"

describe("<FadeScale />", () => {
  test("passes a11y test", async () => {
    await a11y(<FadeScale />)
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
