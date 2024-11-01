import type { ComponentStyle } from "@yamada-ui/core"
import { isAccessible, isGray, shadeColor } from "@yamada-ui/utils"

export const Badge: ComponentStyle<"Badge"> = {
  baseStyle: {
    fontSize: "xs",
    fontWeight: "bold",
    px: 1,
    rounded: "sm",
    textTransform: "uppercase",
  },

  variants: {
    outline: ({ colorScheme: c = "primary" }) => ({
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
    solid: ({ colorScheme: c = "primary" }) => ({
      bg: isGray(c)
        ? [`${c}.50`, `${c}.700`]
        : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
      color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
    }),
    subtle: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
      bg: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
      color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
    }),
    surface: ({ colorScheme: c = "primary", colorMode: m, theme: t }) => ({
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

  defaultProps: {
    colorScheme: "primary",
    variant: "subtle",
  },
}
