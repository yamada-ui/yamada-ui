import type { ComponentMultiStyle } from "../../core"

export const Carousel: ComponentMultiStyle<"Carousel"> = {
  baseStyle: {
    container: {
      h: "fit-content",
      position: "relative",
      w: "100%",
    },
    control: {},
    indicator: ({ orientation: o }) => ({
      bg: ["whiteAlpha.400", "blackAlpha.400"],
      rounded: "full",
      transitionDuration: "slower",
      transitionProperty: "common",
      _active: {
        bg: [`whiteAlpha.600`, `blackAlpha.600`],
      },
      _focusVisible: {
        boxShadow: "outline",
      },
      _hover: {
        bg: ["whiteAlpha.500", "blackAlpha.500"],
      },
      _selected: {
        bg: [`whiteAlpha.700`, `blackAlpha.700`],
      },
      ...(o === "vertical" ? { h: "8", right: "4" } : { bottom: "4", w: "8" }),
    }),
    indicators: ({ orientation: o }) => ({
      gap: "md",
      ...(o === "vertical"
        ? {
            h: "100%",
            py: "4",
            right: "4",
            top: "50%",
            transform: "translateY(-50%)",
          }
        : {
            bottom: "4",
            h: "2",
            left: "50%",
            px: "4",
            transform: "translateX(-50%)",
            w: "100%",
          }),
    }),
    inner: {
      display: "flex",
    },
    next: ({ orientation: o }) => ({
      ...(o === "vertical"
        ? { bottom: "4", left: "50%", transform: "translateX(-50%)" }
        : { right: "4", top: "50%", transform: "translateY(-50%)" }),
    }),
    prev: ({ orientation: o }) => ({
      ...(o === "vertical"
        ? { left: "50%", top: "4", transform: "translateX(-50%)" }
        : { left: "4", top: "50%", transform: "translateY(-50%)" }),
    }),
    slide: {},
  },

  sizes: {
    sm: {
      indicators: ({ orientation: o }) => ({
        ...(o === "vertical" ? { w: "1.5" } : { h: "1.5" }),
      }),
      inner: {
        h: "sm",
      },
    },
    md: {
      indicators: ({ orientation: o }) => ({
        ...(o === "vertical" ? { w: "1.5" } : { h: "1.5" }),
      }),
      inner: {
        h: "md",
      },
    },
    lg: {
      indicators: ({ orientation: o }) => ({
        ...(o === "vertical" ? { w: "2" } : { h: "2" }),
      }),
      inner: {
        h: "lg",
      },
    },
    xl: {
      indicators: ({ orientation: o }) => ({
        ...(o === "vertical" ? { w: "2" } : { h: "2" }),
      }),
      inner: {
        h: "xl",
      },
    },
  },

  defaultProps: {
    size: "md",
  },
}
