import { defineComponentSlotStyle } from "../../core"

export const alertStyle = defineComponentSlotStyle({
  base: {
    description: {
      lineHeight: "shorter",
    },
    icon: {
      boxSize: "5",
      flexShrink: 0,
      fontSize: "xl",
      me: "3",
    },
    loading: {
      flexShrink: 0,
      fontSize: "xl",
      me: "3",
    },
    root: {
      alignItems: "start",
      display: "flex",
      overflow: "hidden",
      position: "relative",
      px: "4",
      py: "3",
      rounded: "l2",
      w: "full",
    },
    title: {
      display: "block",
      lineHeight: "shorter",
      me: "2",
    },
  },

  variants: {
    island: {
      description: {
        color: "fg.muted",
      },
      icon: { color: "colorScheme.solid" },
      root: {
        layerStyle: "panel",
        pl: 7,
        _before: {
          bg: "colorScheme.solid",
          h: "calc(100% - {sizes.5})",
          left: "3",
          position: "absolute",
          rounded: "full",
          top: "50%",
          transform: "translateY(-50%)",
          w: 1,
        },
      },
    },
    plain: {
      description: {
        color: "fg.muted",
      },
      icon: {
        color: "colorScheme.solid",
      },
      root: {
        layerStyle: "panel",
      },
    },
    solid: {
      icon: {
        textStyle: "solid",
      },
      root: {
        layerStyle: "solid",
      },
    },
    subtle: {
      icon: {
        textStyle: "subtle",
      },
      root: {
        layerStyle: "subtle",
      },
    },
    surface: {
      icon: {
        textStyle: "surface",
      },
      root: {
        layerStyle: "surface",
      },
    },
  },

  compounds: [
    {
      css: {
        icon: {
          color: ["colorScheme.600", "colorScheme.400"],
        },
      },
      colorScheme: ["secondary", "gray"],
      variant: "plain",
    },
  ],

  defaultProps: {
    variant: "plain",
  },
})

export type AlertStyle = typeof alertStyle
