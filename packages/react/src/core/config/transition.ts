import type { Transform } from "./utils"

const properties: { [key: string]: string[] } = {
  size: ["width", "height"],
  all: ["all"],
  backgrounds: [
    "background",
    "background-color",
    "background-image",
    "background-position",
  ],
  colors: [
    "color",
    "fill",
    "stroke",
    "background-color",
    "border-color",
    // "outline-color",
    "text-decoration-color",
  ],
  common: [
    "color",
    "fill",
    "stroke",
    "background-color",
    "border-color",
    // "outline-color",
    "text-decoration-color",
    "opacity",
    "box-shadow",
    "transform",
    "translate",
    "scale",
    "rotate",
    "filter",
    "backdrop-filter",
  ],
  opacity: ["opacity"],
  position: ["top", "right", "bottom", "left", "inset-inline", "inset-block"],
  shadow: ["box-shadow"],
}

export function generateTransition(
  type: "property" | "transition" = "transition",
): Transform {
  return function (value, { prev }) {
    switch (type) {
      case "transition":
        if (value in properties) {
          return {
            transition: properties[value]?.join(", "),
            transitionDuration: prev?.transitionDuration ?? "200ms",
            transitionTimingFunction:
              prev?.transitionTimingFunction ??
              "cubic-bezier(0.42, 0, 0.58, 1)",
          }
        } else {
          return value
        }
      case "property":
        if (value in properties) {
          return properties[value]?.join(", ")
        } else {
          return value
        }
    }
  }
}
