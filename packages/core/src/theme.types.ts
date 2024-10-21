import type { PortalProps } from "@yamada-ui/portal"
import type { Dict, StringLiteral } from "@yamada-ui/utils"
import type {
  HTMLMotionProps,
  MotionConfigProps,
  Variants,
} from "framer-motion"
import type { FC, ReactNode, RefObject } from "react"
import type { HTMLUIProps } from "./components"
import type {
  AnalyzeBreakpointsReturn,
  AnimationStyle,
  CSSUIObject,
  CSSUIProps,
  ThemeProps,
  UIMultiStyle,
  UIStyle,
} from "./css"
import type { GeneratedTheme } from "./generated-theme.types"
import type { UITheme } from "./ui-theme.types"

export type BreakpointDirection = "down" | "up"

export interface BreakpointOptions {
  /**
   * The base value for the `breakpoint` when `direction` is "down".
   * This is treated as the largest `breakpoint`.
   *
   * @default "9999px"
   */
  base?: string
  /**
   * The `ref` of the container element used in `useBreakpoint` and others.
   *
   * Even if this `ref` is not set, CSS query will work, but JavaScript operations such as `useBreakpoint` will not work.
   *
   * @external
   */
  containerRef?: RefObject<HTMLElement>
  /**
   * The `breakpoint` direction controls the responsive design approach.
   *
   * - `up`: mobile-first using `min-width`.
   * - `down`: desktop-first using `max-width`.
   *
   * @default "down"
   */
  direction?: BreakpointDirection
  /**
   * The `breakpoint` custom identifier.
   *
   * @external
   *
   * @default "@media screen"
   */
  identifier?: "@media screen" | `@container ${string}` | `@container`
}

export type LoadingVariant =
  | "audio"
  | "circles"
  | "dots"
  | "grid"
  | "oval"
  | "puff"
  | "rings"

export type LoadingComponent = "background" | "custom" | "page" | "screen"

export type NoticePlacement =
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "top"
  | "top-left"
  | "top-right"

export type AlertStatuses = {
  [key in AlertStatus]?: { colorScheme?: Theme["colorSchemes"]; icon?: FC }
}

export type AlertStatus = "error" | "info" | "loading" | "success" | "warning"

export interface NoticeComponentProps extends NoticeConfigOptions {
  onClose: () => void
}

export interface NoticeConfigOptions extends ThemeProps<"Alert"> {
  /**
   * The custom style to use.
   */
  style?: CSSUIObject
  /**
   * The strategy to remove the notice when `isClosable` is set to `true`
   *
   * @default 'button'
   */
  closeStrategy?: "both" | "button" | "element"
  /**
   * The custom notice component to use.
   */
  component?: (props: NoticeComponentProps) => ReactNode
  /**
   * The description of the notice.
   */
  description?: ReactNode
  /**
   * The number of `ms` the notice will continue to be displayed.
   *
   * If `null`, the notice will continue to display.
   * Please use in conjunction with `isClosable`.
   *
   * @default 5000
   */
  duration?: null | number
  /**
   * The loading icon to use.
   */
  icon?: {
    variant?: LoadingVariant
    children?: ReactNode
    /**
     * The CSS `color` property.
     */
    color?: CSSUIProps["color"]
  }
  /**
   * If `true`, allows the notice to be removed.
   *
   * @default false
   */
  isClosable?: boolean
  /**
   * The maximum value at which notice will be displayed.
   */
  limit?: number
  /**
   * The placement of the notice.
   *
   * @default 'top'
   */
  placement?: NoticePlacement
  /**
   * The status of the notice.
   *
   * @default 'info'
   */
  status?: AlertStatus
  /**
   * The title of the notice.
   */
  title?: ReactNode
}

export type SnackDirection = "bottom" | "top"

export interface SnackComponentProps extends SnackConfigOptions {
  index: number
  onClose: () => void
}

