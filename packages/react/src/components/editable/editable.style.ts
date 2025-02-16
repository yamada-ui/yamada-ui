import { defineComponentSlotStyle } from "../../core"

export const editableStyle = defineComponentSlotStyle({
  base: {
    control: {
      alignItems: "start",
      display: "inline-flex",
      gap: "sm",
    },
    input: {
      bg: "transparent",
      focusRingColor: "{focusBorderColor}",
      focusVisibleRing: "inside",
      fontSize: "inherit",
      fontWeight: "inherit",
      minH: "1lh",
      p: "1",
      rounded: "l2",
      textAlign: "inherit",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "full",
      _invalid: {
        borderColor: "{errorBorderColor}",
        focusRingColor: "{errorBorderColor}",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    preview: {
      bg: "transparent",
      cursor: "text",
      display: "inline-block",
      fontSize: "inherit",
      fontWeight: "inherit",
      minH: "1lh",
      p: "1",
      rounded: "l2",
      textAlign: "inherit",
      transitionDuration: "moderate",
      transitionProperty: "common",
      whiteSpace: "pre-line",
      _hover: {
        bg: "bg.subtle",
      },
      _readOnly: {
        pointerEvents: "none",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    root: {
      alignItems: "start",
      display: "inline-flex",
      gap: "sm",
      position: "relative",
      vars: [
        {
          name: "focusBorderColor",
          token: "colors",
          value: "colorScheme.outline",
        },
        {
          name: "errorBorderColor",
          token: "colors",
          value: "border.error",
        },
      ],
      w: "full",
    },
    textarea: {
      bg: "transparent",
      boxSizing: "content-box",
      focusRingColor: "{focusBorderColor}",
      focusVisibleRing: "inside",
      fontSize: "inherit",
      fontWeight: "inherit",
      minH: "1lh",
      p: "1",
      rounded: "l2",
      textAlign: "inherit",
      transitionDuration: "moderate",
      transitionProperty: "common",
      w: "full",
      _invalid: {
        borderColor: "{errorBorderColor}",
        focusRingColor: "{errorBorderColor}",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
  },
})

export type EditableStyle = typeof editableStyle
