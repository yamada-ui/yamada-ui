import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import { getMemoizedObject as get, isDark, randomColor } from "@yamada-ui/utils"

export const Avatar: ComponentMultiStyle<"Avatar"> = {
  baseStyle: {
    name: {},
    badge: {
      borderColor: ["white", "black"],
      borderWidth: "0.2em",
      rounded: "full",
    },
    container: ({ name: string, colorMode: m, theme: t }) => {
      const bg = string
        ? randomColor({ string })
        : mode("gray.200", "gray.500")(m)

      return {
        bg,
        borderColor: ["white", "black"],
        color: isDark(bg)(t, m) ? "white" : "black",
        verticalAlign: "top",
        _loaded: { bg: "inherit" },
      }
    },
    excess: {
      bg: ["blackAlpha.200", "whiteAlpha.200"],
      borderColor: ["white", "black"],
    },
    group: {},
  },

  sizes: {
    "2xs": ({ theme: t }) => ({
      name: {
        fontSize: `calc(${get(t, "sizes.4")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      container: {
        fontSize: `calc(${get(t, "sizes.4")} / 2.5)`,
        h: "4",
        w: "4",
      },
      excess: {
        fontSize: `calc(${get(t, "sizes.4")} / 2.5)`,
        h: "4",
        lineHeight: get(t, "sizes.16"),
        w: "4",
      },
    }),
    xs: ({ theme: t }) => ({
      name: {
        fontSize: `calc(${get(t, "sizes.6")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      container: {
        fontSize: `calc(${get(t, "sizes.6")} / 2.5)`,
        h: "6",
        w: "6",
      },
      excess: { h: "6", w: "6" },
    }),
    sm: ({ theme: t }) => ({
      name: {
        fontSize: `calc(${get(t, "sizes.8")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      container: {
        fontSize: `calc(${get(t, "sizes.8")} / 2.5)`,
        h: "8",
        w: "8",
      },
      excess: { h: "8", w: "8" },
    }),
    md: ({ theme: t }) => ({
      name: {
        fontSize: `calc(${get(t, "sizes.12")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      container: {
        fontSize: `calc(${get(t, "sizes.12")} / 2.5)`,
        h: "12",
        w: "12",
      },
      excess: { h: "12", w: "12" },
    }),
    lg: ({ theme: t }) => ({
      name: {
        fontSize: `calc(${get(t, "sizes.16")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      container: {
        fontSize: `calc(${get(t, "sizes.16")} / 2.5)`,
        h: "16",
        w: "16",
      },
      excess: { h: "16", w: "16" },
    }),
    xl: ({ theme: t }) => ({
      name: {
        fontSize: `calc(${get(t, "sizes.24")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      container: {
        fontSize: `calc(${get(t, "sizes.24")} / 2.5)`,
        h: "24",
        w: "24",
      },
      excess: { h: "24", w: "24" },
    }),
    "2xl": ({ theme: t }) => ({
      name: {
        fontSize: `calc(${get(t, "sizes.32")} / 2.5)`,
        lineHeight: get(t, "sizes.16"),
      },
      container: {
        fontSize: `calc(${get(t, "sizes.32")} / 2.5)`,
        h: "32",
        w: "32",
      },
      excess: { h: "32", w: "32" },
    }),
  },

  defaultProps: {
    size: "md",
  },
}
