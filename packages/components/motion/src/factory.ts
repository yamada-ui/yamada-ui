import type { StyledOptions } from "@yamada-ui/core"
import type { ComponentType, ForwardRefExoticComponent } from "react"
import type { MotionAs, MotionComponents, MotionFactory } from "./motion.types"
import { styled } from "@yamada-ui/core"
import { motion as _motion } from "motion/react"

interface Factory extends MotionFactory, MotionComponents {}

function factory() {
  const cache = new Map<MotionAs, ComponentType<any>>()

  return new Proxy(styled, {
    apply: (_target, _thisArg, [el, options]: [MotionAs, StyledOptions]) => {
      const component = styled(el, options) as ForwardRefExoticComponent<any>

      return _motion.create(component)
    },

    get: (_target, el: MotionAs) => {
      if (!cache.has(el)) {
        const component = styled(el) as ForwardRefExoticComponent<any>

        cache.set(el, _motion.create(component))
      }

      return cache.get(el)
    },
  }) as Factory
}

/**
 * `motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see Docs https://yamada-ui.com/components/other/motion
 */
export const motion = factory()
