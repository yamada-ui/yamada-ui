import MatchMediaMock from "vitest-matchmedia-mock"
import { renderHook, styledTheme } from "../../../test"
import { getValue, useValue } from "./"

describe("useValue", () => {
  let matchMediaMock: MatchMediaMock

  beforeAll(() => {
    matchMediaMock = new MatchMediaMock()
  })

  afterEach(() => {
    matchMediaMock.clear()
  })

  afterAll(() => {
    matchMediaMock.destroy()
  })

  test("Returns the base value when passing a responsive object", () => {
    const { result } = renderHook(() => useValue({ base: "base", md: "md" }))
    expect(result.current).toBe("base")
  })

  test("Returns the correct breakpoint value based on the current screen width", () => {
    matchMediaMock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")
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
})

describe("getValue", () => {
  let matchMediaMock: MatchMediaMock

  beforeAll(() => {
    matchMediaMock = new MatchMediaMock()
  })

  afterEach(() => {
    matchMediaMock.clear()
  })

  afterAll(() => {
    matchMediaMock.destroy()
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
    matchMediaMock.useMediaQuery("(min-width: 481px) and (max-width: 768px)")

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

  test("Returns the correct value when providing a not responsive object", () => {
    const value = getValue([{ light: "light" }, { dark: "dark" }])(
      styledTheme,
      "light",
      "base",
    )
    expect(value).toStrictEqual({ light: "light" })
  })
})
