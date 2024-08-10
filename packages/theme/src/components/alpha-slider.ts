import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { HueSlider } from "./hue-slider"

export const AlphaSlider: ComponentMultiStyle<"AlphaSlider"> =
  mergeMultiStyle(HueSlider)()
