import { useState } from "react"
import { a11y, render, screen, waitFor } from "../../../test"
import { ScaleFade } from "./"

describe("<ScaleFade />", () => {
  test("passes a11y test", async () => {
    await a11y(<ScaleFade />)
  })

  test("toggles visibility on open change", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <ScaleFade open={open}>ScaleFade</ScaleFade>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    const button = await screen.findByRole("button", { name: /button/i })
    const collapse = await screen.findByText("ScaleFade")
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
          <ScaleFade open={open} unmountOnExit>
            ScaleFade
          </ScaleFade>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    expect(screen.queryByText("ScaleFade")).toBeNull()

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() => expect(screen.getByText("ScaleFade")).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(screen.queryByText("ScaleFade")).toBeNull())
  })
})
