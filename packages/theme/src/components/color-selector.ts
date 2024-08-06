import type { ComponentMultiStyle } from "@yamada-ui/core"

export const ColorSelector: ComponentMultiStyle<"ColorSelector"> = {
  baseStyle: {
    container: { w: "full" },
    saturationSlider: { maxW: "full" },
    body: {},
    sliders: { flex: "1" },
    hueSlider: {},
    alphaSlider: {},
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
    result: {},
    channels: {},
    channelLabel: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontWeight: "medium",
    },
    channel: {},
    swatchesLabel: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontWeight: "medium",
    },
    swatches: {},
    swatch: {
      _readOnly: { cursor: "auto" },
      _disabled: {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    },
  },

  sizes: {
    sm: {
      container: { w: "xs", gap: "sm" },
      body: { gap: "xs" },
      sliders: { gap: "xs" },
      channels: { gap: "xs" },
      eyeDropper: { boxSize: "7", fontSize: "xs" },
      result: { boxSize: "7" },
      channelLabel: { fontSize: "xs" },
      swatchesLabel: { fontSize: "xs" },
      swatches: { gap: "xs" },
    },
    md: {
      container: { w: "sm", gap: "sm" },
      body: { gap: "sm" },
      sliders: { gap: "sm" },
      channels: { gap: "sm" },
      eyeDropper: { boxSize: "10" },
      result: { boxSize: "10" },
      channelLabel: { fontSize: "sm", mb: "xs" },
      swatchesLabel: { fontSize: "sm", mb: "xs" },
      swatches: { gap: "sm" },
    },
    lg: {
      container: { w: "md", gap: "md" },
      body: { gap: "sm" },
      sliders: { gap: "sm" },
      channels: { gap: "sm" },
      eyeDropper: { boxSize: "12", fontSize: "xl" },
      result: { boxSize: "12" },
      channelLabel: { fontSize: "md", mb: "xs" },
      swatchesLabel: { fontSize: "md", mb: "xs" },
      swatches: { gap: "sm" },
    },
    full: {
      container: { w: "full", gap: "md" },
      body: { gap: "sm" },
      sliders: { gap: "sm" },
      channels: { gap: "sm" },
      eyeDropper: { boxSize: "12", fontSize: "xl" },
      result: { boxSize: "12" },
      channelLabel: { fontSize: "md", mb: "xs" },
      swatchesLabel: { fontSize: "md", mb: "xs" },
      swatches: { gap: "sm" },
    },
  },

  defaultProps: {
    size: "md",
  },
}
