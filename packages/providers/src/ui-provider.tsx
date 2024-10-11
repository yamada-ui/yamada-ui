import type {
  ColorModeManager,
  Environment,
  ThemeConfig,
  ThemeSchemeManager,
} from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import type { FC, ReactNode } from "react"
import {
  ColorModeProvider,
  EnvironmentProvider,
  GlobalStyle,
  ResetStyle,
  ThemeProvider,
} from "@yamada-ui/core"
import { LoadingProvider } from "@yamada-ui/loading"
import { MotionConfig } from "@yamada-ui/motion"
import { NoticeProvider } from "@yamada-ui/notice"
import { defaultConfig, defaultTheme } from "@yamada-ui/theme"

export interface UIProviderProps {
  /**
   * Application content.
   */
  children: ReactNode
  /**
   * Manager to persist a user's color mode preference.
   *
   * Omit if you don't render server-side.
   * For SSR, choose `colorModeManager.ssr`.
   *
   * @default 'colorModeManager.localStorage'
   */
  colorModeManager?: ColorModeManager
  /**
   * Key of value saved in storage.
   * By default, it is saved to `local storage`.
   */
  colorModeStorageKey?: string
  /**
   * The config of the yamada ui.
   *
   * If omitted, uses the default config provided by yamada ui.
   */
  config?: ThemeConfig
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
   * The theme of the yamada ui.
   *
   * If omitted, uses the default theme provided by yamada ui.
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
      <ThemeProvider
        config={config}
        storageKey={themeSchemeStorageKey}
        theme={theme}
        themeSchemeManager={themeSchemeManager}
      >
        <ColorModeProvider
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
    </EnvironmentProvider>
  )
}
