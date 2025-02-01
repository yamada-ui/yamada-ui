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
      marginEnd: "3",
    },
    loading: {
      flexShrink: 0,
      fontSize: "xl",
      marginEnd: "3",
    },
    root: {
      alignItems: "start",
      display: "flex",
      overflow: "hidden",
      position: "relative",
      px: "4",
      py: "3",
      rounded: "md",
      w: "full",
    },
    title: {
      display: "block",
      lineHeight: "shorter",
      marginEnd: "2",
    },
  },

  variants: {
    basic: {
      description: {
        color: "fg.muted",
      },
      icon: {
        color: "colorScheme.solid",
      },
      root: {
        bg: "bg",
        borderWidth: "1px",
      },
    },
    island: {
      description: {
        color: "fg.muted",
      },
      icon: { color: "colorScheme.solid" },
      root: {
        bg: "bg",
        borderWidth: "1px",
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

  defaultProps: {
    variant: "basic",
  },
})

export type AlertStyle = typeof alertStyle
