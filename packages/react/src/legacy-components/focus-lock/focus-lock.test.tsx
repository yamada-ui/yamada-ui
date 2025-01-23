import { useRef } from "react"
import { render, renderHook, screen, waitFor } from "../../../test"
import { FocusLock } from "./"

describe("<FocusLock />", () => {
  test("correctly focuses on elements within the lock", () => {
    render(
      <>
        <button>Not Focused Button</button>
        <FocusLock>
          <button>Focused Button</button>
        </FocusLock>
      </>,
    )

    const notFocusedBtn = screen.getByRole("button", {
      name: "Not Focused Button",
    })

    const focusedBtn = screen.getByRole("button", { name: "Focused Button" })
    focusedBtn.focus()
    expect(document.activeElement).toStrictEqual(focusedBtn)

    notFocusedBtn.focus()
    expect(document.activeElement).toStrictEqual(focusedBtn)
  })

  test("correctly focuses on the button with a reference when initialized", () => {
    const { result } = renderHook(() => useRef(null))

    render(
      <FocusLock initialFocusRef={result.current}>
        <button>Not Focused Button</button>
        <button ref={result.current}>Focused Button</button>
      </FocusLock>,
    )

    const focusedBtn = screen.getByRole("button", { name: "Focused Button" })
    expect(document.activeElement).toStrictEqual(focusedBtn)
  })

  test("correctly focuses on contentRef when no focusable elements exist", async () => {
    const { result } = renderHook(() => useRef(null))

    render(
      <FocusLock contentRef={result.current}>
        <div ref={result.current} tabIndex={0}>
          No focusable elements here
        </div>
      </FocusLock>,
    )

    const contentDiv = screen.getByText("No focusable elements here")

    await waitFor(() => {
      expect(contentDiv).toHaveFocus()
    })
  })

  test.todo(
    "correctly focuses on the finalFocusRef when the FocusLock is unmounted",
  )
})
