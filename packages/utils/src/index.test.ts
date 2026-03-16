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
})
