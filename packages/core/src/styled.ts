import type { FunctionInterpolation } from "@emotion/styled"
import createStyled from "@emotion/styled"
import type { Dict } from "@yamada-ui/utils"
import {
  filterObject,
  runIfFunc,
  assignAfter,
  filterUndefined,
  interopDefault,
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
import type { CSSUIProps } from "./css"
import { css } from "./css"
import { useColorMode } from "./providers"
import { pseudos } from "./pseudos"
import { styles } from "./styles"

const emotionStyled = interopDefault(createStyled)

const styleProps = { ...styles, ...pseudos }

type ToCSSObject = {
  (
    options: Pick<StyledOptions, "baseStyle" | "disableStyleProp">,
  ): FunctionInterpolation<StyledResolverProps>
}

export const toCSSObject: ToCSSObject =
  ({ baseStyle, disableStyleProp }) =>
  (props: StyledResolverProps) => {
    const { theme, css: customCSS, __css, sx, ...rest } = props
    const propsCSS = filterObject<Dict, CSSUIProps>(
      rest,
      (prop) => prop in styleProps,
    )
    const baseCSS = runIfFunc(baseStyle, props)

    const computedCSS = css(
      assignAfter({}, __css, baseCSS, filterUndefined(propsCSS), sx),
    )(theme, disableStyleProp)

    return customCSS ? [computedCSS, customCSS] : computedCSS
  }

export const styled = <T extends As, P extends object = {}>(
  el: T,
  { baseStyle, disableStyleProp, ...styledOptions }: StyledOptions = {},
) => {
  if (!styledOptions.shouldForwardProp)
    styledOptions.shouldForwardProp = shouldForwardProp(disableStyleProp)

  const CSSObject = toCSSObject({ baseStyle, disableStyleProp })

  const Component = emotionStyled(el as ComponentType, styledOptions)(CSSObject)

  const UIComponent = forwardRef<HTMLElement, any>((props, ref) => {
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
