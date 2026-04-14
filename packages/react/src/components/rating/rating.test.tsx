import { a11y, page, render } from "#test/browser"
import { Rating } from "."

const dispatchMouse = (
  el: EventTarget,
  type: "mousedown" | "mouseleave" | "mousemove",
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

describe("<Rating />", () => {
  const defaultGetBoundingClientRect =
    window.HTMLElement.prototype.getBoundingClientRect

  beforeAll(() => {
    window.HTMLElement.prototype.getBoundingClientRect = () => {
      return {
        height: 20,
        left: 16,
        width: 100,
      } as DOMRect
    }
    vi.spyOn(HTMLElement.prototype, "matches").mockImplementation(() => true)
  })

  afterAll(() => {
    window.HTMLElement.prototype.getBoundingClientRect =
      defaultGetBoundingClientRect
    vi.clearAllMocks()
  })

  test("renders component correctly", async () => {
    await a11y(<Rating />)
  })

  test("sets `displayName` correctly", () => {
    expect(Rating.displayName).toBe("RatingRoot")
  })

  test("sets `className` correctly", async () => {
    await render(<Rating />)
    await expect
      .element(page.getByRole("radiogroup"))
      .toHaveClass("ui-rating__root")
  })

  test("should merge `groupProps` with slot props without overwriting user props", async () => {
    const onClick = vi.fn()

    const { container } = await render(
      <Rating
        groupProps={(value) => ({
          className: `group-${value}`,
          style: { outlineColor: "red" },
          value,
          onClick,
        })}
      />,
    )

    const firstGroup = container.querySelector(".ui-rating__group")

    expect(firstGroup).toHaveClass("ui-rating__group", "group-1")
    expect(firstGroup).toHaveStyle({ outlineColor: "rgb(255, 0, 0)" })

    firstGroup?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test("rating renders correctly with value", async () => {
    const { container } = await render(<Rating value={4} />)

    const items = container.querySelectorAll(".ui-rating__item")

    for (let i = 1; i < 5; i++) {
      expect(items[i]).toHaveAttribute("data-filled")
    }
  })

  test("disabled Rating renders correctly", async () => {
    await render(<Rating data-testid="rating" disabled />)

    await expect
      .element(page.getByTestId("rating"))
      .toHaveAttribute("aria-disabled")
  })

  test("readonly Rating renders correctly", async () => {
    await render(<Rating data-testid="rating" readOnly />)

    await expect
      .element(page.getByTestId("rating"))
      .toHaveAttribute("aria-readonly")
  })

  test("should be filled to the point of hovering", async () => {
    const { container } = await render(
      <Rating data-testid="rating" height={20} width={100} />,
    )

    const rating = page.getByTestId("rating").element()

    const items = container.querySelectorAll(".ui-rating__item")

    for (let i = 1; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }

    dispatchMouse(rating, "mouseenter")
    dispatchMouse(rating, "mousemove", { clientX: 50, clientY: 10 })

    await expect.poll(() => items[1]?.hasAttribute("data-filled")).toBe(true)
    await expect.poll(() => items[2]?.hasAttribute("data-filled")).toBe(true)
    await expect.poll(() => items[3]?.hasAttribute("data-filled")).toBe(false)

    rating.dispatchEvent(
      new MouseEvent("mouseout", {
        bubbles: true,
        relatedTarget: document.body,
      }),
    )

    await expect.poll(() => items[1]?.hasAttribute("data-filled")).toBe(false)
    await expect.poll(() => items[2]?.hasAttribute("data-filled")).toBe(false)
  })

  test("value should be updated correctly on the mouseDown event", async () => {
    const onChange = vi.fn()

    const { container } = await render(<Rating onChange={onChange} />)

    const items = container.querySelectorAll(".ui-rating__item")
    dispatchMouse(items[3]!, "mousedown", { button: 0 })

    expect(onChange).toHaveBeenCalledExactlyOnceWith(3)
  })

  test("value should be updated correctly on the touchStart event", async () => {
    const onChange = vi.fn()

    const { container } = await render(<Rating onChange={onChange} />)

    const items = container.querySelectorAll(".ui-rating__item")
    dispatchTouchStart(items[3]!)

    expect(onChange).toHaveBeenCalledExactlyOnceWith(3)
  })

  test("highlightSelectedOnly should work correctly", async () => {
    const { container } = await render(
      <Rating defaultValue={3} highlightSelectedOnly />,
    )

    const items = container.querySelectorAll(".ui-rating__item")
    expect(items[3]).toHaveAttribute("data-filled")

    for (let i = 1; i < 3; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }
    for (let i = 4; i < items.length; i++) {
      expect(items[i]).not.toHaveAttribute("data-filled")
    }
  })

  test("value should be updated on root touchStart event", async () => {
    const onChange = vi.fn()

    await render(<Rating data-testid="rating" onChange={onChange} />)

    const rating = page.getByTestId("rating").element()

    dispatchTouchStart(rating, [{ clientX: 50, clientY: 10 }])

    expect(onChange).toHaveBeenCalledWith(2)
  })

  test("root touchEnd should call preventDefault", async () => {
    await render(<Rating data-testid="rating" />)

    const rating = page.getByTestId("rating").element()

    const event = new Event("touchend", {
      bubbles: true,
      cancelable: true,
    })
    const preventDefaultSpy = vi.spyOn(event, "preventDefault")

    rating.dispatchEvent(event)

    expect(preventDefaultSpy).toHaveBeenCalledWith()
  })

  test("should not update value when disabled", async () => {
    const { container } = await render(<Rating disabled />)

    const items = container.querySelectorAll(".ui-rating__item")

    dispatchMouse(items[3]!, "mousedown", { button: 0 })

    expect(items[3]?.firstChild).not.toHaveAttribute("data-checked")
  })

  test("should use custom color correctly", async () => {
    const colors: { [key: number]: string } = {
      1: "red.500",
      2: "orange.500",
      3: "yellow.500",
      4: "green.500",
      5: "blue.500",
    }

    const getColor = (value: number): string | undefined => colors[value]

    const { container } = await render(
      <Rating color={getColor} defaultValue={5} />,
    )
    const items = container.querySelectorAll(".ui-rating__item")

    const styleElements = document.getElementsByTagName("style")
    const cssText = Array.from(styleElements)
      .map((style) => style.textContent)
      .join("")

    for (let i = 1; i < items.length; i++) {
      expect(items[i]).toHaveAttribute("data-filled")

      const emotionClass = Array.from(items[i]!.classList)[1]

      const expectedColor = getColor(i)
      const expectedVar = `var(--ui-colors-${expectedColor!.replace(".", "-")})`

      const ruleExists =
        cssText.includes(`${emotionClass}[data-filled]`) &&
        cssText.includes(`color:${expectedVar}`)
      expect(ruleExists).toBeTruthy()
    }
  })

  test("should reset hovered value on blur when mouse is outside", async () => {
    const { container } = await render(<Rating />)
    const inputs = container.querySelectorAll("input[type='radio']")
    const firstInput = inputs[0] as HTMLInputElement

    firstInput.focus()
    dispatchMouse(container.firstChild!, "mouseleave")
    firstInput.blur()

    const activeInput = container.querySelector("input[data-active='true']")
    expect(activeInput).toBeNull()
  })

  test("should update value on KeyboardEvent", async () => {
    const onChange = vi.fn()

    const { container, user } = await render(<Rating onChange={onChange} />)

    const inputs = container.querySelectorAll("input[type='radio']")

    ;(inputs[1] as HTMLInputElement).focus()

    await user.keyboard("{Space}")

    expect(onChange).toHaveBeenCalledWith(1)
  })
})
