import type { FC } from "../../core"
import type { Dict } from "../../utils"
import type { MotionProps } from "./motion.types"
import { motion } from "motion/react"
import { ui } from "../../core"
import { cx } from "../../utils"

const forwardProps = ["transition"]

const Component = ui<"div", Dict>("div", { forwardProps })

/**
 * `Motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see Docs https://yamada-ui.com/components/other/motion
 */
export const Motion: FC<MotionProps> = ({
  ref,
  as = "div",
  className,
  ...rest
}) => (
  <Component
    ref={ref}
    as={motion.create(as)}
    className={cx("ui-motion", className)}
    {...rest}
  />
)

Motion.__ui__ = "Motion"
