import { useColorSchemetValue } from '@yamada-ui/providers'
import { ResponsiveObject, ColorSchemeArray } from '@yamada-ui/styled'
import { isObject, isArray } from '@yamada-ui/utils'
import { useBreakpointValue } from '.'

export const useValue = <T extends any>(value: T | ResponsiveObject<T> | ColorSchemeArray<T>) => {
  if (isObject<ResponsiveObject<T>>(value)) {
    return useBreakpointValue(value)
  } else if (isArray<ColorSchemeArray<T>>(value)) {
    return useColorSchemetValue(...value)
  } else {
    return value
  }
}
