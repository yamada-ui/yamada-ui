import type { ChangeEventHandler, CSSProperties, RefCallback } from "react"
import { fireEvent, render, screen } from "#test"
import { useTextarea } from "./use-textarea"

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
})
