import { useSchemetValue } from '@yamada-ui/providers'
import { isObject, isArray } from '@yamada-ui/utils'
import { useBreakpointValue } from '.'

export const useValue = <T extends any>(value: T): T => {
  if (isObject(value)) {
    return useBreakpointValue(value)
  } else if (isArray(value)) {
    return useSchemetValue(...(value as unknown as [any, any]))
  } else {
    return value
  }
}
