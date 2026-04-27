import { a11y, page, render } from "#test/browser"
import { Bleed } from "./bleed"

const getPixelNumber = (value: string) => Number.parseFloat(value)
const FULL_BLEED_PRECISION = 1

const getExpectedFullBleed = (container: HTMLElement) =>
  container.getBoundingClientRect().width / 2 - window.innerWidth / 2

describe("<Bleed />", () => {
  test("renders component correctly", async () => {
    await a11y(<Bleed>Box</Bleed>)
  })

  test("sets `displayName` correctly", () => {
    expect(Bleed.displayName).toBe("Bleed")
  })

  test("sets `className` correctly", async () => {
    await render(<Bleed>Box</Bleed>)

    await expect.element(page.getByText("Box")).toHaveClass("ui-bleed")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Bleed>Box</Bleed>)

    expect(page.getByText("Box").element().tagName).toBe("DIV")
  })

  test("applies full bleed to both inline sides when `inline='full'`", async () => {
    await render(
      <div style={{ width: "200px" }} data-testid="container">
        <Bleed inline="full">Box</Bleed>
      </div>,
    )

    const container = page.getByTestId("container").element() as HTMLElement
    const style = getComputedStyle(page.getByText("Box").element())
    const expectedFullBleed = getExpectedFullBleed(container)

    expect(getPixelNumber(style.marginInlineEnd)).toBeCloseTo(
      expectedFullBleed,
      FULL_BLEED_PRECISION,
    )
    expect(getPixelNumber(style.marginInlineStart)).toBeCloseTo(
      expectedFullBleed,
      FULL_BLEED_PRECISION,
    )
  })

  test("applies full bleed to inline start when `inlineStart='full'`", async () => {
    await render(
      <div style={{ width: "200px" }} data-testid="container">
        <Bleed inlineStart="full">Box</Bleed>
      </div>,
    )

    const container = page.getByTestId("container").element() as HTMLElement
    const style = getComputedStyle(page.getByText("Box").element())
    const expectedFullBleed = getExpectedFullBleed(container)

    expect(getPixelNumber(style.marginInlineStart)).toBeCloseTo(
      expectedFullBleed,
      FULL_BLEED_PRECISION,
    )
    expect(getPixelNumber(style.marginInlineEnd)).toBeCloseTo(0)
  })

  test("applies full bleed to inline end when `inlineEnd='full'`", async () => {
    await render(
      <div style={{ width: "200px" }} data-testid="container">
        <Bleed inlineEnd="full">Box</Bleed>
      </div>,
    )

    const container = page.getByTestId("container").element() as HTMLElement
    const style = getComputedStyle(page.getByText("Box").element())
    const expectedFullBleed = getExpectedFullBleed(container)

    expect(getPixelNumber(style.marginInlineEnd)).toBeCloseTo(
      expectedFullBleed,
      FULL_BLEED_PRECISION,
    )
    expect(getPixelNumber(style.marginInlineStart)).toBeCloseTo(0)
  })
})
