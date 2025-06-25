import type {
  Breakpoint,
  ColorMode,
  ColorModeArray,
  ResponsiveObject,
  System,
} from "../../core"
import { useMemo } from "react"
import { getColorModeValue, useColorMode, useSystem } from "../../core"
import { isArray, isObject } from "../../utils"
import { getBreakpointValue, useBreakpoint } from "../use-breakpoint"

/**
 * `useValue` is a custom hook that combines `useBreakpointValue` and `useColorModeValue`.
 *
 * @see https://yamada-ui.com/hooks/use-value
 */
export const useValue = <Y>(
  value: ColorModeArray<Y, false> | ResponsiveObject<Y, false> | Y,
): Y => {
  const system = useSystem()
  const breakpoint = useBreakpoint()
  const { colorMode } = useColorMode()

  return useMemo(() => {
    return getValue(value)(system, colorMode, breakpoint)
  }, [value, system, colorMode, breakpoint])
}

export const getValue =
  <Y>(value: ColorModeArray<Y, false> | ResponsiveObject<Y, false> | Y) =>
  (system: System, colorMode: ColorMode, breakpoint: Breakpoint): Y => {
    if (isObject<ResponsiveObject<Y, false>>(value)) {
      return getBreakpointValue(value)(system, breakpoint)
    } else if (isArray<ColorModeArray<Y, false>>(value)) {
      const [light, dark] = value

      return getColorModeValue(light, dark)(colorMode)
    } else {
      return value
    }
  }
