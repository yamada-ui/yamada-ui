import type { FC } from "react"
import type { As, DOMElement, StyledComponent } from "../components"
import type { CSSModifierObject, CSSPropObject } from "../css"
import type { ComponentStyle, ThemeProps } from "./index.types"
import type { StyledOptions } from "./styled"
import { createStyled } from "./styled"

type ProxyTarget = (el: DOMElement, options?: StyledOptions) => unknown

type Components = {
  [Y in DOMElement]: StyledComponent<Y>
}

interface Factory extends Components {
  <
    Y extends As,
    M extends object = {},
    D extends CSSPropObject = CSSPropObject,
    H extends CSSModifierObject = CSSModifierObject,
    R extends CSSModifierObject = CSSModifierObject,
  >(
    el: FC<M> | Y,
    options?: StyledOptions<D, H, R, keyof M>,
  ): StyledComponent<Y, M & ThemeProps<ComponentStyle<D, H, R>>>
}

function factory() {
  const cache = new Map<DOMElement, FC>()
  const target: ProxyTarget = (el, options) => createStyled(el, options)

  return new Proxy(target, {
    apply: function (
      _target,
      _thisArg,
      [el, options]: [DOMElement, StyledOptions],
    ) {
      return createStyled(el, options)
    },

    get: function (_target, el: DOMElement): FC | undefined {
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
