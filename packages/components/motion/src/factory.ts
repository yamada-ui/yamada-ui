import { styled, type StyledOptions } from "@yamada-ui/core"
import { motion as _motion } from "framer-motion"
import type { ComponentType } from "react"
import type { MotionAs, MotionComponents, MotionFactory } from "./motion.types"

const factory = () => {
  const cache = new Map<MotionAs, ComponentType>()

  return new Proxy(styled, {
    apply: (_target, _thisArg, [el, options]: [MotionAs, StyledOptions]) => {
      return _motion(styled(el, options) as ComponentType)
    },

    get: (_target, el: MotionAs) => {
      if (!cache.has(el)) cache.set(el, _motion(styled(el) as ComponentType))

      return cache.get(el)
    },
  }) as MotionFactory & MotionComponents
}

/**
 * `motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see Docs https://yamada-ui.com/components/other/motion
 */
export const motion = factory()
