import type { ComponentStyle } from "@yamada-ui/core"
import { mode } from "@yamada-ui/core"
import {
  getColor,
  isGray,
  shadeColor,
  tintColor,
  transparentizeColor,
} from "@yamada-ui/utils"

export const Badge: ComponentStyle<"Badge"> = {
  baseStyle: {
    fontSize: "xs",
    fontWeight: "bold",
    px: 1,
    rounded: "sm",
    textTransform: "uppercase",
  },

  variants: {
    outline: ({ colorMode: m, colorScheme: c = "primary", theme: t }) => {
      const color = mode(
        getColor(`${c}.500`)(t, m),
        getColor(
          isGray(c) ? `${c}.100` : transparentizeColor(`${c}.400`, 0.92)(t, m),
        )(t, m),
      )(m)

      return {
        boxShadow: `inset 0 0 0px 1px ${color}`,
        color,
      }
    },
    solid: ({ colorMode: m, colorScheme: c = "primary", theme: t }) => ({
      bg: [tintColor(`${c}.600`, 24)(t, m), shadeColor(`${c}.600`, 16)(t, m)],
      color: `white`,
    }),
    subtle: ({ colorMode: m, colorScheme: c = "primary", theme: t }) => ({
      bg: [
        isGray(c) ? `${c}.50` : `${c}.100`,
        shadeColor(`${c}.300`, 58)(t, m),
      ],
      color: [`${c}.800`, isGray(c) ? `${c}.50` : `${c}.200`],
    }),
  },

  defaultProps: {
    colorScheme: "primary",
    variant: "subtle",
  },
}
