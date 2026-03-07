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
  getFocusableElements,
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
  isAndroid,
  isApple,
  isChrome,
  isDisabledElement,
  isDocument,
  isEditableElement,
  isFirefox,
  isFocusableElement,
  isFrame,
  isHiddenElement,
  isHTMLElement,
  isInputElement,
  isIos,
  isIPad,
  isIPhone,
  isMac,
  isNode,
  isSafari,
  isShadowRoot,
  isTabbableElement,
  isTouchDevice,
  isTruthyDataAttr,
  isVisibleElement,
  isVisualViewport,
  isWebKit,
  isWindow,
  platform,
  scrollLock,
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

    test("should return false when document.createElement is unavailable", () => {
      const origCreateElement = document.createElement
      Object.defineProperty(document, "createElement", {
        configurable: true,
        value: undefined,
        writable: true,
      })

      expect(createdDom()).toBeFalsy()

      Object.defineProperty(document, "createElement", {
        configurable: true,
        value: origCreateElement,
        writable: true,
      })
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

    test("should return fallback when DOM is not created", () => {
      const origCreateElement = document.createElement
      Object.defineProperty(document, "createElement", {
        configurable: true,
        value: undefined,
        writable: true,
      })

      expect(vendor(/apple/i, true)).toBeTruthy()
      expect(vendor(/apple/i, false)).toBeFalsy()

      Object.defineProperty(document, "createElement", {
        configurable: true,
        value: origCreateElement,
        writable: true,
      })
    })
  })

  describe("platform", () => {
    test("should return true if the platform matches", () => {
      expect(platform(/^mac/i)).toBe(
        getPlatform().toLowerCase().startsWith("mac"),
      )
    })

    test("should return fallback when DOM is not created", () => {
      const origCreateElement = document.createElement
      Object.defineProperty(document, "createElement", {
        configurable: true,
        value: undefined,
        writable: true,
      })

      expect(platform(/^mac/i, true)).toBeTruthy()
      expect(platform(/^mac/i, false)).toBeFalsy()

      Object.defineProperty(document, "createElement", {
        configurable: true,
        value: origCreateElement,
        writable: true,
      })
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

    test("should return true when platform is Mac", () => {
      Object.defineProperty(navigator, "platform", {
        configurable: true,
        value: "MacIntel",
      })

      expect(isApple()).toBeTruthy()

      delete (navigator as any).platform
    })
  })

  describe("isSafari", () => {
    test("should return true if the browser is Safari on an Apple device", () => {
      const isAppleDevice = /mac|iphone|ipad|ipod/i.test(getPlatform())

      const isSafariBrowser = /apple/i.test(navigator.vendor)
      expect(isSafari()).toBe(isAppleDevice && isSafariBrowser)
    })

    test("should evaluate vendor when on Apple platform", () => {
      Object.defineProperty(navigator, "platform", {
        configurable: true,
        value: "MacIntel",
      })

      const result = isSafari()
      expect(result).toBe(/apple/i.test(navigator.vendor))

      delete (navigator as any).platform
    })

    test("should return true when Apple platform and Apple vendor", () => {
      Object.defineProperty(navigator, "platform", {
        configurable: true,
        value: "MacIntel",
      })
      Object.defineProperty(navigator, "vendor", {
        configurable: true,
        value: "Apple Computer, Inc.",
      })

      expect(isSafari()).toBeTruthy()

      delete (navigator as any).platform
      delete (navigator as any).vendor
    })
  })

  describe("isIPhone", () => {
    test("should return false in non-iPhone environment", () => {
      expect(isIPhone()).toBeFalsy()
    })

    test("should return true when platform is iPhone", () => {
      Object.defineProperty(navigator, "platform", {
        configurable: true,
        value: "iPhone",
      })

      expect(isIPhone()).toBeTruthy()

      delete (navigator as any).platform
    })
  })

  describe("isIPad", () => {
    test("should return false in non-iPad environment", () => {
      expect(isIPad()).toBeFalsy()
    })

    test("should return true when platform is iPad", () => {
      Object.defineProperty(navigator, "platform", {
        configurable: true,
        value: "iPad",
      })

      expect(isIPad()).toBeTruthy()

      delete (navigator as any).platform
    })

    test("should return true when Mac with touch points > 1", () => {
      Object.defineProperty(navigator, "platform", {
        configurable: true,
        value: "MacIntel",
      })
      Object.defineProperty(navigator, "maxTouchPoints", {
        configurable: true,
        value: 5,
      })

      expect(isIPad()).toBeTruthy()

      delete (navigator as any).platform
      delete (navigator as any).maxTouchPoints
    })
  })

  describe("isIos", () => {
    test("should return false in non-iOS environment", () => {
      expect(isIos()).toBeFalsy()
    })
  })

  describe("isAndroid", () => {
    test("should return false in non-Android environment", () => {
      expect(isAndroid()).toBeFalsy()
    })
  })

  describe("isFirefox", () => {
    test("should return expected value", () => {
      expect(isFirefox()).toBe(/Firefox/i.test(getUserAgent()))
    })
  })

  describe("isChrome", () => {
    test("should return expected value", () => {
      expect(isChrome()).toBe(/Chrome/i.test(getUserAgent()))
    })
  })

  describe("isWebKit", () => {
    test("should return expected value", () => {
      expect(isWebKit()).toBe(
        /AppleWebKit/i.test(getUserAgent()) && !/Chrome/i.test(getUserAgent()),
      )
    })
  })

  describe("isVisualViewport", () => {
    test("should return true for VisualViewport-like objects", () => {
      class VisualViewport {
        offsetLeft = 0
        offsetTop = 0
      }
      expect(isVisualViewport(new VisualViewport())).toBeTruthy()
    })

    test("should return false for non-VisualViewport", () => {
      expect(isVisualViewport({})).toBeFalsy()
      expect(isVisualViewport(null)).toBeFalsy()
    })
  })

  describe("isShadowRoot", () => {
    test("should return true for shadow root", () => {
      const host = document.createElement("div")
      document.body.appendChild(host)
      const shadow = host.attachShadow({ mode: "open" })

      expect(isShadowRoot(shadow)).toBeTruthy()

      document.body.removeChild(host)
    })

    test("should return false for non-shadow-root", () => {
      expect(isShadowRoot(document.createElement("div"))).toBeFalsy()
    })
  })

  describe("isTouchDevice", () => {
    test("should check for touch support", () => {
      expect(isTouchDevice()).toBe("ontouchstart" in window)
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

    test("should traverse shadow root to find active element", () => {
      const mockInput = document.createElement("input")
      const mockShadowRoot = { activeElement: mockInput }
      const mockHost = document.createElement("div") as any
      Object.defineProperty(mockHost, "shadowRoot", {
        value: mockShadowRoot,
      })

      const mockRoot = { activeElement: mockHost } as any
      const result = getActiveElement(mockRoot)
      expect(result).toBe(mockInput)
    })

    test("should break when shadowRoot activeElement equals current element", () => {
      const mockHost = document.createElement("div") as any
      Object.defineProperty(mockHost, "shadowRoot", {
        value: { activeElement: mockHost },
      })

      const mockRoot = { activeElement: mockHost } as any
      const result = getActiveElement(mockRoot)
      expect(result).toBe(mockHost)
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

    test("should return brands-based user agent string when available", () => {
      Object.defineProperty(navigator, "userAgentData", {
        configurable: true,
        value: {
          brands: [
            { brand: "Chromium", version: "91" },
            { brand: "Google Chrome", version: "91" },
          ],
        },
      })

      expect(getUserAgent()).toBe("Chromium/91 Google Chrome/91")

      delete (navigator as any).userAgentData
    })
  })

  describe("userAgent", () => {
    test("should test against user agent string", () => {
      expect(userAgent(/mozilla/i)).toBe(/mozilla/i.test(getUserAgent()))
    })

    test("should return fallback when DOM is not created", () => {
      const origCreateElement = document.createElement
      Object.defineProperty(document, "createElement", {
        configurable: true,
        value: undefined,
        writable: true,
      })

      expect(userAgent(/mozilla/i, true)).toBeTruthy()
      expect(userAgent(/mozilla/i, false)).toBeFalsy()

      Object.defineProperty(document, "createElement", {
        configurable: true,
        value: origCreateElement,
        writable: true,
      })
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

    test("should check visibility for HTMLElements", () => {
      const el = document.createElement("div")
      document.body.appendChild(el)
      expect(isVisibleElement(el)).toBeFalsy()
      document.body.removeChild(el)
    })

    test("should return true for elements with dimensions", () => {
      const el = document.createElement("div")
      Object.defineProperty(el, "offsetWidth", { value: 100 })
      expect(isVisibleElement(el)).toBeTruthy()
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

    test("should return true for text input element", () => {
      const input = document.createElement("input")
      input.type = "text"
      expect(isEditableElement(input)).toBeTruthy()
    })

    test("should return false when accessing properties throws", () => {
      const el = document.createElement("input")
      Object.defineProperty(el, "selectionStart", {
        get() {
          throw new DOMException("not supported")
        },
      })
      expect(isEditableElement(el)).toBeFalsy()
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

    test("should return true for visible focusable element", () => {
      const input = document.createElement("input")
      Object.defineProperty(input, "offsetWidth", { value: 100 })
      document.body.appendChild(input)
      expect(isFocusableElement(input)).toBeTruthy()
      document.body.removeChild(input)
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

    test("should return true for visible focusable element without negative tabindex", () => {
      const input = document.createElement("input")
      Object.defineProperty(input, "offsetWidth", { value: 100 })
      document.body.appendChild(input)
      expect(isTabbableElement(input)).toBeTruthy()
      document.body.removeChild(input)
    })

    test("should return false for focusable element with negative tabindex", () => {
      const input = document.createElement("input")
      input.setAttribute("tabindex", "-1")
      Object.defineProperty(input, "offsetWidth", { value: 100 })
      document.body.appendChild(input)
      expect(isTabbableElement(input)).toBeFalsy()
      document.body.removeChild(input)
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

    test("should return false for non-HTMLElement parent", () => {
      expect(
        contains(document.createTextNode(""), document.createElement("div")),
      ).toBeFalsy()
    })

    test("should return true for elements in shadow DOM", () => {
      const host = document.createElement("div")
      document.body.appendChild(host)
      const shadow = host.attachShadow({ mode: "open" })
      const child = document.createElement("span")
      shadow.appendChild(child)

      expect(contains(host, child)).toBeTruthy()

      document.body.removeChild(host)
    })

    test("should return false for unrelated element in shadow DOM", () => {
      const host = document.createElement("div")
      document.body.appendChild(host)
      const shadow = host.attachShadow({ mode: "open" })
      const child = document.createElement("span")
      shadow.appendChild(child)

      const unrelated = document.createElement("div")
      document.body.appendChild(unrelated)

      expect(contains(unrelated, child)).toBeFalsy()

      document.body.removeChild(host)
      document.body.removeChild(unrelated)
    })
  })

  describe("getPx extended", () => {
    test("should return number values as-is", () => {
      expect(getPx(42)).toBe(42)
    })

    test("should convert rem-like values using font size", () => {
      expect(getPx("2rem")).toBeGreaterThan(0)
    })

    test("should use computed font size for rem conversion", () => {
      const original = window.getComputedStyle
      Object.defineProperty(window, "getComputedStyle", {
        configurable: true,
        value: () => ({ fontSize: "20px" }),
        writable: true,
      })
      expect(getPx("2rem")).toBe(40)
      Object.defineProperty(window, "getComputedStyle", {
        configurable: true,
        value: original,
        writable: true,
      })
    })

    test("should use default font size when computed font size is NaN", () => {
      const original = window.getComputedStyle
      Object.defineProperty(window, "getComputedStyle", {
        configurable: true,
        value: () => ({ fontSize: "" }),
        writable: true,
      })
      expect(getPx("2rem")).toBe(32)
      Object.defineProperty(window, "getComputedStyle", {
        configurable: true,
        value: original,
        writable: true,
      })
    })

    test("should use default font size when DOM is not created", () => {
      const origCreateElement = document.createElement
      Object.defineProperty(document, "createElement", {
        configurable: true,
        value: undefined,
        writable: true,
      })

      expect(getPx("2rem")).toBe(32)

      Object.defineProperty(document, "createElement", {
        configurable: true,
        value: origCreateElement,
        writable: true,
      })
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

    test("should check hasTabIndex for audio element", () => {
      const audio = document.createElement("audio")
      expect(getTabIndex(audio)).toBeDefined()
    })

    test("should return 0 for audio with non-numeric tabindex", () => {
      const audio = document.createElement("audio")
      audio.setAttribute("tabindex", "abc")
      expect(getTabIndex(audio)).toBe(0)
    })

    test("should return 0 for element with negative tabIndex and invalid tabindex attribute", () => {
      const audio = document.createElement("audio")
      audio.setAttribute("tabindex", "invalid")
      Object.defineProperty(audio, "tabIndex", {
        configurable: true,
        value: -1,
      })
      expect(getTabIndex(audio)).toBe(0)
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

    test("should return window for shadow root", () => {
      const host = document.createElement("div")
      document.body.appendChild(host)
      const shadow = host.attachShadow({ mode: "open" })
      expect(getWindow(shadow)).toBe(window)
      document.body.removeChild(host)
    })

    test("should return window when defaultView is null", () => {
      const el = document.createElement("div")
      Object.defineProperty(el, "ownerDocument", {
        configurable: true,
        value: { defaultView: null },
      })
      expect(getWindow(el)).toBe(window)
    })

    test("should return window when document defaultView is null", () => {
      const fakeDoc = {
        defaultView: null,
        nodeType: Node.DOCUMENT_NODE,
      }
      expect(getWindow(fakeDoc as any)).toBe(window)
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

    test("should return empty string for element with no localName", () => {
      const el = document.createElement("div")
      Object.defineProperty(el, "localName", {
        configurable: true,
        value: "",
      })
      expect(getNodeName(el)).toBe("")
    })
  })

  describe("getTabbableElements", () => {
    test("should return empty array for null", () => {
      expect(getTabbableElements(null)).toStrictEqual([])
    })

    test("should return tabbable elements from container", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)
      document.body.appendChild(container)

      const result = getTabbableElements(container)
      expect(result).toStrictEqual([btn1, btn2])

      document.body.removeChild(container)
    })

    test("should include el when includeEl is true and el is tabbable", () => {
      const container = document.createElement("div")
      container.setAttribute("tabindex", "1")
      const btn = document.createElement("button")
      btn.setAttribute("tabindex", "1")
      container.appendChild(btn)
      document.body.appendChild(container)

      const result = getTabbableElements(container, true)
      expect(result[0]).toBe(container)
      expect(result).toContain(btn)

      document.body.removeChild(container)
    })

    test("should return focusable elements when no tabbable elements and includeEl is true", () => {
      const container = document.createElement("div")
      const input = document.createElement("input")
      input.setAttribute("tabindex", "-1")
      container.appendChild(input)
      document.body.appendChild(container)

      const result = getTabbableElements(container, true)
      expect(result).toContain(input)

      document.body.removeChild(container)
    })

    test("should handle iframe with contentDocument", () => {
      const container = document.createElement("div")
      const iframe = document.createElement("iframe")
      iframe.setAttribute("tabindex", "1")

      const fakeBody = document.createElement("div")
      const btn = document.createElement("button")
      btn.setAttribute("tabindex", "1")
      fakeBody.appendChild(btn)

      Object.defineProperty(iframe, "contentDocument", {
        configurable: true,
        value: { body: fakeBody },
      })

      container.appendChild(iframe)
      document.body.appendChild(container)

      const result = getTabbableElements(container)
      expect(result).toContain(btn)

      document.body.removeChild(container)
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

    test("should return next tabbable element after current", () => {
      const container = document.createElement("div")
      const btn1 = document.createElement("button")
      btn1.setAttribute("tabindex", "1")
      const btn2 = document.createElement("button")
      btn2.setAttribute("tabindex", "1")
      container.appendChild(btn1)
      container.appendChild(btn2)
      document.body.appendChild(container)

      expect(getNextTabbableElement(container, btn1)).toBe(btn2)

      document.body.removeChild(container)
    })

    test("should return null when no current element and no active element", () => {
      const container = document.createElement("div")
      document.body.appendChild(container)

      Object.defineProperty(document, "activeElement", {
        configurable: true,
        value: null,
      })

      expect(getNextTabbableElement(container)).toBeNull()

      delete (document as any).activeElement

      document.body.removeChild(container)
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

    test("should use assignedSlot when available", () => {
      const node = document.createElement("span")
      const slot = document.createElement("slot")
      Object.defineProperty(node, "assignedSlot", {
        configurable: true,
        value: slot,
      })
      expect(getParentNode(node)).toBe(slot)
    })

    test("should return host for element inside shadow root", () => {
      const host = document.createElement("div")
      document.body.appendChild(host)
      const shadow = host.attachShadow({ mode: "open" })
      const child = document.createElement("span")
      shadow.appendChild(child)

      expect(getParentNode(child)).toBe(host)

      document.body.removeChild(host)
    })

    test("should handle shadow root node", () => {
      const host = document.createElement("div")
      document.body.appendChild(host)
      const shadow = host.attachShadow({ mode: "open" })

      const result = getParentNode(shadow)
      expect(result).toBeDefined()

      document.body.removeChild(host)
    })

    test("should return document element for detached node", () => {
      const detached = document.createElement("div")
      expect(getParentNode(detached)).toBe(document.documentElement)
    })
  })

  describe("getFocusableElements", () => {
    test("should return empty array for null", () => {
      expect(getFocusableElements(null)).toStrictEqual([])
    })

    test("should return focusable elements from container", () => {
      const container = document.createElement("div")
      const input = document.createElement("input")
      container.appendChild(input)
      document.body.appendChild(container)

      const result = getFocusableElements(container)
      expect(result).toStrictEqual([])

      document.body.removeChild(container)
    })

    test("should return visible focusable elements", () => {
      const container = document.createElement("div")
      const input = document.createElement("input")
      Object.defineProperty(input, "offsetWidth", { value: 100 })
      container.appendChild(input)
      document.body.appendChild(container)

      const result = getFocusableElements(container)
      expect(result).toStrictEqual([input])

      document.body.removeChild(container)
    })

    test("should include el when includeEl is true and el is focusable", () => {
      const container = document.createElement("div")
      container.setAttribute("tabindex", "0")
      Object.defineProperty(container, "offsetWidth", { value: 100 })
      document.body.appendChild(container)

      const result = getFocusableElements(container, true)
      expect(result).toContain(container)

      document.body.removeChild(container)
    })

    test("should handle iframe with contentDocument", () => {
      const container = document.createElement("div")
      const iframe = document.createElement("iframe")
      Object.defineProperty(iframe, "offsetWidth", { value: 100 })

      const fakeBody = document.createElement("div")
      const input = document.createElement("input")
      Object.defineProperty(input, "offsetWidth", { value: 100 })
      fakeBody.appendChild(input)

      Object.defineProperty(iframe, "contentDocument", {
        configurable: true,
        value: { body: fakeBody },
      })

      container.appendChild(iframe)
      document.body.appendChild(container)

      const result = getFocusableElements(container)
      expect(result).toContain(input)

      document.body.removeChild(container)
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

  describe("scrollLock", () => {
    afterEach(() => {
      document.body.removeAttribute("data-scroll-lock")
      document.body.style.cssText = ""
      document.documentElement.style.cssText = ""
    })

    test("should lock and unlock scrolling", () => {
      const unlock = scrollLock(document)

      expect(document.body.hasAttribute("data-scroll-lock")).toBeTruthy()
      expect(document.body.style.overflow).toBe("hidden")

      unlock?.()

      expect(document.body.hasAttribute("data-scroll-lock")).toBeFalsy()
    })

    test("should not lock again if already locked", () => {
      const unlock1 = scrollLock(document)
      const unlock2 = scrollLock(document)

      expect(unlock2).toBeUndefined()

      unlock1?.()
    })

    test("should handle iOS-specific scrolling", () => {
      Object.defineProperty(navigator, "platform", {
        configurable: true,
        value: "iPhone",
      })

      const unlock = scrollLock(document)

      expect(document.body.hasAttribute("data-scroll-lock")).toBeTruthy()
      expect(document.body.style.position).toBe("fixed")

      unlock?.()

      expect(document.body.hasAttribute("data-scroll-lock")).toBeFalsy()

      delete (navigator as any).platform
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
      } as DOMRect)

      const unlock = scrollLock(document)

      expect(document.body.hasAttribute("data-scroll-lock")).toBeTruthy()

      unlock?.()

      expect(document.body.hasAttribute("data-scroll-lock")).toBeFalsy()

      vi.restoreAllMocks()
    })
  })

  describe("setStyle extended", () => {
    test("should remove style attribute when empty after restore", () => {
      const el = document.createElement("div")
      const restore = setStyle(el, { color: "red" })

      expect(el.style.color).toBe("red")

      restore()

      expect(el.getAttribute("style")).toBeNull()
    })

    test("should not remove style attribute when other styles remain", () => {
      const el = document.createElement("div")
      el.style.backgroundColor = "blue"
      const restore = setStyle(el, { color: "red" })

      expect(el.style.color).toBe("red")

      restore()

      expect(el.style.color).toBe("")
      expect(el.style.backgroundColor).toBe("blue")
    })
  })
})
