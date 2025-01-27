import type { ComponentSlotStyle, ComponentStyle } from "./index.types"
import { pickStyle } from "."

describe("pickStyle", () => {
  test("should picked style objects", () => {
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
      variants: {
        outline: {
          container: { borderWidth: "1px" },
        },
      },
    }
    const expected: ComponentStyle = {
      base: {
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

  test("should picked style objects omitted props", () => {
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
      defaultProps: {
        size: "md",
      },
    }
    const expected: ComponentStyle = {
      base: {
        bg: { base: "warning", lg: "danger" },
        borderColor: "border",
        color: "primary",
        fontSize: "sm",
      },
    }

    expect(pickStyle(target, "container", false)).toStrictEqual(expected)
  })
})
