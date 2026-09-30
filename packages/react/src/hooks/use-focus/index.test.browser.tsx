import type { FC } from "react"
import type { UseFocusOnMouseDownProps, UseFocusOnShowProps } from "./"
import { useCallback, useRef } from "react"
import { createPortal } from "react-dom"
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

  test("does not move focus already inside a nested shadow root", async () => {
    const ComponentInShadowDOM: FC<{
      visible: boolean
      onActiveButton: (activeButton: HTMLButtonElement) => void
    }> = ({ visible, onActiveButton }) => {
      const ref = useRef<HTMLDivElement>(null)
      const focusRef = useRef<HTMLButtonElement>(null)
      const nestedHostRef = useCallback(
        (nestedHost: HTMLDivElement | null) => {
          if (!nestedHost || nestedHost.shadowRoot) return

          const nestedShadowRoot = nestedHost.attachShadow({ mode: "open" })
          const activeButton = document.createElement("button")
          activeButton.textContent = "Active Button"
          nestedShadowRoot.appendChild(activeButton)
          onActiveButton(activeButton)
        },
        [onActiveButton],
      )
      useFocusOnShow(ref, {
        focusTarget: focusRef,
        shouldFocus: true,
        visible,
      })

      return (
        <div ref={ref}>
          <div ref={nestedHostRef} />
          <button ref={focusRef}>Focus Button</button>
        </div>
      )
    }
    const host = document.createElement("div")
    const shadowRoot = host.attachShadow({ mode: "open" })
    document.body.appendChild(host)

    try {
      let activeButton!: HTMLButtonElement
      const onActiveButton = (button: HTMLButtonElement) => {
        activeButton = button
      }
      const { rerender } = await render(
        createPortal(
          <ComponentInShadowDOM
            visible={false}
            onActiveButton={onActiveButton}
          />,
          shadowRoot,
        ),
        { providerProps: { rootNode: shadowRoot } },
      )

      activeButton.focus()
      rerender(
        createPortal(
          <ComponentInShadowDOM visible onActiveButton={onActiveButton} />,
          shadowRoot,
        ),
      )
      activeButton.dispatchEvent(
        new Event("transitionend", { bubbles: true, composed: true }),
      )
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => resolve()),
      )

      expect((activeButton.getRootNode() as ShadowRoot).activeElement).toBe(
        activeButton,
      )
    } finally {
      host.remove()
    }
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
  const Component: FC<
    Omit<UseFocusOnMouseDownProps, "ref"> & { preventNativeFocus?: boolean }
  > = ({ preventNativeFocus = true, ...props }) => {
    const ref = useRef<HTMLDivElement>(null)
    const targetRef = useRef<HTMLDivElement>(null)
    useFocusOnPointerDown({
      ref,
      elements: [targetRef],
      enabled: true,
      ...props,
    })

    return (
      <div ref={ref} data-testid="container">
        <div
          ref={targetRef}
          data-testid="target"
          tabIndex={-1}
          onPointerDown={
            preventNativeFocus ? (ev) => ev.preventDefault() : undefined
          }
        >
          Target
        </div>
      </div>
    )
  }

  const stubNavigator = (overrides: { platform?: string; vendor?: string }) => {
    const descriptors: { [key: string]: PropertyDescriptor | undefined } = {
      platform: Object.getOwnPropertyDescriptor(window.navigator, "platform"),
      vendor: Object.getOwnPropertyDescriptor(window.navigator, "vendor"),
    }

    for (const [key, value] of Object.entries(overrides))
      Object.defineProperty(window.navigator, key, {
        configurable: true,
        value,
      })

    return () => {
      for (const [key, descriptor] of Object.entries(descriptors))
        if (descriptor) Object.defineProperty(window.navigator, key, descriptor)
        else Reflect.deleteProperty(window.navigator, key)
    }
  }

  test("does not focus on non-safari browsers", async () => {
    const restore = stubNavigator({
      platform: "Win32",
      vendor: "Google Inc.",
    })

    try {
      const { user } = await render(<Component />)
      const target = page.getByTestId("target")

      await user.click(target)

      await expect.element(target).not.toHaveFocus()
    } finally {
      restore()
    }
  })
})
