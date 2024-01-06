import type { ComponentMultiStyle } from "@yamada-ui/core"

export const SaturationSlider: ComponentMultiStyle = {
  baseStyle: {
    container: {
      w: "100%",
      rounded: "md",
      cursor: "pointer",
      _readOnly: { cursor: "auto" },
      _disabled: {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    },
    inner: {
      rounded: "md",
    },
    overlay: {
      rounded: "md",
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
      container: { maxW: "sm" },
      thumb: { boxSize: "4" },
    },
    md: {
      container: { maxW: "md" },
      thumb: { boxSize: "5" },
    },
    lg: {
      container: { maxW: "lg" },
      thumb: { boxSize: "6" },
    },
  },

  defaultProps: {
    size: "md",
  },
}
