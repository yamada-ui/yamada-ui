import type {
  ThemeConfig,
  ColorModeManager,
  ThemeSchemeManager,
} from "@yamada-ui/core"
import {
  ThemeProvider,
  ColorModeProvider,
  ResetStyle,
  GlobalStyle,
} from "@yamada-ui/core"
import { LoadingProvider } from "@yamada-ui/loading"
import { MotionConfig } from "@yamada-ui/motion"
import { NoticeProvider } from "@yamada-ui/notice"
import { defaultTheme, defaultConfig } from "@yamada-ui/theme"
import type { Dict } from "@yamada-ui/utils"
import type { FC, ReactNode } from "react"
import type { Environment } from "./environment-provider"
import { EnvironmentProvider } from "./environment-provider"

export type UIProviderProps = {
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
}

export const UIProvider: FC<UIProviderProps> = ({
  theme = defaultTheme,
  config = defaultConfig,
  disableResetStyle,
  disableGlobalStyle,
  colorModeManager,
  themeSchemeManager,
  environment,
  disableEnvironment,
  children,
}) => {
  return (
    <ThemeProvider
      theme={theme}
      config={config}
      themeSchemeManager={themeSchemeManager}
    >
      <ColorModeProvider colorModeManager={colorModeManager} config={config}>
        <EnvironmentProvider
          environment={environment}
          disabled={disableEnvironment}
        >
          <MotionConfig {...config.motion?.config}>
            <LoadingProvider {...config.loading}>
              {!disableResetStyle ? <ResetStyle /> : null}
              {!disableGlobalStyle ? <GlobalStyle /> : null}

              {children}

              <NoticeProvider {...config.notice} />
            </LoadingProvider>
          </MotionConfig>
        </EnvironmentProvider>
      </ColorModeProvider>
    </ThemeProvider>
  )
}
