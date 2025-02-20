import type { StyledTheme } from "../src"
import { defaultConfig, defaultTheme, transformTheme } from "../src"

export const transformedTheme = transformTheme(defaultTheme, defaultConfig)

export const styledTheme: StyledTheme = {
  changeThemeScheme: vi.fn(),
  themeScheme: "base",
  ...transformedTheme,
}
