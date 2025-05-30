import { defineComponentSlotStyle } from "../../core"

export const resizableStyle = defineComponentSlotStyle({
  base: {
    icon: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      left: "50%",
      position: "absolute",
      top: "50%",
      translateX: "-50%",
      translateY: "-50%",
    },
    item: {
      boxSize: "full",
    },
    root: {
      boxSize: "full",
    },
    trigger: {
      position: "relative",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _after: {
        transitionDuration: "moderate",
        transitionProperty: "common",
      },
    },
  },

  variants: {
    border: {
      icon: {
        bg: "colorScheme.muted",
        color: "colorScheme.fg",
        py: "1",
        rounded: "l1",
      },
      trigger: {
        bg: "colorScheme.muted",
        focusVisibleRing: "none",
        _after: {
          position: "absolute",
        },
        _hover: {
          bg: "colorScheme.emphasized",
        },
        _focusVisible: {
          bg: "colorScheme.emphasized",
        },
      },
    },
    plain: {
      trigger: {
        focusVisibleRing: "none",
        _after: {
          position: "absolute",
        },
      },
    },
    spacer: {
      icon: {
        color: "colorScheme.fg",
        transitionDuration: "moderate",
        transitionProperty: "common",
        _active: {
          color: "transparent",
        },
      },
      trigger: {
        focusVisibleRing: "none",
        p: "1",
        _after: {
          bg: "transparent",
          display: "block",
          rounded: "full",
        },
        _hover: {
          _after: {
            bg: "colorScheme.bg",
          },
          _icon: {
            color: "transparent",
          },
        },
        _focusVisible: {
          _after: {
            bg: "colorScheme.bg",
          },
          _icon: {
            color: "transparent",
          },
        },
      },
    },
  },

  props: {
    /**
     * The orientation of the resizable.
     *
     * @default 'horizontal'
     */
    orientation: {
      horizontal: {
        icon: {
          transform: "translate(-50%, -50%) rotate(0deg)",
        },
      },
      vertical: {
        icon: {
          transform: "translate(-50%, -50%) rotate(90deg)",
        },
      },
    },
  },

  compounds: [
    {
      css: {
        trigger: {
          h: "px",
          _after: {
            h: "2",
            left: "0",
            right: "0",
            transform: "translateY(-50%)",
          },
        },
      },
      variant: "border",
      orientation: "vertical",
    },
    {
      css: {
        trigger: {
          w: "px",
          _after: {
            bottom: "0",
            top: "0",
            transform: "translateX(-50%)",
            w: "2",
          },
        },
      },
      variant: "border",
      orientation: "horizontal",
    },
    {
      css: {
        trigger: {
          _after: { h: "2", w: "full" },
        },
      },
      variant: "spacer",
      orientation: "vertical",
    },
    {
      css: {
        trigger: {
          _after: { h: "full", w: "2" },
        },
      },
      variant: "spacer",
      orientation: "horizontal",
    },
    {
      css: {
        trigger: {
          _after: {
            h: "2",
            left: "0",
            right: "0",
            transform: "translateY(-50%)",
          },
        },
      },
      variant: "plain",
      orientation: "vertical",
    },
    {
      css: {
        trigger: {
          _after: {
            bottom: "0",
            top: "0",
            transform: "translateX(-50%)",
            w: "2",
          },
        },
      },
      variant: "plain",
      orientation: "horizontal",
    },
  ],

  defaultProps: {
    variant: "border",
    orientation: "horizontal",
  },
})

export type ResizableStyle = typeof resizableStyle
