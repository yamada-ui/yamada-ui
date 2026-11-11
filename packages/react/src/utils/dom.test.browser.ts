import { getEventRelatedTarget } from "./dom"

describe("getEventRelatedTarget", () => {
  test("returns the active element nested in a shadow root", () => {
    const host = document.createElement("div")
    const shadowRoot = host.attachShadow({ mode: "open" })
    const currentTarget = document.createElement("div")
    const nestedHost = document.createElement("div")
    const nestedShadowRoot = nestedHost.attachShadow({ mode: "open" })
    const input = document.createElement("input")

    input.setAttribute("aria-label", "Nested input")
    nestedShadowRoot.append(input)
    shadowRoot.append(currentTarget, nestedHost)
    document.body.append(host)

    try {
      input.focus()

      const ev = {
        currentTarget,
        relatedTarget: null,
      } as unknown as React.FocusEvent

      expect(getEventRelatedTarget(ev)).toBe(input)
    } finally {
      host.remove()
    }
  })
})
