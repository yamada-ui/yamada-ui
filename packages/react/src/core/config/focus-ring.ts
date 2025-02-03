import type { Transform } from "./utils"

export function generateFocusRing(selector: string): Transform {
  return function (value, { prev }) {
    const focusRingColor =
      prev?.["--focus-ring-color"] ?? "{colorScheme.outline}"

    switch (value) {
      case "outside":
        return {
          "--focus-ring-color": focusRingColor,
          outlineColor: "var(--focus-ring-color)",
          [selector]: {
            outlineOffset: "var(--focus-ring-offset, 2px)",
            outlineStyle: "var(--focus-ring-style, solid)",
            outlineWidth: "var(--focus-ring-width, 2px)",
          },
        }

      case "inside":
        return {
          "--focus-ring-color": focusRingColor,
          outlineColor: "var(--focus-ring-color)",
          [selector]: {
            borderColor: "var(--focus-ring-color)",
            outlineOffset: "var(--focus-ring-offset, 0px)",
            outlineStyle: "var(--focus-ring-style, solid)",
            outlineWidth: "var(--focus-ring-width, 1px)",
          },
        }

      case "mixed":
        return {
          "--focus-ring-color": focusRingColor,
          outlineColor: "{--focus-ring-color}/60",
          [selector]: {
            borderColor: "var(--focus-ring-color)",
            outlineOffset: "var(--focus-ring-offset, 0px)",
            outlineStyle: "var(--focus-ring-style, solid)",
            outlineWidth: "var(--focus-ring-width, 3px)",
          },
        }

      default:
        return {
          "--focus-ring-color": focusRingColor,
          [selector]: {
            outline: "none",
          },
        }
    }
  }
}
