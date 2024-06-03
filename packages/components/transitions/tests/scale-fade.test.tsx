import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { ScaleFade } from "../src"

describe("<ScaleFade />", () => {
  test("passes a11y test", async () => {
    await a11y(<ScaleFade />)
  })

  test("toggles visibility on isOpen change", async () => {
    const TestComponent = () => {
      const { isOpen, onToggle } = useDisclosure()

      return (
        <>
          <Button onClick={onToggle}>button</Button>
          <ScaleFade isOpen={isOpen} data-testid="scale-fade" />
        </>
      )
    }

    const { user } = render(<TestComponent />)

    const collapse = screen.getByTestId("scale-fade")
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
          <ScaleFade isOpen={isOpen} unmountOnExit data-testid="scale-fade" />
        </>
      )
    }

    const { user } = render(<TestComponent />)

    expect(screen.queryByTestId("scale-fade")).toBeNull()

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() =>
      expect(screen.queryByTestId("scale-fade")).toBeVisible(),
    )

    await user.click(button)
    await waitFor(() => expect(screen.queryByTestId("scale-fade")).toBeNull())
  })
})
