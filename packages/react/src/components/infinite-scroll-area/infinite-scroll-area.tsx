import type { ReactNode } from "react"
import type { CSSUIObject, HTMLUIProps, ThemeProps } from "../../core"
import type { UseInfiniteScrollProps } from "../../hooks/use-infinite-scroll"
import { useRef } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll"
import { createContext, cx, mergeRefs } from "../../utils"

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
      disabled,
      finish: finishProp,
      indexRef,
      initialLoad,
      loading,
      orientation,
      resetRef,
      reverse,
      rootMargin,
      rootRef: rootRefProp,
      startIndex,
      threshold,
      triggerProps,
      onLoad,
      ...rest
    } = omitThemeProps(mergedProps)
    const vertical = orientation === "vertical"
    const rootRef = useRef<HTMLDivElement>(null)
    const { ref: triggerRef, finish } = useInfiniteScroll({
      disabled,
      indexRef,
      initialLoad,
      orientation,
      resetRef,
      reverse,
      rootMargin,
      rootRef: rootRefProp ?? rootRef,
      startIndex,
      threshold,
      onLoad,
    })
    const hasFinish = !!finishProp
    const showTrigger = !disabled && (hasFinish || !finish)

    return (
      <InfiniteScrollAreaProvider value={styles}>
        <ui.div
          ref={mergeRefs(rootRef, ref)}
          className={cx("ui-infinite-scroll-area", className)}
          aria-busy="false"
          role="feed"
          __css={{
            flexDirection: vertical ? "column" : "row",
            ...styles.container,
          }}
          {...rest}
        >
          {reverse && showTrigger ? (
            <InfiniteScrollTrigger ref={triggerRef} {...triggerProps}>
              {finish ? finishProp : loading}
            </InfiniteScrollTrigger>
          ) : null}

          {children}

          {!reverse && showTrigger ? (
            <InfiniteScrollTrigger ref={triggerRef} {...triggerProps}>
              {finish ? finishProp : loading}
            </InfiniteScrollTrigger>
          ) : null}
        </ui.div>
      </InfiniteScrollAreaProvider>
    )
  },
)

InfiniteScrollArea.displayName = "InfiniteScrollArea"
InfiniteScrollArea.__ui__ = "InfiniteScrollArea"

interface InfiniteScrollTriggerProps extends HTMLUIProps {}

const InfiniteScrollTrigger = forwardRef<InfiniteScrollTriggerProps, "div">(
  ({ className, ...rest }, ref) => {
    const styles = useInfiniteScrollAreaContext()

    return (
      <ui.div
        ref={ref}
        className={cx("ui-infinite-scroll-area__trigger", className)}
        __css={styles.trigger}
        {...rest}
      />
    )
  },
)

InfiniteScrollTrigger.displayName = "InfiniteScrollTrigger"
InfiniteScrollTrigger.__ui__ = "InfiniteScrollTrigger"
