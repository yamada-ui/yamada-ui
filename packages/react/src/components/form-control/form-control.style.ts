import { defineComponentSlotStyle } from "../../core"

export const formControlStyle = defineComponentSlotStyle({
  base: {
    errorMessage: {
      color: ["danger.500", "danger.400"],
      display: "block",
      fontSize: "sm",
      mt: "2",
    },
    helperMessage: {
      color: "muted",
      display: "block",
      fontSize: "sm",
      mt: "2",
    },
    label: {
      display: "block",
      fontSize: "md",
      fontWeight: "medium",
      mb: "2",
      me: "3",
      opacity: 1,
      transitionDuration: "moderate",
      transitionProperty: "common",
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
      _readOnly: {
        pointerEvents: "none",
      },
    },
    requiredIndicator: {
      color: ["danger.500", "danger.400"],
      ms: "1",
    },
    root: {
      position: "relative",
      w: "100%",
    },
  },
})

export type FormControlStyle = typeof formControlStyle
