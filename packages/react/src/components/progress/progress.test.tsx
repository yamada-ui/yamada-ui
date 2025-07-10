import { a11y, render, screen } from "../../../test"
import { Progress } from "./"

describe("<Progress />", () => {
  test("renders tag correctly", async () => {
    await a11y(<Progress value={50} />)
  })

  test("sets `displayName` correctly", () => {
    expect(Progress.displayName).toBe("ProgressRoot")
  })

  test("sets `className` correctly", () => {
    render(<Progress value={50} />)
    const el = screen.getByRole("progressbar")
    expect(el).toHaveClass("ui-progress__root")
    expect(el.children[0]).toHaveClass("ui-progress__range")
  })

  test("renders HTML tag correctly", () => {
    render(<Progress value={50} />)
    const el = screen.getByRole("progressbar")
    expect(el.tagName).toBe("DIV")
    expect(el.children[0]?.tagName).toBe("DIV")
  })
})
