import type { FC, ReactNode } from "react"
import type { ColorModeProviderProps } from "../color-mode-provider"
import type { I18nProviderProps } from "../i18n-provider"
import type { ThemeProviderProps } from "../theme-provider"
import { LoadingProvider } from "../../components/loading"
// import { NoticeProvider } from "../../components/notice"
import { defaultTheme } from "../../theme"
import { defaultConfig } from "../../theme"
import { ColorModeProvider } from "../color-mode-provider"
import { EnvironmentProvider } from "../environment-provider"
import { I18nProvider } from "../i18n-provider"
import { ThemeProvider } from "../theme-provider"

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
            <LoadingProvider {...config.loading}>
              {children}

              {/* <NoticeProvider {...config.notice} /> */}
            </LoadingProvider>
          </ColorModeProvider>
        </ThemeProvider>
      </I18nProvider>
    </EnvironmentProvider>
  )
}
