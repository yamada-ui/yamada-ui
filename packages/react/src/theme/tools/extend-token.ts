import type { ThemeToken, ThemeTokens } from "../../core"
import {
  getMemoizedObject as get,
  merge as mergeObject,
} from "@yamada-ui/utils"
import { defaultTheme } from "../"

/**
 * Create a new token by inheriting the default token.
 *
 * @see Docs https://yamada-ui.com/styled-system/theming/customize-theme#using-extendtoken
 */
export function extendToken(
  token: ThemeToken,
  tokens?: ThemeTokens,
): ThemeTokens {
  return mergeObject(get<ThemeTokens>(defaultTheme, token, {}), tokens ?? {})
}
