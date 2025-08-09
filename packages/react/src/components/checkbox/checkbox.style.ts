import { defineComponentSlotStyle, focusRingStyle } from "../../core"

export const checkboxStyle = defineComponentSlotStyle({
  base: {
    group: {},
    indicator: {
      alignItems: "center",
      borderColor: "{border-color}",
      borderWidth: "2px",
      display: "inline-flex",
      focusRingColor: "{focus-border-color}",
      "input:focus-visible + &": focusRingStyle.outline,
      justifyContent: "center",
      _invalid: {
        borderColor: "{error-border-color}",
        focusRingColor: "{error-border-color}",
      },
    },
    label: { userSelect: "none" },
    root: {
      "--border-color": "colors.border.emphasized",
      "--error-border-color": "colors.border.error",
      "--focus-border-color": "colorScheme.outline",
      alignItems: "center",
      display: "flex",
      gap: "2",
      _readOnly: { layerStyle: "readOnly" },
      _disabled: { layerStyle: "disabled" },
    },
  },

  props: {
    /**
     * The shape of the component
     *
     * @default 'rounded'
     */
    shape: {
      rounded: {
        indicator: { rounded: "l1" },
      },
      square: {
        indicator: { rounded: "0" },
      },
    },
  },

  variants: {
    outline: {
      indicator: { color: "colorScheme.outline" },
      root: {
        _checked: { "--border-color": "colorScheme.outline" },
        _indeterminate: { "--border-color": "colorScheme.outline" },
      },
    },
    solid: {
      indicator: {
        color: "colorScheme.contrast",
        _checked: { bg: "colorScheme.solid" },
        _indeterminate: { bg: "colorScheme.solid" },
      },
      root: {
        _checked: { "--border-color": "colorScheme.solid" },
        _indeterminate: { "--border-color": "colorScheme.solid" },
      },
    },
    subtle: {
      indicator: { bg: "colorScheme.subtle", color: "colorScheme.fg" },
      root: { "--border-color": "transparent" },
    },
    surface: {
      indicator: { bg: "colorScheme.subtle", color: "colorScheme.fg" },
      root: { "--border-color": "colorScheme.muted" },
    },
  },

  sizes: {
    sm: {
      indicator: { boxSize: "3.5", fontSize: "xs" },
      label: { fontSize: "sm" },
    },
    md: {
      indicator: { boxSize: "4", fontSize: "sm" },
      label: { fontSize: "md" },
    },
    lg: {
      indicator: { boxSize: "5", fontSize: "md" },
      label: { fontSize: "lg" },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    shape: "rounded",
  },
})

export type CheckboxStyle = typeof checkboxStyle
