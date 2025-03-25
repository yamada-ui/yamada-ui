import { defineComponentSlotStyle } from "../../core"

export const segmentedControlStyle = defineComponentSlotStyle({
  base: {
    button: {
      alignItems: "center",
      color: ["blackAlpha.800", "whiteAlpha.800"],
      cursor: "pointer",
      display: "inline-flex",
      flex: "1 1 0%",
      fontWeight: "medium",
      justifyContent: "center",
      position: "relative",
      transitionDuration: "500ms",
      transitionProperty: "color, box-shadow, opacity",
      whiteSpace: "nowrap",
      _checked: {
        anchorName: "--checked",
      },
      _hover: {
        opacity: 0.7,
        _checked: {
          opacity: 1,
        },
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _readOnly: { cursor: "default" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    },
    root: {
      alignItems: "center",
      anchorScope: "--checked",
      bg: ["blackAlpha.100", "whiteAlpha.100"],
      display: "inline-flex",
      p: "1",
      _before: {
        boxShadow: "md",
        height: "anchor-size(--checked height)",
        left: "anchor(--checked left)",
        pointerEvents: "none",
        position: "absolute",
        top: "anchor(--checked top)",
        transitionDuration: "300ms",
        transitionProperty: "left, width",
        width: "anchor-size(--checked width)",
      },
      _readOnly: { cursor: "default" },
      _disabled: { cursor: "not-allowed" },
    },
  },

  variants: {
    basic: {
      button: {
        rounded: "md",
        _checked: {
          color: "colorScheme.contrast",
        },
      },
      root: {
        rounded: "lg",
        _before: {
          bg: "colorScheme.solid",
          color: "colorScheme.contrast",
          rounded: "md",
        },
      },
    },
    rounded: {
      button: {
        rounded: "full",
        _checked: {
          color: "colorScheme.contrast",
        },
      },
      root: {
        rounded: "full",
        _before: {
          bg: "colorScheme.solid",
          color: "colorScheme.contrast",
          rounded: "full",
        },
      },
    },
  },

  sizes: {
    sm: {
      button: { fontSize: "sm", px: "2", py: "0.5" },
      root: { minW: "xs" },
    },
    md: {
      button: { fontSize: "md", px: "3", py: "1" },
      root: { minW: "sm" },
    },
    lg: {
      button: { fontSize: "md", px: "4", py: "1.5" },
      root: { minW: "md" },
    },
  },

  defaultProps: {
    size: "md",
    variant: "basic",
  },
})

export type SegmentedControlStyle = typeof segmentedControlStyle
