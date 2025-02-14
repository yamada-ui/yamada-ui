import { a11y, act, fireEvent, render, renderHook, screen } from "../../../test"
import { noop } from "../../utils"
import { RangeSlider, RangeSliderEndThumb, RangeSliderStartThumb } from "./"
import { useRangeSlider } from ".//range-slider"

describe("<RangeSlider />", () => {
  test("should render correctly", async () => {
    const { container } = render(<RangeSlider />)
    await a11y(container)
  })

  test("should have correct class", () => {
    render(<RangeSlider data-testid="slider" />)
    expect(screen.getByTestId("slider")).toHaveClass("ui-slider")
  })

  test("should have correct default values", () => {
    const defaultValue: [number, number] = [0, 25]
    const { getByTestId } = render(
      <RangeSlider data-testid="slider" defaultValue={defaultValue} />,
    )

    const inputs = getByTestId("slider").getElementsByTagName("input")

    defaultValue.forEach((value, index) => {
      expect(inputs[index]).toHaveValue(String(value))
    })
  })

  test("RangeSlider thumbs should have correct aria-valuemin and aria-valuemax", () => {
    const { max, min } = { max: 100, min: 0 }
    render(<RangeSlider max={max} min={min} />)

    const sliderThumbs = screen.getAllByRole("slider")

    sliderThumbs.forEach((sliderThumb) => {
      expect(sliderThumb).toHaveAttribute("aria-valuemin", String(min))
      expect(sliderThumb).toHaveAttribute("aria-valuemax", String(max))
    })
  })

  test("RangeSlider thumbs should have correct aria-valuenow", () => {
    const defaultValue: [number, number] = [10, 50]
    render(<RangeSlider defaultValue={defaultValue} />)

    const sliderThumbs = screen.getAllByRole("slider")

    sliderThumbs.forEach((sliderThumb, index) => {
      expect(sliderThumb).toHaveAttribute(
        "aria-valuenow",
        String(defaultValue[index]),
      )
    })
  })

  test("can change RangeSlider orientation", () => {
    const { container, rerender } = render(
      <RangeSlider data-testid="slider" orientation="vertical" />,
    )

    let sliderThumbs = container.querySelectorAll(".ui-slider__thumb")
    let filledTrack = container.querySelector(".ui-slider__track")

    sliderThumbs.forEach((sliderThumb) => {
      expect(sliderThumb).toHaveAttribute("aria-orientation", "vertical")
    })
    expect(filledTrack).toHaveStyle("height: 100%")

    rerender(<RangeSlider data-testid="slider" orientation="horizontal" />)

    sliderThumbs = container.querySelectorAll(".ui-slider__thumb")
    filledTrack = container.querySelector(".ui-slider__track")

    sliderThumbs.forEach((sliderThumb) => {
      expect(sliderThumb).toHaveAttribute("aria-orientation", "horizontal")
    })
    expect(filledTrack).toHaveStyle("width: 100%")
  })

  test("can be reversed", () => {
    const { max, min } = { max: 100, min: 0 }
    const { container } = render(
      <RangeSlider defaultValue={[min, max]} max={max} min={min} reversed />,
    )
    const sliderThumbs = container.querySelectorAll(".ui-slider__thumb")
    const filledTrack = container.querySelector(".ui-slider__track-filled")

    expect(sliderThumbs[0]?.id).toContain("-0")
    expect(sliderThumbs[1]?.id).toContain("-1")

    expect(filledTrack).toHaveStyle("right: 0%")
  })

  test("can be disabled", () => {
    const { container } = render(<RangeSlider disabled />)
    const sliderInputs = container.getElementsByTagName("input")
    const sliderThumbs = container.querySelectorAll(".ui-slider__thumb")

    Array.from(sliderInputs).forEach((input) => {
      expect(input).toBeDisabled()
      expect(input).toHaveAttribute("aria-disabled", "true")
    })

    sliderThumbs.forEach((sliderThumb) => {
      expect(sliderThumb).toHaveAttribute("aria-disabled", "true")
    })
  })

  test("can be readOnly", () => {
    render(<RangeSlider data-testid="slider" readOnly />)

    const slider = screen.getByTestId("slider")
    const sliderInputs = slider.getElementsByTagName("input")
    const sliderThumbs = slider.querySelectorAll('[role="slider"]')

    Array.from(sliderInputs).forEach((sliderInput) => {
      expect(sliderInput).toHaveAttribute("aria-readonly", "true")
      expect(sliderInput).toHaveAttribute("readonly", "")
    })

    Array.from(sliderThumbs).forEach((sliderThumb) => {
      expect(sliderThumb).toHaveAttribute("aria-readonly", "true")
    })
  })

  test("should throw error when max is less than min", () => {
    const min = 10
    const max = 5

    const renderWithInvalidProps = () =>
      render(<RangeSlider max={max} min={min} />)

    const consoleSpy = vi.spyOn(console, "error")
    consoleSpy.mockImplementation(noop)

    expect(renderWithInvalidProps).toThrow(
      "Do not assign a number less than 'min' to 'max'",
    )

    consoleSpy.mockRestore()
  })

  test("should set readOnly to true when focusThumbOnChange is false", () => {
    render(<RangeSlider data-testid="slider" focusThumbOnChange={false} />)

    const slider = screen.getByTestId("slider")
    const sliderInputs = slider.getElementsByTagName("input")

    Array.from(sliderInputs).forEach((sliderInput) => {
      expect(sliderInput).toHaveAttribute("aria-readonly", "true")
      expect(sliderInput).toHaveAttribute("readonly", "")
    })

    const sliderThumbs = slider.querySelectorAll('[role="slider"]')

    Array.from(sliderThumbs).forEach((sliderThumb) => {
      expect(sliderThumb).toHaveAttribute("aria-readonly", "true")
    })
  })

  test("key down should perform correct actions", async () => {
    const min = 0
    const max = 100
    const tenStep = (max - min) / 10
    const { container } = render(
      <RangeSlider
        data-testid="slider"
        defaultValue={[0, 50]}
        max={max}
        min={min}
        step={10}
      />,
    )

    const sliderThumbs = screen.getAllByRole("slider")
    const sliderInputs = container.getElementsByTagName("input")

    let sliderThumb = sliderThumbs[1]!

    await act(() => fireEvent.focus(sliderThumb))
    await act(() => fireEvent.keyDown(sliderThumb, { key: "ArrowRight" }))
    expect(Number(sliderInputs[1]?.value)).toBe(60)
    await act(() => fireEvent.keyDown(sliderThumb, { key: "ArrowLeft" }))
    expect(Number(sliderInputs[1]?.value)).toBe(50)

    await act(() => fireEvent.keyDown(sliderThumb, { key: "ArrowUp" }))
    expect(Number(sliderInputs[1]?.value)).toBe(60)
    await act(() => fireEvent.keyDown(sliderThumb, { key: "ArrowDown" }))
    expect(Number(sliderInputs[1]?.value)).toBe(50)

    await act(() => fireEvent.keyDown(sliderThumb, { key: "PageUp" }))
    expect(Number(sliderInputs[1]?.value)).toBe(50 + tenStep)
    await act(() => fireEvent.keyDown(sliderThumb, { key: "PageDown" }))
    expect(Number(sliderInputs[1]?.value)).toBe(50)

    await act(() => fireEvent.keyDown(sliderThumb, { key: "Home" }))
    expect(Number(sliderInputs[1]?.value)).toBe(Number(sliderInputs[0]?.value))
    await act(() => fireEvent.keyDown(sliderThumb, { key: "End" }))
    expect(Number(sliderInputs[1]?.value)).toBe(max)

    sliderThumb = sliderThumbs[0]!

    await act(() => fireEvent.focus(sliderThumb))
    await act(() => fireEvent.keyDown(sliderThumb, { key: "ArrowRight" }))
    expect(Number(sliderInputs[0]?.value)).toBe(10)
    await act(() => fireEvent.keyDown(sliderThumb, { key: "ArrowLeft" }))
    expect(Number(sliderInputs[0]?.value)).toBe(0)

    await act(() => fireEvent.keyDown(sliderThumb, { key: "ArrowUp" }))
    expect(Number(sliderInputs[0]?.value)).toBe(10)
    await act(() => fireEvent.keyDown(sliderThumb, { key: "ArrowDown" }))
    expect(Number(sliderInputs[0]?.value)).toBe(0)

    await act(() => fireEvent.keyDown(sliderThumb, { key: "PageUp" }))
    expect(Number(sliderInputs[0]?.value)).toBe(0 + tenStep)
    await act(() => fireEvent.keyDown(sliderThumb, { key: "PageDown" }))
    expect(Number(sliderInputs[0]?.value)).toBe(0)

    await act(() => fireEvent.keyDown(sliderThumb, { key: "Home" }))
    expect(Number(sliderInputs[0]?.value)).toBe(min)
    await act(() => fireEvent.keyDown(sliderThumb, { key: "End" }))
    expect(Number(sliderInputs[0]?.value)).toBe(Number(sliderInputs[1]?.value))
  })

  test("key down for keys not in the list should do nothing", async () => {
    const min = 0
    const max = 100
    const { container } = render(
      <RangeSlider defaultValue={[0, 50]} max={max} min={min} step={10} />,
    )

    const sliderThumb = screen.getAllByRole("slider")[0]!
    const sliderInput = container.getElementsByTagName("input")[0]!

    await act(() => fireEvent.focus(sliderThumb))
    await act(() => fireEvent.keyDown(sliderThumb, { key: "Enter" }))
    expect(Number(sliderInput.value)).toBe(0)
  })

  test("should allow custom thumb for RangeSlider", () => {
    const { container } = render(
      <>
        <RangeSlider
          thumbProps={{
            children: "test",
          }}
        />
        <RangeSlider>
          <RangeSliderStartThumb>test</RangeSliderStartThumb>
          <RangeSliderEndThumb>test</RangeSliderEndThumb>
        </RangeSlider>
      </>,
    )

    const rangeSliderThumbs = container.querySelectorAll(
      ".ui-range-slider__thumb",
    )

    rangeSliderThumbs.forEach((rangeSliderThumb) => {
      expect(rangeSliderThumb.textContent).toBe("test")
    })
  })

  test("should use RangeSlider with props", () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    const onChange = vi.fn()

    const { result } = renderHook(() =>
      useRangeSlider({
        id: "test-slider",
        name: "test-slider",
        defaultValue: [25, 75],
        focusThumbOnChange: true,
        max: 100,
        min: 0,
        orientation: "horizontal",
        reversed: false,
        step: 1,
        onChange,
        onChangeEnd,
        onChangeStart,
      }),
    )

    expect(result.current.values).toStrictEqual([25, 75])

    act(() => {
      result.current.stepUp(1)
    })
    expect(result.current.values).toStrictEqual([25, 76])
    expect(onChange).toHaveBeenCalledWith([25, 76])

    act(() => {
      result.current.stepDown(1)
    })
    expect(result.current.values).toStrictEqual([25, 75])
    expect(onChange).toHaveBeenCalledWith([25, 75])

    act(() => {
      result.current.reset()
    })
    expect(result.current.values).toStrictEqual([25, 75])
    expect(onChange).toHaveBeenCalledWith([25, 75])
  })

  test("RangeSlider component with pointer events", () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    const onChange = vi.fn()

    const { getAllByRole } = render(
      <RangeSlider
        id="test-slider"
        name="test"
        defaultValue={[25, 75]}
        max={100}
        min={0}
        orientation="horizontal"
        reversed={false}
        step={1}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
        onChangeStart={onChangeStart}
      />,
    )

    const sliderStartThumb = getAllByRole("slider")[0]!
    const sliderEndThumb = getAllByRole("slider")[1]!

    act(() => {
      fireEvent.focus(sliderStartThumb)
      fireEvent.pointerDown(sliderStartThumb)
      fireEvent.pointerUp(sliderStartThumb)
    })

    expect(onChangeStart).toHaveBeenCalledWith([25, 75])
    expect(onChange).toHaveBeenCalledWith([0, 75])
    expect(onChangeEnd).toHaveBeenCalledWith([25, 75])

    act(() => {
      fireEvent.focus(sliderEndThumb)
      fireEvent.pointerDown(sliderEndThumb)
      fireEvent.pointerUp(sliderEndThumb)
    })

    expect(onChangeStart).toHaveBeenCalledWith([25, 75])
    expect(onChange).toHaveBeenCalledWith([0, 75])
    expect(onChangeEnd).toHaveBeenCalledWith([0, 75])
  })
})
