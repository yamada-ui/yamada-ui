import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useMultiComponentStyle,
} from '@yamada-ui/core'
import { cx, handlerAll } from '@yamada-ui/utils'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type ScrollAreaOptions = {
  type?: 'always' | 'scroll' | 'hover' | 'none'
  inner?: HTMLUIProps<'div'>
  scrollHideDelay?: number
}

export type ScrollAreaProps = HTMLUIProps<'div'> & ThemeProps<'ScrollArea'> & ScrollAreaOptions

export const ScrollArea = forwardRef<ScrollAreaProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('ScrollArea', props)
  const {
    className,
    type = 'scroll',
    scrollHideDelay = 1000,
    children,
    inner,
    ...rest
  } = omitThemeProps(props)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isScrolling, setisScrolling] = useState<boolean>(false)
  const isAlways = type === 'always'

  const css: CSSUIObject = useMemo(
    () => ({
      overflow: 'overlay',
      '&::-webkit-scrollbar':
        isAlways || isHovered || isScrolling
          ? styles.scrollbar
          : { display: 'none', scrollbarWidth: 'none' },
      '&::-webkit-scrollbar-track': styles.track,
      '&::-webkit-scrollbar-thumb': styles.thumb,
      '&::-webkit-scrollbar-button': styles.button,
      '&::-webkit-scrollbar-corner': styles.corner,
      ...styles.container,
    }),
    [isAlways, isHovered, isScrolling, styles],
  )

  const onMouseEnter = useCallback(() => {
    if (type !== 'hover') return

    setIsHovered(true)
  }, [type])

  const onMouseLeave = useCallback(() => {
    if (type !== 'hover') return

    setTimeout(() => setIsHovered(false), scrollHideDelay)
  }, [scrollHideDelay, type])

  const scrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined)

  const onScroll = useCallback(() => {
    if (type !== 'scroll') return

    if (!isScrolling) setisScrolling(true)

    clearTimeout(scrollTimeout.current)

    scrollTimeout.current = setTimeout(() => setisScrolling(false), scrollHideDelay)
  }, [isScrolling, scrollHideDelay, type])

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [])

  return (
    <ui.div
      ref={ref}
      className={cx('ui-scroll-area', className)}
      __css={css}
      {...rest}
      onMouseEnter={handlerAll(rest.onMouseEnter, onMouseEnter)}
      onMouseLeave={handlerAll(rest.onMouseLeave, onMouseLeave)}
      onScroll={onScroll}
    >
      <ui.div {...inner}>{children}</ui.div>
    </ui.div>
  )
})
