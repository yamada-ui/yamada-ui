import { page, renderHook, system } from "#test/browser"
import { getValue, useValue } from "./"

describe("useValue", () => {
  test("Returns the base value when passing a responsive object", async () => {
    await page.viewport(1500, 800)
    const { result } = await renderHook(() =>
      useValue({ base: "base", md: "md" }),
    )
    expect(result.current).toBe("base")
  })

  test("Returns the correct breakpoint value based on the current screen width", async () => {
    await page.viewport(600, 800)
    const { result } = await renderHook(() =>
      useValue({ base: "base", md: "md" }),
    )
    expect(result.current).toBe("md")
  })

  test("Returns the correct value based on the current light mode", async () => {
    const { result } = await renderHook(() =>
      useValue(["lightValue", "darkValue"]),
    )
    expect(result.current).toBe("lightValue")
  })

  test("Returns the correct value based on the current dark mode", async () => {
    const { result } = await renderHook(
      () => useValue(["lightValue", "darkValue"]),
      {
        providerProps: { colorMode: "dark" },
      },
    )
    expect(result.current).toBe("darkValue")
  })

  test("Returns the same value when passing a normal value", async () => {
    const { result } = await renderHook(() => useValue("normalValue"))
    expect(result.current).toBe("normalValue")
  })
})

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
