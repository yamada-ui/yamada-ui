import type { ComponentData, Properties } from "./replace-props-table"
import { beforeEach, describe, expect, test, vi } from "vitest"
import {
  checkProperties,
  collectProps,
  getComponentProps,
  getComponentTypes,
  propsToMdTable,
  replacePropsTable,
  sortEntries,
} from "./replace-props-table"

vi.mock("node:fs", () => ({
  existsSync: vi.fn(),
  readFileSync: vi.fn(),
}))

describe("checkProperties", () => {
  describe("should accept valid Properties objects", () => {
    test.each([
      ["with required: true", { type: "string", required: true }],
      ["with required: false", { type: "string", required: false }],
      [
        "with defaultValue",
        { type: "string", defaultValue: '"default"', required: false },
      ],
      [
        "with description",
        {
          type: "string",
          description: "This is a description",
          required: true,
        },
      ],
      [
        "with all fields",
        {
          type: "string | number",
          defaultValue: '"md"',
          description: "The size of the component.",
          required: false,
        },
      ],
      [
        "with extra fields",
        {
          type: "string",
          anotherField: 123,
          extraField: "extra",
          required: true,
        },
      ],
    ])("%s", (_description, value) => {
      expect(checkProperties(value)).toBeTruthy()
    })
  })

  describe("should reject invalid values", () => {
    test.each([
      ["empty object", {}],
      [
        "object missing type field",
        { defaultValue: '"default"', required: true },
      ],
      [
        "object missing required field",
        { type: "string", defaultValue: '"default"' },
      ],
      ["object with type not a string", { type: 123, required: true }],
      [
        "object with required not a boolean",
        { type: "string", required: "true" },
      ],
    ])("%s", (_description, value) => {
      expect(checkProperties(value)).toBeFalsy()
    })
  })
})

describe("collectProps", () => {
  test("should collect properties when given flat structure", () => {
    const flatStructure: { [key: string]: Properties } = {
      as: { type: "As", required: false },
      size: { type: "string", defaultValue: '"md"', required: false },
      variant: { type: "string", required: true },
    }

    const result = collectProps(flatStructure)

    expect(Object.keys(result)).toHaveLength(3)
    expect(result.as).toStrictEqual({ type: "As", required: false })
    expect(result.size).toStrictEqual({
      type: "string",
      defaultValue: '"md"',
      required: false,
    })
    expect(result.variant).toStrictEqual({ type: "string", required: true })
  })

  test("should collect properties when given nested structure", () => {
    const nestedStructure = {
      Badge: {
        as: { type: "As", required: false },
        size: { type: "string", required: false },
      },
    }

    const result = collectProps(nestedStructure)

    expect(Object.keys(result)).toHaveLength(2)
    expect(result.as).toStrictEqual({ type: "As", required: false })
    expect(result.size).toStrictEqual({ type: "string", required: false })
  })

  test("should collect properties when given deeply nested structure", () => {
    const deeplyNestedStructure = {
      AvatarGroup: {
        Item: {
          src: { type: "string", required: false },
          alt: { type: "string", required: false },
        },
        Root: {
          max: { type: "number", required: false },
        },
      },
    }

    const result = collectProps(deeplyNestedStructure)

    expect(Object.keys(result)).toHaveLength(3)
    expect(result.src).toStrictEqual({ type: "string", required: false })
    expect(result.alt).toStrictEqual({ type: "string", required: false })
    expect(result.max).toStrictEqual({ type: "number", required: false })
  })

  test("should collect properties when given mixed structure", () => {
    const mixedStructure = {
      anotherDirectProp: {
        type: "boolean",
        defaultValue: "false",
        required: false,
      },
      directProp: { type: "string", required: true },
      Nested: {
        nestedProp: { type: "number", required: false },
      },
    }

    const result = collectProps(mixedStructure)

    expect(Object.keys(result)).toHaveLength(3)
    expect(result.directProp).toStrictEqual({ type: "string", required: true })
    expect(result.nestedProp).toStrictEqual({ type: "number", required: false })
    expect(result.anotherDirectProp).toStrictEqual({
      type: "boolean",
      defaultValue: "false",
      required: false,
    })
  })

  test("should return empty object when given empty input", () => {
    const emptyStructure = {}

    const result = collectProps(emptyStructure)

    expect(Object.keys(result)).toHaveLength(0)
    expect(result).toStrictEqual({})
  })

  test("should ignore properties when they are invalid", () => {
    const structureWithInvalid = {
      anotherInvalidProp: { required: true }, // missing type field
      invalidProp: { type: "string" }, // missing required field
      nestedValid: {
        goodProp: { type: "number", required: false },
      },
      validProp: { type: "string", required: true },
    }

    const result = collectProps(structureWithInvalid)

    // Only validProp and goodProp should be collected
    expect(Object.keys(result)).toHaveLength(2)
    expect(result.validProp).toStrictEqual({ type: "string", required: true })
    expect(result.goodProp).toStrictEqual({ type: "number", required: false })
    expect(result.invalidProp).toBeUndefined()
    expect(result.anotherInvalidProp).toBeUndefined()
  })

  test("should handle properties when all optional fields are provided", () => {
    const structureWithAllFields = {
      fullProp: {
        type: "string | number",
        defaultValue: '"default"',
        description: "A fully documented property",
        required: false,
      },
    }

    const result = collectProps(structureWithAllFields)

    expect(Object.keys(result)).toHaveLength(1)
    expect(result.fullProp).toStrictEqual({
      type: "string | number",
      defaultValue: '"default"',
      description: "A fully documented property",
      required: false,
    })
  })

  test("should handle structure when it is very deeply nested", () => {
    const veryDeepStructure = {
      Level1: {
        Level2: {
          Level3: {
            deepProp: { type: "string", required: true },
          },
        },
      },
    }

    const result = collectProps(veryDeepStructure)

    expect(Object.keys(result)).toHaveLength(1)
    expect(result.deepProp).toStrictEqual({ type: "string", required: true })
  })

  test("should flatten properties when given multiple nested paths", () => {
    const multipleNestedPaths = {
      Component1: {
        Part1: {
          prop1: { type: "string", required: true },
        },
        Part2: {
          prop2: { type: "number", required: false },
        },
      },
      Component2: {
        prop3: { type: "boolean", required: false },
      },
    }

    const result = collectProps(multipleNestedPaths)

    expect(Object.keys(result)).toHaveLength(3)
    expect(result.prop1).toStrictEqual({ type: "string", required: true })
    expect(result.prop2).toStrictEqual({ type: "number", required: false })
    expect(result.prop3).toStrictEqual({ type: "boolean", required: false })
  })

  test("should handle values gracefully when they are non-objects", () => {
    const structureWithNonObjects = {
      arrayValue: [1, 2, 3],
      booleanValue: true,
      nullValue: null,
      numberValue: 123,
      stringValue: "not an object",
      validProp: { type: "string", required: true },
    }

    const result = collectProps(structureWithNonObjects)

    // Only validProp should be collected
    expect(Object.keys(result)).toHaveLength(1)
    expect(result.validProp).toStrictEqual({ type: "string", required: true })
  })
})

