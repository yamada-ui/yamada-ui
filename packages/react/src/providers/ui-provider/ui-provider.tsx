import type { FC } from "react"
import type { DefaultProviderProps } from "../default-provider"
import { LoadingProvider } from "../../components/loading"
import { NoticeProvider } from "../../components/notice"
import { config as defaultConfig } from "../../theme"
import { DefaultProvider } from "../default-provider"

export { extendConfig, extendTheme } from "../default-provider"

export interface UIProviderProps extends DefaultProviderProps {}

/**
 * The provider for Yamada UI components with global loading and notifications.
 */
export const UIProvider: FC<UIProviderProps> = ({
  children,
  config = defaultConfig,
  ...rest
}) => {
  return (
    <DefaultProvider config={config} {...rest}>
      <LoadingProvider {...config.loading}>
        <NoticeProvider {...config.notice}>{children}</NoticeProvider>
      </LoadingProvider>
    </DefaultProvider>
  )
}
