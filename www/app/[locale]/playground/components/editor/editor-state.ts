"use client"

import type { RefObject } from "react"
import { noop } from "@yamada-ui/react"
import { assignControllerMethods, createControllerMethods, createControllerRefs } from "../../utils/controller"

export interface EditorStateMethods {
  /**
   * Function to get the current editor value.
   */
  getValue: () => string
  /**
   * Function to notify subscribers of value changes.
   */
  notifyChange: (value: string) => void
  /**
   * Function to set the editor value.
   */
  setValue: (value: string) => void
  /**
   * Function to subscribe to value changes.
   */
  subscribe: (callback: (value: string) => void) => () => void
}

export type EditorStateController = ReturnType<typeof createController>

const createController = () => createControllerRefs<EditorStateMethods>({
  getValue: () => "",
  notifyChange: noop,
  setValue: noop,
  subscribe: () => noop,
})

const createMethods = (
  refs: RefObject<EditorStateController>,
): EditorStateMethods => createControllerMethods(refs)

export const createEditorStateController = (): EditorStateController => {
  return createController()
}

export { assignControllerMethods, createMethods }
