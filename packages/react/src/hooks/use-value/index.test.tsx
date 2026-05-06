import { system } from "#test"
import { getValue } from "./"

describe("getValue", () => {
  test("Returns the base value when passed a responsive object", () => {
    const value = getValue({ base: "base", md: "md" })(system, "light", "base")
    expect(value).toBe("base")
  })

  test("Returns the correct breakpoint value based on the current screen width", () => {
    const value = getValue({ base: "base", md: "md" })(system, "light", "md")
    expect(value).toBe("md")
  })

  test("Returns the correct value based on the current light mode", () => {
    const value = getValue(["lightValue", "darkValue"])(system, "light", "base")
    expect(value).toBe("lightValue")
  })

  test("Returns the correct value based on the current dark mode", () => {
    const value = getValue(["lightValue", "darkValue"])(system, "dark", "base")
    expect(value).toBe("darkValue")
  })

  test("Returns the same value when passed a normal value", () => {
    const value = getValue("normalValue")(system, "light", "base")
    expect(value).toBe("normalValue")
  })

  test("Returns the correct value when providing a not responsive object", () => {
    const value = getValue([{ light: "light" }, { dark: "dark" }])(
      system,
      "light",
      "base",
    )
    expect(value).toStrictEqual({ light: "light" })
  })
})
