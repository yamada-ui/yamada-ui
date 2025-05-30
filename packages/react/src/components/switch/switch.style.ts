import { defineComponentSlotStyle, focusRingStyle } from "../../core"

export const switchStyle = defineComponentSlotStyle({
  base: {
    label: {
      userSelect: "none",
    },
    root: {
      alignItems: "center",
      cursor: "pointer",
      display: "inline-flex",
      gap: "2",
      _readOnly: {
        layerStyle: "readOnly",
        pointerEvents: "none",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    thumb: {
      alignItems: "center",
      bg: "white",
      display: "inline-flex",
      justifyContent: "center",
      position: "absolute",
      rounded: "inherit",
      transitionDuration: "fast",
      transitionProperty: "background, transform",
      _checked: {
        transform: "translateX(100%)",
      },
    },
    track: {
      "--focus-ring-color": "{colorScheme.outline}",
      alignItems: "center",
      bg: "bg.muted",
      boxSizing: "content-box",
      display: "inline-flex",
      flexShrink: 0,
      position: "relative",
      rounded: "full",
      transitionDuration: "fast",
      transitionProperty: "background",
      _peerFocusVisible: {
        ...focusRingStyle.outline,
      },
    },
  },

  variants: {
    thin: {
      thumb: {
        boxShadow: "2xl",
        _checked: {
          bg: "colorScheme.solid",
        },
      },
      track: {
        "--focus-ring-offset": "4px",
        _checked: {
          bg: ["colorScheme.muted", "colorScheme.subtle"],
        },
      },
    },
    thick: {
      thumb: {
        _checked: {
          bg: "colorScheme.contrast",
        },
      },
      track: {
        p: "1",
        _checked: {
          bg: "colorScheme.solid",
        },
      },
    },
  },

  sizes: {
    sm: {
      label: { fontSize: "sm" },
      thumb: { boxSize: "3" },
      track: { w: "6" },
    },
    md: {
      label: { fontSize: "md" },
      thumb: { boxSize: "4" },
      track: { w: "8" },
    },
    lg: {
      label: { fontSize: "lg" },
      thumb: { boxSize: "5" },
      track: { w: "10" },
    },
  },

  props: {
    /**
     * Change switch label from right to left.
     *
     * @default false
     */
    reverse: {
      false: {
        root: { flexDirection: "row" },
      },
      true: {
        root: { flexDirection: "row-reverse" },
      },
    },
    /**
     * The shape of the switch.
     *
     * @default circle
     */
    shape: {
      circle: {
        track: { rounded: "full" },
      },
      rounded: {
        thumb: { rounded: "l1" },
        track: { rounded: "l2" },
      },
      square: {
        track: { rounded: "0" },
      },
    },
  },

  compounds: [
    {
      css: {
        track: { h: "3" },
      },
      size: "sm",
      variant: "thick",
    },
    {
      css: {
        track: { h: "4" },
      },
      size: "md",
      variant: "thick",
    },
    {
      css: {
        track: { h: "5" },
      },
      size: "lg",
      variant: "thick",
    },
    {
      css: {
        track: { h: "2" },
      },
      size: "sm",
      variant: "thin",
    },
    {
      css: {
        track: { h: "3" },
      },
      size: "md",
      variant: "thin",
    },
    {
      css: {
        track: { h: "4" },
      },
      size: "lg",
      variant: "thin",
    },
  ],

  defaultProps: {
    size: "md",
    variant: "thick",
    shape: "circle",
  },
})

export type SwitchStyle = typeof switchStyle
