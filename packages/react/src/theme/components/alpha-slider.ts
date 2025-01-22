import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { HueSlider } from "./hue-slider"

export const AlphaSlider: ComponentMultiStyle<"AlphaSlider"> = mergeMultiStyle(
  HueSlider,
  {
    baseStyle: {
      container: {
        position: "relative",
      },
      overlay: {
        bottom: 0,
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
      },
      track: {
        h: "100%",
        position: "relative",
        w: "100%",
      },
    },
  },
)()
