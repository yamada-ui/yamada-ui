import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { UseInfiniteScrollProps } from "../../hooks/use-infinite-scroll"
import type { InfiniteScrollAreaStyle } from "./infinite-scroll-area.style"
import { useRef } from "react"
import { createSlotComponent, styled } from "../../core"
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll"
import { mergeRefs } from "../../utils"
import { infiniteScrollAreaStyle } from "./infinite-scroll-area.style"

export interface InfiniteScrollAreaProps
  extends Omit<HTMLStyledProps, keyof UseInfiniteScrollProps>,
    UseInfiniteScrollProps,
    ThemeProps<InfiniteScrollAreaStyle> {
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
  triggerProps?: HTMLStyledProps
}

export const {
  PropsContext: InfiniteScrollAreaPropsContext,
  usePropsContext: useInfiniteScrollAreaPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<InfiniteScrollAreaProps, InfiniteScrollAreaStyle>(
  "infinite-scroll-area",
  infiniteScrollAreaStyle,
)

/**
 * `InfiniteScrollArea` is for providing infinite scroll functionality.
 * This feature provides a smooth scrolling experience by automatically loading and displaying the next dataset when the user reaches the end of the page.
 *
 * @see Docs https://yamada-ui.com/components/infinite-scroll-area
 */
export const InfiniteScrollArea = withProvider(
  ({
    ref,
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
  }) => {
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
      <styled.div
        ref={mergeRefs(rootRef, ref)}
        aria-busy="false"
        role="feed"
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
      </styled.div>
    )
  },
  "root",
  { transferProps: ["orientation"] },
)()

interface InfiniteScrollTriggerProps extends HTMLStyledProps {}

const InfiniteScrollTrigger = withContext<"div", InfiniteScrollTriggerProps>(
  "div",
  "trigger",
)()
