import { defineComponentStyle } from "../../core"

export const closeButtonStyle = defineComponentStyle({
  base: {
    rounded: "md",
    _active: {
      bg: ["blackAlpha.200", "whiteAlpha.200"],
    },
    _focusVisible: {
      boxShadow: "outline",
    },
    _hover: {
      bg: ["blackAlpha.100", "whiteAlpha.100"],
    },
    alignItems: "center",
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    outline: 0,
    overflow: "hidden",
    position: "relative",
  },

  props: {
    /**
     * If `true`, the button is full rounded. Else, it'll be slightly round.
     *
     * @default false
     */
    fullRounded: {
      true: {
        rounded: "full",
      },
    },
  },

  sizes: {
    sm: {
      boxSize: 6,
      fontSize: "2xs",
    },
    md: {
      boxSize: 8,
      fontSize: "xs",
    },
    lg: {
      boxSize: 10,
      fontSize: "md",
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type CloseButtonStyle = typeof closeButtonStyle
