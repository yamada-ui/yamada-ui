import type { ComponentType, FC } from "react"
import type { As, DOMElement, StyledComponent } from "../components"
import type { StyledOptions } from "./styled"
import { createStyled } from "./styled"

type Components = {
  [Y in DOMElement]: StyledComponent<Y>
}

interface Factory extends Components {
  <Y extends As, M extends object = {}>(
    el: FC<M> | Y,
    options?: StyledOptions,
  ): StyledComponent<Y, M>
}

function factory() {
  const cache = new Map<DOMElement, ComponentType>()

  return new Proxy(createStyled, {
    apply: function (
      _target,
      _thisArg,
      [el, options]: [DOMElement, StyledOptions],
    ) {
      return createStyled(el, options)
    },

    get: function (_target, el: DOMElement): ComponentType | undefined {
      if (!cache.has(el)) cache.set(el, createStyled(el))

      return cache.get(el)
    },
  }) as Factory
}

/**
 * `styled` is an object of JSX elements enabled with Yamada UI's style system,
 * and can also be used as a function for custom components to receive Yamada UI's style system.
 *
 * @see https://yamada-ui.com/docs/components/styled
 */
export const styled = factory()
