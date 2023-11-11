import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx, handlerAll, merge } from "@yamada-ui/utils"
import {
  UIEvent,
  useCallback,
  useEffect,
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
}

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
  const [isScrolling, setisScrolling] = useState<boolean>(false)
  const isAlways = type === "always"
  const isNever = type === "never"

  const hoverTimeout = useRef<any>(undefined)
  const scrollTimeout = useRef<any>(undefined)

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

      if (type !== "scroll") return

      if (!isScrolling) setisScrolling(true)

      clearTimeout(scrollTimeout.current)

      scrollTimeout.current = setTimeout(
        () => setisScrolling(false),
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

  return (
    <ui.div
      ref={ref}
      className={cx("ui-scroll-area", className)}
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
})
