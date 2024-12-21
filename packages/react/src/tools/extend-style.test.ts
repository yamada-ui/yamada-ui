import defaultTheme from "../theme"
import { extendStyle } from "./extend-style"

describe("extendStyle", () => {
  test("should merge default style", () => {
    const style = extendStyle("resetStyle", {
      span: { display: "inline-block" },
    })

    const expected = {
      ...defaultTheme.styles.resetStyle,
      span: { display: "inline-block" },
    }

    expect(style).toStrictEqual(expected)
  })
})
