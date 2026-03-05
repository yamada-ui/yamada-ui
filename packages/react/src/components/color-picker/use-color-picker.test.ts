import { act, renderHook } from "#test"
import { describe, expect, test, vi } from "vitest"

// Vitest hoists `vi.mock`, so any variables referenced inside mock factories
// must be created via `vi.hoisted` to avoid TDZ/initialization errors.
const mocks = vi.hoisted(() => {
  return {
    // combobox
    interactive: true,
    open: false,
    getContentProps: vi.fn((p: any) => p),
    getTriggerProps: vi.fn((p: any) => p),
    onClose: vi.fn(),
    onOpen: vi.fn(),

    // utils
    contains: vi.fn(() => false),
    convertColor: vi.fn((v: string) => v),
    focusTransfer: vi.fn(() => undefined),

    // eyedropper
    onOpenEyeDropper: vi.fn(() => Promise.resolve({ sRGBHex: "#123456" })),
  }
})

vi.mock("../../hooks/use-combobox", () => ({
  useCombobox: vi.fn(() => ({
    interactive: mocks.interactive,
    open: mocks.open,
    getContentProps: mocks.getContentProps,
    getTriggerProps: mocks.getTriggerProps,
    popoverProps: {},
    onClose: mocks.onClose,
    onOpen: mocks.onOpen,
  })),
}))

vi.mock("../../hooks/use-eye-dropper", () => ({
  useEyeDropper: vi.fn(() => ({
    supported: true,
    onOpen: mocks.onOpenEyeDropper,
  })),
}))

vi.mock("../../providers/i18n-provider", async () => {
  const actual = await vi.importActual<any>("../../providers/i18n-provider")
  return {
    ...actual,
    useI18n: vi.fn(() => ({ t: (s: string) => s })),
  }
})

// Pass props through as-is (we only need it to provide props/data/aria buckets)
vi.mock("../field", () => ({
  useFieldProps: (props: any) => ({
    props,
    ariaProps: {},
    dataProps: {},
    eventProps: {},
  }),
}))

vi.mock("../../utils", async () => {
  const actual = await vi.importActual<any>("../../utils")
  return {
    ...actual,
    contains: mocks.contains,
    convertColor: (v: string) => (_fmt: string) => mocks.convertColor(v),
    focusTransfer: mocks.focusTransfer,

    // Minimal keyboard mapping to trigger handlers
    runKeyAction: (ev: any, map: any) => {
      const fn = map?.[ev.key]
      if (fn) fn()
    },
  }
})

import { useColorPicker } from "./use-color-picker"

