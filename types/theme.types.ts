import { AnalyzeBreakpointsReturn } from '../functions'
import { Dict, UIStyle, GeneratedTheme } from './'

export type UITheme = {
  layerStyles: string
  textStyles: string
  colorSchemes: string
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
  transitionsProperty: string
  transitionsDuration: string
  transitionsEasing: string
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
  transitions?: { property: Dict; duration: Dict; easing: Dict }
  components?: Record<string, ComponentStyle>
  semantic?: Dict
}

export type ComponentStyle = {
  baseStyle?: UIStyle
  sizes?: Record<string | number, UIStyle>
  variants?: Record<string | number, UIStyle>
  defaultProps?: { size?: string | number; variant?: string | number; colorScheme?: string }
}

export type CSSMap = Dict<{ value: any; var: string; ref: string }>

export type CustomTheme = {}

export type Theme = CustomTheme extends UITheme ? CustomTheme : GeneratedTheme

export type StyledTheme<T> = T & {
  __cssVars: Dict
  __cssMap: CSSMap
  __breakpoints: AnalyzeBreakpointsReturn
}
