import { getEventRelatedTarget, isComposing, runKeyAction } from "./dom"

describe("getEventRelatedTarget", () => {
  test("should return the related target of an event", () => {
    const element = document.createElement("div")
    const ev = new FocusEvent("focus", {
      relatedTarget: element,
    }) as unknown as React.FocusEvent

    expect(getEventRelatedTarget(ev)).toBe(element)
  })
})

describe("isComposing", () => {
  test("should detect composing from keyboard event", () => {
    const ev = {
      keyCode: 229,
      nativeEvent: { isComposing: true },
    } as unknown as React.KeyboardEvent<HTMLElement>

    expect(isComposing(ev)).toBeTruthy()
  })

  test("should detect composing from InputEvent", () => {
    const inputEvent = new InputEvent("input", { data: "a" })
    Object.defineProperty(inputEvent, "isComposing", { value: true })

    const ev = {
      nativeEvent: inputEvent,
    } as unknown as React.ChangeEvent<HTMLElement>

    expect(isComposing(ev)).toBeTruthy()
  })

  test("should return false for non-composing events", () => {
    const ev = {
      nativeEvent: new Event("change"),
    } as unknown as React.ChangeEvent<HTMLElement>

    expect(isComposing(ev)).toBeFalsy()
  })
})

describe("runKeyAction", () => {
  test("should run action for matching key", () => {
    const action = vi.fn()
    const ev = {
      key: "Enter",
      code: "Enter",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent<HTMLElement>

    runKeyAction(ev, { Enter: action })

    expect(action).toHaveBeenCalledWith(ev)
    expect(ev.preventDefault).toHaveBeenCalledWith()
  })

  test("should not run action for non-matching key", () => {
    const action = vi.fn()
    const ev = {
      key: "Escape",
      code: "Escape",
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent<HTMLElement>

    runKeyAction(ev, { Enter: action })

    expect(action).not.toHaveBeenCalled()
    expect(ev.preventDefault).not.toHaveBeenCalled()
  })
})
