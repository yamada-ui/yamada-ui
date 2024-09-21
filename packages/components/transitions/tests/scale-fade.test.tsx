import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { useState } from "react"
import { ScaleFade } from "../src"

describe("<ScaleFade />", () => {
  test("passes a11y test", async () => {
    await a11y(<ScaleFade />)
  })

  test("toggles visibility on isOpen change", async () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>button</button>
          <ScaleFade isOpen={isOpen}>ScaleFade</ScaleFade>
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
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>button</button>
          <ScaleFade isOpen={isOpen} unmountOnExit>
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
