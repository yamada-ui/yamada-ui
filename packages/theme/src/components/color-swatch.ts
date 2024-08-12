import type { ComponentMultiStyle } from "@yamada-ui/core"

export const ColorSwatch: ComponentMultiStyle<"ColorSwatch"> = {
  baseStyle: {
    container: {
      position: "relative",
      _before: {
        content: `""`,
        display: "block",
        h: 0,
        pb: "100%",
      },
      "& > *": {
        overflow: "hidden",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        w: "100%",
        h: "100%",
      },
    },
    overlay: {
      boxSize: "full",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },

  variants: {
    basic: {
      container: { rounded: "md" },
      overlay: { rounded: "md" },
    },
    rounded: {
      container: { rounded: "full" },
      overlay: { rounded: "full" },
    },
  },

  sizes: {
    sm: {
      container: { boxSize: "6" },
    },
    md: {
      container: { boxSize: "8" },
    },
    lg: {
      container: { boxSize: "10" },
    },
  },

  defaultProps: {
    variant: "basic",
    size: "md",
  },
}
