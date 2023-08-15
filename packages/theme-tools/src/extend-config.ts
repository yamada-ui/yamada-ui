import { ThemeConfig } from '@yamada-ui/core'
import { defaultConfig } from '@yamada-ui/theme'
import { merge } from '@yamada-ui/utils'

export const extendConfig = (theme: ThemeConfig): ThemeConfig =>
  merge(defaultConfig, theme)
