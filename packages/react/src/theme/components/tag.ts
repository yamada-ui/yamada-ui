import type { ComponentMultiStyle } from "../../core"
import { isAccessible, isGray, shadeColor } from "../../utils"

export const Tag: ComponentMultiStyle<"Tag"> = {
  baseStyle: {
    closeButton: {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      justifyContent: "center",
      opacity: 0.5,
      outline: "0",
      rounded: "full",
      transitionDuration: "normal",
      transitionProperty: "common",
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
        opacity: 0.8,
        _disabled: {
          cursor: "not-allowed",
          opacity: 0.4,
        },
      },
    },
    container: {
      alignItems: "center",
      display: "inline-flex",
      fontWeight: "medium",
      gap: 1,
      maxW: "100%",
      outline: 0,
      rounded: "md",
      verticalAlign: "top",
      _focusVisible: {
        boxShadow: "outline",
      },
    },
    label: {
      overflow: "visible",
    },
  },

  variants: {
    outline: {
      container: ({ colorScheme: c = "primary" }) => ({
        boxShadow: "inset 0 0 0px 1px $color",
        color: "$color",
        vars: [
          {
            name: "color",
            token: "colors",
            value: [`${c}.600`, isGray(c) ? `${c}.300` : `${c}.500`],
          },
        ],
      }),
    },
    solid: {
      container: ({ colorScheme: c = "primary" }) => ({
        bg: isGray(c)
          ? [`${c}.50`, `${c}.700`]
          : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
        color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
      }),
    },
    subtle: {
      container: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
        bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
        color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
      }),
    },
    surface: {
      container: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
        bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
        boxShadow: "inset 0 0 0px 1px $color",
        color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
        vars: [
          {
            name: "color",
            token: "colors",
            value: [`${c}.100`, shadeColor(`${c}.300`, 56)(t, m)],
          },
        ],
      }),
    },
  },

  sizes: {
    sm: {
      container: {
        fontSize: "xs",
        lineHeight: "$sizes.6",
        minH: "6",
        minW: "6",
        px: "2",
      },
    },
    md: {
      container: {
        fontSize: "sm",
        lineHeight: "$sizes.7",
        minH: "7",
        minW: "7",
        px: "2",
      },
    },
    lg: {
      container: {
        fontSize: "md",
        lineHeight: "$sizes.8",
        minH: "8",
        minW: "8",
        px: "3",
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "subtle",
  },
}
