import {
  getActiveElement,
  getFocusableElements,
  getPx,
  isActiveElement,
  isFocusableElement,
  isTabbableElement,
  isVisibleElement,
  scrollLock,
} from "./dom"

describe("DOM", () => {
  describe("isVisibleElement", () => {
    test("should return true for element in layout", () => {
      const el = document.createElement("div")
      document.body.appendChild(el)
      expect(isVisibleElement(el)).toBeTruthy()
      document.body.removeChild(el)
    })

    test("should return false for element with display none", () => {
      const el = document.createElement("div")
      el.style.display = "none"
      document.body.appendChild(el)
      expect(isVisibleElement(el)).toBeFalsy()
      document.body.removeChild(el)
    })
  })

  describe("isFocusableElement", () => {
    test("should return true for visible focusable element", () => {
      const input = document.createElement("input")
      document.body.appendChild(input)
      expect(isFocusableElement(input)).toBeTruthy()
      document.body.removeChild(input)
    })
  })

  describe("isTabbableElement", () => {
    test("should return true for visible focusable element without negative tabindex", () => {
      const input = document.createElement("input")
      document.body.appendChild(input)
      expect(isTabbableElement(input)).toBeTruthy()
      document.body.removeChild(input)
    })

    test("should return false for focusable element with negative tabindex", () => {
      const input = document.createElement("input")
      input.setAttribute("tabindex", "-1")
      document.body.appendChild(input)
      expect(isTabbableElement(input)).toBeFalsy()
      document.body.removeChild(input)
    })
  })

  describe("getFocusableElements", () => {
    test("should return focusable elements from container", () => {
      const container = document.createElement("div")
      const input = document.createElement("input")
      container.appendChild(input)
      document.body.appendChild(container)

      expect(getFocusableElements(container)).toStrictEqual([input])

      document.body.removeChild(container)
    })

    test("should not return elements with display none", () => {
      const container = document.createElement("div")
      const input = document.createElement("input")
      input.style.display = "none"
      container.appendChild(input)
      document.body.appendChild(container)

      expect(getFocusableElements(container)).toStrictEqual([])

      document.body.removeChild(container)
    })

    test("should return visible focusable elements", () => {
      const container = document.createElement("div")
      const input = document.createElement("input")
      container.appendChild(input)
      document.body.appendChild(container)

      expect(getFocusableElements(container)).toStrictEqual([input])

      document.body.removeChild(container)
    })

    test("should include el when includeEl is true and el is focusable", () => {
      const container = document.createElement("div")
      container.setAttribute("tabindex", "0")
      document.body.appendChild(container)

      expect(getFocusableElements(container, true)).toContain(container)

      document.body.removeChild(container)
    })
  })

  describe("getActiveElement", () => {
    test("should return the active element", () => {
      const input = document.createElement("input")
      document.body.appendChild(input)
      input.focus()
      expect(getActiveElement(document)).toBe(input)
      document.body.removeChild(input)
    })
  })

  describe("isActiveElement", () => {
    test("should return true if the element is the active element", () => {
      const input = document.createElement("input")
      document.body.appendChild(input)
      input.focus()
      expect(isActiveElement(input, document)).toBeTruthy()
      document.body.removeChild(input)
    })

    test("should return false if the element is not the active element", () => {
      const input = document.createElement("input")
      const input2 = document.createElement("input")
      document.body.appendChild(input)
      document.body.appendChild(input2)
      input.focus()
      expect(isActiveElement(input2, document)).toBeFalsy()
      document.body.removeChild(input)
      document.body.removeChild(input2)
    })
  })

  describe("getPx", () => {
    test("should compute rem values using actual font size", () => {
      expect(getPx("1rem")).toBeGreaterThan(0)
    })

    test("should use computed font size for rem conversion", () => {
      vi.spyOn(window, "getComputedStyle").mockReturnValue({
        fontSize: "20px",
      } as CSSStyleDeclaration)
      expect(getPx("2rem")).toBe(40)
      vi.restoreAllMocks()
    })

    test("should use default font size when computed font size is NaN", () => {
      vi.spyOn(window, "getComputedStyle").mockReturnValue({
        fontSize: "",
      } as CSSStyleDeclaration)
      expect(getPx("2rem")).toBe(32)
      vi.restoreAllMocks()
    })
  })

  describe("scrollLock", () => {
    afterEach(() => {
      document.body.removeAttribute("data-scroll-lock")
      document.body.style.cssText = ""
      document.documentElement.style.cssText = ""
    })

    test("should lock and unlock scrolling", () => {
      const unlock = scrollLock(document)
      expect(document.body.hasAttribute("data-scroll-lock")).toBeTruthy()
      unlock?.()
      expect(document.body.hasAttribute("data-scroll-lock")).toBeFalsy()
    })

    test("should not lock again if already locked", () => {
      const unlock1 = scrollLock(document)
      const unlock2 = scrollLock(document)
      expect(unlock2).toBeUndefined()
      unlock1?.()
    })

    test("should work with element input", () => {
      const el = document.createElement("div")
      document.body.appendChild(el)
      const unlock = scrollLock(el)
      expect(document.body.hasAttribute("data-scroll-lock")).toBeTruthy()
      unlock?.()
      expect(document.body.hasAttribute("data-scroll-lock")).toBeFalsy()
      document.body.removeChild(el)
    })

    test("should use paddingLeft when scrollbarX is non-zero", () => {
      vi.spyOn(
        document.documentElement,
        "getBoundingClientRect",
      ).mockReturnValue({
        bottom: 0,
        height: 0,
        left: 10,
        right: 0,
        toJSON() {
          return void 0
        },
        top: 0,
        width: 0,
        x: 10,
        y: 0,
      })

      const unlock = scrollLock(document)
      expect(document.body.hasAttribute("data-scroll-lock")).toBeTruthy()
      unlock?.()
      expect(document.body.hasAttribute("data-scroll-lock")).toBeFalsy()

      vi.restoreAllMocks()
    })
  })
})
