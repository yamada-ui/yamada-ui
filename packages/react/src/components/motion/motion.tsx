import type { ReactElement } from "react"
import type { ComponentArgs, DOMElement } from "../../core"
import type { Dict } from "../../utils"
import type { MotionProps } from "./index.types"
import { motion } from "motion/react"
import { useMemo } from "react"
import { ui } from "../../core"
import { cx } from "../../utils"

const forwardProps = ["transition"]

const Component = ui<"div", Dict>("div", { forwardProps })

/**
 * `Motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see Docs https://yamada-ui.com/components/other/motion
 */
export const Motion = (({
  ref,
  as: asProp = "div",
  className,
  ...rest
}: MotionProps) => {
  const as = useMemo(() => motion.create(asProp), [asProp])

  return (
    <Component
      ref={ref}
      as={as}
      className={cx("ui-motion", className)}
      {...rest}
    />
  )
}) as ComponentArgs & {
  <Y extends DOMElement = "div">(
    props: MotionProps<Y> & { as?: Y },
  ): ReactElement
}

Motion.__ui__ = "Motion"
