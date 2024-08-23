import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import { getColor, isArray, transparentizeColor } from "@yamada-ui/utils"

export const Dropzone: ComponentMultiStyle<"Dropzone"> = {
  baseStyle: ({ theme: t, colorMode: m }) => ({
    container: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: ["blackAlpha.700", "whiteAlpha.600"],
      rounded: "md",
      w: "100%",
      p: "md",
      bg: ["blackAlpha.50", "whiteAlpha.50"],
      outline: 0,
      overflow: "hidden",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      _hover: {
        cursor: "pointer",
        bg: ["blackAlpha.100", "whiteAlpha.100"],
      },
      _loading: {
        cursor: "not-allowed",
        bg: ["blackAlpha.100", "whiteAlpha.100"],
      },
      _accept: {
        bg: ["success.50", transparentizeColor("success.400", 0.12)(t, m)],
        borderColor: ["success.500", "success.400"],
      },
      _reject: {
        bg: ["danger.50", transparentizeColor("danger.400", 0.12)(t, m)],
        borderColor: ["danger.500", "danger.400"],
      },
    },
    overlay: {
      bg: ["whiteAlpha.600", "blackAlpha.600"],
      zIndex: "kurillin",
      position: "absolute",
      top: 0,
      left: 0,
      w: "100%",
      h: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }),

  variants: {
    solid: ({
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
        container: {
          borderWidth: "1px",
          borderStyle: "solid",
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0 0 0 1px ${errorBorderColor}`,
          },
          _focus: {
            zIndex: "yamcha",
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
          _focusVisible: {
            zIndex: "yamcha",
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
        },
      }
    },
    dashed: ({
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
        container: {
          borderWidth: "1px",
          borderStyle: "dashed",
          _invalid: {
            borderColor: errorBorderColor,
            boxShadow: `0 0 0 1px ${errorBorderColor}`,
          },
          _focus: {
            zIndex: "yamcha",
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
          _focusVisible: {
            zIndex: "yamcha",
            borderColor: focusBorderColor,
            boxShadow: `0 0 0 1px ${focusBorderColor}`,
          },
        },
      }
    },
    unstyled: {
      container: {
        color: "inherit",
        rounded: "inherit",
        bg: "transparent",
        h: "auto",
        _hover: {
          cursor: "inherit",
          bg: "transparent",
        },
        _loading: {
          cursor: "auto",
          bg: "transparent",
        },
        _accept: {
          bg: "transparent",
          borderColor: "inherit",
        },
        _reject: {
          bg: "transparent",
          borderColor: "inherit",
        },
      },
      overlay: {
        bg: "transparent",
      },
    },
  },

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

  defaultProps: {
    size: "sm",
    variant: "dashed",
  },
}
