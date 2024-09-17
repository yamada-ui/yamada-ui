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
  InterpolationProps,
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

interface ToCSSObjectOptions
  extends Pick<StyledOptions, "baseStyle" | "disableStyleProp"> {}

export function toCSSObject({
  baseStyle,
  disableStyleProp,
}: ToCSSObjectOptions): FunctionInterpolation<InterpolationProps> {
  return function (props: InterpolationProps) {
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
}

export function styled<T extends As, P extends object = {}>(
  el: T,
  { baseStyle, disableStyleProp, ...styledOptions }: StyledOptions = {},
): UIComponent<T, P> {
  if (!styledOptions.shouldForwardProp)
    styledOptions.shouldForwardProp = shouldForwardProp(disableStyleProp)

  const CSSObject = toCSSObject({ baseStyle, disableStyleProp })

  const Component = emotionStyled(
    el as ComponentType<any>,
    styledOptions,
  )(CSSObject)

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
