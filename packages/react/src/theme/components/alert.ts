import type { ComponentMultiStyle } from "../../core"
import { isGray, shadeColor } from "../../utils"

export const Alert: ComponentMultiStyle<"Alert"> = {
  baseStyle: {
    container: {
      alignItems: "center",
      display: "flex",
      overflow: "hidden",
      position: "relative",
      px: 4,
      py: 3,
      rounded: "md",
      w: "100%",
    },
    description: {
      lineHeight: 5,
    },
    icon: {
      boxSize: 5,
      flexShrink: 0,
      marginEnd: 3,
    },
    loading: {
      flexShrink: 0,
      fontSize: "xl",
      marginEnd: 3,
    },
    title: {
      display: "block",
      fontWeight: "bold",
      lineHeight: 5,
      marginEnd: 2,
    },
  },

  variants: {
    basic: ({ colorScheme: c = "primary" }) => ({
      container: { bg: ["white", "black"], borderWidth: "1px" },
      icon: { color: [`${c}.500`, `${c}.400`] },
    }),
    "island-accent": ({ colorScheme: c = "primary" }) => ({
      container: {
        bg: ["white", "black"],
        borderWidth: "1px",
        pl: 7,
        _before: {
          bg: [`${c}.500`, `${c}.400`],
          content: '""',
          h: "calc(100% - 1.5rem)",
          left: 3,
          position: "absolute",
          rounded: "full",
          top: "50%",
          transform: "translateY(-50%)",
          w: 1,
        },
      },
      icon: { color: [`${c}.500`, `${c}.400`] },
    }),
    "left-accent": ({
      colorScheme: c = "primary",
      colorMode: m,
      theme: t,
    }) => ({
      container: {
        bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
        borderLeft: "0.25rem solid",
        borderLeftColor: [`${c}.500`, `${c}.400`],
        color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
        pl: 3,
        rounded: 4,
      },
    }),
    solid: ({ colorScheme: c = "primary" }) => ({
      container: {
        bg: [`${c}.500`, `${c}.600`],
        color: "white",
      },
    }),
    subtle: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      container: {
        bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
        color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
      },
    }),
    surface: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      container: {
        bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
        border: "1px solid",
        borderColor: [`${c}.100`, shadeColor(`${c}.300`, 56)(t, m)],
        color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
      },
    }),
    "top-accent": ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      container: {
        bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
        borderTop: "0.25rem solid",
        borderTopColor: [`${c}.500`, `${c}.400`],
        color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
        pt: 3,
        rounded: 4,
      },
    }),
  },

  defaultProps: {
    colorScheme: "primary",
    variant: "basic",
  },
}
