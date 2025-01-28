import { defineComponentSlotStyle } from "../../core"

export const sliderStyle = defineComponentSlotStyle({
  base: {
    container: {
      cursor: "pointer",
      display: "inline-block",
      position: "relative",
      w: "100%",
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
      _readOnly: { cursor: "auto" },
    },
    filledTrack: {
      bg: [`primary.500`, `primary.400`],
      h: "inherit",
      w: "inherit",
    },
    mark: {
      fontSize: "sm",
    },
    thumb: {
      alignItems: "center",
      bg: "white",
      border: "1px solid",
      borderColor: "transparent",
      boxShadow: "base",
      display: "flex",
      justifyContent: "center",
      outline: 0,
      position: "absolute",
      rounded: "full",
      top: "50%",
      transform: `translateY(-50%)`,
      transitionDuration: "normal",
      transitionProperty: "transform",
      zIndex: "yamcha",
      _active: {
        transform: `translateY(-50%) scale(1.15)`,
      },
      _focusVisible: {
        boxShadow: "outline",
      },
    },
    track: {
      bg: "border",
      overflow: "hidden",
      rounded: "sm",
      _disabled: {
        bg: ["blackAlpha.200", "whiteAlpha.400"],
      },
    },
  },

  sizes: {
    sm: {
      mark: { mt: "2" },
      thumb: { boxSize: "2.5" },
      track: { h: "0.5" },
    },
    md: {
      mark: { mt: "3" },
      thumb: { boxSize: "3.5" },
      track: { h: "1" },
    },
    lg: {
      mark: { mt: "4" },
      thumb: { boxSize: "5" },
      track: { h: "1.5" },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
  },
})

export type SliderStyle = typeof sliderStyle
