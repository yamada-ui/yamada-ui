import { a11y, page, render } from "#test/browser"
import { CircleProgress } from "./"

describe("<CircleProgress />", () => {
  test("renders component correctly", async () => {
    await a11y(<CircleProgress.Root value={50} />)
  })

  test("sets `displayName` correctly", () => {
    expect(CircleProgress.Root.displayName).toBe("CircleProgressRoot")
    expect(CircleProgress.Label.displayName).toBe("CircleProgressLabel")
  })

  test("sets `className` correctly", async () => {
    await render(<CircleProgress.Root value={50} />)

    const el = page.getByRole("progressbar").element()

    expect(el.parentElement).toHaveClass("ui-circle-progress__root")
    expect(el).toHaveClass("ui-circle-progress__circle")
    expect(el.children[0]).toHaveClass("ui-circle-progress__track")
    expect(el.children[1]).toHaveClass("ui-circle-progress__range")
  })

  test("renders HTML tag correctly", async () => {
    await render(<CircleProgress.Root value={50} />)

    const el = page.getByRole("progressbar").element()

    expect(el.parentElement?.tagName).toBe("DIV")
    expect(el.tagName).toBe("svg")
    expect(el.children[0]?.tagName).toBe("circle")
    expect(el.children[1]?.tagName).toBe("circle")
  })
})
