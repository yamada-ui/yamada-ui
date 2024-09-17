import type { ThemeConfig } from "@yamada-ui/core"
import { defaultConfig } from "@yamada-ui/theme"
import { merge } from "@yamada-ui/utils"

export function extendConfig(config: ThemeConfig): ThemeConfig {
  return merge(defaultConfig, config)
}
