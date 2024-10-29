import type { ComponentMultiStyle } from "@yamada-ui/core"
import { isGray, shadeColor } from "@yamada-ui/utils"

export const Blockquote: ComponentMultiStyle<"Blockquote"> = {
  baseStyle: ({ justify = "start" }) => ({
    caption: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontSize: "sm",
    },
    cite: {},
    container: {
      alignItems: justify,
      display: "flex",
      flexDirection: "column",
      gap: "sm",
      position: "relative",
      textAlign: justify,
    },
    content: {},
    icon: {},
  }),

  variants: {
    plain: {
      container: {
        px: "md",
      },
    },
    solid: ({ colorScheme: c = "gray" }) => ({
      container: {
        borderStartColor: isGray(c)
          ? [`${c}.50`, `${c}.700`]
          : [`${c}.500`, `${c}.600`],
        borderStartWidth: "4px",
        px: "md",
      },
    }),
    subtle: ({ colorScheme: c, colorMode: m, theme: t }) => ({
      container: {
        borderStartColor: [`${c}.50`, shadeColor(`${c}.500`, 68)(t, m)],
        borderStartWidth: "4px",
        px: "md",
      },
    }),
  },

  defaultProps: {
    colorScheme: "gray",
    variant: "subtle",
  },
}
