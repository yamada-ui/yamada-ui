import type { ComponentType } from "react"
import type { DOMElement, StyledOptions } from "../../core"
import type { MotionStyledComponent } from "./index.types"
import { motion as _motion } from "motion/react"
import { styled } from "../../core"

type Components = {
  [Y in DOMElement]: MotionStyledComponent<Y>
}

interface Factory extends Components {
  <T extends DOMElement = DOMElement, M extends object = {}>(
    el: T,
    options?: StyledOptions,
  ): MotionStyledComponent<T, M>
}

function factory() {
  const cache = new Map<DOMElement, ComponentType<any>>()

  return new Proxy(styled, {
    apply: (_target, _thisArg, [el, options]: [DOMElement, StyledOptions]) => {
      const component = styled(el, options)

      return _motion.create(component)
    },

    get: (_target, el: DOMElement) => {
      if (!cache.has(el)) {
        const component = styled(el) as ComponentType<any>

        cache.set(el, _motion.create(component))
      }

      return cache.get(el)
    },
  }) as Factory
}

/**
 * `motion` is a component that allows for the easy implementation of a wide variety of animations.
 *
 * @see Docs https://yamada-ui.com/components/motion
 */
export const motion = factory()
