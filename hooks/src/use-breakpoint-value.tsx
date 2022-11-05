import { ResponsiveObject } from '@yamada-ui/styled'
import { useState, useEffect } from 'react'
import { useBreakpoint } from '.'

export const useBreakpointValue = <T extends any>(values: ResponsiveObject<T>) => {
  const breakpoint = useBreakpoint()
  const [value, setValue] = useState<ResponsiveObject<T>[keyof ResponsiveObject<T>]>(() =>
    values[breakpoint] ? values[breakpoint] : values.base,
  )

  useEffect(() => {
    if (values[breakpoint]) {
      setValue(values[breakpoint])
    } else {
      setValue(values.base)
    }
  }, [breakpoint, values])

  return value
}
