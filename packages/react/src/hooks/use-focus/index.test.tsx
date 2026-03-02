import type { FC } from "react"
import type { UseFocusOnMouseDownProps, UseFocusOnShowProps } from "./"
import { act, fireEvent, render, waitFor } from "#test"
import { useRef } from "react"
import * as utils from "../../utils"
import { useFocusOnPointerDown, useFocusOnShow } from "./"

describe("useFocusOnShow", () => {
  afterEach(() => {
    vi.restoreAllMocks()
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
    const focusSpy = vi.spyOn(button, "focus")
    const getFirstFocusableElementSpy = vi
      .spyOn(utils, "getFirstFocusableElement")
      .mockReturnValue(button)

    expect(button).not.toHaveFocus()

    rerender(<ComponentWithoutFocusTarget visible />)

    await waitFor(() => {
      expect(getFirstFocusableElementSpy).toHaveBeenCalledWith()
      expect(focusSpy).toHaveBeenCalledWith()
    })
  })

  test("focuses on the target when there are no focusable descendants", async () => {
    const { getByTestId, rerender } = render(
      <ComponentWithoutFocusableChild visible={false} />,
    )
    const target = getByTestId("target")
    const focusSpy = vi.spyOn(target, "focus")
    const getFirstFocusableElementSpy = vi
      .spyOn(utils, "getFirstFocusableElement")
      .mockReturnValue(null)

    rerender(<ComponentWithoutFocusableChild visible />)

    await waitFor(() => {
      expect(getFirstFocusableElementSpy).toHaveBeenCalledWith()
      expect(focusSpy).toHaveBeenCalledWith()
    })
  })

  test("supports passing element directly as refOrEl", async () => {
    const target = document.createElement("div")
    target.tabIndex = -1
    const button = document.createElement("button")
    target.appendChild(button)

    const ComponentWithElementTarget: FC<
      Omit<UseFocusOnShowProps, "focusTarget">
    > = (props) => {
      useFocusOnShow(target, { shouldFocus: true, ...props })

      return null
    }

    const focusSpy = vi.spyOn(button, "focus")
    const getFirstFocusableElementSpy = vi
      .spyOn(utils, "getFirstFocusableElement")
      .mockReturnValue(button)

    const { rerender } = render(<ComponentWithElementTarget visible={false} />)

    rerender(<ComponentWithElementTarget visible />)

    await waitFor(() => {
      expect(getFirstFocusableElementSpy).toHaveBeenCalledWith()
      expect(focusSpy).toHaveBeenCalledWith()
    })
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

    const firstFocusableSpy = vi.spyOn(utils, "getFirstFocusableElement")
    const { rerender } = render(<ComponentWithDisabledFocus visible={false} />)
    rerender(<ComponentWithDisabledFocus visible />)

    await waitFor(() => {
      expect(firstFocusableSpy).not.toHaveBeenCalled()
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

    const firstFocusableSpy = vi.spyOn(utils, "getFirstFocusableElement")
    const { getByTestId, rerender } = render(
      <ComponentWithActiveElement visible={false} />,
    )
    const button = getByTestId("active-button")

    button.focus()
    const focusSpy = vi.spyOn(button, "focus")
    rerender(<ComponentWithActiveElement visible />)

    await waitFor(() => {
      expect(firstFocusableSpy).not.toHaveBeenCalled()
      expect(focusSpy).not.toHaveBeenCalled()
    })
  })

  test("does nothing when target cannot be resolved", async () => {
    const ComponentWithNullTarget: FC<{ visible: boolean }> = ({ visible }) => {
      const ref = useRef<HTMLDivElement>(null)
      useFocusOnShow(ref, { shouldFocus: true, visible })

      return null
    }

    const firstFocusableSpy = vi.spyOn(utils, "getFirstFocusableElement")
    const { rerender } = render(<ComponentWithNullTarget visible={false} />)
    rerender(<ComponentWithNullTarget visible />)

    await waitFor(() => {
      expect(firstFocusableSpy).not.toHaveBeenCalled()
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
    const focusSpy = vi.spyOn(button, "focus")

    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(focusSpy).toHaveBeenCalledWith()
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
    const focusSpy = vi.spyOn(button, "focus")

    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(focusSpy).toHaveBeenCalledWith()
    })
  })

  test("supports raw HTMLElement in elements and ignores null entries", async () => {
    const { getByTestId, rerender } = render(<Component />)
    const button = getByTestId("button")
    const focusSpy = vi.spyOn(button, "focus")

    rerender(<Component elements={[button]} />)
    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(focusSpy).toHaveBeenCalledWith()
    })

    // Move focus away so the second assertion checks null-elements handling only.
    button.blur()
    focusSpy.mockClear()
    rerender(<Component elements={[null]} />)
    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(focusSpy).not.toHaveBeenCalled()
    })
  })

  test("does not focus on non-safari browsers", async () => {
    vi.spyOn(utils, "isSafari").mockReturnValue(false)

    const { getByTestId } = render(<Component />)
    const button = getByTestId("button")
    const focusSpy = vi.spyOn(button, "focus")

    act(() => fireEvent.pointerDown(button))

    await waitFor(() => {
      expect(focusSpy).not.toHaveBeenCalled()
    })
  })
})
