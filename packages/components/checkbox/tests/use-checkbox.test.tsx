import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  TouchEventHandler,
} from "react"
import { act, fireEvent, render, renderHook, screen } from "@yamada-ui/test"
import { useCheckbox } from "../src/use-checkbox"

const EnhancedCheckbox = (props: {
  text: string
  checked?: boolean
  indeterminate?: boolean
  readOnly?: boolean
  required?: boolean
  value?: string
  onContainerClick?: MouseEventHandler<HTMLLabelElement>
  onIconMouseDown?: MouseEventHandler<HTMLDivElement>
  onIconMouseEnter?: MouseEventHandler<HTMLDivElement>
  onIconMouseLeave?: MouseEventHandler<HTMLDivElement>
  onInputBlur?: FocusEventHandler<HTMLDivElement>
  onInputClick?: MouseEventHandler<HTMLInputElement>
  onInputFocus?: FocusEventHandler<HTMLDivElement>
  onInputKeyDown?: KeyboardEventHandler<HTMLInputElement>
  onInputKeyUp?: KeyboardEventHandler<HTMLInputElement>
  onLabelMouseDown?: MouseEventHandler<HTMLDivElement>
  onLabelTouchStart?: TouchEventHandler<HTMLDivElement>
}) => {
  const {
    text,
    onContainerClick,
    onIconMouseDown,
    onIconMouseEnter,
    onIconMouseLeave,
    onInputBlur,
    onInputClick,
    onInputFocus,
    onInputKeyDown,
    onInputKeyUp,
    onLabelMouseDown,
    onLabelTouchStart,
    ...rest
  } = props
  const {
    active,
    checked,
    focused,
    hovered,
    getContainerProps,
    getIconProps,
    getInputProps,
    getLabelProps,
  } = useCheckbox({ ...rest })

  return (
    <label
      data-testid="enhanced-checkbox-label"
      {...getContainerProps({
        onClick: onContainerClick,
      })}
    >
      <input
        type="checkbox"
        data-testid="enhanced-checkbox-input"
        checked={checked}
        {...getInputProps({
          onBlur: onInputBlur,
          onClick: onInputClick,
          onFocus: onInputFocus,
          onKeyDown: onInputKeyDown,
          onKeyUp: onInputKeyUp,
        })}
      />
      <span
        data-testid="enhanced-checkbox-value-span"
        {...getIconProps({
          onMouseDown: onIconMouseDown,
          onMouseEnter: onIconMouseEnter,
          onMouseLeave: onIconMouseLeave,
        })}
      >
        {checked ? "TRUE" : "FALSE"}
      </span>
      <span data-testid="enhanced-checkbox-focus-span">
        {focused ? "TRUE" : "FALSE"}
      </span>
      <span data-testid="enhanced-checkbox-hover-span">
        {hovered ? "TRUE" : "FALSE"}
      </span>
      <span data-testid="enhanced-checkbox-active-span">
        {active ? "TRUE" : "FALSE"}
      </span>
      <div
        data-testid="enhanced-checkbox-content"
        {...getLabelProps({
          onMouseDown: onLabelMouseDown,
          onTouchStart: onLabelTouchStart,
        })}
      >
        {text}
      </div>
    </label>
  )
}

