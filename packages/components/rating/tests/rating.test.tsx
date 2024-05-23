import { a11y, fireEvent, render, screen } from "@yamada-ui/test"
import { Rating } from "../src"

describe("<Rating />", () => {
  const defaultGetBoundingClientRect =
    window.HTMLElement.prototype.getBoundingClientRect

  beforeAll(() => {
    window.HTMLElement.prototype.getBoundingClientRect = () => {
      return {
        left: 16,
        width: 100,
        height: 20,
      } as DOMRect
    }
  })

  afterAll(() => {
    window.HTMLElement.prototype.getBoundingClientRect =
      defaultGetBoundingClientRect
  })

  test("rating renders correctly", async () => {
    await a11y(<Rating />)
  })

  test("rating renders correctly with value", () => {
    render(<Rating value={4} data-testid="rating" />)
    const filledIcons = screen
      .getByTestId("rating")
      .querySelectorAll("label[data-filled]")
    expect(filledIcons).toHaveLength(4 + 1)
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

  test("disabled Rating renders correctly", () => {
    render(<Rating isDisabled data-testid="rating" />)
    expect(screen.getByTestId("rating")).toHaveAttribute("disabled")
  })

  test("readonly Rating renders correctly", () => {
    render(<Rating isReadOnly data-testid="rating" />)
    expect(screen.getByTestId("rating")).toHaveAttribute("readonly")
  })

  test("should be filled to the point of hovering", async () => {
    const { container } = render(
      <Rating width={100} height={20} data-testid="rating" />,
    )

    const rating = screen.getByTestId("rating")

    const items = container.querySelectorAll(".ui-rating__item")

    for (let i = 1; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }

    fireEvent.mouseMove(rating, { clientX: 50, clientY: 10 })

    for (let i = 1; i < 3; i++) {
      expect(items[i]).toHaveAttribute("data-filled")
    }
    for (let i = 3; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }
  })
})
