import type { ComponentSlotStyle, ComponentStyle } from "./index.types"
import { mergeSlotStyle, mergeStyle } from "."

describe("mergeStyle", () => {
  test("should merge two style objects", () => {
    const target: ComponentStyle = {
      base: {
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
        color: "primary",
        fontSize: "sm",
      },
    }
    const source: ComponentStyle = {
      base: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        m: "md",
      },
    }
    const expected: ComponentStyle = {
      base: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        fontSize: "sm",
        m: "md",
      },
    }

    expect(mergeStyle(target, source)()).toStrictEqual(expected)
  })

  test("should merge many style objects", () => {
    const target1: ComponentStyle = {
      base: {
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
        color: "primary",
        fontSize: "sm",
      },
    }
    const target2: ComponentStyle = {
      base: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        m: "md",
      },
    }
    const source: ComponentStyle = {
      base: {
        color: "warning",
        p: "lg",
      },
    }
    const expected: ComponentStyle = {
      base: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "warning",
        fontSize: "sm",
        m: "md",
        p: "lg",
      },
    }

    expect(mergeStyle(target1, target2, source)()).toStrictEqual(expected)
  })

  test("should correctly merge style objects with omitted keys", () => {
    const target: ComponentStyle = {
      base: {
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
        color: "primary",
        fontSize: "sm",
      },
      sizes: {
        sm: { w: "sm" },
        md: { w: "md" },
      },
      variants: {
        solid: { bg: "primary" },
      },
    }
    const source: ComponentStyle = {
      base: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        m: "md",
      },
    }
    const expected: ComponentStyle = {
      base: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        fontSize: "sm",
        m: "md",
      },
      sizes: {
        md: { w: "md" },
      },
    }

    expect(
      mergeStyle(target, source)({ omit: ["variants", "sizes.sm"] }),
    ).toStrictEqual(expected)
  })

  test("should correctly merge style objects with picked keys", () => {
    const target: ComponentStyle = {
      base: {
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
        color: "primary",
        fontSize: "sm",
      },
      sizes: {
        sm: { w: "sm" },
        md: { w: "md" },
      },
      variants: {
        solid: { bg: "primary" },
      },
    }
    const source: ComponentStyle = {
      base: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        m: "md",
      },
    }
    const expected: ComponentStyle = {
      base: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        m: "md",
      },
      sizes: {
        sm: { w: "sm" },
      },
      variants: {
        solid: { bg: "primary" },
      },
    }

    expect(
      mergeStyle(target, source)({ pick: ["sizes.sm", "variants"] }),
    ).toStrictEqual(expected)
  })

  test("should merge nested style objects", () => {
    const target: ComponentStyle = {
      base: {
        color: "primary",
        p: { base: "md", lg: "sm" },
        _hover: { color: "secondary" },
      },
    }
    const source: ComponentStyle = {
      base: {
        m: "md",
        p: "lg",
        _hover: { boxShadow: "outline" },
      },
    }
    const expected: ComponentStyle = {
      base: {
        color: "primary",
        m: "md",
        p: "lg",
        _hover: { boxShadow: "outline", color: "secondary" },
      },
    }

    expect(mergeStyle(target, source)()).toStrictEqual(expected)
  })

  test("should not modify the original objects", () => {
    const target: ComponentStyle = { base: { color: "primary" } }
    const source: ComponentStyle = {
      base: { color: "secondary", mt: "md" },
    }

    mergeStyle(target, source)()

    expect(target).toStrictEqual({ base: { color: "primary" } })
    expect(source).toStrictEqual({
      base: { color: "secondary", mt: "md" },
    })
  })
})

