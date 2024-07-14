import { Button, useDisclosure } from "@yamada-ui/react"
import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { Slide } from "../src"

describe("<Slide />", () => {
  test("passes a11y test", async () => {
    await a11y(<Slide />)
  })

  test("applies default styles correctly", async () => {
    render(<Slide isOpen>Slide</Slide>)

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(100%) translateY(0px) translateZ(0)",
    })
  })

  test("applies styles correctly for top placement", async () => {
    render(
      <Slide isOpen placement="top">
        Slide
      </Slide>,
    )

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(0px) translateY(-100%) translateZ(0)",
    })
  })

  test("applies styles correctly for left placement", async () => {
    render(
      <Slide isOpen placement="left">
        Slide
      </Slide>,
    )

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(-100%) translateY(0px) translateZ(0)",
    })
  })

  test("applies styles correctly for right placement", async () => {
    render(
      <Slide isOpen placement="right">
        Slide
      </Slide>,
    )

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(100%) translateY(0px) translateZ(0)",
    })
  })

  test("applies styles correctly for bottom placement", async () => {
    render(
      <Slide isOpen placement="bottom">
        Slide
      </Slide>,
    )

    const slide = await screen.findByText("Slide")

    expect(slide).toHaveStyle({
      transform: "translateX(0px) translateY(100%) translateZ(0)",
    })
  })

  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const { isOpen, onToggle } = useDisclosure()

      return (
        <>
          <Button onClick={onToggle}>button</Button>
          <Slide isOpen={isOpen} unmountOnExit>
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
