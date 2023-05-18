import { isMac } from '@yamada-ui/utils'
import { useEffect, useState } from 'react'

type Modality = 'keyboard' | 'pointer' | 'virtual'
type HandlerEvent = PointerEvent | MouseEvent | KeyboardEvent | FocusEvent
type Handler = (modality: Modality, e: HandlerEvent | null) => void
type FocusVisibleCallback = (isFocusVisible: boolean) => void

let hasSetup = false
let modality: Modality | null = null
let hasEventBeforeFocus = false
let hasBlurredWindowRecently = false

const handlers = new Set<Handler>()

const trigger = (modality: Modality, ev: HandlerEvent | null) =>
  handlers.forEach((handler) => handler(modality, ev))

const onValid = (e: KeyboardEvent) => {
  return !(
    e.metaKey ||
    (!isMac && e.altKey) ||
    e.ctrlKey ||
    e.key === 'Control' ||
    e.key === 'Shift' ||
    e.key === 'Meta'
  )
}

const onKeyboard = (ev: KeyboardEvent) => {
  hasEventBeforeFocus = true

  if (onValid(ev)) {
    modality = 'keyboard'

    trigger('keyboard', ev)
  }
}

const onPointer = (ev: PointerEvent | MouseEvent) => {
  modality = 'pointer'

  if (ev.type === 'mousedown' || ev.type === 'pointerdown') {
    hasEventBeforeFocus = true

    const target = ev.composedPath ? ev.composedPath()[0] : ev.target

    if ((target as HTMLElement).matches(':focus-visible')) return

    trigger('pointer', ev)
  }
}

const isVirtualClick = (ev: MouseEvent | PointerEvent): boolean => {
  if ((ev as any).mozInputSource === 0 && ev.isTrusted) return true

  return ev.detail === 0 && !(ev as PointerEvent).pointerType
}

const onClick = (ev: MouseEvent) => {
  if (!isVirtualClick(ev)) return

  hasEventBeforeFocus = true

  modality = 'virtual'
}

const onFocus = (ev: FocusEvent) => {
  if (ev.target === window || ev.target === document) return

  if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
    modality = 'virtual'
    trigger('virtual', ev)
  }

  hasEventBeforeFocus = false
  hasBlurredWindowRecently = false
}

const onBlur = () => {
  hasEventBeforeFocus = false
  hasBlurredWindowRecently = true
}

const isFocusVisible = () => modality !== 'pointer'

const setupGlobalFocusEvents = () => {
  if (typeof window === 'undefined' || hasSetup) return

  const { focus } = HTMLElement.prototype

  HTMLElement.prototype.focus = (...args) => {
    hasEventBeforeFocus = true

    if (this) focus.apply(this, args)
  }

  document.addEventListener('keydown', onKeyboard, true)
  document.addEventListener('keyup', onKeyboard, true)
  document.addEventListener('click', onClick, true)

  window.addEventListener('focus', onFocus, true)
  window.addEventListener('blur', onBlur, false)

  if (typeof PointerEvent !== 'undefined') {
    document.addEventListener('pointerdown', onPointer, true)
    document.addEventListener('pointermove', onPointer, true)
    document.addEventListener('pointerup', onPointer, true)
  } else {
    document.addEventListener('mousedown', onPointer, true)
    document.addEventListener('mousemove', onPointer, true)
    document.addEventListener('mouseup', onPointer, true)
  }

  hasSetup = true
}

export const trackFocusVisible = (func: FocusVisibleCallback) => {
  setupGlobalFocusEvents()

  func(isFocusVisible())

  const handler = () => func(isFocusVisible())

  handlers.add(handler)

  return () => {
    handlers.delete(handler)
  }
}

export const useFocusVisible = () => {
  const [focusVisible, setFocusVisible] = useState(false)
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    return trackFocusVisible(setFocusVisible)
  }, [])

  return {
    focusVisible: focusVisible && focus,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
  }
}
