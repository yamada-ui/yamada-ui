import { defineComponentSlotStyle, focusRingStyle } from "../../core"

export const checkboxStyle = defineComponentSlotStyle({
  base: {
    group: {},
    indicator: {
      alignItems: "center",
      borderColor: "{indicator-border-color}",
      borderWidth: "2px",
      boxSize: "{indicator-size}",
      display: "inline-flex",
      focusRingColor: "{focus-border-color}",
      "input:focus-visible + &": focusRingStyle.outline,
      justifyContent: "center",
      _invalid: {
        borderColor: "{error-border-color}",
        focusRingColor: "{error-border-color}",
      },
    },
    label: {},
    root: {
      "--error-border-color": "colors.border.error",
      "--focus-border-color": "colorScheme.outline",
      "--indicator-border-color": "colors.border.emphasized",
      alignItems: "center",
      display: "flex",
      fontSize: "{label-size}",
      gap: "2",
      userSelect: "none",
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
        _checked: { "--indicator-border-color": "colorScheme.outline" },
        _indeterminate: { "--indicator-border-color": "colorScheme.outline" },
      },
    },
    solid: {
      indicator: {
        color: "colorScheme.contrast",
        _checked: { bg: "colorScheme.solid" },
        _indeterminate: { bg: "colorScheme.solid" },
      },
      root: {
        _checked: { "--indicator-border-color": "colorScheme.solid" },
        _indeterminate: { "--indicator-border-color": "colorScheme.solid" },
      },
    },
    subtle: {
      indicator: { bg: "colorScheme.subtle", color: "colorScheme.fg" },
      root: { "--indicator-border-color": "transparent" },
    },
    surface: {
      indicator: { bg: "colorScheme.subtle", color: "colorScheme.fg" },
      root: { "--indicator-border-color": "colorScheme.muted" },
    },
  },

  sizes: {
    sm: {
      indicator: { fontSize: "xs" },
      root: { "--indicator-size": "sizes.3.5", "--label-size": "fontSizes.sm" },
    },
    md: {
      indicator: { fontSize: "sm" },
      root: { "--indicator-size": "sizes.4", "--label-size": "fontSizes.md" },
    },
    lg: {
      indicator: { fontSize: "md" },
      root: { "--indicator-size": "sizes.5", "--label-size": "fontSizes.lg" },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    shape: "rounded",
  },
})

export type CheckboxStyle = typeof checkboxStyle
