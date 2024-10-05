import type { ComponentMultiStyle } from "@yamada-ui/core"

export const SaturationSlider: ComponentMultiStyle<"SaturationSlider"> = {
  baseStyle: {
    container: {
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
      _readOnly: { cursor: "auto" },
      cursor: "pointer",
      rounded: "md",
      w: "full",
    },
    inner: {
      rounded: "md",
    },
    overlay: {
      rounded: "md",
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