export interface SnackConfigOptions extends ThemeProps<"Alert"> {
  /**
   * The custom style to use.
   */
  style?: CSSUIObject
  /**
   * The CSS `box-shadow` property.
   *
   * @default '["base", "dark-sm"]'
   */
  boxShadow?: CSSUIProps["boxShadow"]
  /**
   * The strategy to remove the snack when `isClosable` is set to `true`
   *
   * @default 'button'
   */
  closeStrategy?: "both" | "button" | "element"
  /**
   * The custom snack component to use.
   */
  component?: (props: SnackComponentProps) => ReactNode
  /**
   * The description of the snack.
   */
  description?: ReactNode
  /**
   * The direction of the snacks.
   *
   * @default 'top'
   */
  direction?: SnackDirection
  /**
   * The number of `ms` the snack will continue to be displayed.
   *
   * If `null`, the snack will continue to display.
   * Please use in conjunction with `isClosable`.
   *
   * @default null
   */
  duration?: null | number
  /**
   * The loading icon to use.
   */
  icon?: {
    variant?: LoadingVariant
    children?: ReactNode
    /**
     * The CSS `color` property.
     */
    color?: CSSUIProps["color"]
  }
  /**
   * If `true`, allows the snack to be removed.
   *
   * @default true
   */
  isClosable?: boolean
  /**
   * The maximum value at which snack will be displayed.
   *
   * @default 3
   */
  limit?: null | number
  /**
   * If set the stack will start from the given index.
   *
   * @default 0
   */
  startIndex?: number
  /**
   * The status of the snack.
   *
   * @default 'info'
   */
  status?: AlertStatus
  /**
   * The title of the snack.
   */
  title?: ReactNode
}

export interface LoadingComponentProps {
  duration: null | number
  icon: LoadingConfigOptions["icon"]
  message: ReactNode | undefined
  text: LoadingConfigOptions["text"]
  onFinish: () => void
  initialState?: boolean
}

export interface LoadingConfigOptions {
  /**
   * Handle zoom or pinch gestures on iOS devices when scroll locking is enabled.
   *
   * @default false.
   */
  allowPinchZoom?: boolean
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
  appendToParentPortal?: PortalProps["appendToParentPortal"]
  /**
   * If `true`, scrolling will be disabled on the `body` when the modal opens.
   *
   * @default true
   */
  blockScrollOnMount?: boolean
  /**
   * The custom loading component to use.
   */
  component?: (props: LoadingComponentProps) => ReactNode
  /**
   * The `ref` to the component where the portal will be attached to.
   */
  containerRef?: PortalProps["containerRef"]
  /**
   * The number of `ms` the loading will continue to be displayed.
   *
   * If `null`, the loading will continue to display.
   *
   * @default null
   */
  duration?: null | number
  /**
   * Props for loading icon element.
   */
  icon?: {
    /**
     * The CSS `box-size` property.
     */
    size?: CSSUIProps["boxSize"]
    variant?: LoadingVariant
    /**
     * The CSS `color` property.
     */
    color?: CSSUIProps["color"]
    /**
     * The CSS `color` property.
     */
    secondaryColor?: CSSUIProps["color"]
  }
  /**
   * If `true`, loaded from the initial rendering.
   *
   * @default false
   */
  initialState?: boolean
  /**
   * Props for loading text element.
   */
  text?: {
    /**
     * The CSS `color` property.
     */
    color?: CSSUIProps["color"]
    /**
     * The CSS `font-family` property.
     */
    fontFamily?: CSSUIProps["fontFamily"]
    /**
     * The CSS `font-size` property.
     */
    fontSize?: CSSUIProps["fontSize"]
    /**
     * The CSS `font-weight` property.
     */
    fontWeight?: CSSUIProps["fontWeight"]
    /**
     * The CSS `letter-spacing` property.
     */
    letterSpacing?: CSSUIProps["letterSpacing"]
    /**
     * The CSS `line-height` property.
     */
    lineHeight?: CSSUIProps["letterSpacing"]
  }
}

