import type { ThemeConfig } from "../../core"
import { defaultConfig } from "../"
import { extendConfig } from "./extend-config"

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
