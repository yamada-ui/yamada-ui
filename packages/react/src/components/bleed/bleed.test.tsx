import { a11y, render, screen } from "#test"
import { Bleed } from "./bleed"

describe("<Bleed />", () => {
  test("renders component correctly", async () => {
    await a11y(<Bleed>Box</Bleed>)
  })

  test("sets `displayName` correctly", () => {
    expect(Bleed.displayName).toBe("Bleed")
  })

  test("sets `className` correctly", () => {
    render(<Bleed>Box</Bleed>)
    expect(screen.getByText("Box")).toHaveClass("ui-bleed")
  })

  test("renders HTML tag correctly", () => {
    render(<Bleed>Box</Bleed>)
    expect(screen.getByText("Box").tagName).toBe("DIV")
  })

  test("applies `calc(50% - 50vw)` to both inline sides when `inline='full'`", () => {
    render(<Bleed inline="full">Box</Bleed>)
    const el = screen.getByText("Box")
    expect(el).toHaveStyle({
      marginInlineEnd: "calc(50% - 50vw)",
      marginInlineStart: "calc(50% - 50vw)",
    })
  })

  test("applies `calc(50% - 50vw)` to inline start when `inlineStart='full'`", () => {
    render(<Bleed inlineStart="full">Box</Bleed>)
    const el = screen.getByText("Box")
    expect(el).toHaveStyle({ marginInlineStart: "calc(50% - 50vw)" })
  })

  test("applies `calc(50% - 50vw)` to inline end when `inlineEnd='full'`", () => {
    render(<Bleed inlineEnd="full">Box</Bleed>)
    const el = screen.getByText("Box")
    expect(el).toHaveStyle({ marginInlineEnd: "calc(50% - 50vw)" })
  })
})
