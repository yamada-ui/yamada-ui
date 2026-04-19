import { page, render, renderHook } from "#test/browser"
import { useRef, useState } from "react"
import { FocusLock } from "./focus-lock"

describe("<FocusLock />", () => {
  test("sets `displayName` correctly", () => {
    expect(FocusLock.name).toBe("FocusLock")
  })

  test("correctly focuses on elements within the lock", async () => {
    await render(
      <>
        <button>Not Focused Button</button>
        <FocusLock>
          <button>Focused Button</button>
        </FocusLock>
      </>,
    )

    const notFocusedBtn = page.getByRole("button", {
      name: "Not Focused Button",
      exact: true,
    })
    const focusedBtn = page.getByRole("button", {
      name: "Focused Button",
      exact: true,
    })

    focusedBtn.element().focus()
    await expect.element(focusedBtn).toHaveFocus()

    notFocusedBtn.element().focus()
    await expect.element(focusedBtn).toHaveFocus()
  })

  test("correctly focuses on the button with a reference when initialized", async () => {
    const { result } = await renderHook(() => useRef(null))

    await render(
      <FocusLock initialFocusRef={result.current}>
        <button>Not Focused Button</button>
        <button ref={result.current}>Focused Button</button>
      </FocusLock>,
    )

    const focusedBtn = page.getByRole("button", {
      name: "Focused Button",
      exact: true,
    })
    await expect.element(focusedBtn).toHaveFocus()
  })

  test("correctly focuses on contentRef when no focusable elements exist", async () => {
    const { result } = await renderHook(() => useRef(null))

    await render(
      <FocusLock contentRef={result.current}>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div ref={result.current} tabIndex={0}>
          No focusable elements here
        </div>
      </FocusLock>,
    )

    const contentDiv = page.getByText("No focusable elements here")
    await expect.element(contentDiv).toHaveFocus()
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

    const { user } = await render(<TestComponent />)

    const focusLockButton = page.getByRole("button", {
      name: "Focus Lock Button",
    })
    const outsideButton = page.getByRole("button", { name: "Outside Button" })
    const unmountButton = page.getByRole("button", {
      name: "Unmount FocusLock Button",
    })

    // Focus on a button inside the FocusLock
    focusLockButton.element().focus()
    await expect.element(focusLockButton).toHaveFocus()

    // Unmount the FocusLock
    await user.click(unmountButton)

    // Check that focus returns to the outside button
    await expect.element(outsideButton).toHaveFocus()
  })
})
