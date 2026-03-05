import type { UseAutosizeProps } from "./use-autosize"
import { fireEvent, render, renderHook, screen } from "#test"
import { useAutosize } from "./use-autosize"

const mockComputedStyle: Partial<CSSStyleDeclaration> = {
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
}

const setupComputedStyleMock = () => {
  const originalGetComputedStyle = window.getComputedStyle
  vi.spyOn(window, "getComputedStyle").mockImplementation(
    () => mockComputedStyle as CSSStyleDeclaration,
  )
  return () => {
    ;(window.getComputedStyle as any).mockRestore?.()
    window.getComputedStyle = originalGetComputedStyle
  }
}

const setupScrollHeightMock = (heightPerLine = 20) => {
  const originalCloneNode = HTMLElement.prototype.cloneNode
  HTMLElement.prototype.cloneNode = function (deep?: boolean) {
    const cloned = originalCloneNode.call(this, deep) as HTMLTextAreaElement
    Object.defineProperty(cloned, "scrollHeight", {
      get() {
        const lines = (this.value.match(/\n/g) || []).length + 1
        return lines * heightPerLine
      },
    })
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

const AutoSizeTextarea = ({
  disabled,
  maxRows,
  minRows,
  placeholder,
}: UseAutosizeProps & { placeholder?: string }) => {
  const { getTextareaProps } = useAutosize({
    disabled,
    maxRows,
    minRows,
  })

  return (
    <textarea
      data-testid="autosize-textarea"
      placeholder={placeholder}
      {...getTextareaProps()}
    />
  )
}

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
    render(<AutoSizeTextarea />)

    const textarea = screen.getByTestId(
      "autosize-textarea",
    ) as HTMLTextAreaElement

    fireEvent.change(textarea, {
      target: { value: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5" },
    })

    expect(textarea.rows).toBe(5)
  })

  test("does not exceed maxRows", () => {
    render(<AutoSizeTextarea maxRows={3} />)

    const textarea = screen.getByTestId(
      "autosize-textarea",
    ) as HTMLTextAreaElement

    fireEvent.change(textarea, {
      target: { value: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5" },
    })

    expect(textarea.rows).toBe(3)
  })

  test("does not go below minRows", () => {
    render(<AutoSizeTextarea minRows={4} />)

    const textarea = screen.getByTestId(
      "autosize-textarea",
    ) as HTMLTextAreaElement

    fireEvent.change(textarea, {
      target: { value: "short" },
    })

    expect(textarea.rows).toBe(4)
  })

  test("uses placeholder when value is empty", () => {
    render(<AutoSizeTextarea placeholder="Enter text here" />)

    const textarea = screen.getByTestId(
      "autosize-textarea",
    ) as HTMLTextAreaElement

    expect(textarea.rows).toBe(2)
  })

  test("falls back to lineBreaks when scrollHeight is 0", () => {
    cleanupScrollHeight()

    const originalCloneNode = HTMLElement.prototype.cloneNode
    HTMLElement.prototype.cloneNode = function (deep?: boolean) {
      const cloned = originalCloneNode.call(this, deep) as HTMLTextAreaElement
      Object.defineProperty(cloned, "scrollHeight", {
        get() {
          return 0
        },
      })
      return cloned
    }

    render(<AutoSizeTextarea maxRows={10} minRows={1} />)

    const textarea = screen.getByTestId(
      "autosize-textarea",
    ) as HTMLTextAreaElement

    fireEvent.change(textarea, {
      target: { value: "Line 1\nLine 2\nLine 3" },
    })

    expect(textarea.rows).toBe(3)

    HTMLElement.prototype.cloneNode = originalCloneNode
  })

  test("sets resize to none when autosize is not disabled", () => {
    render(<AutoSizeTextarea />)

    const textarea = screen.getByTestId("autosize-textarea")

    expect(textarea.style.resize).toBe("none")
  })

  test("does not set resize when disabled", () => {
    render(<AutoSizeTextarea disabled />)

    const textarea = screen.getByTestId("autosize-textarea")

    expect(textarea.style.resize).toBe("")
  })

  test("does not resize when disabled", () => {
    render(<AutoSizeTextarea disabled />)

    const textarea = screen.getByTestId(
      "autosize-textarea",
    ) as HTMLTextAreaElement

    fireEvent.change(textarea, {
      target: { value: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5" },
    })

    expect(textarea.rows).not.toBe(5)
  })

  test("resizes when value changes via rerender", () => {
    const { rerender } = render(<AutoSizeTextarea minRows={1} />)

    const textarea = screen.getByTestId(
      "autosize-textarea",
    ) as HTMLTextAreaElement

    fireEvent.change(textarea, {
      target: { value: "Line 1\nLine 2\nLine 3" },
    })

    expect(textarea.rows).toBe(3)

    rerender(<AutoSizeTextarea minRows={1} />)
  })

  test("returns ref and onResizeTextarea from hook", () => {
    const { result } = renderHook(() => useAutosize())

    expect(result.current.ref).toBeDefined()
    expect(result.current.getTextareaProps).toBeDefined()
    expect(result.current.onResizeTextarea).toBeDefined()
  })

  test("skips resize when getSizingStyle returns null", () => {
    cleanupComputedStyle()
    vi.spyOn(window, "getComputedStyle").mockImplementation(
      () => ({ boxSizing: "" }) as CSSStyleDeclaration,
    )

    render(<AutoSizeTextarea />)

    const textarea = screen.getByTestId(
      "autosize-textarea",
    ) as HTMLTextAreaElement

    fireEvent.change(textarea, {
      target: { value: "Line 1\nLine 2\nLine 3" },
    })

    expect(textarea.rows).not.toBe(3)
  })

  test("does not resize when value has not changed", () => {
    render(<AutoSizeTextarea />)

    const textarea = screen.getByTestId(
      "autosize-textarea",
    ) as HTMLTextAreaElement

    fireEvent.change(textarea, {
      target: { value: "test" },
    })

    const rowsAfterFirst = textarea.rows

    fireEvent.change(textarea, {
      target: { value: "test" },
    })

    expect(textarea.rows).toBe(rowsAfterFirst)
  })
})
