import type { StyledTheme } from "../src/core"
import { createSystem } from "../src/core"
import { config as defaultConfig, theme as defaultTheme } from "../src/theme"

export const system = createSystem(defaultTheme, defaultConfig)

export const styledTheme: StyledTheme = {
  changeThemeScheme: vi.fn(),
  themeScheme: "base",
  ...defaultTheme,
}
