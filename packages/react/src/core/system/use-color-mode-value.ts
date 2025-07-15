import type { ColorMode } from "./index.types"
import { useColorMode } from "./color-mode-provider"

/**
 * `useColorModeValue` is a custom hook that returns the value of the current color mode from the provided values.
 *
 * @see https://yamada-ui.com/hooks/use-color-mode-value
 */
export const useColorModeValue = <L, D>(light: L, dark: D): D | L => {
  const { colorMode } = useColorMode()

  return getColorModeValue<L, D>(light, dark)(colorMode)
}

export const getColorModeValue =
  <L, D>(light: L, dark: D) =>
  (colorMode: ColorMode): D | L => {
    return colorMode === "light" ? light : dark
  }
