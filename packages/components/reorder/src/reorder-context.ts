import type { CSSUIObject } from "@yamada-ui/core"
import type { DragControls } from "@yamada-ui/motion"
import { createContext } from "@yamada-ui/utils"

interface ReorderContext {
  orientation: "horizontal" | "vertical"
  styles: { [key: string]: CSSUIObject }
}

export const [ReorderProvider, useReorderContext] =
  createContext<ReorderContext>({
    name: "ReorderContext",
    errorMessage: `useReorderContext returned is 'undefined'. Seems you forgot to wrap the components in "<Reorder />"`,
  })

interface ReorderItemContext {
  dragControls: DragControls
  isDrag: boolean
  register: (node: HTMLElement | null) => void
}

export const [ReorderItemProvider, useReorderItemContext] =
  createContext<ReorderItemContext>({
    name: "ReorderContext",
    errorMessage: `useReorderItemContext returned is 'undefined'. Seems you forgot to wrap the components in "<ReorderItem />"`,
  })
