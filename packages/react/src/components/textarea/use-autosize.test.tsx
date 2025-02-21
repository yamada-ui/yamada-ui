import { useRef } from "react"
import { Textarea } from "."
import { fireEvent, render, screen } from "../../../test"
import { useAutosize } from "./use-autosize"

const AutoSizeTextarea = ({
  maxRows = Infinity,
  minRows = 1,
}: {
  maxRows?: number
  minRows?: number
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const resizeTextarea = useAutosize({ ref: textareaRef, maxRows, minRows })

  return (
    <Textarea
      ref={textareaRef}
      data-testid="autosize-textarea"
      onChange={resizeTextarea}
      onFocus={resizeTextarea}
    />
  )
}

describe("useAutosize", () => {
  test("it adjusts the rows of the textarea based on content", () => {
    render(<AutoSizeTextarea />)

    const textarea = screen.getByTestId("autosize-textarea")

    fireEvent.input(textarea, { target: { value: "This\nis\na\ntest\ninput" } })

    expect(textarea).toHaveValue("This\nis\na\ntest\ninput")
    expect(textarea).toHaveAttribute("rows", "5")
  })

  test("it does not exceed maxRows", () => {
    render(<AutoSizeTextarea maxRows={3} />)

    const textarea = screen.getByTestId("autosize-textarea")

    fireEvent.input(textarea, {
      target: { value: "This\nis\na\ntest\ninput" },
    })

    expect(textarea).toHaveValue("This\nis\na\ntest\ninput")
    expect(textarea).toHaveAttribute("rows", "3")
  })

  test("it does not go below minRows", () => {
    render(<AutoSizeTextarea minRows={3} />)

    const textarea = screen.getByTestId("autosize-textarea")

    fireEvent.input(textarea, { target: { value: "This" } })

    expect(textarea).toHaveValue("This")
    expect(textarea).toHaveAttribute("rows", "3")
  })

  test("it adjusts the rows of the textarea based on the number of lines", () => {
    const originalCloneNode = HTMLElement.prototype.cloneNode
    HTMLElement.prototype.cloneNode = function (deep: boolean) {
      const clonedNode = originalCloneNode.call(
        this,
        deep,
      ) as HTMLTextAreaElement
      Object.defineProperty(clonedNode, "scrollHeight", {
        get: function () {
          const lines = (this.value.match(/\n/g) || []).length + 1
          return lines * 20
        },
      })
      return clonedNode
    }

    render(<AutoSizeTextarea maxRows={5} minRows={1} />)

    const textarea = screen.getByTestId("autosize-textarea")

    fireEvent.input(textarea, { target: { value: "Line 1" } })
    let rows = parseInt(textarea.getAttribute("rows") || "0")
    expect(rows).toBeGreaterThanOrEqual(1)

    fireEvent.input(textarea, { target: { value: "Line 1\nLine 2" } })
    let newRows = parseInt(textarea.getAttribute("rows") || "0")
    expect(newRows).toBeGreaterThanOrEqual(rows)

    fireEvent.input(textarea, { target: { value: "Line 1" } })
    rows = newRows
    newRows = parseInt(textarea.getAttribute("rows") || "0")
    expect(newRows).toBeLessThanOrEqual(rows)
  })
})
