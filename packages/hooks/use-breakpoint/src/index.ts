import { useTheme, Theme, ResponsiveObject } from '@yamada-ui/core'
import { createdDom } from '@yamada-ui/utils'
import { useState, useMemo, useEffect } from 'react'

export const useBreakpoint = () => {
  const { theme } = useTheme()

  if (!theme)
    throw Error(
      'useBreakpoint: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`',
    )

  const breakpoints = theme.__breakpoints

  if (!breakpoints)
    throw Error(
      'useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`',
    )

  const queries = useMemo(
    () =>
      breakpoints.queries.map(({ breakpoint, minMaxQuery }) => ({
        breakpoint,
        query: minMaxQuery?.replace('@media screen and ', '') ?? '',
      })),
    [breakpoints],
  )

  const [breakpoint, setBreakpoint] = useState(() => {
    const isBrowser = createdDom()

    if (!isBrowser) return 'base'

    for (const { breakpoint, query } of queries) {
      const mql = window.matchMedia(query)

      if (mql.matches) return breakpoint
    }
  })

  useEffect(() => {
    const observer = queries.map(({ breakpoint, query }): (() => void) => {
      const mql = window.matchMedia(query)

      const onChange = (e: MediaQueryListEvent) => {
        if (e.matches) setBreakpoint(breakpoint)
      }

      if (typeof mql.addEventListener === 'function') mql.addEventListener('change', onChange)

      return () => {
        if (typeof mql.removeEventListener === 'function')
          mql.removeEventListener('change', onChange)
      }
    })

    return () => {
      observer.forEach((unobserve) => unobserve())
    }
  }, [queries])

  return breakpoint as Theme['breakpoints']
}

export const useBreakpointValue = <T extends any>(values: ResponsiveObject<T>): T => {
  const breakpoint = useBreakpoint()

  return (values.hasOwnProperty(breakpoint) ? values[breakpoint] : values.base) as T
}
