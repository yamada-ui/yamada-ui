import type { WithoutAs } from "@yamada-ui/core"
import type { Merge } from "@yamada-ui/utils"
import * as React from "react"
import type { MotionComponent, MotionAs } from "./motion.types"

export const motionForwardRef = <Y extends object, M extends MotionAs>(
  component: React.ForwardRefRenderFunction<
    any,
    Merge<React.ComponentPropsWithoutRef<M>, WithoutAs<Y>> & {
      as?: MotionAs
    }
  >,
) => {
  return React.forwardRef(component) as unknown as MotionComponent<M, Y>
}
