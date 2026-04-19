import { a11y, page, render } from "#test/browser"
import { Bleed } from "./bleed"

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

  test("applies non-zero bleed to both inline sides when `inline='full'`", async () => {
    await render(
      <div style={{ width: "200px" }}>
        <Bleed inline="full">Box</Bleed>
      </div>,
    )

    const style = getComputedStyle(page.getByText("Box").element())

    expect(style.marginInlineEnd).not.toBe("0px")
    expect(style.marginInlineStart).not.toBe("0px")
  })

  test("applies non-zero bleed to inline start when `inlineStart='full'`", async () => {
    await render(
      <div style={{ width: "200px" }}>
        <Bleed inlineStart="full">Box</Bleed>
      </div>,
    )

    const style = getComputedStyle(page.getByText("Box").element())

    expect(style.marginInlineStart).not.toBe("0px")
    expect(style.marginInlineEnd).toBe("0px")
  })

  test("applies non-zero bleed to inline end when `inlineEnd='full'`", async () => {
    await render(
      <div style={{ width: "200px" }}>
        <Bleed inlineEnd="full">Box</Bleed>
      </div>,
    )

    const style = getComputedStyle(page.getByText("Box").element())

    expect(style.marginInlineEnd).not.toBe("0px")
    expect(style.marginInlineStart).toBe("0px")
  })
})
