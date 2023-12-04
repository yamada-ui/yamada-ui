import { runIfFunc } from "@yamada-ui/utils"
import {
  pickStyle,
  type ComponentMultiStyle,
  type ComponentStyle,
  type StyledTheme,
} from "../src"

const props = { theme: {} as StyledTheme }

describe("pickStyle", () => {
  test("should picked style objects", () => {
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
      variants: {
        outline: {
          container: { borderWidth: "1px" },
        },
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
        color: "primary",
        fontSize: "sm",
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
      },
      variants: {
        outline: {
          borderWidth: "1px",
        },
      },
    }

    expect(pickStyle(target, "container")).toEqual(expected)
  })

  test("should picked style functions", () => {
    const target: ComponentMultiStyle = {
      baseStyle: () => ({
        container: {
          color: "primary",
          fontSize: "sm",
          bg: { base: "warning", lg: "danger" },
          borderColor: "border",
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
        color: "primary",
        fontSize: "sm",
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
      },
      variants: {
        outline: {
          borderWidth: "1px",
        },
      },
    }

    expect(runIfFunc(pickStyle(target, "container").baseStyle, props)).toEqual(
      expected.baseStyle,
    )

    expect(
      runIfFunc(pickStyle(target, "container").variants?.outline, props),
    ).toEqual(expected.variants?.outline)
  })

  test("should picked style objects omitted props", () => {
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
      defaultProps: {
        size: "md",
      },
    }
    const expected: ComponentStyle = {
      baseStyle: {
        color: "primary",
        fontSize: "sm",
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
      },
    }

    expect(pickStyle(target, "container", false)).toEqual(expected)
  })
})
