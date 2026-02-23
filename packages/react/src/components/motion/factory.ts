import type { FC } from "react"
import type { DOMElement, StyledOptions } from "../../core"
import type { MotionStyledComponent } from "./index.types"
import { motion as originalMotion } from "motion/react"
import { styled } from "../../core"

type ProxyTarget = (el: DOMElement, options?: StyledOptions) => unknown

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
  const cache = new Map<DOMElement, FC>()
  const target: ProxyTarget = (el, options) => styled(el, options)

  return new Proxy(target, {
    apply: function (
      _target,
      _thisArg,
      [el, options]: [DOMElement, StyledOptions],
    ) {
      const component = styled(el, options) as FC

      return originalMotion.create(component)
    },

    get: function (_target, el: DOMElement) {
      if (!cache.has(el)) {
        const component = styled(el) as FC

        cache.set(el, originalMotion.create(component) as FC)
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
