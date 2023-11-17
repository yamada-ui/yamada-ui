import { forwardRef } from "@yamada-ui/core"
import { cx, getValidChildren } from "@yamada-ui/utils"
import { Skeleton, SkeletonProps } from "./"

export type SkeletonCircleProps = SkeletonProps

export const SkeletonCircle = forwardRef<SkeletonCircleProps, "div">(
  ({ className, boxSize = "12", children, isFitContent, ...rest }, ref) => {
    const validChildren = getValidChildren(children)
    const hasChildren = !!validChildren.length

    isFitContent ??= hasChildren

    return (
      <Skeleton
        ref={ref}
        className={cx("ui-skeleton__circle", className)}
        rounded="full"
        isFitContent={isFitContent}
        {...(!isFitContent ? { boxSize } : {})}
        {...rest}
      >
        {validChildren}
      </Skeleton>
    )
  },
)
