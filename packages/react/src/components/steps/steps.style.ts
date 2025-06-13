import { defineComponentSlotStyle } from "../../core"

export const stepsStyle = defineComponentSlotStyle({
  base: {
    description: {
      color: "fg.muted",
    },
    indicator: {
      alignItems: "center",
      boxSize: "{size}",
      display: "flex",
      flexShrink: "0",
      fontWeight: "medium",
      justifyContent: "center",
      rounded: "full",
    },
    item: {
      display: "flex",
      flex: "1 0 0",
      position: "relative",
      _last: {
        "& [role=separator]": {
          display: "none",
        },
        flex: "initial",
      },
    },
    list: {
      display: "flex",
      gap: "3",
      justifyContent: "space-between",
    },
    root: {
      display: "flex",
      gap: "4",
      w: "full",
    },
    separator: {
      bg: "border",
      flex: "1",
    },
    title: {
      fontWeight: "medium",
    },
  },

  props: {
    /**
     * The orientation of the steps.
     *
     * @default 'horizontal'
     */
    orientation: {
      horizontal: {
        item: {
          alignItems: "center",
          flexDirection: "row",
        },
        list: {
          alignItems: "center",
          flexDirection: "row",
          w: "full",
        },
        root: {
          flexDirection: "column",
        },
        separator: {
          h: "{thickness}",
          w: "full",
        },
      },
      vertical: {
        content: {
          flex: "1",
        },
        item: {
          alignItems: "flex-start",
        },
        list: {
          alignItems: "flex-start",
          flexDirection: "column",
        },
        root: {
          flexDirection: "row",
        },
        separator: {
          h: "full",
          insetBlockStart: "calc({size} + {gap})",
          insetInlineStart: "calc(({size} / 2) - ({thickness} / 2))",
          maxH: `calc(full - {size} - {gap})`,
          position: "absolute",
          w: "{thickness}",
        },
      },
    },
  },

  variants: {
    solid: {
      indicator: {
        _complete: {
          layerStyle: "solid",
        },
        _current: {
          bg: "colorScheme.muted",
          color: "colorScheme.fg",
        },
        _incomplete: {
          bg: "bg.subtle",
          color: "fg.emphasized",
        },
      },
      separator: {
        _complete: {
          bg: "colorScheme.solid",
        },
      },
    },
    subtle: {
      indicator: {
        _complete: {
          bg: "colorScheme.emphasized",
          color: "colorScheme.fg",
        },
        _current: {
          bg: "colorScheme.muted",
          color: "colorScheme.fg",
        },
        _incomplete: {
          bg: "bg.subtle",
          color: "fg.emphasized",
        },
      },
      separator: {
        _complete: {
          bg: "colorScheme.emphasized",
        },
      },
    },
  },

  sizes: {
    sm: {
      indicator: {
        fontSize: "md",
      },
      item: {
        "--gap": "sizes.3",
        "--size": "sizes.8",
        "--thickness": "sizes.0.5",
        fontSize: "xs",
        gap: "3",
      },
    },
    md: {
      indicator: {
        fontSize: "md",
      },
      item: {
        "--gap": "sizes.3",
        "--size": "sizes.10",
        "--thickness": "sizes.0.5",
        fontSize: "sm",
        gap: "3",
      },
    },
    lg: {
      indicator: {
        fontSize: "lg",
      },
      item: {
        "--gap": "sizes.3",
        "--size": "sizes.12",
        "--thickness": "sizes.0.5",
        gap: "3",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    orientation: "horizontal",
  },
})

export type StepsStyle = typeof stepsStyle
