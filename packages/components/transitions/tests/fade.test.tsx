import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { useState } from "react"
import { Fade } from "../src"

describe("<Fade />", () => {
  test("passes a11y test", async () => {
    await a11y(<Fade />)
  })

  test("toggles visibility on open change", async () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>button</button>
          <Fade open={isOpen}>Fade</Fade>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    const button = await screen.findByRole("button", { name: /button/i })
    const collapse = await screen.findByText("Fade")
    expect(collapse).not.toBeVisible()

    await user.click(button)
    await waitFor(() => expect(collapse).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(collapse).not.toBeVisible())
  })

  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>button</button>
          <Fade open={isOpen} unmountOnExit>
            Fade
          </Fade>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    const button = await screen.findByRole("button", { name: /button/i })
    expect(screen.queryByText("Fade")).toBeNull()

    await user.click(button)
    await waitFor(() => expect(screen.getByText("Fade")).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(screen.queryByText("Fade")).toBeNull())
  })
})
