import { useMounted } from "."
import { renderHook } from "../../../test"

describe("useIsMounted", () => {
  test("should return true after component is mounted and false after unmount", () => {
    const { result, unmount } = renderHook(() => useMounted())
    expect(result.current[0]()).toBeTruthy()
    unmount()
    expect(result.current[0]()).toBeFalsy()
  })
})
