import { act, createRef, startTransition, Suspense, use, useState } from "react"
import { a11y, fireEvent, render, screen } from "#test"
import { Textarea } from "./"
import { useTextarea } from "./use-textarea"

describe("<Textarea />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Textarea aria-label="Enter notes" defaultValue="hello" />)
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
    if (!(textarea instanceof HTMLTextAreaElement))
      throw new Error("Expected HTMLTextAreaElement")

    expect(textarea.rows).toBe(1)
  })

  test("only updates the resize ref for committed renders", async () => {
    const resizeRef = createRef<() => void>()
    const pending = new Promise<never>(() => {})

    function Example() {
      const [minRows, setMinRows] = useState(1)

      useTextarea({ minRows, resizeRef })

      if (minRows === 2) use(pending)

      return (
        <>
          <button onClick={() => startTransition(() => setMinRows(2))}>
            Suspend
          </button>
          <button onClick={() => setMinRows(3)}>Commit</button>
          <span>Rows: {minRows}</span>
        </>
      )
    }

    const { unmount, user } = render(
      <Suspense fallback="Loading">
        <Example />
      </Suspense>,
    )
    const committedResize = resizeRef.current

    expect(committedResize).toBeInstanceOf(Function)

    await act(async () => {
      await user.click(screen.getByRole("button", { name: "Suspend" }))
    })

    expect(screen.getByText("Rows: 1")).toBeInTheDocument()
    expect(resizeRef.current).toBe(committedResize)

    fireEvent.click(screen.getByRole("button", { name: "Commit" }))

    expect(screen.getByText("Rows: 3")).toBeInTheDocument()
    expect(resizeRef.current).not.toBe(committedResize)

    unmount()

    expect(resizeRef.current).toBeNull()
  })
})
