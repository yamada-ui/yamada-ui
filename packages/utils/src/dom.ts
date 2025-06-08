import { isArray, isNumber, isObject, isUndefined } from "./assertion"
import { noop } from "./function"

export function createdDom(): boolean {
  return !!(
    !isUndefined(window) &&
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    window.document?.createElement
  )
}

export function getPlatform(): string {
  return (navigator as any).userAgentData?.platform ?? navigator.platform
}

export function getUserAgent(): string {
  const userAgentData = (navigator as any).userAgentData

  if (userAgentData && isArray(userAgentData.brands)) {
    return userAgentData.brands
      .map(
        ({ brand, version }: { brand: string; version: string }) =>
          `${brand}/${version}`,
      )
      .join(" ")
  }

  return navigator.userAgent
}

export function vendor(v: RegExp): boolean {
  return createdDom() && v.test(navigator.vendor)
}

export function platform(v: RegExp): boolean {
  return createdDom() && v.test(getPlatform())
}

export function userAgent(v: RegExp): boolean {
  return createdDom() && v.test(getUserAgent())
}

export function isMac(): boolean {
  return platform(/^Mac/i)
}

export function isIPhone(): boolean {
  return platform(/^iPhone/i)
}

export function isIPad(): boolean {
  return platform(/^iPad/i) || (isMac() && navigator.maxTouchPoints > 1)
}

export function isIos(): boolean {
  return isIPhone() || isIPad()
}

export function isAndroid(): boolean {
  return platform(/^Android/i)
}

export function isApple(): boolean {
  return isMac() || isIos()
}

export function isSafari(): boolean {
  return isApple() && vendor(/apple/i)
}

export function isFirefox(): boolean {
  return userAgent(/Firefox/i)
}

export function isChrome(): boolean {
  return userAgent(/Chrome/i)
}

export function isWebKit(): boolean {
  return userAgent(/AppleWebKit/i) && !isChrome()
}

export function isHTMLElement(el: any): el is HTMLElement {
  return (
    isObject(el) &&
    el.nodeType === Node.ELEMENT_NODE &&
    typeof el.nodeName === "string"
  )
}

export function isWindow(el: any): el is Window {
  return isObject(el) && el === el.window
}

export function isDocument(el: any): el is Document {
  return isObject(el) && el.nodeType === Node.DOCUMENT_NODE
}

export function isVisualViewport(el: any): el is VisualViewport {
  return isObject(el) && el.constructor.name === "VisualViewport"
}

export function isNode(el: any): el is Node {
  return isObject(el) && el.nodeType !== undefined
}

export function isShadowRoot(el: any): el is ShadowRoot {
  return (
    isNode(el) && el.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in el
  )
}

export function isFrame(el: any): el is HTMLIFrameElement {
  return isHTMLElement(el) && el.tagName === "IFRAME"
}

export function isActiveElement(
  el: HTMLElement,
  rootNode: Document | ShadowRoot,
): boolean {
  return getActiveElement(rootNode) === el
}

export function isHiddenElement(el: HTMLElement): boolean {
  if (el.parentElement && isHiddenElement(el.parentElement)) return true

  return el.hidden
}

export function isDisabledElement(el: HTMLElement): boolean {
  return (
    Boolean(el.getAttribute("disabled")) ||
    Boolean(el.getAttribute("data-disabled")) ||
    Boolean(el.getAttribute("aria-disabled"))
  )
}

export function isVisibleElement(el?: Node): boolean {
  if (!isHTMLElement(el)) return false

  return (
    el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0
  )
}

export function isTouchDevice(): boolean {
  return "ontouchstart" in window
}

const hasTabIndex = (el: Element): boolean =>
  !Number.isNaN(parseInt(el.getAttribute("tabindex") || "0", 10))

const hasNegativeTabIndex = (el: Element): boolean =>
  parseInt(el.getAttribute("tabindex") || "0", 10) < 0

export function getWindow(
  el: Document | Node | null | ShadowRoot | undefined,
): typeof globalThis & Window {
  if (isShadowRoot(el)) return getWindow(el.host)
  if (isDocument(el)) return el.defaultView ?? window
  if (isHTMLElement(el)) return el.ownerDocument.defaultView ?? window

  return window
}

export function getDocument(
  el: Document | Element | Node | null | undefined | Window,
): Document {
  if (isDocument(el)) return el
  if (isWindow(el)) return el.document

  return el?.ownerDocument ?? document
}

export function getDocumentElement(
  el: Document | Element | Node | null | undefined | Window,
): HTMLElement {
  return getDocument(el).documentElement
}

export function getNodeName(node: Node | Window): string {
  if (isHTMLElement(node)) return node.localName || ""

  return "#document"
}

