import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { UseInfiniteScrollProps } from "@yamada-ui/use-infinite-scroll"
import type { ReactNode } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { useInfiniteScroll } from "@yamada-ui/use-infinite-scroll"
import { createContext, cx, mergeRefs } from "@yamada-ui/utils"
import { useMemo, useRef } from "react"

interface InfiniteScrollAreaContext {
  [key: string]: CSSUIObject | undefined
}

const [InfiniteScrollAreaProvider, useInfiniteScrollAreaContext] =
  createContext<InfiniteScrollAreaContext>({
    name: "InfiniteScrollAreaContext",
    errorMessage: `useInfiniteScrollAreaContext returned is 'undefined'. Seems you forgot to wrap the components in "<InfiniteScrollArea />"`,
  })

interface InfiniteScrollAreaOptions {
  /**
   * The infinite scroll area finish to use.
   */
  finish?: ReactNode
  /**
   * The infinite scroll area loading to use.
   */
  loading?: ReactNode
  /**
   * Props for infinite scroll area trigger component.
   */
  triggerProps?: HTMLUIProps
}

export interface InfiniteScrollAreaProps
  extends Omit<HTMLUIProps, keyof UseInfiniteScrollProps>,
    UseInfiniteScrollProps,
    ThemeProps<"InfiniteScrollArea">,
    InfiniteScrollAreaOptions {}

/**
 * `InfiniteScrollArea` is for providing infinite scroll functionality.
 * This feature provides a smooth scrolling experience by automatically loading and displaying the next dataset when the user reaches the end of the page.
 *
 * @see Docs https://yamada-ui.com/components/data-display/infinite-scroll-area
 */
export const InfiniteScrollArea = forwardRef<InfiniteScrollAreaProps, "div">(
  ({ orientation: _orientation = "vertical", ...props }, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("InfiniteScrollArea", {
      orientation: _orientation,
      ...props,
    })
    const {
      className,
      children,
      finish,
      indexRef,
      initialLoad,
      isDisabled,
      isReverse,
      loading,
      orientation,
      resetRef,
      rootMargin,
      rootRef: rootRefProp,
      startIndex,
      threshold,
      triggerProps,
      onLoad,
      ...rest
    } = omitThemeProps(mergedProps)
    const isVertical = orientation === "vertical"
    const rootRef = useRef<HTMLDivElement>(null)
    const { ref: triggerRef, isFinish } = useInfiniteScroll({
      indexRef,
      initialLoad,
      isDisabled,
      isReverse,
      orientation,
      resetRef,
      rootMargin,
      rootRef: rootRefProp ?? rootRef,
      startIndex,
      threshold,
      onLoad,
    })

    const css: CSSUIObject = useMemo(
      () => ({
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        gap: "1rem",
        w: "100%",
        ...styles.container,
      }),
      [isVertical, styles],
    )

    const hasFinish = !!finish
    const showTrigger = !isDisabled && (hasFinish || !isFinish)

    return (
      <InfiniteScrollAreaProvider value={styles}>
        <ui.div
          ref={mergeRefs(rootRef, ref)}
          className={cx("ui-infinite-scroll-area", className)}
          aria-busy="false"
          role="feed"
          __css={css}
          {...rest}
        >
          {isReverse && showTrigger ? (
            <InfiniteScrollTrigger ref={triggerRef} {...triggerProps}>
              {isFinish ? finish : loading}
            </InfiniteScrollTrigger>
          ) : null}

          {children}

          {!isReverse && showTrigger ? (
            <InfiniteScrollTrigger ref={triggerRef} {...triggerProps}>
              {isFinish ? finish : loading}
            </InfiniteScrollTrigger>
          ) : null}
        </ui.div>
      </InfiniteScrollAreaProvider>
    )
  },
)

interface InfiniteScrollTriggerProps extends HTMLUIProps {}

const InfiniteScrollTrigger = forwardRef<InfiniteScrollTriggerProps, "div">(
  ({ className, ...rest }, ref) => {
    const styles = useInfiniteScrollAreaContext()
    const css: CSSUIObject = useMemo(
      () => ({
        alignItems: "center",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        w: "100%",
        ...styles.trigger,
      }),
      [styles],
    )

    return (
      <ui.div
        ref={ref}
        className={cx("ui-infinite-scroll-area__trigger", className)}
        __css={css}
        {...rest}
      />
    )
  },
)
