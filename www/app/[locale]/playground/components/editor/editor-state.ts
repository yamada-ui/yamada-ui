"use client"

import type { RefObject } from "react"
import { createRef } from "react"

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

const createController = () => ({
  getValue: createRef<EditorStateMethods["getValue"]>(),
  notifyChange: createRef<EditorStateMethods["notifyChange"]>(),
  setValue: createRef<EditorStateMethods["setValue"]>(),
  subscribe: createRef<EditorStateMethods["subscribe"]>(),
})

const createMethods = (
  refs: RefObject<EditorStateController>,
): EditorStateMethods => ({
  getValue: () => refs.current.getValue.current?.() ?? "",
  notifyChange: (value) => refs.current.notifyChange.current?.(value),
  setValue: (value) => refs.current.setValue.current?.(value),
  subscribe: (callback) =>
    refs.current.subscribe.current?.(callback) ?? (() => undefined),
})

export const createEditorStateController = (): EditorStateController => {
  const controller = createController()

  return controller
}

export { createMethods }
