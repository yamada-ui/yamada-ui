import { PortalProps } from '@yamada-ui/portal'
import { Dict, StringLiteral } from '@yamada-ui/utils'
import type { Variants } from 'framer-motion'
import { FC, ReactNode } from 'react'
import {
  UIStyle,
  AnimationStyle,
  ThemeProps,
  AnalyzeBreakpointsReturn,
  CSSUIProps,
  CSSUIObject,
  UIMultiStyle,
} from './css'
import { GeneratedTheme } from './generated-theme.types'
import { UITheme } from './ui-theme.types'

export type LoadingVariant =
  | 'oval'
  | 'grid'
  | 'audio'
  | 'dots'
  | 'puff'
  | 'rings'
  | 'circles'

export type NoticePlacement =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'

export type AlertStatuses = Partial<
  Record<AlertStatus, { icon?: FC; colorScheme?: Theme['colorSchemes'] }>
>

export type AlertStatus = 'info' | 'success' | 'warning' | 'error' | 'loading'

export type NoticeComponentProps = NoticeConfigOptions & { onClose: () => void }

export type NoticeConfigOptions = ThemeProps<'Alert'> & {
  /**
   * The placement of the notice.
   *
   * @default 'top'
   */
  placement?: NoticePlacement
  /**
   * The number of `ms` the notice will continue to be displayed.
   *
   * If `null`, the notice will continue to display.
   * Please use in conjunction with `isClosable`.
   *
   * @default 5000
   */
  duration?: number | null
  /**
   * The maximum value at which notice will be displayed.
   */
  limit?: number
  /**
   * The status of the notice.
   *
   * @default 'info'
   */
  status?: AlertStatus
  /**
   * The loading icon to use.
   */
  icon?: {
    variant?: LoadingVariant
    /**
     * The CSS `color` property.
     */
    color?: CSSUIProps['color']
    children?: ReactNode
  }
  /**
   * The title of the notice.
   */
  title?: ReactNode
  /**
   * The description of the notice.
   */
  description?: ReactNode
  /**
   * The custom notice component to use.
   */
  component?: (props: NoticeComponentProps) => ReactNode
  /**
   * If `true`, allows the notice to be removed.
   *
   * @default false
   */
  isClosable?: boolean
  /**
   * The custom style to use.
   */
  style?: CSSUIObject
}

export type LoadingComponentProps = {
  initialState?: boolean
  icon: LoadingConfigOptions['icon']
  text: LoadingConfigOptions['text']
  duration: number | null
  message: ReactNode | undefined
  onFinish: () => void
}

export type LoadingConfigOptions = {
  /**
   * If `true`, loaded from the initial rendering.
   *
   * @default false
   */
  initialState?: boolean
  /**
   * Props for loading icon element.
   */
  icon?: {
    variant?: LoadingVariant
    /**
     * The CSS `color` property.
     */
    color?: CSSUIProps['color']
    /**
     * The CSS `color` property.
     */
    secondaryColor?: CSSUIProps['color']
    /**
     * The CSS `box-size` property.
     */
    size?: CSSUIProps['boxSize']
  }
  /**
   * Props for loading text element.
   */
  text?: {
    /**
     * The CSS `font-family` property.
     */
    fontFamily?: CSSUIProps['fontFamily']
    /**
     * The CSS `color` property.
     */
    color?: CSSUIProps['color']
    /**
     * The CSS `font-size` property.
     */
    fontSize?: CSSUIProps['fontSize']
    /**
     * The CSS `font-weight` property.
     */
    fontWeight?: CSSUIProps['fontWeight']
    /**
     * The CSS `letter-spacing` property.
     */
    letterSpacing?: CSSUIProps['letterSpacing']
    /**
     * The CSS `line-height` property.
     */
    lineHeight?: CSSUIProps['letterSpacing']
  }
  /**
   * The number of `ms` the loading will continue to be displayed.
   *
   * If `null`, the notice will continue to display.
   *
   * @default null
   */
  duration?: number | null
  /**
   * The custom loading component to use.
   */
  component?: (props: LoadingComponentProps) => ReactNode
  /**
   * Handle zoom or pinch gestures on iOS devices when scroll locking is enabled.
   *
   * @default false.
   */
  allowPinchZoom?: boolean
  /**
   * If `true`, scrolling will be disabled on the `body` when the modal opens.
   *
   * @default true
   */
  blockScrollOnMount?: boolean
  /**
   * If `true`, the portal will check if it is within a parent portal
   * and append itself to the parent's portal node.
   * This provides nesting for portals.
   *
   * If `false`, the portal will always append to `document.body`
   * regardless of nesting. It is used to opt out of portal nesting.
   *
   * @default true
   */
  appendToParentPortal?: PortalProps['appendToParentPortal']
  /**
   * The `ref` to the component where the portal will be attached to.
   */
  containerRef?: PortalProps['containerRef']
}

