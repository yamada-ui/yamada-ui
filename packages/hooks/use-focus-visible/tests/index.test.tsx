import type { FC } from "react"
import type { MockInstance } from "vitest"
import { act, fireEvent, render, waitFor } from "@yamada-ui/test"
import { dataAttr } from "@yamada-ui/utils"
import { __test__, useFocusVisible } from "../src"

describe("useFocusVisible", () => {
  let matchesMock: MockInstance
  const defaultPointerEvent = global.PointerEvent

  beforeEach(() => {
    __test__.resetState()

    global.PointerEvent = class PointerEvent extends Event {
      constructor(type: string, eventInitDict?: PointerEventInit | undefined) {
        super(type, eventInitDict)
      }
    } as unknown as typeof PointerEvent

    matchesMock = vi
      .spyOn(HTMLElement.prototype, "matches")
      .mockImplementation((selector: string) => {
        if (selector === ":focus-visible") return true

        return Element.prototype.matches.call(this, selector)
      })
  })

  afterEach(() => {
    global.PointerEvent = defaultPointerEvent

    matchesMock.mockRestore()
  })

  test("focusVisible becomes true when focused", () => {
    const Component: FC = () => {
      const { focusVisible, ...rest } = useFocusVisible()

      return (
        <div
          data-focus-visible={dataAttr(focusVisible)}
          data-testid="button"
          {...rest}
        >
          Virtual Button
        </div>
      )
    }

    const { getByTestId } = render(<Component />)
    const el = getByTestId("button")

    expect(el).not.toHaveAttribute("data-focus-visible")

    act(() => {
      fireEvent.focus(el)
    })

    expect(el).toHaveAttribute("data-focus-visible")

    act(() => {
      fireEvent.blur(el)
    })

    expect(el).not.toHaveAttribute("data-focus-visible")
  })

  test("focusVisible remains true on pointer down", () => {
    const Component: FC = () => {
      const { focusVisible, ...rest } = useFocusVisible()

      return (
        <div
          data-focus-visible={dataAttr(focusVisible)}
          data-testid="button"
          {...rest}
        >
          Virtual Button
        </div>
      )
    }

    const { getByTestId } = render(<Component />)
    const el = getByTestId("button")

    act(() => {
      fireEvent.pointerDown(el)
    })

    expect(el).not.toHaveAttribute("data-focus-visible")
  })

  test("focusVisible becomes true on click", () => {
    global.PointerEvent = defaultPointerEvent

    const Component: FC = () => {
      const { focusVisible, ...rest } = useFocusVisible({ force: true })

      return (
        <div
          data-focus-visible={dataAttr(focusVisible)}
          data-testid="button"
          {...rest}
        >
          Virtual Button
        </div>
      )
    }

    const { getByTestId } = render(<Component />)
    const el = getByTestId("button")

    act(() => {
      fireEvent.click(el)
    })

    expect(el).not.toHaveAttribute("data-focus-visible")
  })

  test("focusVisible becomes true on keyboard event", () => {
    const Component: FC = () => {
      const { focusVisible, ...rest } = useFocusVisible()

      return (
        <div
          data-focus-visible={dataAttr(focusVisible)}
          data-testid="button"
          tabIndex={0}
          {...rest}
        >
          Virtual Button
        </div>
      )
    }

    const { getByTestId } = render(<Component />)

    const el = getByTestId("button")

    expect(el).not.toHaveAttribute("data-focus-visible")

    act(() => {
      fireEvent.keyDown(el, { key: "Tab" })
    })

    waitFor(() => {
      expect(el).toHaveAttribute("data-focus-visible")
    })
  })

  test("hasEventBeforeFocus is set to false and hasBlurredWindowRecently is set to true when window loses focus", () => {
    const Component: FC = () => {
      const { focusVisible, ...rest } = useFocusVisible()

      return (
        <div
          data-focus-visible={dataAttr(focusVisible)}
          data-testid="button"
          tabIndex={0}
          {...rest}
        >
          Virtual Button
        </div>
      )
    }

    const { getByTestId } = render(<Component />)
    const el = getByTestId("button")

    expect(el).not.toHaveAttribute("data-focus-visible")

    act(() => {
      fireEvent.keyDown(document, { key: "Tab" })
    })

    waitFor(() => {
      expect(el).toHaveAttribute("data-focus-visible")
    })

    act(() => {
      fireEvent.blur(window)
    })

    expect(el).not.toHaveAttribute("data-focus-visible")

    expect(__test__.getHasBlurredWindowRecently()).toBeTruthy()
    expect(__test__.getHasEventBeforeFocus()).toBeFalsy()
  })
})
