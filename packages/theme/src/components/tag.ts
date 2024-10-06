import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import {
  getMemoizedObject as get,
  getColor,
  isGray,
  shadeColor,
  tintColor,
} from "@yamada-ui/utils"

export const Tag: ComponentMultiStyle<"Tag"> = {
  baseStyle: {
    closeButton: {
      _active: {
        opacity: 1,
      },
      _disabled: {
        opacity: 0.4,
      },
      _focusVisible: {
        bg: "rgba(0, 0, 0, 0.14)",
        boxShadow: "outline",
      },
      _hover: {
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.4,
        },
        opacity: 0.8,
      },
      opacity: 0.5,
      rounded: "full",
      transitionDuration: "normal",
      transitionProperty: "common",
    },
    container: {
      _focusVisible: {
        boxShadow: "outline",
      },
      fontWeight: "medium",
      outline: 0,
      rounded: "md",
    },
    label: {
      overflow: "visible",
    },
  },

  sizes: {
    sm: ({ theme: t }) => ({
      container: {
        fontSize: "xs",
        lineHeight: get(t, "sizes.6"),
        minH: "6",
        minW: "6",
        px: "2",
      },
    }),
    md: ({ theme: t }) => ({
      container: {
        fontSize: "sm",
        lineHeight: get(t, "sizes.7"),
        minH: "7",
        minW: "7",
        px: "2",
      },
    }),
    lg: ({ theme: t }) => ({
      container: {
        fontSize: "md",
        lineHeight: get(t, "sizes.8"),
        minH: "8",
        minW: "8",
        px: "3",
      },
    }),
  },

  variants: {
    outline: {
      container: ({ colorMode: m, colorScheme: c = "primary", theme: t }) => {
        const color = mode(
          getColor(`${c}.500`)(t, m),
          getColor(isGray(c) ? `${c}.100` : `${c}.400`)(t, m),
        )(m)

        return {
          boxShadow: `inset 0 0 0px 1px ${color}`,
          color,
        }
      },
    },
    solid: {
      container: ({ colorMode: m, colorScheme: c = "primary", theme: t }) => ({
        bg: [tintColor(`${c}.600`, 24)(t, m), shadeColor(`${c}.600`, 16)(t, m)],
        color: `white`,
      }),
    },
    subtle: {
      container: ({ colorMode: m, colorScheme: c = "primary", theme: t }) => ({
        bg: [
          isGray(c) ? `${c}.50` : `${c}.100`,
          shadeColor(`${c}.300`, 58)(t, m),
        ],
        color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
      }),
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "subtle",
  },
}
