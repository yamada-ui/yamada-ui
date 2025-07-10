import type { ComponentMultiStyle } from "../../core"

export const HueSlider: ComponentMultiStyle<"HueSlider"> = {
  baseStyle: {
    container: {
      cursor: "pointer",
      rounded: "full",
      w: "100%",
      _readOnly: { cursor: "auto" },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
    },
    overlay: {
      rounded: "full",
    },
    thumb: {
      borderColor: "whiteAlpha.950",
      borderWidth: "3px",
      boxShadow: ["md", "dark-md"],
      outline: 0,
      rounded: "full",
      transitionDuration: "moderate",
      transitionProperty: "transform",
      _active: {
        transform: `scale(1.15)`,
      },
      _focusVisible: {
        boxShadow: ["outline", "outline"],
      },
    },
    track: {},
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
