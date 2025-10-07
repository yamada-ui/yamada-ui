export const THEME = ["default", "scaled", "mono"] as const

export const COLORS = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
] as const

export type ExampleTheme = (typeof COLORS)[number] | (typeof THEME)[number]
