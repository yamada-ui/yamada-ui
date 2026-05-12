import type { FC } from "react"
import type { UseFocusOnMouseDownProps, UseFocusOnShowProps } from "./"
import { useRef } from "react"
import { a11y, page, render } from "#test/browser"
import { useFocusOnPointerDown, useFocusOnShow } from "./"

describe("useFocusOnShow", () => {
  const Component: FC<Omit<UseFocusOnShowProps, "focusTarget">> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    const focusRef = useRef<HTMLButtonElement>(null)
    useFocusOnShow(ref, {
      focusTarget: focusRef,
      shouldFocus: true,
      ...props,
    })

    return (
      <div ref={ref}>
        <button ref={focusRef} data-testid="button">
          Button
        </button>
      </div>
    )
  }

  const ComponentWithoutFocusTarget: FC<
    Omit<UseFocusOnShowProps, "focusTarget">
  > = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    useFocusOnShow(ref, { shouldFocus: true, ...props })

    return (
      <div ref={ref}>
        <button data-testid="button">Button</button>
      </div>
    )
  }

  const ComponentWithoutFocusableChild: FC<
    Omit<UseFocusOnShowProps, "focusTarget">
  > = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    useFocusOnShow(ref, { shouldFocus: true, ...props })

    return (
      <div ref={ref} data-testid="target" tabIndex={-1}>
        <span>Label</span>
      </div>
    )
  }

  test("passes a11y checks", async () => {
    await a11y(<Component visible />)
  })

  test("focuses on the element when it becomes visible", async () => {
    const { rerender } = await render(<Component visible={false} />)
    const button = page.getByTestId("button")

    await expect.element(button).not.toHaveFocus()

    rerender(<Component visible />)

    await expect.element(button).toHaveFocus()
  })

  test("focuses on the first tabbable element when focusTarget is not provided", async () => {
    const { rerender } = await render(
      <ComponentWithoutFocusTarget visible={false} />,
    )
    const button = page.getByTestId("button")

    await expect.element(button).not.toHaveFocus()

    rerender(<ComponentWithoutFocusTarget visible />)

    await expect.element(button).toHaveFocus()
  })

  test("focuses on the target when there are no focusable descendants", async () => {
    const { rerender } = await render(
      <ComponentWithoutFocusableChild visible={false} />,
    )
    const target = page.getByTestId("target")

    rerender(<ComponentWithoutFocusableChild visible />)

    await expect.element(target).toHaveFocus()
  })

  test("supports passing element directly as refOrEl", async () => {
    const target = document.createElement("div")
    target.tabIndex = -1
    const button = document.createElement("button")
    button.textContent = "Button"
    target.appendChild(button)

    const ComponentWithElementTarget: FC<
      Omit<UseFocusOnShowProps, "focusTarget">
    > = (props) => {
      useFocusOnShow(target, { shouldFocus: true, ...props })

      return null
    }

    document.body.append(target)
    const { rerender } = await render(
      <ComponentWithElementTarget visible={false} />,
    )

    rerender(<ComponentWithElementTarget visible />)

    try {
      await vi.waitFor(() => {
        expect(document.activeElement).toBe(button)
      })
    } finally {
      target.remove()
    }
  })

  test("does nothing when shouldFocus is false", async () => {
    const target = document.createElement("div")
    target.tabIndex = -1
    const button = document.createElement("button")
    target.appendChild(button)

    const ComponentWithDisabledFocus: FC<{ visible: boolean }> = ({
      visible,
    }) => {
      useFocusOnShow(target, { shouldFocus: false, visible })

      return null
    }

    const { rerender } = await render(
      <ComponentWithDisabledFocus visible={false} />,
    )

    rerender(<ComponentWithDisabledFocus visible />)

    await vi.waitFor(() => {
      expect(document.activeElement).not.toBe(button)
    })
  })

  test("does nothing when target already contains active element", async () => {
    const ComponentWithActiveElement: FC<{ visible: boolean }> = ({
      visible,
    }) => {
      const ref = useRef<HTMLDivElement>(null)
      const buttonRef = useRef<HTMLButtonElement>(null)
      useFocusOnShow(ref, { shouldFocus: true, visible })

      return (
        <div ref={ref}>
          <button ref={buttonRef} data-testid="active-button">
            Active Button
          </button>
        </div>
      )
    }

    const { rerender } = await render(
      <ComponentWithActiveElement visible={false} />,
    )
    const button = page.getByTestId("active-button")
    const buttonElement = button.element() as HTMLElement

    buttonElement.focus()
    rerender(<ComponentWithActiveElement visible />)

    await expect.element(button).toHaveFocus()
  })

  test("does not throw when ref.current is null", async () => {
    const ComponentWithNullTarget: FC<{ visible: boolean }> = ({ visible }) => {
      const ref = useRef<HTMLDivElement>(null)
      useFocusOnShow(ref, { shouldFocus: true, visible })

      return null
    }

    const { rerender } = await render(
      <ComponentWithNullTarget visible={false} />,
    )

    expect(() => rerender(<ComponentWithNullTarget visible />)).not.toThrow()
  })
})

