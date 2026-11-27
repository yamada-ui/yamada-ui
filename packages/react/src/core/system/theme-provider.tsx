"use client"

import type { ThemeProviderProps as EmotionThemeProviderProps } from "@emotion/react"
import type { FC, PropsWithChildren } from "react"
import type { SlotProps } from "../../components/slot"
import type { Dict } from "../../utils"
import type { Environment } from "./environment-provider"
import type {
  ChangeThemeScheme,
  DefineThemeSemanticTokens,
  StyledTheme,
  Theme,
  ThemeConfig,
  ThemeScheme,
  UsageTheme,
} from "./index.type"
import type { Storage } from "./storage-manager"
import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  ThemeContext,
} from "@emotion/react"
import { use, useCallback, useEffect, useId, useMemo, useState } from "react"
import { PortalProvider } from "../../components/portal"
import { Slot } from "../../components/slot"
import {
  isEmptyObject,
  isObject,
  isShadowRoot,
  isUndefined,
  merge,
} from "../../utils"
import { THEME_SCHEME_STORAGE_KEY } from "../constant"
import { conditions, css } from "../css"
import { createSemanticTokenVars } from "./create-system"
import { useEnvironment } from "./environment-provider"
import { createStorageManager } from "./storage-manager"
import { useSystem } from "./system-provider"
import { createVarRules } from "./var"

