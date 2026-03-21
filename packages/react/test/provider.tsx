import type { PropsWithChildren } from "react"
import type { UIProviderProps } from "../src/providers/ui-provider"
import { LoadingProvider } from "../src/components/loading/loading-provider"
import { NoticeProvider } from "../src/components/notice/notice-provider"
import {
  ColorModeProvider,
  EnvironmentProvider,
  SystemProvider,
  ThemeProvider,
} from "../src/core"
import { I18nProvider } from "../src/providers/i18n-provider"
import { config as defaultConfig, theme as defaultTheme } from "../src/theme"

export interface TestProviderProps extends Omit<UIProviderProps, "children"> {
  withLoadingProvider?: boolean
  withNoticeProvider?: boolean
}

export function TestProvider({
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
  withLoadingProvider = false,
  withNoticeProvider = false,
}: PropsWithChildren<TestProviderProps>) {
  let content = children

  if (withNoticeProvider)
    content = <NoticeProvider {...config.notice}>{content}</NoticeProvider>

  if (withLoadingProvider)
    content = <LoadingProvider {...config.loading}>{content}</LoadingProvider>

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
              {content}
            </ColorModeProvider>
          </ThemeProvider>
        </SystemProvider>
      </I18nProvider>
    </EnvironmentProvider>
  )
}
