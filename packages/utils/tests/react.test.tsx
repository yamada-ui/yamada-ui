import { act, renderHook, waitFor } from "@yamada-ui/test"
import { createRef } from "react"
import {
  assignRef,
  createContext,
  createId,
  cx,
  findChildren,
  getValidChildren,
  includesChildren,
  isRefObject,
  isValidElement,
  mergeRefs,
  omitChildren,
  pickChildren,
  useAsync,
  useAsyncFunc,
  useAsyncRetry,
  useCallbackRef,
  useMergeRefs,
  useMounted,
  useSafeLayoutEffect,
  useUnmountEffect,
  useUpdateEffect,
} from "../src"

describe("React", () => {
  describe("createContext", () => {
    test("should create a context with the provided options", () => {
      const [Provider, useContext, Context] = createContext({
        name: "TestContext",
      })
      expect(Context.displayName).toBe("TestContext")
      expect(typeof useContext).toBe("function")
      expect(typeof Provider).toBe("object")
    })
  })

  describe("useSafeLayoutEffect", () => {
    test("should use useLayoutEffect when document is defined", () => {
      expect(useSafeLayoutEffect).toBeDefined()
    })
  })

  describe("useUnmountEffect", () => {
    test("should call callback on component unmount", () => {
      const mockCallback = vi.fn()
      const { unmount } = renderHook(() => useUnmountEffect(mockCallback))
      unmount()
      expect(mockCallback).toHaveBeenCalledWith()
    })
  })

  describe("useIsMounted", () => {
    test("should return true after component is mounted and false after unmount", () => {
      const { result, unmount } = renderHook(() => useMounted())
      expect(result.current[0]()).toBeTruthy()
      unmount()
      expect(result.current[0]()).toBeFalsy()
    })
  })

  describe("getValidChildren", () => {
    test("should filter out non-valid React elements", () => {
      const children = [
        <div key="1">Valid</div>,
        "String",
        null,
        <span key="2">Another Valid</span>,
      ]
      const validChildren = getValidChildren(children)
      expect(validChildren).toHaveLength(2)
      expect(validChildren[0]?.type).toBe("div")
      expect(validChildren[1]?.type).toBe("span")
    })
  })

  describe("isValidElement", () => {
    test("should return true for valid React elements", () => {
      const validElement = <div>Valid</div>
      expect(isValidElement(validElement)).toBeTruthy()
    })

    test("should return true for string", () => {
      expect(isValidElement("string")).toBeTruthy()
    })

    test("should return true for number", () => {
      expect(isValidElement(123)).toBeTruthy()
    })

    test("should return false for undefined", () => {
      expect(isValidElement(undefined)).toBeFalsy()
    })
  })

  describe("findChildren", () => {
    test("should find children of specified types", () => {
      const children = [
        <div key="1">Div</div>,
        <span key="2">Span</span>,
        <section key="3">Section</section>,
      ]
      const [foundChild, ...rest] = findChildren(children, "span")
      expect(foundChild?.type).toBe("span")
      expect(rest).toHaveLength(2)
    })
  })

  describe("includesChildren", () => {
    test("should return true if children include specified types", () => {
      const children = [
        <div key="1">
          <span>Inside Div</span>
        </div>,
        <section key="2">Section</section>,
      ]
      expect(includesChildren(children, "span")).toBeTruthy()
    })

    test("should return false if children do not include specified types", () => {
      const children = [
        <div key="1">Div</div>,
        <section key="2">Section</section>,
      ]
      expect(includesChildren(children, "span")).toBeFalsy()
    })
  })

  describe("omitChildren", () => {
    test("should omit children of specified types", () => {
      const children = [
        <div key="1">Div</div>,
        <span key="2">Span</span>,
        <section key="3">Section</section>,
      ]
      const omittedChildren = omitChildren(children, "span")
      expect(omittedChildren).toHaveLength(2)
      expect(omittedChildren.some((child) => child.type === "span")).toBeFalsy()
    })
  })

  describe("pickChildren", () => {
    test("should pick only children of specified types", () => {
      const children = [
        <div key="1">Div</div>,
        <span key="2">Span</span>,
        <section key="3">Section</section>,
      ]
      const pickedChildren = pickChildren(children, "span")
      expect(pickedChildren).toHaveLength(1)
      expect(pickedChildren[0]?.type).toBe("span")
    })
  })

  describe("cx", () => {
    test("should concatenate class names", () => {
      const classNames = cx("class1", undefined, "class2")
      expect(classNames).toBe("class1 class2")
    })
  })

  describe("isRefObject", () => {
    test("should return true for ref objects", () => {
      const refObject = { current: null }
      expect(isRefObject(refObject)).toBeTruthy()
    })

    test("should return false for non-ref objects", () => {
      const nonRefObject = { notCurrent: null }
      expect(isRefObject(nonRefObject)).toBeFalsy()
    })

    test("should return false for null", () => {
      expect(isRefObject(null)).toBeFalsy()
    })

    test("should return false for undefined", () => {
      expect(isRefObject(undefined)).toBeFalsy()
    })
  })

  describe("useMergeRefs", () => {
    test("should merge multiple refs into a single callback ref", () => {
      const ref1 = createRef()
      const ref2 = createRef()

      const { result } = renderHook(() => useMergeRefs(ref1, ref2))

      const el = document.createElement("div")

      act(() => {
        const mergedRef = result.current
        mergedRef(el)
      })

      expect(ref1.current).toBe(el)
      expect(ref2.current).toBe(el)
    })
  })

  describe("useCallbackRef", () => {
    test("should return a stable callback ref that calls the latest callback", () => {
      let latestValue = 0
      const { result } = renderHook(() =>
        useCallbackRef(() => {
          latestValue += 1
        }),
      )
      act(() => {
        result.current()
      })
      expect(latestValue).toBe(1)
    })
  })

  describe("assignRef", () => {
    test("should assign a value to a ref object", () => {
      const refObject = { current: null }
      assignRef(refObject, 123)
      expect(refObject.current).toBe(123)
    })

    test("should call a ref callback with a value", () => {
      const refCallback = vi.fn()
      assignRef(refCallback, 123)
      expect(refCallback).toHaveBeenCalledWith(123)
    })
  })

  describe("mergeRefs", () => {
    test("should merge multiple refs", () => {
      const refObject1 = createRef()
      const refObject2 = createRef()
      const mergedRef = mergeRefs(refObject1, refObject2)
      const el = document.createElement("div")
      mergedRef(el)
      expect(refObject1.current).toBe(el)
      expect(refObject2.current).toBe(el)
    })
  })

  describe("useUpdateEffect", () => {
    test("should not call effect on initial render", () => {
      const effect = vi.fn()
      renderHook(() => useUpdateEffect(effect, []))
      expect(effect).not.toHaveBeenCalled()
    })
  })

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

      expect(result.current.value).toBe("success")
    })
  })

  describe("createId", () => {
    test("should create a unique id with prefix", () => {
      const id1 = createId("prefix")
      const id2 = createId("prefix")
      expect(id1).not.toBe(id2)
      expect(id1.startsWith("prefix-")).toBeTruthy()
      expect(id2.startsWith("prefix-")).toBeTruthy()
    })
  })
})
