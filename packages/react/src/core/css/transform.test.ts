import { system } from "#test"
import { transform } from "./transform"

describe("transform", () => {
  test("transforms value", () => {
    const value = "rotate(45deg)"
    const result = transform(value, {
      prev: {},
      properties: ["transform"],
      system,
    })
    expect(result).toStrictEqual({ transform: "rotate(45deg)" })
  })
})
