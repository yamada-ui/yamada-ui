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
      display: "grid",
      gap: "1.5",
      position: "relative",
      w: "100%",
    },
  },

  props: {
    /**
     * The orientation of the field.
     */
    orientation: {
      horizontal: {
        errorMessage: { gridColumn: "2 / 3", gridRowStart: "3" },
        helperMessage: { gridColumn: "2 / 3", gridRowStart: "2" },
        label: { gridColumn: "1 / 2", gridRowStart: "1" },
        root: { gridTemplateColumns: "{field-label-width, spaces.32} 1fr" },
      },
      vertical: {
        errorMessage: { order: "3" },
        helperMessage: { order: "2" },
      },
    },
  },

  defaultProps: {
    orientation: "vertical",
  },
})

export type FieldStyle = typeof fieldStyle
