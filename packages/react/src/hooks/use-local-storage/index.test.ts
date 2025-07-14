import { act, renderHook } from "@/test"
import { useLocalStorage } from "./"

describe("useLocalStorage", () => {
  const key = "testKey"
  const initialValue = "initialValue"
  const problematicValue = {
    get error() {
      throw new Error("Error during serialization")
    },
  }
  const corruptedJSON = "{this-is-not:json}"

  beforeEach(() => {
    localStorage.clear()
  })

  test("returns the default value", () => {
    const { result } = renderHook(() => useLocalStorage({ key }))
    expect(result.current[0]).toBe("")
  })

  test("returns the default value in the initial state", () => {
    const { result } = renderHook(() =>
      useLocalStorage({ key, defaultValue: initialValue }),
    )
    expect(result.current[0]).toBe(initialValue)
  })

  test("sets a value and saves it to localStorage", () => {
    const { result } = renderHook(() =>
      useLocalStorage({ key, defaultValue: initialValue }),
    )

    act(() => {
      result.current[1]("newValue")
    })

    expect(localStorage.getItem(key)).toBe(JSON.stringify("newValue"))
    expect(result.current[0]).toBe("newValue")
  })

  test("sets a value and callback function", () => {
    const { result } = renderHook(() =>
      useLocalStorage({ key, defaultValue: initialValue }),
    )

    act(() => {
      result.current[1]((prev) => "prev-" + prev)
    })

    expect(localStorage.getItem(key)).toBe(JSON.stringify("prev-initialValue"))
    expect(result.current[0]).toBe("prev-initialValue")
  })

  test("removes a value from localStorage", () => {
    const { result } = renderHook(() =>
      useLocalStorage({ key, defaultValue: initialValue }),
    )

    act(() => {
      result.current[2]()
    })

    expect(localStorage.getItem(key)).toBeNull()
    expect(result.current[0]).toBe(initialValue)
  })

  test("updates the value when a storage event occurs", () => {
    const { result } = renderHook(() =>
      useLocalStorage({ key, defaultValue: initialValue }),
    )

    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", {
          key,
          newValue: JSON.stringify("updatedValue"),
          storageArea: localStorage,
        }),
      )
    })

    expect(result.current[0]).toBe("updatedValue")
  })

  test("uses a custom serialize function", () => {
    const serialize = (value: any) => `serialized-${value}`

    const { result } = renderHook(() =>
      useLocalStorage({
        key,
        defaultValue: initialValue,
        serialize,
      }),
    )

    act(() => {
      result.current[1]("testValue")
    })

    expect(localStorage.getItem(key)).toBe("serialized-testValue")
  })

  test("uses a custom deserialize function", () => {
    const deserialize = (value: string | undefined) => {
      return `deserialized-${value}`
    }

    localStorage.setItem(key, initialValue)

    const { result } = renderHook(() => {
      return useLocalStorage({
        key,
        deserialize,
      })
    })

    expect(result.current[0]).toBe("deserialized-initialValue")
  })

  test("serializeJSON throws an error when serialization fails", () => {
    const { result } = renderHook(() =>
      useLocalStorage({
        key,
        defaultValue: problematicValue,
      }),
    )

    expect(() => {
      act(() => {
        result.current[1](problematicValue)
      })
    }).toThrow(
      "useLocalStorage use-local-storage: Failed to serialize the value",
    )
  })

  test("deserializeJSON returns input if JSON parsing fails", () => {
    localStorage.setItem(key, corruptedJSON)

    const { result } = renderHook(() => useLocalStorage({ key }))

    expect(result.current[0]).toBe(corruptedJSON)
  })

  test("deserializeJSON returns input if empty", () => {
    localStorage.setItem(key, "")

    const { result } = renderHook(() => useLocalStorage({ key }))

    expect(result.current[0]).toBe("")
  })
})
