import { escape, antonym, toCamelCase, toKebabCase } from "../src"

describe("String", () => {
  describe("escape", () => {
    test("should replace all spaces with the provided replacement value", () => {
      const result = escape("hello world", "-")
      expect(result).toBe("hello-world")
    })

    test("should remove all spaces if no replacement value is provided", () => {
      const result = escape("hello world")
      expect(result).toBe("helloworld")
    })
  })

  describe("antonym", () => {
    test("should return the antonym of the given direction", () => {
      expect(antonym("top")).toBe("bottom")
      expect(antonym("left")).toBe("right")
    })

    test("should return the same value if no antonym exists", () => {
      const nonDirection = "non-direction"
      expect(antonym(nonDirection)).toBe(nonDirection)
    })
  })

  describe("toCamelCase", () => {
    test("should convert string to CamelCase", () => {
      expect(toCamelCase("hello-world")).toBe("HelloWorld")
      expect(toCamelCase("another_example")).toBe("AnotherExample")
    })
  })

  describe("toKebabCase", () => {
    test("should convert string to kebab-case", () => {
      expect(toKebabCase("HelloWorld")).toBe("hello-world")
      expect(toKebabCase("AnotherExample")).toBe("another-example")
    })
  })
})
