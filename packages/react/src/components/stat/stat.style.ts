import { defineComponentSlotStyle } from "../../core"

export const statStyle = defineComponentSlotStyle({
  base: {
    helperMessage: {
      alignItems: "center",
      color: "fg.muted",
      display: "inline-flex",
    },
    icon: {
      "&[data-type='decrease']": {
        color: "fg.error",
        fill: "fg.error",
        transform: "rotate(180deg)",
      },
      "&[data-type='increase']": {
        color: "fg.success",
        fill: "fg.success",
      },
      fontSize: "1em",
      me: "1",
      verticalAlign: "middle",
    },
    label: {
      color: "fg.muted",
      fontWeight: "medium",
    },
    root: {
      display: "flex",
      flexDirection: "column",
    },
    unit: {
      color: "fg.muted",
      fontWeight: "initial",
      letterSpacing: "initial",
    },
    value: {
      alignItems: "baseline",
      color: "colorScheme.solid",
      display: "inline-flex",
      fontFeatureSettings: '"pnum"',
      fontVariantNumeric: "proportional-nums",
      fontWeight: "semibold",
      letterSpacing: "tight",
      lineHeight: "1",
      verticalAlign: "baseline",
    },
  },

  props: {
    /**
     * If `true`, container will center its children regardless of their width.
     *
     * @default false
     */
    centerContent: {
      false: {
        root: {
          alignItems: "flex-start",
        },
      },
      true: {
        root: {
          alignItems: "center",
        },
      },
    },
  },

  sizes: {
    xs: {
      helperMessage: {
        fontSize: "xs",
      },
      label: {
        fontSize: "sm",
      },
      root: {
        gap: "1",
      },
      unit: {
        fontSize: "sm",
      },
      value: {
        fontSize: "3xl",
        gap: "1",
      },
    },
    sm: {
      helperMessage: {
        fontSize: "xs",
      },
      label: {
        fontSize: "sm",
      },
      root: {
        gap: "1",
      },
      unit: {
        fontSize: "sm",
      },
      value: {
        fontSize: "4xl",
        gap: "1",
      },
    },
    md: {
      helperMessage: {
        fontSize: "sm",
      },
      label: {
        fontSize: "md",
      },
      root: {
        gap: "2",
      },
      unit: {
        fontSize: "md",
      },
      value: {
        fontSize: "5xl",
        gap: "1.5",
      },
    },
    lg: {
      helperMessage: {
        fontSize: "sm",
      },
      label: {
        fontSize: "md",
      },
      root: {
        gap: "2",
      },
      unit: {
        fontSize: "md",
      },
      value: {
        fontSize: "6xl",
        gap: "2",
      },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type StatStyle = typeof statStyle
