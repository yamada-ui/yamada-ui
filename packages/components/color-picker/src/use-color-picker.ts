import type { CSSUIObject } from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"

type ColorPickerContext = { styles: Record<string, CSSUIObject> }

export const [ColorPickerProvider, useColorPickerContext] =
  createContext<ColorPickerContext>({
    strict: false,
    name: "ColorPickerContext",
  })

export type UseColorPickerProps = {}

export const useColorPicker = ({}: UseColorPickerProps) => {
  return {}
}

export type UseColorPickerReturn = ReturnType<typeof useColorPicker>
