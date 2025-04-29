import {
  filterObject,
  filterUndefined,
  flattenObject,
  getObject,
  keysFormObject,
  merge,
  objectFromEntries,
  omitObject,
  pickObject,
  replaceObject,
  splitObject,
} from "./object"

describe("Object", () => {
  describe("omitObject", () => {
    test("should omit specified keys from an object", () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(omitObject(obj, ["a", "c"])).toStrictEqual({ b: 2 })
    })
  })

  describe("pickObject", () => {
    test("should pick specified keys from an object", () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(pickObject(obj, ["a", "c"])).toStrictEqual({ a: 1, c: 3 })
    })
  })

  describe("splitObject", () => {
    test("should split an object into two objects based on specified keys", () => {
      const obj = { a: 1, b: 2, c: 3 }
      const [picked, omitted] = splitObject(obj, ["a", "c"])
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
  })

  describe("objectFromEntries", () => {
    test("should create an object from an array of key-value pairs", () => {
      const entries = [
        ["a", 1],
        ["b", 2],
      ]
      expect(objectFromEntries(entries)).toStrictEqual({ a: 1, b: 2 })
    })
  })

  describe("keysFormObject", () => {
    test("should return the keys of an object", () => {
      const obj = { a: 1, b: 2, c: 3 }
      expect(keysFormObject(obj)).toStrictEqual(["a", "b", "c"])
    })
  })

  describe("replaceObject", () => {
    test("should replace values in an object based on a callback function", () => {
      const obj = { a: 1, b: 2, c: 3 }
      const result = replaceObject(obj, (value) => value * 2)
      expect(result).toStrictEqual({ a: 2, b: 4, c: 6 })
    })
  })

  describe("getObject", () => {
    test("should get a value from an object by path", () => {
      const obj = { a: { b: { c: 1 } } }
      expect(getObject(obj, "a.b.c")).toBe(1)
    })
  })
})
