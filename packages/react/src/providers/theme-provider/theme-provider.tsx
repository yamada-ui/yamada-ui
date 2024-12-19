import type {
  ThemeProviderProps as EmotionThemeProviderProps,
  Interpolation,
} from "@emotion/react"
import type { FC, ReactNode } from "react"
import type { StyledProps, UIStyle } from "../../core"
import type {
  ChangeThemeScheme,
  InternalTheme,
  StyledTheme,
  Theme,
  ThemeConfig,
} from "../../core"
import type { Dict } from "../../utils"
import type { ThemeSchemeManager } from "./theme-manager"
import { ThemeProvider as EmotionThemeProvider, Global } from "@emotion/react"
import { ThemeContext } from "@emotion/react"
import { use, useCallback, useEffect, useMemo, useState } from "react"
import { css } from "../../core"
import { transformTheme } from "../../core"
import {
  getMemoizedObject as get,
  isEmptyObject,
  isUndefined,
  merge,
  runIfFunc,
} from "../../utils"
import { getPreventTransition, useColorMode } from "../color-mode-provider"
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
  disableGlobalStyle,
  disableResetStyle,
  storageKey,
  theme: initialTheme = {},
  themeSchemeManager = localStorage,
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
      <CSSVars />
      {!disableResetStyle ? <ResetStyle /> : null}
      {!disableGlobalStyle ? <GlobalStyle /> : null}

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
          const style = get<UIStyle>(theme, "styles.resetStyle", {})

          const computedStyle = runIfFunc(style, {
            colorMode,
            theme,
            themeScheme,
          })

          if (isEmptyObject(computedStyle)) return undefined

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
            colorMode,
            theme,
            themeScheme,
          })

          if (isEmptyObject(computedStyle)) return undefined

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
  const internalTheme = use(ThemeContext) as StyledTheme<T>

  const theme = useMemo(() => {
    const { themeScheme } = internalTheme

    if (isUndefined(themeScheme) || themeScheme === "base") return internalTheme

    const nestedTheme = internalTheme.themeSchemes?.[themeScheme]

    if (!nestedTheme) return internalTheme

    return merge<StyledTheme<T>>(internalTheme, nestedTheme)
  }, [internalTheme])

  const value = useMemo(() => {
    const { changeThemeScheme, themeScheme } = internalTheme

    return { changeThemeScheme, internalTheme, theme, themeScheme }
  }, [theme, internalTheme])

  return value
}
