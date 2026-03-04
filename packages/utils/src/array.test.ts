import { filterEmpty, toArray } from "./array"

describe("filterEmpty", () => {
  test("Exclude null and undefined", () => {
    const input: any[] = [0, "", null, undefined, "文字列", 123]
    const expected: any[] = [0, "", "文字列", 123]

    expect(filterEmpty(input)).toStrictEqual(expected)
  })

  test("If passed an empty array, returns an empty array", () => {
    const input: any[] = []
    const expected: any[] = []

    expect(filterEmpty(input)).toStrictEqual(expected)
  })

  test("If you pass an array containing only values other than null or undefined, return the same array", () => {
    const input: any[] = ["a", 1, false]
    const expected: any[] = ["a", 1, false]

    expect(filterEmpty(input)).toStrictEqual(expected)
  })
})

describe("toArray", () => {
  test("should wrap a single value in an array", () => {
    expect(toArray("hello")).toStrictEqual(["hello"])
    expect(toArray(42)).toStrictEqual([42])
  })

  test("should return the array as-is if already an array", () => {
    expect(toArray(["a", "b"])).toStrictEqual(["a", "b"])
  })

  test("should flatten nested arrays", () => {
    expect(toArray([1, [2, 3]])).toStrictEqual([1, 2, 3])
  })

  test("should filter out null and undefined", () => {
    expect(toArray([1, null, 2, undefined, 3])).toStrictEqual([1, 2, 3])
  })

  test("should filter out falsy values like null and undefined from single value", () => {
    expect(toArray(null)).toStrictEqual([])
    expect(toArray(undefined)).toStrictEqual([])
  })

  test("should filter out all falsy values", () => {
    expect(toArray([0, "", false, "a"])).toStrictEqual(["a"])
  })
})
