import { useRef, useState } from "react"
import { act, render, renderHook, screen, waitFor } from "@/test"
import { FocusLock } from "./focus-lock"

describe("<FocusLock />", () => {
  test("sets `displayName` correctly", () => {
    expect(FocusLock.name).toBe("FocusLock")
  })

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
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
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

  test("correctly focuses on the finalFocusRef when the FocusLock is unmounted", async () => {
    const TestComponent = () => {
      const [isMounted, setIsMounted] = useState(true)
      const outsideButtonRef = useRef<HTMLButtonElement>(null)

      return (
        <div>
          <button ref={outsideButtonRef}>Outside Button</button>

          {isMounted ? (
            <FocusLock finalFocusRef={outsideButtonRef}>
              <button>Focus Lock Button</button>
            </FocusLock>
          ) : null}

          <button onClick={() => setIsMounted(false)}>
            Unmount FocusLock Button
          </button>
        </div>
      )
    }

    const { user } = render(<TestComponent />)

    const focusLockButton = screen.getByRole("button", {
      name: "Focus Lock Button",
    })
    const outsideButton = screen.getByRole("button", { name: "Outside Button" })
    const unmountButton = screen.getByRole("button", {
      name: "Unmount FocusLock Button",
    })

    // Focus on a button inside the FocusLock
    act(() => {
      focusLockButton.focus()
    })
    expect(document.activeElement).toStrictEqual(focusLockButton)

    // Unmount the FocusLock
    act(() => {
      user.click(unmountButton)
    })

    // Check that focus returns to the outside button
    await waitFor(() => {
      expect(document.activeElement).toStrictEqual(outsideButton)
    })
  })
})
