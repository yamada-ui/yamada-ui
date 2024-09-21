export interface Config {
  key: string
  replaceKey?: string
  maxScanDepth?: number
  omitScanKeys?: string[]
  flatMap?: (value: string) => string | string[]
}

export const config: Config[] = [
  { key: "borders" },
  { key: "breakpoints" },
  { key: "colors" },
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
  { key: "animations", omitScanKeys: ["keyframes"] },
  { key: "gradients" },
  { key: "transitions.property", replaceKey: "transitionProperty" },
  { key: "transitions.duration", replaceKey: "transitionDuration" },
  { key: "transitions.easing", replaceKey: "transitionEasing" },
]
