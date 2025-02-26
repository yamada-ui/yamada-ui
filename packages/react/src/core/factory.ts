import type { ComponentType, FC } from "react"
import type { As, DOMElement, UIComponent } from "./components"
import type { StyledOptions } from "./styled"
import { styled } from "./styled"

type Components = {
  [Y in DOMElement]: UIComponent<Y>
}

interface Factory extends Components {
  <Y extends As, M extends object = {}>(
    el: FC<M> | Y,
    options?: StyledOptions,
  ): UIComponent<Y, M>
}

function factory() {
  const cache = new Map<DOMElement, ComponentType>()

  return new Proxy(styled, {
    apply: (_target, _thisArg, [el, options]: [DOMElement, StyledOptions]) => {
      return styled(el, options)
    },

    get: (_target, el: DOMElement) => {
      if (!cache.has(el)) cache.set(el, styled(el))

      return cache.get(el)
    },
  }) as Factory
}

/**
 * `ui` is an object of JSX elements enabled with Yamada UI's style system,
 * and can also be used as a function for custom components to receive Yamada UI's style system.
 *
 * @see Docs https://yamada-ui.com/styled-system/ui
 */
export const ui = factory()
