import { PortalProps } from '@yamada-ui/portal'
import { Dict, StringLiteral, Union } from '@yamada-ui/utils'
import type { Variants } from 'framer-motion'
import { ReactNode } from 'react'
import {
  UIStyle,
  ThemeProps,
  AnalyzeBreakpointsReturn,
  CSSUIProps,
  CSSUIObject,
  UIMultiStyle,
} from './css'
import { GeneratedTheme } from './generated-theme.types'
import { UITheme } from './ui-theme.types'

export type ThemeScheme = Union<string | number>

export type LoadingVariant = 'oval' | 'grid' | 'audio' | 'dots' | 'puff' | 'rings' | 'circles'

export type NoticePlacement =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'

export type NoticeStatus = 'warning' | 'info' | 'success' | 'error' | 'loading'

export type NoticeComponentProps = NoticeConfigOptions & { onClose: () => void }

export type NoticeConfigOptions = ThemeProps<'Alert'> & {
  placement?: NoticePlacement
  duration?: number | null
  limit?: number
  status?: NoticeStatus
  icon?: {
    variant?: LoadingVariant
    color?: CSSUIProps['color']
    children?: ReactNode
  }
  title?: ReactNode
  description?: ReactNode
  component?: (props: NoticeComponentProps) => ReactNode
  isClosable?: boolean
  style?: CSSUIObject
}

export type LoadingComponentProps = {
  initialState?: boolean
  icon: LoadingConfigOptions['icon']
  text: LoadingConfigOptions['text']
  timeout: number | null
  message: ReactNode | undefined
  onFinish: () => void
}

type LoadingConfigOptions = {
  initialState?: boolean
  icon?: {
    variant?: LoadingVariant
    color?: CSSUIProps['color']
    secondaryColor?: CSSUIProps['color']
    size?: CSSUIProps['boxSize']
  }
  text?: {
    fontFamily?: CSSUIProps['fontFamily']
    color?: CSSUIProps['color']
    fontSize?: CSSUIProps['fontSize']
    fontWeight?: CSSUIProps['fontWeight']
    letterSpacing?: CSSUIProps['letterSpacing']
    lineHeight?: CSSUIProps['letterSpacing']
  }
  timeout?: number | null
  component?: (props: LoadingComponentProps) => ReactNode
  allowPinchZoom?: boolean
  blockScrollOnMount?: boolean
  appendToParentPortal?: PortalProps['appendToParentPortal']
  containerRef?: PortalProps['containerRef']
}

export type ThemeConfig = {
  initialThemeScheme?: string | number
  initialColorMode?: 'light' | 'dark' | 'system'
  useSystemColorMode?: boolean
  disableTransitionOnChange?: boolean
  date?: {
    locale?: string
  }
  var?: {
    prefix?: StringLiteral
  }
  notice?: {
    options?: NoticeConfigOptions
    variants?: Variants
    gap?: CSSUIProps['gap']
    appendToParentPortal?: PortalProps['appendToParentPortal']
    containerRef?: PortalProps['containerRef']
  }
  loading?: {
    screen?: LoadingConfigOptions
    page?: LoadingConfigOptions
    background?: LoadingConfigOptions
    custom?: LoadingConfigOptions
  }
}

export type LayerStyles = Record<string, UIStyle>
export type TextStyles = Record<string, UIStyle>
export type Components = Record<string, ComponentStyle | ComponentMultiStyle>
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
  gradients?: ThemeTokens
  transitions?: { property?: ThemeTokens; duration?: ThemeTokens; easing?: ThemeTokens }
  components?: Components
  semantics?: Semantics
  [key: string]: any
}

export type ComponentBaseStyle = UIStyle | Record<string, UIStyle>
export type ComponentVariants = Record<string, UIStyle | Record<string, UIStyle>>
export type ComponentSizes = Record<string, UIStyle | Record<string, UIStyle>>
export type ComponentDefaultProps<
  Y extends Dict = Dict,
  M extends keyof Theme['components'] | unknown = unknown,
> = Omit<Y, 'variant' | 'size' | 'colorScheme'> & {
  variant?: ThemeProps<M>['variant']
  size?: ThemeProps<M>['size']
  colorScheme?: ThemeProps<M>['colorScheme']
}

export type ComponentStyle<Y extends Dict = Dict> = {
  baseStyle?: ComponentBaseStyle
  sizes?: ComponentSizes
  variants?: ComponentVariants
  defaultProps?: ComponentDefaultProps<Y>
}

export type ComponentMultiBaseStyle = UIMultiStyle
export type ComponentMultiVariants = Record<string, UIMultiStyle>
export type ComponentMultiSizes = Record<string, UIMultiStyle>

export type ComponentMultiStyle = {
  baseStyle?: ComponentMultiBaseStyle
  sizes?: ComponentMultiSizes
  variants?: ComponentMultiVariants
  defaultProps?: ComponentDefaultProps
}

export type CSSMap = Dict<{ value: any; var: string; ref: string }>

export type CustomTheme = {}

export type Theme = CustomTheme extends UITheme ? CustomTheme : GeneratedTheme

export type StyledTheme<T> = T & {
  __config: ThemeConfig
  __cssVars: Dict
  __cssMap: CSSMap
  __breakpoints: AnalyzeBreakpointsReturn
}