export const getPreventTransition = (environment: Environment) => {
  const win = environment.getWindow()
  const doc = environment.getDocument()
  const root = environment.getRootElement()
  const rootNode = environment.getRootNode()

  if (!win || !doc || !root) return

  const css = doc.createElement("style")
  const shadowRoot = isShadowRoot(rootNode)
  const selector = shadowRoot ? ":host, *" : "*"
  const container = shadowRoot ? rootNode : doc.head

  const node = doc.createTextNode(
    `${selector}{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
  )

  css.appendChild(node)

  container.appendChild(css)

  return () => {
    const forceReflow = () => win.getComputedStyle(root)

    forceReflow()

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        container.removeChild(css)
      })
    })
  }
}

export interface ThemeProviderProps
  extends
    PropsWithChildren,
    Omit<EmotionThemeProviderProps, "children" | "theme"> {
  /**
   * The config of the yamada ui.
   */
  config?: ThemeConfig
  /**
   * If `storage` is `cookie`, the cookie to use.
   * If not provided, the cookie will be set to `document.cookie`.
   */
  cookie?: string
  /**
   * The storage to use.
   * If you are using a server-side rendering library, you should use `cookie`.
   *
   * @default 'localStorage'
   */
  storage?: Storage
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  storageKey?: string
  /**
   * The theme of the yamada ui.
   */
  theme?: UsageTheme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  config,
  cookie,
  storage = cookie ? "cookie" : "localStorage",
  storageKey = THEME_SCHEME_STORAGE_KEY,
  theme = {},
}) => {
  const { defaultThemeScheme = "base", disableTransitionOnChange } =
    config ?? {}
  const storageManager = useMemo(
    () => createStorageManager(storage, storageKey, defaultThemeScheme, cookie),
    [cookie, defaultThemeScheme, storage, storageKey],
  )
  const environment = useEnvironment()
  const [themeScheme, setThemeScheme] = useState<ThemeScheme>(
    storageManager.get(),
  )

  const changeThemeScheme: ChangeThemeScheme = useCallback(
    (themeScheme) => {
      const root = environment.getRootElement()

      const cleanup = disableTransitionOnChange
        ? getPreventTransition(environment)
        : undefined

      if (root) root.dataset.theme = themeScheme

      cleanup?.()

      setThemeScheme(themeScheme)

      storageManager.set(themeScheme)
    },
    [disableTransitionOnChange, environment, storageManager],
  )

  useEffect(() => {
    const themeScheme = storageManager.get()

    changeThemeScheme(themeScheme)
  }, [changeThemeScheme, storageManager])

  return (
    <EmotionThemeProvider theme={{ changeThemeScheme, themeScheme, ...theme }}>
      <GlobalStyles />

      {children}
    </EmotionThemeProvider>
  )
}

export const GlobalStyles: FC = () => {
  const system = useSystem()
  const { theme } = useTheme<UsageTheme>()
  const { atRule, wrap } = system.layers

  const resetStyle = useMemo(() => {
    const style = theme.styles?.resetStyle

    if (!style || isEmptyObject(style)) return undefined

    return css(system, theme)(style)
  }, [system, theme])

  const globalStyle = useMemo(() => {
    const style = theme.styles?.globalStyle

    if (!style || isEmptyObject(style)) return undefined

    return css(system, theme)(style)
  }, [system, theme])

  const varRules = useMemo(() => {
    return createVarRules(
      system.config.css?.varRoot ?? ":host, :root",
      system.cssVars,
    )
  }, [system])

  return (
    <Global
      styles={[
        atRule,
        wrap("tokens", varRules),
        wrap("reset", resetStyle),
        wrap("global", globalStyle),
      ]}
    />
  )
}

export interface ThemeSchemeScopeProps extends SlotProps {
  /**
   * The theme scheme to apply to the children.
   */
  themeScheme: ThemeScheme
}

/**
 * `ThemeSchemeScope` is a component that sets the theme scheme for its children.
 *
 * @see https://yamada-ui.com/docs/theming/switching-themes#themeschemescope
 */
export const ThemeSchemeScope: FC<ThemeSchemeScopeProps> = ({
  themeScheme,
  ...rest
}) => {
  const context = useMemo(() => ({ "data-theme": themeScheme }), [themeScheme])

  return (
    <PortalProvider value={context}>
      <Slot data-theme={themeScheme} {...rest} />
    </PortalProvider>
  )
}

export interface SemanticTokenScopeProps extends SlotProps {
  /**
   * Existing semantic tokens to override within the scope.
   */
  tokens: DefineThemeSemanticTokens
  /**
   * The value of the `data-semantic-token` attribute. Use a CSS-safe name such as `preview-panel`. Defaults to an automatically generated ID.
   */
  name?: string
}

/**
 * `SemanticTokenScope` overrides semantic tokens on a single child element and its DOM descendants.
 *
 * @see https://yamada-ui.com/docs/theming/switching-themes#semantictokenscope
 */
export const SemanticTokenScope: FC<SemanticTokenScopeProps> = ({
  name,
  tokens,
  ...rest
}) => {
  const id = useId()
  const value = name ?? id
  const system = useSystem()
  const { theme } = useTheme<UsageTheme>()
  const context = useMemo(() => ({ "data-semantic-token": value }), [value])
  const styles = useMemo(() => {
    const { light, dark } = createSemanticTokenVars(system, theme, tokens)
    const selector = `[data-semantic-token="${value}"]`
    const styles: Dict = { [selector]: light }

    if (!isEmptyObject(dark))
      styles[conditions._dark.replaceAll("&", () => selector)] = dark

    return styles
  }, [value, system, theme, tokens])

  return (
    <PortalProvider value={context}>
      <Global styles={styles} />
      <Slot {...rest} data-semantic-token={value} />
    </PortalProvider>
  )
}

/**
 * `useTheme` is a custom hook that returns a function for retrieving and switching themes.
 *
 * @see https://yamada-ui.com/docs/hooks/use-theme
 */
export const useTheme = <Y extends UsageTheme = Theme>() => {
  const internalTheme = use(ThemeContext) as StyledTheme<Y>

  const theme = useMemo(() => {
    const { themeScheme } = internalTheme

    if (isUndefined(themeScheme) || themeScheme === "base") return internalTheme

    const nestedTheme =
      "themeSchemes" in internalTheme && isObject(internalTheme.themeSchemes)
        ? internalTheme.themeSchemes[themeScheme as string]
        : undefined

    if (!nestedTheme) return internalTheme

    return merge<StyledTheme<Y>>(internalTheme, nestedTheme)
  }, [internalTheme])

  const value = useMemo(() => {
    const { changeThemeScheme, themeScheme } = internalTheme

    return {
      changeThemeScheme,
      internalTheme,
      theme,
      themeScheme,
    }
  }, [theme, internalTheme])

  return value
}
