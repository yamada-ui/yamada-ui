import type { FC, ReactNode } from "react"
import type { ColorModeProviderProps, ThemeProviderProps } from "../../core"
import type { I18nProviderProps } from "../i18n-provider"
import { LoadingProvider } from "../../components/loading"
import {
  ColorModeProvider,
  EnvironmentProvider,
  SystemProvider,
  ThemeProvider,
} from "../../core"
import { defaultConfig, defaultTheme } from "../../theme"
import { I18nProvider } from "../i18n-provider"

export interface UIProviderProps
  extends Omit<ThemeProviderProps, "storageKey">,
    Pick<ColorModeProviderProps, "colorMode" | "colorModeManager">,
    I18nProviderProps {
  /**
   * Application content.
   */
  children: ReactNode
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
  colorModeManager,
  colorModeStorageKey,
  config = defaultConfig,
  dir,
  disableGlobalStyle,
  disableResetStyle,
  intl,
  locale,
  theme = defaultTheme,
  themeSchemeManager,
  themeSchemeStorageKey,
}) => {
  return (
    <EnvironmentProvider>
      <I18nProvider dir={dir} intl={intl} locale={locale}>
        <SystemProvider config={config} theme={theme}>
          <ThemeProvider
            config={config}
            disableGlobalStyle={disableGlobalStyle}
            disableResetStyle={disableResetStyle}
            storageKey={themeSchemeStorageKey}
            theme={theme}
            themeSchemeManager={themeSchemeManager}
          >
            <ColorModeProvider
              colorMode={colorMode}
              colorModeManager={colorModeManager}
              config={config}
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
