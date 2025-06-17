import type { Dict } from "../../utils"
import type { HTMLMotionProps, MotionStyledComponent } from "./index.types"
import { motion } from "motion/react"
import { useMemo } from "react"
import { styled } from "../../core"
import { cx } from "../../utils"

const forwardProps = ["transition"]

const Component = styled<"div", Dict>("div", { forwardProps })

/**
 * `Motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see https://yamada-ui.com/components/motion
 */
export const Motion = (({
  ref,
  as: asProp = "div",
  className,
  ...rest
}: HTMLMotionProps) => {
  const as = useMemo(() => motion.create(asProp), [asProp])

  return (
    <Component
      ref={ref}
      as={as}
      className={cx("ui-motion", className)}
      {...rest}
    />
  )
}) as MotionStyledComponent<"div">
