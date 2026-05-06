import type { ChangeEventHandler, CSSProperties, RefCallback } from "react"
import type { UseAutosizeProps } from "./use-autosize"
import { a11y, fireEvent, render, renderHook, screen } from "#test"
import { Textarea } from "./"
import { useAutosize } from "./use-autosize"
import { useTextarea } from "./use-textarea"

const buildMockComputedStyle = (
  overrides: Partial<CSSStyleDeclaration> = {},
): CSSStyleDeclaration => {
  const base = document.createElement("textarea").style
  Object.assign(base, {
    borderBottomWidth: "1px",
    borderLeftWidth: "1px",
    borderRightWidth: "1px",
    borderTopWidth: "1px",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: "normal",
    lineHeight: "20",
    paddingBottom: "8px",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "8px",
    tabSize: "8",
    textIndent: "0px",
    textRendering: "auto",
    textTransform: "none",
    width: "300px",
    wordBreak: "normal",
    ...overrides,
  })
  return base
}

const setupComputedStyleMock = () => {
  const mockStyle = buildMockComputedStyle()
  const spy = vi
    .spyOn(window, "getComputedStyle")
    .mockImplementation(() => mockStyle)
  return () => {
    spy.mockRestore()
  }
}

const setupScrollHeightMock = (heightPerLine = 20) => {
  const originalCloneNode = HTMLElement.prototype.cloneNode
  HTMLElement.prototype.cloneNode = function (deep?: boolean) {
    const cloned = originalCloneNode.call(this, deep)
    if (cloned instanceof HTMLTextAreaElement) {
      Object.defineProperty(cloned, "scrollHeight", {
        get() {
          const lines = (this.value.match(/\n/g) || []).length + 1
          return lines * heightPerLine
        },
      })
    }
    return cloned
  }
  return () => {
    HTMLElement.prototype.cloneNode = originalCloneNode
  }
}

const setupDocumentFontsMock = () => {
  const originalFonts = "fonts" in document ? document.fonts : undefined

  Object.defineProperty(document, "fonts", {
    configurable: true,
    value: {
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    },
    writable: true,
  })

  return () => {
    Object.defineProperty(document, "fonts", {
      configurable: true,
      value: originalFonts,
      writable: true,
    })
  }
}

interface AutoSizeTextareaProps extends UseAutosizeProps {
  placeholder?: string
  value?: string
}

const AutoSizeTextarea = ({
  disabled,
  maxRows,
  minRows,
  placeholder,
  value,
}: AutoSizeTextareaProps) => {
  const { getTextareaProps } = useAutosize({
    disabled,
    maxRows,
    minRows,
  })

  return (
    <textarea
      data-testid="autosize-textarea"
      {...getTextareaProps({
        placeholder,
        readOnly: value != null || undefined,
        value,
      })}
    />
  )
}

const getAutosizeTextarea = () => {
  const el = screen.getByTestId("autosize-textarea")
  if (!(el instanceof HTMLTextAreaElement)) {
    throw new Error("Expected HTMLTextAreaElement")
  }
  return el
}

interface HookTextareaProps {
  autosize?: boolean
  hookClassName?: string
  hookOnChange?: ChangeEventHandler<HTMLTextAreaElement>
  hookRef?: RefCallback<HTMLTextAreaElement>
  hookStyle?: CSSProperties
  propClassName?: string
  propOnChange?: ChangeEventHandler<HTMLTextAreaElement>
  propRef?: RefCallback<HTMLTextAreaElement>
  propStyle?: CSSProperties
}

const HookTextarea = ({
  autosize,
  hookClassName,
  hookOnChange,
  hookRef,
  hookStyle,
  propClassName,
  propOnChange,
  propRef,
  propStyle,
}: HookTextareaProps) => {
  const { getTextareaProps } = useTextarea({
    ref: hookRef,
    className: hookClassName,
    style: hookStyle,
    autosize,
    onChange: hookOnChange,
  })

  return (
    <textarea
      data-testid="use-textarea"
      {...getTextareaProps({
        ref: propRef,
        className: propClassName,
        style: propStyle,
        onChange: propOnChange,
      })}
    />
  )
}

