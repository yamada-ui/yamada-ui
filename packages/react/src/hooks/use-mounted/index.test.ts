import { renderHook } from "#test/browser"
import { useMounted } from "."

describe("useMounted", () => {
  test("should return true after component is mounted and false after unmount", async () => {
    const { result, unmount } = await renderHook(() => useMounted())
    expect(result.current()).toBeTruthy()
    unmount()
    expect(result.current()).toBeFalsy()
  })

  test("should return mounted state when state is true", async () => {
    const { result } = await renderHook(() => useMounted({ state: true }))

    expect(result.current).toBeTruthy()
  })

  test("should return mounted state with delay when state is true and delay is set", async () => {
    const { result } = await renderHook(() =>
      useMounted({ delay: 50, state: true }),
    )

    expect(result.current).toBeFalsy()

    await expect.poll(() => result.current).toBeTruthy()
  })
})
