import { defineComponentSlotStyle } from "../../core"

export const tabsStyle = defineComponentSlotStyle({
  base: {
    list: {
      display: "flex",
    },
    panel: {
      flex: "1",
    },
    root: {
      display: "flex",
      w: "full",
    },
    tab: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      fontWeight: "medium",
      gap: "2",
      justifyContent: "center",
      transitionDuration: "moderate",
      transitionProperty: "common",
      _disabled: {
        layerStyle: "disabled",
      },
    },
  },

  props: {
    /**
     * The alignment of the tabs.
     *
     * @default 'start'
     */
    align: {
      center: {
        list: {
          justifyContent: "center",
        },
      },
      end: {
        list: {
          justifyContent: "flex-end",
        },
      },
      start: {
        list: {
          justifyContent: "flex-start",
        },
      },
    },
    /**
     * If `true`, tabs will stretch to width of the tablist.
     *
     * @default false
     */
    fitted: {
      true: {
        tab: {
          flex: 1,
        },
      },
    },
    /**
     * The orientation of the tab list.
     *
     * @default 'horizontal'
     */
    orientation: {
      horizontal: {
        list: { alignItems: "center", flexDirection: "row" },
        root: {
          flexDirection: "column",
        },
      },
      vertical: {
        list: { alignItems: "stretch", flexDirection: "column" },
        root: {
          flexDirection: "row",
        },
      },
    },
  },

  variants: {
    line: {
      list: {
        _horizontal: {
          borderBottomWidth: "1px",
        },
        _vertical: {
          borderRightWidth: "1px",
        },
      },
      tab: {
        color: "fg.muted",
        focusVisibleRing: "inside",
        position: "relative",
        _selected: {
          color: "fg",
          _after: {
            borderColor: "colorScheme.solid",
            position: "absolute",
          },
          _horizontal: {
            _after: {
              borderBottomWidth: "1px",
              bottom: "-1px",
              w: "full",
            },
          },
          _vertical: {
            _after: {
              borderRightWidth: "1px",
              h: "full",
              right: "-1px",
            },
          },
        },
      },
    },
    outline: {
      list: {
        _horizontal: {
          borderBottomWidth: "1px",
        },
        _vertical: {
          borderRightWidth: "1px",
        },
      },
      tab: {
        border: "1px solid transparent",
        color: "fg.muted",
        focusVisibleRing: "inside",
        position: "relative",
        _horizontal: {
          mb: "-1px",
          roundedStart: "l2",
        },
        _selected: {
          bg: "bg",
          borderColor: "border",
          color: "fg",
          _horizontal: {
            borderBottomColor: "transparent",
          },
          _vertical: {
            borderRightColor: "transparent",
          },
        },
        _vertical: {
          me: "-1px",
          roundedLeft: "l2",
        },
      },
    },
    plain: {
      tab: {
        color: "fg.muted",
        rounded: "l2",
        _selected: {
          color: "fg",
        },
      },
    },
    subtle: {
      tab: {
        border: "1px solid transparent",
        color: "fg.muted",
        rounded: "l2",
        _selected: {
          layerStyle: "subtle",
        },
      },
    },
  },

  sizes: {
    sm: {
      root: {
        gap: "sm",
      },
      tab: {
        fontSize: "sm",
        px: "3",
        py: "1",
      },
    },
    md: {
      root: {
        gap: "md",
      },
      tab: {
        fontSize: "md",
        px: "4",
        py: "2",
      },
    },
    lg: {
      root: {
        gap: "lg",
      },
      tab: {
        fontSize: "lg",
        px: "5",
        py: "3",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "line",
    align: "start",
    orientation: "horizontal",
  },
})

export type TabsStyle = typeof tabsStyle
