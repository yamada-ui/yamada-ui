import type { ComponentMultiStyle } from "../../core"
import { mode } from "../../core"
import { getColor, isArray } from "../../utils"

export const Editable: ComponentMultiStyle<"Editable"> = {
  baseStyle: {
    container: {
      w: "full",
    },
    input: ({
      colorMode: m,
      errorBorderColor: ec = ["danger.500", "danger.400"],
      focusBorderColor: fc = "focus",
      theme: t,
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, m), getColor(fc[1], fc[1])(t, m))(m)
        : getColor(fc, fc)(t, m)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        bg: "transparent",
        fontSize: "inherit",
        fontWeight: "inherit",
        outline: 0,
        p: "1",
        rounded: "md",
        textAlign: "inherit",
        transitionDuration: "normal",
        transitionProperty: "common",
        w: "full",
        _focus: {
          boxShadow: `0px 0px 0px 1px ${focusBorderColor}`,
          zIndex: "yamcha",
        },
        _focusVisible: {
          boxShadow: `0px 0px 0px 1px ${focusBorderColor}`,
          zIndex: "yamcha",
        },
        _invalid: {
          boxShadow: `0px 0px 0px 1px ${errorBorderColor}`,
        },
        _placeholder: { opacity: 0.6 },
      }
    },
    preview: {
      bg: "transparent",
      cursor: "text",
      display: "inline-block",
      fontSize: "inherit",
      fontWeight: "inherit",
      p: "1",
      rounded: "md",
      textAlign: "inherit",
      transitionDuration: "normal",
      transitionProperty: "common",
      whiteSpace: "pre-line",
    },
    textarea: ({
      colorMode: m,
      errorBorderColor: ec = ["danger.500", "danger.400"],
      focusBorderColor: fc = "focus",
      theme: t,
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, m), getColor(fc[1], fc[1])(t, m))(m)
        : getColor(fc, fc)(t, m)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        bg: "transparent",
        boxSizing: "content-box",
        fontSize: "inherit",
        fontWeight: "inherit",
        h: "1lh",
        outline: 0,
        p: "1",
        rounded: "md",
        textAlign: "inherit",
        transitionDuration: "normal",
        transitionProperty: "common",
        w: "full",
        _focus: {
          boxShadow: `0px 0px 0px 1px ${focusBorderColor}`,
          zIndex: "yamcha",
        },
        _focusVisible: {
          boxShadow: `0px 0px 0px 1px ${focusBorderColor}`,
          zIndex: "yamcha",
        },
        _invalid: {
          boxShadow: `0px 0px 0px 1px ${errorBorderColor}`,
        },
        _placeholder: { opacity: 0.6 },
      }
    },
  },
}
