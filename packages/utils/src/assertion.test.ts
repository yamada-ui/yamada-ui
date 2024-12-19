import {
  is,
  isArray,
  isEmpty,
  isFunction,
  isNotNumber,
  isNull,
  isNumber,
  isNumeric,
  isObject,
  isString,
  isUndefined,
  isUnit,
} from "./assertion"
import { noop } from "./function"

describe("Assertion", () => {
  describe("is", () => {
    test("Returns true for primitive", () => {
      expect(is(123, 123)).toBeTruthy()
      expect(is("test", "test")).toBeTruthy()
    })

    test("Returns true for NaN", () => {
      expect(is(NaN, NaN)).toBeTruthy()
    })

    test("Returns true for Infinity", () => {
      expect(is(Infinity, Infinity)).toBeTruthy()
    })

    test("Returns false for non-primitive", () => {
      expect(is(null, undefined)).toBeFalsy()
    })

    test("Returns false for 0 and -0", () => {
      expect(is(0, -0)).toBeFalsy()
    })
  })

  describe("isNumber", () => {
    test("Returns true for numbers", () => {
      expect(isNumber(123)).toBeTruthy()
      expect(isNumber(-123)).toBeTruthy()
    })

    test("Returns false for non-numbers", () => {
      expect(isNumber("123")).toBeFalsy()
      expect(isNumber(null)).toBeFalsy()
    })
  })

  describe("isNotNumber", () => {
    test("Returns true for NaN, Infinity, and non-numbers", () => {
      expect(isNotNumber(NaN)).toBeTruthy()
      expect(isNotNumber(Infinity)).toBeTruthy()
      expect(isNotNumber("123")).toBeTruthy()
    })

    test("Returns false for valid numbers", () => {
      expect(isNotNumber(123)).toBeFalsy()
    })
  })

  describe("isNumeric", () => {
    test("Returns true if convertible to a number", () => {
      expect(isNumeric("123")).toBeTruthy()
      expect(isNumeric("-123")).toBeTruthy()
      expect(isNumeric(123)).toBeTruthy()
      expect(isNumeric(-123)).toBeTruthy()
    })

    test("Returns false if not convertible to a number", () => {
      expect(isNumeric("string")).toBeFalsy()
      expect(isNumeric("2xs")).toBeFalsy()
      expect(isNumeric(null)).toBeFalsy()
      expect(isNumeric(undefined)).toBeFalsy()
      expect(isNumeric(Infinity)).toBeFalsy()
    })
  })

  describe("isString", () => {
    test("Returns true for strings", () => {
      expect(isString("test")).toBeTruthy()
    })

    test("Returns false for non-strings", () => {
      expect(isString(123)).toBeFalsy()
    })
  })

  describe("isUndefined", () => {
    test("Returns true for undefined", () => {
      expect(isUndefined(undefined)).toBeTruthy()
    })

    test("Returns false for non-undefined", () => {
      expect(isUndefined(null)).toBeFalsy()
    })
  })

  describe("isNull", () => {
    test("Returns true for null", () => {
      expect(isNull(null)).toBeTruthy()
    })

    test("Returns false for non-null", () => {
      expect(isNull(undefined)).toBeFalsy()
    })
  })

  describe("isObject", () => {
    test("Returns true for objects", () => {
      expect(isObject({})).toBeTruthy()
    })

    test("Returns false for non-objects", () => {
      expect(isObject(null)).toBeFalsy()
    })
  })

  describe("isArray", () => {
    test("Returns true for arrays", () => {
      expect(isArray([])).toBeTruthy()
    })

    test("Returns false for non-arrays", () => {
      expect(isArray({})).toBeFalsy()
    })
  })

  describe("isEmpty", () => {
    test("Returns true for empty arrays or arrays containing only null or undefined", () => {
      expect(isEmpty([])).toBeTruthy()
      expect(isEmpty([null, undefined])).toBeTruthy()
    })

    test("Returns false for non-empty arrays", () => {
      expect(isEmpty([1, 2, 3])).toBeFalsy()
    })
  })

  describe("isFunction", () => {
    test("Returns true for functions", () => {
      expect(isFunction(noop)).toBeTruthy()
    })

    test("Returns false for non-functions", () => {
      expect(isFunction(123)).toBeFalsy()
    })
  })

  describe("isUnit", () => {
    test("Returns true for strings containing units", () => {
      expect(isUnit("100px")).toBeTruthy()
      expect(isUnit("5rem")).toBeTruthy()
      expect(isUnit("2xl")).toBeFalsy()
    })

    test("Returns false for strings without units", () => {
      expect(isUnit("100")).toBeFalsy()
    })
  })
})
