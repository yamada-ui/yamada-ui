import { defineComponentStyle } from "../../core"

export const linkStyle = defineComponentStyle({
  base: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    gap: "3",
    rounded: "l1",
  },

  variants: {
    plain: {
      color: "colorScheme.solid",
      _hover: {
        textDecoration: "underline",
        textDecorationColor: "currentColor",
        textUnderlineOffset: "3px",
      },
    },
    underline: {
      color: "colorScheme.solid",
      textDecoration: "underline",
      textDecorationColor: "currentColor",
      textUnderlineOffset: "3px",
    },
  },

  defaultProps: {
    colorScheme: "link",
    variant: "plain",
  },
})

export type LinkStyle = typeof linkStyle
