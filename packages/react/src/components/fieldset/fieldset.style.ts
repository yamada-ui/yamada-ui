import { defineComponentSlotStyle } from "../../core"

export const fieldsetStyle = defineComponentSlotStyle({
  base: {
    content: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
    errorMessage: {
      alignItems: "center",
      color: "fg.error",
      display: "inline-flex",
      gap: "1",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
    helperMessage: {
      alignItems: "center",
      color: "fg.muted",
      display: "inline-flex",
      gap: "1",
    },
    legend: {
      fontWeight: "medium",
      _disabled: {
        opacity: 0.4,
      },
    },
    root: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
  },

  variants: {
    elevated: {
      root: {
        bg: "bg.panel",
        boxShadow: "md",
      },
    },
    outline: {
      root: {
        borderWidth: "1px",
      },
    },
    panel: {
      root: {
        bg: "bg.panel",
        borderColor: "border.subtle",
        borderWidth: "1px",
      },
    },
    plain: {},
  },

  sizes: {
    sm: {
      content: {
        gap: "3",
      },
      errorMessage: {
        fontSize: "sm",
      },
      header: {
        gap: "1",
      },
      helperMessage: {
        fontSize: "sm",
      },
      legend: {
        fontSize: "md",
      },
      root: {
        gap: "3",
      },
    },
    md: {
      content: {
        gap: "4",
      },
      errorMessage: {
        fontSize: "sm",
      },
      header: {
        gap: "1",
      },
      helperMessage: {
        fontSize: "sm",
      },
      legend: {
        fontSize: "md",
      },
      root: {
        gap: "4",
      },
    },
    lg: {
      content: {
        gap: "6",
      },
      errorMessage: {
        fontSize: "md",
      },
      header: {
        gap: "1",
      },
      helperMessage: {
        fontSize: "md",
      },
      legend: {
        fontSize: "lg",
      },
      root: {
        gap: "6",
      },
    },
  },

  compounds: [
    {
      css: {
        root: {
          p: "3",
          rounded: "md",
        },
      },
      size: "sm",
      variant: ["elevated", "outline", "panel"],
    },
    {
      css: {
        root: {
          p: "4",
          rounded: "lg",
        },
      },
      size: "md",
      variant: ["elevated", "outline", "panel"],
    },
    {
      css: {
        root: {
          p: "6",
          rounded: "xl",
        },
      },
      size: "lg",
      variant: ["elevated", "outline", "panel"],
    },
  ],

  defaultProps: {
    size: "md",
    variant: "plain",
  },
})

export type FieldsetStyle = typeof fieldsetStyle
