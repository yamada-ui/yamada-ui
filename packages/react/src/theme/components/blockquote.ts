import type { ComponentMultiStyle } from "../../core"
import { isGray, shadeColor } from "../../utils"

export const Blockquote: ComponentMultiStyle<"Blockquote"> = {
  baseStyle: ({ justify = "start" }) => ({
    caption: {
      color: "muted",
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
        borderStartColor: [`${c}.50`, shadeColor(`${c}.300`, 68)(t, m)],
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
