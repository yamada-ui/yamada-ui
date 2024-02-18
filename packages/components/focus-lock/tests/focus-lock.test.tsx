import { FocusLock } from "@yamada-ui/react"
import { screen, render, renderHook } from "@yamada-ui/test"
import { useRef } from "react"

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
    expect(document.activeElement).toEqual(focusedBtn)

    notFocusedBtn.focus()
    expect(document.activeElement).toEqual(focusedBtn)
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
    expect(document.activeElement).toEqual(focusedBtn)
  })

  test("correctly focuses on contentRef when no focusable elements exist", () => {
    // TODO: Add test
  })

  test("correctly focuses on the finalFocusRef when the FocusLock is unmounted", () => {
    // TODO: Add test
  })
})