describe("<Textarea />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Textarea aria-label="Enter notes" defaultValue="hello" />)
  })

  test("sets className correctly", () => {
    render(<Textarea />)

    expect(screen.getByRole("textbox")).toHaveClass("ui-textarea")
  })

  test("renders HTML tag correctly", () => {
    render(<Textarea />)

    expect(screen.getByRole("textbox").tagName).toBe("TEXTAREA")
  })

  test("disabled Textarea sets disabled attribute", () => {
    render(<Textarea disabled />)

    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("read-only Textarea sets aria-readonly", () => {
    render(<Textarea readOnly />)

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-readonly", "true")
  })

  test("invalid Textarea sets aria-invalid", () => {
    render(<Textarea invalid />)

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true")
  })

  test("resize prop applies inline style", () => {
    render(<Textarea resize="none" />)

    expect(screen.getByRole("textbox")).toHaveStyle({ resize: "none" })
  })

  test("placeholder prop is forwarded", () => {
    render(<Textarea placeholder="text" />)

    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "text")
  })

  test("rows prop is forwarded", () => {
    render(<Textarea rows={1} />)

    const textarea = screen.getByRole("textbox")
    if (!(textarea instanceof HTMLTextAreaElement)) {
      throw new Error("Expected HTMLTextAreaElement")
    }
    expect(textarea.rows).toBe(1)
  })
})

