import type { WithoutAs } from "@yamada-ui/core"
import type { Merge } from "@yamada-ui/utils"
import type { MotionAs, MotionComponent } from "./motion.types"
import * as React from "react"

export function motionForwardRef<Y extends object, M extends MotionAs>(
  render: React.ForwardRefRenderFunction<
    any,
    { as?: MotionAs } & Merge<React.ComponentPropsWithoutRef<M>, WithoutAs<Y>>
  >,
) {
  return React.forwardRef(
    render as React.ForwardRefRenderFunction<any>,
  ) as unknown as MotionComponent<M, Y>
}
