import type { ComponentMultiStyle } from "@yamada-ui/core"
import { getMemoizedObject as get } from "@yamada-ui/utils"

export const Stepper: ComponentMultiStyle<"Stepper"> = {
  baseStyle: ({ colorScheme: c = "primary" }) => ({
    description: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
    },
    icon: {
      flexShrink: 0,
    },
    number: {},
    separator: {
      "&[data-status=complete]": {
        bg: [`${c}.500`, `${c}.400`],
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
        borderColor: [`${c}.500`, `${c}.400`],
        borderWidth: "2px",
      },
      "&[data-status=complete]": {
        bg: [`${c}.500`, `${c}.400`],
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
    stepper: {
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
    title: {
      fontWeight: "medium",
    },
  }),

  sizes: {
    sm: ({ theme: t }) => ({
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
        insetStart: `calc(${get(t, "sizes.6")} / 2 - 1px)`,
        maxHeight: `calc(100% - ${get(t, "sizes.6")} - 8px)`,
        top: `calc(${get(t, "sizes.6")} + 4px)`,
      },
      status: {
        h: 6,
        w: 6,
      },
      title: {
        fontSize: "sm",
      },
    }),
    md: ({ theme: t }) => ({
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
        insetStart: `calc(${get(t, "sizes.8")} / 2 - 1px)`,
        maxHeight: `calc(100% - ${get(t, "sizes.8")} - 8px)`,
        top: `calc(${get(t, "sizes.8")} + 4px)`,
      },
      status: {
        h: 8,
        w: 8,
      },
      title: {
        fontSize: "md",
      },
    }),
    lg: ({ theme: t }) => ({
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
        insetStart: `calc(${get(t, "sizes.10")} / 2 - 1px)`,
        maxHeight: `calc(100% - ${get(t, "sizes.10")} - 8px)`,
        top: `calc(${get(t, "sizes.10")} + 4px)`,
      },
      status: {
        h: 10,
        w: 10,
      },
      title: {
        fontSize: "lg",
      },
    }),
  },

  defaultProps: {
    colorScheme: "primary",
    size: "md",
  },
}
