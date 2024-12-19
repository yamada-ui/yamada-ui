import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { HueSlider } from "./hue-slider"

export const AlphaSlider: ComponentMultiStyle<"AlphaSlider"> =
  mergeMultiStyle(HueSlider)()
