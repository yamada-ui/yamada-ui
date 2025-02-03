import type { FC, ReactNode } from "react"
import type { ColorModeProviderProps } from "../color-mode-provider"
import type { Environment } from "../environment-provider"
import type { IntlMessage } from "../i18n-provider"
import type { ThemeProviderProps } from "../theme-provider"
import { LoadingProvider } from "../../components/loading"
// import { NoticeProvider } from "../../components/notice"
import { defaultTheme } from "../../theme"
import { defaultConfig } from "../../theme"
import { ColorModeProvider } from "../color-mode-provider"
import { EnvironmentProvider } from "../environment-provider"
import { defaultIntlMessage, I18nProvider } from "../i18n-provider"
import { ThemeProvider } from "../theme-provider"

export interface UIProviderProps
  extends Omit<ThemeProviderProps, "storageKey">,
    Pick<ColorModeProviderProps, "colorMode" | "colorModeManager"> {
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
   * If `true`, the use of automatic window and document detection will be disabled.
   *
   * @default false
   */
  disableEnvironment?: boolean
  /**
   * The environment `window` and `document` to be used by all components and hooks.
   *
   * By default, we smartly determine the ownerDocument and defaultView
   * based on where `UIProvider` is rendered.
   */
  environment?: Environment
  /**
   * The internationalization messages to apply to the application.
   *
   * This prop expects a dictionary object where the keys are locale strings (e.g., "en-US").
   */
  intl?: IntlMessage
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
  disableEnvironment,
  disableGlobalStyle,
  disableResetStyle,
  environment,
  intl = defaultIntlMessage,
  theme = defaultTheme,
  themeSchemeManager,
  themeSchemeStorageKey,
}) => {
  return (
    <EnvironmentProvider
      disabled={disableEnvironment}
      environment={environment}
    >
      <I18nProvider
        direction={config.direction}
        intl={intl}
        locale={config.locale}
      >
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
