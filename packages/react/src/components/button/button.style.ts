import { defineComponentStyle } from "../../core"

export const buttonStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    appearance: "none",
    cursor: "pointer",
    display: "inline-flex",
    fontWeight: "medium",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    transitionDuration: "normal",
    transitionProperty: "common",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    _disabled: {
      layerStyle: "disabled",
    },
    _readOnly: {
      layerStyle: "readOnly",
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
      _hover: {
        layerStyle: "ghost.hover",
      },
    },
    outline: {
      layerStyle: "outline",
      _hover: {
        layerStyle: "outline.hover",
      },
    },
    solid: {
      layerStyle: "solid",
      _hover: {
        layerStyle: "solid.hover",
      },
    },
    subtle: {
      layerStyle: "subtle",
      _hover: {
        layerStyle: "subtle.hover",
      },
    },
    surface: {
      layerStyle: "surface",
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
      px: "2.5",
      rounded: "md",
    },
    sm: {
      fontSize: "sm",
      gap: "2",
      h: "9",
      lineHeight: "{sizes.9}",
      minW: "9",
      px: "3.5",
      rounded: "md",
    },
    md: {
      fontSize: "md",
      gap: "2",
      h: "10",
      lineHeight: "{sizes.10}",
      minW: "10",
      px: "4",
      rounded: "md",
    },
    lg: {
      fontSize: "lg",
      gap: "3",
      h: "11",
      lineHeight: "{sizes.11}",
      minW: "11",
      px: "5",
      rounded: "md",
    },
    xl: {
      fontSize: "xl",
      gap: "4",
      h: "12",
      lineHeight: "{sizes.12}",
      minW: "12",
      px: "6",
      rounded: "lg",
    },
    "2xl": {
      fontSize: "xl",
      gap: "3",
      h: "14",
      lineHeight: "{sizes.14}",
      minW: "14",
      px: "7",
      rounded: "lg",
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
  },
})

export type ButtonStyle = typeof buttonStyle
