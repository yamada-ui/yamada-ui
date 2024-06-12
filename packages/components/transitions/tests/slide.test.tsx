import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { Slide } from "../src"

describe("<Slide />", () => {
  test("passes a11y test", async () => {
    await a11y(<Slide />)
  })

  test("applies default styles correctly", async () => {
    const { getByTestId } = render(<Slide isOpen data-testid="slide" />)

    expect(getByTestId("slide")).toHaveStyle(
      "transform: translateX(100%) translateY(0px) translateZ(0);",
    )
  })

  test("applies styles correctly for top placement", async () => {
    const { getByTestId } = render(
      <Slide isOpen placement="top" data-testid="slide" />,
    )

    expect(getByTestId("slide")).toHaveStyle(
      "transform: translateX(0px) translateY(-100%) translateZ(0);",
    )
  })

  test("applies styles correctly for left placement", async () => {
    const { getByTestId } = render(
      <Slide isOpen placement="left" data-testid="slide" />,
    )

    expect(getByTestId("slide")).toHaveStyle(
      "transform: translateX(-100%) translateY(0px) translateZ(0);",
    )
  })

  test("applies styles correctly for right placement", async () => {
    const { getByTestId } = render(
      <Slide isOpen placement="right" data-testid="slide" />,
    )

    expect(getByTestId("slide")).toHaveStyle(
      "transform: translateX(100%) translateY(0px) translateZ(0);",
    )
  })

  test("applies styles correctly for bottom placement", async () => {
    const { getByTestId } = render(
      <Slide isOpen placement="bottom" data-testid="slide" />,
    )

    expect(getByTestId("slide")).toHaveStyle(
      "transform: translateX(0px) translateY(100%) translateZ(0);",
    )
  })

  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const { isOpen, onToggle } = useDisclosure()

      return (
        <>
          <Button onClick={onToggle}>button</Button>
          <Slide isOpen={isOpen} unmountOnExit data-testid="slide" />
        </>
      )
    }

    const { user } = render(<TestComponent />)

    expect(screen.queryByTestId("slide")).toBeNull()

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() => expect(screen.queryByTestId("slide")).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(screen.queryByTestId("slide")).toBeNull())
  })
})
