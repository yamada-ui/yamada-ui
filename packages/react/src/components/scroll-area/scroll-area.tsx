import type { UIEvent } from "react"
import type { CSSObject, HTMLUIProps, ThemeProps } from "../../core"
import type { ScrollAreaStyle } from "./scroll-area.style"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createSlotComponent, ui } from "../../core"
import {
  dataAttr,
  handlerAll,
  isMac,
  merge,
  mergeRefs,
  useSafeLayoutEffect,
  vendor,
} from "../../utils"
import { scrollAreaStyle } from "./scroll-area.style"

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

export interface ScrollAreaProps
  extends HTMLUIProps,
    ThemeProps<ScrollAreaStyle> {
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
   * Props for inner element.
   */
  innerProps?: HTMLUIProps
  /**
   * Callback function for when the scroll position changes.
   */
  onScrollPositionChange?: ({ x, y }: { x: number; y: number }) => void
}

export const {
  PropsContext: scrollAreaPropsContext,
  usePropsContext: useScrollAreaPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ScrollAreaProps, ScrollAreaStyle>(
  "scroll-area",
  scrollAreaStyle,
)

/**
 * `ScrollArea` is a component that displays a customized scrollbar.
 *
 * @see Docs https://yamada-ui.com/components/data-display/scroll-area
 */
export const ScrollArea = withProvider<"div", ScrollAreaProps>(
  ({
    ref,
    type = "hover",
    style,
    overflow = "overlay",
    scrollHideDelay = 1000,
    onScrollPositionChange,
    ...rest
  }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isScrolling, setIsScrolling] = useState<boolean>(false)
    const isAlways = type === "always"
    const isNever = type === "never"
    const isSafari = isMac() && vendor(/apple/i)

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

    const css: CSSObject = useMemo(() => {
      const baseStyle = { overflow, ...style }

      if (isNever) {
        return merge(baseStyle, neverStyles)
      } else {
        return merge(
          baseStyle,
          !isAlways && !isHovered && !isScrolling ? hiddenStyles : {},
        )
      }
    }, [isAlways, isHovered, isNever, isScrolling, overflow, style])

    const { children, innerProps, ...computedProps } = useMemo(
      () => ({
        style: css,
        ...rest,
        onMouseEnter: handlerAll(rest.onMouseEnter, onMouseEnter),
        onMouseLeave: handlerAll(rest.onMouseLeave, onMouseLeave),
        onScroll: handlerAll(rest.onScroll, onScroll),
      }),
      [onMouseEnter, onMouseLeave, onScroll, rest, css],
    )

    const computedChildren = innerProps ? (
      <InternalScrollArea {...innerProps}>{children}</InternalScrollArea>
    ) : (
      children
    )

    if (isSafari) {
      const componentKey = `${isHovered}-${isScrolling}`

      return (
        <ui.div
          key={componentKey}
          ref={mergeRefs(ref, scrollAreaRef)}
          data-hovered={dataAttr(isHovered)}
          data-key={componentKey}
          data-scrolling={dataAttr(isScrolling)}
          tabIndex={0}
          {...computedProps}
        >
          {computedChildren}
        </ui.div>
      )
    } else {
      return (
        <ui.div
          ref={ref}
          data-hovered={dataAttr(isHovered)}
          data-scrolling={dataAttr(isScrolling)}
          tabIndex={0}
          {...computedProps}
        >
          {computedChildren}
        </ui.div>
      )
    }
  },
  "root",
)()

interface InternalScrollAreaProps extends HTMLUIProps {}

const InternalScrollArea = withContext<"div", InternalScrollAreaProps>(
  "div",
  "inner",
)()
