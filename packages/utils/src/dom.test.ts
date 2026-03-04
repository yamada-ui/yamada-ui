import {
  ariaAttr,
  contains,
  createdDom,
  dataAttr,
  getActiveElement,
  getDocument,
  getDocumentElement,
  getFirstFocusableElement,
  getFirstTabbableElement,
  getLastTabbableElement,
  getNextTabbableElement,
  getNodeName,
  getParentNode,
  getPlatform,
  getPx,
  getTabbableElementEdges,
  getTabbableElements,
  getTabIndex,
  getUserAgent,
  getWindow,
  isActiveElement,
  isApple,
  isDisabledElement,
  isDocument,
  isEditableElement,
  isFocusableElement,
  isFrame,
  isHiddenElement,
  isHTMLElement,
  isInputElement,
  isMac,
  isNode,
  isSafari,
  isTabbableElement,
  isTruthyDataAttr,
  isVisibleElement,
  isWindow,
  platform,
  setAttribute,
  setStyle,
  userAgent,
  uuid,
  vendor,
} from "./dom"

describe("DOM", () => {
  describe("createdDom", () => {
    test("should return true if DOM is created", () => {
      expect(createdDom()).toBeTruthy()
    })
  })

  describe("getPlatform", () => {
    test("should return the platform of the user agent", () => {
      expect(getPlatform()).toBe(navigator.platform)
    })
  })

  describe("vendor", () => {
    test("should return true if the vendor matches", () => {
      expect(vendor(/apple/i)).toBe(
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

      const isSafariBrowser = /apple/i.test(navigator.vendor)
      expect(isSafari()).toBe(isAppleDevice && isSafariBrowser)
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

  describe("isHiddenElement", () => {
    test("should return true if the element or its parent is hidden", () => {
      const parent = document.createElement("div")
      const child = document.createElement("div")
      parent.hidden = true
      parent.appendChild(child)
      expect(isHiddenElement(child)).toBeTruthy()
    })

    test("should return false if the element and its parents are not hidden", () => {
      const el = document.createElement("div")
      expect(isHiddenElement(el)).toBeFalsy()
    })
  })

  describe("isDisabledElement", () => {
    test("should return true if the element is disabled", () => {
      const el = document.createElement("button")
      el.setAttribute("disabled", true as any)
      expect(isDisabledElement(el)).toBeTruthy()
    })

    test("should return true if the element is data-disabled", () => {
      const el = document.createElement("button")
      el.setAttribute("data-disabled", "true")
      expect(isDisabledElement(el)).toBeTruthy()
    })

    test("should return true if the element is aria-disabled", () => {
      const el = document.createElement("button")
      el.setAttribute("aria-disabled", "true")
      expect(isDisabledElement(el)).toBeTruthy()
    })
  })

  describe("isEditableElement", () => {
    test("should return true if the element is contenteditable", () => {
      const el = document.createElement("div")
      el.setAttribute("contenteditable", "true")
      expect(isEditableElement(el)).toBeTruthy()
    })
  })

  describe("contains", () => {
    test("should return true if the parent contains the child", () => {
      const parent = document.createElement("div")
      const child = document.createElement("div")
      parent.appendChild(child)
      expect(contains(parent, child)).toBeTruthy()
    })

    test("should return false if the parent does not contain the child", () => {
      const parent = document.createElement("div")
      const child = document.createElement("div")
      expect(contains(parent, child)).toBeFalsy()
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

  describe("getWindow", () => {
    test("should return the window object", () => {
      const el = document.createElement("div")
      expect(getWindow(el)).toBe(window)
    })
  })

  describe("getDocument", () => {
    test("should return the document object", () => {
      const el = document.createElement("div")
      expect(getDocument(el)).toBe(document)
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

  describe("getUserAgent", () => {
    test("should return the user agent string", () => {
      expect(getUserAgent()).toBe(navigator.userAgent)
    })
  })

  describe("userAgent", () => {
    test("should test against user agent string", () => {
      expect(userAgent(/mozilla/i)).toBe(/mozilla/i.test(getUserAgent()))
    })
  })

  describe("isWindow", () => {
    test("should return true for window", () => {
      expect(isWindow(window)).toBeTruthy()
    })

    test("should return false for non-window", () => {
      expect(isWindow({})).toBeFalsy()
      expect(isWindow(document)).toBeFalsy()
    })
  })

  describe("isDocument", () => {
    test("should return true for document", () => {
      expect(isDocument(document)).toBeTruthy()
    })

    test("should return false for non-document", () => {
      expect(isDocument(window)).toBeFalsy()
    })
  })

  describe("isNode", () => {
    test("should return true for nodes", () => {
      expect(isNode(document.createElement("div"))).toBeTruthy()
      expect(isNode(document.createTextNode("text"))).toBeTruthy()
    })

    test("should return false for non-nodes", () => {
      expect(isNode({})).toBeFalsy()
    })
  })

  describe("isFrame", () => {
    test("should return true for iframe elements", () => {
      const iframe = document.createElement("iframe")
      expect(isFrame(iframe)).toBeTruthy()
    })

    test("should return false for non-iframe elements", () => {
      const div = document.createElement("div")
      expect(isFrame(div)).toBeFalsy()
    })
  })

  describe("isInputElement", () => {
    test("should return true for input elements", () => {
      const input = document.createElement("input")
      expect(isInputElement(input)).toBeTruthy()
    })

    test("should return false for non-input elements", () => {
      const div = document.createElement("div")
      expect(isInputElement(div)).toBeFalsy()
    })
  })

  describe("isVisibleElement", () => {
    test("should return false for non-HTMLElement", () => {
      expect(isVisibleElement(document.createTextNode(""))).toBeFalsy()
    })
  })

  describe("isEditableElement extended", () => {
    test("should return true for textarea", () => {
      const el = document.createElement("textarea")
      expect(isEditableElement(el)).toBeTruthy()
    })

    test("should return true for select", () => {
      const el = document.createElement("select")
      expect(isEditableElement(el)).toBeTruthy()
    })

    test("should return true for contenteditable empty string", () => {
      const el = document.createElement("div")
      el.setAttribute("contenteditable", "")
      expect(isEditableElement(el)).toBeTruthy()
    })

    test("should return false for null", () => {
      expect(isEditableElement(null)).toBeFalsy()
    })
  })

  describe("isFocusableElement", () => {
    test("should return false for null", () => {
      expect(isFocusableElement(null)).toBeFalsy()
    })

    test("should return false for element with inert ancestor", () => {
      const parent = document.createElement("div")
      parent.setAttribute("inert", "")
      const input = document.createElement("input")
      parent.appendChild(input)
      document.body.appendChild(parent)
      expect(isFocusableElement(input)).toBeFalsy()
      document.body.removeChild(parent)
    })
  })

  describe("isTabbableElement", () => {
    test("should return true for element with positive tabIndex", () => {
      const el = document.createElement("div")
      el.tabIndex = 1
      expect(isTabbableElement(el)).toBeTruthy()
    })

    test("should return false for null", () => {
      expect(isTabbableElement(null)).toBeFalsy()
    })
  })

  describe("contains extended", () => {
    test("should return true for same element", () => {
      const el = document.createElement("div")
      expect(contains(el, el)).toBeTruthy()
    })

    test("should return false for null parent", () => {
      expect(contains(null, document.createElement("div"))).toBeFalsy()
    })

    test("should return false for null child", () => {
      expect(contains(document.createElement("div"), null)).toBeFalsy()
    })
  })

  describe("getPx extended", () => {
    test("should return number values as-is", () => {
      expect(getPx(42)).toBe(42)
    })

    test("should convert rem-like values using font size", () => {
      expect(getPx("2rem")).toBeGreaterThan(0)
    })
  })

  describe("getTabIndex", () => {
    test("should return tabIndex for normal elements", () => {
      const div = document.createElement("div")
      expect(getTabIndex(div)).toBe(-1)
    })

    test("should return element tabIndex value", () => {
      const button = document.createElement("button")
      expect(getTabIndex(button)).toBe(0)
    })
  })

  describe("isTruthyDataAttr", () => {
    test("should return true for truthy values", () => {
      expect(isTruthyDataAttr("true")).toBeTruthy()
      expect(isTruthyDataAttr(true)).toBeTruthy()
      expect(isTruthyDataAttr("")).toBeTruthy()
    })

    test("should return false for falsy values", () => {
      expect(isTruthyDataAttr("false")).toBeFalsy()
      expect(isTruthyDataAttr(false)).toBeFalsy()
    })
  })

  describe("ariaAttr extended", () => {
    test("should return string values for string inputs", () => {
      expect(ariaAttr("true")).toBe("true")
      expect(ariaAttr("false")).toBe("false")
    })

    test("should return undefined for 0", () => {
      expect(ariaAttr(0)).toBeUndefined()
    })
  })

  describe("getWindow extended", () => {
    test("should return window for document", () => {
      expect(getWindow(document)).toBe(window)
    })

    test("should return window for null", () => {
      expect(getWindow(null)).toBe(window)
    })
  })

  describe("getDocument extended", () => {
    test("should return document for document input", () => {
      expect(getDocument(document)).toBe(document)
    })

    test("should return document for window input", () => {
      expect(getDocument(window)).toBe(document)
    })

    test("should return document for null input", () => {
      expect(getDocument(null)).toBe(document)
    })
  })

  describe("getDocumentElement", () => {
    test("should return the document element", () => {
      expect(getDocumentElement(document)).toBe(document.documentElement)
    })
  })

  describe("getNodeName", () => {
    test("should return local name for HTML elements", () => {
      const div = document.createElement("div")
      expect(getNodeName(div)).toBe("div")
    })

    test("should return #document for non-HTML nodes", () => {
      expect(getNodeName(window)).toBe("#document")
    })
  })

  describe("getTabbableElements", () => {
    test("should return empty array for null", () => {
      expect(getTabbableElements(null)).toStrictEqual([])
    })
  })

  describe("getFirstTabbableElement", () => {
    test("should return null for null input", () => {
      expect(getFirstTabbableElement(null)).toBeNull()
    })
  })

  describe("getNextTabbableElement", () => {
    test("should return null for null input", () => {
      expect(getNextTabbableElement(null)).toBeNull()
    })
  })

  describe("getLastTabbableElement", () => {
    test("should return null for null input", () => {
      expect(getLastTabbableElement(null)).toBeNull()
    })
  })

  describe("getTabbableElementEdges", () => {
    test("should return [null, null] for null input", () => {
      expect(getTabbableElementEdges(null)).toStrictEqual([null, null])
    })
  })

  describe("getParentNode", () => {
    test("should return parent node", () => {
      const parent = document.createElement("div")
      const child = document.createElement("span")
      parent.appendChild(child)
      expect(getParentNode(child)).toBe(parent)
    })

    test("should return node itself for html element", () => {
      expect(getParentNode(document.documentElement)).toBe(
        document.documentElement,
      )
    })
  })

  describe("getFirstFocusableElement", () => {
    test("should return null for null input", () => {
      expect(getFirstFocusableElement(null)).toBeNull()
    })
  })

  describe("setAttribute", () => {
    test("should set and restore attribute", () => {
      const el = document.createElement("div")
      const restore = setAttribute(el, "class", "test")
      expect(el.getAttribute("class")).toBe("test")

      restore()
      expect(el.getAttribute("class")).toBeNull()
    })

    test("should concatenate with existing attribute", () => {
      const el = document.createElement("div")
      el.setAttribute("class", "existing")
      const restore = setAttribute(el, "class", "new")
      expect(el.getAttribute("class")).toBe("existing new")

      restore()
      expect(el.getAttribute("class")).toBe("existing")
    })
  })

  describe("setStyle", () => {
    test("should return noop for null element", () => {
      const restore = setStyle(null, { color: "red" })
      expect(restore).toBeTypeOf("function")
      restore()
    })

    test("should set and restore styles", () => {
      const el = document.createElement("div")
      const restore = setStyle(el, { color: "red" })
      expect(el.style.color).toBe("red")

      restore()
      expect(el.style.color).toBe("")
    })
  })

  describe("uuid", () => {
    test("should create a unique id with prefix", () => {
      const id1 = uuid()
      const id2 = uuid()
      expect(id1).not.toBe(id2)
    })

    test("should match UUID v4 format", () => {
      const id = uuid()
      expect(id).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      )
    })
  })
})
