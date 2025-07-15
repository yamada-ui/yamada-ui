import type { AnyString } from "@yamada-ui/utils"
import * as React from "react"

type KeyboardNavigationKey =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "End"
  | "Home"
  | "PageDown"
  | "PageUp"

type KeyboardControlKey =
  | "Alt"
  | "Backspace"
  | "CapsLock"
  | "Control"
  | "Delete"
  | "Enter"
  | "Escape"
  | "Insert"
  | "Meta"
  | "NumLock"
  | "Pause"
  | "PrintScreen"
  | "ScrollLock"
  | "Shift"
  | "Space"
  | "Tab"

type KeyboardFunctionKey = "Fn" | "FnLock" | `F${number}`

type KeyboardKey =
  | AnyString
  | KeyboardControlKey
  | KeyboardFunctionKey
  | KeyboardNavigationKey

export function runKeyAction<Y>(
  ev: React.KeyboardEvent<Y>,
  actions: { [key in KeyboardKey]?: React.KeyboardEventHandler<Y> },
  { preventDefault = true }: { preventDefault?: boolean } = {},
) {
  const action = actions[ev.key]

  if (!action) return

  if (preventDefault) ev.preventDefault()

  action(ev)
}
export function useAttributeObserver(
  ref: React.RefObject<HTMLElement | null>,
  attributeFilter: string[],
  enabled: boolean,
  func: () => void,
) {
  React.useEffect(() => {
    if (!ref.current || !enabled) return

    const ownerDocument = ref.current.ownerDocument.defaultView ?? window

    const observer = new ownerDocument.MutationObserver((changes) => {
      for (const { type, attributeName } of changes) {
        if (type !== "attributes") continue
        if (!attributeName) continue

        if (attributeFilter.includes(attributeName)) func()
      }
    })

    observer.observe(ref.current, { attributeFilter, attributes: true })

    return () => observer.disconnect()
  })
}

export function getEventRelatedTarget(ev: React.FocusEvent | React.MouseEvent) {
  return (ev.relatedTarget ??
    ev.currentTarget.ownerDocument.activeElement) as HTMLElement | null
}

const visuallyHiddenStyle = {
  border: "0px",
  clipPath: "rect(0px 0px 0px 0px)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: "0px",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
} satisfies React.CSSProperties

export const visuallyHiddenAttributes = {
  style: visuallyHiddenStyle,
  "aria-hidden": true,
  tabIndex: -1,
} satisfies React.HTMLAttributes<HTMLElement>

export function* useIds() {
  const id = React.useId()

  for (let i = 0; ; i++) {
    yield `${id}-${i}`
  }
}