describe("mergeSlotStyle", () => {
  test("should merge two style objects", () => {
    const target: ComponentSlotStyle = {
      base: {
        container: {
          bg: { base: "warning", lg: "danger" },
          borderColor: "border",
          color: "primary",
          fontSize: "sm",
        },
        inner: { p: "md" },
      },
    }
    const source: ComponentSlotStyle = {
      base: {
        container: {
          bg: "success",
          borderColor: ["black", "white"],
          color: "secondary",
          m: "md",
        },
      },
    }
    const expected: ComponentSlotStyle = {
      base: {
        container: {
          bg: "success",
          borderColor: ["black", "white"],
          color: "secondary",
          fontSize: "sm",
          m: "md",
        },
        inner: { p: "md" },
      },
    }

    expect(mergeSlotStyle(target, source)()).toStrictEqual(expected)
  })

  test("should merge many style objects", () => {
    const target1: ComponentSlotStyle = {
      base: {
        container: {
          bg: { base: "warning", lg: "danger" },
          borderColor: "border",
          color: "primary",
          fontSize: "sm",
        },
      },
    }
    const target2: ComponentSlotStyle = {
      base: {
        container: {
          bg: "success",
          borderColor: ["black", "white"],
          color: "secondary",
          m: "md",
        },
      },
    }
    const source: ComponentSlotStyle = {
      base: {
        container: {
          color: "warning",
          p: "lg",
        },
      },
    }
    const expected: ComponentSlotStyle = {
      base: {
        container: {
          bg: "success",
          borderColor: ["black", "white"],
          color: "warning",
          fontSize: "sm",
          m: "md",
          p: "lg",
        },
      },
    }

    expect(mergeSlotStyle(target1, target2, source)()).toStrictEqual(expected)
  })

  test("should correctly merge style objects with omitted keys", () => {
    const target: ComponentSlotStyle = {
      base: {
        container: { color: "primary", _hover: { color: "secondary" } },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        outline: { container: { borderWidth: "1px" } },
        solid: { container: { bg: "primary" } },
      },
    }
    const source: ComponentSlotStyle = {
      base: {
        container: { p: "lg" },
      },
      variants: {
        solid: { inner: { borderColor: ["black", "white"] } },
      },
    }
    const expected: ComponentSlotStyle = {
      base: {
        container: { p: "lg" },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        solid: { inner: { borderColor: ["black", "white"] } },
      },
    }

    expect(
      mergeSlotStyle(target, source)({ omit: ["variants", "container"] }),
    ).toStrictEqual(expected)
  })

  test("should correctly merge style objects or empty objects with omitted keys", () => {
    const target: ComponentSlotStyle = {
      base: {
        container: { color: "primary", _hover: { color: "secondary" } },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        outline: { container: { borderWidth: "1px" } },
        solid: {
          container: { bg: "primary" },
          inner: { borderColor: ["black", "white"] },
        },
      },
    }
    const source: ComponentSlotStyle = {
      base: {
        container: { p: "lg" },
      },
    }
    const expected: ComponentSlotStyle = {
      base: {
        container: { p: "lg" },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        outline: {},
        solid: { inner: { borderColor: ["black", "white"] } },
      },
    }

    expect(
      mergeSlotStyle(target, source)({ omit: ["container"] }),
    ).toStrictEqual(expected)
  })

  test("should correctly merge style objects with picked keys", () => {
    const target: ComponentSlotStyle = {
      base: {
        container: { color: "primary", _hover: { color: "secondary" } },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        outline: { container: { borderColor: "border" } },
        solid: { container: { bg: "primary" } },
      },
    }
    const source: ComponentSlotStyle = {
      base: {
        container: { m: "md", p: "lg", _hover: { color: "success" } },
      },
    }
    const expected: ComponentSlotStyle = {
      base: {
        container: { m: "md", p: "lg", _hover: { color: "success" } },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        solid: { container: { bg: "primary" } },
      },
    }

    expect(
      mergeSlotStyle(
        target,
        source,
      )({ pick: ["base", "inner", "variants.solid"] }),
    ).toStrictEqual(expected)
  })

  test("should correctly merge style objects or empty objects with picked keys", () => {
    const target: ComponentSlotStyle = {
      base: {
        container: { color: "primary", _hover: { color: "secondary" } },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        outline: { container: { borderColor: "border" } },
        solid: { container: { bg: "primary" } },
      },
    }
    const source: ComponentSlotStyle = {
      base: {
        container: { m: "md", p: "lg", _hover: { color: "success" } },
      },
    }
    const expected: ComponentSlotStyle = {
      base: {
        container: { m: "md", p: "lg", _hover: { color: "success" } },
      },
      variants: {
        solid: { container: { bg: "primary" } },
      },
    }

    expect(
      mergeSlotStyle(target, source)({ pick: ["variants.solid", "container"] }),
    ).toStrictEqual(expected)
  })

  test("should merge nested style objects", () => {
    const target: ComponentSlotStyle = {
      base: {
        container: {
          color: "primary",
          p: { base: "md", lg: "sm" },
          _hover: { color: "secondary" },
        },
      },
    }
    const source: ComponentSlotStyle = {
      base: {
        container: { m: "md", p: "lg", _hover: { color: "success" } },
      },
    }
    const expected: ComponentSlotStyle = {
      base: {
        container: {
          color: "primary",
          m: "md",
          p: "lg",
          _hover: { color: "success" },
        },
      },
    }

    expect(mergeSlotStyle(target, source)()).toStrictEqual(expected)
  })

  test("should not modify the original objects", () => {
    const target: ComponentSlotStyle = {
      base: { container: { color: "primary" } },
    }
    const source: ComponentSlotStyle = {
      base: { container: { color: "secondary", mt: "md" } },
    }

    mergeSlotStyle(target, source)()

    expect(target).toStrictEqual({
      base: { container: { color: "primary" } },
    })
    expect(source).toStrictEqual({
      base: { container: { color: "secondary", mt: "md" } },
    })
  })
})