describe("sortEntries", () => {
  test("should sort required properties first when sorting", () => {
    const props: { [key: string]: Properties } = {
      anotherOptional: { type: "boolean", required: false },
      optional: { type: "string", required: false },
      required: { type: "number", required: true },
    }

    const result = sortEntries(props)

    expect(result[0]?.[0]).toBe("required")
    expect(result[0]?.[1].required).toBeTruthy()
  })

  test("should sort properties with defaultValue after required when sorting", () => {
    const props: { [key: string]: Properties } = {
      optional: { type: "string", required: false },
      required: { type: "number", required: true },
      withDefault: { type: "boolean", defaultValue: "false", required: false },
    }

    const result = sortEntries(props)

    expect(result[0]?.[0]).toBe("required")
    expect(result[1]?.[0]).toBe("withDefault")
    expect(result[2]?.[0]).toBe("optional")
  })

  test("should maintain order when properties have same priority", () => {
    const props: { [key: string]: Properties } = {
      first: { type: "string", required: true },
      second: { type: "number", required: true },
      third: { type: "boolean", required: true },
    }

    const result = sortEntries(props)

    // All are required, so order should be maintained
    expect(result).toHaveLength(3)
    expect(result.every(([, prop]) => prop.required)).toBeTruthy()
  })

  test("should handle empty object when given empty object", () => {
    const props: { [key: string]: Properties } = {}

    const result = sortEntries(props)

    expect(result).toHaveLength(0)
    expect(result).toStrictEqual([])
  })

  test("should prioritize required over defaultValue when sorting", () => {
    const props: { [key: string]: Properties } = {
      required: { type: "number", required: true },
      withDefault: { type: "string", defaultValue: '"value"', required: false },
    }

    const result = sortEntries(props)

    // required should come first even though withDefault has a defaultValue
    expect(result[0]?.[0]).toBe("required")
    expect(result[1]?.[0]).toBe("withDefault")
  })
})

