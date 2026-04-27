import { a11y, page, render } from "#test/browser"
import { AspectRatio } from "./aspect-ratio"

describe("<AspectRatio />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <AspectRatio>
        <img src="https://image.xyz/source" alt="placeholder" />
      </AspectRatio>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(AspectRatio.displayName).toBe("AspectRatio")
  })

  test("sets `className` correctly", async () => {
    await render(
      <AspectRatio data-testid="aspect-ratio">
        <img src="https://image.xyz/source" alt="placeholder" />
      </AspectRatio>,
    )

    await expect
      .element(page.getByTestId("aspect-ratio"))
      .toHaveClass("ui-aspect-ratio")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <AspectRatio data-testid="aspect-ratio">
        <img src="https://image.xyz/source" alt="placeholder" />
      </AspectRatio>,
    )

    expect(page.getByTestId("aspect-ratio").element().tagName).toBe("DIV")
  })
})
