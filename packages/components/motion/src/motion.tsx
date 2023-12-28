import type { HTMLUIProps, OmitProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { HTMLMotionProps } from "framer-motion"
import { motion } from "framer-motion"
import type { ReactHTML } from "react"
import type { MotionAs } from "./motion.types"

type UIProps = "children" | "color"

type MotionOptions = {
  as?: MotionAs
}

export type MotionProps<Y extends keyof ReactHTML = "div"> = OmitProps<
  HTMLUIProps<Y>,
  keyof Omit<HTMLMotionProps<Y>, UIProps>
> &
  Omit<HTMLMotionProps<Y>, UIProps> &
  MotionOptions

/**
 * `Motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see Docs https://yamada-ui.com/others/#motion
 */
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
