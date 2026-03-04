import { renderHook } from "#test"
import { useSsr } from "./ssr"

describe("useSsr", () => {
  test("should return false in browser environment", () => {
    const { result } = renderHook(() => useSsr())
    expect(result.current).toBeFalsy()
  })
})
