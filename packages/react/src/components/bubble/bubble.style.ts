import { defineComponentSlotStyle } from "../../core"

export const bubbleStyle = defineComponentSlotStyle({
  base: {
    content: {
      maxW: "full",
      minW: "0",
      overflowWrap: "anywhere",
      py: "{space-y}",
      rounded: "calc(0.5lh + {space-y} + 1px)",
      textAlign: "start",
      whiteSpace: "pre-wrap",
    },
    group: {
      display: "flex",
      flexDirection: "column",
      gap: "sm",
      minW: "0",
      w: "full",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      maxW: "4/5",
      minW: "0",
      position: "relative",
      w: "fit-content",
      _end: {
        alignSelf: "flex-end",
        me: "0",
        ms: "auto",
      },
      _start: {
        alignSelf: "flex-start",
        me: "auto",
        ms: "0",
      },
    },
    reactions: {
      "&[data-placement$=center]": {
        insetInline: "0",
        mx: "auto",
      },
      "&[data-placement$=end]": {
        insetInlineEnd: "3",
      },
      "&[data-placement$=start]": {
        insetInlineStart: "3",
      },
      "&[data-placement^=end]": {
        insetBlockEnd: "-2",
        translateY: "50%",
      },
      "&[data-placement^=start]": {
        insetBlockStart: "-2",
        translateY: "-50%",
      },
      alignItems: "center",
      bg: "bg.panel",
      borderColor: "bg",
      display: "flex",
      gap: "xs",
      lineHeight: "normal",
      position: "absolute",
      px: "1.5",
      py: "0.5",
      rounded: "full",
      w: "max-content",
      zIndex: "1",
    },
    root: {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      gap: "xl",
      minW: "0",
      w: "full",
    },
  },

  variants: {
    ghost: {
      content: {
        bg: "transparent",
        borderColor: "transparent",
        rounded: "0",
      },
      item: { maxW: "full", w: "full" },
    },
    outline: { content: { layerStyle: "outline" } },
    panel: { content: { bg: "bg.panel" } },
    solid: { content: { layerStyle: "solid" } },
    subtle: { content: { layerStyle: "subtle" } },
    surface: { content: { layerStyle: "surface" } },
  },

  sizes: {
    sm: {
      content: { "--space-y": "spaces.2", fontSize: "sm", px: "3" },
      reactions: { borderWidth: "3px", fontSize: "xs" },
    },
    md: {
      content: { "--space-y": "spaces.3", fontSize: "md", px: "4" },
      reactions: { borderWidth: "5px", fontSize: "sm" },
    },
    lg: {
      content: { "--space-y": "spaces.4", fontSize: "lg", px: "5" },
      reactions: { borderWidth: "5px", fontSize: "md" },
    },
  },

  compounds: [
    {
      css: { content: { px: "0", py: "0" } },
      variant: "ghost",
    },
  ],

  defaultProps: {
    size: "md",
    variant: "panel",
  },
})

export type BubbleStyle = typeof bubbleStyle
