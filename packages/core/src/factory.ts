import type {
  UIFactory,
  DOMElements,
  StyledOptions,
  HTMLUIComponents,
  UIComponent,
} from "./components"
import { styled } from "./styled"

const factory = () => {
  const cache = new Map<DOMElements, UIComponent<DOMElements>>()

  return new Proxy(styled, {
    apply: (target, thisArg, [el, options]: [DOMElements, StyledOptions]) => {
      return styled(el, options)
    },

    get: (target, el: DOMElements) => {
      if (!cache.has(el)) cache.set(el, styled(el))

      return cache.get(el)
    },
  }) as UIFactory & HTMLUIComponents
}

/**
 * `ui` is an object of JSX elements enabled with Yamada UI's style system,
 * and can also be used as a function for custom components to receive Yamada UI's style system.
 *
 * @see Docs https://yamada-ui.com/styled-system/ui
 */
export const ui = factory()