export interface ThemeConfig {
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
   * The config of breakpoint.
   */
  breakpoint?: BreakpointOptions
  /**
   * The config of the calendar or date picker etc.
   */
  date?: {
    /**
     * The locale of the calendar or date picker etc.
     * Check the docs to see the locale of possible modifiers you can pass.
     *
     * @see Docs https://day.js.org/docs/en/i18n/instance-locale
     * @default 'en'
     */
    locale?: string
  }
  /**
   * If `true`, temporarily disable transitions.
   * This is used to avoid unnecessary movements caused by transitions during color mode switching, for example.
   *
   * @default false
   */
  disableTransitionOnChange?: boolean
  /**
   * The initial color mode.
   * If `system`, the system will apply the color mode.
   *
   * @default 'light'
   */
  initialColorMode?: "dark" | "light" | "system"
  /**
   * The initial theme scheme.
   * This is only applicable if multiple themes are provided.
   *
   * @default 'base'
   */
  initialThemeScheme?: Theme["themeSchemes"]
  /**
   * The config of the loading.
   */
  loading?: {
    /**
     * The options of the background loading.
     */
    background?: LoadingConfigOptions
    /**
     * The options of the custom loading.
     */
    custom?: LoadingConfigOptions
    /**
     * The default component to use for `useAsyncCallback` and similar hooks.
     */
    defaultComponent?: LoadingComponent
    /**
     * The options of the page loading.
     */
    page?: LoadingConfigOptions
    /**
     * The options of the screen loading.
     */
    screen?: LoadingConfigOptions
  }
  /**
   * The config of the `framer-motion`.
   */
  motion?: {
    /**
     * Set configuration options for `framer-motion`.
     *
     * @see Docs https://www.framer.com/motion/motion-config/
     */
    config?: Omit<MotionConfigProps, "children">
  }
  /**
   * The config of the notice.
   */
  notice?: {
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
    appendToParentPortal?: PortalProps["appendToParentPortal"]
    /**
     * The `ref` to the component where the portal will be attached to.
     */
    containerRef?: PortalProps["containerRef"]
    /**
     * The CSS `gap` property.
     *
     * @default 'md'
     */
    gap?: CSSUIProps["gap"]
    /**
     * The options of the notice.
     */
    options?: NoticeConfigOptions
    /**
     * The variants of the notice.
     * Check the docs to see the variants of possible modifiers you can pass.
     *
     * @see Docs https://www.framer.com/motion/animation/#variants
     */
    variants?: Variants
    /**
     * Props for notice item element.
     */
    itemProps?: HTMLMotionProps<"li">
    /**
     * Props for notice list element.
     */
    listProps?: HTMLUIProps<"ul">
  }
  /**
   * The config of the snacks.
   */
  snacks?: {
    /**
     * The CSS `gap` property.
     *
     * @default 'md'
     */
    gap?: CSSUIProps["gap"]
    /**
     * A property that provides spacing between the top and bottom.
     *
     * @default "[0, 0]"
     */
    gutter?: [CSSUIProps["paddingTop"], CSSUIProps["paddingBottom"]]
    /**
     * If `true`, apply gutter value to negative margin
     *
     * @default true
     */
    negateMargin?: boolean
    /**
     * The options of the snack.
     */
    options?: SnackConfigOptions
    /**
     * The variants of the snack.
     * Check the docs to see the variants of possible modifiers you can pass.
     *
     * @see Docs https://www.framer.com/motion/animation/#variants
     */
    variants?: Variants
  }
  /**
   * The config of the theme.
   */
  theme?: {
    /**
     * If `true`, the theme tokens are converted into responsive object.
     *
     * @default false
     */
    responsive?: boolean
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
}

export interface LayerStyles {
  [key: string]: CSSUIObject
}
export interface TextStyles {
  [key: string]: CSSUIObject
}
export type ThemeValue = number | string
export interface ThemeTokens {
  [key: ThemeValue]:
    | [Dict<ThemeValue> | ThemeValue, Dict<ThemeValue> | ThemeValue]
    | ThemeTokens
    | ThemeValue
}
export interface ThemeAnimationTokens<
  T extends AnimationStyle | string = AnimationStyle,
> {
  [key: ThemeValue]: T | T[] | ThemeAnimationTokens<T>
}
export interface ThemeTransitionTokens {
  duration?: ThemeTokens
  easing?: ThemeTokens
  property?: ThemeTokens
}
export interface ThemeBreakpointTokens {
  [key: ThemeValue]: ThemeValue
}

export interface SemanticColorSchemes {
  [key: string]:
    | [Theme["colorSchemes"], Theme["colorSchemes"]]
    | Theme["colorSchemes"]
    | ThemeTokens
}

export interface ThemeSemanticTokens
  extends Omit<
    BaseTheme,
    | "animations"
    | "breakpoints"
    | "components"
    | "semantics"
    | "styles"
    | "themeSchemes"
  > {}

export interface ThemeSemantics extends ThemeSemanticTokens {
  animations?: ThemeAnimationTokens<AnimationStyle | string>
  colorSchemes?: SemanticColorSchemes
}

export interface NestedTheme
  extends Omit<
    BaseTheme,
    "breakpoints" | "components" | "styles" | "themeSchemes"
  > {}

export interface ThemeSchemes {
  [key: string]: NestedTheme
}

export interface ThemeComponents {
  [key: string]: ComponentMultiStyle | ComponentStyle
}

interface BaseTheme {
  animations?: ThemeAnimationTokens
  blurs?: ThemeTokens
  borders?: ThemeTokens
  breakpoints?: ThemeBreakpointTokens
  colors?: ThemeTokens
  components?: ThemeComponents
  fonts?: ThemeTokens
  fontSizes?: ThemeTokens
  fontWeights?: ThemeTokens
  gradients?: ThemeTokens
  letterSpacings?: ThemeTokens
  lineHeights?: ThemeTokens
  radii?: ThemeTokens
  semantics?: ThemeSemantics
  shadows?: ThemeTokens
  sizes?: ThemeTokens
  spaces?: ThemeTokens
  styles?: {
    [key: string]: any
    globalStyle?: UIStyle
    layerStyles?: LayerStyles
    resetStyle?: UIStyle
    textStyles?: TextStyles
  }
  themeSchemes?: ThemeSchemes
  transitions?: ThemeTransitionTokens
  zIndices?: ThemeTokens
}

export interface UsageTheme extends BaseTheme {
  [key: string]: any
}

export type ComponentBaseStyle<Y extends Dict = Dict> = UIStyle<Y>
export interface ComponentVariants<Y extends Dict = Dict> {
  [key: string]: UIStyle<Y>
}
export interface ComponentSizes<Y extends Dict = Dict> {
  [key: string]: UIStyle<Y>
}
type ComponentProps<
  Y extends keyof Theme["components"] | unknown = unknown,
  M extends Dict = Dict,
> = Partial<Omit<M, "colorScheme" | "size" | "variant">> & ThemeProps<Y>
export type ComponentDefaultProps<
  Y extends keyof Theme["components"] | unknown = unknown,
  M extends Dict = Dict,
> = ComponentProps<Y, M>
export type ComponentOverrideProps<
  Y extends keyof Theme["components"] | unknown = unknown,
  M extends Dict = Dict,
> =
  | ((props: ComponentProps<Y, M>) => ComponentProps<Y, M>)
  | ComponentProps<Y, M>

interface ComponentSharedStyle<
  Y extends keyof Theme["components"] | unknown = unknown,
  M extends Dict = Dict,
> {
  /**
   * The default props of the component.
   */
  defaultProps?: ComponentDefaultProps<Y, M>
  /**
   * The override props of the component.
   */
  overrideProps?: ComponentOverrideProps<Y, M>
}

export interface ComponentStyle<
  Y extends keyof Theme["components"] | unknown = unknown,
  M extends Dict = Dict,
> extends ComponentSharedStyle<Y, M> {
  /**
   * The base style of the component.
   */
  baseStyle?: ComponentBaseStyle<M>
  /**
   * The sizes of the component.
   */
  sizes?: ComponentSizes<M>
  /**
   * The variants of the component.
   */
  variants?: ComponentVariants<M>
}

export type ComponentMultiBaseStyle<Y extends Dict = Dict> = UIMultiStyle<Y>
export interface ComponentMultiVariants<Y extends Dict = Dict> {
  [key: string]: UIMultiStyle<Y>
}
export interface ComponentMultiSizes<Y extends Dict = Dict> {
  [key: string]: UIMultiStyle<Y>
}

export interface ComponentMultiStyle<
  Y extends keyof Theme["components"] | unknown = unknown,
  M extends Dict = Dict,
> extends ComponentSharedStyle<Y, M> {
  /**
   * The base style of the component.
   */
  baseStyle?: ComponentMultiBaseStyle<M>
  /**
   * The sizes of the component.
   */
  sizes?: ComponentMultiSizes<M>
  /**
   * The variants of the component.
   */
  variants?: ComponentMultiVariants<M>
}

export interface CSSMap {
  [key: string]: {
    ref: string
    var: string
  }
}

export interface CustomTheme {}

export interface CustomInternalTheme {}

export type InternalTheme =
  CustomInternalTheme extends Required<UsageTheme>
    ? CustomInternalTheme
    : UsageTheme

export type Theme = CustomTheme extends UITheme ? CustomTheme : GeneratedTheme

export type ChangeThemeScheme = (themeScheme: Theme["themeSchemes"]) => void

export type StyledTheme<T extends InternalTheme = InternalTheme> = {
  changeThemeScheme: ChangeThemeScheme
  themeScheme: Theme["themeSchemes"]
  __breakpoints?: AnalyzeBreakpointsReturn
  __config?: ThemeConfig
  __cssMap?: CSSMap
  __cssVars?: Dict
} & T
