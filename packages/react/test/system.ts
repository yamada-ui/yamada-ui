import type { StyledTheme } from "../src/core/system/index.types"
import { vi } from "vitest"

import { theme as defaultTheme } from "../src/theme"
import { config as defaultConfig } from "../src/theme/config"

import { createSystem } from "../src/core/system/create-system"

export const system = createSystem(defaultTheme, defaultConfig)

export const styledTheme: StyledTheme = {
  changeThemeScheme: vi.fn(),
  themeScheme: "base",
  ...defaultTheme,
}
