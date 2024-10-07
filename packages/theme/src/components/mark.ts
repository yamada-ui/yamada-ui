import type { ComponentStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import { getColor, isGray, shadeColor, tintColor } from "@yamada-ui/utils"

export const Mark: ComponentStyle<"Mark"> = {
  baseStyle: {
    px: "1",
    py: "1",
  },

  variants: {
    outline: ({ colorScheme: c = "gray", colorMode: m, theme: t }) => {
      const color = mode(
        getColor(`${c}.500`)(t, m),
        getColor(isGray(c) ? `${c}.100` : `${c}.400`)(t, m),
      )(m)

      return {
        boxShadow: `inset 0 0 0px 1px ${color}`,
        color,
      }
    },
    solid: ({ colorScheme: c = "gray", colorMode: m, theme: t }) => ({
      bg: [tintColor(`${c}.600`, 24)(t, m), shadeColor(`${c}.600`, 16)(t, m)],
      color: `white`,
    }),
    subtle: ({ colorScheme: c = "gray", colorMode: m, theme: t }) => ({
      bg: [
        isGray(c) ? `${c}.50` : `${c}.100`,
        shadeColor(`${c}.300`, 58)(t, m),
      ],
      color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
    }),
    "text-accent": ({ colorScheme: c = "gray" }) => ({
      color: [`${c}.500`, isGray(c) ? `${c}.100` : `${c}.400`],
      p: 0,
    }),
    unstyled: {
      p: 0,
    },
  },

  defaultProps: {
    colorScheme: "secondary",
    variant: "subtle",
  },
}
