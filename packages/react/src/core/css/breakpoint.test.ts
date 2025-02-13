import type { StyledTheme } from "../theme"
import { defaultTheme } from "../../theme"
import { transformTheme } from "../theme"
import { getMinMaxQuery } from "./breakpoint"

describe("getMinMaxQuery", () => {
  test("down direction with specific breakpoints", () => {
    const theme = transformTheme(defaultTheme, {
      breakpoint: { direction: "down" },
    }) as StyledTheme
    const queries = theme.__breakpoints?.queries ?? []
    const direction = theme.__config?.breakpoint?.direction ?? "down"
    const pickKey = ["sm", "md"]
    const result = getMinMaxQuery(queries, direction, pickKey)
    expect(result.minQuery).toStrictEqual(queries[5])
    expect(result.maxQuery).toStrictEqual(queries[4])
  })

  test("up direction with specific breakpoints", () => {
    const theme = transformTheme(defaultTheme, {
      breakpoint: { direction: "up" },
    }) as StyledTheme
    const queries = theme.__breakpoints?.queries ?? []
    const direction = theme.__config?.breakpoint?.direction ?? "down"
    const pickKey = ["lg", "xl"]
    const result = getMinMaxQuery(queries, direction, pickKey)
    expect(result.minQuery).toStrictEqual(queries[3])
    expect(result.maxQuery).toStrictEqual(queries[4])
  })

  test("empty pickKey array should return undefined for both minQuery and maxQuery", () => {
    const theme = transformTheme(defaultTheme, {
      breakpoint: { direction: "down" },
    }) as StyledTheme
    const queries = theme.__breakpoints?.queries ?? []
    const direction = theme.__config?.breakpoint?.direction ?? "down"
    const pickKey: string[] = []
    const result = getMinMaxQuery(queries, direction, pickKey)
    expect(result.minQuery).toBeUndefined()
    expect(result.maxQuery).toBeUndefined()
  })

  test("non-existent breakpoints in pickKey should return undefined for both minQuery and maxQuery", () => {
    const theme = transformTheme(defaultTheme, {
      breakpoint: { direction: "down" },
    }) as StyledTheme
    const queries = theme.__breakpoints?.queries ?? []
    const direction = theme.__config?.breakpoint?.direction ?? "down"
    const pickKey = ["xxl"]
    const result = getMinMaxQuery(queries, direction, pickKey)
    expect(result.minQuery).toBeUndefined()
    expect(result.maxQuery).toBeUndefined()
  })
})
