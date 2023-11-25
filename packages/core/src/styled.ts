import type { FunctionInterpolation } from "@emotion/styled"
import createStyled from "@emotion/styled"
import type { Dict } from "@yamada-ui/utils"
import {
  filterObject,
  runIfFunc,
  assignAfter,
  filterUndefined,
} from "@yamada-ui/utils"
import type { ComponentType } from "react"
import { createElement, forwardRef } from "react"
import type {
  StyledOptions,
  UIComponent,
  StyledResolverProps,
  As,
} from "./components"
import { shouldForwardProp } from "./components"
import type { CSSUIProps, CSSUIObject } from "./css"
import { css } from "./css"
import { useColorMode } from "./providers"
import { styles, pseudos } from "./styles"

const emotionStyled = ((createStyled as any).default ??
  createStyled) as typeof createStyled

const styleProps = { ...styles, ...pseudos }

export type BaseStyle =
  | CSSUIObject
  | ((props: StyledResolverProps) => CSSUIObject)

type ToCSSObject = {
  (options: {
    baseStyle?: BaseStyle
  }): FunctionInterpolation<StyledResolverProps>
}

export const toCSSObject: ToCSSObject =
  ({ baseStyle }) =>
  (props: StyledResolverProps) => {
    const { theme, css: customCSS, __css, sx, ...rest } = props
    const propsCSS = filterObject<Dict, CSSUIProps>(
      rest,
      (prop) => prop in styleProps,
    )
    const baseCSS = runIfFunc(baseStyle, props)

    const computedCSS = css(
      assignAfter({}, __css, baseCSS, filterUndefined(propsCSS), sx),
    )(theme)

    return customCSS ? [computedCSS, customCSS] : computedCSS
  }

export const styled = <T extends As, P extends object = {}>(
  element: T,
  { baseStyle, ...styledOptions }: StyledOptions = {},
) => {
  if (!styledOptions.shouldForwardProp)
    styledOptions.shouldForwardProp = shouldForwardProp

  const CSSObject = toCSSObject({ baseStyle })

  const Component = emotionStyled(
    element as ComponentType<any>,
    styledOptions,
  )(CSSObject)

  const UIComponent = forwardRef((props, ref) => {
    const { colorMode, forced } = useColorMode()

    return createElement(Component, {
      ref,
      "data-mode": forced ? colorMode : undefined,
      ...props,
    })
  })

  UIComponent.displayName = "UIComponent"

  return UIComponent as UIComponent<T, P>
}
