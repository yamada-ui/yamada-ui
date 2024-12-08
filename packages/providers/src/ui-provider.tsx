import type {
  ColorModeProviderProps,
  Environment,
  ThemeProviderProps,
} from "@yamada-ui/core"
import type { FC, ReactNode } from "react"
import {
  ColorModeProvider,
  EnvironmentProvider,
  GlobalStyle,
  I18nProvider,
  ResetStyle,
  ThemeProvider,
} from "@yamada-ui/core"
import { LoadingProvider } from "@yamada-ui/loading"
import { MotionConfig } from "@yamada-ui/motion"
import { NoticeProvider } from "@yamada-ui/notice"
import { defaultConfig, defaultTheme } from "@yamada-ui/theme"

export interface UIProviderProps
  extends Pick<ThemeProviderProps, "config" | "theme" | "themeSchemeManager">,
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
   * If `true`,  the use of automatic window and document detection will be disabled.
   *
   * @default false
   */
  disableEnvironment?: boolean
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
   * The environment `window` and `document` to be used by all components and hooks.
   *
   * By default, we smartly determine the ownerDocument and defaultView
   * based on where `UIProvider` is rendered.
   */
  environment?: Environment
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
  theme = defaultTheme,
  themeSchemeManager,
  themeSchemeStorageKey,
}) => {
  return (
    <EnvironmentProvider
      disabled={disableEnvironment}
      environment={environment}
    >
      <I18nProvider direction={config.direction} locale={config.locale}>
        <ThemeProvider
          config={config}
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
            <MotionConfig {...config.motion?.config}>
              <LoadingProvider {...config.loading}>
                {!disableResetStyle ? <ResetStyle /> : null}
                {!disableGlobalStyle ? <GlobalStyle /> : null}

                {children}

                <NoticeProvider {...config.notice} />
              </LoadingProvider>
            </MotionConfig>
          </ColorModeProvider>
        </ThemeProvider>
      </I18nProvider>
    </EnvironmentProvider>
  )
}
