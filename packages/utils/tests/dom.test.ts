import {
  ariaAttr,
  createdDom,
  dataAttr,
  getActiveElement,
  getEventRelatedTarget,
  getOwnerDocument,
  getOwnerWindow,
  getPlatform,
  getPx,
  hasNegativeTabIndex,
  hasTabIndex,
  isActiveElement,
  isApple,
  isContains,
  isContentEditable,
  isDisabled,
  isElement,
  isFocusable,
  isHidden,
  isHTMLElement,
  isMac,
  isSafari,
  isTabbable,
  platform,
  vendor,
} from "../src"

describe("DOM", () => {
  describe("createdDom", () => {
    test("should return true if DOM is created", () => {
      expect(createdDom()).toBeTruthy()
    })
  })

  describe("getPlatform", () => {
    test("should return the platform of the user agent", () => {
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      expect(getPlatform()).toBe(navigator.platform)
    })
  })

  describe("vendor", () => {
    test("should return true if the vendor matches", () => {
      expect(vendor(/apple/i)).toBe(
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        navigator.vendor.toLowerCase().includes("apple"),
      )
    })
  })

  describe("platform", () => {
    test("should return true if the platform matches", () => {
      expect(platform(/^mac/i)).toBe(
        getPlatform().toLowerCase().startsWith("mac"),
      )
    })
  })

  describe("isMac", () => {
    test("should return true if the platform is Mac", () => {
      expect(isMac()).toBe(getPlatform().toLowerCase().startsWith("mac"))
    })
  })

  describe("isApple", () => {
    test("should return true if the platform is an Apple device", () => {
      const regex = /mac|iphone|ipad|ipod/i
      expect(isApple()).toBe(regex.test(getPlatform()))
    })
  })

  describe("isSafari", () => {
    test("should return true if the browser is Safari on an Apple device", () => {
      const isAppleDevice = /mac|iphone|ipad|ipod/i.test(getPlatform())
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      const isSafariBrowser = /apple/i.test(navigator.vendor)
      expect(isSafari()).toBe(isAppleDevice && isSafariBrowser)
    })
  })

  describe("isElement", () => {
    test("should return true if the object is a DOM element", () => {
      const el = document.createElement("div")
      expect(isElement(el)).toBeTruthy()
    })

    test("should return false for non-element objects", () => {
      expect(isElement({})).toBeFalsy()
    })
  })

  describe("isHTMLElement", () => {
    test("should return true for HTMLElements", () => {
      const el = document.createElement("div")
      expect(isHTMLElement(el)).toBeTruthy()
    })

    test("should return false for non-HTMLElements", () => {
      const el = document.createTextNode("")
      expect(isHTMLElement(el)).toBeFalsy()
    })
  })

  describe("isHidden", () => {
    test("should return true if the element or its parent is hidden", () => {
      const parent = document.createElement("div")
      const child = document.createElement("div")
      parent.hidden = true
      parent.appendChild(child)
      expect(isHidden(child)).toBeTruthy()
    })

    test("should return false if the element and its parents are not hidden", () => {
      const el = document.createElement("div")
      expect(isHidden(el)).toBeFalsy()
    })
  })

  describe("disabled", () => {
    test("should return true if the element is disabled", () => {
      const el = document.createElement("button")
      el.setAttribute("disabled", true as any)
      expect(isDisabled(el)).toBeTruthy()
    })

    test("should return true if the element is data-disabled", () => {
      const el = document.createElement("button")
      el.setAttribute("data-disabled", "true")
      expect(isDisabled(el)).toBeTruthy()
    })

    test("should return true if the element is aria-disabled", () => {
      const el = document.createElement("button")
      el.setAttribute("aria-disabled", "true")
      expect(isDisabled(el)).toBeTruthy()
    })
  })

  describe("hasTabIndex", () => {
    test("should return true if the element has a tabindex", () => {
      const el = document.createElement("div")
      el.setAttribute("tabindex", "0")
      expect(hasTabIndex(el)).toBeTruthy()
    })
  })

  describe("isContentEditable", () => {
    test("should return true if the element is contenteditable", () => {
      const el = document.createElement("div")
      el.setAttribute("contenteditable", "true")
      expect(isContentEditable(el)).toBeTruthy()
    })
  })

  describe("isContains", () => {
    test("should return true if the parent contains the child", () => {
      const parent = document.createElement("div")
      const child = document.createElement("div")
      parent.appendChild(child)
      expect(isContains(parent, child)).toBeTruthy()
    })

    test("should return false if the parent does not contain the child", () => {
      const parent = document.createElement("div")
      const child = document.createElement("div")
      expect(isContains(parent, child)).toBeFalsy()
    })
  })

  describe("getPx", () => {
    test("should convert string values to pixels", () => {
      expect(getPx("16px")).toBe(16)
    })

    test("should return 0 for undefined values", () => {
      expect(getPx(undefined)).toBe(0)
    })
  })

  describe("getEventRelatedTarget", () => {
    test("should return the related target of an event", () => {
      const element = document.createElement("div")
      const ev = new FocusEvent("focus", {
        relatedTarget: element,
      }) as unknown as React.FocusEvent

      expect(getEventRelatedTarget(ev)).toBe(element)
    })
  })

  describe("dataAttr", () => {
    test("should return empty string for true conditions", () => {
      expect(dataAttr(true)).toBe("")
    })

    test("should return undefined for false conditions", () => {
      expect(dataAttr(false)).toBeUndefined()
    })
  })

  describe("ariaAttr", () => {
    test("should return true for true conditions", () => {
      expect(ariaAttr(true)).toBeTruthy()
    })

    test("should return undefined for false conditions", () => {
      expect(ariaAttr(false)).toBeUndefined()
    })
  })

  describe("isFocusable", () => {
    test("should return false for non-HTMLElements", () => {
      const el = document.createTextNode("")
      expect(isFocusable(el as unknown as HTMLElement)).toBeFalsy()
    })

    test("should return true for input elements", () => {
      const el = document.createElement("input")
      expect(isFocusable(el)).toBeTruthy()
    })

    test("should return false for hidden elements", () => {
      const el = document.createElement("input")
      el.hidden = true
      expect(isFocusable(el)).toBeFalsy()
    })

    test("should return false for disabled elements", () => {
      const el = document.createElement("button")
      el.setAttribute("disabled", true as any)
      expect(isFocusable(el)).toBeFalsy()
    })

    test("should return true for elements with href attribute", () => {
      const el = document.createElement("a")
      el.setAttribute("href", "#")
      expect(isFocusable(el)).toBeTruthy()
    })

    test("should return true for elements with controls attribute", () => {
      const el = document.createElement("video")
      el.setAttribute("controls", "true")
      expect(isFocusable(el)).toBeTruthy()
    })

    test("should return true for contenteditable elements", () => {
      const el = document.createElement("div")
      el.setAttribute("contenteditable", "true")
      expect(isFocusable(el)).toBeTruthy()
    })

    test("should return true for elements with tabindex", () => {
      const el = document.createElement("div")
      el.setAttribute("tabindex", "0")
      expect(isFocusable(el)).toBeTruthy()
    })

    test("should return false for elements without tabindex or specific attributes", () => {
      const el = document.createElement("div")
      expect(isFocusable(el)).toBeFalsy()
    })
  })

  describe("hasNegativeTabIndex", () => {
    test("should return true if the element has a negative tabindex", () => {
      const el = document.createElement("div")
      el.setAttribute("tabindex", "-1")
      expect(hasNegativeTabIndex(el)).toBeTruthy()
    })

    test("should return false if the element does not have a negative tabindex", () => {
      const el = document.createElement("div")
      el.setAttribute("tabindex", "0")
      expect(hasNegativeTabIndex(el)).toBeFalsy()
    })
  })

  describe("isTabbable", () => {
    test("should return true if the element is tabbable", () => {
      const el = document.createElement("button")
      document.body.appendChild(el)
      expect(isTabbable(el)).toBeTruthy()
      document.body.removeChild(el)
    })

    test("should return false if the element is not tabbable", () => {
      const el = document.createElement("div")
      el.setAttribute("tabindex", "-1")
      document.body.appendChild(el)
      expect(isTabbable(el)).toBeFalsy()
      document.body.removeChild(el)
    })
  })

  describe("getOwnerWindow", () => {
    test("should return the window object", () => {
      const el = document.createElement("div")
      expect(getOwnerWindow(el)).toBe(window)
    })
  })

  describe("getOwnerDocument", () => {
    test("should return the document object", () => {
      const el = document.createElement("div")
      expect(getOwnerDocument(el)).toBe(document)
    })
  })

  describe("getActiveElement", () => {
    test("should return the active element", () => {
      const input = document.createElement("input")
      document.body.appendChild(input)
      input.focus()
      expect(getActiveElement()).toBe(input)
      document.body.removeChild(input)
    })
  })

  describe("isActiveElement", () => {
    test("should return true if the element is the active element", () => {
      const input = document.createElement("input")
      document.body.appendChild(input)
      input.focus()
      expect(isActiveElement(input)).toBeTruthy()
      document.body.removeChild(input)
    })

    test("should return false if the element is not the active element", () => {
      const input = document.createElement("input")
      const input2 = document.createElement("input")
      document.body.appendChild(input)
      document.body.appendChild(input2)
      input.focus()
      expect(isActiveElement(input2)).toBeFalsy()
      document.body.removeChild(input)
      document.body.removeChild(input2)
    })
  })
})
