import type { Component } from "../../core"
import type { SkeletonProps } from "./skeleton"
import { mergeCSS } from "../../core"
import { Skeleton } from "./skeleton"

export interface SkeletonCircleProps extends SkeletonProps {}

export const SkeletonCircle = (({ css, ...rest }: SkeletonCircleProps) => {
  return (
    <Skeleton
      css={mergeCSS(css, { "--height": "sizes.10", "--width": "sizes.10" })}
      _loading={{ rounded: "full" }}
      {...rest}
    />
  )
}) as Component<"div", SkeletonCircleProps>
