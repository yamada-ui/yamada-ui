import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "."
import { a11y, act, fireEvent, render, renderHook, screen } from "@/test"
import { noop } from "../../utils"
import { useSlider } from "./slider"

describe("<Slider />", () => {
  test("should render correctly", async () => {
    const { container } = render(<Slider />)
    await a11y(container)
  })

  test("should have correct class", () => {
    render(<Slider data-testid="slider" />)
    expect(screen.getByTestId("slider")).toHaveClass("ui-slider")
  })

  test("should have correct default value", () => {
    render(<Slider data-testid="slider" defaultValue={25} />)
    expect(
      screen.getByTestId("slider").getElementsByTagName("input")[0],
    ).toHaveValue(String(25))
  })

  test("Slider thumb should have correct aria-valuemin and aria-valuemax", () => {
    const { max, min } = { max: 100, min: 0 }
    render(<Slider max={max} min={min} />)

    const sliderThumb = screen.getByRole("slider")

    expect(sliderThumb).toHaveAttribute("aria-valuemin", String(min))
    expect(sliderThumb).toHaveAttribute("aria-valuemax", String(max))
  })

  test("Slider thumb should have correct aria-valuenow", () => {
    const defaultValue = 25
    render(<Slider defaultValue={defaultValue} />)

    const sliderThumb = screen.getByRole("slider")
    expect(sliderThumb).toHaveAttribute("aria-valuenow", String(defaultValue))
  })

  test("can change slider orientation", () => {
    const { container, rerender } = render(<Slider orientation="vertical" />)

    let sliderThumb = container.querySelector(".ui-slider__thumb")
    let filledTrack = container.querySelector(".ui-slider__track")

    expect(sliderThumb).toHaveAttribute("aria-orientation", "vertical")
    expect(filledTrack).toHaveStyle("height: 100%")

    rerender(<Slider orientation="horizontal" />)

    sliderThumb = container.querySelector(".ui-slider__thumb")
    filledTrack = container.querySelector(".ui-slider__track")

    expect(sliderThumb).toHaveAttribute("aria-orientation", "horizontal")
    expect(filledTrack).toHaveStyle("width: 100%")
  })

  test("can be reversed", () => {
    const { container } = render(<Slider reversed />)
    const filledTrack = container.querySelector(".ui-slider__track-filled")
    expect(filledTrack).toHaveStyle("right: 0%")
  })

  test("can be disabled", () => {
    render(<Slider data-testid="slider" disabled />)

    const slider = screen.getByTestId("slider")
    const sliderInput = slider.getElementsByTagName("input")[0]
    const sliderThumb = screen.getByRole("slider")

    expect(sliderInput).toBeDisabled()
    expect(sliderInput).toHaveAttribute("aria-disabled", "true")
    expect(sliderThumb).toHaveAttribute("aria-disabled", "true")
  })

  test("Slider readOnly tests", () => {
    const { rerender } = render(<Slider data-testid="slider1" readOnly />)

    let slider = screen.getByTestId("slider1")
    let sliderInput = slider.getElementsByTagName("input")[0]
    let sliderThumb = screen.getByRole("slider")

    expect(sliderInput).toHaveAttribute("aria-readonly", "true")
    expect(sliderInput).toHaveAttribute("readonly", "")
    expect(sliderThumb).toHaveAttribute("aria-readonly", "true")

    rerender(<Slider data-testid="slider2" focusThumbOnChange={false} />)

    slider = screen.getByTestId("slider2")
    sliderInput = slider.getElementsByTagName("input")[0]
    sliderThumb = screen.getByRole("slider")

    expect(sliderInput).toHaveAttribute("aria-readonly", "true")
    expect(sliderInput).toHaveAttribute("readonly", "")
    expect(sliderThumb).toHaveAttribute("aria-readonly", "true")
  })

  test("can have correct step", async () => {
    const step = 10
    const defaultValue = 0
    const { container } = render(
      <Slider defaultValue={defaultValue} max={100} min={0} step={step} />,
    )

    const slider = screen.getByRole("slider")
    const sliderInput = container.getElementsByTagName("input")[0]

    await act(() => fireEvent.keyDown(slider, { key: "ArrowRight" }))

    expect(Number(sliderInput?.value)).toBe(defaultValue + step)
  })

  test("should throw error when max is less than min", () => {
    const min = 10
    const max = 5

    const renderWithInvalidProps = () => render(<Slider max={max} min={min} />)

    const consoleSpy = vi.spyOn(console, "error")
    consoleSpy.mockImplementation(noop)

    expect(renderWithInvalidProps).toThrow(
      "Do not assign a number less than 'min' to 'max'",
    )

    consoleSpy.mockRestore()
  })

  test("key down should perform correct actions", async () => {
    const min = 0
    const max = 100
    const tenStep = (max - min) / 10
    const { container } = render(
      <Slider defaultValue={0} max={max} min={min} step={10} />,
    )

    const slider = screen.getByRole("slider")
    const sliderInput = container.getElementsByTagName("input")[0]

    await act(() => fireEvent.keyDown(slider, { key: "ArrowRight" }))
    expect(Number(sliderInput?.value)).toBe(10)
    await act(() => fireEvent.keyDown(slider, { key: "ArrowLeft" }))
    expect(Number(sliderInput?.value)).toBe(0)

    await act(() => fireEvent.keyDown(slider, { key: "ArrowUp" }))
    expect(Number(sliderInput?.value)).toBe(10)
    await act(() => fireEvent.keyDown(slider, { key: "ArrowDown" }))
    expect(Number(sliderInput?.value)).toBe(0)

    await act(() => fireEvent.keyDown(slider, { key: "PageUp" }))
    expect(Number(sliderInput?.value)).toBe(0 + tenStep)
    await act(() => fireEvent.keyDown(slider, { key: "PageDown" }))
    expect(Number(sliderInput?.value)).toBe(0)

    await act(() => fireEvent.keyDown(slider, { key: "Home" }))
    expect(Number(sliderInput?.value)).toBe(min)
    await act(() => fireEvent.keyDown(slider, { key: "End" }))
    expect(Number(sliderInput?.value)).toBe(max)
  })

  test("if SliderTrack, SliderFilledTrack and SliderThumb are rendered", () => {
    const { container } = render(
      <Slider>
        <SliderTrack data-testid="slider-track">
          <SliderFilledTrack data-testid="slider-filled-track" />
        </SliderTrack>
        <SliderThumb data-testid="slider-thumb" />
      </Slider>,
    )

    expect(container).toContainElement(screen.getByTestId("slider-track"))
    expect(container).toContainElement(
      screen.getByTestId("slider-filled-track"),
    )
    expect(container).toContainElement(screen.getByTestId("slider-thumb"))
  })

  test("should allow custom thumb", () => {
    const { container } = render(
      <>
        <Slider
          thumbProps={{
            children: "test",
          }}
        />
        <Slider>
          <SliderThumb>test</SliderThumb>
        </Slider>
      </>,
    )

    const sliderThumbs = container.querySelectorAll(".ui-slider__thumb")

    sliderThumbs.forEach((sliderThumb) => {
      expect(sliderThumb.textContent).toBe("test")
    })
  })

  test("key down for keys not in the list should do nothing", async () => {
    const min = 0
    const max = 100
    const { container } = render(
      <Slider defaultValue={0} max={max} min={min} step={10} />,
    )

    const sliderThumb = screen.getByRole("slider")
    const sliderInput = container.getElementsByTagName("input")[0]

    await act(() => fireEvent.focus(sliderThumb))
    await act(() => fireEvent.keyDown(sliderThumb, { key: "Enter" }))
    expect(Number(sliderInput?.value)).toBe(0)
  })

  test("should use slider with props", () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    const onChange = vi.fn()

    const { result } = renderHook(() =>
      useSlider({
        id: "test-slider",
        name: "test-slider",
        defaultValue: 50,
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

    expect(result.current.value).toBe(50)

    act(() => {
      result.current.stepUp()
    })
    expect(result.current.value).toBe(51)
    expect(onChange).toHaveBeenCalledWith(51)

    act(() => {
      result.current.stepDown()
    })
    expect(result.current.value).toBe(50)
    expect(onChange).toHaveBeenCalledWith(50)

    act(() => {
      result.current.reset()
    })
    expect(result.current.value).toBe(50)
    expect(onChange).toHaveBeenCalledWith(50)

    act(() => {
      result.current.stepTo(75)
    })
    expect(result.current.value).toBe(75)
    expect(onChange).toHaveBeenCalledWith(75)
  })

  test("Slider component with pointer events", () => {
    const onChangeStart = vi.fn()
    const onChangeEnd = vi.fn()
    const onChange = vi.fn()

    const { getByRole } = render(
      <Slider
        id="test-slider"
        name="test"
        defaultValue={50}
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

    const slider = getByRole("slider")

    act(() => {
      fireEvent.pointerDown(slider)
      fireEvent.pointerUp(slider)
    })

    expect(onChangeStart).toHaveBeenCalledWith(50)
    expect(onChange).toHaveBeenCalledWith(0)
    expect(onChangeEnd).toHaveBeenCalledWith(50)
  })
})
