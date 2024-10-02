import type { FC } from "react"
import type { MockInstance } from "vitest"
import { act, fireEvent, render, waitFor } from "@yamada-ui/test"
import { dataAttr } from "@yamada-ui/utils"
import { useFocusVisible } from "../src"

describe("useFocusVisible", () => {
  let matchesMock: MockInstance
  const defaultPointerEvent = global.PointerEvent

  beforeEach(() => {
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

  test("focusVisible becomes true when focused", async () => {
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

    await act(async () => {
      fireEvent.focus(el)
    })

    expect(el).toHaveAttribute("data-focus-visible")

    await act(async () => {
      fireEvent.blur(el)
    })

    expect(el).not.toHaveAttribute("data-focus-visible")
  })

  test("focusVisible remains true on pointer down", async () => {
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

    await act(async () => {
      fireEvent.pointerDown(el)
    })

    expect(el).not.toHaveAttribute("data-focus-visible")
  })

  test("focusVisible becomes true on click", async () => {
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

    await act(async () => {
      fireEvent.click(el)
    })

    expect(el).not.toHaveAttribute("data-focus-visible")
  })

  test("focusVisible becomes true on keyboard event", async () => {
    const Component: FC = () => {
      const { focusVisible, ...rest } = useFocusVisible()

      return (
        <div
          tabIndex={0}
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

    await act(async () => {
      fireEvent.keyDown(el, { key: "Tab" })
    })

    waitFor(() => {
      expect(el).toHaveAttribute("data-focus-visible")
    })
  })
})
