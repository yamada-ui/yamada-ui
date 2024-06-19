import type { ComponentMultiStyle } from "@yamada-ui/core"

export const SaturationSlider: ComponentMultiStyle = {
  baseStyle: {
    container: {
      w: "full",
      rounded: "md",
      cursor: "pointer",
      position: "relative",
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
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    track: {
      position: "relative",
      w: "100%",
      h: "100%",
    },
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
