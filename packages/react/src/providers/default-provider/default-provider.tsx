import type { FC } from "react"
import type {
  ColorModeProviderProps,
  EnvironmentProviderProps,
  ThemeConfig,
  ThemeProviderProps,
  UsageTheme,
} from "../../core"
import type { DeepMerge } from "../../utils"
import type { I18nProviderProps } from "../i18n-provider"
import {
  ColorModeProvider,
  EnvironmentProvider,
  SystemProvider,
  ThemeProvider,
} from "../../core"
import { config as defaultConfig, theme as defaultTheme } from "../../theme"
import { merge } from "../../utils"
import { I18nProvider } from "../i18n-provider"

export interface DefaultProviderProps
  extends
    Omit<ThemeProviderProps, "storageKey">,
    Pick<ColorModeProviderProps, "colorMode">,
    I18nProviderProps {
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  colorModeStorageKey?: string
  /**
   * The root node to use.
   */
  rootNode?: EnvironmentProviderProps["value"]
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  themeSchemeStorageKey?: string
}

/**
 * The provider for Yamada UI components without global loading or notifications.
 */
export const DefaultProvider: FC<DefaultProviderProps> = ({
  children,
  colorMode,
  colorModeStorageKey,
  config = defaultConfig,
  cookie,
  dir,
  fallbackLocale,
  formats,
  intl,
  intlMessageFormatOptions,
  locale,
  rootNode,
  storage,
  theme = defaultTheme,
  themeSchemeStorageKey,
}) => {
  return (
    <EnvironmentProvider value={rootNode}>
      <I18nProvider
        dir={dir}
        fallbackLocale={fallbackLocale}
        formats={formats}
        intl={intl}
        intlMessageFormatOptions={intlMessageFormatOptions}
        locale={locale}
      >
        <SystemProvider config={config} theme={theme}>
          <ThemeProvider
            config={config}
            cookie={cookie}
            storage={storage}
            storageKey={themeSchemeStorageKey}
            theme={theme}
          >
            <ColorModeProvider
              colorMode={colorMode}
              config={config}
              cookie={cookie}
              storage={storage}
              storageKey={colorModeStorageKey}
            >
              {children}
            </ColorModeProvider>
          </ThemeProvider>
        </SystemProvider>
      </I18nProvider>
    </EnvironmentProvider>
  )
}

type DefaultTheme = typeof defaultTheme

export const extendTheme = <Y extends UsageTheme>(theme: Y) => {
  return merge<DeepMerge<DefaultTheme, Y>>(defaultTheme, theme)
}

export const extendConfig = (config: ThemeConfig) => {
  return merge(defaultConfig, config)
}
