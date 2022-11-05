import { ResponsiveObject } from '@yamada-ui/styled'
import { useBreakpoint } from '.'

export const useBreakpointValue = <T extends any>(values: ResponsiveObject<T>) => {
  const breakpoint = useBreakpoint()

  return values.hasOwnProperty(breakpoint) ? values[breakpoint] : values.base
}
