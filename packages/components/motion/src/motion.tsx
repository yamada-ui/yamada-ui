import { ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { motion } from "framer-motion"
import { motionForwardRef } from "./motion-forward-ref"
import type { MotionProps } from "./motion.types"

const disableStyleProps = ["transition"]

const disableStyleProp = (prop: string) => disableStyleProps.includes(prop)

const Component = ui<"div", MotionProps>("div", { disableStyleProp })

/**
 * `Motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see Docs https://yamada-ui.com/components/other/motion
 */
export const Motion = motionForwardRef<MotionProps, "div">(
  ({ as = "div", className, ...rest }, ref) => (
    <Component
      ref={ref}
      as={motion[as]}
      className={cx("ui-motion", className)}
      {...rest}
    />
  ),
)
