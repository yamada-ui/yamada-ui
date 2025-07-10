import { calc } from "./calc"

describe("Calc", () => {
  test("add", () => {
    expect(calc(5).add(3).toString()).toBe("calc(5 + 3)")
    expect(calc("10px").add("20px").toString()).toBe("calc(10px + 20px)")
  })

  test("subtract", () => {
    expect(calc(10).subtract(5).toString()).toBe("calc(10 - 5)")
    expect(calc("30px").subtract("10px").toString()).toBe("calc(30px - 10px)")
  })

  test("multiply", () => {
    expect(calc(3).multiply(4).toString()).toBe("calc(3 * 4)")
    expect(calc("10px").multiply(2).toString()).toBe("calc(10px * 2)")
  })

  test("divide", () => {
    expect(calc(10).divide(2).toString()).toBe("calc(10 / 2)")
    expect(calc("20px").divide(2).toString()).toBe("calc(20px / 2)")
  })

  test("negate", () => {
    expect(calc(10).negate().toString()).toBe("-10")
    expect(calc(-10).negate().toString()).toBe("10")
    expect(calc("10px").negate().toString()).toBe("-10px")
  })

  test("chain methods", () => {
    expect(calc(10).add(2).subtract(5).multiply(2).divide(2).toString()).toBe(
      "calc((((10 + 2) - 5) * 2) / 2)",
    )
    expect(
      calc("10px").add("20px").subtract("5px").multiply(2).divide(2).toString(),
    ).toBe("calc((((10px + 20px) - 5px) * 2) / 2)")
  })
})
