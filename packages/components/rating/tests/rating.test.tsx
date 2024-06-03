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
    vi.spyOn(HTMLElement.prototype, "matches").mockImplementation(() => true)
  })

  afterAll(() => {
    window.HTMLElement.prototype.getBoundingClientRect =
      defaultGetBoundingClientRect
    vi.clearAllMocks()
  })

  test("rating renders correctly", async () => {
    await a11y(<Rating />)
  })

  test("rating renders correctly with value", () => {
    const { container } = render(<Rating value={4} />)

    const items = container.querySelectorAll(".ui-rating__item")

    for (let i = 1; i < 5; i++) {
      expect(items[i]).toHaveAttribute("data-filled")
    }
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
      "ui-rating__item-icon css-sqp1dq",
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
    const { user, container } = render(
      <Rating width={100} height={20} data-testid="rating" />,
    )

    const rating = screen.getByTestId("rating")

    const items = container.querySelectorAll(".ui-rating__item")

    for (let i = 1; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }

    await user.pointer({ target: rating, coords: { x: 50, y: 10 } })

    for (let i = 1; i < 3; i++) {
      expect(items[i]).toHaveAttribute("data-filled")
    }
    for (let i = 3; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }

    await user.unhover(rating)

    for (let i = 1; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }
  })

  test("value should be updated correctly on the mouseDown event", async () => {
    const onChange = vi.fn()

    const { user, container } = render(<Rating onChange={onChange} />)

    const items = container.querySelectorAll(".ui-rating__item")
    await user.click(items[3])

    expect(onChange).toHaveBeenCalledWith(3)
  })

  test("value should be updated correctly on the touchStart event", async () => {
    const onChange = vi.fn()

    const { container } = render(<Rating onChange={onChange} />)

    const items = container.querySelectorAll(".ui-rating__item")
    fireEvent.touchStart(items[3])

    expect(onChange).toHaveBeenCalledWith(3)
  })

  test("highlightSelectedOnly should work correctly", async () => {
    const { container } = render(
      <Rating defaultValue={3} highlightSelectedOnly />,
    )

    const items = container.querySelectorAll(".ui-rating__item")
    expect(items[3]).toHaveAttribute("data-filled")

    for (let i = 1; i < 3; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }
    for (let i = 4; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }
  })

  test("should work correctly when out of focus", async () => {
    const { user, container } = render(<Rating data-testid="rating" />)

    const items = container.querySelectorAll(".ui-rating__item")

    await user.click(items[3])
    expect(items[3]).toHaveAttribute("data-focus")

    await user.click(items[4])
    expect(items[3]).not.toHaveAttribute("data-focus")
  })
})
