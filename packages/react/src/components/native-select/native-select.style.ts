import { defineComponentSlotStyle } from "../../core"
import { inputStyle } from "../input"

export const nativeSelectStyle = defineComponentSlotStyle({
  base: {
    field: {
      "& > option, optgroup": {
        bg: ["white", "black"],
      },
      cursor: "pointer",
      pb: "px",
      pe: "2rem",
      pr: "8",
      _focus: {
        zIndex: "unset",
      },
      _readOnly: {
        pointerEvents: "none",
      },
      ...inputStyle.base,
    },
    icon: {
      alignItems: "center",
      color: ["blackAlpha.600", "whiteAlpha.700"],
      display: "inline-flex",
      justifyContent: "center",
      outline: 0,
      pointerEvents: "none",
      position: "absolute",
      py: "2",
      rounded: "md",
      top: "50%",
      transform: "translateY(-50%)",
      w: "6",
      _disabled: {
        opacity: 0.4,
      },
    },
    option: {},
    optionGroup: {},
    root: {
      h: "fit-content",
      position: "relative",
      w: "100%",
    },
  },

  variants: {
    filled: {
      field: inputStyle.variants?.filled,
    },
    flushed: {
      field: inputStyle.variants?.flushed,
    },
    outline: {
      field: inputStyle.variants?.outline,
    },
  },

  sizes: {
    xs: {
      field: inputStyle.sizes?.xs,
      icon: {
        fontSize: "lg",
        insetEnd: "1",
        pt: "2",
      },
    },
    sm: {
      field: inputStyle.sizes?.sm,
      icon: {
        fontSize: "xl",
        insetEnd: "1.5",
      },
    },
    md: {
      field: inputStyle.sizes?.md,
      icon: {
        fontSize: "xl",
        insetEnd: "2",
      },
    },
    lg: {
      field: inputStyle.sizes?.lg,
      icon: {
        fontSize: "2xl",
        insetEnd: "2",
      },
    },
    xl: {
      field: inputStyle.sizes?.xl,
      icon: {
        fontSize: "3xl",
        insetEnd: "3",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
})

export type NativeSelectStyle = typeof nativeSelectStyle
