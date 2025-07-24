import { a11y, render, screen } from "#test"
import { Slider } from "."

describe("<Slider />", () => {
  test("renders component correctly", async () => {
    await a11y(<Slider.Root defaultValue={50} />)
  })

  test("sets `displayName` correctly", () => {
    expect(Slider.Root.displayName).toBe("SliderRoot")
    expect(Slider.Track.displayName).toBe("SliderTrack")
    expect(Slider.Range.displayName).toBe("SliderRange")
    expect(Slider.Thumbs.name).toBe("SliderThumbs")
    expect(Slider.Thumb.displayName).toBe("SliderThumb")
    expect(Slider.Marks.name).toBe("SliderMarks")
    expect(Slider.Mark.displayName).toBe("SliderMark")
  })

  test("sets `className` correctly", () => {
    render(
      <Slider.Root
        data-testid="slider"
        defaultValue={50}
        marks={[25, 50, 75]}
        marksProps={{ "data-testid": "marks" }}
        trackProps={{ "data-testid": "track" }}
      />,
    )
    const root = screen.getByTestId("slider")
    const track = screen.getByTestId("track")
    const thumb = screen.getByRole("slider")
    const marks = screen.getAllByTestId("marks")
    expect(root).toHaveClass("ui-slider__root")
    expect(track).toHaveClass("ui-slider__track")
    expect(track.children[0]).toHaveClass("ui-slider__range")
    expect(thumb).toHaveClass("ui-slider__thumb")
    expect(marks[0]).toHaveClass("ui-slider__mark")
  })

  test("sets aria attributes correctly", () => {
    render(<Slider.Root defaultValue={50} />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "50")
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuetext", "50")
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuemin", "0")
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuemax", "100")
    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-orientation",
      "horizontal",
    )
  })

  test("disabled Slider renders correctly", () => {
    render(<Slider.Root disabled />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-disabled")
  })

  test("readonly Slider renders correctly", () => {
    render(<Slider.Root readOnly />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-readonly")
  })
})
