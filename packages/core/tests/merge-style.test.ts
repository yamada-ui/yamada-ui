import { runIfFunc } from "@yamada-ui/utils"
import type { StyledTheme, ComponentStyle, ComponentMultiStyle } from "../src"
import { mergeMultiStyle, mergeStyle } from "../src/theme"

const props = { theme: {} as StyledTheme }

describe("mergeStyle", () => {
  test("should merge two style objects", () => {
    const target: ComponentStyle = {
      baseStyle: {
        color: "primary",
        fontSize: "sm",
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
      },
    }
    const source: ComponentStyle = {
      baseStyle: {
        color: "secondary",
        m: "md",
        bg: "success",
        borderColor: ["black", "white"],
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
        color: "secondary",
        fontSize: "sm",
        m: "md",
        bg: "success",
        borderColor: ["black", "white"],
      },
    }

    expect(mergeStyle(target, source)()).toEqual(expected)
  })

  test("should merge many style objects", () => {
    const target1: ComponentStyle = {
      baseStyle: {
        color: "primary",
        fontSize: "sm",
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
      },
    }
    const target2: ComponentStyle = {
      baseStyle: {
        color: "secondary",
        m: "md",
        bg: "success",
        borderColor: ["black", "white"],
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
        color: "warning",
        fontSize: "sm",
        m: "md",
        p: "lg",
        bg: "success",
        borderColor: ["black", "white"],
      },
    }

    expect(mergeStyle(target1, target2, source)()).toEqual(expected)
  })

  test("should correctly merge style objects with omitted keys", () => {
    const target: ComponentStyle = {
      baseStyle: {
        color: "primary",
        fontSize: "sm",
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
      },
      variants: {
        solid: { bg: "primary" },
      },
      sizes: {
        sm: { w: "sm" },
        md: { w: "md" },
      },
    }
    const source: ComponentStyle = {
      baseStyle: {
        color: "secondary",
        m: "md",
        bg: "success",
        borderColor: ["black", "white"],
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
        color: "secondary",
        fontSize: "sm",
        m: "md",
        bg: "success",
        borderColor: ["black", "white"],
      },
      sizes: {
        md: { w: "md" },
      },
    }

    expect(mergeStyle(target, source)({ omit: ["variants", "sm"] })).toEqual(
      expected,
    )
  })

  test("should correctly merge style objects with picked keys", () => {
    const target: ComponentStyle = {
      baseStyle: {
        color: "primary",
        fontSize: "sm",
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
      },
      variants: {
        solid: { bg: "primary" },
      },
      sizes: {
        sm: { w: "sm" },
        md: { w: "md" },
      },
    }
    const source: ComponentStyle = {
      baseStyle: {
        color: "secondary",
        m: "md",
        bg: "success",
        borderColor: ["black", "white"],
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
        color: "secondary",
        m: "md",
        bg: "success",
        borderColor: ["black", "white"],
      },
      variants: {
        solid: { bg: "primary" },
      },
      sizes: {
        md: { w: "md" },
      },
    }

    expect(
      mergeStyle(
        target,
        source,
      )({ pick: ["sizes", "md", "variants", "solid"] }),
    ).toEqual(expected)
  })

  test("should merge nested style objects", () => {
    const target: ComponentStyle = {
      baseStyle: {
        color: "primary",
        p: { base: "md", lg: "sm" },
        _hover: { color: "secondary" },
      },
    }
    const source: ComponentStyle = {
      baseStyle: {
        p: "lg",
        _hover: { boxShadow: "outline" },
        m: "md",
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
        color: "primary",
        p: "lg",
        _hover: { color: "secondary", boxShadow: "outline" },
        m: "md",
      },
    }

    expect(mergeStyle(target, source)()).toEqual(expected)
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

    expect(runIfFunc(mergeStyle(target, source)().baseStyle, props)).toEqual(
      expected.baseStyle,
    )
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

    expect(runIfFunc(mergeStyle(target, source)().baseStyle, props)).toEqual(
      expected.baseStyle,
    )
  })

  test("should not modify the original objects", () => {
    const target: ComponentStyle = { baseStyle: { color: "primary" } }
    const source: ComponentStyle = {
      baseStyle: { color: "secondary", mt: "md" },
    }

    mergeStyle(target, source)()

    expect(target).toEqual({ baseStyle: { color: "primary" } })
    expect(source).toEqual({ baseStyle: { color: "secondary", mt: "md" } })
  })
})

