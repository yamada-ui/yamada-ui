import { a11y, render, screen } from "#test"
import { HueSlider } from "."

describe("<HueSlider />", () => {
  test("renders component correctly", async () => {
    await a11y(<HueSlider.Root defaultValue={180} />)
  })

  test("renders custom children correctly", () => {
    render(
      <HueSlider.Root defaultValue={180}>
        <div data-testid="custom-child">custom</div>
      </HueSlider.Root>,
    )

    expect(screen.getByTestId("custom-child")).toBeInTheDocument()
  })

  test("sets aria attributes correctly", () => {
    render(<HueSlider.Root defaultValue={180} />)

    const slider = screen.getByRole("slider")
    expect(slider).toHaveAttribute("aria-valuenow", "180")
    expect(slider).toHaveAttribute("aria-valuetext", "180°, Cyan")
    expect(slider).toHaveAttribute("aria-valuemin", "0")
    expect(slider).toHaveAttribute("aria-valuemax", "360")
    expect(slider).toHaveAttribute("aria-orientation", "horizontal")
  })

  test("sets vertical orientation correctly", () => {
    render(
      <HueSlider.Root
        defaultValue={180}
        orientation="vertical"
        overlayProps={{ "data-testid": "overlay" }}
      />,
    )

    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-orientation",
      "vertical",
    )
    expect(screen.getAllByTestId("overlay")[0]).toHaveAttribute(
      "data-orientation",
      "vertical",
    )
  })

  test.each([
    [29, "Red"],
    [30, "Yellow"],
    [89, "Yellow"],
    [90, "Green"],
    [149, "Green"],
    [150, "Cyan"],
    [209, "Cyan"],
    [210, "Blue"],
    [269, "Blue"],
    [270, "Magenta"],
    [329, "Magenta"],
    [330, "Red"],
  ])("sets aria-valuetext for hue %i as %s", (hue, color) => {
    render(<HueSlider.Root defaultValue={hue} />)

    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-valuetext",
      `${hue}°, ${color}`,
    )
  })

  test("controlled slider value updates correctly", () => {
    const { rerender } = render(<HueSlider.Root value={60} />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "60")
    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-valuetext",
      "60°, Yellow",
    )

    rerender(<HueSlider.Root value={180} />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "180")
    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-valuetext",
      "180°, Cyan",
    )
  })

  test("disabled HueSlider renders correctly", () => {
    render(<HueSlider.Root disabled />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-disabled")
  })

  test("readonly HueSlider renders correctly", () => {
    render(<HueSlider.Root readOnly />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-readonly")
  })
})
