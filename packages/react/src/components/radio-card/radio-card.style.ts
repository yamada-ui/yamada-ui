import { defineComponentSlotStyle, focusRingStyle } from "../../core"
import { radioStyle } from "../radio"

export const radioCardStyle = defineComponentSlotStyle({
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
      ...radioStyle.base?.indicator,
      "input:focus-visible + &": {
        borderColor: "{focus-ring-color}",
      },
      position: "absolute",
      top: "calc({space-y} + ({label-size} * 1.5 - {label-size}) / 2)",
    },
    root: {
      ...radioStyle.base?.root,
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
    shape: { ...radioStyle.props?.shape },
  },

  variants: {
    base: {
      indicator: radioStyle.variants?.base.indicator,
      root: {
        _container: [
          { css: { bg: "bg" }, style: '--form-group-variant: "panel"' },
          { css: { bg: "bg" }, style: '--fieldset-root-variant: "panel"' },
          { css: { bg: "bg" }, style: '--form-group-variant: "elevated"' },
          { css: { bg: "bg" }, style: '--fieldset-root-variant: "elevated"' },
        ],
      },
    },
    outline: {
      root: {
        _checked: {
          "--indicator-border-color": "colorScheme.outline",
          "--root-border-color": "colorScheme.outline",
        },
      },
    },
    subtle: {
      indicator: { _checked: { bg: "bg" } },
      root: {
        _checked: {
          "--addon-border-color": "colorScheme.muted",
          "--indicator-border-color": "colorScheme.emphasized",
          "--root-border-color": "transparent",
          bg: "colorScheme.subtle",
        },
      },
    },
    surface: {
      indicator: { _checked: { bg: "bg" } },
      root: {
        _checked: {
          "--indicator-border-color": "colorScheme.emphasized",
          "--root-border-color": "colorScheme.muted",
          bg: "colorScheme.subtle",
        },
      },
    },
  },

  sizes: {
    sm: {
      indicator: radioStyle.sizes?.sm.indicator,
      root: {
        ...radioStyle.sizes?.sm.root,
        "--description-size": "fontSizes.xs",
        "--space-x": "spaces.3",
        "--space-y": "spaces.2",
      },
    },
    md: {
      indicator: radioStyle.sizes?.md.indicator,
      root: {
        ...radioStyle.sizes?.md.root,
        "--description-size": "fontSizes.sm",
        "--space-x": "spaces.4",
        "--space-y": "spaces.3",
      },
    },
    lg: {
      indicator: radioStyle.sizes?.lg.indicator,
      root: {
        ...radioStyle.sizes?.lg.root,
        "--description-size": "fontSizes.md",
        "--space-x": "spaces.5",
        "--space-y": "spaces.4",
      },
    },
    xl: {
      indicator: radioStyle.sizes?.lg.indicator,
      root: {
        ...radioStyle.sizes?.lg.root,
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
    shape: "circle",
  },
})

export type RadioCardStyle = typeof radioCardStyle
