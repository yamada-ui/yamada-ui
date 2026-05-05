import { a11y, render, screen } from "#test"
import { CircleProgress } from "./"

describe("<CircleProgress />", () => {
  test("passes a11y checks", async () => {
    await a11y(<CircleProgress.Root value={50} />)
  })

  test("sets `className` correctly", () => {
    render(<CircleProgress.Root value={50} />)

    const el = screen.getByRole("progressbar")

    expect(el.parentElement).toHaveClass("ui-circle-progress__root")
    expect(el).toHaveClass("ui-circle-progress__circle")
    expect(el.children[0]).toHaveClass("ui-circle-progress__track")
    expect(el.children[1]).toHaveClass("ui-circle-progress__range")
  })
})
