import type { StringLiteral } from "@yamada-ui/react"
import { runIfFunc, useCallbackRef } from "@yamada-ui/react"
import { useEffect } from "react"

type DocumentOrElement = Document | HTMLElement | null

export const useEventListener = <K extends keyof DocumentEventMap>(
  event: K | StringLiteral,
  handler?: (event: DocumentEventMap[K]) => void,
  env?: (() => DocumentOrElement) | DocumentOrElement,
  options?: boolean | AddEventListenerOptions,
) => {
  const listener = useCallbackRef(handler)

  useEffect(() => {
    const node = runIfFunc(env) ?? document

    if (!handler) return

    node.addEventListener(
      event,
      listener as EventListenerOrEventListenerObject,
      options,
    )

    return () => {
      node.removeEventListener(
        event,
        listener as EventListenerOrEventListenerObject,
        options,
      )
    }
  }, [event, env, options, listener, handler])

  return () => {
    const node = runIfFunc(env) ?? document

    node.removeEventListener(
      event,
      listener as EventListenerOrEventListenerObject,
      options,
    )
  }
}
