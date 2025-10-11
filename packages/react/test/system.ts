import type { StyledTheme } from "../src"
import {
  createSystem,
  config as defaultConfig,
  theme as defaultTheme,
} from "../src"

export const system = createSystem(defaultTheme, defaultConfig)

export const styledTheme: StyledTheme = {
  changeThemeScheme: vi.fn(),
  themeScheme: "base",
  ...defaultTheme,
}
