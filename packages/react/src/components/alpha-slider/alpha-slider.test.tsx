import { a11y, render, screen } from "#test"
import { AlphaSlider } from "."

describe("<AlphaSlider />", () => {
  test("renders component correctly", async () => {
    await a11y(<AlphaSlider.Root color="#000000" defaultValue={0.5} />)
  })

  test("sets `displayName` correctly", () => {
    expect(AlphaSlider.Root.displayName).toBe("AlphaSliderRoot")
    expect(AlphaSlider.Track.displayName).toBe("AlphaSliderTrack")
    expect(AlphaSlider.Thumb.displayName).toBe("AlphaSliderThumb")
    expect(AlphaSlider.Overlay.displayName).toBe("AlphaSliderOverlay")
  })

  test("sets `className` correctly", () => {
    render(
      <AlphaSlider.Root
        data-testid="slider"
        color="#000000"
        defaultValue={0.5}
        overlayProps={{ "data-testid": "overlay" }}
        trackProps={{ "data-testid": "track" }}
      />,
    )

    const root = screen.getByTestId("slider")
    const track = screen.getByTestId("track")
    const thumb = screen.getByRole("slider")
    const [overlay] = screen.getAllByTestId("overlay")

    expect(root).toHaveClass("ui-hue-slider__root")
    expect(track).toHaveClass("ui-hue-slider__track")
    expect(thumb).toHaveClass("ui-hue-slider__thumb")
    expect(overlay).toHaveClass("ui-hue-slider__overlay")
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
