import { defineComponentSlotStyle } from "../../core"

export const dropzoneStyle = defineComponentSlotStyle({
  base: {
    description: { fontSize: "sm" },
    icon: { fontSize: "7xl" },
    loading: { fontSize: "4xl" },
    overlay: {
      alignItems: "center",
      bg: "bg.panel/40",
      boxSize: "full",
      display: "flex",
      inset: 0,
      justifyContent: "center",
      position: "absolute",
      zIndex: "kurillin",
    },
    root: {
      "& *": { pointerEvents: "none" },
      "--error-border-color": "colors.border.error",
      "--focus-border-color": "colorScheme.outline",
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      focusRingColor: "{focus-border-color}",
      justifyContent: "center",
      overflow: "hidden",
      p: "md",
      position: "relative",
      rounded: "l2",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "full",
      _loading: { cursor: "not-allowed" },
      _readOnly: { layerStyle: "readOnly" },
      _disabled: { layerStyle: "disabled" },
    },
    title: {
      fontSize: "xl",
    },
  },

  variants: {
    base: {
      icon: {
        _groupAccept: { color: "success" },
        _groupReject: { color: "error" },
      },
      root: {
        color: "fg.subtle",
        _accept: { bg: "success.bg" },
        _reject: { bg: "error.bg" },
      },
      title: { color: "fg.muted" },
    },
    dashed: {
      root: {
        bg: "transparent",
        borderStyle: "dashed",
        borderWidth: "1px",
        _accept: { borderColor: "success.muted" },
        _reject: { borderColor: ["error.muted", "error.subtle"] },
        _hover: {
          "&:not([data-accept], [data-reject])": {
            bg: "bg.panel",
          },
        },
        _invalid: {
          borderColor: "{error-border-color}",
          focusRingColor: "{error-border-color}",
        },
      },
    },
    panel: {
      root: {
        bg: "bg.panel",
        border: "1px solid transparent",
        focusVisibleRing: "inside",
        _hover: { bg: "bg.subtle" },
        _invalid: {
          borderColor: "{error-border-color}",
          focusRingColor: "{error-border-color}",
        },
      },
    },
    plain: {
      root: {
        rounded: "0",
        _invalid: {
          borderColor: "{error-border-color}",
          focusRingColor: "{error-border-color}",
        },
      },
    },
    solid: {
      root: {
        bg: "transparent",
        borderWidth: "1px",
        focusVisibleRing: "inside",
        _accept: { borderColor: "success.muted" },
        _reject: { borderColor: ["error.muted", "error.subtle"] },
        _hover: { bg: "bg.panel" },
        _invalid: {
          borderColor: "{error-border-color}",
          focusRingColor: "{error-border-color}",
        },
      },
    },
  },

  sizes: {
    xs: {
      root: { minH: "xs" },
    },
    sm: {
      root: { minH: "sm" },
    },
    md: {
      root: { minH: "md" },
    },
    lg: {
      root: { minH: "lg" },
    },
    full: {
      root: { minH: "full" },
    },
  },

  defaultProps: {
    size: "sm",
    variant: "dashed",
  },
})

export type DropzoneStyle = typeof dropzoneStyle
