import type { ComponentMultiStyle } from "../../core"
import { mode } from "../../core"
import { getColor, isArray, transparentizeColor } from "../../utils"

export const Dropzone: ComponentMultiStyle<"Dropzone"> = {
  baseStyle: ({ colorMode: m, theme: t }) => ({
    container: {
      alignItems: "center",
      bg: ["blackAlpha.50", "whiteAlpha.50"],
      color: "muted",
      display: "flex",
      justifyContent: "center",
      outline: 0,
      overflow: "hidden",
      p: "md",
      position: "relative",
      rounded: "md",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "100%",
      _accept: {
        bg: ["success.50", transparentizeColor("success.400", 0.12)(t, m)],
        borderColor: ["success.500", "success.400"],
      },
      _loading: {
        bg: ["blackAlpha.100", "whiteAlpha.100"],
        cursor: "not-allowed",
      },
      _reject: {
        bg: ["danger.50", transparentizeColor("danger.400", 0.12)(t, m)],
        borderColor: ["danger.500", "danger.400"],
      },
      _hover: {
        bg: ["blackAlpha.100", "whiteAlpha.100"],
        cursor: "pointer",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    overlay: {
      alignItems: "center",
      bg: ["whiteAlpha.600", "blackAlpha.600"],
      display: "flex",
      h: "100%",
      justifyContent: "center",
      left: 0,
      position: "absolute",
      top: 0,
      w: "100%",
      zIndex: "kurillin",
    },
  }),

  sizes: {
    xs: {
      container: { h: "xs" },
    },
    sm: {
      container: { h: "sm" },
    },
    md: {
      container: { h: "md" },
    },
    lg: {
      container: { h: "lg" },
    },
    full: {
      container: { h: "full" },
    },
  },

  variants: {
    dashed: ({
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
        container: {
          borderStyle: "dashed",
          borderWidth: "1px",
          _focus: {
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
            zIndex: "yamcha",
          },
          _focusVisible: {
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
            zIndex: "yamcha",
          },
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0 0 0 1px ${errorBorderColor}`,
          },
        },
      }
    },
    solid: ({
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
        container: {
          borderStyle: "solid",
          borderWidth: "1px",
          _focus: {
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
            zIndex: "yamcha",
          },
          _focusVisible: {
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
            zIndex: "yamcha",
          },
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0 0 0 1px ${errorBorderColor}`,
          },
        },
      }
    },
    unstyled: {
      container: {
        bg: "transparent",
        color: "inherit",
        h: "auto",
        rounded: "inherit",
        _accept: {
          bg: "transparent",
          borderColor: "inherit",
        },
        _loading: {
          bg: "transparent",
          cursor: "auto",
        },
        _reject: {
          bg: "transparent",
          borderColor: "inherit",
        },
        _hover: {
          bg: "transparent",
          cursor: "inherit",
        },
      },
      overlay: {
        bg: "transparent",
      },
    },
  },

  defaultProps: {
    size: "sm",
    variant: "dashed",
  },
}
