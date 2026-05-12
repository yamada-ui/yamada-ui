import { a11y, render, screen } from "#test"
import { Rating } from "."

describe("<Rating />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Rating />)
  })

  test("renders correctly with value", () => {
    const { container } = render(<Rating value={4} />)

    const items = container.querySelectorAll(".ui-rating__item")

    for (let i = 1; i < 5; i++) {
      expect(items[i]).toHaveAttribute("data-filled")
    }
  })

  test("renders disabled rating with aria-disabled", () => {
    render(<Rating data-testid="rating" disabled />)

    expect(screen.getByTestId("rating")).toHaveAttribute("aria-disabled")
  })

  test("renders readonly rating with aria-readonly", () => {
    render(<Rating data-testid="rating" readOnly />)

    expect(screen.getByTestId("rating")).toHaveAttribute("aria-readonly")
  })

  test("highlightSelectedOnly fills only the selected item", () => {
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

  test("applies custom color per value", () => {
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
