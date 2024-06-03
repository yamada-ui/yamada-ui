import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, render, waitFor, screen } from "@yamada-ui/test"
import { Collapse } from "../src"

describe("<Collapse />", () => {
  test("passes a11y test", async () => {
    await a11y(<Collapse />)
  })

  test("toggles visibility on isOpen change", async () => {
    const TestComponent = () => {
      const { isOpen, onToggle } = useDisclosure()

      return (
        <>
          <Button onClick={onToggle}>button</Button>
          <Collapse isOpen={isOpen} data-testid="collapse" />
        </>
      )
    }

    const { user } = render(<TestComponent />)

    const collapse = screen.getByTestId("collapse")
    expect(collapse).not.toBeVisible()

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() => expect(collapse).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(collapse).not.toBeVisible())
  })

  test("animationOpacity set to true by default", () => {
    const { getByTestId } = render(<Collapse isOpen data-testid="collapse" />)

    expect(getByTestId("collapse")).toHaveStyle({ opacity: "1" })
  })

  test("no opacity when animationOpacity set to false", () => {
    const { getByTestId } = render(
      <Collapse isOpen animationOpacity={false} data-testid="collapse" />,
    )

    expect(getByTestId("collapse")).not.toHaveStyle({ opacity: "1" })
  })

  test("height changes correctly after isOpen set to true", async () => {
    const TestComponent = () => {
      const { isOpen, onToggle } = useDisclosure()

      return (
        <>
          <Button onClick={onToggle}>button</Button>
          <Collapse
            startingHeight={50}
            endingHeight={200}
            isOpen={isOpen}
            data-testid="collapse"
          />
        </>
      )
    }

    const { user } = render(<TestComponent />)

    const collapse = screen.getByTestId("collapse")
    expect(collapse).toHaveStyle({ height: "50px" })

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() => expect(collapse).toHaveStyle({ height: "200px" }))
  })

  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const { isOpen, onToggle } = useDisclosure()

      return (
        <>
          <Button onClick={onToggle}>button</Button>
          <Collapse isOpen={isOpen} unmountOnExit data-testid="collapse" />
        </>
      )
    }

    const { user } = render(<TestComponent />)

    expect(screen.queryByTestId("collapse")).toBeNull()

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() => expect(screen.queryByTestId("collapse")).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(screen.queryByTestId("collapse")).toBeNull())
  })
})
