import type { FC } from "../../core"
import type { SkeletonProps } from "./skeleton"
import { mergeCSS } from "../../core"
import { Skeleton } from "./skeleton"

export interface SkeletonCircleProps extends SkeletonProps {}

export const SkeletonCircle: FC<SkeletonCircleProps> = ({ css, ...rest }) => {
  return (
    <Skeleton
      css={mergeCSS(css, { "--height": "sizes.10", "--width": "sizes.10" })}
      _loading={{ rounded: "full" }}
      {...rest}
    />
  )
}
