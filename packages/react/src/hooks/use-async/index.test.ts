import { useAsync, useAsyncFunc, useAsyncRetry } from "."
import { act, renderHook, waitFor } from "../../../test"

describe("useAsync", () => {
  test("should handle async function execution", async () => {
    const asyncFunction = async () => Promise.resolve("test")
    const { result } = renderHook(() => useAsync(asyncFunction, []))
    await waitFor(() => {
      expect(result.current.value).toBe("test")
    })
  })
})

describe("useAsyncFunc", () => {
  test("should return a function that handles async execution", async () => {
    const asyncFunction = async () => Promise.resolve("test")
    const { result } = renderHook(() => useAsyncFunc(asyncFunction, []))

    let asyncResult: Promise<string>

    act(() => {
      asyncResult = result.current[1]()
    })

    await waitFor(async () => {
      await expect(asyncResult).resolves.toBe("test")
    })
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
    const { result } = renderHook(() => useAsyncRetry(asyncFunction, []))

    expect(result.current.loading).toBeTruthy()

    await waitFor(() => expect(result.current.loading).toBeFalsy())
    await waitFor(() => {
      result.current.retry()
    })
    await waitFor(() => expect(result.current.loading).toBeFalsy())
    await waitFor(() => expect(result.current.value).toBe("success"))
  })
})
