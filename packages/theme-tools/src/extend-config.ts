import type { ThemeConfig } from "@yamada-ui/core"
import { defaultConfig } from "@yamada-ui/theme"
import { merge } from "@yamada-ui/utils"

export const extendConfig = (config: ThemeConfig): ThemeConfig =>
  merge(defaultConfig, config)
