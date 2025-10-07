import { a11y, fireEvent, render, screen } from "#test"
import { Rating } from "."

describe("<Rating />", () => {
  const defaultGetBoundingClientRect =
    window.HTMLElement.prototype.getBoundingClientRect

  beforeAll(() => {
    window.HTMLElement.prototype.getBoundingClientRect = () => {
      return {
        height: 20,
        left: 16,
        width: 100,
      } as DOMRect
    }
    vi.spyOn(HTMLElement.prototype, "matches").mockImplementation(() => true)
  })

  afterAll(() => {
    window.HTMLElement.prototype.getBoundingClientRect =
      defaultGetBoundingClientRect
    vi.clearAllMocks()
  })

  test("renders component correctly", async () => {
    await a11y(<Rating />)
  })

  test("sets `displayName` correctly", () => {
    expect(Rating.displayName).toBe("RatingRoot")
  })

  test("sets `className` correctly", () => {
    render(<Rating />)
    expect(screen.getByRole("radiogroup")).toHaveClass("ui-rating__root")
  })

  test("rating renders correctly with value", () => {
    const { container } = render(<Rating value={4} />)

    const items = container.querySelectorAll(".ui-rating__item")

    for (let i = 1; i < 5; i++) {
      expect(items[i]).toHaveAttribute("data-filled")
    }
  })

  test("disabled Rating renders correctly", () => {
    render(<Rating data-testid="rating" disabled />)

    expect(screen.getByTestId("rating")).toHaveAttribute("aria-disabled")
  })

  test("readonly Rating renders correctly", () => {
    render(<Rating data-testid="rating" readOnly />)

    expect(screen.getByTestId("rating")).toHaveAttribute("aria-readonly")
  })

  test("should be filled to the point of hovering", async () => {
    const { container, user } = render(
      <Rating data-testid="rating" height={20} width={100} />,
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

    const { container, user } = render(<Rating onChange={onChange} />)

    const items = container.querySelectorAll(".ui-rating__item")
    await user.click(items[3]!)

    expect(onChange).toHaveBeenCalledExactlyOnceWith(3)
  })

  test("value should be updated correctly on the touchStart event", () => {
    const onChange = vi.fn()

    const { container } = render(<Rating onChange={onChange} />)

    const items = container.querySelectorAll(".ui-rating__item")
    fireEvent.touchStart(items[3]!)

    expect(onChange).toHaveBeenCalledExactlyOnceWith(3)
  })

  test("highlightSelectedOnly should work correctly", () => {
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

  test.skip("should work correctly when out of focus", async () => {
    const { container, user } = render(<Rating data-testid="rating" />)

    const items = container.querySelectorAll(".ui-rating__item")

    await user.click(items[3]!)
    expect(items[3]).toHaveAttribute("data-focus")

    await user.click(items[4]!)
    expect(items[3]).not.toHaveAttribute("data-focus")
  })

  test("should use custom color correctly", () => {
    const colors: { [key: number]: string } = {
      1: "red.500",
      2: "orange.500",
      3: "yellow.500",
      4: "green.500",
      5: "blue.500",
    }

    const getColor = (value: number): string | undefined => colors[value]

    const { container } = render(<Rating color={getColor} defaultValue={5} />)
    const items = container.querySelectorAll(".ui-rating__item")

    const styleElements = document.getElementsByTagName("style")
    const cssText = Array.from(styleElements)
      .map((style) => style.textContent)
      .join("")

    for (let i = 1; i < items.length; i++) {
      expect(items[i]).toHaveAttribute("data-filled")

      const emotionClass = Array.from(items[i]!.classList)[1]

      const expectedColor = getColor(i)
      const expectedVar = `var(--ui-colors-${expectedColor!.replace(".", "-")})`

      const ruleExists =
        cssText.includes(`${emotionClass}[data-filled]`) &&
        cssText.includes(`color:${expectedVar}`)
      expect(ruleExists).toBeTruthy()
    }
  })
})
