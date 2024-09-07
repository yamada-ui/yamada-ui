import type { ComponentStyle } from "@yamada-ui/core"
import { isGray, shadeColor } from "@yamada-ui/utils"

export const Indicator: ComponentStyle<"Indicator"> = {
  baseStyle: ({ withBorder }) => ({
    zIndex: "kurillin",
    rounded: "full",
    w: "fit-content",
    h: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: 0,
    whiteSpace: "nowrap",
    ...(withBorder
      ? { borderWidth: "0.2em", borderColor: ["white", "black"] }
      : {}),
  }),

  sizes: {
    sm: { minH: 2, minW: 2, fontSize: "xs", px: 1, lineHeight: 1.6 },
    md: { minH: 3, minW: 3, fontSize: "sm", px: 1.5, lineHeight: 1.5 },
    lg: { minH: 4, minW: 4, fontSize: "md", px: 2, lineHeight: 1.4 },
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
    subtle: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
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
    size: "md",
    variant: "solid",
    colorScheme: "primary",
  },
}