export function getActiveElement(
  rootNode: Document | ShadowRoot,
): HTMLElement | null {
  let activeEl = rootNode.activeElement as HTMLElement | null

  while (activeEl?.shadowRoot) {
    const el = activeEl.shadowRoot.activeElement as HTMLElement | null

    if (el === activeEl) {
      break
    } else {
      activeEl = el
    }
  }

  return activeEl
}

export function getTabbableElements(
  el: HTMLElement | null,
  includeEl?: boolean,
) {
  if (!el) return []
  const els = Array.from(el.querySelectorAll<HTMLElement>(focusableSelector))
  const tabbableEls = els.filter(isTabbableElement)

  if (includeEl && isTabbableElement(el)) {
    tabbableEls.unshift(el)
  }

  tabbableEls.forEach((el, i) => {
    if (isFrame(el) && el.contentDocument) {
      const frameBody = el.contentDocument.body
      const allFrameTabbable = getTabbableElements(frameBody)
      tabbableEls.splice(i, 1, ...allFrameTabbable)
    }
  })

  if (!tabbableEls.length && includeEl) {
    return els
  }

  return tabbableEls
}

export function getFirstTabbableElement(
  el: HTMLElement | null,
  includeEl?: boolean,
): HTMLElement | null {
  const [first] = getTabbableElements(el, includeEl)

  return first || null
}

export function getNextTabbableElement(
  el: HTMLElement | null,
  current?: HTMLElement | null,
): HTMLElement | null {
  const els = getTabbableElements(el)
  const doc = el?.ownerDocument || document
  const currentElement = current ?? (doc.activeElement as HTMLElement | null)

  if (!currentElement) return null

  return els[els.indexOf(currentElement) + 1] || null
}

export function getLastTabbableElement(
  el: HTMLElement | null,
  includeEl?: boolean,
): HTMLElement | null {
  const els = getTabbableElements(el, includeEl)

  return els[els.length - 1] || null
}

export function getTabbableElementEdges(
  el: HTMLElement | null,
  includeEl?: boolean,
): [HTMLElement | null, HTMLElement | null] {
  const els = getTabbableElements(el, includeEl)
  const first = els[0] || null
  const last = els[els.length - 1] || null

  return [first, last]
}

export function getParentNode(node: Node): Node {
  if (getNodeName(node) === "html") return node

  const result =
    (node as any).assignedSlot ||
    node.parentNode ||
    isShadowRoot(node) ||
    getDocumentElement(node)

  return isShadowRoot(result) ? result.host : result
}

export function isInputElement(el: any): el is HTMLInputElement {
  return isHTMLElement(el) && el.localName === "input"
}

export function isEditableElement(
  el: EventTarget | HTMLElement | null,
): boolean {
  if (el == null || !isHTMLElement(el)) return false
  try {
    return (
      (isInputElement(el) && el.selectionStart != null) ||
      /(textarea|select)/.test(el.localName) ||
      el.isContentEditable ||
      el.getAttribute("contenteditable") === "true" ||
      el.getAttribute("contenteditable") === ""
    )
  } catch {
    return false
  }
}

export function isFocusableElement(el: HTMLElement | null): el is HTMLElement {
  if (!el || el.closest("[inert]")) return false

  return el.matches(focusableSelector) && isVisibleElement(el)
}

export function isTabbableElement(el: HTMLElement | null): el is HTMLElement {
  if (el != null && el.tabIndex > 0) return true
  return isFocusableElement(el) && !hasNegativeTabIndex(el as Element)
}

export function contains(
  parent?: EventTarget | HTMLElement | null,
  child?: EventTarget | HTMLElement | null,
): boolean {
  if (!parent || !child) return false
  if (!isHTMLElement(parent) || !isHTMLElement(child)) return false

  const rootNode = child.getRootNode()

  if (parent === child) return true
  if (parent.contains(child)) return true

  if (isShadowRoot(rootNode)) {
    let next: Node | null | ShadowRoot = child

    while (next) {
      if (parent === next) return true

      next = next.parentNode ?? (isShadowRoot(next) ? next.host : null)
    }
  }

  return false
}

export function getPx(value: number | string | undefined): number {
  if (isNumber(value)) return value

  if (isUndefined(value)) return 0

  if (value.includes("px")) return parseFloat(value)

  let fontSize = 16

  if (createdDom()) {
    const style = window.getComputedStyle(document.documentElement)

    const computedFontSize = parseFloat(style.fontSize)

    if (!isNaN(computedFontSize)) fontSize = computedFontSize
  }

  return parseFloat(value) * fontSize
}

