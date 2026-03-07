import { a11y, fireEvent, render, screen } from "#test"
import { vi } from "vitest"
import { Slider } from "."
import { noop } from "../../utils"

const mockRect = (el: HTMLElement, rect: Partial<DOMRect>): (() => void) => {
  const original = el.getBoundingClientRect
  el.getBoundingClientRect = () =>
    ({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      toJSON: noop,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
      ...rect,
    }) as DOMRect
  return () => {
    el.getBoundingClientRect = original
  }
}

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

  test("renders range slider with two thumbs", () => {
    render(<Slider.Root defaultValue={[25, 75]} />)

    const sliders = screen.getAllByRole("slider")
    expect(sliders).toHaveLength(2)
    expect(sliders[0]).toHaveAttribute("aria-valuenow", "25")
    expect(sliders[1]).toHaveAttribute("aria-valuenow", "75")
  })

  test("range slider sets correct aria attributes on thumbs", () => {
    render(<Slider.Root defaultValue={[20, 80]} />)

    const sliders = screen.getAllByRole("slider")
    expect(sliders[0]).toHaveAttribute("data-start")
    expect(sliders[1]).toHaveAttribute("data-end")
    expect(sliders[0]).toHaveAttribute("aria-valuemin", "0")
    expect(sliders[0]).toHaveAttribute("aria-valuemax", "80")
    expect(sliders[1]).toHaveAttribute("aria-valuemin", "20")
    expect(sliders[1]).toHaveAttribute("aria-valuemax", "100")
  })

  test("range slider renders two hidden inputs", () => {
    const { container } = render(
      <Slider.Root name="range-slider" defaultValue={[25, 75]} />,
    )

    const inputs = container.querySelectorAll('input[type="hidden"]')
    expect(inputs).toHaveLength(2)
    expect(inputs[0]).toHaveAttribute("value", "25")
    expect(inputs[1]).toHaveAttribute("value", "75")
  })

  test("single slider renders one hidden input", () => {
    const { container } = render(
      <Slider.Root name="slider" defaultValue={50} />,
    )

    const inputs = container.querySelectorAll('input[type="hidden"]')
    expect(inputs).toHaveLength(1)
    expect(inputs[0]).toHaveAttribute("value", "50")
  })

  test("renders marks with object format including labels", () => {
    render(
      <Slider.Root
        defaultValue={50}
        marks={[
          { label: "Low", value: 25 },
          { indicator: false, label: "High", value: 75 },
        ]}
      />,
    )

    expect(screen.getByText("Low")).toBeInTheDocument()
    expect(screen.getByText("High")).toBeInTheDocument()
  })

  test("renders marks with number format", () => {
    render(
      <Slider.Root
        data-testid="slider"
        defaultValue={50}
        marks={[25, 50, 75]}
        marksProps={{ "data-testid": "mark" }}
      />,
    )

    const marks = screen.getAllByTestId("mark")
    expect(marks).toHaveLength(3)
  })

  test("keyboard ArrowRight increases value", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowRight" })

    expect(onChange).toHaveBeenCalledWith(51)
  })

  test("keyboard ArrowLeft decreases value", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowLeft" })

    expect(onChange).toHaveBeenCalledWith(49)
  })

  test("keyboard ArrowUp increases value", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowUp" })

    expect(onChange).toHaveBeenCalledWith(51)
  })

  test("keyboard ArrowDown decreases value", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowDown" })

    expect(onChange).toHaveBeenCalledWith(49)
  })

  test("keyboard Home sets value to min", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "Home" })

    expect(onChange).toHaveBeenCalledWith(0)
  })

  test("keyboard End sets value to max", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "End" })

    expect(onChange).toHaveBeenCalledWith(100)
  })

  test("keyboard PageUp increases value by ten step", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "PageUp" })

    expect(onChange).toHaveBeenCalledWith(60)
  })

  test("keyboard PageDown decreases value by ten step", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "PageDown" })

    expect(onChange).toHaveBeenCalledWith(40)
  })

  test("keyboard does not change value when disabled", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} disabled onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowRight" })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("keyboard does not change value when readOnly", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} readOnly onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowRight" })

    expect(onChange).not.toHaveBeenCalled()
  })

  test("range slider keyboard ArrowRight on first thumb", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={[25, 75]} onChange={onChange} />)

    const sliders = screen.getAllByRole("slider")
    fireEvent.keyDown(sliders[0]!, { key: "ArrowRight" })

    expect(onChange).toHaveBeenCalledWith([26, 75])
  })

  test("range slider keyboard ArrowLeft on second thumb", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={[25, 75]} onChange={onChange} />)

    const sliders = screen.getAllByRole("slider")
    fireEvent.keyDown(sliders[1]!, { key: "ArrowLeft" })

    expect(onChange).toHaveBeenCalledWith([25, 74])
  })

  test("range slider keyboard Home on second thumb", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={[25, 75]} onChange={onChange} />)

    const sliders = screen.getAllByRole("slider")
    fireEvent.keyDown(sliders[1]!, { key: "Home" })

    expect(onChange).toHaveBeenCalledWith([25, 25])
  })

  test("range slider keyboard End on first thumb", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={[25, 75]} onChange={onChange} />)

    const sliders = screen.getAllByRole("slider")
    fireEvent.keyDown(sliders[0]!, { key: "End" })

    expect(onChange).toHaveBeenCalledWith([75, 75])
  })

  test("getAriaValueText is used for aria-valuetext", () => {
    const getAriaValueText = (value: number) => `${value}%`

    render(
      <Slider.Root defaultValue={50} getAriaValueText={getAriaValueText} />,
    )

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuetext", "50%")
  })

  test("getAriaValueText is used for range slider", () => {
    const getAriaValueText = (value: number, index: number) =>
      `Thumb ${index}: ${value}`

    render(
      <Slider.Root
        defaultValue={[25, 75]}
        getAriaValueText={getAriaValueText}
      />,
    )

    const sliders = screen.getAllByRole("slider")
    expect(sliders[0]).toHaveAttribute("aria-valuetext", "Thumb 0: 25")
    expect(sliders[1]).toHaveAttribute("aria-valuetext", "Thumb 1: 75")
  })

  test("aria-valuetext prop overrides getAriaValueText", () => {
    const getAriaValueText = (value: number) => `${value}%`

    render(
      <Slider.Root
        aria-valuetext="custom"
        defaultValue={50}
        getAriaValueText={getAriaValueText}
      />,
    )

    expect(screen.getByRole("slider")).toHaveAttribute(
      "aria-valuetext",
      "custom",
    )
  })

  test("respects custom min and max", () => {
    render(<Slider.Root defaultValue={50} max={200} min={10} />)

    const thumb = screen.getByRole("slider")
    expect(thumb).toHaveAttribute("aria-valuemin", "10")
    expect(thumb).toHaveAttribute("aria-valuemax", "200")
  })

  test("respects custom step", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={50} step={5} onChange={onChange} />)

    const thumb = screen.getByRole("slider")
    fireEvent.keyDown(thumb, { key: "ArrowRight" })

    expect(onChange).toHaveBeenCalledWith(55)
  })

  test("range slider with betweenThumbs prevents overlap", () => {
    render(<Slider.Root betweenThumbs={10} defaultValue={[45, 55]} />)

    const sliders = screen.getAllByRole("slider")
    expect(sliders[0]).toHaveAttribute("aria-valuemax", "45")
    expect(sliders[1]).toHaveAttribute("aria-valuemin", "55")
  })

  test("warns when max is less than min", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})

    render(<Slider.Root defaultValue={50} max={0} min={100} />)

    expect(warnSpy).toHaveBeenCalledWith(
      "Do not assign a number less than 'min' to 'max'",
    )

    warnSpy.mockRestore()
  })

  test("sets range CSS variables on root element", () => {
    render(<Slider.Root data-testid="slider" defaultValue={50} />)

    const root = screen.getByTestId("slider")
    expect(root.style.getPropertyValue("--range-start")).toBe("0%")
    expect(root.style.getPropertyValue("--range-end")).toBe("50%")
  })

  test("sets range CSS variables for range slider", () => {
    render(<Slider.Root data-testid="slider" defaultValue={[25, 75]} />)

    const root = screen.getByTestId("slider")
    expect(root.style.getPropertyValue("--range-start")).toBe("25%")
    expect(root.style.getPropertyValue("--range-end")).toBe("75%")
  })

  test("mark has correct data-between attribute for single slider", () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
        <Slider.Mark data-testid="mark-25" value={25} />
        <Slider.Mark data-testid="mark-75" value={75} />
      </Slider.Root>,
    )

    const mark25 = screen.getByTestId("mark-25")
    const mark75 = screen.getByTestId("mark-75")

    expect(mark25).toHaveAttribute("data-between")
    expect(mark75).not.toHaveAttribute("data-between")
  })

  test("mark has correct data-between attribute for range slider", () => {
    render(
      <Slider.Root defaultValue={[20, 80]}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumbs />
        </Slider.Track>
        <Slider.Mark data-testid="mark-10" value={10} />
        <Slider.Mark data-testid="mark-50" value={50} />
        <Slider.Mark data-testid="mark-90" value={90} />
      </Slider.Root>,
    )

    const mark10 = screen.getByTestId("mark-10")
    const mark50 = screen.getByTestId("mark-50")
    const mark90 = screen.getByTestId("mark-90")

    expect(mark10).not.toHaveAttribute("data-between")
    expect(mark50).toHaveAttribute("data-between")
    expect(mark90).not.toHaveAttribute("data-between")
  })

  test("renders with custom children", () => {
    render(
      <Slider.Root data-testid="slider" defaultValue={50}>
        <Slider.Track data-testid="custom-track">
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Root>,
    )

    expect(screen.getByTestId("custom-track")).toBeInTheDocument()
  })

  test("renders range slider with custom children using SliderThumbs", () => {
    render(
      <Slider.Root data-testid="slider" defaultValue={[25, 75]}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumbs />
        </Slider.Track>
      </Slider.Root>,
    )

    const sliders = screen.getAllByRole("slider")
    expect(sliders).toHaveLength(2)
  })

  test("range slider data-range attribute on range element", () => {
    render(
      <Slider.Root defaultValue={[25, 75]}>
        <Slider.Track>
          <Slider.Range data-testid="range" />
          <Slider.Thumbs />
        </Slider.Track>
      </Slider.Root>,
    )

    const range = screen.getByTestId("range")
    expect(range).toHaveAttribute("data-range")
  })

  test("disabled thumb has tabIndex -1", () => {
    render(<Slider.Root defaultValue={50} disabled />)

    const thumb = screen.getByRole("slider")
    expect(thumb).toHaveAttribute("tabindex", "-1")
  })

  test("interactive thumb has tabIndex 0", () => {
    render(<Slider.Root defaultValue={50} />)

    const thumb = screen.getByRole("slider")
    expect(thumb).toHaveAttribute("tabindex", "0")
  })

  test("renders with orientation data attribute", () => {
    render(<Slider.Root data-testid="slider" defaultValue={50} />)

    const root = screen.getByTestId("slider")
    expect(root).toHaveAttribute("data-orientation", "horizontal")
  })

  test("passes inputProps to hidden input", () => {
    const { container } = render(
      <Slider.Root
        id="test-id"
        name="test-slider"
        defaultValue={50}
        required
      />,
    )

    const input = container.querySelector('input[type="hidden"]')
    expect(input).toHaveAttribute("name", "test-slider")
    expect(input).toHaveAttribute("id", "test-id")
  })

  test("controlled slider value updates correctly", () => {
    const { rerender } = render(<Slider.Root value={30} />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "30")

    rerender(<Slider.Root value={70} />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "70")
  })

  test("controlled range slider value updates correctly", () => {
    const { rerender } = render(<Slider.Root value={[20, 80]} />)

    const sliders = screen.getAllByRole("slider")
    expect(sliders[0]).toHaveAttribute("aria-valuenow", "20")
    expect(sliders[1]).toHaveAttribute("aria-valuenow", "80")

    rerender(<Slider.Root value={[30, 60]} />)

    const updatedSliders = screen.getAllByRole("slider")
    expect(updatedSliders[0]).toHaveAttribute("aria-valuenow", "30")
    expect(updatedSliders[1]).toHaveAttribute("aria-valuenow", "60")
  })

  test("mark has correct style with --mark-position", () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
        <Slider.Mark data-testid="mark" value={30} />
      </Slider.Root>,
    )

    const mark = screen.getByTestId("mark")
    expect(mark.style.getPropertyValue("--mark-position")).toBe("30%")
  })

  test("mark has aria-hidden and role presentation", () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
        <Slider.Mark data-testid="mark" value={30} />
      </Slider.Root>,
    )

    const mark = screen.getByTestId("mark")
    expect(mark).toHaveAttribute("aria-hidden", "true")
    expect(mark).toHaveAttribute("role", "presentation")
  })

  test("mark indicator is true by default", () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
        <Slider.Mark data-testid="mark" value={30} />
      </Slider.Root>,
    )

    const mark = screen.getByTestId("mark")
    expect(mark).toHaveAttribute("data-indicator")
  })

  test("mark indicator can be set to false", () => {
    render(
      <Slider.Root defaultValue={50}>
        <Slider.Track>
          <Slider.Range />
          <Slider.Thumb />
        </Slider.Track>
        <Slider.Mark data-testid="mark" indicator={false} value={30} />
      </Slider.Root>,
    )

    const mark = screen.getByTestId("mark")
    expect(mark).not.toHaveAttribute("data-indicator")
  })

  test("renders with custom thumbProps, trackProps, rangeProps", () => {
    render(
      <Slider.Root
        defaultValue={50}
        rangeProps={{ "data-testid": "range" }}
        thumbProps={{ "data-testid": "thumb" }}
        trackProps={{ "data-testid": "track" }}
      />,
    )

    expect(screen.getByTestId("track")).toBeInTheDocument()
    expect(screen.getByTestId("range")).toBeInTheDocument()
    expect(screen.getByTestId("thumb")).toBeInTheDocument()
  })

  test("range slider default children renders SliderThumbs", () => {
    render(
      <Slider.Root
        defaultValue={[25, 75]}
        thumbProps={{ "data-testid": "thumb" }}
      />,
    )

    const thumbs = screen.getAllByTestId("thumb")
    expect(thumbs).toHaveLength(2)
  })

  test("pointer interaction triggers onChangeStart and onChangeEnd for single slider", () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    render(
      <Slider.Root
        defaultValue={50}
        trackProps={{ "data-testid": "track" }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { left: 0, width: 200 })

    fireEvent.pointerDown(track, { clientX: 100, clientY: 0 })
    expect(onChangeStart).toHaveBeenCalledWith(50)

    fireEvent.pointerUp(window, { clientX: 120, clientY: 0 })
    expect(onChangeEnd).toHaveBeenCalledWith(60)

    cleanup()
  })

  test("pointer interaction triggers onChange during move for single slider", () => {
    const onChange = vi.fn()

    render(
      <Slider.Root
        defaultValue={50}
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
      />,
    )

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { left: 0, width: 200 })

    fireEvent.pointerDown(track, { clientX: 100, clientY: 0 })
    fireEvent.pointerMove(window, { clientX: 120, clientY: 0 })
    expect(onChange).toHaveBeenCalledWith(60)

    fireEvent.pointerUp(window, { clientX: 120, clientY: 0 })

    cleanup()
  })

  test("pointer interaction triggers callbacks for range slider", () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    const onChange = vi.fn()

    render(
      <Slider.Root
        defaultValue={[25, 75]}
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { left: 0, width: 200 })

    // Click closer to the first thumb (25% = 50px)
    fireEvent.pointerDown(track, { clientX: 40, clientY: 0 })
    expect(onChangeStart).toHaveBeenCalledWith([20, 75])

    fireEvent.pointerMove(window, { clientX: 60, clientY: 0 })
    expect(onChange).toHaveBeenCalledWith([20, 75])

    fireEvent.pointerUp(window, { clientX: 60, clientY: 0 })
    expect(onChangeEnd).toHaveBeenCalledWith([30, 75])

    cleanup()
  })

  test("pointer interaction selects closest thumb for range slider (second thumb)", () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()

    render(
      <Slider.Root
        defaultValue={[25, 75]}
        trackProps={{ "data-testid": "track" }}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { left: 0, width: 200 })

    // Click closer to the second thumb (75% = 150px)
    fireEvent.pointerDown(track, { clientX: 160, clientY: 0 })
    expect(onChangeStart).toHaveBeenCalledWith([25, 80])

    fireEvent.pointerUp(window, { clientX: 160, clientY: 0 })
    expect(onChangeEnd).toHaveBeenCalledWith([25, 80])

    cleanup()
  })

  test("pointer interaction does not trigger callbacks when disabled", () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    const onChange = vi.fn()

    render(
      <Slider.Root
        defaultValue={50}
        disabled
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { left: 0, width: 200 })

    fireEvent.pointerDown(track, { clientX: 100, clientY: 0 })
    fireEvent.pointerMove(window, { clientX: 120, clientY: 0 })
    fireEvent.pointerUp(window, { clientX: 120, clientY: 0 })

    expect(onChangeStart).not.toHaveBeenCalled()
    expect(onChange).not.toHaveBeenCalled()
    expect(onChangeEnd).not.toHaveBeenCalled()

    cleanup()
  })

  test("vertical slider pointer interaction uses y-axis", () => {
    const onChange = vi.fn()

    render(
      <Slider.Root
        defaultValue={50}
        orientation="vertical"
        trackProps={{ "data-testid": "track" }}
        onChange={onChange}
      />,
    )

    const track = screen.getByTestId("track")
    const cleanup = mockRect(track, { bottom: 200, height: 200, top: 0 })

    // bottom(200) - clientY(60) = 140, 140/200 = 70% -> value ~70
    fireEvent.pointerDown(track, { clientX: 0, clientY: 60 })
    expect(onChange).toHaveBeenCalledWith(70)

    fireEvent.pointerUp(window, { clientX: 0, clientY: 60 })

    cleanup()
  })

  test("range slider keyboard PageUp on first thumb", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={[25, 75]} onChange={onChange} />)

    const sliders = screen.getAllByRole("slider")
    fireEvent.keyDown(sliders[0]!, { key: "PageUp" })

    expect(onChange).toHaveBeenCalledWith([35, 75])
  })

  test("range slider keyboard PageDown on second thumb", () => {
    const onChange = vi.fn()

    render(<Slider.Root defaultValue={[25, 75]} onChange={onChange} />)

    const sliders = screen.getAllByRole("slider")
    fireEvent.keyDown(sliders[1]!, { key: "PageDown" })

    expect(onChange).toHaveBeenCalledWith([25, 65])
  })
})