export type ThemeConfig = {
  /**
   * The initial theme scheme.
   * This is only applicable if multiple themes are provided.
   *
   * @default 'base'
   */
  initialThemeScheme?: Theme['themeSchemes']
  /**
   * The initial color mode.
   * If `system`, the system will apply the color mode.
   *
   * @default 'light'
   */
  initialColorMode?: 'light' | 'dark' | 'system'
  /**
   * If `true`, temporarily disable transitions.
   * This is used to avoid unnecessary movements caused by transitions during color mode switching, for example.
   *
   * @default false
   */
  disableTransitionOnChange?: boolean
  /**
   * The config of the calendar or date picker etc.
   */
  date?: {
    /**
     * The locale of the calendar or date picker etc.
     * Check the docs to see the locale of possible modifiers you can pass.
     *
     * @see Doc https://day.js.org/docs/en/i18n/instance-locale
     * @default 'en'
     */
    locale?: string
  }
  /**
   * The config of CSS variables.
   */
  var?: {
    /**
     * The prefix to attach to variable names when converting each token of the theme to CSS variable names.
     *
     * @default 'ui'
     */
    prefix?: StringLiteral
  }
  /**
   * The config of the alert.
   */
  alert?: {
    /**
     * The statuses of the alert.
     */
    statuses?: AlertStatuses
  }
  /**
   * The config of the notice.
   */
  notice?: {
    /**
     * The options of the notice.
     */
    options?: NoticeConfigOptions
    /**
     * The variants of the notice.
     * Check the docs to see the variants of possible modifiers you can pass.
     *
     * @see Doc https://www.framer.com/motion/animation/#variants
     */
    variants?: Variants
    /**
     * The CSS `gap` property.
     *
     * @default 'md'
     */
    gap?: CSSUIProps['gap']
    /**
     * If `true`, the portal will check if it is within a parent portal
     * and append itself to the parent's portal node.
     * This provides nesting for portals.
     *
     * If `false`, the portal will always append to `document.body`
     * regardless of nesting. It is used to opt out of portal nesting.
     *
     * @default true
     */
    appendToParentPortal?: PortalProps['appendToParentPortal']
    /**
     * The `ref` to the component where the portal will be attached to.
     */
    containerRef?: PortalProps['containerRef']
  }
  /**
   * The config of the loading.
   */
  loading?: {
    /**
     * The options of the screen loading.
     */
    screen?: LoadingConfigOptions
    /**
     * The options of the page loading.
     */
    page?: LoadingConfigOptions
    /**
     * The options of the background loading.
     */
    background?: LoadingConfigOptions
    /**
     * The options of the custom loading.
     */
    custom?: LoadingConfigOptions
  }
}

export type LayerStyles = Record<string, UIStyle>
export type TextStyles = Record<string, UIStyle>
export type ThemeTokens = {
  [key: string | number]:
    | string
    | number
    | [string | number, string | number]
    | ThemeTokens
}
export type ThemeAnimationTokens = {
  [key: string | number]:
    | AnimationStyle
    | AnimationStyle[]
    | ThemeAnimationTokens
}
export type ThemeTransitionTokens = {
  property?: ThemeTokens
  duration?: ThemeTokens
  easing?: ThemeTokens
}
export type ThemeBreakpoints = { [key: string | number]: string | number }
export type ThemeSemantics = Omit<
  BaseTheme,
  | 'styles'
  | 'components'
  | 'semantics'
  | 'themeSchemes'
  | 'animation'
  | 'breakpoints'
