import type {
  UsageTheme,
  ThemeToken,
  ThemeTokens,
  ComponentStyle,
  ComponentSizes,
  ComponentVariants,
  ComponentDefaultProps,
  UIStyle,
  UIStyleProps,
  ComponentMultiSizes,
  ComponentMultiVariants,
  ComponentMultiStyle,
} from "@yamada-ui/core"
import { baseTheme, defaultTheme } from "@yamada-ui/theme"
import type { Dict } from "@yamada-ui/utils"
import {
  merge as mergeObject,
  getMemoizedObject as get,
  runIfFunc,
  omitObject,
  pickObject,
  isFunction,
  noop,
} from "@yamada-ui/utils"

interface Options {
  merge?: boolean
  omit?: (keyof typeof defaultTheme)[]
  pick?: (keyof typeof defaultTheme)[]
}

function createExtendTheme(initialTheme: Dict = defaultTheme) {
  return function (
    ...extensions: (UsageTheme | ((theme: UsageTheme) => UsageTheme))[]
  ) {
    return function ({
      merge = true,
      pick = [],
      omit = [],
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

      return overrides.reduce(
        (prev, extension) => mergeObject(prev, runIfFunc(extension, prev)),
        theme as Dict,
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

export function extendToken(
  token: ThemeToken,
  tokens?: ThemeTokens,
): ThemeTokens {
  return mergeObject(get<ThemeTokens>(defaultTheme, token, {}), tokens ?? {})
}

export function extendStyle(
  name: "globalStyle" | "resetStyle",
  style: UIStyle,
): UIStyle {
  const props: UIStyleProps = {
    theme: {
      themeScheme: "base",
      changeThemeScheme: noop,
      __config: {},
      __cssMap: {},
      __cssVars: {},
      __breakpoints: undefined,
    },
  }

  return mergeObject(
    runIfFunc(get<UIStyle>(defaultTheme, `styles.${name}`, {}), props),
    runIfFunc(style, props) ?? {},
  )
}

export function extendComponent(
  name: keyof (typeof defaultTheme)["components"],
  componentStyle?: ComponentStyle | ComponentMultiStyle,
): ComponentStyle | ComponentMultiStyle {
  return mergeObject(
    get<ComponentStyle | ComponentMultiStyle>(
      defaultTheme,
      `components.${name}`,
      {},
    ),
    componentStyle ?? {},
  )
}

export function extendComponentSize(
  name: keyof (typeof defaultTheme)["components"],
  componentSizes?: ComponentSizes | ComponentMultiSizes,
): ComponentSizes | ComponentMultiSizes {
  return mergeObject(
    get<ComponentSizes>(defaultTheme, `components.${name}.sizes`, {}),
    componentSizes ?? {},
  )
}

export function extendComponentVariant(
  name: keyof (typeof defaultTheme)["components"],
  componentVariants?: ComponentVariants | ComponentMultiVariants,
): ComponentVariants | ComponentMultiVariants {
  return mergeObject(
    get<ComponentVariants | ComponentMultiVariants>(
      defaultTheme,
      `components.${name}.variants`,
      {},
    ),
    componentVariants ?? {},
  )
}

export function extendComponentDefaultProps(
  name: keyof (typeof defaultTheme)["components"],
  componentDefaultProps?: ComponentDefaultProps,
): ComponentDefaultProps {
  return mergeObject(
    get<ComponentDefaultProps>(
      defaultTheme,
      `components.${name}.defaultProps`,
      {},
    ),
    componentDefaultProps ?? {},
  )
}
