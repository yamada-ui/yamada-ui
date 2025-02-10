import type { HTMLMotionProps, MotionConfigProps, Variants } from "motion/react"
import type { ReactNode, RefAttributes, RefObject } from "react"
import type { PortalProps } from "../../components/portal"
import type { DefaultTheme } from "../../theme"
import type { Dict, StringLiteral, Union } from "../../utils"
import type { HTMLUIProps } from "../components"
import type {
  AnimationStyle,
  CreateBreakpointsReturn,
  CreateLayersReturn,
  CSSModifierObject,
  CSSObject,
  CSSPropObject,
  CSSProps,
  CSSSlotObject,
  UIValue,
} from "../css"
import type { GeneratedThemeTokens } from "../generated-theme-tokens.types"

export type LayerScheme =
  | "base"
  | "compounds"
  | "global"
  | "props"
  | "reset"
  | "size"
  | "tokens"
  | "variant"

export type Layers = { [key in LayerScheme]: { name: string; order: number } }

export type TextDirection = "ltr" | "rtl"

export type BreakpointDirection = "down" | "up"

export type Orientation = "horizontal" | "vertical"

export type Placement =
  | "center"
  | "center-center"
  | "center-end"
  | "center-start"
  | "end"
  | "end-center"
  | "end-end"
  | "end-start"
  | "start"
  | "start-center"
  | "start-end"
  | "start-start"

export type LoadingVariant =
  | "audio"
  | "circles"
  | "dots"
  | "grid"
  | "oval"
  | "puff"
  | "rings"

export type LoadingComponent = "background" | "custom" | "page" | "screen"

export type StatusScheme = "error" | "info" | "success" | "warning"

export type NoticePlacement = Extract<
  Placement,
  | "end"
  | "end-center"
  | "end-end"
  | "end-start"
  | "start"
  | "start-center"
  | "start-end"
  | "start-start"
>

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
  containerRef?: RefObject<HTMLElement | null>
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

export interface NoticeComponentProps extends NoticeConfigOptions {
  onClose: () => void
}

export interface NoticeConfigOptions {
  /**
   * The custom style to use.
   */
  style?: CSSObject
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
    color?: CSSProps["color"]
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
  status?: "loading" | StatusScheme
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

export interface SnackConfigOptions {
  /**
   * The custom style to use.
   */
  style?: CSSObject
  /**
   * The CSS `box-shadow` property.
   *
   * @default '["base", "dark-sm"]'
   */
  boxShadow?: CSSProps["boxShadow"]
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
    color?: CSSProps["color"]
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
  status?: "loading" | StatusScheme
  /**
   * The title of the snack.
   */
  title?: ReactNode
}

export interface LoadingComponentProps extends RefAttributes<any> {
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
    size?: CSSProps["boxSize"]
    variant?: LoadingVariant
    /**
     * The CSS `color` property.
     */
    color?: CSSProps["color"]
    /**
     * The CSS `color` property.
     */
    secondaryColor?: CSSProps["color"]
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
    color?: CSSProps["color"]
    /**
     * The CSS `font-family` property.
     */
    fontFamily?: CSSProps["fontFamily"]
    /**
     * The CSS `font-size` property.
     */
    fontSize?: CSSProps["fontSize"]
    /**
     * The CSS `font-weight` property.
     */
    fontWeight?: CSSProps["fontWeight"]
    /**
     * The CSS `letter-spacing` property.
     */
    letterSpacing?: CSSProps["letterSpacing"]
    /**
     * The CSS `line-height` property.
     */
    lineHeight?: CSSProps["letterSpacing"]
  }
}

