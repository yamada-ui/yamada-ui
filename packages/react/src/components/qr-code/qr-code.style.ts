import { defineComponentSlotStyle } from "../../core"

export const qrCodeStyle = defineComponentSlotStyle({
  base: {
    frame: {},
    overlay: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      left: "50%",
      position: "absolute",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    root: {
      position: "relative",
    },
  },

  sizes: {
    "2xs": {
      frame: {
        h: "16",
        w: "16",
      },
    },
    xs: {
      frame: {
        h: "20",
        w: "20",
      },
    },
    sm: {
      frame: {
        h: "24",
        w: "24",
      },
    },
    md: {
      frame: {
        h: "32",
        w: "32",
      },
    },
    lg: {
      frame: {
        h: "40",
        w: "40",
      },
    },
    xl: {
      frame: {
        h: "48",
        w: "48",
      },
    },
    "2xl": {
      frame: {
        h: "56",
        w: "56",
      },
    },
  },

  defaultProps: {
    size: "md",
  },
})

export type QrCodeStyle = typeof qrCodeStyle
