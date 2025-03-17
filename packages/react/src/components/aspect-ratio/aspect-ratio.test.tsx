import { a11y, render, screen } from "../../../test"
import { AspectRatio } from "./aspect-ratio"

describe("<AspectRatio />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <AspectRatio>
        <img src="https://image.xyz/source" alt="placeholder" />
      </AspectRatio>,
    )
  })

  test("sets `displayName` and `__styled__` correctly", () => {
    expect(AspectRatio.displayName).toBe("AspectRatio")
    expect(AspectRatio.__styled__).toBe("AspectRatio")
  })

  test("sets `className` correctly", () => {
    render(
      <AspectRatio data-testid="aspect-ratio">
        <img src="https://image.xyz/source" alt="placeholder" />
      </AspectRatio>,
    )
    expect(screen.getByTestId("aspect-ratio")).toHaveClass("ui-aspect-ratio")
  })

  test("renders HTML tag correctly", () => {
    render(
      <AspectRatio data-testid="aspect-ratio">
        <img src="https://image.xyz/source" alt="placeholder" />
      </AspectRatio>,
    )
    expect(screen.getByTestId("aspect-ratio").tagName).toBe("DIV")
  })
})
