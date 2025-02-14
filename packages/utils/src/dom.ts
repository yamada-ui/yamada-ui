import { isNumber, isUndefined } from "./assertion"

export function createdDom(): boolean {
  return !!(
    typeof window !== "undefined" &&
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    window.document?.createElement
  )
}

export function getPlatform(): string {
  return (navigator as any).userAgentData?.platform ?? navigator.platform
}

export function vendor(v: RegExp): boolean {
  return createdDom() && v.test(navigator.vendor)
}

export function platform(v: RegExp): boolean {
  return createdDom() && v.test(getPlatform())
}

export function isMac(): boolean {
  return platform(/^mac/i)
}

export function isApple(): boolean {
  return platform(/mac|iphone|ipad|ipod/i)
}

export function isSafari(): boolean {
  return isApple() && vendor(/apple/i)
}

export function isElement(el: any): el is Element {
  return (
    el != null &&
    typeof el == "object" &&
    "nodeType" in el &&
    el.nodeType === Node.ELEMENT_NODE
  )
}

export function isHTMLElement(el: any): el is HTMLElement {
  if (!isElement(el)) return false

  const win = el.ownerDocument.defaultView ?? window

  return el instanceof win.HTMLElement
}

export function isHidden(el: HTMLElement): boolean {
  if (el.parentElement && isHidden(el.parentElement)) return true

  return el.hidden
}

export function isDisabled(el: HTMLElement): boolean {
  return (
    Boolean(el.getAttribute("disabled")) ||
    Boolean(el.getAttribute("data-disabled")) ||
    Boolean(el.getAttribute("aria-disabled"))
  )
}

function isVisible(el: HTMLElement) {
  return el.offsetWidth > 0 && el.offsetHeight > 0
}

export function hasTabIndex(el: HTMLElement): boolean {
  return el.hasAttribute("tabindex")
}

export function isContentEditable(el: HTMLElement): boolean {
  const value = el.getAttribute("contenteditable")

  return value !== "false" && value != null
}

export function isContains(
  parent: HTMLElement | null,
  child: HTMLElement | null,
): boolean | undefined {
  return parent === child || parent?.contains(child)
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

type Booleanish = "false" | "true" | boolean

export function dataAttr(condition: any) {
  return (condition ? "" : undefined) as Booleanish
}

export function ariaAttr(condition: any): boolean | undefined {
  return condition ? true : undefined
}

export interface FocusableElement {
  focus: (options?: FocusOptions) => void
}

const focusableElList = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]",
]

const focusableElSelector: string = focusableElList.join()

export function getAllFocusable<T extends HTMLElement>(container: T): T[] {
  const focusableEls: T[] = Array.from(
    container.querySelectorAll<T>(focusableElSelector),
  )

  focusableEls.unshift(container)

  return focusableEls.filter((el) => isFocusable(el) && isVisible(el))
}

export function isFocusable(el: HTMLElement): boolean {
  if (!isHTMLElement(el) || isHidden(el) || isDisabled(el)) {
    return false
  }

  const { localName } = el
  const focusableTags = ["input", "select", "textarea", "button"]

  if (focusableTags.includes(localName)) return true

  const others = {
    a: () => el.hasAttribute("href"),
    audio: () => el.hasAttribute("controls"),
    video: () => el.hasAttribute("controls"),
  }

  if (localName in others) return others[localName as keyof typeof others]()

  if (isContentEditable(el)) return true

  return hasTabIndex(el)
}

export function hasNegativeTabIndex(el: HTMLElement): boolean {
  return hasTabIndex(el) && el.tabIndex === -1
}

export function isTabbable(el?: HTMLElement | null): boolean {
  return el
    ? isHTMLElement(el) && isFocusable(el) && !hasNegativeTabIndex(el)
    : false
}

export function isTouchDevice(): boolean {
  return "ontouchstart" in window
}

export function getOwnerWindow(
  node?: Element | null,
): typeof globalThis & Window {
  return getOwnerDocument(node).defaultView ?? window
}

export function getOwnerDocument(el?: Element | null): Document {
  return isElement(el) ? el.ownerDocument : document
}

export function getActiveElement(el?: HTMLElement): HTMLElement | null {
  return getOwnerDocument(el).activeElement as HTMLElement | null
}

export function isActiveElement(el: HTMLElement): boolean {
  return getActiveElement(el) === el
}

let createIdCounter = 0

export function createId(prefix: string) {
  return `${prefix}-${++createIdCounter}-${new Date().getTime()}`
}
