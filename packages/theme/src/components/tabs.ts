import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import { getColor, isGray, shadeColor, tintColor } from "@yamada-ui/utils"

export const Tabs: ComponentMultiStyle<"Tabs"> = {
  baseStyle: {
    container: ({ orientation }) => ({
      display: "flex",
      flexDirection: orientation === "vertical" ? "row" : "column",
    }),
    tab: ({ isFitted }) => ({
      flex: isFitted ? 1 : undefined,
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
      flexDirection: orientation === "vertical" ? "column" : "row",
      justifyContent: align === "center" ? align : `flex-${align}`,
    }),
    tabPanel: {
      p: "md",
    },
    tabPanels: {},
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

  variants: {
    line: ({ colorScheme: c = "primary", orientation }) => {
      const isVertical = orientation === "vertical"

      return {
        tab: {
          borderColor: "transparent",
          _selected: {
            borderColor: "currentColor",
            color: [`${c}.500`, isGray(c) ? `${c}.100` : `${c}.400`],
          },
          ...(isVertical
            ? {
                borderEndStyle: "solid",
                borderEndWidth: "1px",
                me: "-1px",
              }
            : {
                borderBottomStyle: "solid",
                borderBottomWidth: "1px",
                mb: "-1px",
              }),
          _ripple: { display: "none" },
        },
        tabList: {
          borderColor: "inherit",
          ...(isVertical
            ? { borderEndWidth: "1px" }
            : { borderBottomWidth: "1px" }),
        },
      }
    },
    rounded: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => {
      const color = mode(
        getColor(`${c}.500`)(t, m),
        getColor(isGray(c) ? `${c}.100` : `${c}.400`)(t, m),
      )(m)

      return {
        tab: {
          borderRadius: "full",
          _selected: {
            boxShadow: `inset 0 0 0px 1px ${color}`,
            color,
          },
        },
        tabList: { gap: "sm" },
      }
    },
    "rounded-solid": ({
      colorScheme: c = "primary",
      colorMode: m,
      theme: t,
    }) => ({
      tab: {
        borderRadius: "full",
        _selected: {
          bg: [
            tintColor(`${c}.600`, 24)(t, m),
            shadeColor(`${c}.600`, 16)(t, m),
          ],
          color: `white`,
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
          bg: [
            isGray(c) ? `${c}.50` : `${c}.100`,
            shadeColor(`${c}.300`, 58)(t, m),
          ],
          color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
        },
      },
      tabList: { gap: "sm" },
    }),
    sticky: ({ colorScheme: c = "primary", orientation }) => {
      const isVertical = orientation === "vertical"

      return {
        tab: {
          borderColor: "transparent",
          _selected: {
            borderColor: "inherit",
            color: [`${c}.500`, isGray(c) ? `${c}.100` : `${c}.400`],
            ...(isVertical
              ? { borderEndColor: ["white", "black"] }
              : { borderBottomColor: ["white", "black"] }),
          },
          ...(isVertical
            ? {
                borderStyle: "solid",
                borderWidth: "1px",
                me: "-2px",
                roundedLeft: "md",
              }
            : {
                borderStyle: "solid",
                borderWidth: "1px",
                mb: "-2px",
                roundedTop: "md",
              }),
          _ripple: { display: "none" },
        },
        tabList: {
          borderColor: "inherit",
          ...(isVertical
            ? { borderEndWidth: "1px" }
            : { borderBottomWidth: "1px" }),
        },
      }
    },
    "sticky-solid": ({
      colorScheme: c = "primary",
      colorMode: m,
      orientation,
      theme: t,
    }) => {
      const isVertical = orientation === "vertical"

      return {
        tab: {
          borderColor: "inherit",
          _notLast: {
            ...(isVertical ? { borderBottom: "none" } : { borderEnd: "none" }),
          },
          _selected: {
            bg: [
              tintColor(`${c}.600`, 24)(t, m),
              shadeColor(`${c}.600`, 16)(t, m),
            ],
            color: `white`,
          },
          ...(isVertical
            ? {
                borderStyle: "solid",
                borderWidth: "1px",
                me: "-1px",
              }
            : {
                borderStyle: "solid",
                borderWidth: "1px",
                mb: "-1px",
              }),
        },
        tabList: {
          borderColor: "inherit",
          ...(isVertical
            ? { borderEndWidth: "1px" }
            : { borderBottomWidth: "1px" }),
        },
      }
    },
    "sticky-subtle": ({
      colorScheme: c = "primary",
      colorMode: m,
      orientation,
      theme: t,
    }) => {
      const isVertical = orientation === "vertical"

      return {
        tab: {
          borderColor: "inherit",
          _notLast: {
            ...(isVertical ? { borderBottom: "none" } : { borderEnd: "none" }),
          },
          _selected: {
            bg: [
              isGray(c) ? `${c}.50` : `${c}.100`,
              shadeColor(`${c}.300`, 58)(t, m),
            ],
            color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
          },
          ...(isVertical
            ? {
                borderStyle: "solid",
                borderWidth: "1px",
                me: "-1px",
              }
            : {
                borderStyle: "solid",
                borderWidth: "1px",
                mb: "-1px",
              }),
        },
        tabList: {
          borderColor: "inherit",
          ...(isVertical
            ? { borderEndWidth: "1px" }
            : { borderBottomWidth: "1px" }),
        },
      }
    },
    unstyled: {
      tab: {
        _hover: { opacity: "inherit" },
        _ripple: { display: "none" },
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "line",
  },
}
