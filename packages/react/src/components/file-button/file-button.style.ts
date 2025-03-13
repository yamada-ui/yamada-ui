import { defineComponentStyle } from "../../core"

export const fileButtonStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    appearance: "none",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "medium",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    rounded: "l2",
    transitionDuration: "moderate",
    transitionProperty: "common",
    userSelect: "none",
    vars: [
      {
        name: "errorBorderColor",
        token: "colors",
        value: "red.500",
      },
    ],
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    _readOnly: {
      layerStyle: "readOnly",
    },
    _disabled: {
      layerStyle: "disabled",
    },
  },

  props: {
    /**
     * If `true`, the button is full rounded. Else, it'll be slightly round.
     *
     * @default false
     */
    fullRounded: {
      true: {
        rounded: "full",
      },
    },
  },

  variants: {
    ghost: {
      layerStyle: "ghost",
      _invalid: {
        border: "1px solid",
        borderColor: "{errorBorderColor}",
        boxShadow: "0 0 0 1px {errorBorderColor}",
        focusRingColor: "{errorBorderColor}",
      },
      _hover: {
        layerStyle: "ghost.hover",
      },
    },
    outline: {
      layerStyle: "outline",
      _invalid: {
        borderColor: ["{errorBorderColor}", "{errorBorderColor}"],
        boxShadow: "0 0 0 1px {errorBorderColor}",
        focusRingColor: "{errorBorderColor}",
      },
      _hover: {
        layerStyle: "outline.hover",
      },
    },
    solid: {
      layerStyle: "solid",
      _invalid: {
        border: "1px solid",
        borderColor: "{errorBorderColor}",
        boxShadow: "0 0 0 1px {errorBorderColor}",
        focusRingColor: "{errorBorderColor}",
      },
      _hover: {
        layerStyle: "solid.hover",
      },
    },
    subtle: {
      layerStyle: "subtle",
      _invalid: {
        border: "1px solid",
        borderColor: "{errorBorderColor}",
        boxShadow: "0 0 0 1px {errorBorderColor}",
        focusRingColor: "{errorBorderColor}",
      },
      _hover: {
        layerStyle: "subtle.hover",
      },
    },
    surface: {
      layerStyle: "surface",
      _invalid: {
        border: "1px solid",
        borderColor: "{errorBorderColor}",
        boxShadow: "0 0 0 1px {errorBorderColor}",
        focusRingColor: "{errorBorderColor}",
      },
      _hover: {
        layerStyle: "surface.hover",
      },
    },
  },

  sizes: {
    xs: {
      fontSize: "xs",
      gap: "1",
      h: "8",
      lineHeight: "{sizes.8}",
      minW: "8",
      px: "2",
      _icon: {
        fontSize: "md",
      },
    },
    sm: {
      fontSize: "sm",
      gap: "2",
      h: "9",
      lineHeight: "{sizes.9}",
      minW: "9",
      px: "3",
      rounded: "sm",
      _icon: {
        fontSize: "md",
      },
    },
    md: {
      fontSize: "md",
      gap: "2",
      h: "10",
      lineHeight: "{sizes.10}",
      minW: "10",
      px: "4",
      rounded: "md",
      _icon: {
        fontSize: "lg",
      },
    },
    lg: {
      fontSize: "lg",
      gap: "2.5",
      h: "11",
      lineHeight: "{sizes.11}",
      minW: "11",
      px: "4.5",
      rounded: "lg",
      _icon: {
        fontSize: "2xl",
      },
    },
    xl: {
      fontSize: "xl",
      gap: "3",
      h: "12",
      lineHeight: "{sizes.12}",
      minW: "12",
      px: "5",
      rounded: "xl",
      _icon: {
        fontSize: "2xl",
      },
    },
    "2xl": {
      fontSize: "xl",
      gap: "3",
      h: "14",
      lineHeight: "{sizes.14}",
      minW: "14",
      px: "5",
      rounded: "2xl",
      _icon: {
        fontSize: "2xl",
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "solid",
  },
})
export type FileButtonStyle = typeof fileButtonStyle
