import { a11y, render, screen } from "#test"
import { Progress } from "./"

describe("<Progress />", () => {
  test("renders component correctly", async () => {
    await a11y(<Progress value={50} />)
  })

  test("renders indeterminate state when value is null", () => {
    render(<Progress value={null} />)

    const el = screen.getByRole("progressbar")

    expect(el).toHaveAttribute("data-indeterminate")
    expect(el).toHaveAttribute("aria-label", "Loading...")
  })
})
