import type { CSSUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import { cx } from "@yamada-ui/utils"
import type { SkeletonProps } from "./skeleton"
import { Skeleton } from "./skeleton"

interface SkeletonTextOptions {
  /**
   * The CSS `gap` property.
   */
  gap?: CSSUIProps["gap"]
  /**
   * The CSS `height` property.
   */
  textHeight?: CSSUIProps["height"]
}

export interface SkeletonTextProps
  extends Omit<SkeletonProps, "isFitContent">,
    SkeletonTextOptions {}

export const SkeletonText = forwardRef<SkeletonTextProps, "div">(
  (
    {
      className,
      lineClamp: _lineClamp = 3,
      startColor,
      endColor,
      fadeDuration,
      speed,
      isLoaded,
      gap = "fallback(2, 0.5rem)",
      textHeight = "fallback(2, 0.5rem)",
      children,
      ...rest
    },
    ref,
  ) => {
    const lineClamp = useValue(_lineClamp)

    const css: CSSUIObject = {
      w: "100%",
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-skeleton__text", className)}
        __css={css}
        {...rest}
      >
        {Array(lineClamp)
          .fill(0)
          .map((_, index) => {
            if (isLoaded && index > 0) return null

            const isLast = index + 1 === lineClamp

            const props: SkeletonProps = !isLoaded
              ? {
                  mb: !isLast ? gap : undefined,
                  w: lineClamp > 1 ? (!isLast ? "100%" : "80%") : "100%",
                  h: textHeight,
                }
              : {}

            return (
              <Skeleton
                key={index}
                {...{
                  startColor,
                  endColor,
                  fadeDuration,
                  speed,
                  isLoaded,
                  ...props,
                }}
              >
                {index === 0 ? children : undefined}
              </Skeleton>
            )
          })}
      </ui.div>
    )
  },
)

SkeletonText.displayName = "SkeletonText"
SkeletonText.__ui__ = "SkeletonText"