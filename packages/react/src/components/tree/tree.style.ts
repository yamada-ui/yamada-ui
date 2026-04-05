import { defineComponentSlotStyle, focusRingStyle } from "../../core"
import { checkboxStyle } from "../checkbox"

export const treeStyle = defineComponentSlotStyle({
  base: {
    checkbox: { "--indicator-bg": "colors.bg" },
    element: {
      color: "{element-color}",
      display: "inline-center",
      gap: "{space}",
    },
    end: {},
    group: { alignItems: "stretch", display: "flex", flexDirection: "column" },
    indicator: {
      color: "{element-color}",
      transformOrigin: "center",
      _animated: {
        transitionDuration: "moderate",
        transitionProperty: "transform",
      },
      _expanded: { transform: "rotate(90deg)" },
      _hidden: { opacity: "0" },
    },
    item: {
      "--element-color": "colors.fg.subtle",
      "--space": "spaces.1",
      "--space-start": "calc({depth-space} * ({level} - 1))",
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
      focusVisibleRing: "none",
      _content: {
        alignItems: "center",
        border: "1px solid transparent",
        cursor: "pointer",
        display: "flex",
        gap: "{gap}",
        pe: "{space}",
        ps: "calc({space-start} + {space})",
        rounded: "{rounded}",
        userSelect: "none",
        _hover: { bg: "bg.subtle" },
      },
      _focusVisible: {
        _content: { bg: "bg.subtle", ...focusRingStyle.inside },
      },
      _disabled: { _content: { layerStyle: "disabled" } },
    },
    label: { flex: "1", textAlign: "left", truncated: true },
    root: {
      alignItems: "stretch",
      display: "flex",
      flexDirection: "column",
    },
    start: {},
  },

  props: {
    /**
     * The shape of the component
     *
     * @default 'rounded'
     */
    shape: {
      circle: {
        item: { "--rounded": "radii.full" },
      },
      rounded: {
        item: { "--rounded": "radii.l1" },
      },
      square: {
        item: { "--rounded": "0" },
      },
    },
    /**
     * If `true`, display guide lines.
     *
     * @default false
     */
    withGuideLine: {
      true: {
        group: {
          position: "relative",
          _before: {
            bg: "{guide-line-color}",
            display: "block",
            h: "full",
            left: "calc({space-guide-line} + {depth-space})",
            position: "absolute",
            transform: "translateX(-50%)",
            w: "px",
            zIndex: "yamcha",
          },
        },
        item: {
          "--space-guide-line": "calc(({space-start} * 2) + {space})",
          _content: { ps: "{space-guide-line}" },
        },
        root: { "--guide-line-color": "colors.border" },
      },
    },
  },

  variants: {
    solid: {
      checkbox: {
        ...checkboxStyle.variants?.solid.root,
        _indicator: checkboxStyle.variants?.solid.indicator,
        _selected: {
          _checked: { "--indicator-border-color": "colorScheme.contrast" },
          _indicator: {
            color: "colorScheme.solid",
            _checked: { bg: "colorScheme.contrast" },
            _indeterminate: { bg: "colorScheme.contrast" },
          },
        },
      },
      item: {
        _selected: {
          _content: {
            layerStyle: "solid",
            "--element-color": "colorScheme.contrast",
          },
          _focusVisible: {
            _content: { borderColor: "{focus-ring-color}" },
          },
        },
      },
    },
    subtle: {
      checkbox: {
        ...checkboxStyle.variants?.solid.root,
        _indicator: checkboxStyle.variants?.solid.indicator,
      },
      item: {
        _selected: {
          _content: {
            layerStyle: "subtle",
            "--element-color": "colorScheme.fg",
          },
          _focusVisible: {
            _content: { borderColor: "{focus-ring-color}" },
          },
        },
      },
    },
  },

  sizes: {
    sm: {
      item: { "--depth-space": "spaces.1.5", "--gap": "spaces.1.5" },
      root: { fontSize: "sm" },
    },
    md: {
      item: { "--depth-space": "spaces.2", "--gap": "spaces.2" },
      root: { fontSize: "md" },
    },
    lg: {
      item: { "--depth-space": "spaces.2", "--gap": "spaces.2" },
      root: { fontSize: "lg" },
    },
  },

  defaultProps: {
    size: "md",
    variant: "subtle",
    shape: "rounded",
    withGuideLine: false,
  },
})

export type TreeStyle = typeof treeStyle
