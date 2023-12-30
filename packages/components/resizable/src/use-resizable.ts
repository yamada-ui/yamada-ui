import type { CSSUIObject } from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"

type ResizableContext = Record<string, CSSUIObject>

export const [ResizableProvider, useResizableContext] =
  createContext<ResizableContext>({
    strict: false,
    name: "ResizableContext",
  })

export type UseResizableProps = {}

export const useResizable = () => {
  return {}
}

export type UseResizableReturn = ReturnType<typeof useResizable>
