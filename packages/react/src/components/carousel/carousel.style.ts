import { defineComponentSlotStyle } from "../../core"

export const carouselStyle = defineComponentSlotStyle({
  base: {
    indicator: {
      bg: "colorScheme.solid/40",
      cursor: "pointer",
      rounded: "full",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _horizontal: { w: "10" },
      _vertical: { h: "10" },
      _hover: {
        _notSelected: {
          bg: "colorScheme.solid/70",
        },
      },
      _selected: {
        bg: "colorScheme.solid",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    indicators: {
      display: "flex",
      gap: "2",
      justifyContent: "center",
      position: "absolute",
      zIndex: "yamcha",
      _horizontal: {
        bottom: "4",
        flexDirection: "row",
        h: "2",
        left: "50%",
        px: "4",
        transform: "translateX(-50%)",
        w: "full",
      },
      _vertical: {
        flexDirection: "column",
        h: "full",
        py: "4",
        right: "4",
        top: "50%",
        transform: "translateY(-50%)",
        w: "2",
      },
    },
    item: {
      "&:not([data-include-gap-in-size])": {
        _horizontal: { mr: "{slide-gap}" },
        _vertical: { mb: "{slide-gap}" },
      },
      "&[data-include-gap-in-size]": {
        _horizontal: { pr: "{slide-gap}" },
        _vertical: { pb: "{slide-gap}" },
      },
      boxSize: "full",
      flex: "0 0 {slide-size}",
      position: "relative",
    },
    list: {
      "&[data-include-gap-in-size]": {
        _horizontal: { mr: "calc({slide-gap} * -1)" },
        _vertical: { mb: "calc({slide-gap} * -1)" },
      },
      display: "flex",
      h: "full",
      _horizontal: { flexDirection: "row" },
      _vertical: { flexDirection: "column" },
    },
    next: {
      _horizontal: {
        right: "4",
      },
      _vertical: {
        bottom: "4",
      },
    },
    prev: {
      _horizontal: {
        left: "4",
      },
      _vertical: {
        top: "4",
      },
    },
    root: {
      "--slide-gap": "spaces.4",
      "--slide-size": "sizes.full",
      overflow: "hidden",
      position: "relative",
      w: "full",
    },
    trigger: {
      position: "absolute",
      zIndex: "kurillin",
      _horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
      },
      _vertical: {
        left: "50%",
        transform: "translateX(-50%) rotate(90deg)",
      },
    },
  },

  sizes: {
    sm: {
      root: { h: "sm" },
    },
    md: {
      root: { h: "md" },
    },
    lg: {
      root: { h: "lg" },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type CarouselStyle = typeof carouselStyle
