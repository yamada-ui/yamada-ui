import { act } from "@testing-library/react"
import { getActiveElement, isFocusable } from "@yamada-ui/utils"

export function focus(el: HTMLElement) {
  if (getActiveElement(el) === el) return

  if (!isFocusable(el)) return

  act(() => {
    el.focus()
  })
}

export function blur(el?: HTMLElement | null) {
  if (el == null) el = document.activeElement as HTMLElement

  if (el.tagName === "BODY") return

  if (getActiveElement(el) !== el) return

  act(() => {
    if ("blur" in el) el.blur()
  })
}
