import type { FC } from "react"
import type { UseFocusOnMouseDownProps, UseFocusOnShowProps } from "./"
import { act, fireEvent, render, waitFor } from "#test"
import { useRef } from "react"
import { useFocusOnPointerDown, useFocusOnShow } from "./"

describe("useFocusOnShow", () => {
  const Component: FC<Omit<UseFocusOnShowProps, "focusRef">> = (props) => {
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

  const ComponentWithoutFocusRef: FC<Omit<UseFocusOnShowProps, "focusRef">> = (
    props,
  ) => {
    const ref = useRef<HTMLDivElement>(null)
    useFocusOnShow(ref, { shouldFocus: true, ...props })

    return (
      <div ref={ref}>
        <button data-testid="button">Button</button>
      </div>
    )
  }

  test("focuses on the element when it becomes visible", async () => {
    const { getByTestId, rerender } = render(<Component visible={false} />)
    const button = getByTestId("button")

    expect(button).not.toHaveFocus()

    rerender(<Component visible />)

    await waitFor(() => {
      expect(button).toHaveFocus()
    })
  })

  test("focuses on the first tabbable element when focusRef is not provided", async () => {
    const { getByTestId, rerender } = render(
      <ComponentWithoutFocusRef visible={false} />,
    )
    const button = getByTestId("button")

    expect(button).not.toHaveFocus()

    rerender(<ComponentWithoutFocusRef visible />)

    await waitFor(() => {
      expect(button).not.toHaveFocus()
    })
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

  test("prevents default behavior and focuses on the target element", async () => {
    const { getByTestId } = render(<Component />)
    const button = getByTestId("button")

    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(button).toHaveFocus()
    })
  })

  test("does not focus when disabled", async () => {
    const { getByTestId } = render(<Component enabled={false} />)
    const button = getByTestId("button")

    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(button).not.toHaveFocus()
    })
  })
})