describe("mergeMultiStyle", () => {
  test("should merge two style objects", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: {
          color: "primary",
          fontSize: "sm",
          bg: { base: "warning", lg: "danger" },
          borderColor: "border",
        },
        inner: { p: "md" },
      },
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: {
          color: "secondary",
          m: "md",
          bg: "success",
          borderColor: ["black", "white"],
        },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: {
          color: "secondary",
          fontSize: "sm",
          m: "md",
          bg: "success",
          borderColor: ["black", "white"],
        },
        inner: { p: "md" },
      },
    }

    expect(mergeMultiStyle(target, source)()).toEqual(expected)
  })

  test("should merge many style objects", () => {
    const target1: ComponentMultiStyle = {
      baseStyle: {
        container: {
          color: "primary",
          fontSize: "sm",
          bg: { base: "warning", lg: "danger" },
          borderColor: "border",
        },
      },
    }
    const target2: ComponentMultiStyle = {
      baseStyle: {
        container: {
          color: "secondary",
          m: "md",
          bg: "success",
          borderColor: ["black", "white"],
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
          color: "warning",
          fontSize: "sm",
          m: "md",
          p: "lg",
          bg: "success",
          borderColor: ["black", "white"],
        },
      },
    }

    expect(mergeMultiStyle(target1, target2, source)()).toEqual(expected)
  })

  test("should correctly merge style objects with omitted keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: { color: "primary", _hover: { color: "secondary" } },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        solid: { container: { bg: "primary" } },
        outline: { container: { borderWidth: "1px" } },
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
    ).toEqual(expected)
  })

  test("should correctly merge style objects or empty objects with omitted keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: { color: "primary", _hover: { color: "secondary" } },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        solid: {
          container: { bg: "primary" },
          inner: { borderColor: ["black", "white"] },
        },
        outline: { container: { borderWidth: "1px" } },
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
        solid: { inner: { borderColor: ["black", "white"] } },
        outline: {},
      },
    }

    expect(mergeMultiStyle(target, source)({ omit: ["container"] })).toEqual(
      expected,
    )
  })

  test("should correctly merge style objects or functions with omitted keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: () => ({
        container: { color: "primary", _hover: { color: "secondary" } },
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
    ).toEqual(expected.baseStyle)
  })

  test("should correctly merge style objects with picked keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: { color: "primary", _hover: { color: "secondary" } },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        solid: { container: { bg: "primary" } },
        outline: { container: { borderColor: "border" } },
      },
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg", _hover: { color: "success" }, m: "md" },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg", _hover: { color: "success" }, m: "md" },
        inner: { p: { base: "md", lg: "sm" } },
      },
    }

    expect(
      mergeMultiStyle(target, source)({ pick: ["baseStyle", "inner"] }),
    ).toEqual(expected)
  })

  test("should correctly merge style objects or empty objects with picked keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: { color: "primary", _hover: { color: "secondary" } },
        inner: { p: { base: "md", lg: "sm" } },
      },
      variants: {
        solid: { container: { bg: "primary" } },
        outline: { container: { borderColor: "border" } },
      },
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg", _hover: { color: "success" }, m: "md" },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg", _hover: { color: "success" }, m: "md" },
      },
      variants: {
        solid: { container: { bg: "primary" } },
      },
    }

    expect(
      mergeMultiStyle(
        target,
        source,
      )({ pick: ["variants", "solid", "container"] }),
    ).toEqual(expected)
  })

  test("should correctly merge style objects or functions with picked keys", () => {
    const target: ComponentMultiStyle = {
      baseStyle: () => ({
        container: { color: "primary", _hover: { color: "secondary" } },
        inner: { p: { base: "md", lg: "sm" } },
        item: { mt: "md" },
      }),
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg", _hover: { color: "success" }, m: "md" },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        inner: { p: { base: "md", lg: "sm" } },
        item: { mt: "md" },
        container: { p: "lg", _hover: { color: "success" }, m: "md" },
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
    ).toEqual(expected.baseStyle)
  })

  test("should merge nested style objects", () => {
    const target: ComponentMultiStyle = {
      baseStyle: {
        container: {
          color: "primary",
          p: { base: "md", lg: "sm" },
          _hover: { color: "secondary" },
        },
      },
    }
    const source: ComponentMultiStyle = {
      baseStyle: {
        container: { p: "lg", _hover: { color: "success" }, m: "md" },
      },
    }
    const expected: ComponentMultiStyle = {
      baseStyle: {
        container: {
          color: "primary",
          p: "lg",
          _hover: { color: "success" },
          m: "md",
        },
      },
    }

    expect(mergeMultiStyle(target, source)()).toEqual(expected)
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
    ).toEqual(expected.baseStyle)
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
    ).toEqual(expected.baseStyle)
  })

  test("should not modify the original objects", () => {
    const target: ComponentMultiStyle = {
      baseStyle: { container: { color: "primary" } },
    }
    const source: ComponentMultiStyle = {
      baseStyle: { container: { color: "secondary", mt: "md" } },
    }

    mergeMultiStyle(target, source)()

    expect(target).toEqual({ baseStyle: { container: { color: "primary" } } })
    expect(source).toEqual({
      baseStyle: { container: { color: "secondary", mt: "md" } },
    })
  })
})
