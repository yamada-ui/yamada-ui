import type { ComponentStyle } from "@yamada-ui/core"
import { isGray, shadeColor } from "@yamada-ui/utils"

export const Indicator: ComponentStyle<"Indicator"> = {
  baseStyle: ({ withBorder }) => ({
    alignItems: "center",
    display: "flex",
    h: "fit-content",
    justifyContent: "center",
    outline: 0,
    rounded: "full",
    w: "fit-content",
    whiteSpace: "nowrap",
    zIndex: "kurillin",
    ...(withBorder
      ? { borderColor: ["white", "black"], borderWidth: "0.2em" }
      : {}),
  }),

  sizes: {
    sm: { fontSize: "xs", lineHeight: 1.6, minH: 2, minW: 2, px: 1 },
    md: { fontSize: "sm", lineHeight: 1.5, minH: 3, minW: 3, px: 1.5 },
    lg: { fontSize: "md", lineHeight: 1.4, minH: 4, minW: 4, px: 2 },
  },

  variants: {
    solid: ({ colorScheme: c = "primary" }) => ({
      bg: [`${c}.500`, `${c}.600`],
      color: `white`,
      vars: [
        {
          name: "ping",
          token: "colors",
          value: [`${c}.300`, `${c}.400`],
        },
      ],
    }),
    subtle: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      bg: [
        isGray(c) ? `${c}.50` : `${c}.100`,
        shadeColor(`${c}.300`, 58)(t, m),
      ],
      color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
      vars: [
        {
          name: "ping",
          token: "colors",
          value: ["blackAlpha.400", "whiteAlpha.500"],
        },
      ],
    }),
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
    variant: "solid",
  },
}
