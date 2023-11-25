import type { HTMLUIProps, OmitProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { HTMLMotionProps } from "framer-motion"
import { motion } from "framer-motion"
import type { ReactHTML } from "react"

type MotionOptions = {
  as?: keyof typeof motion
}

export type MotionProps<Y extends keyof ReactHTML = "div"> = OmitProps<
  HTMLUIProps<Y>,
  keyof HTMLMotionProps<Y>
> &
  HTMLMotionProps<Y> &
  MotionOptions

export const Motion = forwardRef<MotionProps, "div", false>(
  ({ as = "div", className, ...rest }, ref) => {
    return (
      <ui.div
        as={motion[as]}
        ref={ref}
        className={cx("ui-motion", className)}
        {...rest}
      />
    )
  },
)
