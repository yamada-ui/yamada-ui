import type { ThemeConfig } from "../core"
import { merge as mergeObject } from "@yamada-ui/utils"
import { defaultConfig } from "../theme"

/**
 * Create a new config by inheriting the default config.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-config
 */
export function extendConfig(config: ThemeConfig): ThemeConfig {
  return mergeObject(defaultConfig, config)
}
