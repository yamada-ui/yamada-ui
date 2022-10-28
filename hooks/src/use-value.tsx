import { useSchemetValue } from '@yamada-ui/providers'
import { ResponsiveObject, SchemeArray } from '@yamada-ui/styled'
import { isObject, isArray } from '@yamada-ui/utils'
import { useBreakpointValue } from '.'

export const useValue = <T extends any>(value: T | ResponsiveObject<T> | SchemeArray<T>) => {
  if (isObject<ResponsiveObject<T>>(value)) {
    return useBreakpointValue(value)
  } else if (isArray<SchemeArray<T>>(value)) {
    return useSchemetValue(...value)
  } else {
    return value
  }
}
