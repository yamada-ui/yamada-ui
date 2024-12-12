import { act, fireEvent, render, renderHook, screen } from "@yamada-ui/test"
import { useCheckbox } from "../src/use-checkbox"

describe("useCheckbox", () => {
  test("Does `checked` function properly", () => {
    const { result } = renderHook(() => useCheckbox({ checked: true }))
    expect(result.current.checked).toBeTruthy()
  })

  test("Does indeterminate function properly", () => {
    const { rerender, result } = renderHook(() =>
      useCheckbox({ indeterminate: true }),
    )
    expect(result.current.indeterminate).toBeTruthy()

    rerender({ indeterminate: false })

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

  test("should handle blur events", () => {
    const { result } = renderHook(() => useCheckbox({}))
    const { getInputProps } = result.current

    const { onBlur } = getInputProps()

    expect(result.current.focused).toBeFalsy()
    expect(typeof onBlur).toBe("function")

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

  test("should call default onMouseDown on label props when no handler is passed", () => {
    const InputBox = () => {
      const { getLabelProps } = useCheckbox({})
      const labelProps = { ...getLabelProps() }

      return <input type="checkbox" data-testid="input-box" {...labelProps} />
    }

    render(<InputBox />)
    const InputBoxComponent = screen.getByTestId("input-box")
    fireEvent.mouseDown(InputBoxComponent)
    expect(InputBoxComponent).toBeInTheDocument()
  })

  test("should call default onTouchStart on label props when no handler is passed", () => {
    const InputBox = () => {
      const { getLabelProps } = useCheckbox({})
      const labelProps = { ...getLabelProps() }

      return <input type="checkbox" data-testid="input-box" {...labelProps} />
    }

    render(<InputBox />)
    const InputBoxComponent = screen.getByTestId("input-box")
    fireEvent.touchStart(InputBoxComponent)
    expect(InputBoxComponent).toBeInTheDocument()
  })

  test("should call default onMouseDown on icon props when no handler is passed", () => {
    const InputBox = () => {
      const { getIconProps } = useCheckbox({})
      const iconProps = { ...getIconProps() }

      return <input type="checkbox" data-testid="input-box" {...iconProps} />
    }

    render(<InputBox />)
    const InputBoxComponent = screen.getByTestId("input-box")
    fireEvent.mouseDown(InputBoxComponent)
    expect(InputBoxComponent).toBeInTheDocument()
  })

  test("should call default onChange on input props when no handler is passed", () => {
    const InputBox = () => {
      const { getInputProps } = useCheckbox({})
      const inputProps = { ...getInputProps() }

      return <input type="checkbox" data-testid="input-box" {...inputProps} />
    }

    render(<InputBox />)
    const InputBoxComponent = screen.getByTestId("input-box")
    fireEvent.change(InputBoxComponent)
    expect(InputBoxComponent).toBeInTheDocument()
  })

  test("should call default onKeyDown on input props when no handler is passed", () => {
    const InputBox = () => {
      const { getInputProps } = useCheckbox({})
      const inputProps = { ...getInputProps() }

      return <input type="checkbox" data-testid="input-box" {...inputProps} />
    }

    render(<InputBox />)
    const InputBoxComponent = screen.getByTestId("input-box")
    fireEvent.keyDown(InputBoxComponent)
    expect(InputBoxComponent).toBeInTheDocument()
  })

  test("should call default onKeyUp on input props when no handler is passed", () => {
    const InputBox = () => {
      const { getInputProps } = useCheckbox({})
      const inputProps = { ...getInputProps() }

      return <input type="checkbox" data-testid="input-box" {...inputProps} />
    }

    render(<InputBox />)
    const InputBoxComponent = screen.getByTestId("input-box")
    fireEvent.keyUp(InputBoxComponent)
    expect(InputBoxComponent).toBeInTheDocument()
  })

  test("should call default click on container props when no handler is passed", () => {
    const InputBox = () => {
      const { getContainerProps } = useCheckbox({})
      const containerProps = { ...getContainerProps() }

      return (
        <label {...containerProps} data-testid="input-box-container">
          <input type="checkbox" />
        </label>
      )
    }

    render(<InputBox />)
    const InputBoxContainerComponent = screen.getByTestId("input-box-container")
    fireEvent.click(InputBoxContainerComponent)
    expect(InputBoxContainerComponent).toBeInTheDocument()
  })

  test("Does disabled function properly", () => {
    const { rerender, result } = renderHook(() =>
      useCheckbox({ disabled: false }),
    )
    expect(result.current.focused).toBeFalsy()

    rerender({ disabled: true })
    expect(result.current.focused).toBeFalsy()
  })
})
