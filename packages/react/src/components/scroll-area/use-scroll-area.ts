import type { UIEvent } from "react"
import type { CSSObject, HTMLUIProps, PropGetter } from "../../core"
import { dataAttr, handlerAll, isMac, vendor } from "@yamada-ui/utils"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { mergeCSS } from "../../core"
import { mergeRefs, useSafeLayoutEffect } from "../../utils"

const neverStyles: CSSObject = {
  "&::-webkit-scrollbar": { display: "none" },
  scrollbarWidth: "none",
  _scrollbar: { display: "none" },
}

const hiddenStyles: CSSObject = {
  "&::-webkit-scrollbar-thumb": { bg: "transparent" },
  "&::-webkit-scrollbar-track": { bg: "transparent" },
  "@-moz-document url-prefix()": {
    scrollbarColor: "transparent transparent",
    _dark: {
      scrollbarColor: "transparent transparent",
    },
    _light: {
      scrollbarColor: "transparent transparent",
    },
  },
  _dark: {
    "&::-webkit-scrollbar-thumb": { bg: "transparent" },
    "&::-webkit-scrollbar-track": { bg: "transparent" },
    _scrollbarThumb: { bg: "transparent" },
    _scrollbarTrack: { bg: "transparent" },
  },
  _light: {
    "&::-webkit-scrollbar-thumb": { bg: "transparent" },
    "&::-webkit-scrollbar-track": { bg: "transparent" },
    _scrollbarThumb: { bg: "transparent" },
    _scrollbarTrack: { bg: "transparent" },
  },
  _scrollbarThumb: { bg: "transparent" },
  _scrollbarTrack: { bg: "transparent" },
}

export interface UseScrollAreaProps extends HTMLUIProps {
  /**
   * Scrollbar visibility type.
   *
   * @default 'hover'
   */
  type?: "always" | "hover" | "never" | "scroll"
  /**
   * Delay in milliseconds before scrollbars are hidden.
   *
   * @default 1000
   */
  scrollHideDelay?: number
  /**
   * Callback function for when the scroll position changes.
   */
  onScrollPositionChange?: ({ x, y }: { x: number; y: number }) => void
}

export const useScrollArea = ({
  ref,
  type = "hover",
  css: cssProp,
  overflow = "overlay",
  scrollHideDelay = 1000,
  onScrollPositionChange,
  ...rest
}: UseScrollAreaProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const isAlways = type === "always"
  const isNever = type === "never"
  const isSafari = isMac() && vendor(/apple/i)
  const componentKey = `${isHovered}-${isScrolling}`

  const hoverTimeout = useRef<any>(undefined)
  const scrollTimeout = useRef<any>(undefined)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const scrollPosition = useRef({ x: 0, y: 0 })

  useSafeLayoutEffect(() => {
    if (!scrollAreaRef.current || !isSafari) return

    scrollAreaRef.current.scrollLeft = scrollPosition.current.x
    scrollAreaRef.current.scrollTop = scrollPosition.current.y
  })

  const onMouseEnter = useCallback(() => {
    if (type !== "hover") return

    clearTimeout(hoverTimeout.current)

    setIsHovered(true)
  }, [type])

  const onMouseLeave = useCallback(() => {
    if (type !== "hover") return

    hoverTimeout.current = setTimeout(
      () => setIsHovered(false),
      scrollHideDelay,
    )
  }, [scrollHideDelay, type])

  const onScroll = useCallback(
    (ev: UIEvent<HTMLDivElement>) => {
      const el = ev.target as HTMLDivElement

      const { scrollLeft: x, scrollTop: y } = el
      const { x: prevX, y: prevY } = scrollPosition.current
      const isEqual = Math.abs(x - prevX) <= 5 && Math.abs(y - prevY) <= 5

      onScrollPositionChange?.({ x, y })
      scrollPosition.current = { x, y }

      if (type !== "scroll" || isEqual) return

      if (!isScrolling) setIsScrolling(true)

      clearTimeout(scrollTimeout.current)

      scrollTimeout.current = setTimeout(
        () => setIsScrolling(false),
        scrollHideDelay,
      )
    },
    [isScrolling, onScrollPositionChange, scrollHideDelay, type],
  )

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [])

  const css = useMemo(() => {
    const baseStyle = { overflow, ...cssProp }

    if (isNever) {
      return mergeCSS(baseStyle, neverStyles)
    } else {
      return mergeCSS(
        baseStyle,
        !isAlways && !isHovered && !isScrolling ? hiddenStyles : {},
      )
    }
  }, [isAlways, isHovered, isNever, isScrolling, overflow, cssProp])

  const safariProps = useMemo(
    () => ({
      key: componentKey,
      ref: mergeRefs(ref, scrollAreaRef),
      "data-key": componentKey,
    }),
    [componentKey, ref, scrollAreaRef],
  )

  const getRootProps: PropGetter = useCallback(
    (props) => ({
      ...props,
      ref,
      "data-hovered": dataAttr(isHovered),
      "data-scrolling": dataAttr(isScrolling),
      tabIndex: 0,
      ...(isSafari ? safariProps : {}),
      css,
      ...rest,
      onMouseEnter: handlerAll(rest.onMouseEnter, onMouseEnter),
      onMouseLeave: handlerAll(rest.onMouseLeave, onMouseLeave),
      onScroll: handlerAll(rest.onScroll, onScroll),
    }),
    [
      onMouseEnter,
      onMouseLeave,
      onScroll,
      rest,
      css,
      isHovered,
      isScrolling,
      safariProps,
      isSafari,
      ref,
    ],
  )

  return {
    getRootProps,
  }
}

export type UseScrollAreaReturn = ReturnType<typeof useScrollArea>
