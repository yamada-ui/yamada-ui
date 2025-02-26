import type { ComponentMultiStyle } from "../../core"

export const ColorSelector: ComponentMultiStyle<"ColorSelector"> = {
  baseStyle: {
    alphaSlider: {},
    body: {},
    channel: {},
    channelLabel: {
      color: "muted",
      fontWeight: "medium",
    },
    channels: {},
    container: {
      display: "flex",
      flexDirection: "column",
      w: "full",
    },
    eyeDropper: {
      borderColor: "border",
      color: ["blackAlpha.600", "whiteAlpha.700"],
      _hover: {
        borderColor: ["blackAlpha.500", "whiteAlpha.400"],
        _disabled: {
          borderColor: "inherit",
        },
      },
    },
    hueSlider: {},
    result: {},
    saturationSlider: { maxW: "full" },
    sliders: { flex: "1" },
    swatch: {
      _readOnly: { cursor: "auto" },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.6,
      },
    },
    swatches: {},
    swatchesLabel: {
      color: "muted",
      fontWeight: "medium",
    },
  },

  sizes: {
    sm: {
      body: { gap: "xs" },
      channelLabel: { fontSize: "xs" },
      channels: { gap: "xs" },
      container: { gap: "sm", w: "xs" },
      eyeDropper: { boxSize: "7", fontSize: "xs" },
      result: { boxSize: "7" },
      sliders: { gap: "xs" },
      swatches: { gap: "xs" },
      swatchesLabel: { fontSize: "xs" },
    },
    md: {
      body: { gap: "sm" },
      channelLabel: { fontSize: "sm", mb: "xs" },
      channels: { gap: "sm" },
      container: { gap: "sm", w: "sm" },
      eyeDropper: { boxSize: "10" },
      result: { boxSize: "10" },
      sliders: { gap: "sm" },
      swatches: { gap: "sm" },
      swatchesLabel: { fontSize: "sm", mb: "xs" },
    },
    lg: {
      body: { gap: "sm" },
      channelLabel: { fontSize: "md", mb: "xs" },
      channels: { gap: "sm" },
      container: { gap: "md", w: "md" },
      eyeDropper: { boxSize: "12", fontSize: "xl" },
      result: { boxSize: "12" },
      sliders: { gap: "sm" },
      swatches: { gap: "sm" },
      swatchesLabel: { fontSize: "md", mb: "xs" },
    },
    full: {
      body: { gap: "sm" },
      channelLabel: { fontSize: "md", mb: "xs" },
      channels: { gap: "sm" },
      container: { gap: "md", w: "full" },
      eyeDropper: { boxSize: "12", fontSize: "xl" },
      result: { boxSize: "12" },
      sliders: { gap: "sm" },
      swatches: { gap: "sm" },
      swatchesLabel: { fontSize: "md", mb: "xs" },
    },
  },

  defaultProps: {
    size: "md",
  },
}
