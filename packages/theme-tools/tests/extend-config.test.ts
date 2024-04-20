import type { ThemeConfig } from "@yamada-ui/core"
import { defaultConfig } from "@yamada-ui/theme"
import { extendConfig } from "../src"

describe("extendConfig", () => {
  test("should merge default config", () => {
    const customConfig: ThemeConfig = {
      initialColorMode: "dark",
    }

    const expected = {
      ...defaultConfig,
      ...customConfig,
    }

    expect(extendConfig(customConfig)).toStrictEqual(expected)
  })
})
