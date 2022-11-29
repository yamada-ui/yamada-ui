import emotionStyled from '@emotion/styled'
import { filterObject, runIfFunc, Dict } from '@yamada-ui/utils'
import { ComponentType } from 'react'
import {
  CSSUIProps,
  css,
  FunctionInterpolation,
  StyledOptions,
  UIComponent,
  StyledResolverProps,
  styles,
  pseudos,
  As,
} from '.'

const styleProps = { ...styles, ...pseudos }

export const isPropStyle = (prop: string, value?: any): boolean =>
  value === undefined
    ? prop in styleProps
    : prop in styleProps && value !== null && value !== undefined

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
