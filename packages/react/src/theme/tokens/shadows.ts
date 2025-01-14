import type { ThemeTokens } from "../../core"

export const shadows: ThemeTokens = {
  xs: [
    "0 1px 2px {colors.black/20}, 0px 0px 1px {colors.black/20}",
    "0px 1px 1px {colors.black/80}",
  ],
  sm: [
    "0px 2px 4px {colors.black/10}, 0px 0px 1px {colors.black/30}",
    "0px 2px 4px {colors.black/80}",
  ],
  md: [
    "0px 4px 8px {colors.black/10}, 0px 0px 1px {colors.black/30}",
    "0px 4px 8px {colors.black/80}",
  ],
  lg: [
    "0px 8px 16px {colors.black/10}, 0px 0px 1px {colors.black/30}",
    "0px 8px 16px {colors.black/80}",
  ],
  xl: [
    "0px 16px 24px {colors.black/10}, 0px 0px 1px {colors.black/30}",
    "0px 16px 24px {colors.black/80}",
  ],
  "2xl": [
    "0px 24px 40px {colors.black/20}, 0px 0px 1px {colors.black/30}",
    "0px 24px 40px {colors.black/80}",
  ],
  inner: ["inset 0 2px 4px 0 {colors.black/10}", "inset 0 2px 4px 0 black"],
  inset: [
    "inset 0 0 0 1px {colors.black/5}",
    "inset 0 0 0 1px {colors.white/5}",
  ],
}
