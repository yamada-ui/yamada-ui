import type { ComponentMultiStyle } from "@yamada-ui/core"
import { isGray, transparentizeColor } from "@yamada-ui/utils"

export const Resizable: ComponentMultiStyle<"Resizable"> = {
  baseStyle: ({ direction: d }) => ({
    container: {},
    icon: {
      color: ["blackAlpha.600", "whiteAlpha.700"],
      rotate: d === "vertical" ? "90deg" : "0deg",
    },
    item: {},
    trigger: {},
  }),

  variants: {
    border: ({ direction: d }) => ({
      icon: {
        bg: "border",
        p: "1",
        rounded: "full",
      },
      trigger: {
        bg: "border",
        ...(d === "vertical" ? { h: "px" } : { w: "px" }),
        _after: {
          content: "''",
          position: "absolute",
          ...(d === "vertical"
            ? { left: "0", right: "0", transform: "translateY(-50%)" }
            : { bottom: "0", top: "0", transform: "translateX(-50%)" }),
          ...(d === "vertical" ? { h: "2" } : { w: "2" }),
        },
        _focus: {
          outline: "none",
        },
        _focusVisible: {
          bg: "focus",
          outline: "none",
        },
      },
    }),
    spacer: ({
      colorScheme: c = "gray",
      colorMode: m,
      direction: d,
      theme: t,
    }) => ({
      icon: {
        transitionDuration: "slower",
        transitionProperty: "common",
        _active: {
          color: ["transparent", "transparent"],
        },
      },
      trigger: {
        ...(d === "vertical" ? { p: "1" } : { p: "1" }),
        _active: {
          _after: {
            bg: isGray(c) ? "border" : `${c}.50`,
          },
          _dark: {
            _after: {
              bg: isGray(c)
                ? "border"
                : transparentizeColor(`${c}.600`, 0.12)(t, m),
            },
          },
        },
        _after: {
          bg: "transparent",
          content: "''",
          display: "block",
          rounded: "full",
          transitionDuration: "slower",
          transitionProperty: "common",
          ...(d === "vertical" ? { h: "2", w: "full" } : { h: "full", w: "2" }),
        },
        _dark: {
          _after: {
            bg: "transparent",
          },
        },
        _focus: {
          outline: "none",
        },
        _focusVisible: {
          outline: "none",
          _after: {
            bg: isGray(c) ? "border" : `${c}.100`,
          },
          _dark: {
            _after: {
              bg: isGray(c)
                ? "border"
                : transparentizeColor(`${c}.600`, 0.24)(t, m),
            },
          },
        },
      },
    }),
    unstyled: ({ direction: d }) => ({
      trigger: {
        _after: {
          content: "''",
          position: "absolute",
          ...(d === "vertical"
            ? { left: "0", right: "0", transform: "translateY(-50%)" }
            : { bottom: "0", top: "0", transform: "translateX(-50%)" }),
          ...(d === "vertical" ? { h: "2" } : { w: "2" }),
        },
      },
    }),
  },

  defaultProps: {
    colorScheme: "gray",
    variant: "border",
  },
}
