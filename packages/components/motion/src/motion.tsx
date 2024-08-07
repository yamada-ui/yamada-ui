import { ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { motion } from "framer-motion"
import { motionForwardRef } from "./motion-forward-ref"
import type { MotionProps } from "./motion.types"

/**
 * `Motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see Docs https://yamada-ui.com/components/other/motion
 */
export const Motion = motionForwardRef<MotionProps, "div">(
  ({ as, className, ...rest }, ref) => {
    return (
      <ui.div
        as={motion[as ?? "div"]}
        ref={ref}
        className={cx("ui-motion", className)}
        {...rest}
      />
    )
  },
)

Motion.displayName = "Motion"
