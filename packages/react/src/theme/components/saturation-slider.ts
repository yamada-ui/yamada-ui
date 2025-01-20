import type { ComponentMultiStyle } from "../../core"

export const SaturationSlider: ComponentMultiStyle<"SaturationSlider"> = {
  baseStyle: {
    container: {
      cursor: "pointer",
      rounded: "md",
      w: "full",
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
      _readOnly: { cursor: "auto" },
    },
    inner: {
      rounded: "md",
    },
    overlay: {
      rounded: "md",
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
      container: { maxW: "xs" },
      thumb: { boxSize: "3" },
    },
    md: {
      container: { maxW: "sm" },
      thumb: { boxSize: "4" },
    },
    lg: {
      container: { maxW: "md" },
      thumb: { boxSize: "5" },
    },
    full: {
      container: { maxW: "full" },
      thumb: { boxSize: "5" },
    },
  },

  defaultProps: {
    size: "md",
  },
}
