import { defineComponentSlotStyle } from "../../core"

export const resizableStyle = defineComponentSlotStyle({
  base: {
    icon: {
      alignItems: "center",
      color: ["blackAlpha.600", "whiteAlpha.700"],
      display: "flex",
      justifyContent: "center",
      left: "50%",
      position: "absolute",
      top: "50%",
      translateX: "-50%",
      translateY: "-50%",
    },
    item: {
      boxSize: "100%",
    },
    root: {
      h: "100%",
      w: "100%",
    },
    trigger: {
      position: "relative",
    },
  },

  variants: {
    border: {
      icon: {
        bg: "colorScheme.muted",
        p: "1",
        rounded: "full",
      },
      trigger: {
        bg: "colorScheme.muted",
        _after: {
          content: "''",
          position: "absolute",
        },
        _focus: {
          outline: "none",
        },
        _focusVisible: {
          bg: "focus",
          outline: "none",
        },
      },
    },
    spacer: {
      icon: {
        transitionDuration: "slower",
        transitionProperty: "common",
        _active: {
          color: ["transparent", "transparent"],
        },
      },
      trigger: {
        p: "1",
        _after: {
          bg: "transparent",
          content: "''",
          display: "block",
          rounded: "full",
          transitionDuration: "slower",
          transitionProperty: "common",
        },
        _dark: {
          _after: {
            bg: "transparent",
          },
        },
        _active: {
          _after: {
            bg: "colorScheme.bg",
          },
          _dark: {
            _after: {
              bg: "colorScheme.bg",
            },
          },
        },
        _focus: {
          outline: "none",
        },
        _focusVisible: {
          outline: "none",
          _after: {
            bg: "colorScheme.bg",
          },
          _dark: {
            _after: {
              bg: "colorScheme.bg",
            },
          },
        },
      },
    },
    unstyled: {
      trigger: {
        _after: {
          content: "''",
          position: "absolute",
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
      variant: "unstyled",
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
      variant: "unstyled",
      orientation: "horizontal",
    },
  ],

  defaultProps: {
    variant: "border",
    orientation: "horizontal",
  },
})

export type ResizableStyle = typeof resizableStyle
