import type { FunctionInterpolation } from "@emotion/styled"
import type { ComponentType } from "react"
import type { Dict } from "../utils"
import type {
  As,
  InterpolationProps,
  StyledOptions,
  UIComponent,
} from "./components"
import type { CSSUIProps } from "./css"
import createStyled from "@emotion/styled"
import {
  assignAfter,
  filterObject,
  filterUndefined,
  interopDefault,
  runIfFunc,
} from "../utils"
import { shouldForwardProp } from "./components"
import { css } from "./css"
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
    const { css: customCSS, sx, theme, __css, ...rest } = props
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

  return Component as unknown as UIComponent<T, P>
}
