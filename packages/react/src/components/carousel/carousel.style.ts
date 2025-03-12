import { defineComponentSlotStyle } from "../../core"

export const carouselStyle = defineComponentSlotStyle({
  base: {
    control: {
      p: "2",
      position: "absolute",
      rounded: "full",
      zIndex: "{kurillin, 9}",
    },
    indicator: {
      bg: ["whiteAlpha.400", "blackAlpha.400"],
      rounded: "full",
      transitionDuration: "slower",
      transitionProperty: "common",
      _selected: {
        bg: ["whiteAlpha.700", "blackAlpha.700"],
      },
      _hover: {
        bg: ["whiteAlpha.500", "blackAlpha.500"],
      },
      _active: {
        bg: ["whiteAlpha.600", "blackAlpha.600"],
      },
      _focusVisible: {
        boxShadow: "outline",
      },
    },
    indicators: {
      display: "flex",
      gap: "md",
      justifyContent: "center",
      position: "absolute",
      zIndex: "{kurillin, 9}",
    },
    inner: {
      display: "flex",
    },
    next: {},
    prev: {},
    root: {
      h: "fit-content",
      position: "relative",
      w: "100%",
    },
    slide: {
      position: "relative",
    },
    "slide-inner": {
      boxSize: "100%",
    },
    slides: {
      h: "fit-content",
      overflow: "hidden",
      w: "100%",
    },
  },

  sizes: {
    sm: {
      inner: {
        h: "sm",
      },
    },
    md: {
      inner: {
        h: "md",
      },
    },
    lg: {
      inner: {
        h: "lg",
      },
    },
    xl: {
      inner: {
        h: "xl",
      },
    },
  },

  props: {
    /**
     * The orientation of the carousel.
     *
     * @default 'horizontal'
     */
    orientation: {
      horizontal: {
        indicator: {
          bottom: "4",
          w: "8",
        },
        indicators: {
          bottom: "4",
          flexDirection: "row",
          h: "2",
          left: "50%",
          px: "4",
          transform: "translateX(-50%)",
          w: "100%",
        },
        inner: {
          flexDirection: "row",
        },
        next: {
          right: "4",
          top: "50%",
          transform: "translateY(-50%)",
        },
        prev: {
          left: "4",
          top: "50%",
          transform: "translateY(-50%)",
        },
      },
      vertical: {
        indicator: {
          h: "8",
          right: "4",
        },
        indicators: {
          flexDirection: "column",
          h: "100%",
          py: "4",
          right: "4",
          top: "50%",
          transform: "translateY(-50%)",
          w: "2",
        },
        inner: {
          flexDirection: "column",
        },
        next: {
          bottom: "4",
          left: "50%",
          transform: "translateX(-50%)",
        },
        prev: {
          left: "50%",
          top: "4",
          transform: "translateX(-50%)",
        },
      },
    },
  },

  defaultProps: {
    size: "md",
    orientation: "horizontal",
  },
})

export type CarouselStyle = typeof carouselStyle
