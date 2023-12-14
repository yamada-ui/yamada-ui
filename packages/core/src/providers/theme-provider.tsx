import type {
  ThemeProviderProps as EmotionThemeProviderProps,
  Interpolation,
  Theme,
  CSSObject,
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
import type { UIStyle } from "../css"
import { css } from "../css"
import { transformTheme } from "../theme"
import type {
  ChangeThemeScheme,
  PropsTheme,
  StyledTheme,
  ThemeConfig,
  Theme as UITheme,
  UsageTheme,
} from "../theme.types"
import { useColorMode } from "./color-mode-provider"
import type { ThemeSchemeManager } from "./theme-manager"
import { themeSchemeLocalStorageManager } from "./theme-manager"

type ThemeProviderOptions = {
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
   * For SSR, choose `themeSchemeSSRManager`.
   *
   * @default 'themeSchemeLocalStorageManager'
   */
  themeSchemeManager?: ThemeSchemeManager
}

export type ThemeProviderProps = Omit<EmotionThemeProviderProps, "theme"> &
  ThemeProviderOptions

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme: initialTheme = {},
  config,
  themeSchemeManager = themeSchemeLocalStorageManager,
  children,
}) => {
  const [themeScheme, setThemeScheme] = useState<UITheme["themeSchemes"]>(
    themeSchemeManager.get(config?.initialThemeScheme),
  )

  const changeThemeScheme: ChangeThemeScheme = useCallback(
    (themeScheme) => {
      const cleanup = config?.disableTransitionOnChange
        ? preventTransition()
        : undefined

      document.documentElement.dataset.theme = themeScheme

      cleanup?.()

      setThemeScheme(themeScheme)

      themeSchemeManager.set(themeScheme)
    },
    [config, themeSchemeManager],
  )

  const theme = useMemo(
    () => transformTheme(initialTheme, config),
    [initialTheme, config],
  )

  useEffect(() => {
    const managerValue = themeSchemeManager.get()

    if (managerValue) changeThemeScheme(managerValue)
  }, [changeThemeScheme, themeSchemeManager])

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
        (({ __cssVars }: PropsTheme) => {
          return { ":host, :root, [data-mode]": __cssVars } as CSSObject
        }) as Interpolation<Theme>
      }
    />
  )
}

export const ResetStyle: FC = () => {
  const { colorMode } = useColorMode()

  return (
    <Global
      styles={
        ((theme: PropsTheme) => {
          const { themeScheme } = theme
          let style = get<UIStyle>(theme, "styles.resetStyle", {})

          const computedStyle = runIfFunc(style, {
            theme,
            colorMode,
            themeScheme,
          })

          if (!computedStyle) return undefined

          return css(computedStyle)(theme)
        }) as Interpolation<Theme>
      }
    />
  )
}

export const GlobalStyle: FC = () => {
  const { colorMode } = useColorMode()

  return (
    <Global
      styles={
        ((theme: PropsTheme) => {
          const { themeScheme } = theme
          let style = get<UIStyle>(theme, "styles.globalStyle", {})

          const computedStyle = runIfFunc(style, {
            theme,
            colorMode,
            themeScheme,
          })

          if (!computedStyle) return undefined

          return css(computedStyle)(theme)
        }) as Interpolation<Theme>
      }
    />
  )
}

export const useTheme = <T extends object = Dict>() => {
  const { themeScheme, changeThemeScheme, ...internalTheme } = useContext(
    ThemeContext,
  ) as PropsTheme<UsageTheme>

  if (!internalTheme)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`",
    )

  const theme = useMemo(() => {
    if (isUndefined(themeScheme) || themeScheme === "base") return internalTheme

    const nestedTheme = internalTheme.themeSchemes?.[themeScheme]

    if (!nestedTheme) return internalTheme

    return merge(internalTheme, nestedTheme)
  }, [themeScheme, internalTheme])

  const value = useMemo(
    () =>
      ({ themeScheme, changeThemeScheme, theme, internalTheme }) as Pick<
        PropsTheme,
        "themeScheme" | "changeThemeScheme"
      > & {
        theme: StyledTheme<T>
        internalTheme: StyledTheme<T>
      },
    [themeScheme, changeThemeScheme, theme, internalTheme],
  )

  return value
}

const preventTransition = () => {
  const css = document.createElement("style")

  const node = document.createTextNode(
    `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
  )

  css.appendChild(node)

  document.head.appendChild(css)

  return () => {
    ;(() => window.getComputedStyle(document.body))()

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(css)
      })
    })
  }
}
