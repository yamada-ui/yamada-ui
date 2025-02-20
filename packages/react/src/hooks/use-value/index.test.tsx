import type { MatchMediaMock } from "@yamada-ui/test"
import { matchMedia } from "@yamada-ui/test"
import { renderHook, styledTheme } from "../../../test"
import { getValue, useValue } from "./"

describe("useValue", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = matchMedia()
  })

  afterEach(() => {
    mock.clear()
  })

  test("Returns the base value when passing a responsive object", () => {
    const { result } = renderHook(() => useValue({ base: "base", md: "md" }))
    expect(result.current).toBe("base")
  })

  test("Returns the correct breakpoint value based on the current screen width", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")
    const { result } = renderHook(() => useValue({ base: "base", md: "md" }))
    expect(result.current).toBe("md")
  })

  test("Returns the correct value based on the current light mode", () => {
    const { result } = renderHook(() => useValue(["lightValue", "darkValue"]))
    expect(result.current).toBe("lightValue")
  })

  test("Returns the correct value based on the current dark mode", () => {
    const { result } = renderHook(() => useValue(["lightValue", "darkValue"]), {
      providerProps: { colorMode: "dark" },
    })
    expect(result.current).toBe("darkValue")
  })

  test("Returns the same value when passing a normal value", () => {
    const { result } = renderHook(() => useValue("normalValue"))
    expect(result.current).toBe("normalValue")
  })

  test("Returns the correct value when passing an array containing objects for breakpoints", () => {
    const { result } = renderHook(() =>
      useValue([
        { base: "light-base", md: "light-md" },
        { base: "dark-base", md: "dark-md" },
      ]),
    )
    expect(result.current).toBe("light-base")
  })

  test("Returns the correct value when passing an object containing arrays for color mode", () => {
    const { result } = renderHook(() =>
      useValue({
        base: ["base-light", "base-dark"],
        md: ["md-light", "md-dark"],
      }),
    )
    expect(result.current).toBe("base-light")
  })
})

describe("getValue", () => {
  let mock: MatchMediaMock

  beforeAll(() => {
    mock = matchMedia()
  })

  afterEach(() => {
    mock.clear()
  })

  test("Returns the base value when passed a responsive object", () => {
    const value = getValue({ base: "base", md: "md" })(
      styledTheme,
      "light",
      "base",
    )
    expect(value).toBe("base")
  })

  test("Returns the correct breakpoint value based on the current screen width", () => {
    mock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

    const value = getValue({ base: "base", md: "md" })(
      styledTheme,
      "light",
      "md",
    )
    expect(value).toBe("md")
  })

  test("Returns the correct value based on the current light mode", () => {
    const value = getValue(["lightValue", "darkValue"])(
      styledTheme,
      "light",
      "base",
    )
    expect(value).toBe("lightValue")
  })

  test("Returns the correct value based on the current dark mode", () => {
    const value = getValue(["lightValue", "darkValue"])(
      styledTheme,
      "dark",
      "base",
    )
    expect(value).toBe("darkValue")
  })

  test("Returns the same value when passed a normal value", () => {
    const value = getValue("normalValue")(styledTheme, "light", "base")
    expect(value).toBe("normalValue")
  })

  test("Returns the correct value when passing an array containing objects for breakpoints", () => {
    const value = getValue([
      { base: "light-base", md: "light-md" },
      { base: "dark-base", md: "dark-md" },
    ])(styledTheme, "light", "base")
    expect(value).toBe("light-base")
  })

  test("Returns the correct value when passing an object containing arrays for color mode", () => {
    const value = getValue({
      base: ["base-light", "base-dark"],
      md: ["md-light", "md-dark"],
    })(styledTheme, "light", "base")
    expect(value).toBe("base-light")
  })

  test("Returns the correct value when providing a not responsive object", () => {
    const value = getValue([{ light: "light" }, { dark: "dark" }])(
      styledTheme,
      "light",
      "base",
    )
    expect(value).toStrictEqual({ light: "light" })
  })
})
