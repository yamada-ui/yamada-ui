import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { UseInfiniteScrollProps } from "@yamada-ui/use-infinite-scroll"
import { useInfiniteScroll } from "@yamada-ui/use-infinite-scroll"
import { cx, mergeRefs } from "@yamada-ui/utils"
import type { ReactNode } from "react"
import { useMemo, useRef } from "react"

type InfiniteScrollAreaOptions = {
  /**
   * Props for infinite scroll area trigger component.
   */
  triggerProps?: HTMLUIProps<"div">
  /**
   * The infinite scroll area loading to use.
   */
  loading?: ReactNode
  /**
   * The infinite scroll area finish to use.
   */
  finish?: ReactNode
}

export type InfiniteScrollAreaProps = Omit<
  HTMLUIProps<"div">,
  keyof UseInfiniteScrollProps
> &
  UseInfiniteScrollProps &
  InfiniteScrollAreaOptions

/**
 * `InfiniteScrollArea` is for providing infinite scroll functionality.
 * This feature provides a smooth scrolling experience by automatically loading and displaying the next dataset when the user reaches the end of the page.
 *
 * @see Docs https://yamada-ui.com/components/data-display/infinite-scroll-area
 */
export const InfiniteScrollArea = forwardRef<InfiniteScrollAreaProps, "div">(
  (
    {
      rootRef: rootRefProp,
      orientation = "vertical",
      rootMargin,
      threshold,
      startIndex,
      onLoad,
      resetRef,
      indexRef,
      className,
      children,
      triggerProps,
      loading,
      finish,
      isDisabled,
      isReverse,
      initialLoad,
      ...rest
    },
    ref,
  ) => {
    const isVertical = orientation === "vertical"
    const rootRef = useRef<HTMLDivElement>(null)
    const { ref: triggerRef, isFinish } = useInfiniteScroll({
      orientation,
      rootRef: rootRefProp ?? rootRef,
      rootMargin,
      threshold,
      startIndex,
      onLoad,
      resetRef,
      indexRef,
      isDisabled,
      isReverse,
      initialLoad,
    })

    const css: CSSUIObject = useMemo(
      () => ({
        w: "100%",
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        gap: "1rem",
      }),
      [isVertical],
    )

    const hasFinish = !!finish
    const showTrigger = !isDisabled && (hasFinish || !isFinish)

    return (
      <ui.div
        ref={mergeRefs(rootRef, ref)}
        tabIndex={0}
        className={cx("ui-infinite-scroll-area", className)}
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
    )
  },
)

type InfiniteScrollTrigger = HTMLUIProps<"div">

const InfiniteScrollTrigger = forwardRef<InfiniteScrollTrigger, "div">(
  ({ className, ...rest }, ref) => {
    const css: CSSUIObject = useMemo(
      () => ({
        w: "100%",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }),
      [],
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
