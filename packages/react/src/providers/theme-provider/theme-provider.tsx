import type { ThemeProviderProps as EmotionThemeProviderProps } from "@emotion/react"
import type { FC, ReactNode } from "react"
import type {
  ChangeThemeScheme,
  StyledTheme,
  Theme,
  ThemeConfig,
  ThemeTokens,
  UsageTheme,
} from "../../core"
import type { Dict } from "../../utils"
import type { ThemeSchemeManager } from "./theme-manager"
import { ThemeProvider as EmotionThemeProvider, Global } from "@emotion/react"
import { ThemeContext } from "@emotion/react"
import { use, useCallback, useEffect, useMemo, useState } from "react"
import { css, transformTheme } from "../../core"
import { isEmptyObject, isObject, isUndefined, merge } from "../../utils"
import { getPreventTransition } from "../color-mode-provider"
import { useEnvironment } from "../environment-provider"
import { themeSchemeManager } from "./theme-manager"

const { localStorage } = themeSchemeManager

interface ThemeProviderOptions {
  /**
   * Application content.
   */
  children: ReactNode
  /**
   * The config of the yamada ui.
   */
  config?: ThemeConfig
  /**
   * If `true`, will not mount the global styles defined in the theme.
   *
   * @default true
   */
  disableGlobalStyle?: boolean
  /**
   * If `true`, `ResetStyle` component will be mounted to help reset browser styles.
   *
   * @default true
   */
  disableResetStyle?: boolean
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  storageKey?: string
  /**
   * The theme of the yamada ui.
   */
  theme?: Dict
  /**
   * Manager to persist a user's theme scheme preference.
   *
   * Omit if you don't render server-side.
   * For SSR, choose `themeSchemeManager.ssr`.
   *
   * @default 'themeSchemeManager.localStorage'
   */
  themeSchemeManager?: ThemeSchemeManager
}

export interface ThemeProviderProps
  extends Omit<EmotionThemeProviderProps, "children" | "theme">,
    ThemeProviderOptions {}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  config,
  storageKey,
  theme: initialTheme = {},
  themeSchemeManager = localStorage,
}) => {
  const environment = useEnvironment()
  const [themeScheme, setThemeScheme] = useState<ThemeTokens["themeSchemes"]>(
    themeSchemeManager.get(config?.initialThemeScheme)(storageKey),
  )

  const changeThemeScheme: ChangeThemeScheme = useCallback(
    (themeScheme) => {
      const { getDocument } = environment
      const doc = getDocument()

      const cleanup = config?.disableTransitionOnChange
        ? getPreventTransition(environment)
        : undefined

      if (doc) doc.documentElement.dataset.theme = themeScheme

      cleanup?.()

      setThemeScheme(themeScheme)

      themeSchemeManager.set(themeScheme)(storageKey)
    },
    [config, environment, themeSchemeManager, storageKey],
  )

  const theme = useMemo(
    () => transformTheme(initialTheme, config),
    [initialTheme, config],
  )

  useEffect(() => {
    const themeScheme = themeSchemeManager.get()(storageKey)

    if (themeScheme) changeThemeScheme(themeScheme)
  }, [changeThemeScheme, themeSchemeManager, storageKey])

  return (
    <EmotionThemeProvider theme={{ changeThemeScheme, themeScheme, ...theme }}>
      <GlobalStyles />

      {children}
    </EmotionThemeProvider>
  )
}

export const GlobalStyles: FC = () => {
  const { theme } = useTheme<UsageTheme>()
  const { atRule, wrap } = theme.__layers ?? {}

  const resetStyle = useMemo(() => {
    const style = theme.styles?.resetStyle

    if (!style || isEmptyObject(style)) return undefined

    return css(style)(theme)
  }, [theme])

  const globalStyle = useMemo(() => {
    const style = theme.styles?.globalStyle

    if (!style || isEmptyObject(style)) return undefined

    return css(style)(theme)
  }, [theme])

  const cssVars = useMemo(() => {
    return { ":host, :root, [data-mode]": theme.__cssVars }
  }, [theme])

  return (
    <Global
      styles={[
        atRule,
        wrap?.("tokens", cssVars) ?? cssVars,
        wrap?.("reset", resetStyle) ?? resetStyle,
        wrap?.("global", globalStyle) ?? globalStyle,
      ]}
    />
  )
}

/**
 * `useTheme` is a custom hook that returns a function for retrieving and switching themes.
 *
 * @see Docs https://yamada-ui.com/hooks/use-theme
 */
export const useTheme = <T extends UsageTheme = Theme>() => {
  const internalTheme = use(ThemeContext) as StyledTheme<T>

  const theme = useMemo(() => {
    const { themeScheme } = internalTheme

    if (isUndefined(themeScheme) || themeScheme === "base") return internalTheme

    const nestedTheme =
      "themeSchemes" in internalTheme && isObject(internalTheme.themeSchemes)
        ? internalTheme.themeSchemes[themeScheme]
        : undefined

    if (!nestedTheme) return internalTheme

    return merge<StyledTheme<T>>(internalTheme, nestedTheme)
  }, [internalTheme])

  const value = useMemo(() => {
    const { changeThemeScheme, themeScheme } = internalTheme

    return { changeThemeScheme, internalTheme, theme, themeScheme }
  }, [theme, internalTheme])

  return value
}
