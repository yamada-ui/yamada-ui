import type { Transform } from "./utils"

export function generateFilter(
  type: "backdrop" | "filter" = "filter",
): Transform {
  return function (value) {
    if (value !== "auto") return value

    if (type === "filter") {
      return [
        "var(--ui-blur, /*!*/ /*!*/)",
        "var(--ui-brightness, /*!*/ /*!*/)",
        "var(--ui-contrast, /*!*/ /*!*/)",
        "var(--ui-drop-shadow, /*!*/ /*!*/)",
        "var(--ui-grayscale, /*!*/ /*!*/)",
        "var(--ui-hue-rotate, /*!*/ /*!*/)",
        "var(--ui-invert, /*!*/ /*!*/)",
        "var(--ui-opacity, /*!*/ /*!*/)",
        "var(--ui-saturate, /*!*/ /*!*/)",
        "var(--ui-sepia, /*!*/ /*!*/)",
      ].join(" ")
    } else {
      return [
        "var(--ui-backdrop-blur, /*!*/ /*!*/)",
        "var(--ui-backdrop-brightness, /*!*/ /*!*/)",
        "var(--ui-backdrop-contrast, /*!*/ /*!*/)",
        "var(--ui-backdrop-drop-shadow, /*!*/ /*!*/)",
        "var(--ui-backdrop-grayscale, /*!*/ /*!*/)",
        "var(--ui-backdrop-hue-rotate, /*!*/ /*!*/)",
        "var(--ui-backdrop-invert, /*!*/ /*!*/)",
        "var(--ui-backdrop-opacity, /*!*/ /*!*/)",
        "var(--ui-backdrop-saturate, /*!*/ /*!*/)",
        "var(--ui-backdrop-sepia, /*!*/ /*!*/)",
      ].join(" ")
    }
  }
}