describe("useFocusOnPointerDown", () => {
  const defaultPlatform = window.navigator.platform
  const defaultVendor = window.navigator.vendor

  beforeAll(() => {
    Object.defineProperty(window.navigator, "platform", {
      value: "MacOS",
      writable: true,
    })
    Object.defineProperty(window.navigator, "vendor", {
      value: "Apple Computer, Inc.",
      writable: true,
    })
  })

  afterAll(() => {
    Object.defineProperty(window.navigator, "platform", {
      value: defaultPlatform,
      writable: false,
    })
    Object.defineProperty(window.navigator, "vendor", {
      value: defaultVendor,
      writable: false,
    })
  })

  const Component: FC<Omit<UseFocusOnMouseDownProps, "ref">> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    useFocusOnPointerDown({
      ref,
      elements: [buttonRef],
      enabled: true,
      ...props,
    })

    return (
      <div ref={ref} data-testid="container">
        <button ref={buttonRef} data-testid="button">
          Button
        </button>
      </div>
    )
  }

  const dispatchPointerDown = (target: Element) => {
    target.dispatchEvent(
      new PointerEvent("pointerdown", {
        bubbles: true,
        cancelable: true,
      }),
    )
  }

  test("prevents default behavior and focuses on the target element", async () => {
    await render(<Component />)
    const button = page.getByTestId("button")

    dispatchPointerDown(button.element())

    await expect.element(button).toHaveFocus()
  })

  test("does not focus when disabled", async () => {
    await render(<Component enabled={false} />)
    const button = page.getByTestId("button")

    dispatchPointerDown(button.element())

    await expect.element(button).not.toHaveFocus()
  })

  test("does not move focus when target is already active", async () => {
    await render(<Component />)
    const button = page.getByTestId("button")
    const buttonElement = button.element() as HTMLElement

    buttonElement.focus()
    dispatchPointerDown(buttonElement)

    await expect.element(button).toHaveFocus()
  })

  test("uses ref as fallback when elements is not provided", async () => {
    await render(<Component elements={undefined} />)
    const button = page.getByTestId("button")

    dispatchPointerDown(button.element())

    await expect.element(button).toHaveFocus()
  })

  test("supports raw HTMLElement in elements and ignores null entries", async () => {
    const { rerender } = await render(<Component />)
    const button = page.getByTestId("button")
    const buttonElement = button.element() as HTMLElement

    rerender(<Component elements={[buttonElement]} />)
    dispatchPointerDown(buttonElement)

    await expect.element(button).toHaveFocus()

    buttonElement.blur()
    rerender(<Component elements={[null]} />)

    const container = page.getByTestId("container").element() as HTMLElement
    dispatchPointerDown(container)

    await expect.element(button).not.toHaveFocus()
  })

  test("does not focus on non-safari browsers", async () => {
    const previousPlatform = window.navigator.platform
    const previousVendor = window.navigator.vendor

    try {
      Object.defineProperty(window.navigator, "platform", {
        value: "Win32",
        writable: true,
      })
      Object.defineProperty(window.navigator, "vendor", {
        value: "Google Inc.",
        writable: true,
      })

      await render(<Component />)
      const button = page.getByTestId("button")

      dispatchPointerDown(button.element())

      await expect.element(button).not.toHaveFocus()
    } finally {
      Object.defineProperty(window.navigator, "platform", {
        value: previousPlatform,
        writable: true,
      })
      Object.defineProperty(window.navigator, "vendor", {
        value: previousVendor,
        writable: true,
      })
    }
  })
})
