import { forwardRef } from "@yamada-ui/core"
import { cx, getValidChildren } from "@yamada-ui/utils"
import type { SkeletonProps } from "./"
import { Skeleton } from "./"

export type SkeletonCircleProps = SkeletonProps

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
        rounded="fallback(full, 9999px)"
        isFitContent={isFitContent}
        {...(!isFitContent ? { boxSize } : {})}
        {...rest}
      >
        {validChildren}
      </Skeleton>
    )
  },
)
