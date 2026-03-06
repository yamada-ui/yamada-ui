import { system } from "#test"
import { generateFilter } from "./filter"

describe("generateFilter", () => {
  test("generates filter CSS with properties", () => {
    const transform = generateFilter("filter")
    const result = transform("10px", {
      prev: {},
      properties: ["--blur"] as any,
      system,
    })
    expect(result).toStrictEqual({
      "--blur": "10px",
      filter: " var(--blur)",
    })
  })

  test("appends to existing filter from prev", () => {
    const transform = generateFilter("filter")
    const result = transform("10px", {
      prev: { filter: "brightness(0.5)" },
      properties: ["--blur"] as any,
      system,
    })
    expect(result).toStrictEqual({
      "--blur": "10px",
      filter: "brightness(0.5) var(--blur)",
    })
  })

  test("generates backdropFilter CSS", () => {
    const transform = generateFilter("backdropFilter")
    const result = transform("5px", {
      prev: {},
      properties: ["--backdrop-blur"] as any,
      system,
    })
    expect(result).toStrictEqual({
      "--backdrop-blur": "5px",
      backdropFilter: " var(--backdrop-blur)",
    })
  })

  test("defaults to filter type", () => {
    const transform = generateFilter()
    const result = transform("10px", {
      prev: {},
      properties: ["--blur"] as any,
      system,
    })
    expect(result.filter).toBeDefined()
  })
})
