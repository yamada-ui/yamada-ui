import { styled, type StyledOptions } from "@yamada-ui/core"
import { motion as _motion } from "framer-motion"
import type { ComponentType } from "react"
import type { MotionAs, MotionComponents, MotionFactory } from "./motion.types"

const disableStyleProps = ["transition"]

const disableStyleProp = (prop: string) => disableStyleProps.includes(prop)

const factory = () => {
  const cache = new Map<MotionAs, ComponentType>()

  return new Proxy(styled, {
    apply: (_target, _thisArg, [el, options]: [MotionAs, StyledOptions]) => {
      return styled(_motion(el), { disableStyleProp, ...options })
    },

    get: (_target, el: MotionAs) => {
      if (!cache.has(el))
        cache.set(el, styled(_motion(el), { disableStyleProp }))

      return cache.get(el)
    },
  }) as MotionFactory & MotionComponents
}

/**
 *
 */
export const motion = factory()
