import { a11y, page, render } from "#test/browser"
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

  test("sets `className` correctly", async () => {
    await render(
      <HueSlider.Root
        data-testid="slider"
        defaultValue={180}
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

  test("renders custom children correctly", async () => {
    await render(
      <HueSlider.Root defaultValue={180}>
        <div data-testid="custom-child" />
      </HueSlider.Root>,
    )

    await expect.element(page.getByTestId("custom-child")).toBeInTheDocument()
  })

  test("sets aria attributes correctly", async () => {
    await render(<HueSlider.Root defaultValue={180} />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuenow", "180")
    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuetext", "180°, Cyan")
    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuemin", "0")
    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuemax", "360")
    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-orientation", "horizontal")
  })

  test("sets vertical orientation correctly", async () => {
    await render(
      <HueSlider.Root
        defaultValue={180}
        orientation="vertical"
        overlayProps={{ "data-testid": "overlay" }}
      />,
    )

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-orientation", "vertical")
    await expect
      .element(page.getByTestId("overlay"))
      .toHaveAttribute("data-orientation", "vertical")
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
  ])("sets aria-valuetext for each hue correctly", async (hue, color) => {
    await render(<HueSlider.Root defaultValue={hue} />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuetext", `${hue}°, ${color}`)
  })

  test("controlled slider value updates correctly", async () => {
    const { rerender } = await render(<HueSlider.Root value={60} />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuenow", "60")
    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuetext", "60°, Yellow")

    await rerender(<HueSlider.Root value={180} />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuenow", "180")
    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-valuetext", "180°, Cyan")
  })

  test("disabled HueSlider renders correctly", async () => {
    await render(<HueSlider.Root disabled />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-disabled")
  })

  test("readonly HueSlider renders correctly", async () => {
    await render(<HueSlider.Root readOnly />)

    await expect
      .element(page.getByRole("slider"))
      .toHaveAttribute("aria-readonly")
  })
})
