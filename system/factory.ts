import { styled } from 'system'
import { UIFactory, DOMElements, StyledOptions, HTMLUIComponents, UIComponent } from 'types'

const factory = () => {
  const cache = new Map<DOMElements, UIComponent<DOMElements>>()

  return new Proxy(styled, {
    apply(target, thisArg, argArray: [DOMElements, StyledOptions]) {
      return styled(...argArray)
    },

    get(_, element: DOMElements) {
      if (!cache.has(element)) cache.set(element, styled(element))

      return cache.get(element)
    },
  }) as unknown as UIFactory & HTMLUIComponents
}

export const ui = factory()
