import { defineComponentSlotStyle, focusRingStyle } from "../../core"

export const radioStyle = defineComponentSlotStyle({
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
      _before: { display: "block" },
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
     * @default 'circle'
     */
    shape: {
      circle: { indicator: { rounded: "full", _before: { rounded: "full" } } },
      rounded: {
        indicator: {
          rounded: "l1",
          _before: { rounded: "calc({radii.l1} / 2)" },
        },
      },
      square: {
        indicator: { rounded: "0", _before: { rounded: "0" } },
      },
    },
  },

  variants: {
    base: {
      indicator: { _checked: { _before: { bg: "colorScheme.solid" } } },
    },
    outline: {
      indicator: { _checked: { _before: { bg: "colorScheme.outline" } } },
      root: { _checked: { "--indicator-border-color": "colorScheme.outline" } },
    },
    solid: {},
    subtle: {
      indicator: { bg: "colorScheme.subtle" },
      root: { "--indicator-border-color": "transparent" },
    },
    surface: {
      indicator: { bg: "colorScheme.subtle" },
      root: { "--indicator-border-color": "colorScheme.muted" },
    },
  },

  sizes: {
    sm: {
      indicator: { _before: { boxSize: "1.5" } },
      root: { "--indicator-size": "sizes.3.5", "--label-size": "fontSizes.sm" },
    },
    md: {
      indicator: { _before: { boxSize: "2" } },
      root: { "--indicator-size": "sizes.4", "--label-size": "fontSizes.md" },
    },
    lg: {
      indicator: { _before: { boxSize: "3" } },
      root: { "--indicator-size": "sizes.5", "--label-size": "fontSizes.lg" },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    shape: "circle",
  },
})

export type RadioStyle = typeof radioStyle
