import type {
  ThemeProviderProps as EmotionThemeProviderProps,
  Interpolation,
} from "@emotion/react"
import {
  Global,
  ThemeContext,
  ThemeProvider as EmotionThemeProvider,
} from "@emotion/react"
import type { Dict } from "@yamada-ui/utils"
import {
  runIfFunc,
  getMemoizedObject as get,
  isUndefined,
  merge,
} from "@yamada-ui/utils"
import type { FC } from "react"
import { useMemo, useContext, useState, useCallback, useEffect } from "react"
import type { StyledProps, UIStyle } from "../css"
import { css } from "../css"
import { transformTheme } from "../theme"
import type {
  ChangeThemeScheme,
  StyledTheme,
  ThemeConfig,
  Theme,
  InternalTheme,
} from "../theme.types"
import { useColorMode } from "./color-mode-provider"
import { useEnvironment } from "./environment-provider"
import { preventTransition } from "./provider-utils"
import type { ThemeSchemeManager } from "./theme-manager"
import { themeSchemeManager } from "./theme-manager"

const { localStorage } = themeSchemeManager

interface ThemeProviderOptions {
  /**
   * The theme of the yamada ui.
   */
  theme?: Dict
  /**
   * The config of the yamada ui.
   */
  config?: ThemeConfig
  /**
   * Manager to persist a user's theme scheme preference.
   *
   * Omit if you don't render server-side.
   * For SSR, choose `themeSchemeManager.ssr`.
   *
   * @default 'themeSchemeManager.localStorage'
   */
  themeSchemeManager?: ThemeSchemeManager
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  storageKey?: string
}

export interface ThemeProviderProps
  extends Omit<EmotionThemeProviderProps, "theme">,
    ThemeProviderOptions {}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme: initialTheme = {},
  config,
  themeSchemeManager = localStorage,
  storageKey,
  children,
}) => {
  const environment = useEnvironment()
  const [themeScheme, setThemeScheme] = useState<Theme["themeSchemes"]>(
    themeSchemeManager.get(config?.initialThemeScheme)(storageKey),
  )

  const changeThemeScheme: ChangeThemeScheme = useCallback(
    (themeScheme) => {
      const { getDocument } = environment
      const doc = getDocument()

      const cleanup = config?.disableTransitionOnChange
        ? preventTransition(environment)
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
    <EmotionThemeProvider theme={{ themeScheme, changeThemeScheme, ...theme }}>
      <CSSVars />
      {children}
    </EmotionThemeProvider>
  )
}

export const CSSVars: FC = () => {
  return (
    <Global
      styles={
        (({ __cssVars }) => ({
          ":host, :root, [data-mode]": __cssVars,
        })) satisfies StyledProps<Dict> as Interpolation
      }
    />
  )
}

export const ResetStyle: FC = () => {
  const { colorMode } = useColorMode()

  return (
    <Global
      styles={
        ((theme) => {
          const { themeScheme } = theme as StyledTheme
          let style = get<UIStyle>(theme, "styles.resetStyle", {})

          const computedStyle = runIfFunc(style, {
            theme,
            colorMode,
            themeScheme,
          })

          if (!computedStyle) return undefined

          return css(computedStyle)(theme)
        }) satisfies StyledProps<Dict> as Interpolation
      }
    />
  )
}

export const GlobalStyle: FC = () => {
  const { colorMode } = useColorMode()

  return (
    <Global
      styles={
        ((theme) => {
          const { themeScheme } = theme
          let style = get<UIStyle>(theme, "styles.globalStyle", {})

          const computedStyle = runIfFunc(style, {
            theme,
            colorMode,
            themeScheme,
          })

          if (!computedStyle) return undefined

          return css(computedStyle)(theme)
        }) satisfies StyledProps<Dict> as Interpolation
      }
    />
  )
}

/**
 * `useTheme` is a custom hook that returns a function for retrieving and switching themes.
 *
 * @see Docs https://yamada-ui.com/hooks/use-theme
 */
export const useTheme = <T extends InternalTheme>() => {
  const internalTheme = useContext(ThemeContext) as StyledTheme<T>

  const theme = useMemo(() => {
    const { themeScheme } = internalTheme

    if (isUndefined(themeScheme) || themeScheme === "base") return internalTheme

    const nestedTheme = internalTheme.themeSchemes?.[themeScheme]

    if (!nestedTheme) return internalTheme

    return merge<StyledTheme<T>>(internalTheme, nestedTheme)
  }, [internalTheme])

  const value = useMemo(() => {
    const { themeScheme, changeThemeScheme } = internalTheme

    return { themeScheme, changeThemeScheme, theme, internalTheme }
  }, [theme, internalTheme])

  return value
}
