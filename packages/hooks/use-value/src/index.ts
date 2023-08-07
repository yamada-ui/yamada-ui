import {
  useColorModeValue,
  ResponsiveObject,
  ColorModeArray,
} from '@yamada-ui/core'
import { useBreakpointValue } from '@yamada-ui/use-breakpoint'
import { isObject, isArray } from '@yamada-ui/utils'

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
