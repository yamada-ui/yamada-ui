import { renderHook } from "#test"
import { useLocalStorage } from "./"

describe("useLocalStorage", () => {
  const key = "testKey"

  beforeEach(() => {
    localStorage.clear()
  })

  test("returns the default value", () => {
    const { result } = renderHook(() => useLocalStorage({ key }))

    expect(result.current[0]).toBe("")
  })
})
