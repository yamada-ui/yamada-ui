import type { ComponentMultiStyle } from "../../core"

export const Stat: ComponentMultiStyle<"Stat"> = {
  baseStyle: {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    helperMessage: {
      color: "muted",
      fontSize: "sm",
    },
    icon: {
      h: "2.5",
      marginEnd: "1",
      vars: [
        {
          name: "increase",
          token: "colors",
          value: "success.400",
        },
        {
          name: "decrease",
          token: "colors",
          value: "danger.400",
        },
      ],
      verticalAlign: "middle",
      w: "4",
    },
    label: {
      color: "muted",
      fontWeight: "medium",
    },
    number: ({ colorScheme: c }) => ({
      color: c
        ? [`${c}.500`, `${c}.600`]
        : ["blackAlpha.800", "whiteAlpha.700"],
      fontFeatureSettings: '"pnum"',
      fontSize: "5xl",
      fontVariantNumeric: "proportional-nums",
      fontWeight: "extrabold",
      verticalAlign: "baseline",
    }),
  },

  defaultProps: {},
}
