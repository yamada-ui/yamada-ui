import { a11y, render, screen } from "#test"
import { SaturationSlider } from "."

describe("<SaturationSlider />", () => {
  test("renders component correctly", async () => {
    await a11y(<SaturationSlider.Root />)
  })

  test("sets `displayName` correctly", () => {
    expect(SaturationSlider.Root.displayName).toBe("SaturationSliderRoot")
    expect(SaturationSlider.Track.displayName).toBe("SaturationSliderTrack")
    expect(SaturationSlider.Thumb.displayName).toBe("SaturationSliderThumb")
  })

  test("sets `className` correctly", () => {
    render(
      <SaturationSlider.Root
        data-testid="slider"
        trackProps={{ "data-testid": "track" }}
      />,
    )
    const root = screen.getByTestId("slider")
    const track = screen.getByTestId("track")
    const thumb = screen.getByRole("slider")
    expect(root).toHaveClass("ui-saturation-slider__root")
    expect(track).toHaveClass("ui-saturation-slider__track")
    expect(thumb).toHaveClass("ui-saturation-slider__thumb")
  })
})
