import type { CSSProps, FC } from "../../core"
import type { SkeletonProps } from "./skeleton"
import { ui } from "../../core"
import { useValue } from "../../hooks/use-value"
import { cx } from "../../utils"
import { Skeleton } from "./skeleton"

export interface SkeletonTextProps extends SkeletonProps {
  /**
   * The CSS `gap` property.
   */
  gap?: CSSProps["gap"]
  /**
   * The CSS `height` property.
   */
  textHeight?: CSSProps["height"]
}

export const SkeletonText: FC<SkeletonTextProps> = ({
  className,
  children,
  endColor,
  fadeDuration,
  gap = "{2, 0.5rem}",
  lineClamp: _lineClamp = 3,
  loaded,
  speed,
  startColor,
  textHeight = "{2, 0.5rem}",
  ...rest
}) => {
  const lineClamp = useValue(_lineClamp)

  return (
    <ui.div className={cx("ui-skeleton__text", className)} w="100%" {...rest}>
      {Array(lineClamp)
        .fill(0)
        .map((_, index) => {
          if (loaded && index > 0) return null

          const last = index + 1 === lineClamp

          const props: SkeletonProps = !loaded
            ? {
                h: textHeight,
                mb: !last ? gap : undefined,
                w: lineClamp > 1 ? (!last ? "100%" : "80%") : "100%",
              }
            : {}

          return (
            <Skeleton
              key={index}
              {...{
                endColor,
                fadeDuration,
                loaded,
                speed,
                startColor,
                ...props,
              }}
            >
              {index === 0 ? children : undefined}
            </Skeleton>
          )
        })}
    </ui.div>
  )
}

SkeletonText.displayName = "SkeletonText"
SkeletonText.__ui__ = "SkeletonText"
