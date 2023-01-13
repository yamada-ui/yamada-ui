import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
} from '@yamada-ui/core'
import { cx, Dict, handlerAll, merge } from '@yamada-ui/utils'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type ScrollAreaOptions = {
  type?: 'always' | 'scroll' | 'hover' | 'never'
  inner?: HTMLUIProps<'div'>
  scrollHideDelay?: number
}

export type ScrollAreaProps = HTMLUIProps<'div'> & ThemeProps<'ScrollArea'> & ScrollAreaOptions

const neverStyles: CSSUIObject = {
  scrollbarWidth: 'none',
  _scrollbar: { display: 'none' },
  '&::-webkit-scrollbar': { display: 'none' },
}

const hiddenStyles = (styles: Dict): CSSUIObject => ({
  _scrollbarTrack: {
    bg: 'transparent',
    _nativeHover: { ...styles._scrollbarTrack },
  },
  '&::-webkit-scrollbar-track': {
    bg: 'transparent',
    _nativeHover: { ...styles['&::-webkit-scrollbar-track'] },
  },
  _scrollbarThumb: {
    bg: 'transparent',
    _nativeHover: { ...styles._scrollbarThumb },
  },
  '&::-webkit-scrollbar-thumb': {
    bg: 'transparent',
    _nativeHover: { ...styles['&::-webkit-scrollbar-thumb'] },
  },
})

export const ScrollArea = forwardRef<ScrollAreaProps, 'div'>((props, ref) => {
  const styles = useComponentStyle('ScrollArea', props)
  const {
    className,
    type = 'hover',
    overflow = 'overlay',
    scrollHideDelay = 1000,
    children,
    inner,
    ...rest
  } = omitThemeProps(props)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isScrolling, setisScrolling] = useState<boolean>(false)
  const isAlways = type === 'always'
  const isNever = type === 'never'

  const hoverTimeout = useRef<NodeJS.Timeout | undefined>(undefined)
  const scrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined)

  const onMouseEnter = useCallback(() => {
    if (type !== 'hover') return

    clearTimeout(hoverTimeout.current)

    setIsHovered(true)
  }, [type])

  const onMouseLeave = useCallback(() => {
    if (type !== 'hover') return

    hoverTimeout.current = setTimeout(() => setIsHovered(false), scrollHideDelay)
  }, [scrollHideDelay, type])

  const onScroll = useCallback(() => {
    if (type !== 'scroll') return

    if (!isScrolling) setisScrolling(true)

    clearTimeout(scrollTimeout.current)

    scrollTimeout.current = setTimeout(() => setisScrolling(false), scrollHideDelay)
  }, [isScrolling, scrollHideDelay, type])

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [])

  const css: CSSUIObject = useMemo(() => {
    if (isNever) {
      return merge({ overflow, ...styles }, neverStyles)
    } else {
      return merge(
        { overflow, ...styles },
        !isAlways && !isHovered && !isScrolling ? hiddenStyles(styles) : {},
      )
    }
  }, [isAlways, isHovered, isNever, isScrolling, overflow, styles])

  return (
    <ui.div
      ref={ref}
      className={cx('ui-scroll-area', className)}
      __css={css}
      {...rest}
      onMouseEnter={handlerAll(rest.onMouseEnter, onMouseEnter)}
      onMouseLeave={handlerAll(rest.onMouseLeave, onMouseLeave)}
      onScroll={handlerAll(rest.onScroll, onScroll)}
    >
      {inner ? (
        <ui.div className='ui-scroll-area-inner' {...inner}>
          {children}
        </ui.div>
      ) : (
        children
      )}
    </ui.div>
  )
})
