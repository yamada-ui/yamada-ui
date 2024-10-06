import type { SkeletonProps } from "./skeleton"
import { forwardRef } from "@yamada-ui/core"
import { cx, getValidChildren } from "@yamada-ui/utils"
import { Skeleton } from "./skeleton"

export interface SkeletonCircleProps extends SkeletonProps {}

export const SkeletonCircle = forwardRef<SkeletonCircleProps, "div">(
  (
    {
      className,
      boxSize = "fallback(12, 3rem)",
      children,
      isFitContent,
      ...rest
    },
    ref,
  ) => {
    const validChildren = getValidChildren(children)
    const hasChildren = !!validChildren.length

    isFitContent ??= hasChildren

    return (
      <Skeleton
        ref={ref}
        className={cx("ui-skeleton__circle", className)}
        isFitContent={isFitContent}
        rounded="fallback(full, 9999px)"
        {...(!isFitContent ? { boxSize } : {})}
        {...rest}
      >
        {validChildren}
      </Skeleton>
    )
  },
)

SkeletonCircle.displayName = "SkeletonCircle"
SkeletonCircle.__ui__ = "SkeletonCircle"
