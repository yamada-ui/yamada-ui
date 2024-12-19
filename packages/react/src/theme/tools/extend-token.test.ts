import defaultTheme from "../"
import { extendToken } from "./extend-token"

describe("extendToken", () => {
  test("should merge default token", () => {
    const token = extendToken("colors", { muted: "#333333" })

    const expected = {
      ...defaultTheme.colors,
      muted: "#333333",
    }

    expect(token).toStrictEqual(expected)
  })

  test("returns default token even if no token is set", () => {
    const token = extendToken("colors")

    const expected = {
      ...defaultTheme.colors,
    }

    expect(token).toStrictEqual(expected)
  })
})
