import { antonym, escape, toCamelCase, toKebabCase, toTitleCase } from "../src"

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
      expect(antonym("bottom")).toBe("top")
      expect(antonym("left")).toBe("right")
      expect(antonym("right")).toBe("left")
      expect(antonym("start")).toBe("end")
      expect(antonym("end")).toBe("start")
      expect(antonym("x")).toBe("y")
      expect(antonym("y")).toBe("x")
      expect(antonym("enter")).toBe("exit")
      expect(antonym("exit")).toBe("enter")
      expect(antonym("vertical")).toBe("horizontal")
      expect(antonym("horizontal")).toBe("vertical")
      expect(antonym("up")).toBe("down")
      expect(antonym("down")).toBe("up")
      expect(antonym("block")).toBe("inline")
      expect(antonym("inline")).toBe("block")
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

describe("toTitleCase", () => {
  const expected = "Test Variable Name"

  test("should convert kebab-case", () => {
    const input = "test-variable-name"
    expect(toTitleCase(input)).toBe(expected)
  })

  test("should convert snake_case", () => {
    const input = "test_variable_name"
    expect(toTitleCase(input)).toBe(expected)
  })

  test("should convert camelCase", () => {
    const input = "testVariableName"
    expect(toTitleCase(input)).toBe(expected)
  })

  test("should trim space", () => {
    const input = "testVariableName "
    expect(toTitleCase(input)).toBe(expected)
  })
})
