import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { HueSlider } from "./hue-slider"

export const AlphaSlider: ComponentMultiStyle = mergeMultiStyle(HueSlider, {
  baseStyle: {
    container: {
      position: "relative",
    },
    thumb: {
      position: "relative",
      w: "100%",
      h: "100%",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
})()
