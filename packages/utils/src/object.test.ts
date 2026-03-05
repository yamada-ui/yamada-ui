import {
  extractFlatObject,
  extractObject,
  filterObject,
  filterUndefined,
  flattenObject,
  getMemoizedObject,
  getObject,
  memoizeObject,
  merge,
  objectKeys,
  omitObject,
  pickObject,
  replaceObject,
  splitObject,
  wrapWithKey,
} from "./object"

describe("Object", () => {
  describe("omitObject", () => {
    test("should omit specified keys from an object", () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(omitObject(obj, ["a", "c"])).toStrictEqual({ b: 2 })
    })

    test("should return original object when keys is empty", () => {
      const obj = { a: 1, b: 2 }
      expect(omitObject(obj, [])).toBe(obj)
    })
  })

  describe("pickObject", () => {
    test("should pick specified keys from an object", () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(pickObject(obj, ["a", "c"])).toStrictEqual({ a: 1, c: 3 })
    })

    test("should return empty object when keys is empty", () => {
      expect(pickObject({ a: 1, b: 2 }, [])).toStrictEqual({})
    })

    test("should ignore keys not present in object", () => {
      const obj = { a: 1, b: 2 }
      expect(pickObject(obj, ["a", "c" as any])).toStrictEqual({ a: 1 })
    })
  })

  describe("splitObject", () => {
    test("should split an object into two objects based on specified keys", () => {
      const obj = { a: 1, b: 2, c: 3 }
      const [picked, omitted] = splitObject(obj, ["a", "c"])
      expect(picked).toStrictEqual({ a: 1, c: 3 })
      expect(omitted).toStrictEqual({ b: 2 })
    })

    test("should split an object using a function predicate", () => {
      const obj = { a: 1, b: 2, c: 3 }
      const [picked, omitted] = splitObject(
        obj,
        (key: string) => key === "a" || key === "c",
      )
      expect(picked).toStrictEqual({ a: 1, c: 3 })
      expect(omitted).toStrictEqual({ b: 2 })
    })
  })

  describe("filterObject", () => {
    test("should filter an object based on a predicate function", () => {
      const obj = { a: 1, b: 2, c: 3 }
      const result = filterObject(obj, (_, value) => value > 1)
      expect(result).toStrictEqual({ b: 2, c: 3 })
    })
  })

  describe("filterUndefined", () => {
    test("should filter out undefined values from an object", () => {
      const obj = { a: 1, b: undefined, c: 3 }
      expect(filterUndefined(obj)).toStrictEqual({ a: 1, c: 3 })
    })
  })

  describe("merge", () => {
    test("should merge two objects deeply", () => {
      const obj1 = { a: 1, b: { c: 2 } }
      const obj2 = { b: { d: 3 }, e: 4 }
      expect(merge(obj1, obj2)).toStrictEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 })
    })

    test("should merge arrays when mergeArray is true", () => {
      const obj1 = { a: [1, 2] }
      const obj2 = { a: [3, 4] }
      expect(
        merge(obj1, obj2, { mergeArray: true, shouldProcess: () => true }),
      ).toStrictEqual({
        a: [1, 2, 3, 4],
      })
    })

    test("should replace target with source when target is not an object", () => {
      expect(merge("not-object", { a: 1 })).toStrictEqual({ a: 1 })
    })

    test("should skip processing when shouldProcess returns false", () => {
      const obj1 = { a: 1 }
      const obj2 = { a: 2, b: 3 }
      const result = merge(obj1, obj2, {
        shouldProcess: (value) => typeof value !== "number" || value !== 2,
      })
      expect(result).toStrictEqual({ a: 2, b: 3 })
    })

    test("should assign function values directly", () => {
      const fn = () => "hello"
      const obj1 = { a: 1 }
      const obj2 = { a: fn }
      expect(merge(obj1, obj2).a).toBe(fn)
    })

    test("should not process source when shouldProcess returns false for it", () => {
      const obj1 = { a: 1 }
      const obj2 = { a: 2 }
      const result = merge(obj1, obj2, { shouldProcess: () => false })
      expect(result).toStrictEqual({ a: 1 })
    })

    test("should return copy of target when source is not an object", () => {
      const obj1 = { a: 1 }
      expect(merge(obj1, null)).toStrictEqual({ a: 1 })
      expect(merge(obj1, "string")).toStrictEqual({ a: 1 })
      expect(merge(obj1, 42)).toStrictEqual({ a: 1 })
    })
  })

  describe("extractObject", () => {
    test("should extract values using a getter function", () => {
      const obj = { a: { value: 1 }, b: { value: 2 } }
      expect(extractObject(obj, (v) => v.value)).toStrictEqual({ a: 1, b: 2 })
    })
  })

  describe("extractFlatObject", () => {
    test("should extract and flatten values", () => {
      const obj = { a: 1, b: 2 }
      expect(extractFlatObject(obj, (v) => v * 2)).toStrictEqual({
        a: 2,
        b: 4,
      })
    })

    test("should recursively flatten with condition", () => {
      const obj = { a: { b: 1, c: { d: 2 } } }
      const result = extractFlatObject(
        obj,
        (v) => v,
        (_key, value) => typeof value === "object",
      )
      expect(result).toStrictEqual({ "a.b": 1, "a.c.d": 2 })
    })
  })

  describe("flattenObject", () => {
    test("should flatten an object to a specified depth", () => {
      const obj = { a: 1, b: { c: 2, d: { e: 3 } } }
      expect(flattenObject(obj, { maxDepth: 2 })).toStrictEqual({
        a: 1,
        "b.c": 2,
        "b.d": { e: 3 },
      })
    })

    test("should flatten an object with a custom separator", () => {
      const obj = { a: 1, b: { c: 2, d: { e: 3 } } }
      expect(flattenObject(obj, { separator: "-" })).toStrictEqual({
        a: 1,
        "b-c": 2,
        "b-d-e": 3,
      })
    })

    test("should flatten an object with a shouldProcess function", () => {
      const obj = { a: 1, b: { c: 2, d: { e: 3 } } }
      expect(
        flattenObject(obj, { shouldProcess: (value) => !("e" in value) }),
      ).toStrictEqual({
        a: 1,
        "b.c": 2,
        "b.d": { e: 3 },
      })
    })

    test("should return non-object/non-array values as-is", () => {
      expect(flattenObject("hello" as any)).toBe("hello")
      expect(flattenObject(42 as any)).toBe(42)
    })
  })

  describe("objectKeys", () => {
    test("should return the keys of an object", () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(objectKeys(obj)).toStrictEqual(["a", "b", "c"])
    })
  })

  describe("replaceObject", () => {
    test("should replace values in an object based on a callback function", () => {
      const obj = { a: 1, b: 2, c: 3 }
      const result = replaceObject(obj, (value) => value * 2)
      expect(result).toStrictEqual({ a: 2, b: 4, c: 6 })
    })

    test("should map array values with callback", () => {
      const arr = [1, 2, 3]
      expect(replaceObject(arr, (v) => v * 2)).toStrictEqual([2, 4, 6])
    })

    test("should apply callback to primitive values", () => {
      expect(replaceObject(5 as any, (v) => v * 2)).toBe(10)
    })
  })

  describe("getObject", () => {
    test("should get a value from an object by path", () => {
      const obj = { a: { b: { c: 1 } } }
      expect(getObject(obj, "a.b.c")).toBe(1)
    })

    test("should support bracket notation", () => {
      const obj = { a: [10, 20, 30] }
      expect(getObject(obj, "a[1]")).toBe(20)
    })

    test("should support numeric path", () => {
      const obj = { 0: "first", 1: "second" }
      expect(getObject(obj, 0)).toBe("first")
    })

    test("should return fallback when path does not exist", () => {
      const obj = { a: 1 }
      expect(getObject(obj, "b.c", "default")).toBe("default")
    })

    test("should return fallback when obj is undefined", () => {
      expect(getObject(undefined, "a", "fallback")).toBe("fallback")
    })
  })

  describe("memoizeObject", () => {
    test("should cache results for the same object and path", () => {
      const fn = vi.fn(getObject)
      const memoized = memoizeObject(fn)
      const obj = { a: 1 }

      expect(memoized(obj, "a")).toBe(1)
      expect(memoized(obj, "a")).toBe(1)
      expect(fn).toHaveBeenCalledTimes(1)
    })

    test("should handle undefined obj", () => {
      const memoized = memoizeObject(getObject)
      expect(memoized(undefined as any, "a", "fallback")).toBe("fallback")
    })

    test("should cache separately for different paths", () => {
      const memoized = memoizeObject(getObject)
      const obj = { a: 1, b: 2 }
      expect(memoized(obj, "a")).toBe(1)
      expect(memoized(obj, "b")).toBe(2)
    })
  })

  describe("getMemoizedObject", () => {
    test("should work as a memoized version of getObject", () => {
      const obj = { a: { b: 1 } }
      expect(getMemoizedObject(obj, "a.b")).toBe(1)
    })
  })

  describe("wrapWithKey", () => {
    test("should wrap object with key", () => {
      expect(wrapWithKey({ a: 1 }, "wrapper")).toStrictEqual({
        wrapper: { a: 1 },
      })
    })

    test("should return object as-is when key is not provided", () => {
      const obj = { a: 1 }
      expect(wrapWithKey(obj)).toBe(obj)
    })

    test("should return object as-is when key is empty string", () => {
      const obj = { a: 1 }
      expect(wrapWithKey(obj, "")).toBe(obj)
    })
  })
})
