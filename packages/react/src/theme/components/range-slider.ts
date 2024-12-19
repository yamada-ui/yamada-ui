import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { Slider } from "./slider"

export const RangeSlider: ComponentMultiStyle<"RangeSlider"> =
  mergeMultiStyle(Slider)()
