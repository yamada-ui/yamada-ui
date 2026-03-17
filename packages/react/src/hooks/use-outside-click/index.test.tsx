import type { FC } from "react"
import type { UseOutsideClickProps } from "./"
import { page, render } from "#test/browser"
import { useRef } from "react"
import { useOutsideClick } from "./"

function dispatchTouchEvents(locator: ReturnType<typeof page.getByTestId>) {
  const el = locator.element()
  if (el instanceof HTMLElement) {
    el.dispatchEvent(new Event("touchstart", { bubbles: true }))
    el.dispatchEvent(new Event("touchend", { bubbles: true }))
  }
}

describe("useOutsideClick", () => {
  const Component: FC<Partial<UseOutsideClickProps>> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    useOutsideClick({ ref, ...props })

    return (
      <div>
        <div ref={ref} data-testid="el">
          inside
        </div>
        <div data-testid="outside">outside</div>
      </div>
    )
  }

  test("should call handler on outside click", async () => {
    const handler = vi.fn()

    const { user } = await render(<Component handler={handler} />)

    await user.click(page.getByTestId("outside"))

    expect(handler).toHaveBeenCalledExactlyOnceWith(expect.any(Object))
  })

  test("should not call handler on inside click", async () => {
    const handler = vi.fn()

    const { user } = await render(<Component handler={handler} />)

    const el = page.getByTestId("el")

    await user.click(el)

    expect(handler).not.toHaveBeenCalled()
  })

  test("should not call handler when disabled", async () => {
    const handler = vi.fn()

    const { user } = await render(
      <Component enabled={false} handler={handler} />,
    )

    await user.click(page.getByTestId("outside"))

    expect(handler).not.toHaveBeenCalled()
  })

  test("calls handler on touchend outside element", async () => {
    const handler = vi.fn()

    await render(<Component handler={handler} />)

    const touchStartEvent = new Event("touchstart", { bubbles: true })
    document.dispatchEvent(touchStartEvent)
    const touchEndEvent = new Event("touchend", { bubbles: true })
    document.dispatchEvent(touchEndEvent)

    expect(handler).toHaveBeenCalledExactlyOnceWith(expect.any(Object))
  })

  test("does not call handler on touchend inside element", async () => {
    const handler = vi.fn()

    const { user } = await render(<Component handler={handler} />)

    dispatchTouchEvents(page.getByTestId("el"))

    expect(handler).not.toHaveBeenCalled()

    await user.click(page.getByTestId("outside"))

    expect(handler).not.toHaveBeenCalled()
  })
})
