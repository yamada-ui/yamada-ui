import type { FC } from "react"
import type { UseOutsideClickProps } from "./"
import { useRef } from "react"
import { page, render } from "#test/browser"
import { useOutsideClick } from "./"

describe("useOutsideClick", () => {
  const Component: FC<Partial<UseOutsideClickProps>> = (props) => {
    const ref = useRef<HTMLButtonElement>(null)
    useOutsideClick({ ref, ...props })

    return (
      <>
        <button ref={ref} type="button">
          inside
        </button>
        <button type="button">outside</button>
      </>
    )
  }

  test("should call handler on outside click", async () => {
    const handler = vi.fn()

    const { user } = await render(<Component handler={handler} />)

    await user.click(page.getByRole("button", { name: "outside" }))

    expect(handler).toHaveBeenCalledExactlyOnceWith(expect.any(Object))
  })

  test("should not call handler on inside click", async () => {
    const handler = vi.fn()

    const { user } = await render(<Component handler={handler} />)

    await user.click(page.getByRole("button", { name: "inside" }))

    expect(handler).not.toHaveBeenCalled()
  })

  test("should not call handler when disabled", async () => {
    const handler = vi.fn()

    const { user } = await render(
      <Component enabled={false} handler={handler} />,
    )

    await user.click(page.getByRole("button", { name: "outside" }))

    expect(handler).not.toHaveBeenCalled()
  })
})
