import { renderHook } from "#test/browser"
import { useAsync, useAsyncFunc, useAsyncRetry } from "."

describe("useAsync", () => {
  test("should handle async function execution", async () => {
    const asyncFunction = async () => Promise.resolve("test")
    const { result } = await renderHook(() => useAsync(asyncFunction, []))
    await expect.poll(() => result.current.value).toBe("test")
  })
})

describe("useAsyncFunc", () => {
  test("should return a function that handles async execution", async () => {
    const asyncFunction = async () => Promise.resolve("test")
    const { act, result } = await renderHook(() =>
      useAsyncFunc(asyncFunction, []),
    )

    let asyncResult: string | undefined

    await act(async () => {
      asyncResult = await result.current[1]()
    })

    expect(asyncResult).toBe("test")
  })
})

describe("useAsyncRetry", () => {
  test("should retry async function on retry call", async () => {
    let attempt = 0
    const asyncFunction = async () =>
      new Promise((resolve, reject) => {
        attempt += 1
        if (attempt === 2) {
          resolve("success")
        } else {
          reject("fail")
        }
      })
    const { act, result } = await renderHook(() =>
      useAsyncRetry(asyncFunction, []),
    )

    await expect.poll(() => result.current.loading).toBeFalsy()
    await act(() => {
      result.current.retry()
    })
    await expect.poll(() => result.current.loading).toBeFalsy()
    await expect.poll(() => result.current.value).toBe("success")
  })
})
