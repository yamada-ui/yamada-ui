import { AnalyzeBreakpointsReturn } from '../functions'
import { DefaultTheme } from '../themes'
import { Dict, UIStyle, Union, Path } from './'

export type UITheme = {
  layerStyles: Path<DefaultTheme['styles']['layerStyles']>
  textStyles: Path<DefaultTheme['styles']['textStyles']>
  borders: Path<DefaultTheme['borders']>
  colors: Path<DefaultTheme['colors']>
  breakpoints: Path<DefaultTheme['breakpoints']>
  fonts: Path<DefaultTheme['fonts']>
  fontSizes: Path<DefaultTheme['fontSizes']>
  fontWeights: Path<DefaultTheme['fontWeights']>
  letterSpacings: Path<DefaultTheme['letterSpacings']>
  lineHeights: Path<DefaultTheme['lineHeights']>
  radii: Path<DefaultTheme['radii']>
  shadows: Path<DefaultTheme['shadows']>
  sizes: Path<DefaultTheme['sizes']>
  spaces: Path<DefaultTheme['spaces']>
  zIndices: Path<DefaultTheme['zIndices']>
  components: {
    [key: string]: {
      sizes: string
      variants: string
    }
  }
}

export type ExtendTheme = {
  styles?: {
    globalStyles?: UIStyle
    layoutStyles?: Record<string | number, UIStyle>
    textStyles?: Record<string | number, UIStyle>
  }
  borders?: Dict
  colors?: Dict
  breakpoints?: Dict
  fonts?: Dict
  fontSizes?: Dict
  fontWeights?: Dict
  letterSpacings?: Dict
  lineHeights?: Dict
  radii?: Dict
  shadows?: Dict
  sizes?: Dict
  spaces?: Dict
  zIndices?: Dict
  components?: Record<string, ComponentStyle>
  semantic?: Dict
}

export type ComponentStyle = {
  baseStyle?: UIStyle
  sizes?: Record<string | number, UIStyle>
  variants?: Record<string | number, UIStyle>
  defaultProps?: { size?: string | number; variant?: string | number }
}

export type CSSMap = Dict<{ value: any; var: string; ref: string }>

export type CustomTheme = {}

export type Theme = CustomTheme extends UITheme ? CustomTheme : UITheme

export type StyledTheme<T> = T & {
  __cssVars: Dict
  __cssMap: CSSMap
  __breakpoints: AnalyzeBreakpointsReturn
}
