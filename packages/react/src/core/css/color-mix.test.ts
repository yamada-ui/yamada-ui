import type { System } from "../system"
import { colorMix } from "./color-mix"

const createMockSystem = (): System =>
  ({
    config: { css: { varPrefix: "ui" } },
    cssMap: {
      "colors.blue.500": {
        ref: "var(--ui-colors-blue-500)",
        var: "--ui-colors-blue-500",
      },
      "colors.red.500": {
        ref: "var(--ui-colors-red-500)",
        var: "--ui-colors-red-500",
      },
    },
  }) as unknown as System

describe("colorMix", () => {
  const system = createMockSystem()

  test("returns null/undefined as-is", () => {
    expect(colorMix(null, { system })).toBeNull()
    expect(colorMix(undefined, { system })).toBeUndefined()
  })

  test("returns global values as-is", () => {
    expect(colorMix("inherit", { system })).toBe("inherit")
    expect(colorMix("initial", { system })).toBe("initial")
  })

  test("handles transparentize shorthand with /", () => {
    const result = colorMix("red.500/50", { system }) as string
    expect(result).toContain("color-mix")
    expect(result).toContain("transparent")
  })

  test("handles mix() function", () => {
    const result = colorMix("mix(red.500, blue.500)", { system }) as string
    expect(result).toContain("color-mix")
  })

  test("handles tint() function", () => {
    const result = colorMix("tint(red.500, 50%)", { system }) as string
    expect(result).toContain("color-mix")
    expect(result).toContain("#fff")
  })

  test("handles shade() function", () => {
    const result = colorMix("shade(red.500, 50%)", { system }) as string
    expect(result).toContain("color-mix")
    expect(result).toContain("#000")
  })

  test("handles tone() function", () => {
    const result = colorMix("tone(red.500, 300)", { system })
    expect(result).toBeDefined()
  })

  test("handles tone() with 500 (returns color as-is)", () => {
    const result = colorMix("tone(red.500, 500)", { system })
    expect(result).toBeDefined()
  })

  test("handles tone() without tone value", () => {
    const result = colorMix("tone(red.500)", { system })
    expect(result).toBeDefined()
  })

  test("returns plain color value resolved through getColor", () => {
    const result = colorMix("red.500", { system })
    expect(result).toBe("var(--ui-colors-red-500)")
  })

  // cspell:ignore nofn
  test("returns value for unknown function type", () => {
    const result = colorMix("nofn(red)", { system })
    expect(result).toBe("nofn(red)")
  })

  test("handles color-mix() function alias", () => {
    const result = colorMix("color-mix(red.500, blue.500)", {
      system,
    }) as string
    expect(result).toContain("color-mix")
  })

  test("creates variable when properties are provided", () => {
    const result = colorMix("red.500", {
      fallback: "red",
      properties: ["color"] as any,
      system,
    })
    expect(result).toBeDefined()
  })

  test("handles mix with method specification", () => {
    const result = colorMix("mix(lab, red.500, blue.500)", {
      system,
    }) as string
    expect(result).toContain("in lab")
  })
})
