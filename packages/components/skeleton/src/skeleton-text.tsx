import type { CSSUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import { cx } from "@yamada-ui/utils"
import type { SkeletonProps } from "./"
import { Skeleton } from "./"

type SkeletonTextOptions = {
  /**
   * The CSS `gap` property.
   */
  gap?: CSSUIProps["gap"]
  /**
   * The CSS `height` property.
   */
  textHeight?: CSSUIProps["height"]
}

export type SkeletonTextProps = Omit<SkeletonProps, "isFitContent"> &
  SkeletonTextOptions

export const SkeletonText = forwardRef<SkeletonTextProps, "div">(
  (
    {
      className,
      lineClamp = 3,
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
    const computedLineClamp = useValue(lineClamp)

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
        {Array(computedLineClamp)
          .fill(0)
          .map((_, index) => {
            if (isLoaded && index > 0) return null

            const isLast = index + 1 === computedLineClamp

            const props: SkeletonProps = !isLoaded
              ? {
                  mb: !isLast ? gap : undefined,
                  w:
                    computedLineClamp > 1 ? (!isLast ? "100%" : "80%") : "100%",
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
