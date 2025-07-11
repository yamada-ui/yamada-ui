import { defineComponentSlotStyle } from "../../core"

export const dropzoneStyle = defineComponentSlotStyle({
  base: {
    overlay: {
      alignItems: "center",
      bg: ["whiteAlpha.600", "blackAlpha.600"],
      display: "flex",
      h: "100%",
      justifyContent: "center",
      left: 0,
      position: "absolute",
      top: 0,
      w: "100%",
      zIndex: "kurillin",
    },
    root: {
      "&[data-accept]": {
        bg: ["success.50", "success.900"],
        borderColor: ["success.500", "success.400"],
      },
      "&[data-loading]": {
        bg: ["blackAlpha.100", "whiteAlpha.100"],
        cursor: "not-allowed",
      },
      "&[data-reject]": {
        bg: ["danger.50", "danger.900"],
        borderColor: ["danger.500", "danger.400"],
      },
      alignItems: "center",
      bg: ["blackAlpha.50", "whiteAlpha.50"],
      color: "muted",
      display: "flex",
      justifyContent: "center",
      outline: 0,
      overflow: "hidden",
      p: "md",
      position: "relative",
      rounded: "md",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "100%",
      _hover: {
        bg: ["blackAlpha.100", "whiteAlpha.100"],
        cursor: "pointer",
      },
      _focus: {
        borderColor: [
          "var(--focus-border-color, blue.500)",
          "var(--focus-border-color, blue.300)",
        ],
        boxShadow: [
          "0 0 0 1px var(--focus-border-color, var(--ui-colors-blue-500))",
          "0 0 0 1px var(--focus-border-color, var(--ui-colors-blue-300))",
        ],
        zIndex: 1,
      },
      _focusVisible: {
        borderColor: [
          "var(--focus-border-color, blue.500)",
          "var(--focus-border-color, blue.300)",
        ],
        boxShadow: [
          "0 0 0 1px var(--focus-border-color, var(--ui-colors-blue-500))",
          "0 0 0 1px var(--focus-border-color, var(--ui-colors-blue-300))",
        ],
        zIndex: 1,
      },
      _invalid: {
        borderColor: [
          "var(--error-border-color, red.500)",
          "var(--error-border-color, red.400)",
        ],
        boxShadow: [
          "0 0 0 1px var(--error-border-color, var(--ui-colors-red-500))",
          "0 0 0 1px var(--error-border-color, var(--ui-colors-red-400))",
        ],
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
  },

  variants: {
    dashed: {
      root: {
        borderStyle: "dashed",
        borderWidth: "1px",
      },
    },
    solid: {
      root: {
        borderStyle: "solid",
        borderWidth: "1px",
      },
    },
    unstyled: {
      overlay: {
        bg: "transparent",
      },
      root: {
        "&[data-accept]": {
          bg: "transparent",
          borderColor: "inherit",
        },
        "&[data-loading]": {
          bg: "transparent",
          cursor: "auto",
        },
        "&[data-reject]": {
          bg: "transparent",
          borderColor: "inherit",
        },
        bg: "transparent",
        borderStyle: "none",
        borderWidth: 0,
        color: "inherit",
        minH: "auto",
        rounded: "inherit",
        _hover: {
          bg: "transparent",
          cursor: "inherit",
        },
      },
    },
  },

  sizes: {
    xs: {
      root: { h: "xs" },
    },
    sm: {
      root: { h: "sm" },
    },
    md: {
      root: { h: "md" },
    },
    lg: {
      root: { h: "lg" },
    },
    full: {
      root: { h: "full" },
    },
  },

  defaultProps: {
    size: "sm",
    variant: "dashed",
  },
})

export type DropzoneStyle = typeof dropzoneStyle
