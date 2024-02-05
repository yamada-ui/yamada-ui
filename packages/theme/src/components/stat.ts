import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Stat: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    label: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontWeight: "medium",
    },
    number: ({ colorScheme: c }) => ({
      fontFeatureSettings: '"pnum"',
      fontVariantNumeric: "proportional-nums",
      verticalAlign: "baseline",
      fontSize: "5xl",
      color: c
        ? [`${c}.500`, `${c}.600`]
        : ["blackAlpha.800", "whiteAlpha.700"],
      fontWeight: "extrabold",
    }),
    helperMessage: {
      fontSize: "sm",
      color: ["blackAlpha.700", "whiteAlpha.600"],
    },
    icon: {
      marginEnd: "1",
      w: "3.5",
      h: "3.5",
      verticalAlign: "middle",
      var: [
        { name: "increase", token: "colors", value: "success.400" },
        { name: "decrease", token: "colors", value: "danger.400" },
      ],
    },
  },

  defaultProps: {},
}
