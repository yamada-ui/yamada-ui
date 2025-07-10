import { getEventRelatedTarget } from "./dom"

describe("getEventRelatedTarget", () => {
  test("should return the related target of an event", () => {
    const element = document.createElement("div")
    const ev = new FocusEvent("focus", {
      relatedTarget: element,
    }) as unknown as React.FocusEvent

    expect(getEventRelatedTarget(ev)).toBe(element)
  })
})
