import { defineComponentSlotStyle } from "../../core"

export const statStyle = defineComponentSlotStyle({
  base: {
    helperMessage: {
      color: "fg.muted",
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
      color: "fg.muted",
      fontWeight: "medium",
    },
    number: {
      color: "colorScheme.outline",
      fontFeatureSettings: '"pnum"',
      fontSize: "5xl",
      fontVariantNumeric: "proportional-nums",
      fontWeight: "extrabold",
      verticalAlign: "baseline",
    },
    root: {
      display: "flex",
      flexDirection: "column",
    },
  },
})

export type StatStyle = typeof statStyle
