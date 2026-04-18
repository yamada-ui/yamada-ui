import { a11y, page, render } from "#test/browser"
import { Progress } from "./"

describe("<Progress />", () => {
  test("renders component correctly", async () => {
    await a11y(<Progress value={50} />)
  })

  test("sets `displayName` correctly", () => {
    expect(Progress.displayName).toBe("ProgressRoot")
  })

  test("sets `className` correctly", async () => {
    await render(<Progress value={50} />)

    const el = page.getByRole("progressbar").element()

    expect(el).toHaveClass("ui-progress__root")
    expect(el.children[0]).toHaveClass("ui-progress__range")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Progress value={50} />)

    const el = page.getByRole("progressbar").element()

    expect(el.tagName).toBe("DIV")
    expect(el.children[0]?.tagName).toBe("DIV")
  })

  test("renders indeterminate state when value is null", async () => {
    await render(<Progress value={null} />)

    await expect
      .element(page.getByRole("progressbar"))
      .toHaveAttribute("data-indeterminate")
    await expect
      .element(page.getByRole("progressbar"))
      .toHaveAttribute("aria-label", "Loading...")
  })
})
