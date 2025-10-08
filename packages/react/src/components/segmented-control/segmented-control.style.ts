import { defineComponentSlotStyle, focusRingStyle } from "../../core"

export const segmentedControlStyle = defineComponentSlotStyle({
  base: {
    item: {
      "&:has(input:focus-visible)": {
        ...focusRingStyle.outline,
      },
      alignItems: "center",
      color: "fg",
      cursor: "pointer",
      display: "inline-flex",
      flex: "1 1 0%",
      fontWeight: "medium",
      justifyContent: "center",
      position: "relative",
      rounded: "md",
      transitionDuration: "moderate",
      transitionProperty: "color, opacity",
      whiteSpace: "nowrap",
      _checked: {
        anchorName: "--checked",
      },
      _readOnly: { layerStyle: "readOnly", pointerEvents: "none" },
      _disabled: {
        layerStyle: "disabled",
        "&[data-root-disabled]": { opacity: 1 },
      },
    },
    root: {
      alignItems: "center",
      anchorScope: "--checked",
      bg: "bg.subtle",
      display: "inline-flex",
      p: "1",
      rounded: "lg",
      _before: {
        bg: "bg",
        boxShadow: "xs",
        h: "anchor-size(--checked height)",
        left: "anchor(--checked left)",
        pointerEvents: "none",
        position: "absolute",
        rounded: "md",
        top: "anchor(--checked top)",
        transitionDuration: "moderate",
        w: "anchor-size(--checked width)",
      },
      _readOnly: { layerStyle: "readOnly" },
      _disabled: { layerStyle: "disabled" },
    },
  },

  props: {
    /**
     * If `true`, the segmented control will be full rounded.
     *
     * @default false
     */
    fullRounded: {
      true: {
        item: {
          rounded: "full",
        },
        root: {
          rounded: "full",
          _before: {
            rounded: "full",
          },
        },
      },
    },
    /**
     * The orientation of the segmented control.
     *
     * @default 'horizontal'
     */
    orientation: {
      horizontal: {
        item: {
          h: "full",
        },
        root: {
          flexDirection: "row",
          _before: {
            transitionProperty: "left, width",
          },
        },
      },
      vertical: {
        item: {
          w: "full",
        },
        root: {
          flexDirection: "column",
          _before: {
            transitionProperty: "top, height",
          },
        },
      },
    },
  },

  sizes: {
    sm: {
      item: { fontSize: "sm", px: "3", _vertical: { minH: "7" } },
      root: {
        _horizontal: { h: "9", minW: "64" },
      },
    },
    md: {
      item: { fontSize: "md", px: "3", _vertical: { minH: "8" } },
      root: {
        _horizontal: { h: "10", minW: "80" },
        _vertical: {},
      },
    },
    lg: {
      item: { fontSize: "lg", px: "4", _vertical: { minH: "9" } },
      root: {
        _horizontal: { h: "11", minW: "96" },
        _vertical: {},
      },
    },
    xl: {
      item: { fontSize: "xl", px: "5", _vertical: { minH: "10" } },
      root: {
        _horizontal: { h: "12", minW: "96" },
        _vertical: {},
      },
    },
  },

  defaultProps: {
    size: "md",
    orientation: "horizontal",
  },
})

export type SegmentedControlStyle = typeof segmentedControlStyle
