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
    rounded: "l2",
    transitionDuration: "moderate",
    transitionProperty: "common",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    _readOnly: { layerStyle: "readOnly" },
    _disabled: { layerStyle: "disabled" },
  },

  props: {
    /**
     * If `true`, the button is full rounded. Else, it'll be slightly round.
     *
     * @default false
     */
    fullRounded: {
      true: { rounded: "full" },
    },
  },

  variants: {
    ghost: {
      layerStyle: "ghost",
      _hover: { layerStyle: "ghost.hover" },
    },
    outline: {
      layerStyle: "outline",
      _hover: { layerStyle: "outline.hover" },
    },
    solid: {
      layerStyle: "solid",
      _hover: { layerStyle: "solid.hover" },
    },
    subtle: {
      layerStyle: "subtle",
      _hover: { layerStyle: "subtle.hover" },
    },
    surface: {
      layerStyle: "surface",
      _hover: { layerStyle: "surface.hover" },
    },
  },

  sizes: {
    xs: {
      "--height": "sizes.8",
      fontSize: "xs",
      gap: "1",
      h: "{height}",
      lineHeight: "{height}",
      minW: "{height}",
      px: "2",
      _icon: { fontSize: "md" },
    },
    sm: {
      "--height": "sizes.9",
      fontSize: "sm",
      gap: "2",
      h: "{height}",
      lineHeight: "{height}",
      minW: "{height}",
      px: "3",
      _icon: { fontSize: "md" },
    },
    md: {
      "--height": "sizes.10",
      fontSize: "md",
      gap: "2",
      h: "{height}",
      lineHeight: "{height}",
      minW: "{height}",
      px: "3",
      _icon: { fontSize: "lg" },
    },
    lg: {
      "--height": "sizes.11",
      fontSize: "lg",
      gap: "2.5",
      h: "{height}",
      lineHeight: "{height}",
      minW: "{height}",
      px: "4",
      _icon: { fontSize: "2xl" },
    },
    xl: {
      "--height": "sizes.12",
      fontSize: "xl",
      gap: "3",
      h: "{height}",
      lineHeight: "{height}",
      minW: "{height}",
      px: "5",
      _icon: { fontSize: "2xl" },
    },
    "2xl": {
      "--height": "sizes.14",
      fontSize: "xl",
      gap: "3",
      h: "{height}",
      lineHeight: "{height}",
      minW: "{height}",
      px: "5",
      _icon: { fontSize: "2xl" },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
  },
})

export type ButtonStyle = typeof buttonStyle