describe("useColorPicker", () => {
  test("formats value on blur when focus leaves component", () => {
    const { result } = renderHook(() =>
      useColorPicker({
        defaultValue: "abc",
        formatInput: (v) => `#${v}`,
        pattern: /b/g,
      }),
    )

    const inputProps = result.current.getInputProps({})

    act(() => {
      inputProps.onBlur?.({
        preventDefault: vi.fn(),
        relatedTarget: null,
        stopPropagation: vi.fn(),
      } as any)
    })

    // "abc" -> "#abc" -> remove "b" => "#ac"
    expect(result.current.value).toBe("#ac")
  })

  test("closes picker on input change when closeOnChange returns true", () => {
    mocks.onClose.mockClear()
    mocks.onOpen.mockClear()

    const { result } = renderHook(() =>
      useColorPicker({
        closeOnChange: () => true,
        formatInput: (v) => v.toUpperCase(),
        openOnChange: () => true,
        pattern: /X/g,
      }),
    )

    const inputProps = result.current.getInputProps({})

    act(() => {
      inputProps.onChange?.({
        target: { value: "abx" },
      } as any)
    })

    expect(mocks.onClose).toHaveBeenCalledWith()
    expect(mocks.onOpen).not.toHaveBeenCalled()
    expect(result.current.value).toBe("AB")
  })

  test("opens picker on input change when openOnChange returns true and closeOnChange is false", () => {
    mocks.onClose.mockClear()
    mocks.onOpen.mockClear()

    const { result } = renderHook(() =>
      useColorPicker({
        closeOnChange: () => false,
        openOnChange: () => true,
      }),
    )

    const inputProps = result.current.getInputProps({})

    act(() => {
      inputProps.onChange?.({
        target: { value: "#fff" },
      } as any)
    })

    expect(mocks.onOpen).toHaveBeenCalledWith()
    expect(mocks.onClose).not.toHaveBeenCalled()
    expect(result.current.value).toBe("#fff")
  })

  test("field click focuses input and opens picker", () => {
    mocks.onOpen.mockClear()

    const focus = vi.fn()
    const inputEl = { focus } as any
    const { result } = renderHook(() => useColorPicker({}))

    const inputProps = result.current.getInputProps({})
    const mergedRef = inputProps.ref as ((node: any) => void) | undefined
    mergedRef?.(inputEl)

    const fieldProps = result.current.getFieldProps({})

    act(() => {
      fieldProps.onClick?.({} as any)
    })

    expect(focus).toHaveBeenCalledWith()
    expect(mocks.onOpen).toHaveBeenCalledWith()
  })

  test("field click is ignored when not interactive", () => {
    mocks.onOpen.mockClear()
    mocks.interactive = false
    const focus = vi.fn()
    const inputEl = { focus } as any
    const { result } = renderHook(() => useColorPicker({}))
    const inputProps = result.current.getInputProps({})
    const mergedRef = inputProps.ref as ((node: any) => void) | undefined
    mergedRef?.(inputEl)
    const fieldProps = result.current.getFieldProps({})

    act(() => {
      fieldProps.onClick?.({} as any)
    })

    expect(focus).not.toHaveBeenCalled()
    expect(mocks.onOpen).not.toHaveBeenCalled()

    mocks.interactive = true
  })

  test("field click does not focus or open when input disabled and openOnClick is false", () => {
    mocks.onOpen.mockClear()
    const focus = vi.fn()
    const inputEl = { focus } as any
    const { result } = renderHook(() =>
      useColorPicker({
        allowInput: false,
        openOnClick: false,
      }),
    )
    const inputProps = result.current.getInputProps({})
    const mergedRef = inputProps.ref as ((node: any) => void) | undefined
    mergedRef?.(inputEl)
    const fieldProps = result.current.getFieldProps({})

    act(() => {
      fieldProps.onClick?.({} as any)
    })

    expect(focus).not.toHaveBeenCalled()
    expect(mocks.onOpen).not.toHaveBeenCalled()
  })

  test("field focus and mousedown honor openOnFocus", () => {
    mocks.onOpen.mockClear()
    const preventDefault = vi.fn()
    const stopPropagation = vi.fn()

    const { result } = renderHook(() =>
      useColorPicker({
        allowInput: false,
        openOnFocus: true,
      }),
    )

    const fieldProps = result.current.getFieldProps({})

    act(() => {
      fieldProps.onMouseDown?.({
        preventDefault,
        stopPropagation,
      } as any)
      fieldProps.onFocus?.({} as any)
    })

    expect(preventDefault).toHaveBeenCalledWith()
    expect(stopPropagation).toHaveBeenCalledWith()
    expect(mocks.onOpen).toHaveBeenCalledWith()
  })

  test("field focus returns early when allowInput is true", () => {
    mocks.onOpen.mockClear()
    const { result } = renderHook(() =>
      useColorPicker({
        allowInput: true,
      }),
    )
    const fieldProps = result.current.getFieldProps({})

    act(() => {
      fieldProps.onFocus?.({} as any)
    })

    expect(mocks.onOpen).not.toHaveBeenCalled()
  })

  test("field focus does not open when openOnFocus is false", () => {
    mocks.onOpen.mockClear()
    const { result } = renderHook(() =>
      useColorPicker({
        allowInput: false,
        openOnFocus: false,
      }),
    )

    const fieldProps = result.current.getFieldProps({})

    act(() => {
      fieldProps.onFocus?.({} as any)
    })

    expect(mocks.onOpen).not.toHaveBeenCalled()
  })

  test("input focus prevents default and opens picker", () => {
    mocks.onOpen.mockClear()
    const preventDefault = vi.fn()
    const stopPropagation = vi.fn()

    const { result } = renderHook(() =>
      useColorPicker({
        allowInput: true,
        openOnFocus: true,
      }),
    )

    const inputProps = result.current.getInputProps({})

    act(() => {
      inputProps.onFocus?.({
        preventDefault,
        stopPropagation,
      } as any)
    })

    expect(preventDefault).toHaveBeenCalledWith()
    expect(stopPropagation).toHaveBeenCalledWith()
    expect(mocks.onOpen).toHaveBeenCalledWith()
  })

  test("calls focusTransfer when popover is open", () => {
    mocks.focusTransfer.mockClear()
    mocks.open = true

    renderHook(() => useColorPicker({}))

    expect(mocks.focusTransfer).toHaveBeenCalledWith(null, null)

    mocks.open = false
  })

  test("calls focusTransfer with field target when allowInput is false", () => {
    mocks.focusTransfer.mockClear()
    mocks.open = true

    renderHook(() =>
      useColorPicker({
        allowInput: false,
      }),
    )

    expect(mocks.focusTransfer).toHaveBeenCalledWith(null, null)

    mocks.open = false
  })

  test("getRootProps merges root props", () => {
    const { result } = renderHook(() => useColorPicker({}))
    const rootProps = result.current.getRootProps({ id: "root" })

    expect(rootProps).toStrictEqual({ id: "root" })
  })

  test("getContentProps returns combobox content props", () => {
    const ref = vi.fn()
    const { result } = renderHook(() => useColorPicker({}))
    const contentProps = result.current.getContentProps({ ref, "data-x": "1" })

    expect(contentProps.role).toBe("dialog")
    expect(contentProps["data-x"]).toBe("1")
    expect(typeof contentProps.ref).toBe("function")
  })

  test("getFieldProps supports default args", () => {
    const { result } = renderHook(() => useColorPicker({}))
    const fieldProps = result.current.getFieldProps()

    expect(fieldProps["aria-haspopup"]).toBe("dialog")
  })

  test("getInputProps reflects non-input mode", () => {
    const { result } = renderHook(() =>
      useColorPicker({
        allowInput: false,
      }),
    )
    const inputProps = result.current.getInputProps()

    expect(inputProps.style).toStrictEqual({ pointerEvents: "none" })
    expect(inputProps.tabIndex).toBe(-1)
  })

  test("input change does nothing when allowInput is false", () => {
    mocks.onClose.mockClear()
    mocks.onOpen.mockClear()
    const onInputChange = vi.fn()

    const { result } = renderHook(() =>
      useColorPicker({
        allowInput: false,
        onInputChange,
      }),
    )

    const inputProps = result.current.getInputProps({})

    act(() => {
      inputProps.onChange?.({
        target: { value: "#111111" },
      } as any)
    })

    expect(onInputChange).not.toHaveBeenCalled()
    expect(mocks.onClose).not.toHaveBeenCalled()
    expect(mocks.onOpen).not.toHaveBeenCalled()
  })

  test("input change does not toggle popover when both callbacks return false", () => {
    mocks.onClose.mockClear()
    mocks.onOpen.mockClear()

    const { result } = renderHook(() =>
      useColorPicker({
        closeOnChange: () => false,
        openOnChange: () => false,
      }),
    )
    const inputProps = result.current.getInputProps({})

    act(() => {
      inputProps.onChange?.({
        target: { value: "#222222" },
      } as any)
    })

    expect(mocks.onClose).not.toHaveBeenCalled()
    expect(mocks.onOpen).not.toHaveBeenCalled()
  })

  test("field mousedown does not prevent when openOnFocus is false", () => {
    const preventDefault = vi.fn()
    const stopPropagation = vi.fn()
    const { result } = renderHook(() =>
      useColorPicker({
        openOnFocus: false,
      }),
    )
    const fieldProps = result.current.getFieldProps({})

    act(() => {
      fieldProps.onMouseDown?.({
        preventDefault,
        stopPropagation,
      } as any)
    })

    expect(preventDefault).not.toHaveBeenCalled()
    expect(stopPropagation).not.toHaveBeenCalled()
  })

  test("input focus after click does not call onOpen twice", () => {
    mocks.onOpen.mockClear()
    const { result } = renderHook(() => useColorPicker({}))
    const inputProps = result.current.getInputProps({})
    const fieldProps = result.current.getFieldProps({})

    act(() => {
      fieldProps.onClick?.({} as any)
      inputProps.onFocus?.({
        preventDefault: vi.fn(),
        stopPropagation: vi.fn(),
      } as any)
    })

    expect(mocks.onOpen).toHaveBeenCalledTimes(1)
  })

  test("blur keeps value when focus moves inside picker", () => {
    mocks.contains.mockReset()
    mocks.contains.mockReturnValue(true)

    const preventDefault = vi.fn()
    const { result } = renderHook(() =>
      useColorPicker({
        defaultValue: "#abc",
      }),
    )

    const inputProps = result.current.getInputProps({})

    act(() => {
      inputProps.onBlur?.({
        preventDefault,
        relatedTarget: {} as any,
      } as any)
    })

    expect(preventDefault).toHaveBeenCalledWith()
    expect(result.current.value).toBe("#abc")

    mocks.contains.mockReset()
    mocks.contains.mockReturnValue(false)
  })

  test("blur keeps previous value when conversion returns empty", () => {
    mocks.contains.mockReset()
    mocks.contains.mockReturnValue(false)
    mocks.convertColor.mockReturnValueOnce("")
    const { result } = renderHook(() =>
      useColorPicker({
        defaultValue: "#abc",
      }),
    )

    const inputProps = result.current.getInputProps({})

    act(() => {
      inputProps.onBlur?.({
        preventDefault: vi.fn(),
        relatedTarget: null,
      } as any)
    })

    expect(result.current.value).toBe("#abc")
  })

  test("blur handles empty state safely", () => {
    mocks.contains.mockReset()
    mocks.contains.mockReturnValue(false)
    const { result } = renderHook(() => useColorPicker({}))
    const inputProps = result.current.getInputProps({})

    act(() => {
      inputProps.onBlur?.({
        preventDefault: vi.fn(),
        relatedTarget: null,
      } as any)
    })

    expect(result.current.value).toBeUndefined()
  })

  test("blur keeps converted value when no format or pattern is provided", () => {
    mocks.contains.mockReset()
    mocks.contains.mockReturnValue(false)

    const { result } = renderHook(() =>
      useColorPicker({
        defaultValue: "#aabbcc",
      }),
    )
    const inputProps = result.current.getInputProps({})

    act(() => {
      inputProps.onBlur?.({
        preventDefault: vi.fn(),
        relatedTarget: null,
      } as any)
    })

    expect(result.current.value).toBe("#aabbcc")
  })

  test("selector onChange updates value", () => {
    const { result } = renderHook(() =>
      useColorPicker({
        defaultValue: "#000000",
      }),
    )

    const selectorProps = result.current.getSelectorProps({})

    act(() => {
      selectorProps.onChange?.("#ff0000")
    })

    expect(result.current.value).toBe("#ff0000")
  })

  test("getSelectorProps supports default args", () => {
    const { result } = renderHook(() =>
      useColorPicker({
        defaultValue: "#101010",
      }),
    )
    const selectorProps = result.current.getSelectorProps()

    expect(selectorProps.value).toBe("#101010")
  })

  test("EyeDropper click sets value from API result", async () => {
    const { result } = renderHook(() =>
      useColorPicker({
        defaultValue: "#000000",
      }),
    )

    const props = result.current.getEyeDropperProps({})

    await act(async () => {
      await Promise.resolve(props.onClick?.({} as any))
    })

    expect(result.current.value).toBe("#123456")
  })

  test("EyeDropper does nothing when not interactive", async () => {
    mocks.onOpenEyeDropper.mockClear()
    mocks.interactive = false

    const { result } = renderHook(() =>
      useColorPicker({
        defaultValue: "#000000",
      }),
    )
    const props = result.current.getEyeDropperProps({})

    await act(async () => {
      await Promise.resolve(props.onClick?.({} as any))
    })

    expect(mocks.onOpenEyeDropper).not.toHaveBeenCalled()
    expect(result.current.value).toBe("#000000")
    expect(props.tabIndex).toBe(-1)

    mocks.interactive = true
  })

  test("EyeDropper keeps value when API returns no color", async () => {
    mocks.onOpenEyeDropper.mockResolvedValueOnce({} as any)

    const { result } = renderHook(() =>
      useColorPicker({
        defaultValue: "#000000",
      }),
    )
    const props = result.current.getEyeDropperProps({})

    await act(async () => {
      await Promise.resolve(props.onClick?.({} as any))
    })

    expect(result.current.value).toBe("#000000")
  })

  test("EyeDropper keydown triggers API on Enter", () => {
    mocks.onOpenEyeDropper.mockClear()

    const { result } = renderHook(() =>
      useColorPicker({
        defaultValue: "#000000",
      }),
    )

    const props = result.current.getEyeDropperProps({})

    act(() => {
      props.onKeyDown?.({ key: "Enter" } as any)
    })

    expect(mocks.onOpenEyeDropper).toHaveBeenCalledWith()
  })

  test("getEyeDropperProps supports default args", () => {
    const { result } = renderHook(() => useColorPicker({}))
    const props = result.current.getEyeDropperProps()

    expect(props.role).toBe("button")
  })

  test("getContentProps supports default args", () => {
    const { result } = renderHook(() => useColorPicker({}))
    const props = result.current.getContentProps()

    expect(props.role).toBe("dialog")
  })
})
