import type { FC } from "../../core"
import type { Dict } from "../../utils"
import type { MotionProps } from "./motion.types"
import { motion } from "motion/react"
import { useMemo } from "react"
import { ui } from "../../core"
import { cx } from "../../utils"

const disableStyleProps = ["transition"]

const disableStyleProp = (prop: string) => disableStyleProps.includes(prop)

const Component = ui<"div", Dict>("div", { disableStyleProp })

/**
 * `Motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see Docs https://yamada-ui.com/components/other/motion
 */
export const Motion: FC<MotionProps> = ({
  ref,
  as: asProp = "div",
  className,
  ...rest
}) => {
  const as = useMemo(() => motion.create(asProp), [asProp])

  return (
    <Component
      ref={ref}
      as={as}
      className={cx("ui-motion", className)}
      {...rest}
    />
  )
}

Motion.__ui__ = "Motion"
