import type { FunctionInterpolation } from "@emotion/styled"
import type { ComponentType } from "react"
import type { Dict } from "../utils"
import type {
  As,
  FC,
  InterpolationProps,
  ShouldForwardProp,
  StyledOptions,
  UIComponent,
} from "./components"
import type {
  CSSModifierObject,
  CSSObject,
  CSSPropObject,
  CSSProps,
} from "./css"
import type { ColorScheme } from "./theme"
import createStyled from "@emotion/styled"
import {
  createContext,
  filterEmpty,
  filterObject,
  filterUndefined,
  interopDefault,
  toArray,
} from "../utils"
import {
  createShouldForwardProp,
  getClassName,
  getDisplayName,
  useComponentStyle,
} from "./components"
import { css, mergeCSS } from "./css"
import { pseudos } from "./pseudos"
import { styles } from "./styles"

const emotionStyled = interopDefault(createStyled)

const styleProps = { ...styles, ...pseudos }

interface ToCSSObjectOptions
  extends Pick<StyledOptions, "base" | "forwardProps"> {}

export function toCSSObject({
  base,
  forwardProps,
}: ToCSSObjectOptions): FunctionInterpolation<InterpolationProps> {
  return function (props: InterpolationProps) {
    const { css: themeStyles, theme, ...rest } = props
    const propsStyle = filterObject<CSSProps, CSSObject>(
      rest,
      (prop) => prop in styleProps,
    )

    const result = filterEmpty([
      base,
      ...toArray(themeStyles),
      filterUndefined(propsStyle),
    ]).map((cssObj) => css(cssObj)(theme, forwardProps))

    return result
  }
}

export const [ColorSchemeContext, useColorSchemeContext] =
  createContext<ColorScheme>({
    name: "ColorSchemeContext",
    strict: false,
  })

export function styled<
  Y extends As,
  M extends object = {},
  D extends CSSPropObject = CSSPropObject,
  H extends CSSModifierObject = CSSModifierObject,
  R extends CSSModifierObject = CSSModifierObject,
>(
  el: Y,
  {
    name = "",
    target,
    className = getClassName(name),
    base,
    label,
    shouldForwardProp: shouldForwardPropOption,
    forwardProps,
    transferProps,
    ...style
  }: StyledOptions<D, H, R, keyof M> = {},
): UIComponent<Y, M> {
  const displayName = getDisplayName(name, "")
  let shouldForwardProp: ShouldForwardProp | undefined = undefined

  if (!shouldForwardPropOption)
    shouldForwardProp = createShouldForwardProp(forwardProps)

  const CSSObject = toCSSObject({ base, forwardProps })

  const ProxyComponent = emotionStyled(el as ComponentType, {
    target,
    label,
    shouldForwardProp,
  })(CSSObject)

  const StyledComponent: FC<Dict> = (props) => {
    const colorScheme = useColorSchemeContext()
    const { css, ...rest } = useComponentStyle<any, {}>(props, {
      className,
      style,
      transferProps,
    })

    rest.colorScheme ??= colorScheme

    return (
      <ColorSchemeContext.Provider value={rest.colorScheme}>
        <ProxyComponent {...rest} css={mergeCSS(css, props.css)} />
      </ColorSchemeContext.Provider>
    )
  }

  StyledComponent.displayName = displayName || "StyledComponent"

  if (name) StyledComponent.__ui__ = displayName

  return StyledComponent as unknown as UIComponent<Y, M>
}
