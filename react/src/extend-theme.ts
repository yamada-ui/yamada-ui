import {
  UsageTheme,
  ThemeToken,
  ThemeTokens,
  ComponentStyle,
  ComponentSizes,
  ComponentVariants,
  ComponentDefaultProps,
  UIStyle,
  UIStyleProps,
} from '@yamada-ui/core'
import { defaultTheme } from '@yamada-ui/theme'
import {
  Dict,
  merge as mergeObject,
  getMemoizedObject as get,
  runIfFunc,
  omitObject,
  pickObject,
  isFunction,
} from '@yamada-ui/utils'

type Options = {
  merge?: boolean
  omit?: (keyof typeof defaultTheme)[]
  pick?: (keyof typeof defaultTheme)[]
}

export const extendTheme =
  (...extensions: (UsageTheme | ((theme: UsageTheme) => UsageTheme))[]) =>
  ({ merge = true, pick = [], omit = [] }: Options = {}): Dict => {
    let overrides = [...extensions]
    let theme = extensions[extensions.length - 1]

    let computedTheme: Dict = defaultTheme

    if (omit.length) computedTheme = omitObject(computedTheme, omit)
    if (pick.length) computedTheme = pickObject(computedTheme, pick)

    if (!isFunction(theme) && overrides.length > 1) {
      overrides = overrides.slice(0, overrides.length - 1)

      if (merge) theme = mergeObject(computedTheme, theme)
    } else {
      theme = merge ? computedTheme : {}
    }

    return overrides.reduce(
      (prev, extension) => mergeObject(prev, runIfFunc(extension, prev)),
      theme as Dict,
    )
  }

export const extendToken = (token: ThemeToken, tokens?: ThemeTokens): ThemeTokens =>
  mergeObject(get(defaultTheme, token, {}), tokens ?? {})

export const extendStyle = (name: 'globalStyle' | 'resetStyle', style: UIStyle): UIStyle => {
  const props: UIStyleProps = {
    theme: { __config: {}, __cssMap: {}, __cssVars: {}, __breakpoints: undefined },
  }

  return mergeObject(
    runIfFunc(get(defaultTheme, `styles.${name}`, {}), props),
    runIfFunc(style, props) ?? {},
  )
}

export const extendComponent = (
  name: keyof typeof defaultTheme['components'],
  componentStyle?: ComponentStyle,
): ComponentStyle => mergeObject(get(defaultTheme, `components.${name}`, {}), componentStyle ?? {})

export const extendComponentSize = (
  name: keyof typeof defaultTheme['components'],
  componentSizes?: ComponentSizes,
): ComponentSizes =>
  mergeObject(get(defaultTheme, `components.${name}.sizes`, {}), componentSizes ?? {})

export const extendComponentVariant = (
  name: keyof typeof defaultTheme['components'],
  componentVariants?: ComponentVariants,
): ComponentVariants =>
  mergeObject(get(defaultTheme, `components.${name}.variants`, {}), componentVariants ?? {})

export const extendComponentDefaultProps = (
  name: keyof typeof defaultTheme['components'],
  componentDefaultProps?: ComponentDefaultProps,
): ComponentDefaultProps =>
  mergeObject(get(defaultTheme, `components.${name}.defaultProps`, {}), componentDefaultProps ?? {})
