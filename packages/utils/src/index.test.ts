import type { Path, Primitive } from "./index.types"
import * as utils from "."

describe("index", () => {
  test("should re-export all modules", () => {
    expect(utils).toBeDefined()
    expect(typeof utils.filterEmpty).toBe("function")
    expect(typeof utils.isString).toBe("function")
    expect(typeof utils.cx).toBe("function")
    expect(typeof utils.createdDom).toBe("function")
    expect(typeof utils.isMouseEvent).toBe("function")
    expect(typeof utils.noop).toBe("function")
    expect(typeof utils.wait).toBe("function")
    expect(typeof utils.isRtl).toBe("function")
    expect(typeof utils.omitObject).toBe("function")
    expect(typeof utils.isNumber).toBe("function")
    expect(typeof utils.calc).toBe("function")
  })

  test("should include array and object keys in Path", () => {
    expectTypeOf<
      Path<{
        array: [0, 0]
        object: { value: 0 }
      }>
    >().toEqualTypeOf<"array" | "object" | "object.value" | `array.${number}`>()
  })

  test("should include Date and Function in Primitive", () => {
    expectTypeOf<Primitive>().toEqualTypeOf<
      | bigint
      | boolean
      | Date
      | Function
      | null
      | number
      | string
      | symbol
      | undefined
    >()
  })
})
