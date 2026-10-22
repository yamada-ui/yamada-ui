import type { ReactNode } from "react"
import { createRef } from "react"
import { page } from "vitest/browser"
import { a11y, render } from "#test/browser"
import { Slot, Slottable } from "./slot"

function wrapLazy(child: ReactNode): ReactNode {
  return {
    $$typeof: Symbol.for("react.lazy"),
    _init: (payload: ReactNode) => payload,
    _payload: child,
  } as unknown as ReactNode
}

describe("<Slot />", () => {
  test.each([false, true])(
    "merges props, handlers, and refs onto lazy-wrapped children (slottable: %s)",
    async (slottable) => {
      const slotRef = createRef<HTMLElement>()
      const childRef = createRef<HTMLButtonElement>()
      const onSlotClick = vi.fn()
      const onChildClick = vi.fn()
      const child = wrapLazy(
        <button
          ref={childRef}
          className="from-child"
          title="Child title"
          onClick={onChildClick}
        >
          Save
        </button>,
      )
      const { unmount, user } = await render(
        <Slot
          ref={slotRef}
          className="from-slot"
          aria-label="Save action"
          title="Slot title"
          onClick={onSlotClick}
        >
          {slottable
            ? [
                <span key="start" aria-hidden="true">
                  Start
                </span>,
                <Slottable key="child">{child}</Slottable>,
                <span key="end" aria-hidden="true">
                  End
                </span>,
              ]
            : child}
        </Slot>,
      )

      const button = page.getByRole("button", { name: "Save action" })
      await expect.element(button).toHaveClass("from-slot", "from-child")
      await expect.element(button).toHaveAttribute("title", "Child title")
      await expect.element(button).toHaveAttribute("aria-label", "Save action")
      await expect
        .element(button)
        .toHaveTextContent(slottable ? "StartSaveEnd" : "Save")
      expect(slotRef.current).toBe(button.element())
      expect(childRef.current).toBe(button.element())

      await user.tab()
      await expect.element(button).toHaveFocus()
      await user.keyboard("{Enter}")
      expect(onSlotClick).toHaveBeenCalledTimes(1)
      expect(onChildClick).toHaveBeenCalledTimes(1)

      await user.click(button)
      expect(onSlotClick).toHaveBeenCalledTimes(2)
      expect(onChildClick).toHaveBeenCalledTimes(2)

      await unmount()
      expect(slotRef.current).toBeNull()
      expect(childRef.current).toBeNull()
    },
  )

  test("passes a11y checks with a lazy-wrapped child", async () => {
    await a11y(<Slot>{wrapLazy(<button>Save</button>)}</Slot>)
  })
})
