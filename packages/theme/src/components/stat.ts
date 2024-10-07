import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Stat: ComponentMultiStyle<"Stat"> = {
  baseStyle: {
    container: {},
    helperMessage: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontSize: "sm",
    },
    icon: {
      h: "3.5",
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
      w: "3.5",
    },
    label: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
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
