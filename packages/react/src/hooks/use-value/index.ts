import type {
  ColorMode,
  ColorModeArray,
  ResponsiveObject,
  StyledTheme,
  ThemeTokens,
} from "../../core"
import { useMemo } from "react"
import {
  getColorModeValue,
  useColorMode,
} from "../../providers/color-mode-provider"
import { useTheme } from "../../providers/theme-provider"
import { isArray, isObject } from "../../utils"
import { getBreakpointValue, useBreakpoint } from "../use-breakpoint"

/**
 * `useValue` is a custom hook that combines `useBreakpointValue` and `useColorModeValue`.
 *
 * @see https://yamada-ui.com/hooks/use-value
 */
export const useValue = <T>(
  value: ColorModeArray<T> | ResponsiveObject<T> | T,
): T => {
  const { theme } = useTheme()
  const breakpoint = useBreakpoint()
  const { colorMode } = useColorMode()

  return useMemo(() => {
    return getValue(value)(theme, colorMode, breakpoint)
  }, [value, theme, colorMode, breakpoint])
}

export const getValue =
  <T>(value: ColorModeArray<T> | ResponsiveObject<T> | T) =>
  (
    theme: StyledTheme,
    colorMode: ColorMode,
    breakpoint: ThemeTokens["breakpoints"],
  ): T => {
    if (isObject<ResponsiveObject<T>>(value)) {
      const computedValue = getBreakpointValue(value)(theme, breakpoint)

      if (isArray<ColorModeArray<T, false>>(computedValue)) {
        const [light, dark] = computedValue

        return getColorModeValue(light, dark)(colorMode)
      } else {
        return computedValue
      }
    } else if (isArray<ColorModeArray<T>>(value)) {
      const [light, dark] = value

      const computedValue = getColorModeValue(light, dark)(colorMode)

      if (isObject(computedValue)) {
        if (theme.__breakpoints?.isResponsive(computedValue)) {
          return getBreakpointValue(computedValue)(theme, breakpoint)
        } else {
          return computedValue as T
        }
      } else {
        return computedValue
      }
    } else {
      return value
    }
  }
