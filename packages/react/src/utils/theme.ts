import type { Dict } from "@yamada-ui/utils"
import type {
  ThemeConfig,
  ThemeToken,
  ThemeTokens,
  UIStyle,
  UIStyleProps,
  UsageTheme,
} from "../core"
import {
  getMemoizedObject as get,
  hslaTo,
  isArray,
  isFunction,
  isString,
  merge as mergeObject,
  noop,
  omitObject,
  parseToHsla,
  pickObject,
  runIfFunc,
  TONES,
} from "@yamada-ui/utils"
import { baseTheme, defaultConfig, defaultTheme } from "../theme"

interface Options {
  merge?: boolean
  omit?: (keyof typeof defaultTheme)[]
  pick?: (keyof typeof defaultTheme)[]
}

function createExtendTheme(initialTheme: Dict = defaultTheme) {
  return function (
    ...extensions: (((theme: UsageTheme) => UsageTheme) | UsageTheme)[]
  ) {
    return function ({
      merge = true,
      omit = [],
      pick = [],
    }: Options = {}): Dict {
      let overrides = [...extensions]
      let theme = extensions[extensions.length - 1]

      if (omit.length) initialTheme = omitObject(initialTheme, omit)
      if (pick.length) initialTheme = pickObject(initialTheme, pick)

      if (!isFunction(theme) && overrides.length > 1) {
        overrides = overrides.slice(0, overrides.length - 1)

        if (merge) theme = mergeObject(initialTheme, theme)
      } else {
        theme = merge ? initialTheme : {}
      }

      return overrides.reduce<Dict>(
        (prev, extension) => mergeObject(prev, runIfFunc(extension, prev)),
        theme ?? {},
      )
    }
  }
}

/**
 * Create a new theme by inheriting the default theme.
 * It is also possible to pass multiple objects and specify options.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-theme#using-extendtheme
 */
export const extendTheme = createExtendTheme(defaultTheme)

/**
 * This creates a new theme that inherits only the tokens such as global styles and colors of the default theme.
 * It is also possible to pass multiple objects and specify options.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-theme#using-extendbasetheme
 */
export const extendBaseTheme = createExtendTheme(baseTheme)

/**
 * Create a new config by inheriting the default config.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-config
 */
export function extendConfig(config: ThemeConfig): ThemeConfig {
  return mergeObject(defaultConfig, config)
}

/**
 * Create a new token by inheriting the default token.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-theme#using-extendtoken
 */
export function extendToken(
  token: ThemeToken,
  tokens?: ThemeTokens,
): ThemeTokens {
  return mergeObject(get<ThemeTokens>(defaultTheme, token, {}), tokens ?? {})
}

/**
 * Create a new style by inheriting the default style.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-theme#using-extendstyle
 */
export function extendStyle(
  name: "globalStyle" | "resetStyle",
  style: UIStyle,
): UIStyle {
  const props: UIStyleProps = {
    theme: {
      changeThemeScheme: noop,
      themeScheme: "base",
      __breakpoints: undefined,
      __config: {},
      __cssMap: {},
      __cssVars: {},
    },
  }

  return mergeObject(
    runIfFunc(get<UIStyle>(defaultTheme, `styles.${name}`, {}), props),
    runIfFunc(style, props),
  )
}

function analyzeValue(value: any) {
  const n = parseFloat(value.toString())
  const unit = value.toString().replace(String(n), "")

  return { n, unit }
}

function spaces(x: number) {
  if (isNaN(x)) throw new Error("The multiplier must be a valid number.")

  if (!isFinite(x)) throw new Error("The multiplier must be a finite number.")

  if (isString(x)) throw new Error("The multiplier must be a number.")

  const { spaces: defaultSpaces } = defaultTheme

  const generateValue = (value: any) => {
    const { n, unit } = analyzeValue(value)

    return `${n * x}${unit}`
  }

  const computedSpaces = Object.entries(defaultSpaces).reduce<ThemeTokens>(
    (prev, [key, value]) => {
      if (key === "px") {
        prev[key] = value
      } else {
        const resolvedKey = Number(key)

        if (isArray(value)) {
          const [lightValue, darkValue] = value

          prev[resolvedKey] = [
            generateValue(lightValue),
            generateValue(darkValue),
          ]
        } else {
          prev[resolvedKey] = generateValue(value)
        }
      }

      return prev
    },
    {},
  )

  return computedSpaces
}

function tones(hex: string) {
  const [h, s, l, a] = parseToHsla(hex) ?? [0, 0, 0]
  const v = l > 0.5
  const x = ((v ? 1 : 0.95) - l) / 5
  const y = (l - (!v ? 0.05 : 0.15)) / 5

  const tokens = TONES.reduce<ThemeTokens>((prev, tone) => {
    if (tone === 500) {
      prev[tone] = hex
    } else {
      const t = tone / 100
      const w = t > 5
      const u = (w ? t - 5 : 5 - t) * (w ? y : x)
      const z = w ? l - u : l + u

      prev[tone] = hslaTo([h, s, z, a ?? 1])("hex")!
    }

    return prev
  }, {})

  return tokens
}

/**
 * Useful tools for generating theme tokens and other related items.
 */
export const generate = {
  /**
   * Generate tokens by multiplying the default theme's `spaces` with the provided number.
   */
  spaces,
  /**
   * Generate tone colors from 50 to 950 based on the provided hex value.
   */
  tones,
}
