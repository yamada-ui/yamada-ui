import { defineComponentSlotStyle } from "../../core"

export const fieldStyle = defineComponentSlotStyle({
  base: {
    errorMessage: {
      alignItems: "center",
      color: "fg.error",
      display: "inline-flex",
      fontSize: "xs",
      gap: "1",
    },
    helperMessage: {
      alignItems: "center",
      color: "fg.muted",
      display: "inline-flex",
      fontSize: "xs",
      gap: "1",
    },
    label: {
      alignItems: "center",
      display: "inline-flex",
      fontSize: "sm",
      fontWeight: "medium",
      gap: "1",
      _readOnly: {
        pointerEvents: "none",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    requiredIndicator: {
      color: "fg.error",
    },
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      position: "relative",
      w: "100%",
    },
  },
})

export type FieldStyle = typeof fieldStyle