export interface ThemeConfig {
  /**
   * The config of CSS variables.
   */
  css?: {
    /**
     * The config for CSS `@layer` names.
     * This allows you to define custom names for each layer type in your theme.
     * Set to `false` to disable the use of CSS layers.
     *
     * @see Docs https://developer.mozilla.org/en-US/docs/Web/CSS/@layer
     */
    layers?: false | Layers
    /**
     * The prefix to attach to variable names when converting each token of the theme to CSS variable names.
     *
     * @default 'ui'
     */
    varPrefix?: StringLiteral
  }
  /**
   * The config of breakpoint.
   */
  breakpoint?: BreakpointOptions
  /**
   * The text direction to apply to the application.
   *
   * @default 'ltr'
   */
  direction?: TextDirection
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
  initialThemeScheme?: ThemeTokens["themeSchemes"]
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
   * The locale to apply to the application.
   *
   * @default 'en-US'
   */
  locale?: string
  /**
   * The config of the `motion`.
   */
  motion?: {
    /**
     * Set configuration options for `motion`.
     *
     * @see Docs https://motion.dev/docs/react-motion-config
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
    gap?: CSSProps["gap"]
    /**
     * The options of the notice.
     */
    options?: NoticeConfigOptions
    /**
     * The variants of the notice.
     * Check the docs to see the variants of possible modifiers you can pass.
     *
     * @see Docs https://motion.dev/docs/react-animation#variants
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
    gap?: CSSProps["gap"]
    /**
     * A property that provides spacing between the top and bottom.
     *
     * @default "[0, 0]"
     */
    gutter?: [CSSProps["paddingTop"], CSSProps["paddingBottom"]]
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
     * @see Docs https://motion.dev/docs/react-animation#variants
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
}

type ThemeVariantProps<Y extends Dict = Dict> =
  string extends keyof Required<Y>["variants"]
    ? {}
    : {
        /**
         * The variant of the component.
         */
        variant?: UIValue<Union<keyof Required<Y>["variants"]>>
      }

type ThemeSizeProps<Y extends Dict = Dict> =
  string extends keyof Required<Y>["sizes"]
    ? {}
    : {
        /**
         * The size of the component.
         */
        size?: UIValue<Union<keyof Required<Y>["sizes"]>>
      }

type ThemeComponentProps<Y extends Dict = Dict> =
  string extends keyof Required<Y>["props"]
    ? {}
    : {
        [K in keyof Required<Y>["props"]]?: UIValue<
          keyof Required<Y>["props"][K] extends "false" | "true"
            ? boolean
            : keyof Required<Y>["props"][K]
        >
      }

export type ThemeProps<Y extends Dict = Dict> = ThemeComponentProps<Y> &
  ThemeSizeProps<Y> &
  ThemeVariantProps<Y>

type ThemeProp = "size" | "variant"

export type WithoutThemeProps<
  Y extends Dict = Dict,
  M extends Dict | keyof Y = Dict,
  D extends keyof Y = keyof Y,
> = M extends object
  ? string extends keyof Required<M>["props"]
    ? Omit<Y, keyof Y extends D ? ThemeProp : Exclude<ThemeProp, D>>
    : Omit<
        Y,
        keyof Y extends D
          ? keyof Required<M>["props"] | ThemeProp
          : Exclude<keyof Required<M>["props"] | ThemeProp, D>
      >
  : M extends string
    ? Omit<Y, keyof Y extends D ? M | ThemeProp : Exclude<M | ThemeProp, D>>
    : never

export type DefineThemeValue = number | string

export interface DefineThemeTokens {
  [key: DefineThemeValue]:
    | [
        DefineThemeValue | Dict<DefineThemeValue>,
        DefineThemeValue | Dict<DefineThemeValue>,
      ]
    | DefineThemeTokens
    | DefineThemeValue
}

export interface DefineThemeKeyframeTokens {
  [key: DefineThemeValue]:
    | [
        CSSModifierObject | Dict<CSSModifierObject>,
        CSSModifierObject | Dict<CSSModifierObject>,
      ]
    | CSSModifierObject
    | Dict<CSSModifierObject>
}

export interface DefineThemeAnimationTokens<
  T extends AnimationStyle | string = AnimationStyle,
> {
  [key: DefineThemeValue]: DefineThemeAnimationTokens<T> | T | T[]
}

export interface DefineThemeBreakpointTokens {
  [key: DefineThemeValue]: DefineThemeValue
}

export type DefineThemeColorSchemeValue =
  | [ThemeTokens["colorSchemes"], ThemeTokens["colorSchemes"]]
  | Dict
  | ThemeTokens["colorSchemes"]

export interface DefineThemeColorSchemeSemanticTokens {
  [key: string]: DefineThemeColorSchemeValue
}

export type DefineThemeColorSemanticValue =
  | [ThemeTokens["colors"], ThemeTokens["colors"]]
  | ThemeTokens["colors"]

export interface DefineThemeColorSemanticToken {
  [key: string]: any
  base?: DefineThemeColorSemanticValue
  contrast?: DefineThemeColorSemanticValue
  default?: DefineThemeColorSemanticValue
  emphasized?: DefineThemeColorSemanticValue
  fg?: DefineThemeColorSemanticValue
  ghost?: DefineThemeColorSemanticValue
  muted?: DefineThemeColorSemanticValue
  outline?: DefineThemeColorSemanticValue
  solid?: DefineThemeColorSemanticValue
  subtle?: DefineThemeColorSemanticValue
}

export interface DefineThemeColorSemanticTokens {
  [key: string]:
    | DefineThemeColorSemanticToken
    | DefineThemeColorSemanticValue
    | Dict
}

export interface DefineThemeSemanticTokens
  extends Omit<
    DefineTheme,
    | "animations"
    | "breakpoints"
    | "colors"
    | "semanticTokens"
    | "styles"
    | "themeSchemes"
  > {
  animations?: DefineThemeAnimationTokens<AnimationStyle | string>
  colors?: DefineThemeColorSemanticTokens
  colorSchemes?: DefineThemeColorSchemeSemanticTokens
}

export interface DefineThemeSchemeTokens {
  [key: string]: Omit<DefineTheme, "themeSchemes">
}

interface DefineTheme {
  animations?: DefineThemeAnimationTokens
  aspectRatios?: DefineThemeTokens
  blurs?: DefineThemeTokens
  borders?: DefineThemeTokens
  breakpoints?: DefineThemeBreakpointTokens
  colors?: DefineThemeTokens
  durations?: DefineThemeTokens
  easings?: DefineThemeTokens
  fonts?: DefineThemeTokens
  fontSizes?: DefineThemeTokens
  fontWeights?: DefineThemeTokens
  gradients?: DefineThemeTokens
  keyframes?: DefineThemeKeyframeTokens
  letterSpacings?: DefineThemeTokens
  lineHeights?: DefineThemeTokens
  radii?: DefineThemeTokens
  semanticTokens?: DefineThemeSemanticTokens
  shadows?: DefineThemeTokens
  sizes?: DefineThemeTokens
  spaces?: DefineThemeTokens
  styles?: {
    [key: string]: any
    globalStyle?: CSSObject
    layerStyles?: CSSModifierObject
    resetStyle?: CSSObject
    textStyles?: CSSModifierObject
  }
  themeSchemes?: DefineThemeSchemeTokens
  zIndices?: DefineThemeTokens
}

export interface UsageTheme extends DefineTheme {
  [key: string]: any
}

export interface UsageThemeTokens {
  animations: string
  aspectRatios: string
  blurs: string
  borders: string
  breakpoints: string
  colors: string
  colorSchemes: string
  durations: string
  easings: string
  fonts: string
  fontSizes: string
  fontWeights: string
  gradients: string
  keyframes: string
  layerStyles: string
  letterSpacings: string
  lineHeights: string
  radii: string
  shadows: string
  sizes: string
  spaces: string
  textStyles: string
  themeSchemes: string
  zIndices: string
}

export type Breakpoint = "base" | ThemeTokens["breakpoints"]

export type ColorScheme =
  | [ThemeTokens["colorSchemes"], ThemeTokens["colorSchemes"]]
  | ThemeTokens["colorSchemes"]

export type ComponentDefaultProps<
  Y extends Dict = Dict,
  M extends Dict = Dict,
  D extends Dict = Dict,
> = {
  /**
   * The color scheme of the component.
   */
  colorScheme?: ColorScheme
  /**
   * The size of the component.
   */
  size?: UIValue<keyof M>
  /**
   * The variant of the component.
   */
  variant?: UIValue<keyof D>
} & (string extends keyof Y
  ? {}
  : {
      [key in keyof Y]?: UIValue<
        keyof Y[key] extends "false" | "true" ? boolean : boolean | keyof Y[key]
      >
    })

interface ComponentSharedStyle<
  Y extends Dict = Dict,
  M extends Dict = Dict,
  D extends Dict = Dict,
> {
  /**
   * The `className` of the component.
   */
  className?: string
  /**
   * The default props of the component.
   */
  defaultProps?: ComponentDefaultProps<Y, M, D>
}

export type ComponentCompound<
  Y extends CSSObject = CSSObject,
  M extends CSSPropObject = CSSPropObject,
  D extends CSSModifierObject = CSSModifierObject,
  H extends CSSModifierObject = CSSModifierObject,
> = {
  css: Y
  colorScheme?: ThemeTokens["colorSchemes"] | ThemeTokens["colorSchemes"][]
  size?: keyof D | keyof D[]
  variant?: keyof H | keyof H[]
} & (string extends keyof M
  ? {}
  : {
      [key in keyof M]?:
        | UIValue<
            keyof M[key] extends "false" | "true"
              ? boolean
              : boolean | keyof M[key]
          >
        | UIValue<
            keyof M[key] extends "false" | "true"
              ? boolean
              : boolean | keyof M[key]
          >[]
    })

export interface ComponentStyle<
  Y extends CSSPropObject = CSSPropObject,
  M extends CSSModifierObject = CSSModifierObject,
  D extends CSSModifierObject = CSSModifierObject,
> extends ComponentSharedStyle<Y, M, D> {
  /**
   * The base style of the component.
   */
  base?: CSSObject
  /**
   * The different combinations of variants for the component.
   */
  compounds?: ComponentCompound<CSSObject, Y, M, D>[]
  /**
   * The component styles based on props.
   */
  props?: Y
  /**
   * The component styles based on sizes.
   */
  sizes?: M
  /**
   * The component styles based on variants.
   */
  variants?: D
}

export interface ComponentSlotStyle<
  Y extends string = string,
  M extends CSSPropObject<CSSSlotObject<Y>> = CSSPropObject<CSSSlotObject<Y>>,
  D extends CSSModifierObject<CSSSlotObject<Y>> = CSSModifierObject<
    CSSSlotObject<Y>
  >,
  H extends CSSModifierObject<CSSSlotObject<Y>> = CSSModifierObject<
    CSSSlotObject<Y>
  >,
> extends ComponentSharedStyle<M, D, H> {
  /**
   * The base style of the component.
   */
  base?: CSSSlotObject<Y>
  /**
   * The different combinations of variants for the component.
   */
  compounds?: ComponentCompound<CSSSlotObject<Y>, M, D, H>[]
  /**
   * The component styles based on props.
   */
  props?: M
  /**
   * The component styles based on sizes.
   */
  sizes?: D
  /**
   * The component styles based on variants.
   */
  variants?: H
}

export interface CSSMap {
  [key: string]: {
    ref: string
    var: string
  }
}

export interface CustomTheme {}

export interface CustomThemeTokens {}

export type Theme =
  CustomTheme extends Required<UsageTheme> ? CustomTheme : DefaultTheme

export type ThemeTokens = CustomThemeTokens extends UsageThemeTokens
  ? CustomThemeTokens
  : GeneratedThemeTokens

export type ChangeThemeScheme = (
  themeScheme: ThemeTokens["themeSchemes"],
) => void

export type StyledTheme<Y extends UsageTheme = Theme> = {
  changeThemeScheme: ChangeThemeScheme
  themeScheme: ThemeTokens["themeSchemes"]
  __breakpoints?: CreateBreakpointsReturn
  __config?: ThemeConfig
  __cssMap?: CSSMap
  __cssVars?: Dict
  __layers?: CreateLayersReturn
} & Y
