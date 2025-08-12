import { defineComponentSlotStyle, focusRingStyle } from "../../core"
import { checkboxStyle } from "../checkbox"

export const checkboxCardStyle = defineComponentSlotStyle({
  base: {
    addon: {
      borderColor: "{--addon-border-color}",
      borderTopWidth: "1px",
      fontSize: "{description-size}",
      mt: "{space-y}",
      pt: "{space-y}",
      px: "{space-x}",
    },
    description: { color: "fg.muted", fontSize: "{description-size}" },
    group: { w: "full" },
    indicator: {
      ...checkboxStyle.base?.indicator,
      "input:focus-visible + &": {
        _checked: focusRingStyle.outline,
        _notChecked: {
          borderColor: "{focus-ring-color}",
        },
      },
      position: "absolute",
      top: "calc({space-y} + ({label-size} * 1.5 - {label-size}) / 2)",
    },
    root: {
      ...checkboxStyle.base?.root,
      "&:has(input:focus-visible)": focusRingStyle.outline,
      "--addon-border-color": "{root-border-color}",
      "--root-border-color": "colors.border",
      alignItems: "stretch",
      borderColor: "{--root-border-color}",
      borderWidth: "1px",
      flexDirection: "column",
      focusRingColor: "{focus-border-color}",
      gap: "1",
      position: "relative",
      px: "{space-x}",
      py: "{space-y}",
      rounded: "l2",
      w: "full",
      _invalid: {
        borderColor: "{error-border-color}",
        focusRingColor: "{error-border-color}",
      },
    },
  },

  props: {
    /**
     * The justify indicator of the component
     *
     * @default 'start'
     */
    justify: {
      end: {
        addon: {
          me: "calc({bleed-size} * -1)",
          ms: "calc({space-x} * -1)",
        },
        indicator: { right: "{space-x}" },
        root: {
          "&:has([data-indicator])": {
            "--bleed-size": "calc({indicator-size} + ({space-x} * 2))",
          },
          "--bleed-size": "{space-x}",
          pe: "{bleed-size}",
        },
      },
      start: {
        addon: {
          me: "calc({space-x} * -1)",
          ms: "calc({bleed-size} * -1)",
        },
        indicator: { left: "{space-x}" },
        root: {
          "&:has([data-indicator])": {
            "--bleed-size": "calc({indicator-size} + ({space-x} * 2))",
          },
          "--bleed-size": "{space-x}",
          ps: "{bleed-size}",
        },
      },
    },
    /**
     * The shape of the component
     *
     * @default 'circle'
     */
    shape: { ...checkboxStyle.props?.shape },
  },

  variants: {
    base: {
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
    outline: {
      root: {
        _checked: {
          "--root-border-color": "colorScheme.outline",
        },
      },
    },
    subtle: {
      root: {
        _checked: {
          "--addon-border-color": "colorScheme.muted",
          "--root-border-color": "transparent",
          bg: "colorScheme.subtle",
        },
      },
    },
    surface: {
      root: {
        _checked: {
          "--root-border-color": "colorScheme.muted",
          bg: "colorScheme.subtle",
        },
      },
    },
  },

  sizes: {
    sm: {
      indicator: checkboxStyle.sizes?.sm.indicator,
      root: {
        ...checkboxStyle.sizes?.sm.root,
        "--description-size": "fontSizes.xs",
        "--space-x": "spaces.3",
        "--space-y": "spaces.2",
      },
    },
    md: {
      indicator: checkboxStyle.sizes?.md.indicator,
      root: {
        ...checkboxStyle.sizes?.md.root,
        "--description-size": "fontSizes.sm",
        "--space-x": "spaces.4",
        "--space-y": "spaces.3",
      },
    },
    lg: {
      indicator: checkboxStyle.sizes?.lg.indicator,
      root: {
        ...checkboxStyle.sizes?.lg.root,
        "--description-size": "fontSizes.md",
        "--space-x": "spaces.5",
        "--space-y": "spaces.4",
      },
    },
    xl: {
      indicator: checkboxStyle.sizes?.lg.indicator,
      root: {
        ...checkboxStyle.sizes?.lg.root,
        "--description-size": "fontSizes.md",
        "--space-x": "spaces.6",
        "--space-y": "spaces.5",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "surface",
    justify: "start",
    shape: "rounded",
  },
})

export type CheckboxCardStyle = typeof checkboxCardStyle
