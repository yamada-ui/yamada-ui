import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import {
  cx,
  handlerAll,
  isMac,
  merge,
  mergeRefs,
  vendor,
} from "@yamada-ui/utils"
import type { UIEvent } from "react"
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"

type ScrollAreaOptions = {
  /**
   * Scrollbar visibility type.
   *
   * @default 'hover'
   */
  type?: "always" | "scroll" | "hover" | "never"
  /**
   * Props for inner element.
   */
  innerProps?: HTMLUIProps<"div">
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

export type ScrollAreaProps = HTMLUIProps<"div"> &
  ThemeProps<"ScrollArea"> &
  ScrollAreaOptions

const neverStyles: CSSUIObject = {
  scrollbarWidth: "none",
  _scrollbar: { display: "none" },
  "&::-webkit-scrollbar": { display: "none" },
}

const hiddenStyles: CSSUIObject = {
  _scrollbarTrack: { bg: "transparent" },
  "&::-webkit-scrollbar-track": { bg: "transparent" },
  _scrollbarThumb: { bg: "transparent" },
  "&::-webkit-scrollbar-thumb": { bg: "transparent" },
  _light: {
    _scrollbarTrack: { bg: "transparent" },
    "&::-webkit-scrollbar-track": { bg: "transparent" },
    _scrollbarThumb: { bg: "transparent" },
    "&::-webkit-scrollbar-thumb": { bg: "transparent" },
  },
  _dark: {
    _scrollbarTrack: { bg: "transparent" },
    "&::-webkit-scrollbar-track": { bg: "transparent" },
    _scrollbarThumb: { bg: "transparent" },
    "&::-webkit-scrollbar-thumb": { bg: "transparent" },
  },
  "@-moz-document url-prefix()": {
    scrollbarColor: "transparent transparent",
    _light: {
      scrollbarColor: "transparent transparent",
    },
    _dark: {
      scrollbarColor: "transparent transparent",
    },
  },
}

/**
 * `ScrollArea` is a component that displays a customized scrollbar.
 *
 * @see Docs https://yamada-ui.com/components/data-display/scroll-area
 */
export const ScrollArea = forwardRef<ScrollAreaProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("ScrollArea", props)
  const {
    type = "hover",
    overflow = "overlay",
    scrollHideDelay = 1000,
    onScrollPositionChange,
    ...rest
  } = omitThemeProps(mergedProps)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const isAlways = type === "always"
  const isNever = type === "never"
  const isSafari = isMac() && vendor(/apple/i)

  const hoverTimeout = useRef<any>(undefined)
  const scrollTimeout = useRef<any>(undefined)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const scrollPosition = useRef({ x: 0, y: 0 })

  useLayoutEffect(() => {
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

  const css: CSSUIObject = useMemo(() => {
    const baseStyle = { overflow, ...styles }

    if (isNever) {
      return merge(baseStyle, neverStyles)
    } else {
      return merge(
        baseStyle,
        !isAlways && !isHovered && !isScrolling ? hiddenStyles : {},
      )
    }
  }, [isAlways, isHovered, isNever, isScrolling, overflow, styles])

  const computedProps = useMemo(
    () => ({
      __css: css,
      ...rest,
      onMouseEnter: handlerAll(rest.onMouseEnter, onMouseEnter),
      onMouseLeave: handlerAll(rest.onMouseLeave, onMouseLeave),
      onScroll: handlerAll(rest.onScroll, onScroll),
    }),
    [css, onMouseEnter, onMouseLeave, onScroll, rest],
  )

  if (isSafari) {
    //Added the safari check here, reduce computing for other browsers
    const componentKey = `${isHovered}-${isScrolling}`

    return (
      <InternalScrollArea
        // Added the key here
        key={componentKey}
        ref={mergeRefs(ref, scrollAreaRef)}
        {...computedProps}
      />
    )
  } else {
    return <InternalScrollArea ref={ref} {...computedProps} />
  }
})

type InternalScrollAreaProps = HTMLUIProps<"div"> &
  Pick<ScrollAreaProps, "innerProps">

const InternalScrollArea = forwardRef<InternalScrollAreaProps, "div">(
  ({ className, innerProps, children, ...rest }, ref) => {
    return (
      <ui.div
        ref={ref}
        className={cx("ui-scroll-area", className)}
        tabIndex={0}
        {...rest}
      >
        {innerProps ? (
          <ui.div className="ui-scroll-area__inner" {...innerProps}>
            {children}
          </ui.div>
        ) : (
          children
        )}
      </ui.div>
    )
  },
)
