import createStyled, { FunctionInterpolation } from '@emotion/styled'
import { filterObject, runIfFunc, Dict, assignAfter, filterUndefined } from '@yamada-ui/utils'
import { ComponentType, createElement, forwardRef } from 'react'
import { StyledOptions, UIComponent, StyledResolverProps, As } from './components'
import { CSSUIProps, css, CSSUIObject, shouldForwardProp } from './css'
import { useColorScheme } from './providers'
import { styles, pseudos } from './styles'

const emotionStyled = ((createStyled as any).default ?? createStyled) as typeof createStyled

const styleProps = { ...styles, ...pseudos }

export type BaseStyle = CSSUIObject | ((props: StyledResolverProps) => CSSUIObject)

type ToCSSObject = {
  (options: { baseStyle?: BaseStyle }): FunctionInterpolation<StyledResolverProps>
}

export const toCSSObject: ToCSSObject =
  ({ baseStyle }) =>
  (props: StyledResolverProps) => {
    const { theme, css: customCSS, __css, sx, ...rest } = props
    const propsCSS = filterObject<Dict, CSSUIProps>(rest, (prop) => prop in styleProps)
    const baseCSS = runIfFunc(baseStyle, props)

    const computedCSS = css(assignAfter({}, __css, baseCSS, filterUndefined(propsCSS), sx))(theme)

    return customCSS ? [computedCSS, customCSS] : computedCSS
  }

export const styled = <T extends As, P extends object = {}>(
  element: T,
  { baseStyle, ...styledOptions }: StyledOptions = {},
) => {
  if (!styledOptions.shouldForwardProp) styledOptions.shouldForwardProp = shouldForwardProp

  const CSSObject = toCSSObject({ baseStyle })

  const Component = emotionStyled(element as ComponentType<any>, styledOptions)(CSSObject)

  const UIComponent = forwardRef((props, ref) => {
    const { colorScheme, forced } = useColorScheme()

    return createElement(Component, {
      ref,
      'data-theme': forced ? colorScheme : undefined,
      ...props,
    })
  })

  UIComponent.displayName = 'UIComponent'

  return UIComponent as UIComponent<T, P>
}
