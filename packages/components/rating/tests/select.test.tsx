import { a11y, render, screen } from "@yamada-ui/test"
import { Rating } from "../src"

describe("<Rating />", () => {
  test("Rating renders correctly", async () => {
    await a11y(<Rating />)
  })

  test("Rating renders correctly with value", () => {
    render(<Rating value={4} data-testid="rating" />)
    const filledIcons = screen
      .getByTestId("rating")
      .querySelectorAll("label[data-filled]")
    expect(filledIcons.length).toBe(4 + 1)
  })

  test("should render with the correct color scheme", () => {
    render(
      <Rating colorScheme="purple" defaultValue={3} data-testid="rating" />,
    )
    const filledIcon = screen
      .getByTestId("rating")
      .querySelectorAll("label[data-filled]")[1]
    expect(filledIcon).toHaveClass("ui-rating__item css-14gxg28")
  })

  test("should render with the correct size", () => {
    render(<Rating size="sm" defaultValue={3} data-testid="rating" />)
    const filledIcon = screen
      .getByTestId("rating")
      .querySelectorAll("label[data-filled]")[1]
    expect(filledIcon.getElementsByTagName("div")[0]).toHaveClass(
      "ui-rating__item__icon css-sqp1dq",
    )
  })

  test("Disabled Rating renders correctly", () => {
    render(<Rating isDisabled data-testid="rating" />)
    expect(screen.getByTestId("rating")).toHaveAttribute("disabled")
  })

  test("Readonly Rating renders correctly", () => {
    render(<Rating isReadOnly data-testid="rating" />)
    expect(screen.getByTestId("rating")).toHaveAttribute("readonly")
  })
})
