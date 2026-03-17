import type { FC } from "react"
import type * as Utils from "../../utils"
import type { UseFocusOnMouseDownProps, UseFocusOnShowProps } from "./"
import { act, fireEvent, render, waitFor } from "#test"
import { useRef } from "react"
import { getFirstFocusableElement } from "../../utils"
import { useFocusOnPointerDown, useFocusOnShow } from "./"

const mockState = vi.hoisted(() => {
  return {
    defaultGetFirstFocusableElement:
      undefined as unknown as typeof getFirstFocusableElement,
  }
})

vi.mock("../../utils", async (importOriginal) => {
  const actual = await importOriginal<typeof Utils>()
  mockState.defaultGetFirstFocusableElement = actual.getFirstFocusableElement

  return {
    ...actual,
    getFirstFocusableElement: vi.fn(actual.getFirstFocusableElement),
  }
})

describe("useFocusOnShow", () => {
  afterEach(() => {
    const firstFocusableMock = vi.mocked(getFirstFocusableElement)
    vi.restoreAllMocks()
    firstFocusableMock.mockReset()
    firstFocusableMock.mockImplementation(
      mockState.defaultGetFirstFocusableElement,
    )
  })

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

  test("focuses on the element when it becomes visible", async () => {
    const { getByTestId, rerender } = render(<Component visible={false} />)
    const button = getByTestId("button")

    expect(button).not.toHaveFocus()

    rerender(<Component visible />)

    await waitFor(() => {
      expect(button).toHaveFocus()
    })
  })

  test("focuses on the first tabbable element when focusTarget is not provided", async () => {
    const { getByTestId, rerender } = render(
      <ComponentWithoutFocusTarget visible={false} />,
    )
    const button = getByTestId("button")
    vi.mocked(getFirstFocusableElement).mockReturnValue(button)

    expect(button).not.toHaveFocus()

    rerender(<ComponentWithoutFocusTarget visible />)

    await waitFor(() => {
      expect(button).toHaveFocus()
    })
  })

  test("focuses on the target when there are no focusable descendants", async () => {
    const { getByTestId, rerender } = render(
      <ComponentWithoutFocusableChild visible={false} />,
    )
    const target = getByTestId("target")
    vi.mocked(getFirstFocusableElement).mockReturnValue(null)

    rerender(<ComponentWithoutFocusableChild visible />)

    await waitFor(() => {
      expect(target).toHaveFocus()
    })
  })

  test("supports passing element directly as refOrEl", async () => {
    const target = document.createElement("div")
    target.tabIndex = -1
    const button = document.createElement("button")
    target.appendChild(button)
    vi.mocked(getFirstFocusableElement).mockReturnValue(button)

    const ComponentWithElementTarget: FC<
      Omit<UseFocusOnShowProps, "focusTarget">
    > = (props) => {
      useFocusOnShow(target, { shouldFocus: true, ...props })

      return null
    }

    document.body.append(target)
    const { rerender } = render(<ComponentWithElementTarget visible={false} />)

    rerender(<ComponentWithElementTarget visible />)

    try {
      await waitFor(() => {
        expect(button).toHaveFocus()
      })
    } finally {
      target.remove()
    }
  })

  test("does nothing when shouldFocus is false", async () => {
    const target = document.createElement("div")
    target.tabIndex = -1
    target.appendChild(document.createElement("button"))

    const ComponentWithDisabledFocus: FC<{ visible: boolean }> = ({
      visible,
    }) => {
      useFocusOnShow(target, { shouldFocus: false, visible })

      return null
    }

    const { rerender } = render(<ComponentWithDisabledFocus visible={false} />)
    rerender(<ComponentWithDisabledFocus visible />)

    await waitFor(() => {
      expect(getFirstFocusableElement).not.toHaveBeenCalled()
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

    const { getByTestId, rerender } = render(
      <ComponentWithActiveElement visible={false} />,
    )
    const button = getByTestId("active-button")

    button.focus()
    const focusSpy = vi.spyOn(button, "focus")
    rerender(<ComponentWithActiveElement visible />)

    await waitFor(() => {
      expect(getFirstFocusableElement).not.toHaveBeenCalled()
      expect(focusSpy).not.toHaveBeenCalled()
      expect(button).toHaveFocus()
    })
  })

  test("does not throw when ref.current is null", async () => {
    const ComponentWithNullTarget: FC<{ visible: boolean }> = ({ visible }) => {
      const ref = useRef<HTMLDivElement>(null)
      useFocusOnShow(ref, { shouldFocus: true, visible })

      return null
    }

    const { rerender } = render(<ComponentWithNullTarget visible={false} />)
    expect(() => rerender(<ComponentWithNullTarget visible />)).not.toThrow()
    await waitFor(() => {
      expect(getFirstFocusableElement).not.toHaveBeenCalled()
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

  afterEach(() => {
    vi.restoreAllMocks()
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

  test("does not focus when target is already active", async () => {
    const { getByTestId } = render(<Component />)
    const button = getByTestId("button")
    button.focus()
    const focusSpy = vi.spyOn(button, "focus")

    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(focusSpy).not.toHaveBeenCalled()
    })
  })

  test("uses ref as fallback when elements is not provided", async () => {
    const { getByTestId } = render(<Component elements={undefined} />)
    const button = getByTestId("button")

    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(button).toHaveFocus()
    })
  })

  test("supports raw HTMLElement in elements and ignores null entries", async () => {
    const { getByTestId, rerender } = render(<Component />)
    const button = getByTestId("button")

    rerender(<Component elements={[button]} />)
    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(button).toHaveFocus()
    })

    // Move focus away so the second assertion checks null-elements handling only.
    button.blur()
    rerender(<Component elements={[null]} />)
    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(button).not.toHaveFocus()
    })
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

      const { getByTestId } = render(<Component />)
      const button = getByTestId("button")

      act(() => fireEvent.pointerDown(button))

      await waitFor(() => {
        expect(button).not.toHaveFocus()
      })
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
