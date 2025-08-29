import type { RefObject } from "react"
import type { DefaultTheme } from "../../theme"
import type { AnyString, Booleanish, Dict } from "../../utils"
import type {
  CSSAnimationObject,
  CSSModifierObject,
  CSSObject,
  CSSPropObject,
  CSSSlotObject,
  StyleValue,
  StyleValueWithCondition,
} from "../css"
import type { GeneratedThemeTokens } from "../generated-theme-tokens.types"
import type { Breakpoints } from "./breakpoint"
import type { Layers } from "./layer"

export type ColorMode = "dark" | "light"
export type ColorModeWithSystem = "system" | ColorMode
export type LayerScheme =
  | "base"
  | "compounds"
  | "global"
  | "props"
  | "reset"
  | "size"
  | "tokens"
  | "variant"
export type KeyframeIdent = "from" | "to"
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
export type SimplePlacement =
  | "block-end"
  | "block-start"
  | "inline-end"
  | "inline-start"
export type Direction = Exclude<Placement, "center" | "center-center">
export type SimpleDirection = Extract<Placement, "end" | "start">
export type TextDirection = "ltr" | "rtl"
export type BreakpointDirection = "down" | "up"
export type BreakpointIdentifier =
  | "@media screen"
  | `@container ${string}`
  | `@container`

export type LayersConfig = {
  [key in LayerScheme]: { name: string; order: number }
}

export interface BreakpointConfig {
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
  identifier?: BreakpointIdentifier
}

export type NoticePlacement = Exclude<Placement, "center" | `center-${string}`>

export interface NoticeConfig {
  /**
   * If `true`, allows the notice to be removed.
   *
   * @default false
   */
  closable?: boolean
  /**
   * The number of `ms` the notice will continue to be displayed.
   *
   * If `Infinity`, the notice will continue to display.
   * Please use in conjunction with `closable`.
   *
   * @default 5000
   */
  duration?: null | number
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
}

export interface SnacksConfig {
  /**
   * If `true`, allows the snack to be removed.
   *
   * @default true
   */
  closable?: boolean
  /**
   * The direction of the snacks.
   *
   * @default 'top'
   */
  direction?: SimpleDirection
  /**
   * The number of `ms` the snack will continue to be displayed.
   *
   * If `null`, the snack will continue to display.
   * Please use in conjunction with `closable`.
   *
   * @default null
   */
  duration?: null | number
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
}

export interface LoadingConfig {
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
   * The number of `ms` the loading will continue to be displayed.
   *
   * If `null`, the loading will continue to display.
   *
   * @default null
   */
  duration?: null | number
  /**
   * The default count of loading.
   *
   * @default 0
   */
  loadingCount?: number
}

export interface ThemeConfig {
  /**
   * The config of the CSS.
   */
  css?: {
    /**
     * The config for CSS `@layer` names.
     * This allows you to define custom names for each layer type in your theme.
     * Set to `false` to disable the use of CSS layers.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@layer
     */
    layers?: false | LayersConfig
    /**
     * The prefix to attach to variable names when converting each token of the theme to CSS variable names.
     *
     * @default 'ui'
     */
    varPrefix?: string
  }
  /**
   * The config of breakpoint.
   */
  breakpoint?: BreakpointConfig
  /**
   * The default color mode.
   * If `system`, the system will apply the color mode.
   *
   * @default 'light'
   */
  defaultColorMode?: ColorModeWithSystem
  /**
   * The default theme scheme.
   * This is only applicable if multiple themes are provided.
   *
   * @default 'base'
   */
  defaultThemeScheme?: ThemeScheme
  /**
   * If `true`, temporarily disable transitions.
   * This is used to avoid unnecessary movements caused by transitions during color mode switching, for example.
   *
   * @default false
   */
  disableTransitionOnChange?: boolean
  /**
   * The config of the loading.
   */
  loading?: {
    /**
     * The config of the background loading.
     */
    background?: LoadingConfig
    /**
     * The config of the page loading.
     */
    page?: LoadingConfig
    /**
     * The config of the screen loading.
     */
    screen?: LoadingConfig
  }
  /**
   * The config of the notice.
   */
  notice?: NoticeConfig
  /**
   * The config of the snacks.
   */
  snacks?: SnacksConfig
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
        variant?: StyleValueWithCondition<
          Exclude<keyof Required<Y>["variants"], "base">
        >
      }

type ThemeSizeProps<Y extends Dict = Dict> =
  string extends keyof Required<Y>["sizes"]
    ? {}
    : {
        /**
         * The size of the component.
         */
        size?: StyleValueWithCondition<
          Exclude<keyof Required<Y>["sizes"], "base">
        >
      }

type ThemeComponentProps<Y extends Dict = Dict> =
  string extends keyof Required<Y>["props"]
    ? {}
    : {
        [K in keyof Required<Y>["props"]]?: StyleValue<
          Booleanish<keyof Required<Y>["props"][K]>
        >
      }

export type ThemeProps<Y extends Dict = Dict> = ThemeComponentProps<Y> &
  ThemeSizeProps<Y> &
  ThemeVariantProps<Y>

export type WithoutThemeProps<
  Y extends Dict = Dict,
  M extends Dict = Dict,
  D extends keyof Y = keyof Y,
