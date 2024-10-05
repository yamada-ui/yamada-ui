import type { ComponentMultiStyle } from "@yamada-ui/core"

export const HueSlider: ComponentMultiStyle<"HueSlider"> = {
  baseStyle: {
    container: {
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
      _readOnly: { cursor: "auto" },
      cursor: "pointer",
      rounded: "full",
      w: "100%",
    },
    overlay: {
      rounded: "full",
    },
    thumb: {
      _active: {
        transform: `scale(1.15)`,
      },
      _focusVisible: {
        boxShadow: ["outline", "outline"],
      },
      borderColor: "whiteAlpha.950",
      borderWidth: "3px",
      boxShadow: ["md", "dark-md"],
      outline: 0,
      rounded: "full",
      transitionDuration: "normal",
      transitionProperty: "transform",
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