describe("getComponentTypes", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("should return component types when JSON file is valid", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Badge: {
        as: { type: "As", required: false },
        size: { type: "string", defaultValue: '"md"', required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = getComponentTypes("badge")

    expect(existsSync).toHaveBeenCalledExactlyOnceWith(
      expect.stringContaining("data/props/badge.json"),
    )
    expect(readFileSync).toHaveBeenCalledExactlyOnceWith(
      expect.stringContaining("data/props/badge.json"),
      "utf-8",
    )
    expect(result).toStrictEqual(mockData)
  })

  test("should return empty object when file does not exist", async () => {
    const { existsSync, readFileSync } = await import("node:fs")

    vi.mocked(existsSync).mockReturnValue(false)

    const result = getComponentTypes("nonexistent")

    expect(existsSync).toHaveBeenCalledExactlyOnceWith(
      expect.stringContaining("data/props/nonexistent.json"),
    )
    expect(readFileSync).not.toHaveBeenCalled()
    expect(result).toStrictEqual({})
  })

  test("should return empty object and warn when JSON is not an object", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => undefined)

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue('"not an object"')

    const result = getComponentTypes("invalid")

    expect(consoleWarnSpy).toHaveBeenCalledExactlyOnceWith(
      "Invalid component types data for invalid",
    )
    expect(result).toStrictEqual({})

    consoleWarnSpy.mockRestore()
  })

  test("should return empty object and warn when JSON is null", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => undefined)

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue("null")

    const result = getComponentTypes("null-data")

    expect(consoleWarnSpy).toHaveBeenCalledExactlyOnceWith(
      "Invalid component types data for null-data",
    )
    expect(result).toStrictEqual({})

    consoleWarnSpy.mockRestore()
  })

  test("should return empty object and warn when JSON is an array", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => undefined)

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue("[1, 2, 3]")

    const result = getComponentTypes("array-data")

    expect(consoleWarnSpy).toHaveBeenCalledExactlyOnceWith(
      "Invalid component types data for array-data",
    )
    expect(result).toStrictEqual({})

    consoleWarnSpy.mockRestore()
  })

  test("should handle JSON object when it is empty", async () => {
    const { existsSync, readFileSync } = await import("node:fs")

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue("{}")

    const result = getComponentTypes("empty")

    expect(result).toStrictEqual({})
  })
})