> = Omit<
  Y,
  Exclude<
    | (string extends keyof Required<M>["props"]
        ? never
        : keyof Required<M>["props"])
    | (string extends keyof Required<M>["sizes"] ? never : "size")
    | (string extends keyof Required<M>["variants"] ? never : "variant"),
    keyof Y extends D ? never : D
  >
>

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
  Y extends CSSAnimationObject | string = CSSAnimationObject,
> {
  [key: DefineThemeValue]: DefineThemeAnimationTokens<Y> | Y | Y[]
}

export interface DefineThemeBreakpointTokens {
  [key: DefineThemeValue]: DefineThemeValue
}

export type DefineThemeColorSchemeValue =
  | [
      AnyString | ThemeTokens["colorSchemes"],
      AnyString | ThemeTokens["colorSchemes"],
    ]
  | AnyString
  | Dict
  | ThemeTokens["colorSchemes"]

export interface DefineThemeColorSchemeSemanticTokens {
  [key: string]: DefineThemeColorSchemeValue
}

export type DefineThemeColorSemanticValue =
  | [AnyString | ThemeTokens["colors"], AnyString | ThemeTokens["colors"]]
  | AnyString
  | ThemeTokens["colors"]

export interface DefineThemeColorSemanticToken {
  [key: string]: any
  base?: DefineThemeColorSemanticValue
  bg?: DefineThemeColorSemanticValue
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
    | AnyString
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
  animations?: DefineThemeAnimationTokens<CSSAnimationObject | string>
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
  animations: unknown
  aspectRatios: unknown
  blurs: unknown
  borders: unknown
  breakpoints: unknown
  colors: unknown
  colorSchemes: unknown
  durations: unknown
  easings: unknown
  fonts: unknown
  fontSizes: unknown
  fontWeights: unknown
  gradients: unknown
  keyframes: unknown
  layerStyles: unknown
  letterSpacings: unknown
  lineHeights: unknown
  radii: unknown
  shadows: unknown
  sizes: unknown
  spaces: unknown
  textStyles: unknown
  themeSchemes: unknown
  zIndices: unknown
}

export type ComponentDefaultProps<
  Y extends Dict = Dict,
  M extends Dict = Dict,
  D extends Dict = Dict,
> = (string extends keyof Y
  ? {}
  : {
      [key in keyof Y]?: StyleValue<Booleanish<keyof Y[key]>>
    }) & {
  /**
   * The color scheme of the component.
   */
  colorScheme?: ColorScheme
  /**
   * The size of the component.
   */
  size?: StyleValueWithCondition<keyof M>
  /**
   * The variant of the component.
   */
  variant?: StyleValueWithCondition<keyof D>
}

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
  Y extends CSSObject | CSSSlotObject = CSSObject,
  M extends CSSPropObject = CSSPropObject,
  D extends CSSModifierObject = CSSModifierObject,
  H extends CSSModifierObject = CSSModifierObject,
> = (string extends keyof D
  ? {}
  : {
      size?: (keyof D)[] | keyof D | RegExp
    }) &
  (string extends keyof H
    ? {}
    : {
        variant?: (keyof H)[] | keyof H | RegExp
      }) &
  (string extends keyof M
    ? {}
    : {
        [key in keyof M]?:
          | Booleanish<keyof M[key]>
          | Booleanish<keyof M[key]>[]
          | RegExp
      }) & {
    css: Y
    [key: string]: any
    colorScheme?:
      | RegExp
      | ThemeTokens["colorSchemes"]
      | ThemeTokens["colorSchemes"][]
    layer?: LayerScheme
  }

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
  [key: string]: { ref: string; var: string }
}

export interface CustomTheme {}

export interface CustomThemeTokens {}

export type Theme =
  CustomTheme extends Required<UsageTheme> ? CustomTheme : DefaultTheme

export type ThemeTokens = CustomThemeTokens extends UsageThemeTokens
  ? CustomThemeTokens
  : GeneratedThemeTokens

type OmittedThemeTokens = Exclude<
  keyof ThemeTokens,
  | "apply"
  | "breakpoints"
  | "colorSchemes"
  | "layerStyles"
  | "textStyles"
  | "themeSchemes"
>

export type ThemeScheme = "base" | ThemeTokens["themeSchemes"]
export type Breakpoint = "base" | ThemeTokens["breakpoints"]
export type ColorScheme =
  | [ThemeTokens["colorSchemes"], ThemeTokens["colorSchemes"]]
  | ThemeTokens["colorSchemes"]

export type ThemePath =
  | AnyString
  | Extract<ThemeTokens["colors"], `colorScheme.${string}`>
  | {
      [Y in OmittedThemeTokens]: {
        [M in ThemeTokens[Y]]: M extends object ? never : `${Y}.${M}`
      }[ThemeTokens[Y]]
    }[OmittedThemeTokens]

export type ChangeThemeScheme<Y extends UsageTheme = Theme> = (
  themeScheme: "base" | keyof Y["themeSchemes"],
) => void

export interface SystemUtils {
  getClassName: (block: string, element?: string, modifier?: string) => string
}

export interface System {
  breakpoints: Breakpoints
  config: ThemeConfig
  cssMap: CSSMap
  cssVars: Dict
  layers: Layers
  utils: SystemUtils
}

export type StyledTheme<Y extends UsageTheme = Theme> = Y & {
  changeThemeScheme: ChangeThemeScheme<Y>
  themeScheme: "base" | keyof Y["themeSchemes"]
}
