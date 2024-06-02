import { waitFor } from "@testing-library/react"
import { useDisclosure, Button } from "@yamada-ui/react"
import { a11y, render, screen } from "@yamada-ui/test"
import { SlideFade } from "../src"
describe("<SlideFade />", () => {
  test("passes a11y test", async () => {
    await a11y(<SlideFade />)
  })

  test("fade-in and fade-out work correctly", async () => {
    const SlideFadeTestComponent = () => {
      const { isOpen, onToggle } = useDisclosure()

      return (
        <>
          <Button onClick={onToggle}>button</Button>
          <SlideFade isOpen={isOpen}>slide fade test</SlideFade>
        </>
      )
    }

    const { user } = render(<SlideFadeTestComponent />)

    const slideFade = await screen.findByText(/slide fade test/i)
    expect(slideFade).not.toBeVisible()

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() => expect(slideFade).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(slideFade).not.toBeVisible())
  })

  test("default offset is set correctly", () => {
    const { getByTestId } = render(<SlideFade data-testid="slide-fade" />)

    expect(getByTestId("slide-fade")).toHaveStyle(
      "transform: translateX(0px) translateY(8px) translateZ(0);",
    )
  })

  test("applies offsetX correctly", () => {
    const { getByTestId } = render(
      <SlideFade offsetX={10} data-testid="slide-fade" />,
    )

    expect(getByTestId("slide-fade")).toHaveStyle(
      "transform: translateX(10px) translateY(8px) translateZ(0);",
    )
  })

  test("applies offsetY correctly", () => {
    const { getByTestId } = render(
      <SlideFade offsetY={10} data-testid="slide-fade" />,
    )

    expect(getByTestId("slide-fade")).toHaveStyle(
      "transform: translateX(0px) translateY(10px) translateZ(0);",
    )
  })
})
