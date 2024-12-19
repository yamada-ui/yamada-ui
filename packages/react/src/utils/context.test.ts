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
})
