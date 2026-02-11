import { defineComponentSlotStyle } from "../../core"

export const qrCodeStyle = defineComponentSlotStyle({
  base: {
    frame: { boxSize: "{size}", fill: "currentColor" },
    overlay: {
      alignItems: "center",
      bg: "{overlay-bg}",
      boxSize: "{overlay-size}",
      display: "flex",
      justifyContent: "center",
      left: "50%",
      p: "1",
      position: "absolute",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    pattern: {},
    root: {
      "--overlay-bg": "colors.bg",
      "--overlay-size": "calc({size} / 3)",
      position: "relative",
      w: "fit-content",
    },
  },

  sizes: {
    "2xs": { frame: { "--size": "sizes.12" } },
    xs: { frame: { "--size": "sizes.16" } },
    sm: { frame: { "--size": "sizes.20" } },
    md: { frame: { "--size": "sizes.24" } },
    lg: { frame: { "--size": "sizes.32" } },
    xl: { frame: { "--size": "sizes.40" } },
    "2xl": { frame: { "--size": "sizes.48" } },
    "3xl": { frame: { "--size": "sizes.56" } },
    "4xl": { frame: { "--size": "sizes.64" } },
  },

  defaultProps: {
    size: "md",
  },
})

export type QrCodeStyle = typeof qrCodeStyle
