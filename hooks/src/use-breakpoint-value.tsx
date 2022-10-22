import { useState, useEffect } from 'react'
import { Theme, ResponsiveObject } from '@yamada-ui/styled'
import { useBreakpoint } from '.'

export const useBreakpointValue = <T extends any>(values: ResponsiveObject<T>) => {
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
