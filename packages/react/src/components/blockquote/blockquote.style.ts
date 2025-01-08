import { defineComponentSlotStyle } from "../../core"

export const blockquoteStyle = defineComponentSlotStyle({
  base: {
    caption: {
      color: "muted",
      fontSize: "sm",
    },
    cite: {},
    content: {},
    icon: {
      fontSize: "2xl",
      left: "0",
      position: "absolute",
      top: "0",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "sm",
      position: "relative",
    },
  },

  props: {
    /**
     * The alignment of the blockquote.
     *
     * @default "start"
     */
    justify: {
      center: {
        root: {
          alignItems: "center",
          textAlign: "center",
        },
      },
      end: {
        root: {
          alignItems: "end",
          textAlign: "end",
        },
      },
      start: {
        root: {
          alignItems: "start",
          textAlign: "start",
        },
      },
    },
  },

  variants: {
    plain: {
      icon: {
        color: "colorScheme.solid",
      },
      root: {
        "&:has(> [data-icon])": {
          ps: "lg",
        },
      },
    },
    solid: {
      icon: {
        color: "colorScheme.solid",
      },
      root: {
        borderStartColor: "colorScheme.solid",
        borderStartWidth: "4px",
        px: "md",
      },
    },
    subtle: {
      icon: {
        color: "colorScheme.fg",
      },
      root: {
        borderStartColor: "colorScheme.muted",
        borderStartWidth: "4px",
        px: "md",
      },
    },
  },

  defaultProps: {
    variant: "subtle",
    props: {
      justify: "start",
    },
  },
})

export type BlockquoteStyle = typeof blockquoteStyle
