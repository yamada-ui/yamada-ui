import type { Dict } from "@yamada-ui/utils"

export interface Config {
  key: string
  flatMap?: (value: string) => string | string[]
  maxDepth?: number
  replaceKey?: (key: string) => string
  shouldProcess?: (obj: Dict) => boolean
}

export const config: Config[] = [
  { key: "borders" },
  { key: "breakpoints" },
  { key: "colors", replaceKey: (key) => key.replace(/.base$/, "") },
  { key: "fonts" },
  { key: "fontSizes" },
  { key: "fontWeights" },
  { key: "letterSpacings" },
  { key: "lineHeights" },
  { key: "radii" },
  { key: "shadows" },
  { key: "blurs" },
  { key: "sizes" },
  { key: "spaces", flatMap: (value) => [value, `-${value}`] },
  { key: "zIndices" },
  { key: "animations", shouldProcess: (obj) => !obj.keyframes },
  { key: "gradients" },
  { key: "easings" },
  { key: "durations" },
  { key: "aspectRatios" },
  { key: "aspectRatios" },
  { key: "keyframes", maxDepth: 1 },
]
