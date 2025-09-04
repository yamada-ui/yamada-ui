"use client"

import type { Dict } from "../../utils"
import type { HTMLMotionProps, MotionStyledComponent } from "./index.types"
import { motion } from "motion/react"
import { useMemo } from "react"
import { styled, useSystem } from "../../core"
import { cx } from "../../utils"

const forwardProps = ["transition"]

const Component = styled<"div", Dict>("div", { forwardProps })

/**
 * `Motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see https://yamada-ui.com/docs/components/motion
 */
export const Motion = (({
  ref,
  as: asProp = "div",
  className,
  ...rest
}: HTMLMotionProps) => {
  const system = useSystem()
  const as = useMemo(() => motion.create(asProp), [asProp])

  return (
    <Component
      ref={ref}
      as={as}
      className={cx(system.utils.getClassName("motion"), className)}
      {...rest}
    />
  )
}) as MotionStyledComponent<"div">
