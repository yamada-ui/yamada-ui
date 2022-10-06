import emotionStyled, { CSSObject, FunctionInterpolation } from '@emotion/styled'
import { ComponentType } from 'react'
import { css, isPropStyle } from '../functions'
import { StyledOptions, Dict, UIComponent, StyledResolverProps, As, CSSUIProps } from '../types'
import { filterObject, isArray, runIfFunc } from '../utils'

export type BaseStyle = CSSUIProps | ((props: StyledResolverProps) => CSSUIProps)

type ToCSSObject = {
  (options: { baseStyle?: BaseStyle }): FunctionInterpolation<StyledResolverProps>
}

export const toCSSObject: ToCSSObject =
  ({ baseStyle }) =>
  (props) => {
    const { theme, css: customCSS, __css, __sx, animation, ...rest } = props
    const propsCSS = filterObject<Dict, CSSUIProps>(rest, (prop, value) => isPropStyle(prop, value))
    const baseCSS = runIfFunc(baseStyle, props)

    const computedCSS = css({ ...__css, ...baseCSS, ...propsCSS, ...__sx })(theme)

    let result = [computedCSS]

    if (customCSS) result = [...result, customCSS]

    if (isArray(animation)) {
      result = [...result, ...(animation.filter(Boolean) as CSSObject[])]
    } else if (animation) {
      result = [...result, animation]
    }

    return result
  }

export const styled = <T extends As, P = {}>(element: T, options?: StyledOptions) => {
  const { baseStyle, ...styledOptions } = options ?? {}

  const CSSObject = toCSSObject({ baseStyle })

  return emotionStyled(
    element as ComponentType<any>,
    styledOptions,
  )(CSSObject) as unknown as UIComponent<T, P>
}
