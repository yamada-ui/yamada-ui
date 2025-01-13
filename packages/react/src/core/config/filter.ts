import type { Transform } from "./utils"

export function generateFilter(
  type: "backdrop" | "filter" = "filter",
): Transform {
  return function (value) {
    if (value !== "auto") return value

    switch (type) {
      case "filter":
        return [
          "var(--blur, /*!*/ /*!*/)",
          "var(--brightness, /*!*/ /*!*/)",
          "var(--contrast, /*!*/ /*!*/)",
          "var(--drop-shadow, /*!*/ /*!*/)",
          "var(--grayscale, /*!*/ /*!*/)",
          "var(--hue-rotate, /*!*/ /*!*/)",
          "var(--invert, /*!*/ /*!*/)",
          "var(--opacity, /*!*/ /*!*/)",
          "var(--saturate, /*!*/ /*!*/)",
          "var(--sepia, /*!*/ /*!*/)",
        ].join(" ")
      case "backdrop":
        return [
          "var(--backdrop-blur, /*!*/ /*!*/)",
          "var(--backdrop-brightness, /*!*/ /*!*/)",
          "var(--backdrop-contrast, /*!*/ /*!*/)",
          "var(--backdrop-drop-shadow, /*!*/ /*!*/)",
          "var(--backdrop-grayscale, /*!*/ /*!*/)",
          "var(--backdrop-hue-rotate, /*!*/ /*!*/)",
          "var(--backdrop-invert, /*!*/ /*!*/)",
          "var(--backdrop-opacity, /*!*/ /*!*/)",
          "var(--backdrop-saturate, /*!*/ /*!*/)",
          "var(--backdrop-sepia, /*!*/ /*!*/)",
        ].join(" ")
      default:
        return value
    }
  }
}
