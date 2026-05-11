import { a11y, render, screen } from "#test"
import { AlphaSlider } from "."

describe("<AlphaSlider />", () => {
  test("renders component correctly", async () => {
    await a11y(<AlphaSlider.Root color="#000000" defaultValue={0.5} />)
  })

  test("sets aria attributes correctly", () => {
    const { rerender } = render(
      <AlphaSlider.Root color="#000000" defaultValue={0.5} />,
    )

    const slider = screen.getByRole("slider")

    expect(slider).toHaveAttribute("aria-valuenow", "0.5")
    expect(slider).toHaveAttribute("aria-valuetext", "50%")
    expect(slider).toHaveAttribute("aria-valuemin", "0")
    expect(slider).toHaveAttribute("aria-valuemax", "1")
    expect(slider).toHaveAttribute("aria-orientation", "horizontal")

    rerender(<AlphaSlider.Root color="#000000" disabled />)
    expect(screen.getByRole("slider")).toHaveAttribute("aria-disabled")

    rerender(<AlphaSlider.Root color="#000000" readOnly />)
    expect(screen.getByRole("slider")).toHaveAttribute("aria-readonly")
  })
})
