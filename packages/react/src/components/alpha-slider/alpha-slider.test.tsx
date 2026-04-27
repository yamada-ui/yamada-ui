import { a11y, page, render } from "#test/browser"
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

  test("sets `className` correctly", async () => {
    await render(
      <AlphaSlider.Root
        data-testid="slider"
        color="#000000"
        defaultValue={0.5}
        overlayProps={{ "data-testid": "overlay" }}
        trackProps={{ "data-testid": "track" }}
      />,
    )

    const root = page.getByTestId("slider")
    const track = page.getByTestId("track")
    const thumb = page.getByRole("slider")
    const overlay = page.getByTestId("overlay").first()

    await expect.element(root).toHaveClass("ui-hue-slider__root")
    await expect.element(track).toHaveClass("ui-hue-slider__track")
    await expect.element(thumb).toHaveClass("ui-hue-slider__thumb")
    await expect.element(overlay).toHaveClass("ui-hue-slider__overlay")
  })

  test("sets aria attributes correctly", async () => {
    await render(<AlphaSlider.Root color="#000000" defaultValue={0.5} />)

    const slider = page.getByRole("slider")

    await expect.element(slider).toHaveAttribute("aria-valuenow", "0.5")
    await expect.element(slider).toHaveAttribute("aria-valuetext", "50%")
    await expect.element(slider).toHaveAttribute("aria-valuemin", "0")
    await expect.element(slider).toHaveAttribute("aria-valuemax", "1")
    await expect
      .element(slider)
      .toHaveAttribute("aria-orientation", "horizontal")
  })

  test("disabled AlphaSlider renders correctly", async () => {
    await render(<AlphaSlider.Root color="#000000" disabled />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-disabled")
  })

  test("readonly AlphaSlider renders correctly", async () => {
    await render(<AlphaSlider.Root color="#000000" readOnly />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-readonly")
  })
})
