import type { CSSObject } from "../css"
import type { Transform } from "./utils"

export const focusRingStyle = {
  inline: {
    borderColor: "var(--focus-ring-color)",
    outlineOffset: "var(--focus-ring-offset, -5px)",
    outlineStyle: "var(--focus-ring-style, solid)",
    outlineWidth: "var(--focus-ring-width, 1px)",
  },
  inside: {
    borderColor: "var(--focus-ring-color)",
    boxShadow: "inset 0 0 0 1px var(--focus-ring-color)",
    outlineOffset: "inherit",
    outlineStyle: "inherit",
    outlineWidth: "inherit",
  },
  mixed: {
    borderColor: "var(--focus-ring-color)",
    outlineOffset: "var(--focus-ring-offset, 0px)",
    outlineStyle: "var(--focus-ring-style, solid)",
    outlineWidth: "var(--focus-ring-width, 2px)",
  },
  none: {
    outline: "none",
  },
  outline: {
    outlineOffset: "var(--focus-ring-offset, 2px)",
    outlineStyle: "var(--focus-ring-style, solid)",
    outlineWidth: "var(--focus-ring-width, 2px)",
  },
  outside: {
    borderColor: "var(--focus-ring-color)",
    boxShadow: "0 0 0 1px var(--focus-ring-color)",
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
      [selector]: {
        ...(value in focusRingStyle
          ? focusRingStyle[value as keyof typeof focusRingStyle]
          : focusRingStyle.none),
      },
    }

    if (["mixed", "outline", "outside"].includes(value)) {
      result[selector].outlineColor = "var(--focus-ring-color)"
    }

    return result
  }
}
