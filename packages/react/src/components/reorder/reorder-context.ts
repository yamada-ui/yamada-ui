import type { DragControls } from "motion/react"
import type { CSSUIObject } from "../../core"
import { createContext } from "../../utils"

interface ReorderContext {
  orientation: "horizontal" | "vertical"
  styles: { [key: string]: CSSUIObject | undefined }
}

export const [ReorderProvider, useReorderContext] =
  createContext<ReorderContext>({
    name: "ReorderContext",
    errorMessage: `useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`,
  })

interface ReorderItemContext {
  drag: boolean
  dragControls: DragControls
  register: (node: HTMLElement | null) => void
}

export const [ReorderItemProvider, useReorderItemContext] =
  createContext<ReorderItemContext>({
    name: "ReorderContext",
    errorMessage: `useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`,
  })
