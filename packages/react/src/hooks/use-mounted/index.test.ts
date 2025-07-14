import { renderHook } from "@/test"
import { useMounted } from "."

describe("useMounted", () => {
  test("should return true after component is mounted and false after unmount", () => {
    const { result, unmount } = renderHook(() => useMounted())
    expect(result.current()).toBeTruthy()
    unmount()
    expect(result.current()).toBeFalsy()
  })
})
