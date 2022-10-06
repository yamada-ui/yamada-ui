import { useState, useEffect } from 'react'
import { useBreakpoint } from '../hooks'
import { Theme } from '../types'

export const useBreakpointValue = <T extends any>(
  values: Record<'base' | Theme['breakpoints'], T>,
): T | undefined => {
  const breakpoint = useBreakpoint()
  const [value, setValue] = useState<T | undefined>(undefined)

  useEffect(() => {
    if (values[breakpoint]) {
      setValue(values[breakpoint])
    } else if ('base' in values) {
      setValue(values['base'])
    } else {
      setValue(undefined)
    }
  }, [breakpoint, values])

  return value
}
