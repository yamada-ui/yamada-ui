import type { FC } from "../../core"
import type { SkeletonProps } from "./skeleton"
import { cx, getValidChildren } from "../../utils"
import { Skeleton } from "./skeleton"

export interface SkeletonCircleProps extends SkeletonProps {}

export const SkeletonCircle: FC<SkeletonCircleProps> = ({
  className,
  boxSize = "{12, 3rem}",
  children,
  fitContent,
  ...rest
}) => {
  const validChildren = getValidChildren(children)
  const hasChildren = !!validChildren.length

  fitContent ??= hasChildren

  return (
    <Skeleton
      className={cx("ui-skeleton__circle", className)}
      fitContent={fitContent}
      rounded="{full, 9999px}"
      {...(!fitContent ? { boxSize } : {})}
      {...rest}
    >
      {validChildren}
    </Skeleton>
  )
}

SkeletonCircle.displayName = "SkeletonCircle"
SkeletonCircle.__ui__ = "SkeletonCircle"
