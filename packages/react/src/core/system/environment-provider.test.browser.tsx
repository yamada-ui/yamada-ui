import { renderHook } from "#test/browser"
import { EnvironmentProvider, useEnvironment } from "./environment-provider"

describe("EnvironmentProvider", () => {
  test("provides default environment with document access", async () => {
    const { result } = await renderHook(() => useEnvironment(), {
      withProvider: false,
    })
    expect(result.current.getDocument()).toBe(document)
    expect(result.current.getWindow()).toBe(window)
    expect(result.current.getRootNode()).toBeDefined()
  })

  test("provides custom root node via value prop", async () => {
    const customNode = document.createElement("div")
    const { result } = await renderHook(() => useEnvironment(), {
      withProvider: false,
      wrapper: ({ children }) => (
        <EnvironmentProvider value={customNode}>{children}</EnvironmentProvider>
      ),
    })
    expect(result.current.getRootNode()).toBe(customNode)
  })

  test("provides custom root node via function value", async () => {
    const customNode = document.createElement("div")
    const { result } = await renderHook(() => useEnvironment(), {
      withProvider: false,
      wrapper: ({ children }) => (
        <EnvironmentProvider value={() => customNode}>
          {children}
        </EnvironmentProvider>
      ),
    })
    expect(result.current.getRootNode()).toBe(customNode)
  })
})
