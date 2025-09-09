"use client"

import type { RefObject } from "react"
import { createRef } from "react"

export interface EditorStateController {
  getValue: RefObject<(() => string) | null>
  notifyChange: RefObject<((value: string) => void) | null>
  setValue: RefObject<((value: string) => void) | null>
  subscribe: RefObject<
    ((callback: (value: string) => void) => () => void) | null
  >
}

export const createEditorStateController = (): EditorStateController => ({
  getValue: createRef<(() => string) | null>(),
  notifyChange: createRef<((value: string) => void) | null>(),
  setValue: createRef<((value: string) => void) | null>(),
  subscribe: createRef<
    ((callback: (value: string) => void) => () => void) | null
  >(),
})
