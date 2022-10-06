import { AnalyzeBreakpointsReturn } from '../functions'
import { DefaultTheme } from '../themes'
import { Dict, UIStyle, Union, Path } from './'

export type UITheme = {
  layerStyles: Union<Path<DefaultTheme['styles']['layerStyles']>>
  textStyles: Union<Path<DefaultTheme['styles']['textStyles']>>
  borders: Union<Path<DefaultTheme['borders']>>
  colors: Union<Path<DefaultTheme['colors']>>
  breakpoints: Union<Path<DefaultTheme['breakpoints']>>
  fonts: Union<Path<DefaultTheme['fonts']>>
  fontSizes: Union<Path<DefaultTheme['fontSizes']>>
  fontWeights: Union<Path<DefaultTheme['fontWeights']>>
  letterSpacings: Union<Path<DefaultTheme['letterSpacings']>>
  lineHeights: Union<Path<DefaultTheme['lineHeights']>>
  radii: Union<Path<DefaultTheme['radii']>>
  shadows: Union<Path<DefaultTheme['shadows']>>
  sizes: Union<Path<DefaultTheme['sizes']>>
  spaces: Union<Path<DefaultTheme['spaces']>>
  zIndices: Union<Path<DefaultTheme['zIndices']>>
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
