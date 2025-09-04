import type { ComponentType } from "react"
import type { DOMElement, StyledOptions } from "../../core"
import type { MotionStyledComponent } from "./index.types"
import { motion as _motion } from "motion/react"
import { styled } from "../../core"

type Components = {
  [Y in DOMElement]: MotionStyledComponent<Y>
}

interface Factory extends Components {
  <Y extends DOMElement = DOMElement, M extends object = {}>(
    el: Y,
    options?: StyledOptions,
  ): MotionStyledComponent<Y, M>
}

function factory() {
  const cache = new Map<DOMElement, ComponentType<any>>()

  return new Proxy(styled, {
    apply: function (
      _target,
      _thisArg,
      [el, options]: [DOMElement, StyledOptions],
    ) {
      const component = styled(el, options) as ComponentType<any>

      return _motion.create(component)
    },

    get: function (_target, el: DOMElement) {
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
 * @see https://yamada-ui.com/docs/components/motion
 */
export const motion = factory()
