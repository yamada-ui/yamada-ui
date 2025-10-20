import { defineComponentSlotStyle } from "../../core"
import { nativeSelectStyle } from "../native-select"

export const colorSelectorStyle = defineComponentSlotStyle({
  base: {
    alphaSlider: {},
    colorSwatchGroup: {
      display: "grid",
      gap: "1.5",
      gridTemplateColumns: "repeat({color-swatch-group-columns}, 1fr)",
    },
    colorSwatchGroupLabel: {
      fontSize: "sm",
      fontWeight: "medium",
      _disabled: { layerStyle: "disabled" },
    },
    colorSwatchItem: { w: "full", _disabled: { layerStyle: "disabled" } },
    eyeDropper: nativeSelectStyle.base?.icon,
    hueSlider: {},
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      maxW: "full",
      w: "full",
    },
    saturationSlider: {},
  },

  props: {
    /**
     * The shape of the thumb and color swatch.
     *
     * @default 'circle'
     */
    shape: {
      circle: {},
      rounded: {},
      square: { colorSwatchItem: { rounded: "0" } },
    },
  },

  sizes: {
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
  },

  defaultProps: {
    size: "md",
  },
})

export type ColorSelectorStyle = typeof colorSelectorStyle
