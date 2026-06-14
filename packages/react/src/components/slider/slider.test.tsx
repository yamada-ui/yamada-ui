import { a11y, fireEvent, render, screen } from "#test"
import { Slider } from "."

describe("<Slider />", () => {
  test("renders component correctly", async () => {
    await a11y(<Slider.Root defaultValue={50} />)
  })

  test("sets aria attributes correctly", () => {
    render(<Slider.Root defaultValue={50} />)

    const thumb = screen.getByRole("slider")
    expect(thumb).toHaveAttribute("aria-valuenow", "50")
    expect(thumb).toHaveAttribute("aria-valuetext", "50")
    expect(thumb).toHaveAttribute("aria-valuemin", "0")
    expect(thumb).toHaveAttribute("aria-valuemax", "100")
    expect(thumb).toHaveAttribute("aria-orientation", "horizontal")
  })

  test("disabled Slider sets aria-disabled and tabIndex -1", () => {
    render(<Slider.Root disabled />)

    const thumb = screen.getByRole("slider")
    expect(thumb).toHaveAttribute("aria-disabled")
    expect(thumb).toHaveAttribute("tabindex", "-1")
  })

  test("readonly Slider sets aria-readonly", () => {
    render(<Slider.Root readOnly />)

    expect(screen.getByRole("slider")).toHaveAttribute("aria-readonly")
  })

  test("interactive thumb has tabIndex 0", () => {
    render(<Slider.Root defaultValue={50} />)

    expect(screen.getByRole("slider")).toHaveAttribute("tabindex", "0")
  })

  test("renders with orientation data attribute", () => {
    render(<Slider.Root data-testid="slider" defaultValue={50} />)

    expect(screen.getByTestId("slider")).toHaveAttribute(
      "data-orientation",
      "horizontal",
    )
  })

  test("renders range slider with two thumbs and aria-valuenow", () => {
    render(<Slider.Root defaultValue={[25, 75]} />)

    const sliders = screen.getAllByRole("slider")
    expect(sliders).toHaveLength(2)
    expect(sliders[0]).toHaveAttribute("aria-valuenow", "25")
    expect(sliders[1]).toHaveAttribute("aria-valuenow", "75")
  })

  test("range slider sets data-start, data-end, and per-thumb aria-valuemin/max", () => {
    render(<Slider.Root defaultValue={[20, 80]} />)

    const sliders = screen.getAllByRole("slider")
    expect(sliders[0]).toHaveAttribute("data-start")
    expect(sliders[1]).toHaveAttribute("data-end")
    expect(sliders[0]).toHaveAttribute("aria-valuemin", "0")
    expect(sliders[0]).toHaveAttribute("aria-valuemax", "80")
    expect(sliders[1]).toHaveAttribute("aria-valuemin", "20")
    expect(sliders[1]).toHaveAttribute("aria-valuemax", "100")
  })

  test("range slider with betweenThumbs prevents overlap", () => {
    render(<Slider.Root betweenThumbs={10} defaultValue={[45, 55]} />)

    const sliders = screen.getAllByRole("slider")
    expect(sliders[0]).toHaveAttribute("aria-valuemax", "45")
    expect(sliders[1]).toHaveAttribute("aria-valuemin", "55")
  })

  test("respects custom min and max", () => {
    render(<Slider.Root defaultValue={50} max={200} min={10} />)

    const thumb = screen.getByRole("slider")
    expect(thumb).toHaveAttribute("aria-valuemin", "10")
    expect(thumb).toHaveAttribute("aria-valuemax", "200")
  })

  test("warns when max is less than min", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})

    render(<Slider.Root defaultValue={50} max={0} min={100} />)

    expect(warnSpy).toHaveBeenCalledWith(
      "Do not assign a number less than 'min' to 'max'",
    )

    warnSpy.mockRestore()
  })

  test("single slider renders one hidden input", () => {
    const { container } = render(
      <Slider.Root name="slider" defaultValue={50} />,
    )

    const inputs = container.querySelectorAll('input[type="hidden"]')
    expect(inputs).toHaveLength(1)
    expect(inputs[0]).toHaveAttribute("value", "50")
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

  test("passes id, name, and required to hidden input", () => {
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

  test("getAriaValueText is used for aria-valuetext on single slider", () => {
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

  test("sets range CSS variables on root for single slider", () => {
    render(<Slider.Root data-testid="slider" defaultValue={50} />)

    const root = screen.getByTestId("slider")
    expect(root.style.getPropertyValue("--range-start")).toBe("0%")
    expect(root.style.getPropertyValue("--range-end")).toBe("50%")
  })

  test("sets range CSS variables on root for range slider", () => {
    render(<Slider.Root data-testid="slider" defaultValue={[25, 75]} />)

    const root = screen.getByTestId("slider")
    expect(root.style.getPropertyValue("--range-start")).toBe("25%")
    expect(root.style.getPropertyValue("--range-end")).toBe("75%")
  })

  test("controlled single slider value updates correctly", () => {
    const { rerender } = render(<Slider.Root value={30} />)
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "30")

    rerender(<Slider.Root value={70} />)
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "70")
  })

  test("controlled range slider value updates correctly", () => {
    const { rerender } = render(<Slider.Root value={[20, 80]} />)
    let sliders = screen.getAllByRole("slider")
    expect(sliders[0]).toHaveAttribute("aria-valuenow", "20")
    expect(sliders[1]).toHaveAttribute("aria-valuenow", "80")

    rerender(<Slider.Root value={[30, 60]} />)
    sliders = screen.getAllByRole("slider")
    expect(sliders[0]).toHaveAttribute("aria-valuenow", "30")
    expect(sliders[1]).toHaveAttribute("aria-valuenow", "60")
  })

  test("renders custom children using SliderTrack/Range/Thumb", () => {
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

  test("range slider data-range attribute on range element", () => {
    render(
      <Slider.Root defaultValue={[25, 75]}>
        <Slider.Track>
          <Slider.Range data-testid="range" />
          <Slider.Thumbs />
        </Slider.Track>
      </Slider.Root>,
    )

    expect(screen.getByTestId("range")).toHaveAttribute("data-range")
  })

  test("range slider with custom children using SliderThumbs", () => {
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
        defaultValue={50}
        marks={[25, 50, 75]}
        marksProps={{ "data-testid": "mark" }}
      />,
    )

    expect(screen.getAllByTestId("mark")).toHaveLength(3)
  })

  test("mark has aria-hidden, role=presentation, --mark-position style, and data-indicator default", () => {
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
    expect(mark).toHaveAttribute("data-indicator")
    expect(mark.style.getPropertyValue("--mark-position")).toBe("30%")
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

    expect(screen.getByTestId("mark")).not.toHaveAttribute("data-indicator")
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

    expect(screen.getByTestId("mark-25")).toHaveAttribute("data-between")
    expect(screen.getByTestId("mark-75")).not.toHaveAttribute("data-between")
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

    expect(screen.getByTestId("mark-10")).not.toHaveAttribute("data-between")
    expect(screen.getByTestId("mark-50")).toHaveAttribute("data-between")
    expect(screen.getByTestId("mark-90")).not.toHaveAttribute("data-between")
  })

  describe("keyboard interactions", () => {
    test.each([
      ["ArrowRight", 51],
      ["ArrowUp", 51],
      ["ArrowLeft", 49],
      ["ArrowDown", 49],
      ["Home", 0],
      ["End", 100],
      ["PageUp", 60],
      ["PageDown", 40],
    ])("%s updates single slider value to %i", (key, expected) => {
      const onChange = vi.fn()

      render(<Slider.Root defaultValue={50} onChange={onChange} />)

      fireEvent.keyDown(screen.getByRole("slider"), { key })

      expect(onChange).toHaveBeenCalledWith(expected)
    })

    test("respects custom step", () => {
      const onChange = vi.fn()

      render(<Slider.Root defaultValue={50} step={5} onChange={onChange} />)

      fireEvent.keyDown(screen.getByRole("slider"), { key: "ArrowRight" })

      expect(onChange).toHaveBeenCalledWith(55)
    })

    test("does not change value when disabled", () => {
      const onChange = vi.fn()

      render(<Slider.Root defaultValue={50} disabled onChange={onChange} />)

      fireEvent.keyDown(screen.getByRole("slider"), { key: "ArrowRight" })

      expect(onChange).not.toHaveBeenCalled()
    })

    test("does not change value when readOnly", () => {
      const onChange = vi.fn()

      render(<Slider.Root defaultValue={50} readOnly onChange={onChange} />)

      fireEvent.keyDown(screen.getByRole("slider"), { key: "ArrowRight" })

      expect(onChange).not.toHaveBeenCalled()
    })

    test.each([
      ["ArrowRight", 0, [26, 75]],
      ["ArrowLeft", 1, [25, 74]],
      ["Home", 1, [25, 25]],
      ["End", 0, [75, 75]],
      ["PageUp", 0, [35, 75]],
      ["PageDown", 1, [25, 65]],
    ] as const)(
      "%s on thumb %i updates range slider to %p",
      (key, index, expected) => {
        const onChange = vi.fn()

        render(<Slider.Root defaultValue={[25, 75]} onChange={onChange} />)

        const sliders = screen.getAllByRole("slider")
        fireEvent.keyDown(sliders[index]!, { key })

        expect(onChange).toHaveBeenCalledWith(expected)
      },
    )
  })
})
