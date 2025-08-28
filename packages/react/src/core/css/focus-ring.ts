import type { CSSObject } from "./index.types"
import type { Transform } from "./utils"

export const focusRingStyle = {
  inline: {
    outlineOffset: "{focus-ring-offset, -5px}",
    outlineStyle: "{focus-ring-style, solid}",
    outlineWidth: "{focus-ring-width, 1px}",
  },
  inside: {
    borderColor: "{focus-ring-color}",
    boxShadow: "inset 0 0 0 1px {focus-ring-color}",
    outlineOffset: "inherit",
    outlineStyle: "inherit",
    outlineWidth: "inherit",
  },
  mixed: {
    borderColor: "{focus-ring-color}",
    outlineOffset: "{focus-ring-offset, 0px}",
    outlineStyle: "{focus-ring-style, solid}",
    outlineWidth: "{focus-ring-width, 2px}",
  },
  none: {
    outline: "none",
  },
  outline: {
    outlineOffset: "{focus-ring-offset, 2px}",
    outlineStyle: "{focus-ring-style, solid}",
    outlineWidth: "{focus-ring-width, 2px}",
  },
  outside: {
    borderColor: "{focus-ring-color}",
    boxShadow: "0 0 0 1px {focus-ring-color}",
    outlineOffset: "inherit",
    outlineStyle: "inherit",
    outlineWidth: "inherit",
  },
} satisfies { [key: string]: CSSObject }

export function generateFocusRing(selector: string): Transform {
  return function (value, { prev }) {
    const focusRingColor =
      prev?.["--focus-ring-color"] ?? "{colorScheme.outline}"

    const result = {
      "--focus-ring-color": focusRingColor,
      outlineColor: "{focus-ring-color}",
      [selector]: {
        ...(value in focusRingStyle
          ? focusRingStyle[value as keyof typeof focusRingStyle]
          : focusRingStyle.none),
      },
    }

    return result
  }
}
