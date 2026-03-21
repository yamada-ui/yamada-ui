import { system } from "#test/system"
import { generateFunction } from "./function"

describe("function", () => {
  test("transforms value", () => {
    const transform = generateFunction("blur")
    expect(transform("10px", { system })).toBe("blur(10px)")
  })
})