describe("propsToMdTable", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("should generate markdown table when given basic properties", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Button: {
        size: { type: "string", defaultValue: '"md"', required: false },
        variant: { type: "string", required: true },
        disabled: { type: "boolean", required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = propsToMdTable({ name: "button", omits: [], picks: [] })

    expect(result).toContain("| Prop | Default | Type | Description |")
    expect(result).toContain("| --- | --- | --- | --- |")
    expect(result).toContain("| variant |")
    expect(result).toContain('| size | "md" |')
    expect(result).toContain("| disabled |")
  })

  test("should return null when no properties found", async () => {
    const { existsSync } = await import("node:fs")

    vi.mocked(existsSync).mockReturnValue(false)

    const result = propsToMdTable({ name: "nonexistent", omits: [], picks: [] })

    expect(result).toBeNull()
  })

  test("should escape types correctly when generating table", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Component: {
        unionType: {
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          required: false,
        },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = propsToMdTable({ name: "component", omits: [], picks: [] })

    expect(result).toContain("'sm' \\| 'md' \\| 'lg'")
  })

  test("should remove code blocks when description contains them", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Component: {
        prop: {
          type: "string",
          description: "This is a description ```code block``` with text",
          required: false,
        },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = propsToMdTable({ name: "component", omits: [], picks: [] })

    expect(result).toContain("This is a description  with text")
    expect(result).not.toContain("```")
  })

  test("should replace newlines with spaces when description contains newlines", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Component: {
        prop: {
          type: "string",
          description: "Line 1\nLine 2\nLine 3",
          required: false,
        },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = propsToMdTable({ name: "component", omits: [], picks: [] })

    expect(result).toContain("Line 1 Line 2 Line 3")
    expect(result).toContain("| prop | - | `string` | Line 1 Line 2 Line 3 |")
  })

  test("should omit properties when omit option is specified", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Component: {
        alsoOmit: { type: "string", required: false },
        keep: { type: "string", required: false },
        omit: { type: "string", required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = propsToMdTable({
      name: "component",
      omits: ["omit", "alsoOmit"],
      picks: [],
    })

    expect(result).toContain("| keep |")
    expect(result).not.toContain("| omit |")
    expect(result).not.toContain("| alsoOmit |")
  })

  test("should collect all properties when all flag is true", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Item: {
        itemProp: { type: "number", required: false },
      },
      Root: {
        rootProp: { type: "string", required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = propsToMdTable({
      name: "component",
      all: true,
      omits: [],
      picks: [],
    })

    expect(result).toContain("| rootProp |")
    expect(result).toContain("| itemProp |")
  })

  test("should pick specific parts when pick option is specified", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Item: {
        itemProp: { type: "number", required: false },
      },
      Other: {
        otherProp: { type: "boolean", required: false },
      },
      Root: {
        rootProp: { type: "string", required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = propsToMdTable({
      name: "component",
      omits: [],
      picks: ["Item"],
    })

    expect(result).toContain("| itemProp |")
    expect(result).not.toContain("| rootProp |")
    expect(result).not.toContain("| otherProp |")
  })
})

describe("getComponentProps", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("should return properties from first component part when no options specified", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Badge: {
        size: { type: "string", defaultValue: '"md"', required: false },
        variant: { type: "string", required: true },
      },
      Other: {
        otherProp: { type: "number", required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = getComponentProps({
      name: "badge",
      omits: [],
      picks: [],
    })

    expect(result).toHaveLength(2)
    expect(result[0]?.[0]).toBe("variant") // required first
    expect(result[1]?.[0]).toBe("size") // with default value
  })

  test("should return all properties when all flag is true", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Item: {
        itemProp: { type: "number", required: false },
      },
      Root: {
        rootProp: { type: "string", required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = getComponentProps({
      name: "component",
      all: true,
      omits: [],
      picks: [],
    })

    expect(result).toHaveLength(2)
    const propNames = result.map(([name]) => name)
    expect(propNames).toContain("rootProp")
    expect(propNames).toContain("itemProp")
  })

  test("should omit specific component types when all flag is true with omits", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Item: {
        itemProp: { type: "number", required: false },
      },
      Root: {
        rootProp: { type: "string", required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = getComponentProps({
      name: "component",
      all: true,
      omits: ["Item"],
      picks: [],
    })

    expect(result).toHaveLength(1)
    expect(result[0]?.[0]).toBe("rootProp")
  })

  test("should return picked properties when picks is specified", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Item: {
        itemProp: { type: "number", required: false },
      },
      Other: {
        otherProp: { type: "boolean", required: false },
      },
      Root: {
        rootProp: { type: "string", required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const result = getComponentProps({
      name: "component",
      omits: [],
      picks: ["Item", "Root"],
    })

    expect(result).toHaveLength(2)
    const propNames = result.map(([name]) => name)
    expect(propNames).toContain("itemProp")
    expect(propNames).toContain("rootProp")
    expect(propNames).not.toContain("otherProp")
  })

  test("should return empty array when component type does not exist", async () => {
    const { existsSync } = await import("node:fs")

    vi.mocked(existsSync).mockReturnValue(false)

    const result = getComponentProps({
      name: "nonexistent",
      omits: [],
      picks: [],
    })

    expect(result).toHaveLength(0)
    expect(result).toStrictEqual([])
  })
})

describe("replacePropsTable", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("should replace PropsTable tag with markdown table", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const mockData: ComponentData = {
      Button: {
        size: { type: "string", defaultValue: '"md"', required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    const input =
      'Here is the table:\n<PropsTable name="button" />\nEnd of table.'
    const result = replacePropsTable(input)

    expect(result).toContain("| Prop | Default | Type | Description |")
    expect(result).toContain("| size |")
    expect(result).not.toContain("<PropsTable")
  })

  test("should log error when name attribute is missing", () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)

    const input = "<PropsTable />"
    const result = replacePropsTable(input)

    expect(result).toBe(input)
    expect(consoleErrorSpy).toHaveBeenCalledExactlyOnceWith(
      "PropsTable: name attribute is required",
    )

    consoleErrorSpy.mockRestore()
  })

  test("should log error when table generation fails", async () => {
    const { existsSync } = await import("node:fs")
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)

    vi.mocked(existsSync).mockReturnValue(false)

    const input = '<PropsTable name="nonexistent" />'
    const result = replacePropsTable(input)

    expect(result).toBe(input)
    expect(consoleErrorSpy).toHaveBeenCalledExactlyOnceWith(
      'PropsTable: Could not generate table for "nonexistent"',
    )

    consoleErrorSpy.mockRestore()
  })

  test("should return original text when error occurs during JSON.parse", async () => {
    const { existsSync, readFileSync } = await import("node:fs")
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)

    const mockData: ComponentData = {
      Button: {
        size: { type: "string", required: false },
      },
    }

    vi.mocked(existsSync).mockReturnValue(true)
    vi.mocked(readFileSync).mockReturnValue(JSON.stringify(mockData))

    // Valid regex match but malformed JSON in omit attribute
    const input = '<PropsTable name="button" omit={[invalid]} />'
    const result = replacePropsTable(input)

    expect(result).toBe(input)
    expect(consoleErrorSpy).toHaveBeenCalledExactlyOnceWith(
      "Error in replacePropsTable:",
      expect.any(Error),
    )

    consoleErrorSpy.mockRestore()
  })
})
