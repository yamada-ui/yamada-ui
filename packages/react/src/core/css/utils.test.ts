import { system } from "#test"
import {
  analyzeCSSValue,
  getCSSFunction,
  globalValues,
  insertImportant,
  isCSSFunction,
  isCSSToken,
  isCSSVar,
  isImportant,
  mode,
  omitImportant,
  pipe,
  splitValues,
  tokenToValue,
  tokenToVar,
  varToValue,
} from "./utils"

describe("isCSSFunction", () => {
  test("returns true for CSS function strings", () => {
    expect(isCSSFunction("calc(100% - 20px)")).toBeTruthy()
    expect(isCSSFunction("min(100px, 50%)")).toBeTruthy()
  })

  test("returns false for non-function strings", () => {
    expect(isCSSFunction("100px")).toBeFalsy()
    expect(isCSSFunction("red")).toBeFalsy()
  })

  test("returns false for non-string values", () => {
    expect(isCSSFunction(100)).toBeFalsy()
    expect(isCSSFunction(null)).toBeFalsy()
  })
})

describe("getCSSFunction", () => {
  test("parses CSS function string", () => {
    const result = getCSSFunction("calc(100% - 20px)")
    expect(result.type).toBe("calc")
    expect(result.values).toBe("100% - 20px")
  })

  test("returns undefined for non-function strings", () => {
    const result = getCSSFunction("100px")
    expect(result.type).toBeUndefined()
    expect(result.values).toBeUndefined()
  })
})

describe("splitValues", () => {
  test("splits comma-separated values", () => {
    expect(splitValues("red, blue, green")).toStrictEqual([
      "red",
      "blue",
      "green",
    ])
  })

  test("respects nested parentheses", () => {
    expect(splitValues("calc(100% - 20px), 50%")).toStrictEqual([
      "calc(100% - 20px)",
      "50%",
    ])
  })

  test("supports custom separator callback", () => {
    const result = splitValues(
      "10 + 20",
      (char, prev, next) => /\s[+]\s/.test(`${prev}${char}${next}`),
      true,
    )
    expect(result).toContain("+")
  })

  test("filters out empty values", () => {
    expect(splitValues(",,,")).toStrictEqual([])
  })
})

describe("isCSSVar", () => {
  test("returns true for CSS variable", () => {
    expect(isCSSVar("var(--color)")).toBeTruthy()
  })

  test("returns false for non-variable", () => {
    expect(isCSSVar("red")).toBeFalsy()
    expect(isCSSVar("var(color)")).toBeFalsy()
  })
})

describe("isCSSToken", () => {
  test("returns true if token exists", () => {
    expect(isCSSToken(system)("colors.red")).toBeTruthy()
  })

  test("returns false if token does not exist", () => {
    expect(isCSSToken(system)("colors.unknown")).toBeFalsy()
  })
})

describe("isImportant", () => {
  test("returns true for !important suffix", () => {
    expect(isImportant("red !important")).toBeTruthy()
    expect(isImportant("red!")).toBeTruthy()
  })

  test("returns false for non-important values", () => {
    expect(isImportant("red")).toBeFalsy()
    expect(isImportant(100)).toBeFalsy()
  })
})

describe("omitImportant", () => {
  test("removes !important suffix", () => {
    expect(omitImportant("red !important")).toBe("red")
    expect(omitImportant("red!")).toBe("red")
  })

  test("returns non-string values as-is", () => {
    expect(omitImportant(100)).toBe(100)
  })
})

describe("insertImportant", () => {
  test("appends !important to string values", () => {
    expect(insertImportant("red")).toBe("red !important")
  })

  test("handles object values with important style config", () => {
    const result = insertImportant(
      { color: "red", fontSize: "16px" },
      { important: true },
    )
    expect(result).toStrictEqual({
      color: "red !important",
      fontSize: "16px !important",
    })
  })

  test("handles object values with properties in style config", () => {
    const result = insertImportant(
      { color: "red", fontSize: "16px" },
      { properties: ["color" as any] },
    )
    expect(result.color).toBe("red !important")
    expect(result.fontSize).toBe("16px")
  })

  test("returns object as-is when no properties and not important", () => {
    const obj = { color: "red" }
    expect(insertImportant(obj)).toStrictEqual(obj)
  })
})

describe("analyzeCSSValue", () => {
  test("parses value with unit", () => {
    const result = analyzeCSSValue("16px")
    expect(result.unit).toBe("px")
    expect(result.unitless).toBeFalsy()
  })

  test("parses unitless value", () => {
    const result = analyzeCSSValue("16")
    expect(result.unit).toBe("")
    expect(result.unitless).toBeTruthy()
  })
})

describe("tokenToVar", () => {
  test("returns reference from cssMap if token exists", () => {
    expect(tokenToVar(system)("colors", "red")).toBe("var(--ui-colors-red)")
  })

  test("returns fallback value if token does not exist", () => {
    expect(tokenToVar(system)("colors", "unknown", "blue")).toBe("blue")
  })

  test("returns value if no token and no fallback", () => {
    expect(tokenToVar(system)("colors", "unknown")).toBe("unknown")
  })
})

describe("varToValue", () => {
  test("resolves variable to value", () => {
    expect(varToValue(system)("--ui-colors-red")).toBe("#ea4334")
  })

  test("recursively resolves nested var references", () => {
    expect(varToValue(system)("--ui-colors-danger")).toBe("#ea4334")
  })
})

describe("tokenToValue", () => {
  test("resolves token to its value", () => {
    expect(tokenToValue(system)("colors", "red")).toBe("#ea4334")
  })

  test("returns fallback when token not found", () => {
    expect(tokenToValue(system)("colors", "unknown", "#000")).toBe("#000")
  })

  test("returns value when no token and no fallback", () => {
    expect(tokenToValue(system)("colors", "unknown")).toBe("unknown")
  })
})

describe("mode", () => {
  test("returns light value for light mode", () => {
    expect(mode("lightVal", "darkVal")("light")).toBe("lightVal")
  })

  test("returns dark value for dark mode", () => {
    expect(mode("lightVal", "darkVal")("dark")).toBe("darkVal")
  })

  test("defaults to light mode", () => {
    expect(mode("lightVal", "darkVal")()).toBe("lightVal")
  })
})

describe("pipe", () => {
  test("combines multiple transforms", () => {
    const add10: any = (value: number) => value + 10
    const double: any = (value: number) => value * 2
    const piped = pipe(add10, double)
    expect(piped(5, {} as any)).toBe(30)
  })
})

describe("globalValues", () => {
  test("contains expected CSS global values", () => {
    expect(globalValues.has("inherit")).toBeTruthy()
    expect(globalValues.has("initial")).toBeTruthy()
    expect(globalValues.has("none")).toBeTruthy()
    expect(globalValues.has("revert")).toBeTruthy()
    expect(globalValues.has("unset")).toBeTruthy()
  })
})
