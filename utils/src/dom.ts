export const createdDom = (): boolean =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export const isElement = (el: any): el is Element =>
  el != null && typeof el == 'object' && 'nodeType' in el && el.nodeType === Node.ELEMENT_NODE

export const isHTMLElement = (el: any): el is HTMLElement => {
  if (!isElement(el)) return false

  const win = el.ownerDocument.defaultView ?? window

  return el instanceof win.HTMLElement
}

export const isHidden = (el: HTMLElement) => {
  if (el.parentElement && isHidden(el.parentElement)) return true
  return el.hidden
}

export const isDisabled = (el: HTMLElement) =>
  Boolean(el.getAttribute('disabled')) === true ||
  Boolean(el.getAttribute('aria-disabled')) === true

const isVisible = (el: HTMLElement) => el.offsetWidth > 0 && el.offsetHeight > 0

export const hasTabIndex = (el: HTMLElement) => el.hasAttribute('tabindex')

export const isContentEditable = (el: HTMLElement) => {
  const value = el.getAttribute('contenteditable')

  return value !== 'false' && value != null
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

const focusableElSelector = focusableElList.join()

export const getAllFocusable = <T extends HTMLElement>(container: T): T[] => {
  const focusableEls: T[] = Array.from(container.querySelectorAll<T>(focusableElSelector))

  focusableEls.unshift(container)

  return focusableEls.filter((el) => isFocusable(el) && isVisible(el))
}

export const isFocusable = (el: HTMLElement) => {
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
