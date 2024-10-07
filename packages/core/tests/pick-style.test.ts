import type { ComponentMultiStyle, ComponentStyle, StyledTheme } from "../src"
import { runIfFunc } from "@yamada-ui/utils"
import { pickStyle } from "../src"

const props = { theme: {} as StyledTheme }

describe("pickStyle", () => {
  test("should picked style objects", () => {
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
      variants: {
        outline: {
          container: { borderWidth: "1px" },
        },
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
        color: "primary",
        fontSize: "sm",
      },
      variants: {
        outline: {
          borderWidth: "1px",
        },
      },
    }

    expect(pickStyle(target, "container")).toStrictEqual(expected)
  })

  test("should picked style functions", () => {
    const target: ComponentMultiStyle = {
      baseStyle: () => ({
        container: {
          bg: { base: "warning", lg: "danger" },
          borderColor: "border",
          color: "primary",
          fontSize: "sm",
        },
        inner: { p: "md" },
      }),
      variants: {
        outline: () => ({
          container: { borderWidth: "1px" },
        }),
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
        color: "primary",
        fontSize: "sm",
      },
      variants: {
        outline: {
          borderWidth: "1px",
        },
      },
    }

    expect(
      runIfFunc(pickStyle(target, "container").baseStyle, props),
    ).toStrictEqual(expected.baseStyle)

    expect(
      runIfFunc(pickStyle(target, "container").variants?.outline, props),
    ).toStrictEqual(expected.variants?.outline)
  })

  test("should picked style objects omitted props", () => {
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
      defaultProps: {
        size: "md",
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
        color: "primary",
        fontSize: "sm",
      },
    }

    expect(pickStyle(target, "container", false)).toStrictEqual(expected)
  })
})
