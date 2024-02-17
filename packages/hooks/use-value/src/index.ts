import type {
  ResponsiveObject,
  ColorModeArray,
  StyledTheme,
  ColorMode,
  Theme,
} from "@yamada-ui/core"
import { getColorModeValue, useColorModeValue } from "@yamada-ui/core"
import {
  getBreakpointValue,
  useBreakpointValue,
} from "@yamada-ui/use-breakpoint"
import { isObject, isArray } from "@yamada-ui/utils"

/**
 * `useValue` is a custom hook that combines `useBreakpointValue` and `useColorModeValue`.
 *
 * @see Docs https://yamada-ui.com/hooks/use-value
 */
export const useValue = <T extends any>(
  value: T | ResponsiveObject<T> | ColorModeArray<T>,
) => {
  if (isObject<ResponsiveObject<T>>(value)) {
    return useBreakpointValue(value)
  } else if (isArray<ColorModeArray<T>>(value)) {
    return useColorModeValue(...value)
  } else {
    return value
  }
}

export const getValue =
  <T extends any>(value: T | ResponsiveObject<T> | ColorModeArray<T>) =>
  (
    theme: StyledTheme,
    colorMode: ColorMode,
    breakpoint: Theme["breakpoints"],
  ) => {
    if (isObject<ResponsiveObject<T>>(value)) {
      return getBreakpointValue(value)(theme, breakpoint)
    } else if (isArray<ColorModeArray<T>>(value)) {
      return getColorModeValue(...value)(colorMode)
    } else {
      return value
    }
  }
