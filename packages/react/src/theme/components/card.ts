import type { ComponentMultiStyle } from "../../core"
import { shadeColor, tintColor } from "../../utils"

export const Card: ComponentMultiStyle<"Card"> = {
  baseStyle: {
    body: {
      alignItems: "flex-start",
      display: "flex",
      flex: "1",
      flexDirection: "column",
    },
    container: {
      display: "flex",
      wordWrap: "break-word",
    },
    footer: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-start",
    },
    header: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-start",
    },
  },

  sizes: {
    sm: {
      body: { gap: "sm", px: "sm", py: "sm" },
      container: { rounded: "base" },
      footer: { gap: "sm", pb: "sm", px: "sm" },
      header: { gap: "sm", pt: "sm", px: "sm" },
    },
    md: {
      body: { gap: "md", px: "md", py: "md" },
      container: { rounded: "md" },
      footer: { gap: "md", pb: "md", px: "md" },
      header: { gap: "md", pt: "md", px: "md" },
    },
    normal: {
      body: { gap: "normal", px: "normal", py: "normal" },
      container: { rounded: "lg" },
      footer: { gap: "normal", pb: "normal", px: "normal" },
      header: { gap: "normal", pt: "normal", px: "normal" },
    },
    lg: {
      body: { gap: "lg", px: "lg", py: "lg" },
      container: { rounded: "xl" },
      footer: { gap: "lg", pb: "lg", px: "lg" },
      header: { gap: "lg", pt: "lg", px: "lg" },
    },
  },

  variants: {
    elevated: {
      container: {
        boxShadow: ["md", "dark-md"],
      },
    },
    outline: {
      container: {
        borderWidth: "1px",
      },
    },
    solid: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      container: {
        bg: [tintColor(`${c}.600`, 16)(t, m), shadeColor(`${c}.600`, 16)(t, m)],
        color: "white",
      },
    }),
    subtle: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      container: {
        bg: [`${c}.100`, shadeColor(`${c}.300`, 58)(t, m)],
      },
    }),
    unstyled: {
      body: { p: 0 },
      container: { rounded: 0 },
      footer: { p: 0 },
      header: { p: 0 },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "elevated",
  },
}
