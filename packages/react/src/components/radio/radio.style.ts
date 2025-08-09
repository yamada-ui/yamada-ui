import { defineComponentSlotStyle, focusRingStyle } from "../../core"

export const radioStyle = defineComponentSlotStyle({
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
      _before: { display: "block" },
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
      root: { _checked: { "--border-color": "colorScheme.outline" } },
    },
    solid: {},
    subtle: {
      indicator: { bg: "colorScheme.subtle" },
      root: { "--border-color": "transparent" },
    },
    surface: {
      indicator: { bg: "colorScheme.subtle" },
      root: { "--border-color": "colorScheme.muted" },
    },
  },

  sizes: {
    sm: {
      indicator: { boxSize: "3.5", _before: { boxSize: "1.5" } },
      label: { fontSize: "sm" },
    },
    md: {
      indicator: { boxSize: "4", _before: { boxSize: "2" } },
      label: { fontSize: "md" },
    },
    lg: {
      indicator: { boxSize: "5", _before: { boxSize: "3" } },
      label: { fontSize: "lg" },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    shape: "circle",
  },
})

export type RadioStyle = typeof radioStyle
