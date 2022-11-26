import emotionStyled from '@emotion/styled'
import { CSSUIProps, css, isPropStyle, FunctionInterpolation } from '@yamada-ui/styled'
import { filterObject, runIfFunc, Dict } from '@yamada-ui/utils'
import { ComponentType } from 'react'
import { StyledOptions, UIComponent, StyledResolverProps, As } from './'

export type BaseStyle = CSSUIProps | ((props: StyledResolverProps) => CSSUIProps)

type ToCSSObject = {
  (options: { baseStyle?: BaseStyle }): FunctionInterpolation<StyledResolverProps>
}

export const toCSSObject: ToCSSObject =
  ({ baseStyle }) =>
  (props) => {
    const { theme, css: customCSS, __css, sx, ...rest } = props
    const propsCSS = filterObject<Dict, CSSUIProps>(rest, (prop, value) => isPropStyle(prop, value))
    const baseCSS = runIfFunc(baseStyle, props)

    const computedCSS = css({ ...__css, ...baseCSS, ...propsCSS, ...sx })(theme)

    return customCSS ? [computedCSS, customCSS] : computedCSS
  }

export const styled = <T extends As, P = {}>(
  element: T,
  { baseStyle, ...styledOptions }: StyledOptions = {},
) => {
  const CSSObject = toCSSObject({ baseStyle })

  return emotionStyled(
    element as ComponentType<any>,
    styledOptions,
  )(CSSObject) as unknown as UIComponent<T, P>
}
