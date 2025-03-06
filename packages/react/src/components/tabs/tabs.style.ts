import { defineComponentSlotStyle } from "../../core"

export const tabsStyle = defineComponentSlotStyle({
  base: {
    root: {
      display: "flex",
      w: "100%",
    },
    tab: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      outline: "0",
      overflow: "hidden",
      position: "relative",
      transitionDuration: "moderate",
      transitionProperty: "common",
      whiteSpace: "nowrap",
      _selected: {
        _hover: {
          opacity: 1,
        },
      },
      _hover: { opacity: 0.7 },
      _focusVisible: {
        boxShadow: "outline",
        zIndex: "yamcha",
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
    },
    tabList: {
      display: "flex",
    },
    tabPanel: {
      p: "md",
    },
    tabPanels: {
      w: "100%",
    },
  },

  variants: {
    line: {
      tab: {
        borderColor: "transparent",
        _horizontal: {
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          mb: "-1px",
        },
        _ripple: { display: "none" },
        _selected: {
          borderColor: "currentColor",
          color: "colorScheme.solid",
        },
        _vertical: {
          borderEndStyle: "solid",
          borderEndWidth: "1px",
          me: "-1px",
        },
      },
      tabList: {
        borderColor: "inherit",
        _horizontal: { borderBottomWidth: "1px" },
        _vertical: { borderEndWidth: "1px" },
      },
    },
    rounded: {
      tab: {
        borderRadius: "full",
        vars: [
          {
            name: "color",
            token: "colors",
            value: "colorScheme.solid",
          },
        ],
        _selected: {
          boxShadow: "inset 0 0 0px 1px {color}",
          color: "colorScheme.solid",
        },
      },
      tabList: { gap: "sm" },
    },
    "rounded-solid": {
      tab: {
        borderRadius: "full",
        _selected: {
          bg: "colorScheme.solid",
          color: "colorScheme.contrast",
        },
      },
      tabList: { gap: "sm" },
    },
    "rounded-subtle": {
      tab: {
        borderRadius: "full",
        _selected: {
          bg: "colorScheme.subtle",
          color: "colorScheme.fg",
        },
      },
      tabList: { gap: "sm" },
    },
    sticky: {
      tab: {
        borderColor: "transparent",
        _horizontal: {
          borderStyle: "solid",
          borderWidth: "1px",
          mb: "-2px",
          roundedTop: "md",
        },
        _ripple: { display: "none" },
        _selected: {
          borderColor: "inherit",
          color: "colorScheme.solid",
          _horizontal: { borderBottomColor: ["white", "black"] },
          _vertical: { borderEndColor: ["white", "black"] },
        },
        _vertical: {
          borderStyle: "solid",
          borderWidth: "1px",
          me: "-2px",
          roundedLeft: "md",
        },
      },
      tabList: {
        borderColor: "inherit",
        _horizontal: { borderBottomWidth: "1px" },
        _vertical: { borderEndWidth: "1px" },
      },
    },
    "sticky-solid": {
      tab: {
        borderColor: "inherit",
        _horizontal: {
          borderStyle: "solid",
          borderWidth: "1px",
          mb: "-1px",
        },
        _notLast: {
          _horizontal: { borderEnd: "none" },
          _vertical: { borderBottom: "none" },
        },
        _selected: {
          bg: "colorScheme.solid",
          color: "colorScheme.contrast",
        },
        _vertical: {
          borderStyle: "solid",
          borderWidth: "1px",
          me: "-1px",
        },
      },
      tabList: {
        borderColor: "inherit",
        _horizontal: { borderBottomWidth: "1px" },
        _vertical: { borderEndWidth: "1px" },
      },
    },
    "sticky-subtle": {
      tab: {
        borderColor: "inherit",
        _horizontal: {
          borderStyle: "solid",
          borderWidth: "1px",
          mb: "-1px",
        },
        _notLast: {
          _horizontal: { borderEnd: "none" },
          _vertical: { borderBottom: "none" },
        },
        _selected: {
          bg: "colorScheme.subtle",
          color: "colorScheme.fg",
        },
        _vertical: {
          borderStyle: "solid",
          borderWidth: "1px",
          me: "-1px",
        },
      },
      tabList: {
        borderColor: "inherit",
        _horizontal: { borderBottomWidth: "1px" },
        _vertical: { borderEndWidth: "1px" },
      },
    },
    unstyled: {
      tab: {
        _ripple: { display: "none" },
        _hover: { opacity: "inherit" },
      },
    },
  },

  sizes: {
    sm: {
      tab: {
        fontSize: "sm",
        px: 3,
        py: 1,
      },
    },
    md: {
      tab: {
        fontSize: "md",
        px: 4,
        py: 2,
      },
    },
    lg: {
      tab: {
        fontSize: "lg",
        px: 5,
        py: 3,
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
        tabList: {
          justifyContent: "center",
        },
      },
      end: {
        tabList: {
          justifyContent: "flex-end",
        },
      },
      start: {
        tabList: {
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
        root: {
          flexDirection: "column",
        },
        tabList: { flexDirection: "row" },
      },
      vertical: {
        root: {
          flexDirection: "row",
        },
        tabList: { flexDirection: "column" },
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
