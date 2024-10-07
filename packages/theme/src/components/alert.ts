import type { ComponentMultiStyle } from "@yamada-ui/core"
import { shadeColor, tintColor } from "@yamada-ui/utils"

export const Alert: ComponentMultiStyle<"Alert"> = {
  baseStyle: {
    container: {
      px: 4,
      py: 3,
      rounded: "md",
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
      fontWeight: "bold",
      lineHeight: 5,
      marginEnd: 2,
    },
  },

  variants: {
    basic: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      container: { bg: ["white", "black"], borderWidth: "1px" },
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
    "island-accent": ({
      colorScheme: c = "primary",
      colorMode: m,
      theme: t,
    }) => ({
      container: {
        bg: ["white", "black"],
        borderWidth: "1px",
        pl: 7,
        _before: {
          bg: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`],
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
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
    "left-accent": ({
      colorScheme: c = "primary",
      colorMode: m,
      theme: t,
    }) => ({
      container: {
        bg: [`${c}.100`, shadeColor(`${c}.300`, 58)(t, m)],
        borderLeft: "0.25rem solid",
        borderLeftColor: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`],
        pl: 3,
        rounded: 4,
      },
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
    solid: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      container: {
        bg: [tintColor(`${c}.600`, 16)(t, m), shadeColor(`${c}.600`, 16)(t, m)],
        color: "white",
      },
    }),
    subtle: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      container: { bg: [`${c}.100`, shadeColor(`${c}.300`, 58)(t, m)] },
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
    "top-accent": ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      container: {
        bg: [`${c}.100`, shadeColor(`${c}.300`, 58)(t, m)],
        borderTop: "0.25rem solid",
        borderTopColor: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`],
        pt: 3,
        rounded: 4,
      },
      icon: { color: [tintColor(`${c}.600`, 16)(t, m), `${c}.400`] },
    }),
  },

  defaultProps: {
    colorScheme: "primary",
    variant: "basic",
  },
}
