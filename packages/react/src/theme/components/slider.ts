import type { ComponentMultiStyle } from "../../core"
import { shadeColor, tintColor } from "../../utils"

export const Slider: ComponentMultiStyle<"Slider"> = {
  baseStyle: {
    container: ({ orientation: o }) => ({
      cursor: "pointer",
      display: "inline-block",
      position: "relative",
      _readOnly: { cursor: "auto" },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
      ...(o === "vertical" ? { h: "100%" } : { w: "100%" }),
    }),
    filledTrack: ({ colorScheme: c = "primary" }) => ({
      bg: [`${c}.500`, `${c}.400`],
      h: "inherit",
      w: "inherit",
    }),
    mark: {
      alignItems: "center",
      display: "inline-flex",
      fontSize: "sm",
      justifyContent: "center",
    },
    thumb: ({ colorMode: m, orientation: o, theme: t }) => ({
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
      transitionDuration: "moderate",
      transitionProperty: "transform",
      zIndex: "yamcha",
      _focusVisible: {
        boxShadow: "outline",
      },
      _disabled: {
        bg: [tintColor("black", 72)(t, m), shadeColor("white", 64)],
      },
      ...(o === "vertical"
        ? {
            left: "50%",
            transform: `translateX(-50%)`,
            _active: {
              transform: `translateX(-50%) scale(1.15)`,
            },
          }
        : {
            top: "50%",
            transform: `translateY(-50%)`,
            _active: {
              transform: `translateY(-50%) scale(1.15)`,
            },
          }),
    }),
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
    sm: ({ orientation: o }) => ({
      mark: o === "vertical" ? { ml: "2" } : { mt: "2" },
      thumb: { boxSize: "2.5" },
      track: o === "vertical" ? { w: "0.5" } : { h: "0.5" },
    }),
    md: ({ orientation: o }) => ({
      mark: o === "vertical" ? { ml: "3" } : { mt: "3" },
      thumb: { boxSize: "3.5" },
      track: o === "vertical" ? { w: "1" } : { h: "1" },
    }),
    lg: ({ orientation: o }) => ({
      mark: o === "vertical" ? { ml: "4" } : { mt: "4" },
      thumb: { boxSize: "5" },
      track: o === "vertical" ? { w: "1.5" } : { h: "1.5" },
    }),
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
  },
}
