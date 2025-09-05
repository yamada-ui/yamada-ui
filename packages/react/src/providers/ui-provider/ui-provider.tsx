import type { FC } from "react"
import type {
  ColorModeProviderProps,
  ThemeConfig,
  ThemeProviderProps,
  UsageTheme,
} from "../../core"
import type { DeepMerge } from "../../utils"
import type { I18nProviderProps } from "../i18n-provider"
import { LoadingProvider } from "../../components/loading"
import {
  ColorModeProvider,
  EnvironmentProvider,
  SystemProvider,
  ThemeProvider,
} from "../../core"
import { config as defaultConfig, theme as defaultTheme } from "../../theme"
import { merge } from "../../utils"
import { I18nProvider } from "../i18n-provider"

export interface UIProviderProps
  extends Omit<ThemeProviderProps, "storageKey">,
    Pick<ColorModeProviderProps, "colorMode">,
    I18nProviderProps {
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  colorModeStorageKey?: string
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  themeSchemeStorageKey?: string
}

/**
 * The global provider that must be added to make all Yamada UI components work correctly.
 */
export const UIProvider: FC<UIProviderProps> = ({
  children,
  colorMode,
  colorModeStorageKey,
  config = defaultConfig,
  cookie,
  dir,
  intl,
  locale,
  storage,
  theme = defaultTheme,
  themeSchemeStorageKey,
}) => {
  return (
    <EnvironmentProvider>
      <I18nProvider dir={dir} intl={intl} locale={locale}>
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
              <LoadingProvider {...config.loading}>{children}</LoadingProvider>
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
