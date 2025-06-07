import { defineComponentSlotStyle } from "../../core"

export const stepperStyle = defineComponentSlotStyle({
  base: {
    description: {
      color: "muted",
    },
    icon: {
      flexShrink: 0,
    },
    number: {},
    root: {
      display: "flex",
      justifyContent: "space-between",
      w: "100%",
      _horizontal: {
        alignItems: "center",
        flexDirection: "row",
        gap: 4,
      },
      _vertical: {
        alignItems: "flex-start",
        flexDirection: "column",
        gap: 0,
      },
    },
    separator: {
      "&[data-status=complete]": {
        bg: ["colorScheme.500", "colorScheme.400"],
      },
      bg: "border",
      flex: 1,
      transitionDuration: "slow",
      transitionProperty: "common",
      _horizontal: {
        h: 0.5,
        ms: 2,
        w: "100%",
      },
      _vertical: {
        h: "100%",
        position: "absolute",
        w: 0.5,
      },
    },
    status: {
      "&[data-status=active]": {
        borderColor: ["colorScheme.500", "colorScheme.400"],
        borderWidth: "2px",
      },
      "&[data-status=complete]": {
        bg: ["colorScheme.500", "colorScheme.400"],
        color: ["white", "black"],
      },
      "&[data-status=incomplete]": {
        borderWidth: "2px",
      },
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      justifyContent: "center",
      rounded: "full",
      transitionDuration: "slow",
      transitionProperty: "common",
    },
    step: {
      "&:last-of-type:not([data-stretch])": {
        flex: "initial",
      },
      display: "flex",
      flex: 1,
      flexShrink: 0,
      gap: 2,
      position: "relative",
      _horizontal: {
        alignItems: "center",
      },
    },
    title: {
      fontWeight: "medium",
    },
  },

  sizes: {
    sm: {
      description: {
        fontSize: "xs",
      },
      icon: {
        h: 4,
        w: 4,
      },
      number: {
        fontSize: "sm",
      },
      separator: {
        insetStart: `calc({sizes.6} / 2 - 1px)`,
        maxHeight: `calc(100% - {sizes.6} - 8px)`,
        top: `calc({sizes.6} + 4px)`,
      },
      status: {
        h: 6,
        w: 6,
      },
      title: {
        fontSize: "sm",
      },
    },
    md: {
      description: {
        fontSize: "sn",
      },
      icon: {
        h: 5,
        w: 5,
      },
      number: {
        fontSize: "md",
      },
      separator: {
        insetStart: `calc({sizes.8} / 2 - 1px)`,
        maxHeight: `calc(100% - {sizes.8} - 8px)`,
        top: `calc({sizes.8} + 4px)`,
      },
      status: {
        h: 8,
        w: 8,
      },
      title: {
        fontSize: "md",
      },
    },
    lg: {
      description: {
        fontSize: "md",
      },
      icon: {
        h: 6,
        w: 6,
      },
      number: {
        fontSize: "lg",
      },
      separator: {
        insetStart: `calc({sizes.10} / 2 - 1px)`,
        maxHeight: `calc(100% - {sizes.10} - 8px)`,
        top: `calc({sizes.10} + 4px)`,
      },
      status: {
        h: 10,
        w: 10,
      },
      title: {
        fontSize: "lg",
      },
    },
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
  },
})

export type StepperStyle = typeof stepperStyle
