import { filterEmpty } from "./array"

describe("Array", () => {
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
