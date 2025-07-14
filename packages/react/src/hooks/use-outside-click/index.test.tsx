import type { FC } from "react"
import type { UseOutsideClickProps } from "./"
import { useRef } from "react"
import { render } from "@/test"
import { useOutsideClick } from "./"

describe("useOutsideClick", () => {
  const Component: FC<Partial<UseOutsideClickProps>> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    useOutsideClick({ ref, ...props })

    return <div ref={ref} data-testid="el" />
  }

  test("should call handler on outside click", async () => {
    const handler = vi.fn()

    const { user } = render(<Component handler={handler} />)

    await user.click(document.body)

    expect(handler).toHaveBeenCalledWith(expect.any(Object))
  })

  test("should not call handler on inside click", async () => {
    const handler = vi.fn()

    const { getByTestId, user } = render(<Component handler={handler} />)

    const el = getByTestId("el")

    await user.click(el)

    expect(handler).not.toHaveBeenCalled()
  })

  test("should not call handler when disabled", async () => {
    const handler = vi.fn()

    const { user } = render(<Component enabled={false} handler={handler} />)

    await user.click(document.body)

    expect(handler).not.toHaveBeenCalled()
  })

  test("calls handler on touchend outside element", () => {
    const handler = vi.fn()

    render(<Component handler={handler} />)

    const touchStartEvent = new Event("touchstart")
    document.dispatchEvent(touchStartEvent)
    const touchEndEvent = new Event("touchend")
    document.dispatchEvent(touchEndEvent)

    expect(handler).toHaveBeenCalledWith(expect.any(Object))
  })

  test("does not call handler on touchend inside element", async () => {
    const handler = vi.fn()

    const { getByTestId, user } = render(<Component handler={handler} />)

    const el = getByTestId("el")

    const touchEndEvent = new Event("touchend", { bubbles: true })
    el.dispatchEvent(touchEndEvent)

    expect(handler).not.toHaveBeenCalled()

    await user.click(document.body)

    expect(handler).not.toHaveBeenCalled()
  })
})