describe("useCheckbox", () => {
  test("Does `checked` function properly", () => {
    const { result } = renderHook(() => useCheckbox({ checked: true }))
    expect(result.current.checked).toBeTruthy()
  })

  test("Does indeterminate function properly", () => {
    const { result } = renderHook(() => useCheckbox({ indeterminate: true }))
    expect(result.current.indeterminate).toBeTruthy()
  })

  test("should handle focus event", () => {
    const { result } = renderHook(() => useCheckbox({}))
    const { getInputProps } = result.current

    const { onFocus } = getInputProps()

    expect(result.current.focused).toBeFalsy()
    expect(typeof onFocus).toBe("function")

    act(() => {
      onFocus!({} as any)
    })
    expect(result.current.focused).toBeTruthy()
  })

  test("should handle blur event", () => {
    const { result } = renderHook(() => useCheckbox({}))
    const { getInputProps } = result.current

    const { onBlur, onFocus } = getInputProps()

    expect(result.current.focused).toBeFalsy()
    expect(typeof onBlur).toBe("function")

    act(() => {
      onFocus!({} as any)
    })
    expect(result.current.focused).toBeTruthy()

    act(() => {
      onBlur!({} as any)
    })
    expect(result.current.focused).toBeFalsy()
  })

  test("should handle uncontrolled checked state", () => {
    const { result } = renderHook(() => useCheckbox({ defaultChecked: false }))

    const { getInputProps } = result.current

    const { onChange } = getInputProps()
    expect(result.current.checked).toBeFalsy()
    expect(typeof onChange).toBe("function")

    act(() => {
      onChange!({ target: { checked: true } } as any)
    })

    expect(result.current.checked).toBeTruthy()
  })

  test("should handle controlled checked state", () => {
    const { rerender, result } = renderHook(
      ({ checked }: { checked: boolean }) => useCheckbox({ checked }),
      {
        initialProps: { checked: false },
      },
    )

    expect(result.current.checked).toBeFalsy()

    rerender({ checked: true })

    expect(result.current.checked).toBeTruthy()
  })

  test("Does disabled function properly", () => {
    const { rerender, result } = renderHook(
      ({ disabled }) => useCheckbox({ disabled }),
      { initialProps: { disabled: true } },
    )

    const mockEvent = {
      target: { checked: true },
      preventDefault: vi.fn(),
    } as any

    const { getInputProps } = result.current
    const { onChange } = getInputProps()

    expect(result.current.checked).toBeFalsy()

    act(() => {
      onChange!(mockEvent)
    })

    expect(result.current.checked).toBeFalsy()

    rerender({ disabled: false })

    act(() => {
      onChange!(mockEvent)
    })

    expect(result.current.checked).toBeTruthy()
  })

  test("should have icon props", () => {
    const { result } = renderHook(() => useCheckbox({}))

    const { getIconProps } = result.current
    expect(typeof getIconProps).toBe("function")

    const props = getIconProps({}, null)

    expect(props).toHaveProperty("onMouseDown")
    expect(typeof props.onMouseDown).toBe("function")

    expect(props).toHaveProperty("onMouseEnter")
    expect(typeof props.onMouseEnter).toBe("function")

    expect(props).toHaveProperty("onMouseLeave")
    expect(typeof props.onMouseLeave).toBe("function")

    expect(props).toHaveProperty("onMouseUp")
    expect(typeof props.onMouseUp).toBe("function")
  })

  test("should have container props", () => {
    const { result } = renderHook(() => useCheckbox({}))

    const { getContainerProps } = result.current
    expect(typeof getContainerProps).toBe("function")

    const props = getContainerProps({}, null)

    expect(props).toHaveProperty("onClick")
    expect(typeof props.onClick).toBe("function")
  })

  test("should have label props", () => {
    const { result } = renderHook(() => useCheckbox({}))

    const { getLabelProps } = result.current
    expect(typeof getLabelProps).toBe("function")

    const props = getLabelProps({}, null)

    expect(props).toHaveProperty("onMouseDown")
    expect(typeof props.onMouseDown).toBe("function")

    expect(props).toHaveProperty("onTouchStart")
    expect(typeof props.onTouchStart).toBe("function")
  })

  test("should have input props", () => {
    const { result } = renderHook(() => useCheckbox({}))

    const { getInputProps } = result.current
    expect(typeof getInputProps).toBe("function")

    const props = getInputProps({}, null)

    expect(props).toHaveProperty("onBlur")
    expect(typeof props.onBlur).toBe("function")

    expect(props).toHaveProperty("onChange")
    expect(typeof props.onChange).toBe("function")

    expect(props).toHaveProperty("onFocus")
    expect(typeof props.onFocus).toBe("function")

    expect(props).toHaveProperty("onKeyDown")
    expect(typeof props.onKeyDown).toBe("function")

    expect(props).toHaveProperty("onKeyUp")
    expect(typeof props.onKeyUp).toBe("function")

    expect(props).toHaveProperty("style")
  })

  test("should call the callback when mouse enters the icon element", () => {
    const onMouseEnterMock = vi.fn()
    render(
      <EnhancedCheckbox
        checked={false}
        text="Red"
        value="red"
        onIconMouseEnter={onMouseEnterMock}
      />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const CheckedSpanBox = screen.getByTestId("enhanced-checkbox-value-span")
    const HoveredSpanBox = screen.getByTestId("enhanced-checkbox-hover-span")
    expect(EnhancedCheckboxComponent).toContainElement(CheckedSpanBox)
    expect(EnhancedCheckboxComponent).toContainElement(HoveredSpanBox)

    expect(HoveredSpanBox).toHaveTextContent("FALSE")
    fireEvent.mouseEnter(CheckedSpanBox)
    expect(onMouseEnterMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "mouseenter",
        target: CheckedSpanBox,
      }),
    )
    expect(HoveredSpanBox).toHaveTextContent("TRUE")
  })

  test("should call the callback when mouse leaves the icon element", () => {
    const onMouseLeaveMock = vi.fn()
    render(
      <EnhancedCheckbox
        checked={false}
        text="Red"
        value="red"
        onIconMouseLeave={onMouseLeaveMock}
      />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const CheckedSpanBox = screen.getByTestId("enhanced-checkbox-value-span")
    const HoveredSpanBox = screen.getByTestId("enhanced-checkbox-hover-span")
    expect(EnhancedCheckboxComponent).toContainElement(CheckedSpanBox)

    fireEvent.mouseEnter(CheckedSpanBox)
    expect(HoveredSpanBox).toHaveTextContent("TRUE")
    fireEvent.mouseLeave(CheckedSpanBox)
    expect(onMouseLeaveMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "mouseleave",
        target: CheckedSpanBox,
      }),
    )
    expect(HoveredSpanBox).toHaveTextContent("FALSE")
  })

  test("should call the callback when a key is pressed on the input element", () => {
    const onKeyDownMock = vi.fn()
    render(
      <EnhancedCheckbox
        checked={false}
        text="Red"
        value="red"
        onInputKeyDown={onKeyDownMock}
      />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const InputBox = screen.getByTestId("enhanced-checkbox-input")
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)

    fireEvent.keyDown(InputBox)
    expect(onKeyDownMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "keydown",
        target: InputBox,
      }),
    )
  })

  test("should call the callback when a key is released on the input element", () => {
    const onKeyUpMock = vi.fn()
    render(
      <EnhancedCheckbox
        checked={false}
        text="Red"
        value="red"
        onInputKeyUp={onKeyUpMock}
      />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const InputBox = screen.getByTestId("enhanced-checkbox-input")
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)

    fireEvent.keyUp(InputBox)
    expect(onKeyUpMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "keyup",
        target: InputBox,
      }),
    )
  })

  test("should call the callback when input element gets the focus", () => {
    const onFocusMock = vi.fn()
    render(
      <EnhancedCheckbox
        checked={false}
        text="Red"
        value="red"
        onInputFocus={onFocusMock}
      />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const InputBox = screen.getByTestId("enhanced-checkbox-input")
    const FocusedSpanBox = screen.getByTestId("enhanced-checkbox-focus-span")
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)
    expect(EnhancedCheckboxComponent).toContainElement(FocusedSpanBox)

    fireEvent.blur(InputBox)
    expect(FocusedSpanBox).toHaveTextContent("FALSE")
    fireEvent.focus(InputBox)
    expect(onFocusMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "focus",
        target: InputBox,
      }),
    )
    expect(FocusedSpanBox).toHaveTextContent("TRUE")
  })

  test("should call the callback when input element loses the focus", () => {
    const onBlurMock = vi.fn()
    render(
      <EnhancedCheckbox
        checked={false}
        text="Red"
        value="red"
        onInputBlur={onBlurMock}
      />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const InputBox = screen.getByTestId("enhanced-checkbox-input")
    const FocusedSpanBox = screen.getByTestId("enhanced-checkbox-focus-span")
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)
    expect(EnhancedCheckboxComponent).toContainElement(FocusedSpanBox)

    fireEvent.focus(InputBox)
    expect(FocusedSpanBox).toHaveTextContent("TRUE")
    fireEvent.blur(InputBox)
    expect(onBlurMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "blur",
        target: InputBox,
      }),
    )
    expect(FocusedSpanBox).toHaveTextContent("FALSE")
  })

  test("should set as active/inactive when space bar key is pressed/released on the input element", () => {
    render(<EnhancedCheckbox checked={false} text="Red" value="red" />)

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const InputBox = screen.getByTestId("enhanced-checkbox-input")
    const ActiveSpanBox = screen.getByTestId("enhanced-checkbox-active-span")
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)
    expect(EnhancedCheckboxComponent).toContainElement(ActiveSpanBox)

    fireEvent.keyDown(InputBox, { key: " ", code: "Space" })
    expect(ActiveSpanBox).toHaveTextContent("TRUE")
    fireEvent.keyUp(InputBox, { key: " ", code: "Space" })
    expect(ActiveSpanBox).toHaveTextContent("FALSE")
  })

  test("should call the callback when mouse key is pressed on the label element", () => {
    const onMouseKeyDownMock = vi.fn()
    render(
      <EnhancedCheckbox
        checked={false}
        text="Red"
        value="red"
        onLabelMouseDown={onMouseKeyDownMock}
      />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const LabelBox = screen.getByTestId("enhanced-checkbox-content")
    expect(EnhancedCheckboxComponent).toContainElement(LabelBox)

    fireEvent.mouseDown(LabelBox)
    expect(onMouseKeyDownMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "mousedown",
        target: LabelBox,
      }),
    )
  })

  test("should call the callback when touch is initiated on the label element", () => {
    const onTouchStartMock = vi.fn()
    render(
      <EnhancedCheckbox
        checked={false}
        text="Red"
        value="red"
        onLabelTouchStart={onTouchStartMock}
      />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const LabelBox = screen.getByTestId("enhanced-checkbox-content")
    expect(EnhancedCheckboxComponent).toContainElement(LabelBox)

    fireEvent.touchStart(LabelBox)
    expect(onTouchStartMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "touchstart",
        target: LabelBox,
      }),
    )
  })

  test("should call the callback when mouse down event is initiated on the icon element", () => {
    const onMouseDownMock = vi.fn()
    render(
      <EnhancedCheckbox
        checked={false}
        text="Red"
        value="red"
        onIconMouseDown={onMouseDownMock}
      />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )

    const IconBox = screen.getByTestId("enhanced-checkbox-value-span")
    const ActiveSpanBox = screen.getByTestId("enhanced-checkbox-active-span")
    expect(EnhancedCheckboxComponent).toContainElement(IconBox)
    expect(EnhancedCheckboxComponent).toContainElement(ActiveSpanBox)

    expect(ActiveSpanBox).toHaveTextContent("FALSE")
    fireEvent.mouseDown(IconBox)
    expect(onMouseDownMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "mousedown",
        target: IconBox,
      }),
    )
    expect(ActiveSpanBox).toHaveTextContent("TRUE")
  })

  test("should call the callback when click event occurs on the container label element", () => {
    const onMouseClickContainerMock = vi.fn()
    const onMouseClickInputMock = vi.fn()
    render(
      <EnhancedCheckbox
        checked={false}
        text="Red"
        value="red"
        onContainerClick={onMouseClickContainerMock}
        onInputClick={onMouseClickInputMock}
      />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )

    fireEvent.click(EnhancedCheckboxComponent)
    expect(onMouseClickContainerMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "click",
        target: EnhancedCheckboxComponent,
      }),
    )
  })

  test("should have container data attributes", () => {
    render(<EnhancedCheckbox checked text="Red" value="red" />)

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const InputBox = screen.getByTestId("enhanced-checkbox-input")
    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)
    expect(EnhancedCheckboxComponent).toHaveAttribute("data-checked")
    expect(EnhancedCheckboxComponent).not.toHaveAttribute("data-focus")
    expect(EnhancedCheckboxComponent).not.toHaveAttribute("data-focus-visible")

    fireEvent.focus(InputBox)
    expect(EnhancedCheckboxComponent).toHaveAttribute("data-focus")
    expect(EnhancedCheckboxComponent).toHaveAttribute("data-focus-visible")
  })

  test("should have input data attributes", () => {
    const { rerender } = render(
      <EnhancedCheckbox checked text="Red" value="red" />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const InputBox = screen.getByTestId("enhanced-checkbox-input")
    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)
    expect(InputBox).toHaveAttribute("aria-checked", "true")
    rerender(<EnhancedCheckbox checked={false} text="Red" value="red" />)

    expect(InputBox).toHaveAttribute("aria-checked", "false")
  })

  test("should have data-checked attribute for label when checked on rerender", () => {
    const { rerender } = render(
      <EnhancedCheckbox checked={false} text="Red" value="red" />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const LabelBox = screen.getByTestId("enhanced-checkbox-content")
    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(LabelBox)
    expect(LabelBox).not.toHaveAttribute("data-checked")

    rerender(<EnhancedCheckbox checked text="Red" value="red" />)

    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(LabelBox)
    expect(LabelBox).toHaveAttribute("data-checked")
  })

  test("should not have data-checked attribute for label when not checked on rerender", () => {
    const { rerender } = render(
      <EnhancedCheckbox checked text="Red" value="red" />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const LabelBox = screen.getByTestId("enhanced-checkbox-content")
    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(LabelBox)
    expect(LabelBox).toHaveAttribute("data-checked")
    rerender(<EnhancedCheckbox checked={false} text="Red" value="red" />)

    expect(LabelBox).not.toHaveAttribute("data-checked")
  })

  test("should have icon data attributes depending on the checked state", () => {
    const { rerender } = render(
      <EnhancedCheckbox checked text="Red" value="red" />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const IconBox = screen.getByTestId("enhanced-checkbox-value-span")
    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(IconBox)
    expect(IconBox).toHaveAttribute("aria-hidden", "true")
    expect(IconBox).toHaveAttribute("data-checked")

    rerender(<EnhancedCheckbox checked={false} text="Red" value="red" />)

    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(IconBox)
    expect(IconBox).toHaveAttribute("aria-hidden", "true")
    expect(IconBox).not.toHaveAttribute("data-checked")
  })

  test("should have icon data attributes depending on the active state", () => {
    render(<EnhancedCheckbox checked text="Red" value="red" />)

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const IconBox = screen.getByTestId("enhanced-checkbox-value-span")
    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(IconBox)
    expect(IconBox).toHaveAttribute("aria-hidden", "true")
    expect(IconBox).not.toHaveAttribute("data-active")

    fireEvent.mouseDown(IconBox)

    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(IconBox)
    expect(IconBox).toHaveAttribute("aria-hidden", "true")
    expect(IconBox).toHaveAttribute("data-active")
  })

  test("should have icon data attributes depending on hover", () => {
    render(<EnhancedCheckbox checked text="Red" value="red" />)

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const IconBox = screen.getByTestId("enhanced-checkbox-value-span")

    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(IconBox)

    expect(IconBox).toHaveAttribute("aria-hidden", "true")
    expect(IconBox).not.toHaveAttribute("data-hover")

    fireEvent.mouseEnter(IconBox)
    expect(IconBox).toHaveAttribute("data-hover", "")

    fireEvent.mouseLeave(IconBox)
    expect(IconBox).not.toHaveAttribute("data-hover")
  })

  test("should have icon data attributes depending on focus", () => {
    render(<EnhancedCheckbox checked text="Red" value="red" />)

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const IconBox = screen.getByTestId("enhanced-checkbox-value-span")
    const InputBox = screen.getByTestId("enhanced-checkbox-input")

    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(IconBox)
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)

    expect(IconBox).toHaveAttribute("aria-hidden", "true")
    expect(IconBox).not.toHaveAttribute("data-focus")

    fireEvent.focus(InputBox)
    expect(IconBox).toHaveAttribute("data-focus", "")

    fireEvent.blur(InputBox)
    expect(IconBox).not.toHaveAttribute("data-focus")
  })

  test("should have icon data attributes depending on indeterminate state", () => {
    const { rerender } = render(
      <EnhancedCheckbox checked indeterminate={false} text="Red" value="red" />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const IconBox = screen.getByTestId("enhanced-checkbox-value-span")
    const InputBox = screen.getByTestId("enhanced-checkbox-input")

    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(IconBox)
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)

    expect(IconBox).toHaveAttribute("aria-hidden", "true")
    expect(IconBox).not.toHaveAttribute("data-indeterminate")

    rerender(<EnhancedCheckbox checked indeterminate text="Red" value="red" />)

    expect(IconBox).toHaveAttribute("aria-hidden", "true")
    expect(IconBox).toHaveAttribute("data-indeterminate", "")
  })

  test("Should have readonly attribute for input element", () => {
    const { rerender } = render(
      <EnhancedCheckbox readOnly={false} text="Red" value="red" />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const InputBox = screen.getByTestId("enhanced-checkbox-input")

    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)
    expect(InputBox).not.toHaveAttribute("readonly")

    rerender(<EnhancedCheckbox readOnly text="Red" value="red" />)

    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)
    expect(InputBox).toHaveAttribute("readonly")
  })

  test("Should have required attribute for input element", () => {
    const { rerender } = render(
      <EnhancedCheckbox required={false} text="Red" value="red" />,
    )

    const EnhancedCheckboxComponent = screen.getByTestId(
      "enhanced-checkbox-label",
    )
    const InputBox = screen.getByTestId("enhanced-checkbox-input")

    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)
    expect(InputBox).not.toHaveAttribute("required")

    rerender(<EnhancedCheckbox required text="Red" value="red" />)

    expect(EnhancedCheckboxComponent).toBeInTheDocument()
    expect(EnhancedCheckboxComponent).toContainElement(InputBox)
    expect(InputBox).toHaveAttribute("required")
  })
})