export function getTabIndex(node: HTMLElement | SVGElement) {
  if (node.tabIndex < 0) {
    if (
      (/^(audio|video|details)$/.test(node.localName) ||
        isEditableElement(node)) &&
      !hasTabIndex(node)
    ) {
      return 0
    }
  }
  return node.tabIndex
}

export function dataAttr(condition: any): string | undefined {
  return (condition ? "" : undefined) as string | undefined
}

type Booleanish = "false" | "true" | boolean

export function ariaAttr(condition: any): Booleanish | undefined {
  if (condition === "true") return "true"
  if (condition === "false") return "false"

  return !!condition ? true : undefined
}

let createIdCounter = 0

export function createId(prefix: string) {
  return `${prefix}-${++createIdCounter}-${new Date().getTime()}`
}

const focusableElList = [
  "[tabindex]",
  "input:not([type='hidden']):not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "iframe",
  "object",
  "embed",
  "a[href]",
  "area[href]",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]:not([contenteditable='false'])",
  "details > summary:first-of-type",
]

const focusableSelector = focusableElList.join(", ")

export function getFocusableElements(
  el: null | Pick<HTMLElement, "querySelectorAll">,
  includeEl = false,
) {
  if (!el) return []
  const els = Array.from(el.querySelectorAll<HTMLElement>(focusableSelector))

  const include = includeEl

  if (include && isHTMLElement(el) && isFocusableElement(el)) {
    els.unshift(el)
  }

  const focusableEls = els.filter(isFocusableElement)

  focusableEls.forEach((el, i) => {
    if (isFrame(el) && el.contentDocument) {
      const frameBody = el.contentDocument.body

      focusableEls.splice(i, 1, ...getFocusableElements(frameBody))
    }
  })

  return focusableEls
}

export function getFirstFocusableElement(
  el: HTMLElement | null,
  includeEl?: boolean,
): HTMLElement | null {
  const [first] = getFocusableElements(el, includeEl)

  return first || null
}

export function setAttribute(el: Element, attr: string, v: string) {
  const prev = el.getAttribute(attr)
  const exists = prev != null

  el.setAttribute(attr, v)

  return () => {
    if (!exists) {
      el.removeAttribute(attr)
    } else {
      el.setAttribute(attr, prev)
    }
  }
}

export function setStyle(
  el: HTMLElement | null | undefined,
  style: Partial<
    CSSStyleDeclaration | { [key: `--${string}`]: number | string }
  >,
) {
  if (!el) return noop

  const prev = Object.keys(style).reduce<{ [key: string]: string }>(
    (acc, key) => {
      acc[key] = el.style.getPropertyValue(key)

      return acc
    },
    {},
  )

  Object.assign(el.style, style)

  return () => {
    Object.assign(el.style, prev)

    if (el.style.length === 0) el.removeAttribute("style")
  }
}

const LOCK_DATA_ATTR = "data-scroll-lock"

export function scrollLock(
  el: Document | Element | Node | null | undefined | Window,
) {
  const doc = getDocument(el)
  const win = getWindow(doc)

  const locked = doc.body.hasAttribute(LOCK_DATA_ATTR)

  if (locked) return

  const scrollbarWidth = win.innerWidth - doc.documentElement.clientWidth
  const documentLeft = doc.documentElement.getBoundingClientRect().left
  const scrollbarX = Math.round(documentLeft) + doc.documentElement.scrollLeft
  const paddingProperty = scrollbarX ? "paddingLeft" : "paddingRight"

  doc.body.setAttribute(LOCK_DATA_ATTR, "")

  const setStyleForIOS = () => {
    const offsetLeft = win.visualViewport?.offsetLeft ?? 0
    const offsetTop = win.visualViewport?.offsetTop ?? 0

    const restoreStyle = setStyle(doc.body, {
      left: `${-(win.scrollX - Math.floor(offsetLeft))}px`,
      overflow: "hidden",
      [paddingProperty]: `${scrollbarWidth}px`,
      position: "fixed",
      right: "0",
      top: `${-(win.scrollY - Math.floor(offsetTop))}px`,
    })

    return () => {
      restoreStyle()
      win.scrollTo({ behavior: "instant", left: win.scrollX, top: win.scrollY })
    }
  }

  const unsubscribes = [
    setStyle(doc.documentElement, {
      "--scrollbar-width": `${scrollbarWidth}px`,
    }),
    isIos()
      ? setStyleForIOS()
      : setStyle(doc.body, {
          overflow: "hidden",
          [paddingProperty]: `${scrollbarWidth}px`,
        }),
  ]

  return () => {
    unsubscribes.forEach((unsubscribe) => unsubscribe())

    doc.body.removeAttribute(LOCK_DATA_ATTR)
  }
}
