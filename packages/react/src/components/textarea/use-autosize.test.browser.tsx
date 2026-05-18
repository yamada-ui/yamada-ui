import type { ChangeEventHandler, CSSProperties, RefCallback } from "react"
import type { UseAutosizeProps } from "./use-autosize"
import { page, render, renderHook } from "#test/browser"
import { useAutosize } from "./use-autosize"
import { useTextarea } from "./use-textarea"

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
      {...getTextareaProps({
        style: {
          borderBottomWidth: "0px",
          borderTopWidth: "0px",
          lineHeight: "20px",
          paddingBottom: "0px",
          paddingTop: "0px",
        },
        "aria-label": "Autosize textarea",
        placeholder,
        readOnly: value != null || undefined,
        value,
      })}
    />
  )
}

const getAutosizeTextarea = () =>
  page
    .getByRole("textbox", { name: "Autosize textarea" })
    .element() as HTMLTextAreaElement

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
      {...getTextareaProps({
        ref: propRef,
        className: propClassName,
        style: propStyle,
        "aria-label": "Hook textarea",
        onChange: propOnChange,
      })}
    />
  )
}

describe("useAutosize", () => {
  test("adjusts the rows of the textarea based on content", async () => {
    const { user } = await render(<AutoSizeTextarea minRows={1} />, {
      withProvider: false,
    })
    const textarea = getAutosizeTextarea()

    await user.type(textarea, "Line 1\nLine 2\nLine 3\nLine 4\nLine 5")

    await expect.poll(() => textarea.rows).toBe(5)
  })

  test("does not exceed maxRows", async () => {
    const { user } = await render(
      <AutoSizeTextarea maxRows={3} minRows={1} />,
      {
        withProvider: false,
      },
    )
    const textarea = getAutosizeTextarea()

    await user.type(textarea, "Line 1\nLine 2\nLine 3\nLine 4\nLine 5")

    await expect.poll(() => textarea.rows).toBe(3)
  })

  test("does not go below minRows", async () => {
    const { user } = await render(<AutoSizeTextarea minRows={4} />, {
      withProvider: false,
    })
    const textarea = getAutosizeTextarea()

    await user.type(textarea, "short")

    await expect.poll(() => textarea.rows).toBe(4)
  })

  test("uses placeholder when value is empty", async () => {
    await render(
      <AutoSizeTextarea minRows={1} placeholder={"Line 1\nLine 2\nLine 3"} />,
      {
        withProvider: false,
      },
    )

    await expect.poll(() => getAutosizeTextarea().rows).toBe(3)
  })

  test("sets resize to none when autosize is not disabled", async () => {
    await render(<AutoSizeTextarea />, { withProvider: false })

    expect(getAutosizeTextarea().style.resize).toBe("none")
  })

  test("does not set resize when disabled", async () => {
    await render(<AutoSizeTextarea disabled />, { withProvider: false })

    expect(getAutosizeTextarea().style.resize).toBe("")
  })

  test("does not resize when disabled", async () => {
    const { rerender } = await render(
      <AutoSizeTextarea disabled minRows={1} value="Line 1" />,
      { withProvider: false },
    )
    const textarea = getAutosizeTextarea()

    expect(textarea.rows).toBe(2)

    await rerender(
      <AutoSizeTextarea
        disabled
        minRows={1}
        value={"Line 1\nLine 2\nLine 3\nLine 4\nLine 5"}
      />,
    )

    expect(textarea.rows).toBe(2)
  })

  test("resizes when value changes via rerender", async () => {
    const { rerender } = await render(
      <AutoSizeTextarea minRows={1} value="Line 1" />,
      { withProvider: false },
    )
    const textarea = getAutosizeTextarea()

    await expect.poll(() => textarea.rows).toBe(1)

    await rerender(
      <AutoSizeTextarea minRows={1} value={"Line 1\nLine 2\nLine 3"} />,
    )

    await expect.poll(() => textarea.rows).toBe(3)
  })

  test("returns ref and onResizeTextarea from hook", async () => {
    const { result } = await renderHook(() => useAutosize(), {
      withProvider: false,
    })

    expect(result.current.ref).toBeDefined()
    expect(result.current.getTextareaProps).toBeDefined()
    expect(result.current.onResizeTextarea).toBeDefined()
  })

  test("does not resize when value has not changed", async () => {
    const appendChildSpy = vi.spyOn(document.body, "appendChild")
    const { rerender } = await render(
      <AutoSizeTextarea minRows={1} value="test" />,
      {
        withProvider: false,
      },
    )
    const textarea = getAutosizeTextarea()

    await expect.poll(() => textarea.rows).toBe(1)
    const appendCount = appendChildSpy.mock.calls.length

    await rerender(<AutoSizeTextarea minRows={1} value="test" />)

    expect(textarea.rows).toBe(1)
    expect(appendChildSpy).toHaveBeenCalledTimes(appendCount)
  })
})

describe("useTextarea", () => {
  test("forces resize none and calls consumer onChange handlers once with autosize", async () => {
    const hookOnChange = vi.fn()
    const propOnChange = vi.fn()
    const hookRef = vi.fn()
    const propRef = vi.fn()

    const { user } = await render(
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

    const textareaLocator = page.getByRole("textbox", { name: "Hook textarea" })
    const textarea = textareaLocator.element() as HTMLTextAreaElement

    await expect.element(textareaLocator).toHaveClass("hook-class")
    await expect.element(textareaLocator).toHaveClass("prop-class")
    await expect
      .element(textareaLocator)
      .toHaveStyle({ color: "rgb(255, 0, 0)" })
    await expect.element(textareaLocator).toHaveStyle({ fontSize: "14px" })
    await expect.element(textareaLocator).toHaveStyle({ resize: "none" })
    expect(hookRef).toHaveBeenCalledWith(textarea)
    expect(propRef).toHaveBeenCalledWith(textarea)

    await user.type(textarea, "a")

    expect(hookOnChange).toHaveBeenCalledTimes(1)
    expect(propOnChange).toHaveBeenCalledTimes(1)
  })
})
