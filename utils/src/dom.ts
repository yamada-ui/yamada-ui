import React from 'react'

export const createdDom = (): boolean =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export const getPlatform = (): string =>
  (navigator as any).userAgentData?.platform ?? navigator.platform

const vendor = (v: RegExp): boolean => createdDom() && v.test(navigator.vendor)
const platform = (v: RegExp): boolean => createdDom() && v.test(getPlatform())

export const isApple = (): boolean => platform(/mac|iphone|ipad|ipod/i)

export const isSafari = (): boolean => isApple() && vendor(/apple/i)

export const isElement = (el: any): el is Element =>
  el != null && typeof el == 'object' && 'nodeType' in el && el.nodeType === Node.ELEMENT_NODE

export const isHTMLElement = (el: any): el is HTMLElement => {
  if (!isElement(el)) return false

  const win = el.ownerDocument.defaultView ?? window

  return el instanceof win.HTMLElement
}

export const isHidden = (el: HTMLElement): boolean => {
  if (el.parentElement && isHidden(el.parentElement)) return true

  return el.hidden
}

export const isDisabled = (el: HTMLElement): boolean =>
  Boolean(el.getAttribute('disabled')) === true ||
  Boolean(el.getAttribute('aria-disabled')) === true

const isVisible = (el: HTMLElement) => el.offsetWidth > 0 && el.offsetHeight > 0

export const hasTabIndex = (el: HTMLElement): boolean => el.hasAttribute('tabindex')

export const isContentEditable = (el: HTMLElement): boolean => {
  const value = el.getAttribute('contenteditable')

  return value !== 'false' && value != null
}

export const isContains = (
  parent: HTMLElement | null,
  child: HTMLElement | null,
): boolean | undefined => {
  return parent === child || parent?.contains(child)
}

export const getEventRelatedTarget = (ev: React.FocusEvent) =>
  (ev.relatedTarget ?? ev.currentTarget.ownerDocument.activeElement) as HTMLElement | null

type Booleanish = boolean | 'true' | 'false'

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? '' : undefined) as Booleanish

export const ariaAttr = (condition: boolean | undefined) => (condition ? true : undefined)

export type FocusableElement = {
  focus: (options?: FocusOptions) => void
}

const focusableElList = [
  'input:not(:disabled):not([disabled])',
  'select:not(:disabled):not([disabled])',
  'textarea:not(:disabled):not([disabled])',
  'embed',
  'iframe',
  'object',
  'a[href]',
  'area[href]',
  'button:not(:disabled):not([disabled])',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '*[tabindex]:not([aria-disabled])',
  '*[contenteditable]',
]

const focusableElSelector: string = focusableElList.join()

export const getAllFocusable = <T extends HTMLElement>(container: T): T[] => {
  const focusableEls: T[] = Array.from(container.querySelectorAll<T>(focusableElSelector))

  focusableEls.unshift(container)

  return focusableEls.filter((el) => isFocusable(el) && isVisible(el))
}

export const isFocusable = (el: HTMLElement): boolean => {
  if (!isHTMLElement(el) || isHidden(el) || isDisabled(el)) {
    return false
  }

  const { localName } = el
  const focusableTags = ['input', 'select', 'textarea', 'button']

  if (focusableTags.indexOf(localName) >= 0) return true

  const others = {
    a: () => el.hasAttribute('href'),
    audio: () => el.hasAttribute('controls'),
    video: () => el.hasAttribute('controls'),
  }

  if (localName in others) return others[localName as keyof typeof others]()

  if (isContentEditable(el)) return true

  return hasTabIndex(el)
}

export const hasNegativeTabIndex = (el: HTMLElement): boolean =>
  hasTabIndex(el) && el.tabIndex === -1

export const isTabbable = (el?: HTMLElement | null): boolean =>
  el ? isHTMLElement(el) && isFocusable(el) && !hasNegativeTabIndex(el) : false

export const getOwnerWindow = (node?: Element | null): Window & typeof globalThis =>
  getOwnerDocument(node)?.defaultView ?? window

export const getOwnerDocument = (el?: Element | null): Document =>
  isElement(el) ? el.ownerDocument : document

export const getActiveElement = (el?: HTMLElement): HTMLElement =>
  getOwnerDocument(el).activeElement as HTMLElement
