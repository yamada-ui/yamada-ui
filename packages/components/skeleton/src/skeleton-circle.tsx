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
      fitContent = isFitContent,
      ...rest
    },
    ref,
  ) => {
    const validChildren = getValidChildren(children)
    const hasChildren = !!validChildren.length

    fitContent ??= hasChildren

    return (
      <Skeleton
        ref={ref}
        className={cx("ui-skeleton__circle", className)}
        fitContent={fitContent}
        rounded="fallback(full, 9999px)"
        {...(!fitContent ? { boxSize } : {})}
        {...rest}
      >
        {validChildren}
      </Skeleton>
    )
  },
)

SkeletonCircle.displayName = "SkeletonCircle"
SkeletonCircle.__ui__ = "SkeletonCircle"
