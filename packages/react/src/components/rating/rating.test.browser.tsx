import { page, render } from "#test/browser"
import { Rating } from "."

const dispatchMouse = (
  el: EventTarget,
  type: "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout",
  init: MouseEventInit = {},
) => {
  el.dispatchEvent(new MouseEvent(type, { bubbles: true, ...init }))
}

const dispatchTouchStart = (
  el: EventTarget,
  touches: { clientX: number; clientY: number }[] = [],
) => {
  const event = new Event("touchstart", {
    bubbles: true,
    cancelable: true,
  }) as Event & { touches: { clientX: number; clientY: number }[] }

  Object.defineProperty(event, "touches", { value: touches })

  el.dispatchEvent(event)
}

const getRatingRect = (testId: string) => {
  const rating = page.getByTestId(testId).element()

  if (!(rating instanceof HTMLElement))
    throw new Error("Expected an HTMLElement")

  return { rating, rect: rating.getBoundingClientRect() }
}

describe("<Rating />", () => {
  test("fills items up to the hovered position", async () => {
    const { container } = await render(
      <Rating data-testid="rating" height={20} width={100} />,
    )

    const { rating, rect } = getRatingRect("rating")
    const items = container.querySelectorAll(".ui-rating__item")

    for (let i = 1; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }

    const itemWidth = rect.width / 5

    dispatchMouse(rating, "mouseenter")
    dispatchMouse(rating, "mousemove", {
      clientX: rect.left + itemWidth * 1.5,
      clientY: rect.top + rect.height / 2,
    })

    await expect.poll(() => items[1]?.hasAttribute("data-filled")).toBe(true)
    await expect.poll(() => items[2]?.hasAttribute("data-filled")).toBe(true)
    await expect.poll(() => items[3]?.hasAttribute("data-filled")).toBe(false)

    dispatchMouse(rating, "mouseleave")
    dispatchMouse(rating, "mouseout", { relatedTarget: document.body })

    await expect.poll(() => items[1]?.hasAttribute("data-filled")).toBe(false)
    await expect.poll(() => items[2]?.hasAttribute("data-filled")).toBe(false)
  })

  test("updates value on the mouseDown event", async () => {
    const onChange = vi.fn()
    const { container } = await render(<Rating onChange={onChange} />)
    const items = container.querySelectorAll(".ui-rating__item")

    dispatchMouse(items[3]!, "mousedown", { button: 0 })

    expect(onChange).toHaveBeenCalledExactlyOnceWith(3)
  })

  test("updates value on item touchStart event", async () => {
    const onChange = vi.fn()
    const { container } = await render(<Rating onChange={onChange} />)
    const items = container.querySelectorAll(".ui-rating__item")

    dispatchTouchStart(items[3]!)

    expect(onChange).toHaveBeenCalledExactlyOnceWith(3)
  })

  test("updates value on root touchStart event", async () => {
    const onChange = vi.fn()

    await render(
      <Rating
        data-testid="rating"
        height={20}
        width={100}
        onChange={onChange}
      />,
    )

    const { rating, rect } = getRatingRect("rating")
    const itemWidth = rect.width / 5

    dispatchTouchStart(rating, [
      {
        clientX: rect.left + itemWidth * 1.5,
        clientY: rect.top + rect.height / 2,
      },
    ])

    expect(onChange).toHaveBeenCalledWith(2)
  })

  test("calls preventDefault on root touchEnd", async () => {
    await render(<Rating data-testid="rating" />)

    const { rating } = getRatingRect("rating")
    const event = new Event("touchend", {
      bubbles: true,
      cancelable: true,
    })
    const preventDefaultSpy = vi.spyOn(event, "preventDefault")

    rating.dispatchEvent(event)

    expect(preventDefaultSpy).toHaveBeenCalledWith()
  })

  test("does not update value when disabled", async () => {
    const { container } = await render(<Rating disabled />)
    const items = container.querySelectorAll(".ui-rating__item")

    dispatchMouse(items[3]!, "mousedown", { button: 0 })

    expect(items[3]?.firstChild).not.toHaveAttribute("data-checked")
  })

  test("resets hovered value on blur when mouse is outside", async () => {
    const { container } = await render(<Rating />)
    const inputs = container.querySelectorAll("input[type='radio']")
    const firstInput = inputs[0]
    if (!(firstInput instanceof HTMLInputElement))
      throw new Error("expected input element")

    firstInput.focus()
    dispatchMouse(container.firstChild!, "mouseleave")
    firstInput.blur()

    const activeInput = container.querySelector("input[data-active='true']")
    expect(activeInput).toBeNull()
  })

  test("updates value via keyboard", async () => {
    const onChange = vi.fn()

    const { container, user } = await render(<Rating onChange={onChange} />)

    const inputs = container.querySelectorAll("input[type='radio']")
    const firstInput = inputs[0]
    if (!(firstInput instanceof HTMLInputElement))
      throw new Error("expected input element")

    await user.tab()
    firstInput.focus()
    await user.keyboard("{ArrowRight}")

    await expect.poll(() => document.activeElement === inputs[1]).toBe(true)

    await user.keyboard("{Space}")

    expect(onChange).toHaveBeenCalledWith(1)
  })
})
