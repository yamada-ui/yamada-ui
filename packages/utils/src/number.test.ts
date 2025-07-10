import {
  clampNumber,
  countDecimal,
  percentToValue,
  roundNumberToStep,
  toNumber,
  toPrecision,
  valueToPercent,
} from "./number"

describe("Number", () => {
  describe("toNumber", () => {
    test("should convert string to number", () => {
      expect(toNumber("123")).toBe(123)
    })

    test("should return 0 for non-numeric values", () => {
      expect(toNumber("abc")).toBe(0)
      expect(toNumber(null)).toBe(0)
      expect(toNumber(undefined)).toBe(0)
    })
  })

  describe("toPrecision", () => {
    test("should format number with specified precision", () => {
      expect(toPrecision(123.456, 2)).toBe("123.46")
    })

    test("should return string representation of number without precision if not specified", () => {
      expect(toPrecision(123.456)).toBe("123.456")
    })
  })

  describe("countDecimal", () => {
    test("should return the number of decimal places", () => {
      expect(countDecimal(123.456)).toBe(3)
      expect(countDecimal(123)).toBe(0)
    })
  })

  describe("roundNumberToStep", () => {
    test("should round number to nearest step from a starting point", () => {
      expect(roundNumberToStep(123, 100, 10)).toBe("120")
      expect(roundNumberToStep(125, 100, 25)).toBe("125")
    })
  })

  describe("valueToPercent", () => {
    test("should convert a value to a percentage of a range", () => {
      expect(valueToPercent(50, 0, 100)).toBe(50)
      expect(valueToPercent(75, 50, 100)).toBe(50)
    })
  })

  describe("percentToValue", () => {
    test("should convert a percentage to a value within a range", () => {
      expect(percentToValue(0.5, 0, 100)).toBe(50)
      expect(percentToValue(0.5, 0.5, 1)).toBe(0.75)
    })
  })

  describe("clampNumber", () => {
    test("should clamp a number within a specified range", () => {
      expect(clampNumber(150, 0, 100)).toBe(100)
      expect(clampNumber(-10, 0, 100)).toBe(0)
      expect(clampNumber(50, 0, 100)).toBe(50)
    })
  })
})