describe("useAutosize", () => {
  let cleanupComputedStyle: () => void
  let cleanupScrollHeight: () => void
  let cleanupFonts: () => void

  beforeEach(() => {
    cleanupComputedStyle = setupComputedStyleMock()
    cleanupScrollHeight = setupScrollHeightMock()
    cleanupFonts = setupDocumentFontsMock()
  })

  afterEach(() => {
    cleanupComputedStyle()
    cleanupScrollHeight()
    cleanupFonts()
    vi.restoreAllMocks()
  })

  test("adjusts the rows of the textarea based on content", () => {
    render(<AutoSizeTextarea />, { withProvider: false })
    const textarea = getAutosizeTextarea()

    fireEvent.change(textarea, {
      target: { value: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5" },
    })

    expect(textarea.rows).toBe(5)
  })

  test("does not exceed maxRows", () => {
    render(<AutoSizeTextarea maxRows={3} />, { withProvider: false })
    const textarea = getAutosizeTextarea()

    fireEvent.change(textarea, {
      target: { value: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5" },
    })

    expect(textarea.rows).toBe(3)
  })

  test("does not go below minRows", () => {
    render(<AutoSizeTextarea minRows={4} />, { withProvider: false })
    const textarea = getAutosizeTextarea()

    fireEvent.change(textarea, { target: { value: "short" } })

    expect(textarea.rows).toBe(4)
  })

  test("uses placeholder when value is empty", () => {
    render(<AutoSizeTextarea placeholder="Enter text here" />, {
      withProvider: false,
    })
    const textarea = getAutosizeTextarea()

    expect(textarea.rows).toBe(2)
  })

  test("falls back to lineBreaks when scrollHeight is 0", () => {
    cleanupScrollHeight()

    const originalCloneNode = HTMLElement.prototype.cloneNode
    HTMLElement.prototype.cloneNode = function (deep?: boolean) {
      const cloned = originalCloneNode.call(this, deep)
      if (cloned instanceof HTMLTextAreaElement) {
        Object.defineProperty(cloned, "scrollHeight", {
          get() {
            return 0
          },
        })
      }
      return cloned
    }

    try {
      render(<AutoSizeTextarea maxRows={10} minRows={1} />, {
        withProvider: false,
      })
      const textarea = getAutosizeTextarea()

      fireEvent.change(textarea, {
        target: { value: "Line 1\nLine 2\nLine 3" },
      })

      expect(textarea.rows).toBe(3)
    } finally {
      HTMLElement.prototype.cloneNode = originalCloneNode
    }
  })

  test("sets resize to none when autosize is not disabled", () => {
    render(<AutoSizeTextarea />, { withProvider: false })

    expect(getAutosizeTextarea().style.resize).toBe("none")
  })

  test("does not set resize when disabled", () => {
    render(<AutoSizeTextarea disabled />, { withProvider: false })

    expect(getAutosizeTextarea().style.resize).toBe("")
  })

  test("does not resize when disabled", () => {
    const { rerender } = render(
      <AutoSizeTextarea disabled minRows={1} value="Line 1" />,
      { withProvider: false },
    )
    const textarea = getAutosizeTextarea()

    expect(textarea.rows).toBe(2)

    rerender(
      <AutoSizeTextarea
        disabled
        minRows={1}
        value={"Line 1\nLine 2\nLine 3\nLine 4\nLine 5"}
      />,
    )

    expect(textarea.rows).toBe(2)
  })

  test("resizes when value changes via rerender", () => {
    const { rerender } = render(
      <AutoSizeTextarea minRows={1} value="Line 1" />,
      { withProvider: false },
    )
    const textarea = getAutosizeTextarea()

    expect(textarea.rows).toBe(1)

    rerender(<AutoSizeTextarea minRows={1} value={"Line 1\nLine 2\nLine 3"} />)

    expect(textarea.rows).toBe(3)
  })

  test("returns ref and onResizeTextarea from hook", () => {
    const { result } = renderHook(() => useAutosize(), {
      withProvider: false,
    })

    expect(result.current.ref).toBeDefined()
    expect(result.current.getTextareaProps).toBeDefined()
    expect(result.current.onResizeTextarea).toBeDefined()
  })

  test("skips resize when getSizingStyle returns null", () => {
    cleanupComputedStyle()
    const emptyBoxSizingStyle = buildMockComputedStyle({ boxSizing: "" })
    vi.spyOn(window, "getComputedStyle").mockImplementation(
      () => emptyBoxSizingStyle,
    )

    render(<AutoSizeTextarea />, { withProvider: false })
    const textarea = getAutosizeTextarea()

    fireEvent.change(textarea, {
      target: { value: "Line 1\nLine 2\nLine 3" },
    })

    expect(textarea.rows).not.toBe(3)
  })

  test("does not resize when value has not changed", () => {
    const appendChildSpy = vi.spyOn(document.body, "appendChild")
    const { rerender } = render(<AutoSizeTextarea minRows={1} value="test" />, {
      withProvider: false,
    })
    const textarea = getAutosizeTextarea()

    expect(textarea.rows).toBe(1)
    const appendCount = appendChildSpy.mock.calls.length

    rerender(<AutoSizeTextarea minRows={1} value="test" />)

    expect(textarea.rows).toBe(1)
    expect(appendChildSpy).toHaveBeenCalledTimes(appendCount)
  })
})

describe("useTextarea", () => {
  test("merges className, style, ref and onChange without autosize", () => {
    const hookOnChange = vi.fn()
    const propOnChange = vi.fn()
    const hookRef = vi.fn()
    const propRef = vi.fn()

    render(
      <HookTextarea
        autosize={false}
        hookClassName="hook-class"
        hookOnChange={hookOnChange}
        hookRef={hookRef}
        hookStyle={{ color: "red", resize: "vertical" }}
        propClassName="prop-class"
        propOnChange={propOnChange}
        propRef={propRef}
        propStyle={{ fontSize: "12px" }}
      />,
      { withProvider: false },
    )

    const textarea = screen.getByTestId("use-textarea")

    expect(textarea).toHaveClass("hook-class")
    expect(textarea).toHaveClass("prop-class")
    expect(textarea.style.color).toBe("red")
    expect(textarea.style.fontSize).toBe("12px")
    expect(textarea.style.resize).toBe("vertical")
    expect(hookRef).toHaveBeenCalledWith(textarea)
    expect(propRef).toHaveBeenCalledWith(textarea)

    fireEvent.change(textarea, { target: { value: "updated" } })

    expect(hookOnChange).toHaveBeenCalledTimes(1)
    expect(propOnChange).toHaveBeenCalledTimes(1)
  })

  test("forces resize none and calls consumer onChange handlers once with autosize", () => {
    const cleanupFonts = setupDocumentFontsMock()
    const hookOnChange = vi.fn()
    const propOnChange = vi.fn()
    const hookRef = vi.fn()
    const propRef = vi.fn()

    try {
      render(
        <HookTextarea
          autosize
          hookClassName="hook-class"
          hookOnChange={hookOnChange}
          hookRef={hookRef}
          hookStyle={{ color: "red", resize: "vertical" }}
          propClassName="prop-class"
          propOnChange={propOnChange}
          propRef={propRef}
          propStyle={{ fontSize: "14px", resize: "horizontal" }}
        />,
        { withProvider: false },
      )

      const textarea = screen.getByTestId("use-textarea")

      expect(textarea).toHaveClass("hook-class")
      expect(textarea).toHaveClass("prop-class")
      expect(textarea.style.color).toBe("red")
      expect(textarea.style.fontSize).toBe("14px")
      expect(textarea.style.resize).toBe("none")
      expect(hookRef).toHaveBeenCalledWith(textarea)
      expect(propRef).toHaveBeenCalledWith(textarea)

      fireEvent.change(textarea, { target: { value: "updated" } })

      expect(hookOnChange).toHaveBeenCalledTimes(1)
      expect(propOnChange).toHaveBeenCalledTimes(1)
    } finally {
      cleanupFonts()
    }
  })
})
