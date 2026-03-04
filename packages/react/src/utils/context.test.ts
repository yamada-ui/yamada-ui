import { renderHook } from "#test"
import { createContext } from "./context"

describe("createContext", () => {
  test("should create a context with the provided options", () => {
    const [Context, useContext] = createContext({
      name: "TestContext",
    })
    expect(Context.displayName).toBe("TestContext")
    expect(typeof useContext).toBe("function")
    expect(typeof Context).toBe("object")
  })

  test("should throw error when strict mode is enabled and context is undefined", () => {
    const [, useContext] = createContext({
      name: "StrictContext",
      strict: true,
    })

    expect(() => {
      renderHook(() => useContext())
    }).toThrowError(
      "useStrictContext returned `undefined`. Seems you forgot to wrap component within StrictContext",
    )
  })

  test("should not throw when strict is false and context is undefined", () => {
    const [, useContext] = createContext({
      name: "NonStrictContext",
      strict: false,
    })

    const { result } = renderHook(() => useContext())
    expect(result.current).toBeUndefined()
  })
})