> & { colorSchemes?: Partial<Record<string, Theme['colorSchemes']>> }
export type ThemeSchemes = Partial<
  Record<
    string,
    Omit<
      BaseTheme,
      'styles' | 'components' | 'themeSchemes' | 'breakpoints' | 'animation'
    >
  >
>
export type ThemeComponents = Record<
  string,
  ComponentStyle | ComponentMultiStyle
>

type BaseTheme = {
  styles?: {
    globalStyle?: UIStyle
    resetStyle?: UIStyle
    layerStyles?: LayerStyles
    textStyles?: TextStyles
    [key: string]: any
  }
  animations?: ThemeAnimationTokens
  blurs?: ThemeTokens
  borders?: ThemeTokens
  breakpoints?: ThemeBreakpoints
  colors?: ThemeTokens
  fonts?: ThemeTokens
  fontSizes?: ThemeTokens
  fontWeights?: ThemeTokens
  gradients?: ThemeTokens
  letterSpacings?: ThemeTokens
  lineHeights?: ThemeTokens
  radii?: ThemeTokens
  shadows?: ThemeTokens
  sizes?: ThemeTokens
  spaces?: ThemeTokens
  transitions?: ThemeTransitionTokens
  zIndices?: ThemeTokens
  semantics?: ThemeSemantics
  themeSchemes?: ThemeSchemes
  components?: ThemeComponents
}

export type UsageTheme = BaseTheme & {
  [key: string]: any
}

export type ComponentBaseStyle = UIStyle | Record<string, UIStyle>
export type ComponentVariants = Record<string, UIStyle>
export type ComponentSizes = Record<string, UIStyle>
export type ComponentDefaultProps<
  Y extends Dict = Dict,
  M extends keyof Theme['components'] | unknown = unknown,
> = Partial<Omit<Y, 'variant' | 'size' | 'colorScheme'>> & {
  variant?: ThemeProps<M>['variant']
  size?: ThemeProps<M>['size']
  colorScheme?: ThemeProps<M>['colorScheme']
}

export type ComponentStyle<Y extends Dict = Dict> = {
  /**
   * The base style of the component.
   */
  baseStyle?: ComponentBaseStyle
  /**
   * The sizes of the component.
   */
  sizes?: ComponentSizes
  /**
   * The variants of the component.
   */
  variants?: ComponentVariants
  /**
   * The default props of the component.
   */
  defaultProps?: ComponentDefaultProps<Y>
}

export type ComponentMultiBaseStyle = UIMultiStyle
export type ComponentMultiVariants = Record<string, UIMultiStyle>
export type ComponentMultiSizes = Record<string, UIMultiStyle>

export type ComponentMultiStyle<Y extends Dict = Dict> = {
  /**
   * The base style of the component.
   */
  baseStyle?: ComponentMultiBaseStyle
  /**
   * The sizes of the component.
   */
  sizes?: ComponentMultiSizes
  /**
   * The variants of the component.
   */
  variants?: ComponentMultiVariants
  /**
   * The default props of the component.
   */
  defaultProps?: ComponentDefaultProps<Y>
}

export type CSSMap = Dict<{ value: any; var: string; ref: string }>

export type CustomTheme = {}

export type Theme = CustomTheme extends UITheme ? CustomTheme : GeneratedTheme

export type ChangeThemeScheme = (themeScheme: Theme['themeSchemes']) => void

export type PropsTheme<T extends object = Dict> = T & {
  themeScheme: Theme['themeSchemes']
  changeThemeScheme: ChangeThemeScheme
  __config: ThemeConfig
  __cssVars: Dict
  __cssMap: CSSMap
  __breakpoints: AnalyzeBreakpointsReturn
}

export type StyledTheme<T extends object = Dict> = T & {
  __config: ThemeConfig
  __cssVars: Dict
  __cssMap: CSSMap
  __breakpoints: AnalyzeBreakpointsReturn
}
