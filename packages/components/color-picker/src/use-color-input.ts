import type { CSSUIObject } from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"

type ColorInputContext = { styles: Record<string, CSSUIObject> }

export const [ColorInputProvider, useColorInputContext] =
  createContext<ColorInputContext>({
    strict: false,
    name: "ColorInputContext",
  })

export type UseColorInputProps = {}

export const useColorInput = ({}: UseColorInputProps) => {
  return {}
}

export type UseColorInputReturn = ReturnType<typeof useColorInput>
