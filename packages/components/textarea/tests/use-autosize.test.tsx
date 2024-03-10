import { render, screen, fireEvent } from "@yamada-ui/test"
import { useRef } from "react"
import { Textarea } from "../src"
import useAutosize from "../src/use-autosize"

const AutoSizeTextarea = ({
  maxRows,
  minRows,
}: {
  maxRows?: number
  minRows?: number
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const resizeTextarea = useAutosize(
    textareaRef,
    maxRows || Infinity,
    minRows || 1,
  )

  return (
    <Textarea
      ref={textareaRef}
      onChange={resizeTextarea}
      onFocus={resizeTextarea}
      data-testid="autosize-textarea"
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
})
