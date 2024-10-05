import type {
  ComponentDefaultProps,
  ComponentMultiSizes,
  ComponentMultiStyle,
  ComponentMultiVariants,
  ComponentSizes,
  ComponentStyle,
  ComponentVariants,
  ThemeToken,
  ThemeTokens,
  UIStyle,
  UIStyleProps,
  UsageTheme,
} from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { baseTheme, defaultTheme } from "@yamada-ui/theme"
import {
  getMemoizedObject as get,
  isFunction,
  merge as mergeObject,
  noop,
  omitObject,
  pickObject,
  runIfFunc,
} from "@yamada-ui/utils"

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

export function extendComponent(
  name: keyof (typeof defaultTheme)["components"],
  componentStyle?: ComponentMultiStyle | ComponentStyle,
): ComponentMultiStyle | ComponentStyle {
  return mergeObject(
    get<ComponentMultiStyle | ComponentStyle>(
      defaultTheme,
      `components.${name}`,
      {},
    ),
    componentStyle ?? {},
  )
}

export function extendComponentSize(
  name: keyof (typeof defaultTheme)["components"],
  componentSizes?: ComponentMultiSizes | ComponentSizes,
): ComponentMultiSizes | ComponentSizes {
  return mergeObject(
    get<ComponentSizes>(defaultTheme, `components.${name}.sizes`, {}),
    componentSizes ?? {},
  )
}

export function extendComponentVariant(
  name: keyof (typeof defaultTheme)["components"],
  componentVariants?: ComponentMultiVariants | ComponentVariants,
): ComponentMultiVariants | ComponentVariants {
  return mergeObject(
    get<ComponentMultiVariants | ComponentVariants>(
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
