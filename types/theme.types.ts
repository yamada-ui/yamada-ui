import { AnalyzeBreakpointsReturn } from '../functions'
import { DefaultTheme } from '../themes'
import { Dict, UIStyle, Path } from './'

export type UITheme = {
  layerStyles: string
  textStyles: string
  borders: string
  colors: string
  breakpoints: string
  fonts: string
  fontSizes: string
  fontWeights: string
  letterSpacings: string
  lineHeights: string
  radii: string
  shadows: string
  sizes: string
  spaces: string
  zIndices: string
  components: {
    [key: string]: {
      sizes: string
      variants: string
    }
  }
}

export type BaseTheme = {
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
    [K in keyof DefaultTheme['components']]: {
      sizes: keyof DefaultTheme['components'][K]['sizes']
      variants: keyof DefaultTheme['components'][K]['variants']
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

export type Theme = CustomTheme extends UITheme ? CustomTheme : BaseTheme

export type StyledTheme<T> = T & {
  __cssVars: Dict
  __cssMap: CSSMap
  __breakpoints: AnalyzeBreakpointsReturn
}
