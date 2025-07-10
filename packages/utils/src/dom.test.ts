import {
  ariaAttr,
  contains,
  createdDom,
  dataAttr,
  getActiveElement,
  getDocument,
  getPlatform,
  getPx,
  getWindow,
  isActiveElement,
  isApple,
  isDisabledElement,
  isEditableElement,
  isHiddenElement,
  isHTMLElement,
  isMac,
  isSafari,
  platform,
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

  describe("uuid", () => {
    test("should create a unique id with prefix", () => {
      const id1 = uuid()
      const id2 = uuid()
      expect(id1).not.toBe(id2)
    })
  })
})
