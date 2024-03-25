import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx, handlerAll, merge } from "@yamada-ui/utils"
import type { UIEvent } from "react"
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
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
    className,
    type = "hover",
    overflow = "overlay",
    scrollHideDelay = 1000,
    onScrollPositionChange,
    children,
    innerProps,
    ...rest
  } = omitThemeProps(mergedProps)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const isAlways = type === "always"
  const isNever = type === "never"

  const hoverTimeout = useRef<any>(undefined)
  const scrollTimeout = useRef<any>(undefined)

  const scrollAreaRef = useRef<HTMLDivElement>(null) // Added the safari ref here
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) // Added the safari check here
  const rendercounter = useRef(0)
  const start = useRef(-1)
  const end = useRef(false)
  if (isSafari) rendercounter.current++
  const scrollPosition = useRef({ x: 0, y: 0 })
  useLayoutEffect(() => {
    if (scrollAreaRef.current && isSafari) {
      if (start.current === -1) {
        //Check when the operation starts and ends
        start.current = -2
      } else if (start.current === -2) {
        start.current = 0
      } else if (start.current === 1) {
        end.current = true
        start.current = 0
      } else {
        end.current = false
        start.current++
      }
      scrollAreaRef.current.scrollLeft = scrollPosition.current.x //Set the scroll position artificially
      scrollAreaRef.current.scrollTop = scrollPosition.current.y
    }
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
      onScrollPositionChange?.({
        x: (ev.target as HTMLDivElement).scrollLeft,
        y: (ev.target as HTMLDivElement).scrollTop,
      })
      scrollPosition.current = {
        x: (ev.target as HTMLDivElement).scrollLeft, //Save the scroll position
        y: (ev.target as HTMLDivElement).scrollTop,
      }
      if (end.current) {
        //Check if the operation has ended to avoid infinite loop
        end.current = false
        return
      }
      if (type !== "scroll") return

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

  if (isSafari) {
    //Added the safari check here, reduce computing for other browsers
    const componentKey = `${isHovered}-${isScrolling}`

    return (
      <ui.div
        key={componentKey} // Added the key here
        ref={scrollAreaRef}
        className={cx("ui-scroll-area", className)}
        tabIndex={0}
        __css={css}
        {...rest}
        onMouseEnter={handlerAll(rest.onMouseEnter, onMouseEnter)}
        onMouseLeave={handlerAll(rest.onMouseLeave, onMouseLeave)}
        onScroll={handlerAll(rest.onScroll, onScroll)}
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
  } else {
    return (
      <ui.div
        ref={ref}
        className={cx("ui-scroll-area", className)}
        tabIndex={0}
        __css={css}
        {...rest}
        onMouseEnter={handlerAll(rest.onMouseEnter, onMouseEnter)}
        onMouseLeave={handlerAll(rest.onMouseLeave, onMouseLeave)}
        onScroll={handlerAll(rest.onScroll, onScroll)}
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
  }
})
