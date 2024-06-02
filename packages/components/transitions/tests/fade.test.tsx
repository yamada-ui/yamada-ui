import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { Fade } from "../src"

describe("<Fade />", () => {
  test("passes a11y test", async () => {
    await a11y(<Fade />)
  })

  test("toggles visibility on isOpen change", async () => {
    const TestComponent = () => {
      const { isOpen, onToggle } = useDisclosure()

      return (
        <>
          <Button onClick={onToggle}>button</Button>
          <Fade isOpen={isOpen} data-testid="fade" />
        </>
      )
    }

    const { user } = render(<TestComponent />)

    const collapse = screen.getByTestId("fade")
    expect(collapse).not.toBeVisible()

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() => expect(collapse).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(collapse).not.toBeVisible())
  })

  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const { isOpen, onToggle } = useDisclosure()

      return (
        <>
          <Button onClick={onToggle}>button</Button>
          <Fade isOpen={isOpen} unmountOnExit data-testid="fade" />
        </>
      )
    }

    const { user } = render(<TestComponent />)

    expect(screen.queryByTestId("fade")).toBeNull()

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() => expect(screen.queryByTestId("fade")).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(screen.queryByTestId("fade")).toBeNull())
  })
})
