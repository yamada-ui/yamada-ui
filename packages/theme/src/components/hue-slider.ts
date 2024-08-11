import type { ComponentMultiStyle } from "@yamada-ui/core"

export const HueSlider: ComponentMultiStyle<"HueSlider"> = {
  baseStyle: {
    container: {
      w: "100%",
      rounded: "full",
      cursor: "pointer",
      _readOnly: { cursor: "auto" },
      _disabled: {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    },
    overlay: {
      rounded: "full",
    },
    track: {},
    thumb: {
      rounded: "full",
      outline: 0,
      borderWidth: "3px",
      borderColor: "whiteAlpha.950",
      boxShadow: ["md", "dark-md"],
      transitionProperty: "transform",
      transitionDuration: "normal",
      _active: {
        transform: `scale(1.15)`,
      },
      _focusVisible: {
        boxShadow: ["outline", "outline"],
      },
    },
  },

  sizes: {
    sm: {
      container: { h: "3" },
      thumb: { boxSize: "3" },
    },
    md: {
      container: { h: "4" },
      thumb: { boxSize: "4" },
    },
    lg: {
      container: { h: "5" },
      thumb: { boxSize: "5" },
    },
  },

  defaultProps: {
    size: "md",
  },
}
