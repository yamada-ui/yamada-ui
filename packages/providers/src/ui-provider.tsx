import type {
  ThemeConfig,
  ColorModeManager,
  ThemeSchemeManager,
  Environment,
} from "@yamada-ui/core"
import {
  ThemeProvider,
  ColorModeProvider,
  ResetStyle,
  GlobalStyle,
  EnvironmentProvider,
} from "@yamada-ui/core"
import { LoadingProvider } from "@yamada-ui/loading"
import { MotionConfig } from "@yamada-ui/motion"
import { NoticeProvider } from "@yamada-ui/notice"
import { defaultTheme, defaultConfig } from "@yamada-ui/theme"
import type { Dict } from "@yamada-ui/utils"
import type { FC, ReactNode } from "react"

export interface UIProviderProps {
  /**
   * The theme of the yamada ui.
   *
   * If omitted, uses the default theme provided by yamada ui.
   */
  theme?: Dict
  /**
   * The config of the yamada ui.
   *
   * If omitted, uses the default config provided by yamada ui.
   */
  config?: ThemeConfig
  /**
   * If `true`, `ResetStyle` component will be mounted to help reset browser styles.
   *
   * @default true
   */
  disableResetStyle?: boolean
  /**
   * If `true`, will not mount the global styles defined in the theme.
   *
   * @default true
   */
  disableGlobalStyle?: boolean
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
   * Manager to persist a user's theme scheme preference.
   *
   * Omit if you don't render server-side.
   * For SSR, choose `themeSchemeManager.ssr`.
   *
   * @default 'themeSchemeManager.localStorage'
   */
  themeSchemeManager?: ThemeSchemeManager
  /**
   * The environment `window` and `document` to be used by all components and hooks.
   *
   * By default, we smartly determine the ownerDocument and defaultView
   * based on where `UIProvider` is rendered.
   */
  environment?: Environment
  /**
   * If `true`,  the use of automatic window and document detection will be disabled.
   *
   * @default false
   */
  disableEnvironment?: boolean
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
  theme = defaultTheme,
  config = defaultConfig,
  disableResetStyle,
  disableGlobalStyle,
  colorModeManager,
  colorModeStorageKey,
  themeSchemeManager,
  themeSchemeStorageKey,
  environment,
  disableEnvironment,
  children,
}) => {
  return (
    <EnvironmentProvider
      environment={environment}
      disabled={disableEnvironment}
    >
      <ThemeProvider
        theme={theme}
        config={config}
        themeSchemeManager={themeSchemeManager}
        storageKey={themeSchemeStorageKey}
      >
        <ColorModeProvider
          colorModeManager={colorModeManager}
          storageKey={colorModeStorageKey}
          config={config}
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
