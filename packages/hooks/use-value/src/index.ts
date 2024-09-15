import type {
  ResponsiveObject,
  ColorModeArray,
  StyledTheme,
  ColorMode,
  Theme,
} from "@yamada-ui/core"
import { getColorModeValue, useColorMode, useTheme } from "@yamada-ui/core"
import { getBreakpointValue, useBreakpoint } from "@yamada-ui/use-breakpoint"
import { isObject, isArray } from "@yamada-ui/utils"
import { useMemo } from "react"

/**
 * `useValue` is a custom hook that combines `useBreakpointValue` and `useColorModeValue`.
 *
 * @see Docs https://yamada-ui.com/hooks/use-value
 */
export const useValue = <T extends any>(
  value: T | ResponsiveObject<T> | ColorModeArray<T>,
): T => {
  const { theme } = useTheme()
  const breakpoint = useBreakpoint()
  const { colorMode } = useColorMode()

  return useMemo(() => {
    return getValue(value)(theme, colorMode, breakpoint)
  }, [value, theme, colorMode, breakpoint])
}

export const getValue =
  <T extends any>(value: T | ResponsiveObject<T> | ColorModeArray<T>) =>
  (
    theme: StyledTheme,
    colorMode: ColorMode,
    breakpoint: Theme["breakpoints"],
  ): T => {
    if (isObject<ResponsiveObject<T>>(value)) {
      const computedValue = getBreakpointValue(value)(theme, breakpoint)

      if (isArray<ColorModeArray<T, false>>(value)) {
        const [light, dark] = value

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
