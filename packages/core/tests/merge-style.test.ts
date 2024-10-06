import type { ComponentMultiStyle, ComponentStyle, StyledTheme } from "../src"
import { runIfFunc } from "@yamada-ui/utils"
import { mergeMultiStyle, mergeStyle } from "../src/theme"

const props = { theme: {} as StyledTheme }

describe("mergeStyle", () => {
  test("should merge two style objects", () => {
    const target: ComponentStyle = {
      baseStyle: {
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
        color: "primary",
        fontSize: "sm",
      },
    }
    const source: ComponentStyle = {
      baseStyle: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        m: "md",
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
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
      baseStyle: {
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
        color: "primary",
        fontSize: "sm",
      },
    }
    const target2: ComponentStyle = {
      baseStyle: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        m: "md",
      },
    }
    const source: ComponentStyle = {
      baseStyle: {
        color: "warning",
        p: "lg",
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
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
      baseStyle: {
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
      baseStyle: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        m: "md",
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
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
      baseStyle: {
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
      baseStyle: {
        bg: "success",
        borderColor: ["black", "white"],
        color: "secondary",
        m: "md",
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
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
      baseStyle: {
        _hover: { color: "secondary" },
        color: "primary",
        p: { base: "md", lg: "sm" },
      },
    }
    const source: ComponentStyle = {
      baseStyle: {
        _hover: { boxShadow: "outline" },
        m: "md",
        p: "lg",
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
        _hover: { boxShadow: "outline", color: "secondary" },
        color: "primary",
        m: "md",
        p: "lg",
      },
    }

    expect(mergeStyle(target, source)()).toStrictEqual(expected)
  })

  test("should override functions with non-function values", () => {
    const target: ComponentStyle = {
      baseStyle: () => ({ color: "primary", fontSize: "sm" }),
    }
    const source: ComponentStyle = {
      baseStyle: { color: "secondary", m: "md" },
    }
    const expected: ComponentStyle = {
      baseStyle: { color: "secondary", fontSize: "sm", m: "md" },
    }

    expect(
      runIfFunc(mergeStyle(target, source)().baseStyle, props),
    ).toStrictEqual(expected.baseStyle)
  })

  test("should handle function values", () => {
    const target: ComponentStyle = {
      baseStyle: () => ({
        color: "primary",
        fontSize: { base: "md", lg: "sm" },
        w: "sm",
      }),
    }
    const source: ComponentStyle = {
      baseStyle: () => ({ color: "secondary", fontSize: "lg", m: "md" }),
    }
    const expected: ComponentStyle = {
      baseStyle: { color: "secondary", fontSize: "lg", m: "md", w: "sm" },
    }

    expect(
      runIfFunc(mergeStyle(target, source)().baseStyle, props),
    ).toStrictEqual(expected.baseStyle)
  })

  test("should not modify the original objects", () => {
    const target: ComponentStyle = { baseStyle: { color: "primary" } }
    const source: ComponentStyle = {
      baseStyle: { color: "secondary", mt: "md" },
    }

    mergeStyle(target, source)()

    expect(target).toStrictEqual({ baseStyle: { color: "primary" } })
    expect(source).toStrictEqual({
      baseStyle: { color: "secondary", mt: "md" },
    })
  })
})

describe("mergeMultiStyle", () => {
  test("should merge two style objects", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: {
          bg: { base: "warning", lg: "danger" },
          borderColor: "border",
          color: "primary",
          fontSize: "sm",
        },
        inner: { p: "md" },
      },
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: {
          bg: "success",
          borderColor: ["black", "white"],
          color: "secondary",
          m: "md",
        },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
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

    expect(mergeMultiStyle(target, source)()).toStrictEqual(expected)
  })

  test("should merge many style objects", () => {
    const target1: ComponentMultiStyle = {
      baseStyle: {
        container: {
          bg: { base: "warning", lg: "danger" },
          borderColor: "border",
          color: "primary",
          fontSize: "sm",
        },
      },
    }
    const target2: ComponentMultiStyle = {
      baseStyle: {
        container: {
          bg: "success",
          borderColor: ["black", "white"],
          color: "secondary",
          m: "md",
        },
      },
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: {
          color: "warning",
          p: "lg",
        },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
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

    expect(mergeMultiStyle(target1, target2, source)()).toStrictEqual(expected)
  })

  test("should correctly merge style objects with omitted keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "secondary" }, color: "primary" },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        outline: { container: { borderWidth: "1px" } },
        solid: { container: { bg: "primary" } },
      },
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg" },
      },
      variants: {
        solid: { inner: { borderColor: ["black", "white"] } },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg" },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        solid: { inner: { borderColor: ["black", "white"] } },
      },
    }

    expect(
      mergeMultiStyle(target, source)({ omit: ["variants", "container"] }),
    ).toStrictEqual(expected)
  })

  test("should correctly merge style objects or empty objects with omitted keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "secondary" }, color: "primary" },
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
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg" },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg" },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        outline: {},
        solid: { inner: { borderColor: ["black", "white"] } },
      },
    }

    expect(
      mergeMultiStyle(target, source)({ omit: ["container"] }),
    ).toStrictEqual(expected)
  })

  test("should correctly merge style objects or functions with omitted keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: () => ({
        container: { _hover: { color: "secondary" }, color: "primary" },
        inner: { p: { base: "md", lg: "sm" } },
      }),
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg" },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg" },
        inner: { p: { base: "md", lg: "sm" } },
      },
    }

    expect(
      runIfFunc(
        mergeMultiStyle(target, source)({ omit: ["container"] }).baseStyle,
        props,
      ),
    ).toStrictEqual(expected.baseStyle)
  })

  test("should correctly merge style objects with picked keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "secondary" }, color: "primary" },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        outline: { container: { borderColor: "border" } },
        solid: { container: { bg: "primary" } },
      },
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "success" }, m: "md", p: "lg" },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "success" }, m: "md", p: "lg" },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        solid: { container: { bg: "primary" } },
      },
    }

    expect(
      mergeMultiStyle(
        target,
        source,
      )({ pick: ["baseStyle", "inner", "variants.solid"] }),
    ).toStrictEqual(expected)
  })

  test("should correctly merge style objects or empty objects with picked keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "secondary" }, color: "primary" },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        outline: { container: { borderColor: "border" } },
        solid: { container: { bg: "primary" } },
      },
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "success" }, m: "md", p: "lg" },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "success" }, m: "md", p: "lg" },
      },
      variants: {
        solid: { container: { bg: "primary" } },
      },
    }

    expect(
      mergeMultiStyle(
        target,
        source,
      )({ pick: ["variants.solid", "container"] }),
    ).toStrictEqual(expected)
  })

  test("should correctly merge style objects or functions with picked keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: () => ({
        container: { _hover: { color: "secondary" }, color: "primary" },
        inner: { p: { base: "md", lg: "sm" } },
        item: { mt: "md" },
      }),
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "success" }, m: "md", p: "lg" },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "success" }, m: "md", p: "lg" },
        inner: { p: { base: "md", lg: "sm" } },
        item: { mt: "md" },
      },
    }

    expect(
      runIfFunc(
        mergeMultiStyle(
          target,
          source,
        )({ pick: ["baseStyle", "inner", "item"] }).baseStyle,
        props,
      ),
    ).toStrictEqual(expected.baseStyle)
  })

  test("should merge nested style objects", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: {
          _hover: { color: "secondary" },
          color: "primary",
          p: { base: "md", lg: "sm" },
        },
      },
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { _hover: { color: "success" }, m: "md", p: "lg" },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: {
          _hover: { color: "success" },
          color: "primary",
          m: "md",
          p: "lg",
        },
      },
    }

    expect(mergeMultiStyle(target, source)()).toStrictEqual(expected)
  })

  test("should override functions with non-function values", () => {
    const target: ComponentMultiStyle = {
      baseStyle: () => ({ container: { color: "primary", fontSize: "sm" } }),
    }
    const source: ComponentMultiStyle = {
      baseStyle: { container: { color: "secondary", m: "md" } },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: { container: { color: "secondary", fontSize: "sm", m: "md" } },
    }

    expect(
      runIfFunc(mergeMultiStyle(target, source)().baseStyle, props),
    ).toStrictEqual(expected.baseStyle)
  })

  test("should handle function values", () => {
    const target: ComponentMultiStyle = {
      baseStyle: () => ({
        container: {
          color: "primary",
          fontSize: { base: "md", lg: "sm" },
          w: "sm",
        },
      }),
    }
    const source: ComponentMultiStyle = {
      baseStyle: () => ({
        container: { color: "secondary", fontSize: "lg", m: "md" },
      }),
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: { color: "secondary", fontSize: "lg", m: "md", w: "sm" },
      },
    }

    expect(
      runIfFunc(mergeMultiStyle(target, source)().baseStyle, props),
    ).toStrictEqual(expected.baseStyle)
  })

  test("should not modify the original objects", () => {
    const target: ComponentMultiStyle = {
      baseStyle: { container: { color: "primary" } },
    }
    const source: ComponentMultiStyle = {
      baseStyle: { container: { color: "secondary", mt: "md" } },
    }

    mergeMultiStyle(target, source)()

    expect(target).toStrictEqual({
      baseStyle: { container: { color: "primary" } },
    })
    expect(source).toStrictEqual({
      baseStyle: { container: { color: "secondary", mt: "md" } },
    })
  })
})
