import { Dict, StringLiteral, Union } from '@yamada-ui/utils'
import { GeneratedTheme } from './generated-theme.types'
import { UITheme } from './ui-theme.types'
import { UIStyle, ThemeProps, AnalyzeBreakpointsReturn } from './'

export type ThemeScheme = Union<string | number>

export type ThemeConfig = {
  initialThemeScheme?: string | number
  initialColorScheme?: 'light' | 'dark'
  useSystemColorScheme?: boolean
  var?: {
    prefix?: StringLiteral
  }
}

export type LayerStyles = Record<string, UIStyle>
export type TextStyles = Record<string, UIStyle>
export type Components = Record<string, ComponentStyle>
export type Semantics = Omit<UsageTheme, 'styles' | 'components' | 'semantics'>

export type ThemeTokens = {
  [key: string | number]: string | number | [string | number, string | number] | ThemeTokens
}

export type UsageTheme = {
  styles?: {
    globalStyle?: UIStyle
    resetStyle?: UIStyle
    layerStyles?: LayerStyles
    textStyles?: TextStyles
  }
  borders?: ThemeTokens
  colors?: ThemeTokens
  breakpoints?: ThemeTokens
  fonts?: ThemeTokens
  fontSizes?: ThemeTokens
  fontWeights?: ThemeTokens
  letterSpacings?: ThemeTokens
  lineHeights?: ThemeTokens
  radii?: ThemeTokens
  shadows?: ThemeTokens
  sizes?: ThemeTokens
  spaces?: ThemeTokens
  zIndices?: ThemeTokens
  transitions?: { property?: ThemeTokens; duration?: ThemeTokens; easing?: ThemeTokens }
  components?: Components
  semantics?: Semantics
  [key: string]: any
}

export type ComponentBaseStyle = UIStyle | Record<string, UIStyle>
export type ComponentVariants = Record<string, UIStyle | Record<string, UIStyle>>
export type ComponentSizes = Record<string, UIStyle | Record<string, UIStyle>>
export type ComponentDefaultProps<Y extends keyof Theme['components'] | unknown = unknown> = {
  variant?: ThemeProps<Y>['variant']
  size?: ThemeProps<Y>['size']
  colorStyle?: ThemeProps<Y>['colorStyle']
}

export type ComponentStyle = {
  baseStyle?: ComponentBaseStyle
  sizes?: ComponentSizes
  variants?: ComponentVariants
  defaultProps?: ComponentDefaultProps
}

export type CSSMap = Dict<{ value: any; var: string; ref: string }>

export type CustomTheme = {}

export type Theme = CustomTheme extends UITheme ? CustomTheme : GeneratedTheme

export type StyledTheme<T> = T & {
  __cssVars: Dict
  __cssMap: CSSMap
  __breakpoints: AnalyzeBreakpointsReturn
}
