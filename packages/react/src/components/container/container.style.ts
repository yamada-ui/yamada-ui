import { defineComponentStyle } from "../../core"

export const containerStyle = defineComponentStyle({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: { base: "lg", sm: "md" },
    p: { base: "lg", sm: "md" },
    w: "full",
  },

  props: {
    /**
     * If `true`, container will center its children regardless of their width.
     *
     * @default false
     */
    centerContent: {
      true: {
        alignItems: "center",
      },
    },
  },

  variants: {
    outline: {
      borderWidth: "1px",
      rounded: "xl",
    },
    panel: {
      bg: "bg.panel",
      rounded: "xl",
    },
  },

  defaultProps: { variant: "outline" },
})

export type ContainerStyle = typeof containerStyle
