import { useColorSchemetValue, ResponsiveObject, ColorSchemeArray } from '@yamada-ui/core'
import { useBreakpointValue } from '@yamada-ui/use-breakpoint'
import { isObject, isArray } from '@yamada-ui/utils'

export const useValue = <T extends any>(value: T | ResponsiveObject<T> | ColorSchemeArray<T>) => {
  if (isObject<ResponsiveObject<T>>(value)) {
    return useBreakpointValue(value)
  } else if (isArray<ColorSchemeArray<T>>(value)) {
    return useColorSchemetValue(...value)
  } else {
    return value
  }
}
