import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import { getColor, isArray } from "@yamada-ui/utils"

export const Editable: ComponentMultiStyle<"Editable"> = {
  baseStyle: {
    container: {
      w: "full",
    },
    preview: {
      rounded: "md",
      p: "1",
      whiteSpace: "pre-line",
      transitionProperty: "common",
      transitionDuration: "normal",
    },
    input: ({
      theme: t,
      colorMode: m,
      focusBorderColor: fc = "focus",
      errorBorderColor: ec = ["danger.500", "danger.400"],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, m), getColor(fc[1], fc[1])(t, m))(m)
        : getColor(fc, fc)(t, m)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        rounded: "md",
        p: "1",
        w: "full",
        transitionProperty: "common",
        transitionDuration: "normal",
        _placeholder: { opacity: 0.6 },
        _invalid: {
          boxShadow: `0px 0px 0px 1px ${errorBorderColor}`,
        },
        _focus: {
          zIndex: "yamcha",
          boxShadow: `0px 0px 0px 1px ${focusBorderColor}`,
        },
        _focusVisible: {
          zIndex: "yamcha",
          boxShadow: `0px 0px 0px 1px ${focusBorderColor}`,
        },
      }
    },
    textarea: ({
      theme: t,
      colorMode: m,
      focusBorderColor: fc = "focus",
      errorBorderColor: ec = ["danger.500", "danger.400"],
    }) => {
      const focusBorderColor = isArray(fc)
        ? mode(getColor(fc[0], fc[0])(t, m), getColor(fc[1], fc[1])(t, m))(m)
        : getColor(fc, fc)(t, m)
      const errorBorderColor = isArray(ec)
        ? mode(getColor(ec[0], ec[0])(t, m), getColor(ec[1], ec[1])(t, m))(m)
        : getColor(ec, ec)(t, m)

      return {
        boxSizing: "content-box",
        rounded: "md",
        p: "1",
        w: "full",
        h: "1lh",
        transitionProperty: "common",
        transitionDuration: "normal",
        _placeholder: { opacity: 0.6 },
        _invalid: {
          boxShadow: `0px 0px 0px 1px ${errorBorderColor}`,
        },
        _focus: {
          zIndex: "yamcha",
          boxShadow: `0px 0px 0px 1px ${focusBorderColor}`,
        },
        _focusVisible: {
          zIndex: "yamcha",
          boxShadow: `0px 0px 0px 1px ${focusBorderColor}`,
        },
      }
    },
  },
}
