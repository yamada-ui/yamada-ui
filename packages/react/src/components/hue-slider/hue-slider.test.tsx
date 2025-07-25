import { a11y, render, screen } from "#test"
import { HueSlider } from "."

describe("<HueSlider />", () => {
  test("renders component correctly", async () => {
    await a11y(<HueSlider.Root defaultValue={180} />)
  })

  test("sets `displayName` correctly", () => {
    expect(HueSlider.Root.displayName).toBe("HueSliderRoot")
    expect(HueSlider.Track.displayName).toBe("HueSliderTrack")
    expect(HueSlider.Thumb.displayName).toBe("HueSliderThumb")
    expect(HueSlider.Overlay.displayName).toBe("HueSliderOverlay")
  })

  test("sets `className` correctly", () => {
    render(
      <HueSlider.Root
        data-testid="slider"
        defaultValue={180}
        overlayProps={{ "data-testid": "overlay" }}
        trackProps={{ "data-testid": "track" }}
      />,
    )
    const root = screen.getByTestId("slider")
    const track = screen.getByTestId("track")
    const thumb = screen.getByRole("slider")
    const overlay = screen.getAllByTestId("overlay")
    expect(root).toHaveClass("ui-hue-slider__root")
    expect(track).toHaveClass("ui-hue-slider__track")
    expect(thumb).toHaveClass("ui-hue-slider__thumb")
    expect(overlay[0]).toHaveClass("ui-hue-slider__overlay")
  })

  test("sets aria attributes correctly", () => {
    render(<HueSlider.Root defaultValue={180} />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "180")
    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-valuetext",
      "180°, Cyan",
    )
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuemin", "0")
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuemax", "360")
    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-orientation",
      "horizontal",
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
