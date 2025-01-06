import type { ComponentMultiStyle } from "../../core"
import { isAccessible, isGray, shadeColor } from "../../utils"

export const Tabs: ComponentMultiStyle<"Tabs"> = {
  baseStyle: {
    container: ({ orientation }) => ({
      display: "flex",
      flexDirection: orientation === "vertical" ? "row" : "column",
      w: "100%",
    }),
    tab: ({ isFitted }) => ({
      alignItems: "center",
      display: "flex",
      flex: isFitted ? 1 : undefined,
      justifyContent: "center",
      outline: "0",
      overflow: "hidden",
      position: "relative",
      transitionDuration: "normal",
      transitionProperty: "common",
      whiteSpace: "nowrap",
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
      _focusVisible: {
        boxShadow: "outline",
        zIndex: "yamcha",
      },
      _hover: { opacity: 0.7 },
      _selected: { _hover: { opacity: 1 } },
    }),
    tabList: ({ align, orientation }) => ({
      display: "flex",
      flexDirection: orientation === "vertical" ? "column" : "row",
      justifyContent: align === "center" ? align : `flex-${align}`,
    }),
    tabPanel: {
      p: "md",
    },
    tabPanels: {
      w: "100%",
    },
  },

  variants: {
    line: ({ colorScheme: c = "primary" }) => {
      return {
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
            color: isGray(c)
              ? ["blackAlpha.800", "whiteAlpha.700"]
              : [`${c}.600`, `${c}.500`],
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
      }
    },
    rounded: ({ colorScheme: c = "primary" }) => ({
      tab: {
        borderRadius: "full",
        vars: [
          {
            name: "color",
            token: "colors",
            value: [`${c}.600`, `${c}.500`],
          },
        ],
        _selected: {
          boxShadow: "inset 0 0 0px 1px $color",
          color: isGray(c)
            ? ["blackAlpha.800", "whiteAlpha.700"]
            : [`${c}.600`, `${c}.500`],
        },
      },
      tabList: { gap: "sm" },
    }),
    "rounded-solid": ({ colorScheme: c = "primary" }) => ({
      tab: {
        borderRadius: "full",
        _selected: {
          bg: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
        },
      },
      tabList: { gap: "sm" },
    }),
    "rounded-subtle": ({
      colorScheme: c = "primary",
      colorMode: m,
      theme: t,
    }) => ({
      tab: {
        borderRadius: "full",
        _selected: {
          bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
          color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
        },
      },
      tabList: { gap: "sm" },
    }),
    sticky: ({ colorScheme: c = "primary" }) => ({
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
          color: isGray(c)
            ? ["blackAlpha.800", "whiteAlpha.700"]
            : [`${c}.600`, `${c}.500`],
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
    }),
    "sticky-solid": ({ colorScheme: c = "primary" }) => ({
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
          bg: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
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
    }),
    "sticky-subtle": ({
      colorScheme: c = "primary",
      colorMode: m,
      theme: t,
    }) => ({
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
          bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
          color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
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
    }),
    unstyled: {
      tab: {
        _hover: { opacity: "inherit" },
        _ripple: { display: "none" },
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

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "line",
  },
}
